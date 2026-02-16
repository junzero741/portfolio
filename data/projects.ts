export type ProjectCategory = "work" | "side";

export interface ProjectLink {
  label: string;
  href: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle?: string;
  company: string;
  period: string;
  category: ProjectCategory;
  summary: string;
  tech: string[];
  roles: string[];
  achievements: string[];
  links?: ProjectLink[];
  gradient: "blue" | "purple" | "orange" | "green";
}

export const projects: ProjectItem[] = [
  {
    id: "shoulder-pick",
    title: "숄더픽",
    subtitle: "서브컬쳐 일러스트 웹사이트",
    company: "비랩트 (Berapt)",
    period: "2024.03 ~ 2025.12",
    category: "work",
    summary:
      "서브컬쳐 일러스트 플랫폼 런칭 및 유지보수. MAU 3만 달성.",
    tech: ["TypeScript", "Next.js", "React", "React-Query"],
    roles: [
      "React-query 도입 및 렌더링 최적화",
      "3D 효과 카드 이미지 로직 최적화",
      "SEO 최적화를 위한 metadata 및 구조화된 데이터 도입",
      "다국어 적용 프로세스 자동화",
      "외부 PG(네이버페이, 카카오페이 등) 결제 연동",
    ],
    achievements: [
      "MAU 3만 달성",
      "유료 멤버십 가입 유저 xx명 달성",
      "인기 웹툰/일러스트 작가 xx명 가입",
    ],
    links: [
      { label: "서비스", href: "https://pick.shoulder.fan/" },
    ],
    gradient: "purple",
  },
  {
    id: "shoulder",
    title: "숄더",
    subtitle: "작가 응원 웹사이트",
    company: "비랩트 (Berapt)",
    period: "2022.09 ~ 2025.12",
    category: "work",
    summary:
      "작가 응원 플랫폼 런칭 및 유지보수. 가입자 20만 명 달성.",
    tech: ["TypeScript", "Next.js", "React", "Storybook", "Billboard.js"],
    roles: [
      "billboard.js 도입 및 차트 구현",
      "공통 기능 모듈 및 디자인 시스템 설계/구현",
      "Storybook 기반 컴포넌트 테스팅 도입",
      "기존 React에서 Next.js로 전환",
      "Froala 커스텀 이모티콘 플러그인 개발",
      "외부 PG 결제 연동 및 로직 최적화",
    ],
    achievements: [
      "가입자 수 20만 명 달성",
      "인기 웹툰/일러스트 작가 xx명 가입",
      "월간 서비스 유료 결제액 xx원 달성",
    ],
    links: [
      { label: "서비스", href: "https://shoulder.fan/" },
    ],
    gradient: "blue",
  },
  {
    id: "jejodo",
    title: "제조도",
    subtitle: "인디워커 기록 아카이빙 플랫폼",
    company: "획기획 / 제조도",
    period: "2021.09 ~ 2022.09",
    category: "work",
    summary:
      "인디워커 기록 아카이빙 플랫폼의 웹 프론트엔드 단독 개발.",
    tech: ["JavaScript", "Lottie.js", "Web3.js", "TypeScript"],
    roles: [
      "웹 프론트엔드 단독 개발",
      "TypeScript로의 점진적 마이그레이션",
      "웹사이트 내 사용자의 블록체인 데이터 연동",
      "memoization 활용 컴포넌트 렌더링 최적화",
    ],
    achievements: ["인디워커 기록 트렌드로 가입자 수 xx명 달성"],
    links: [{ label: "서비스", href: "https://www.jejodo.life" }],
    gradient: "green",
  },
];
