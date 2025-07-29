"use client";
import gsap from "gsap";
import Image from "next/image";
import { useEffect } from "react";

const BlogDetailHero = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => {
      gsap.to("#home-page-view-port-screen-blog", {
        opacity: 1,
        duration: 1,
      });
      gsap.to("#home-page-header-view-port-screen", {
        opacity: 1,
        duration: 1,
      });
      gsap.to("#home-page-footer-view-port-screen", {
        opacity: 1,
        duration: 1,
      });
    }, 700);
  }, []);
  return (
    <section className="relative h-full bg-[url('/images/webp/blog-hero-detail-bg.webp')] bg-cover bg-center pt-24 lg:pt-[119px] 2xl:pt-[150px]">
      <div className="main-container h-full">
        <article className="blog-detail-hero-shadow max-h-[560px]w-full flex h-full min-h-[500px] flex-col justify-start gap-3 rounded-xl bg-[url('/images/webp/blog-detail-hero.webp')] bg-cover bg-right p-4 py-10 text-white md:rounded-[20px] md:p-6 lg:max-h-[460px] lg:min-h-[460px] lg:justify-end lg:p-10 xl:bg-center xl:p-[42px]">
          <h3 className="font-work max-w-[818px] text-2xl leading-tight font-semibold md:text-3xl md:text-[34px]">
            10 Reasons Starting B2B SaaS For Contractors Is A Death Sentence
          </h3>
          <p className="text-stonewall text-sm font-medium sm:max-w-[80%] md:text-base">
            How do you create compelling presentations that wow your colleagues
            and impress your managers?
          </p>
          <div className="text-stonewall flex items-center gap-2.5 text-sm font-medium md:text-base">
            <Image
              width={24}
              height={24}
              src="/images/webp/review-profile-2.webp"
              className="rounded-full"
              alt="Profile Photo of user"
            />
            Justin Smith • August 3rd, 2025
          </div>
          <span className="text-dragonlord bg-sugar mt-1.5 flex h-6 w-fit items-center justify-center rounded-2xl px-2.5 text-sm leading-none font-medium">
            Plumbing
          </span>
        </article>
      </div>
    </section>
  );
};

export default BlogDetailHero;
