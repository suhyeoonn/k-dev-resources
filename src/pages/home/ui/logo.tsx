import Link from "next/link";
import React from "react";

export const Logo = () => {
  return (
    <Link href="/">
      <div className="flex items-baseline gap-2">
        <h1 className="text-2xl font-bold">K-DevHub</h1>
        <p className="text-sm text-gray-500">개발자를 위한 리소스 허브</p>
      </div>
    </Link>
  );
};
