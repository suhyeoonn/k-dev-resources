import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0 flex flex-col gap-4">
            <div className="flex gap-2 items-baseline">
              <h2 className="text-xl font-bold">Itbrary</h2>
              <p className="hidden">IT 콘텐츠 공유 사이트</p>
              <div className="text-sm opacity-70">
                © 2025 Itbrary. All rights reserved.
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
            <Link
              target="_blank"
              href="https://github.com/suhyeoonn/tech-library-frontend"
            >
              <Image
                src={"/github.svg"}
                width={20}
                height={20}
                alt="github"
                className="md:h-6 md:w-6"
              />
            </Link>
            {/* <a href="#" className="text-sm hover:underline">
              이용약관
            </a>
            <a href="#" className="text-sm hover:underline">
              개인정보처리방침
            </a> */}
          </div>
        </div>
      </div>
    </footer>
  );
}
