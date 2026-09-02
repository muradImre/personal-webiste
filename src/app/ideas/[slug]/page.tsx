import { redirect } from "next/navigation";
import { ideas } from "@/content/ideas";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return ideas.map((item) => ({ slug: item.slug }));
}

export default async function IdeaRedirect({ params }: Props) {
  const { slug } = await params;
  redirect(`/next/${slug}`);
}
