import { Button } from "@/shared/ui/button";

export default function Footer() {
  return (
    <footer className="border-t py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0 flex flex-col gap-4">
            <div className="flex gap-2 items-center">
              <h2 className="text-xl font-bold">Itbrary</h2>
              <p className="text-sm mt-2">IT 콘텐츠 공유 사이트</p>
            </div>
            <div className="text-center text-sm">
              © 2025 IT Curator. All rights reserved.
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
            <Button>콘텐츠 제보하기</Button>
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
