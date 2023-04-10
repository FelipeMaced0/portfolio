import { Octokit } from "octokit";
const octokit = new Octokit({ auth: process.env.AUTH_GITHUB_TOKEN });

export async function getRepos() {
    return await octokit.request('GET /user/repos', {
        headers: {
            'X-GitHub-Api-Version': '2022-11-28'
        }
    });
};

export async function getStarGazers(user: String, repo: String) {
    return await octokit.request(`GET /repos/${user}/${repo}/stargazers`, {
        headers: {
            'X-GitHub-Api-Version': '2022-11-28'
        },
    });
}
