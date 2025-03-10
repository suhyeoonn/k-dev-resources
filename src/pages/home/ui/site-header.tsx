import Link from "next/link";
import { Logo } from "./logo";

export function SiteHeader() {
  return (
    <header className="border-b bg-white">
      <div className="p-4 container mx-auto">
        <Logo />
      </div>
    </header>
  );
}
