import fs from "fs";
import pdf from "pdf-parse";

type EmployeeData = {
  name: string;
  skills: string[];
  experience: number;
  image: string | null;
  designation: string;
  resume: string;
  email: string;
};

const skills = [
  "TypeScript",
  "JavaScript",
  "Linux",
  "Svelte",
  "SvelteKit",
  "Next",
  "React",
];

function calculateTotalYears(text: string): number {
  // Regular expression to match date ranges like "Month Year – Month Year"
  const dateRangeRegex =
    /(?:Jan(?:uary)?|Feb(?:ruary)?|Mar(?:ch)?|Apr(?:il)?|May|Jun(?:e)?|Jul(?:y)?|Aug(?:ust)?|Sep(?:tember)?|Oct(?:ober)?|Nov(?:ember)?|Dec(?:ember)?|JAN(?:UARY)?|FEB(?:RUARY)?|MAR(?:CH)?|APR(?:IL)?|MAY|JUN(?:E)?|JUL(?:Y)?|AUG(?:UST)?|SEP(?:TEMBER)?|OCT(?:OBER)?|NOV(?:EMBER)?|DEC(?:EMBER)?)\s+\d{4}\s*–\s*(?:Jan(?:uary)?|Feb(?:ruary)?|Mar(?:ch)?|Apr(?:il)?|May|Jun(?:e)?|Jul(?:y)?|Aug(?:ust)?|Sep(?:tember)?|Oct(?:ober)?|Nov(?:ember)?|Dec(?:ember)?|JAN(?:UARY)?|FEB(?:RUARY)?|MAR(?:CH)?|APR(?:IL)?|MAY|JUN(?:E)?|JUL(?:Y)?|AUG(?:UST)?|SEP(?:TEMBER)?|OCT(?:OBER)?|NOV(?:EMBER)?|DEC(?:EMBER)?)\s+\d{4}/gi;

  let totalYears = 0;

  // Extracting date ranges from the text and calculating the total years
  const matches = text.matchAll(dateRangeRegex);
  if (!matches) {
    return totalYears;
  }

  for (const match of matches) {
    const matchResult = match[0].match(
      /(Jan(?:uary)?|Feb(?:ruary)?|Mar(?:ch)?|Apr(?:il)?|May|Jun(?:e)?|Jul(?:y)?|Aug(?:ust)?|Sep(?:tember)?|Oct(?:ober)?|Nov(?:ember)?|Dec(?:ember)?|JAN(?:UARY)?|FEB(?:RUARY)?|MAR(?:CH)?|APR(?:IL)?|MAY|JUN(?:E)?|JUL(?:Y)?|AUG(?:UST)?|SEP(?:TEMBER)?|OCT(?:OBER)?|NOV(?:EMBER)?|DEC(?:EMBER)?)\s+(\d{4})\s*–\s*(Jan(?:uary)?|Feb(?:ruary)?|Mar(?:ch)?|Apr(?:il)?|May|Jun(?:e)?|Jul(?:y)?|Aug(?:ust)?|Sep(?:tember)?|Oct(?:ober)?|Nov(?:ember)?|Dec(?:ember)?|JAN(?:UARY)?|FEB(?:RUARY)?|MAR(?:CH)?|APR(?:IL)?|MAY|JUN(?:E)?|JUL(?:Y)?|AUG(?:UST)?|SEP(?:TEMBER)?|OCT(?:OBER)?|NOV(?:EMBER)?|DEC(?:EMBER)?)\s+(\d{4})/i
    );
    if (!matchResult) {
      continue; // Skip this iteration if no match is found
    }

    const [_, startMonth, startYear, endMonth, endYear] = matchResult;

    const startTimestamp = Number(new Date(`${startMonth} ${startYear}`));
    const endTimestamp = Number(new Date(`${endMonth} ${endYear}`));

    // Calculating the duration in milliseconds
    const durationInMs = endTimestamp - startTimestamp;

    // Calculating the duration in years
    const durationInYears = durationInMs / (1000 * 60 * 60 * 24 * 365.25);

    // Adding the duration to the total years
    totalYears += durationInYears;
  }

  return totalYears;
}

function extractEmails(resumeText: string): string[] {
  const emailRegex = /[\w\.-]+@[\w\.-]+\.\w+/g;
  const emails = resumeText.match(emailRegex);
  return emails ? emails : [];
}

export const load = async () => {
  let resumes = fs.readdirSync("./static/resumes");
  const employeeData: EmployeeData[] = await Promise.all(
    resumes.map(async (resume) => {
      const dataBuffer = fs.readFileSync(`./static/resumes/${resume}`);
      const txt = (await pdf(dataBuffer)).text;

      const lines = txt.split("\n");
      const name = lines.find((line) => line.trim() !== "")?.trim() ?? "";
      const designation =
        lines.find((line) => line.trim() !== "" && line.trim() !== name) ?? "";

      let image: string | null = `${name}.jpeg`;
      if (!fs.readdirSync("./static/profilePictures").includes(image)) {
        image = null;
      } else {
        image = "/profilePictures/" + image;
      }

      return {
        name,
        skills: skills.filter((skill) => txt.includes(skill)),
        experience: calculateTotalYears(txt),
        image,
        designation,
        resume,
        email: extractEmails(txt)[0],
      };
    })
  );

  return { employeeData, skills };
};
