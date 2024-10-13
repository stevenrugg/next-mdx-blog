 import authorAvatar from "../../public/images/author/steven-modified.png"
export const siteConfig = {
  name: "SeattleSuperGeek",
  description:
    "Welcome to my simple, minimalistic implementation of a MDX, Tailwindcss & React-Icons blog written in Typescript. Built with Next.js 14 and velite js.",
  author: "Steven Rugg - SeattleSuperGeek",
  authorImage: authorAvatar,
  social: {
    github: "https://github.com/devbertskie",
    twitter: "https://twitter.com",
    facebook: "https://facebook.com",
    linkedin: "https//linkedin/in/stevenwrugg"
  },
};

export type SiteConfig = typeof siteConfig;
