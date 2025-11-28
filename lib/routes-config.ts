// for page navigation & to sort on leftbar

import { title } from "process";

export type EachRoute = {
  title: string;
  href: string;
  noLink?: true;
  items?: EachRoute[];
};

export const ROUTES: EachRoute[] = [
  {
    title: "Getting Started",
    href: "/getting-started",
    noLink: true,
    items: [
      { title: "🧠 Introduction", href: "/introduction" },
      {
        title: "⚙️ Installation",
        href: "/installation",
        // items: [
        //   { title: "Laravel", href: "/laravel" },
        //   { title: "React", href: "/react" },
        //   { title: "Gatsby", href: "/gatsby" },
        // ],
      },
    ],
  },
  {
    title: "Guides",
    href: "/guides",
    noLink: true,
    items: [
      {title: "⚡ Quickstart", href: "/quickstart"}
    ]
  },
  {
    title: "Concepts",
    href: "/concepts",
    noLink: true,
    items: [
      // {title: "🔐 Authentication", href: "/authentication"},
      {title: "📂 Storage Modes", href: "/storage-modes"},
    ]
  },
  // {
  //   title: "Reference", href: "/reference",
  //   noLink: true,
  //   items: [
  //     {title: "📚 API Reference", href:"/api-reference"}
  //   ]
  // },
  {
    title: "Use Cases",
    href: "/use-cases",
    noLink: true,
    items: [ {title: "Real World Example", href: "/real-world-examples"} ]
  },
  {
    title: "FAQs",
    href: "/faqs",
  },
  {
    title: "SDKs",
    href: "/sdks",
    noLink: true,
    items : [
      {title: "📦 SDKs (Coming Soon)", href: "/coming-soon"}
    ]
  }
  // {
  //   title: "Server Actions",
  //   href: "/server-actions",
  //   noLink: true,
  //   items: [
  //     { title: "getSession", href: "/getSession" },
  //     { title: "getToken", href: "/getToken" },
  //   ],
  // },
];

type Page = { title: string; href: string };

function getRecurrsiveAllLinks(node: EachRoute) {
  const ans: Page[] = [];
  if (!node.noLink) {
    ans.push({ title: node.title, href: node.href });
  }
  node.items?.forEach((subNode) => {
    const temp = { ...subNode, href: `${node.href}${subNode.href}` };
    ans.push(...getRecurrsiveAllLinks(temp));
  });
  return ans;
}

export const page_routes = ROUTES.map((it) => getRecurrsiveAllLinks(it)).flat();
