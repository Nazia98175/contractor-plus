"use client";
import { useEffect, useRef, useState } from "react";
import { contractorTypes } from "../common/Helper";
import { SearchIcon } from "../common/Icons";
import CustomSelect from "./CustomSelect";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRouter } from "next/navigation";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

type BlogHeroProps = {
  blogsList: any;
  blogsData: any[];
  onSearchChange?: (value: string) => void;
  onTypeChange?: (value: string) => void;
};

const BlogHero = ({
  blogsList,
  blogsData,
  onSearchChange,
  onTypeChange,
}: BlogHeroProps) => {
  const router = useRouter();
  const [selectedValue, setSelectedValue] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredBlogs, setFilteredBlogs] = useState<any[]>([]);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    onTypeChange?.(selectedValue);
  }, [selectedValue, onTypeChange]);

  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => {
      gsap.to("#home-page-view-port-screen-blog", { opacity: 1, duration: 1 });
      gsap.to("#home-page-header-view-port-screen", {
        opacity: 1,
        duration: 1,
      });
      gsap.to("#home-page-footer-view-port-screen", {
        opacity: 1,
        duration: 1,
      });
    }, 700);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".parallax-container",
        start: "top top",
        end: "bottom 50%",
        scrub: 1,
        markers: false,
      },
    });

    tl.to("#mountain-1", { y: -130, ease: "none", scaleY: 1.2 }, 0)
      .to("#mountain-2", { y: -80, ease: "none", scaleY: 1.4 }, 0)
      .to("#mountain-3", { y: -250, ease: "none", scaleY: 1.4 }, 0)
      .to("#mountain-4", { y: -340, ease: "none" }, 0)
      .to("#mountain-5", { y: -150, ease: "none" }, 0);

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const normalize = (s?: string) =>
    (s ?? "").toString().trim().toLowerCase().replace(/\s+/g, "-");

  const getBlogCategories = (blog: any) => {
    const out: string[] = [];

    if (typeof blog?.category === "string") out.push(normalize(blog.category));
    else if (Array.isArray(blog?.category)) {
      for (const c of blog.category) {
        if (typeof c === "string") out.push(normalize(c));
        else if (c?.text) out.push(normalize(c.text));
        else if (c?.name) out.push(normalize(c.name));
      }
    }

    if (Array.isArray(blog?.tags)) {
      for (const t of blog.tags) {
        if (typeof t === "string") out.push(normalize(t));
        else if (t?.text) out.push(normalize(t.text));
      }
    }

    return Array.from(new Set(out));
  };

  function handleSearch() {
    onSearchChange?.(searchTerm);

    const q = searchTerm.trim().toLowerCase();
    const wanted = normalize(selectedValue);

    if (q.length > 0) {
      const results = (blogsData ?? []).filter((blog: any) => {
        const hay =
          `${blog.blogTitle ?? ""} ${blog.title ?? ""} ${blog.blogShortDescription ?? ""}`.toLowerCase();
        const matchSearch = hay.includes(q);

        const catTokens = getBlogCategories(blog);
        const matchCat = wanted === "all" || catTokens.includes(wanted);

        return matchSearch && matchCat;
      });
      setFilteredBlogs(results);
    } else {
      setFilteredBlogs([]);
    }
  }

  const handleBlogClick = (slug: string) => {
    router.push(`/blog/${slug}`);
    setSearchTerm("");
    setFilteredBlogs([]);
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setFilteredBlogs([]);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      id="blog-parallax-container"
      className="relative pt-44 pb-[460px] 2xl:pt-52"
    >
      <div className="relative z-50 -mt-8 pr-3 text-center text-4xl font-extrabold sm:pr-6 sm:text-5xl lg:pr-10 lg:text-6xl xl:text-[72px]">
        {" "}
        <h1 className="gradient-text-shadow absolute bottom-0 left-1/2 z-0 -translate-x-1/2 blur-[26px]">
          {" "}
          {blogsList?.title ?? ""}{" "}
        </h1>{" "}
        <h1 className="gradient-text-shadow relative">
          {" "}
          {blogsList?.title ?? ""}
        </h1>{" "}
      </div>
      <div className="font-myriad bg-rgba15 relative z-30 mx-auto mt-16 flex w-full max-w-[788px] flex-col-reverse items-center justify-center gap-2 rounded-lg p-2.5 backdrop-blur-[42px] sm:flex-row">
        <CustomSelect
          options={contractorTypes}
          value={selectedValue}
          onChange={(option) => setSelectedValue(option?.value || "all")}
          className="sm:max-w-[294px]"
        />

        <div
          ref={dropdownRef}
          className="relative flex w-full items-center gap-2.5"
        >
          <div className="border-secondary relative flex h-10 w-full items-center rounded-lg border pl-3.5">
            <SearchIcon />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
              placeholder="Select Contractor + HQ"
              className="text-decemberSky placeholder:text-decemberSky w-full px-3 tracking-[0.1px] focus:outline-none"
            />
          </div>
          <button
            onClick={handleSearch}
            type="button"
            className="bg-romanRed flex h-10 w-10 max-w-10 min-w-10 items-center justify-center rounded-lg duration-300 hover:opacity-80"
          >
            <SearchIcon color="#fff" />
          </button>

          {/* Search Dropdown */}
          {filteredBlogs.length > 0 && (
            <div className="absolute top-full z-50 mt-3 max-h-60 w-full overflow-y-auto rounded-lg border border-gray-300 bg-white shadow-lg">
              {filteredBlogs.map((blog: any) => (
                <div
                  key={blog.id ?? blog.documentId ?? blog.blogUrl}
                  className="flex cursor-pointer items-start px-3 py-2 hover:bg-gray-300"
                  onClick={() => handleBlogClick(blog.blogUrl || blog.id)}
                >
                  <div className="relative aspect-square w-[60px]">
                    <Image
                      src={blog?.blogImg?.[0]?.url ?? "/images/placeholder.png"}
                      fill
                      alt="blog image"
                    />
                  </div>
                  <div className="ml-2 w-full">
                    <h5 className="text-sm capitalize">
                      {blog?.blogTitle ?? blog?.title ?? ""}
                    </h5>
                    <p className="text-xs text-gray-500 capitalize">
                      {blog?.blogShortDescription ?? ""}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* PARALLAX IMAGES */}
      <div className="parallax-container absolute top-0 bottom-0 left-0 h-full w-full">
        <img
          id="mountain-1"
          src="/images/mountain/mountain-1.png"
          className="absolute bottom-0 left-0 z-[15] h-[42.5vw] w-full"
          alt=""
        />
        <img
          id="mountain-2"
          src="/images/mountain/mountain-2.png"
          className="absolute bottom-0 left-0 z-[14] h-[23vw] w-full origin-bottom"
          alt=""
        />
        <img
          id="mountain-3"
          src="/images/mountain/mountain-3.png"
          className="absolute bottom-0 left-0 z-[13] h-[28vw] w-full"
          alt=""
        />
        <img
          id="mountain-4"
          src="/images/mountain/mountain-4.png"
          className="absolute bottom-0 left-0 z-[12] h-[40vw] w-full"
          alt=""
        />
        <img
          id="mountain-5"
          src="/images/mountain/mountain-5.png"
          className="absolute bottom-0 left-0 z-[11] h-[28vw] w-full"
          alt=""
        />
        <div className="absolute bottom-0 z-[11] h-[25vh] w-full bg-white"></div>
      </div>
    </div>
  );
};

export default BlogHero;
