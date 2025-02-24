import { Search, User } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared/ui/select/ui/select";
import { Button } from "@/shared/ui/button";
import { Input } from "@/shared/ui/input";

export default function Header() {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <h1 className="text-2xl font-bold ">Itbrary</h1>
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Input
                type="search"
                placeholder="검색..."
                className="pl-10 pr-4 py-2 w-64"
              />
              <Search
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={18}
              />
            </div>
            <Button>콘텐츠 제보하기</Button>
            <Button variant="outline">
              <User className="mr-2 h-4 w-4" /> 로그인
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
