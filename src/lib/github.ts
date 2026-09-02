export type GithubRepo = {
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  fork: boolean;
  pushed_at: string;
  homepage: string | null;
};

export async function getGithubRepos(): Promise<GithubRepo[] | null> {
  try {
    const response = await fetch(
      "https://api.github.com/users/muradImre/repos?per_page=100&sort=updated",
      {
        headers: { Accept: "application/vnd.github+json" },
        next: { revalidate: 3600 },
      },
    );

    if (!response.ok) return null;

    const data = (await response.json()) as GithubRepo[];
    return data.filter((repo) => repo.name !== "muradimre");
  } catch {
    return null;
  }
}
