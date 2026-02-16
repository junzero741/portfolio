import { Metadata } from "next";
import Link from "next/link";
import { ExternalLink, BookOpen } from "lucide-react";
import Card from "@/components/ui/card";

export const metadata: Metadata = {
  title: "블로그 - Portfolio",
  description: "개발 블로그 및 기술 아티클",
};

const BLOG_URL = "https://til-dev.tistory.com/";

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-indigo-50/30 to-purple-50/30">
      <div className="mx-auto max-w-4xl px-6 py-24">
        {/* Page Header */}
        <div className="mb-16 text-center animate-fade-in-up">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">블로그</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            개발하면서 배운 것들을 기록하고 공유합니다
          </p>
        </div>

        {/* Main Card */}
        <Card gradient="purple">
          <div className="text-center space-y-6 py-8">
            <div className="flex justify-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 shadow-lg">
                <BookOpen className="h-10 w-10 text-white" />
              </div>
            </div>

            <div className="space-y-3">
              <h2 className="text-3xl font-bold text-gray-900">
                TIL 개발 블로그
              </h2>
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

        {/* Additional Info */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card gradient="blue">
            <div className="text-center space-y-2">
              <h3 className="text-lg font-bold text-gray-900">기술 아티클</h3>
              <p className="text-sm text-gray-600">
                실무에서 사용한 기술과 트러블슈팅 경험
              </p>
            </div>
          </Card>
          <Card gradient="purple">
            <div className="text-center space-y-2">
              <h3 className="text-lg font-bold text-gray-900">학습 기록</h3>
              <p className="text-sm text-gray-600">
                새로운 기술 학습 과정과 인사이트
              </p>
            </div>
          </Card>
          <Card gradient="green">
            <div className="text-center space-y-2">
              <h3 className="text-lg font-bold text-gray-900">개발 일지</h3>
              <p className="text-sm text-gray-600">
                프로젝트 개발 과정과 회고
              </p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
