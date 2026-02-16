import { BookOpen, ExternalLink } from "lucide-react";
import Card from "@/components/ui/card";
import Link from "next/link";

const BLOG_URL = "https://til-dev.tistory.com/";

export default function BlogSection() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-12">
      <section className="mb-20">
        <div className="flex items-center gap-3 mb-8">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 shadow-lg">
            <BookOpen className="h-6 w-6 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900">블로그</h2>
        </div>
        <Card gradient="purple">
          <div className="text-center space-y-6 py-8">
            <div className="flex justify-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 shadow-lg">
                <BookOpen className="h-10 w-10 text-white" />
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="text-3xl font-bold text-gray-900">
                TIL 개발 블로그
              </h3>
              <p className="text-gray-600 max-w-md mx-auto">
                개발하면서 학습한 내용, 트러블슈팅, 기술 스택에 대한 인사이트를
                공유하는 블로그입니다.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link
                href={BLOG_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-4 text-base font-semibold text-white shadow-lg hover:shadow-xl transition-all hover:scale-105"
              >
                블로그 방문하기
                <ExternalLink className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-500">
                블로그 주소:{" "}
                <Link
                  href={BLOG_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-600 hover:text-purple-700 underline"
                >
                  {BLOG_URL}
                </Link>
              </p>
            </div>
          </div>
        </Card>
      </section>
    </div>
  );
}
