import { Button } from "@/shared/ui/button";
import { Github } from "lucide-react";

export function ContributeSection() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">
            함께 만들어가는 개발자 리소스
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            좋은 개발 리소스를 발견하셨나요? GitHub 이슈를 통해 제보해 주세요.
            여러분의 기여가 다른 개발자들에게 큰 도움이 됩니다.
          </p>
          <Button size="lg" className="gap-2">
            <Github className="w-5 h-5" />
            기여하기
          </Button>
        </div>
      </div>
    </section>
  );
}
