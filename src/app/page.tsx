import Image from "next/image";
import HomeCatalog from "./_components/HomeCatalog";

export default function Home() {
  return (
    <div className="main-container flex-col">
      <div className="relative aspect-3/1 w-full">
        <Image src="/featured.png" fill alt="hero image" />
      </div>

      <HomeCatalog />
    </div>
  );
}
