export const profileData = {
  name: "Aufa Wicaksono", // 
  role: "frontend developer", // 
  bio: "I develop everything using node.", // 
};

export const tags = [
  "Docs", "Aufa", "SEO", "Blog", "Next.js", 
  "GraphQL", "Apollo", "Rest", "GA", "OpenSource", "Github"
]; // [cite: 1, 2]

export const posts = [
  {
    id: "1",
    title: "Welcome to Aufa Blog!", // [cite: 2]
    category: "📗 Docs",
    date: "Jan 21, 2023", // [cite: 3]
    tags: ["Docs", "Aufa"], // [cite: 3]
    link: "/docs" // [cite: 3]
  },
  {
    id: "2",
    title: "Dynamically create sitemap.xml in Next.js", // [cite: 3]
    summary: "Let's load the sitemap dynamically", // [cite: 3]
    category: "💻 Frontend", // [cite: 3]
    date: "Jun 30, 2022", // [cite: 3]
    tags: ["SEO", "Blog", "Next.js"], // [cite: 3]
    link: "/hot-to-make-sitemap-in-next-js" // [cite: 3]
  },
  {
    id: "3",
    title: "Learn how apollo client manages asynchronous state through useMutation", // [cite: 4]
    summary: "Let's try useMutation and see how it handles real asynchronous state.", // [cite: 4]
    category: "💻 Frontend", // [cite: 4]
    date: "Jun 28, 2022", // [cite: 4]
    tags: ["Next.js", "GraphQL", "Apollo"], // [cite: 5]
    link: "/apollo-gettings-started-mutate" // [cite: 5]
  },
  {
    id: "4",
    title: "Handling GraphQL queries in apollo client", // [cite: 5]
    summary: "Let's use GraphQL using apollo client", // [cite: 5]
    category: "💻 Frontend", // [cite: 5]
    date: "Jun 24, 2022", // [cite: 5]
    tags: ["Next.js", "GraphQL", "Apollo"], // [cite: 5]
    link: "/apollo-gettings-started-query" // [cite: 5]
  },
  {
    id: "5",
    title: "About GraphQL", // [cite: 5]
    summary: "Learn GraphQL 🙄", // [cite: 5]
    category: "🤖 Computer Science", // [cite: 5]
    date: "Jun 20, 2022", // [cite: 5]
    tags: ["GraphQL", "Rest"], // [cite: 5]
    link: "/about-graphql" // [cite: 5]
  },
  {
    id: "6",
    title: "Applying google analytics to Next.js", // [cite: 6]
    summary: "Let's understand the principle and apply ga to next.js 😎", // [cite: 6]
    category: "💻 Frontend", // [cite: 6]
    date: "Jun 16, 2022", // [cite: 6]
    tags: ["Next.js", "GA"], // [cite: 6]
    link: "/how-to-apply-ga-to-next.js" // [cite: 6]
  },
  {
    id: "7",
    title: "About open source license(revalidate)", // [cite: 6]
    summary: "Briefly learn about the open source license, and apply the license to your source code uploaded on github 🙂", // [cite: 6]
    category: "🤖 Computer Science", // [cite: 6]
    date: "Jun 9, 2022", // [cite: 6]
    tags: ["Open Source", "Github"], // [cite: 6]
    link: "/about-opensource-license" // [cite: 6]
  }
];