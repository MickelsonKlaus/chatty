import PublicLayout from "$/PublicLayout";
import Image from "next/image";
import Link from "next/link";
import Illustration from "@/svg/undraw_phone_call_re_hx6a.svg";

const GetStarted = () => {
  return (
    <PublicLayout>
      <section className="flex items-start justify-between w-full h-full max-w-6xl pt-10 pb-5 mx-auto text-white">
        <div className="flex-auto w-full h-full">
          <Link href="/" passHref={true}>
            <a className="mb-5 text-xl font-medium">Chatty</a>
          </Link>
          <div className="relative w-full h-full">
            <Image
              src={Illustration}
              alt="illustration"
              priority
              layout="fill"
            />
          </div>
        </div>
        <div className="flex-auto w-full pt-10">
          <h1 className="text-lg font-medium opacity-70">
            Enter your phone number
          </h1>
        </div>
      </section>
    </PublicLayout>
  );
};

export default GetStarted;
