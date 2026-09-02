import { redirect } from "next/navigation";
import { work } from "@/content/work";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return work.map((item) => ({ slug: item.slug }));
}

export default async function WorkSlugRedirect({ params }: Props) {
  const { slug } = await params;
  redirect(`/projects/${slug}`);
}
