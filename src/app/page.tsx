import Image from "next/image";

export default function Home() {
  return (
    <div className="main-container ">
      <div className="relative aspect-3/1 w-full">
        <Image src="/featured.png" fill alt="hero image" />
      </div>
    </div>
  );
}
