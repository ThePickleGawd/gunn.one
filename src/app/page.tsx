import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen ">
      <div className="h-screen flex flex-col justify-center items-center">
        <div className="w-fit">
          <div className="text-9xl font-bold bg-gradient-to-b from-red-600 to-amber-600 bg-clip-text text-transparent h-40">
            gunn.one
          </div>
          <div className="-mt-10 text-3xl text-right w-full">
            your favorite student web apps
          </div>
          <div className="font-bold text-2xl flex space-x-2 w-full justify-center mt-8">
            <Link
              href="/apps"
              className="rounded-full px-6 py-2 bg-white text-black"
            >
              See Apps
            </Link>
            <Link href="/" className="rounded-full px-6 py-2">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
