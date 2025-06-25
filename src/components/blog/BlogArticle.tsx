import React from "react";
import BlogCard from "./BlogCard";

const BlogArticle = () => {
  const articles = [
    {
      id: 1,
      category: "Contractor",
      date: "1 Jan 2023",
      title: "Bill Walsh leadership lessons",
      description:
        "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
      image: "/public/images/png/dashboard-img.png",
      link: "/articles/bill-walsh-leadership",
      tags: ["Leadership", "Management"],
    },
    {
      id: 2,
      category: "Contractor",
      date: "1 Jan 2023",
      title: "PM mental models",
      description:
        "Mental models are simple expressions of complex processes or relationships.",
      image: "/public/images/png/dashboard-img.png",
      link: "/articles/pm-mental-models",
      tags: ["Product", "Research", "Frameworks"],
    },
    {
      id: 3,
      category: "Contractor",
      date: "1 Jan 2023",
      title: "What is Wireframing?",
      description:
        "Introduction to Wireframing and its Principles. Learn from the best in the industry.",
      image: "/public/images/png/dashboard-img.png",
      link: "/articles/what-is-wireframing",
      tags: ["Design", "Research"],
    },
    {
      id: 4,
      category: "Contractor",
      date: "1 Jan 2023",
      title: "How collaboration makes us better designers",
      description:
        "Collaboration can make our teams stronger, and our individual designs better.",
      image: "/public/images/png/dashboard-img.png",
      link: "/articles/collaboration-better-designers",
      tags: ["Design", "Research"],
    },
    {
      id: 5,
      category: "Contractor",
      date: "1 Jan 2023",
      title: "Our top 10 Javascript frameworks to use",
      description:
        "JavaScript frameworks make development easy with extensive features and functionalities.",
      image: "/public/images/png/dashboard-img.png",
      link: "/articles/top-javascript-frameworks",
      tags: ["Software Development", "Tools", "SaaS"],
    },
    {
      id: 6,
      category: "Contractor",
      date: "1 Jan 2023",
      title: "Podcast: Creating a better CX Community",
      description:
        "Starting a community doesn't need to be complicated, but how do you get started?",
      image: "/public/images/png/dashboard-img.png",
      link: "/articles/podcast-better-cx-community",
      tags: ["Podcasts", "Customer Success"],
    },
  ];

  return (
    <div className="main-container grid grid-cols-3 gap-8">
      {articles.map((article, index) => (
        <BlogCard key={index} article={article} />
      ))}
    </div>
  );
};

export default BlogArticle;
