import { Octokit, App } from "@octokit/core";

export const load = async () => {
  const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });
  
  const { data } = await octokit.request('GET /repos/WhyAsh5114/MyFit/commits', { type: 'public' })
  
  let total = 0;
  
  data.forEach((element) => {
    if(element.committer.login==="WhyAsh5114") {
      total += 1;
    }
  })

  console.log(total);
  
}
