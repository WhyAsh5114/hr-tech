import fs from "fs";
import pdf from "pdf-parse";

export const load = async () => {
  let dataBuffer = fs.readFileSync("./static/SundaramKrishnanResume.pdf");
  pdf(dataBuffer).then(function (data) {
    console.log(data.numpages);
    console.log(data.numrender);
    console.log(data.info);
    console.log(data.metadata);
    console.log(data.version);
    console.log(data.text);
  });
  return {}
};
