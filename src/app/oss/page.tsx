import type { Metadata } from "next";
import { PageIntro } from "@/components/PageIntro";
import { studying, wantToContribute } from "@/content/oss";
import { site } from "@/content/site";
import { getGithubRepos } from "@/lib/github";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Open source",
  description: "Repos I own, forks I'm studying, and projects I want to contribute to.",
};

export default async function OssPage() {
  const repos = await getGithubRepos();
  const owned = repos?.filter((repo) => !repo.fork) ?? [];
  const forks = repos?.filter((repo) => repo.fork) ?? [];

  return (
    <div>
      <PageIntro title="Open source—">
        <p>
          Repos from{" "}
          <a href={site.github} target="_blank" rel="noreferrer">
            github.com/{site.githubUser}
          </a>
          , and a short list of what I want to contribute to.
        </p>
      </PageIntro>

      <div className="px-5 pb-16 md:px-10">
        <section className="mt-8">
          <h2 className="display text-[clamp(1.8rem,4vw,3rem)]">Repositories</h2>
          {owned.length > 0 ? (
            <ul className="mt-4">
              {owned.map((repo) => (
                <li key={repo.name} className="border-t border-ink/15 py-5 last:border-b">
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-lg no-underline"
                  >
                    {repo.name}
                  </a>
                  <p className="mt-1 max-w-2xl text-[15px] leading-6 text-ink-soft">
                    {repo.description ?? "No description yet."}
                  </p>
                  <p className="mt-2 text-sm text-muted">{repo.language}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p className="mt-4 text-ink-soft">
              GitHub didn&apos;t respond this hour. The profile is still{" "}
              <a href={site.github}>github.com/{site.githubUser}</a>.
            </p>
          )}
        </section>

        {forks.length > 0 ? (
          <section className="mt-16">
            <h2 className="display text-[clamp(1.8rem,4vw,3rem)]">Forks I&apos;m reading</h2>
            <ul className="mt-4">
              {forks.map((repo) => (
                <li key={repo.name} className="border-t border-ink/15 py-5 last:border-b">
                  <a href={repo.html_url} target="_blank" rel="noreferrer">
                    {repo.name}
                  </a>
                  <p className="mt-1 text-[15px] leading-6 text-ink-soft">
                    {repo.description ?? "Fork."}
                  </p>
                </li>
              ))}
            </ul>
          </section>
        ) : null}

        <section className="mt-16">
          <h2 className="display text-[clamp(1.8rem,4vw,3rem)]">Studying</h2>
          <ul className="mt-6 space-y-6">
            {studying.map((item) => (
              <li key={item.name} className="max-w-2xl">
                {item.href ? (
                  <a href={item.href} target="_blank" rel="noreferrer">
                    {item.name}
                  </a>
                ) : (
                  <span>{item.name}</span>
                )}
                <p className="mt-1 text-[16px] leading-7 text-ink-soft">{item.note}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-16">
          <h2 className="display text-[clamp(1.8rem,4vw,3rem)]">Want to contribute</h2>
          <ul className="mt-6 space-y-6">
            {wantToContribute.map((item) => (
              <li key={item.name} className="max-w-2xl">
                <p>{item.name}</p>
                <p className="mt-1 text-[16px] leading-7 text-ink-soft">{item.note}</p>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
