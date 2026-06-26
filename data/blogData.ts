export const profileData = {
  name: "Aufa Wicaksono", // 
  role: "frontend developer", // 
  bio: "I develop everything using node.", // 
};

export const tags = [
  "Docs", "Aufa", "SEO", "Blog", "Next.js", 
  "GraphQL", "Apollo"
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
  }
];