import Image from "next/image";
import Link from "next/link";
import PublicLayout from "$/PublicLayout";
import ChattingSvg from "@/svg/chatting.svg";

export default function Home() {
  return (
    <PublicLayout>
      <section className="flex flex-col items-center justify-center w-full h-full pb-5 mx-auto text-white md:w-1/2">
        <Link href="/" passHref={true}>
          <a className="mb-5 text-xl font-medium">Chatty</a>
        </Link>
        <Image src={ChattingSvg} alt="onboarding illustration" priority />
        <p className="max-w-md mx-auto mt-3 mb-3 text-sm text-center">
          Stay connected to your friends and family, team with a fun,
          collaborative and easy to use chat application
        </p>
        <Link href="/getstarted" passHref>
          <a className="block py-3 my-3 text-sm text-center text-white rounded-md px-14 w-fit bg-__lapis_lazuli">
            Get started
          </a>
        </Link>
      </section>
    </PublicLayout>
  );
}
