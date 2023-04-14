import { useEnvironment } from "@react-three/drei";
import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  univ,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  tsuzucle,
  IDEA,
  wasemeshi,
  Syncation,
  library,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  }
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  }
];

const experiences = [
  {
    title: "早稲田大学",
    company_name: "Waseda University",
    icon: univ,
    iconBg: "#ffffff",
    date: "March 2021 - March 2025(tentative)",
    points: [
      "教育学部英語英文科に在籍し、学術的な英語だけではなく実践で使える英語を学びました",
      "ゼミでの活動として膨大なデータを用いて言語の解析を行うコーパス言語学を学び、SNSなどにおける言語の使用や傾向を言語解析し研究する予定です",
      "大学1年生の際にWebアプリ開発に興味を持ち、独学でプログラミング学習を開始する、また在学中に大学周辺の飲食店検索「Wasemeshi」を開発いたしました",
      "サークルはWINCと呼ばれる歴史あるプログラミングサークルに在籍し、チームリーダーとして日々邁進しました",
    ],
  },
  {
    title: "Shopifyアプリの制作（長期インターン）",
    company_name: "Tsuzucle",
    icon: tsuzucle,
    iconBg: "#ffffff",
    date: "June 2022 - ",
    points: [
      "大学2年生の6月から現在に至るまで株式会社TsuzucleにてShopifyApp開発に携わりました",
      "フロント側ではReactを用いてUIの構築、バックエンド側はNode.js Express GraphQLを用いて開発を行いました",
      "単に実装を行うだけではなく、クライアントの抱える課題を読み取り、要件定義の制定から参画いたしました",
      "Confluenceを用いた要件定義やJiraを用いた進捗管理、Gitの機能を用いたバージョン管理、実際の開発現場で行われる一連の基礎知識を教えていただき、習得いたしました",
    ],
  },
  {
    title: "学生団体を立ち上げる",
    company_name: "IDEA",
    icon: IDEA,
    iconBg: "#000000",
    date: "December 2023 - ",
    points: [
      "去年の12月に友人と立ち上げた学生団体「IDEA」で副代表を務めております",
      "早稲田大学、慶應大学を中心に九州の大学や中学生も参加してくれています。現時点（4月15日現在）ではメンバーは50名近く在籍しております",
      "活動内容としては班ごとに分かれたチーム開発や情報交換、また初学者に対して経験者であるチームリーダによる学習指導などを行なっています",
      "定期的にイベントを開催しており、ハッカソンやLT会などを積極的に開催しており、メンバー一同熱心に参加してくれています",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const blogs = [{
  name:"",
  url:"https://qiita.com/Alan12d/items/374166c76ad15bafbeff",
  title:"Shopifyチェックアウト機能の実装で詰まった話",
  tags:[{
    name: "React",
    color: "blue-text-gradient",
  },{
    name:"shopify",
    color:"green-text-gradient"
  },{
    name:"GraphQL",
    color:"pink-text-gradient"
  },{
    name:"Recoil",
    color:""
  }]
}]

const projects = [
  {
    name: "Wasemeshi",
    description:
      "早稲田大学周辺の飲食店を検索できるWebアプリを開発いたしました。Next.jsとホットペッパーAPIを用いて約250件もの飲食店を検索することが可能です",
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "React",
        color: "green-text-gradient",
      },
      {
        name: "restapi",
        color: "pink-text-gradient",
      },
    ],
    image: wasemeshi,
    source_code_link: "https://wasemeshi-next.vercel.app/",
  },
  {
    name: "Syncation",
    description:
      "モチベーション管理のできるオンライン自習室を作成しました。この作品は2022年株式会社サポータズさん主催,技育祭「チーム開発部門」で登壇いたしました",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Next.js",
        color: "green-text-gradient",
      },
      {
        name: "webSocket",
        color: "pink-text-gradient",
      },
    ],
    image: Syncation,
    source_code_link: "https://github.com/ryota108/Syncation",
  },
  {
    name: "Pocket Library",
    description:
      "大学のプログラミングサークル内で使用している技術書を管理するWebアプリを開発いたしました。こちらのアプリは株式会社インフォシティさん主催のハッカソンで最優秀賞を頂きました",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "materialUI",
        color: "green-text-gradient",
      },
      {
        name: "restapi",
        color: "pink-text-gradient",
      },
    ],
    image: library,
    source_code_link: "https://github.com/ryota108/winc-library-frontend",
  },
];

export { services, technologies, experiences, testimonials, projects,blogs };
