import BlogCard from "./BlogCard";

const LatestFromContractor = () => {
  const articles = [
    {
      id: 1,
      category: "Contractor",
      date: "1 Jan 2023",
      title: "Bill Walsh leadership lessons",
      description:
        "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
      image: "/images/webp/blog-card-3.webp",
      link: "/articles/bill-walsh-leadership",
      tags: ["Leadership", "Management"],
    },
  ];
  const smallArticles = [
    {
      id: 1,
      category: "Contractor",
      date: "1 Jan 2023",
      title: "Bill Walsh leadership lessons",
      description:
        "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
      image: "/images/webp/blog-card-5.webp",
      link: "/articles/bill-walsh-leadership",
      tags: ["Architecture", "Tools"],
      isSmall: true,
    },
    {
      id: 2,
      category: "Contractor",
      date: "1 Jan 2023",
      title: "PM mental models",
      description:
        "Mental models are simple expressions of complex processes or relationships.",
      image: "/images/webp/blog-card-2.webp",
      link: "/articles/pm-mental-models",
      tags: ["Product", "Research", "Frameworks"],
      isSmall: true,
    },
  ];
  return (
    <section className="main-container custom-pagination relative z-20 py-8">
      <h2 className="text-eerieBlack pb-7 text-2xl font-semibold">
        Latest from Contractor+ HQ
      </h2>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div>
          {articles.map((article, index) => (
            <BlogCard article={article} key={index} />
          ))}
        </div>
        <div className="flex flex-col gap-6 sm:flex-row lg:flex-col xl:gap-8">
          {smallArticles.map((article, index) => (
            <BlogCard article={article} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestFromContractor;
