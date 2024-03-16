import { Octokit, App } from "octokit";

export const load = async () => {
  const octokit = new Octokit({ auth: `personal-access-token123` });

const {
  data: { login },
} = await octokit.rest.users.getAuthenticated();
}
