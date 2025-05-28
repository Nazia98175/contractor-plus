import React from "react";
import TextAnimation from "../common/TextAnimation";
import { RedCurveLine, TickIcon } from "../common/Icons";
import Image from "next/image";

const curvePositions = [0, 50, 100];

const WantingMore = () => {
  return (
    <section>
      <TextAnimation animateOnScroll={true} delay={0.3}>
        <h2 className="section-heading gradient-text-2 z-30 mx-auto w-fit max-w-[1004px] text-center !font-black lg:!font-semibold">
          Contractor+ is the only HVAC software that doesn’t leave you still
          wanting more
        </h2>
      </TextAnimation>

      <div className="relative mt-24 flex h-screen flex-col items-center justify-center bg-[url('/images/webp/blur-bg.webp')] bg-cover bg-no-repeat">
        {curvePositions.map((topOffset, index) => (
          <span
            key={index}
            className="absolute -left-[2%] z-30 block w-[108%]"
            style={{ top: `${topOffset}px` }}
          >
            <RedCurveLine />
          </span>
        ))}

        <article className="wanting-more-bg relative z-30 flex w-full max-w-[1232px] flex-col items-start justify-between gap-7 p-5 text-black lg:flex-row">
          <div className="w-full p-3 xl:max-w-[626px]">
            <div className="flex flex-col gap-3 md:gap-4 2xl:gap-5">
              <h4 className="font-montserrat lg:font-jakarta text-lightBlack px-2.5 py-0.5 text-base font-semibold md:text-2xl xl:text-[26px]">
                Project Management
              </h4>

              {/* Image for mobile */}
              <div className="mx-auto h-full min-h-[245px] w-full max-w-[518px] rounded-lg md:h-auto xl:hidden">
                <Image
                  src="/images/webp/circular-slide-1.webp"
                  alt="service image"
                  width={518}
                  height={302}
                  className="h-auto w-full rounded-lg object-cover"
                />
              </div>
              <div className="flex flex-col gap-4 2xl:gap-6">
                <div className="flex gap-3">
                  <span className="h-fit max-w-[14px] sm:max-w-5 md:min-w-5">
                    <TickIcon />
                  </span>
                  <div className="flex flex-col gap-2 xl:gap-3">
                    <h5 className="font-montserrat text-lightBlack lg:font-jakarta text-sm leading-none font-semibold sm:text-base lg:text-lg lg:font-bold xl:leading-[79%]">
                      Phases, Tasks, and Subtasks
                    </h5>
                    <p className="text-wallStreet text-xs font-medium sm:text-sm lg:text-base">
                      Structure jobs by phase with nested task assignments for
                      better delegation and progress tracking.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="h-fit max-w-[14px] sm:max-w-5 md:min-w-5">
                    <TickIcon />
                  </span>
                  <div className="flex flex-col gap-2 xl:gap-3">
                    <h5 className="font-montserrat text-lightBlack lg:font-jakarta text-sm leading-none font-semibold sm:text-base lg:text-lg lg:font-bold xl:leading-[79%]">
                      Job Timeline View
                    </h5>
                    <p className="text-wallStreet text-xs font-medium sm:text-sm lg:text-base">
                      See the full history of communication, assignments, time
                      logs, and photos for each job.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="h-fit max-w-[14px] sm:max-w-5 md:min-w-5">
                    <TickIcon />
                  </span>
                  <div className="flex flex-col gap-2 xl:gap-3">
                    <h5 className="font-montserrat text-lightBlack lg:font-jakarta text-sm leading-none font-semibold sm:text-base lg:text-lg lg:font-bold xl:leading-[79%]">
                      Gantt Chart View
                    </h5>
                    <p className="text-wallStreet text-xs font-medium sm:text-sm lg:text-base">
                      View project timelines, task dependencies, and upcoming
                      work in a format that’s easy to visualize.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="h-fit max-w-[14px] sm:max-w-5 md:min-w-5">
                    <TickIcon />
                  </span>
                  <div className="flex flex-col gap-2 xl:gap-3">
                    <h5 className="font-montserrat text-lightBlack lg:font-jakarta text-sm leading-none font-semibold sm:text-base lg:text-lg lg:font-bold xl:leading-[79%]">
                      Internal Job Chat
                    </h5>
                    <p className="text-wallStreet text-xs font-medium sm:text-sm lg:text-base">
                      Every job has its own chat so field teams keep all the
                      context in one place.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="h-fit max-w-[14px] sm:max-w-5 md:min-w-5">
                    <TickIcon />
                  </span>
                  <div className="flex flex-col gap-2 xl:gap-3">
                    <h5 className="font-montserrat text-lightBlack lg:font-jakarta text-sm leading-none font-semibold sm:text-base lg:text-lg lg:font-bold xl:leading-[79%]">
                      Photo Logging
                    </h5>
                    <p className="text-wallStreet text-xs font-medium sm:text-sm lg:text-base">
                      Attach photos, notes, and task completion records for
                      final quality checks and documentation.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="h-fit max-w-[14px] sm:max-w-5 md:min-w-5">
                    <TickIcon />
                  </span>
                  <div className="flex flex-col gap-2 xl:gap-3">
                    <h5 className="font-montserrat text-lightBlack lg:font-jakarta text-sm leading-none font-semibold sm:text-base lg:text-lg lg:font-bold xl:leading-[79%]">
                      Tool & Equipment Assignment
                    </h5>
                    <p className="text-wallStreet text-xs font-medium sm:text-sm lg:text-base">
                      Assign tools to jobs and know who has what at any given
                      moment.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="h-fit max-w-[14px] sm:max-w-5 md:min-w-5">
                    <TickIcon />
                  </span>
                  <div className="flex flex-col gap-2 xl:gap-3">
                    <h5 className="font-montserrat text-lightBlack lg:font-jakarta text-sm leading-none font-semibold sm:text-base lg:text-lg lg:font-bold xl:leading-[79%]">
                      Time Clock & Mileage Logs
                    </h5>
                    <p className="text-wallStreet text-xs font-medium sm:text-sm lg:text-base">
                      Track labor and mileage against specific jobs to stay
                      profitable and organized.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Estimate testimonial */}
            {/* {isEstimate && ( */}
            <p className="text-winterWay font-montserrat p-3 text-[10px] font-medium sm:text-xs lg:text-sm">
              “I used to spend hours piecing together quotes. Now I can hammer
              one out in minutes, and my clients love the professional look.” –
              <br /> <br /> – <strong>Satisfied Contractor+ User</strong>
            </p>
            {/* )} */}
          </div>

          {/* Desktop image */}
          <div className="hidden w-full max-w-[518px] rounded-lg xl:block">
            <Image
              src="/images/webp/circular-slide-1.webp"
              alt="service image"
              width={518}
              height={302}
              className="h-auto w-full rounded-lg object-cover"
            />
          </div>
        </article>
      </div>
    </section>
  );
};

export default WantingMore;
