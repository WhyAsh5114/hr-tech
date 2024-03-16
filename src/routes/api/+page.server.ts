import { Octokit, App } from "@octokit/core";

export const load = async () => {
  const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });

  let obj = { total: 0  };

  const { data } = await octokit.request(
    "GET /repos/WhyAsh5114/MyFit/commits",
    { type: "public" }
  );

  await octokit.request('GET /rate_limit', {
    headers: {
      'X-GitHub-Api-Version': '2022-11-28'
    }
  })

  // const { issues } = await octokit.request("GET /repos/WhyAsh5114/MyFit/issues", {
  //   headers: {
  //     "X-GitHub-Api-Version": "2022-11-28",
  //   },
  // });

  let total = 0;

  data.forEach((element) => {
    if (element.committer.login === "WhyAsh5114") {
      total += 1;
    }
  });
};
