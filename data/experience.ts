export interface ExperienceItem {
  id: string;
  type: "work" | "education";
  title: string;
  organization: string;
  location?: string;
  startDate: string;
  endDate: string | "Present";
  description: string[];
  skills?: string[];
}

export const experiences: ExperienceItem[] = [
  {
    id: "work-1",
    type: "work",
    title: "프론트엔드 개발자",
    organization: "비랩트 (Berapt)",
    location: "서울, 대한민국",
    startDate: "2022-09",
    endDate: "2025-12",
    description: [
      "두 개의 B2C 웹 기반 플랫폼 (숄더픽, 숄더) 개발 및 유지보수",
      "서브컬쳐 일러스트 웹사이트 '숄더픽' 런칭 (MAU 3만 달성)",
      "작가 응원 웹사이트 '숄더' 런칭 (가입자 수 20만 명 달성)",
      "외부 PG 사 연동을 통한 정기구독 멤버십 가입/관리 플로우 개발",
      "게시글 CRUD, 유저 프로필 등 유저사이드 화면 구조 설계 및 개발",
      "React-query 도입 및 렌더링 최적화, SEO 최적화 구현",
      "Storybook을 통한 컴포넌트 테스팅 도입 및 디자인 시스템 구축",
      "기획/디자인 리뷰 및 API 스펙 리뷰 등 프론트엔드 팀의 외부 커뮤니케이션 전담",
    ],
    skills: ["TypeScript", "Next.js", "React", "React-Query", "Storybook"],
  },
  {
    id: "work-2",
    type: "work",
    title: "프론트엔드 개발자",
    organization: "획기획 / 제조도",
    location: "서울, 대한민국",
    startDate: "2021-09",
    endDate: "2022-09",
    description: [
      "2.5D 아카이빙 플랫폼 웹사이트 개발 팀원",
      "Web3를 이용한 블록체인 연동 기능 개발",
      "게시판 CRUD, 유저 프로필 등 유저사이드 화면 구조 설계 및 개발",
      "lottie 중심의 인터랙티브 UI/UX 개발 주도",
      "JavaScript에서 TypeScript로 점진적 마이그레이션 진행",
      "memoization을 활용한 컴포넌트 렌더링 최적화",
    ],
    skills: ["JavaScript", "TypeScript", "React", "Web3.js", "Lottie.js"],
  },
  {
    id: "edu-1",
    type: "education",
    title: "학사 졸업",
    organization: "가톨릭대학교",
    location: "경기도, 대한민국",
    startDate: "2015-03",
    endDate: "2022-02",
    description: [
      "주전공: 경영학부 경영학",
      "복수전공: ICT공과대학 미디어콘텐츠학과",
    ],
  },
];
