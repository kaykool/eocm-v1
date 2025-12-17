import Image from "next/image";
import HomeCatalog from "./_components/HomeCatalog";
import { ViewAllButton } from "./_components/ViewAllButton";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ category: string }>;
}) {
  const category = (await searchParams).category;

  return (
    <div className="main-container flex-col gap-10 m-4">
      <div className="relative aspect-3/1 w-full">
        <Image src="/featured.png" fill alt="hero image" />
      </div>
      <HomeCatalog />
      <ViewAllButton category={category} />
    </div>
  );
}
