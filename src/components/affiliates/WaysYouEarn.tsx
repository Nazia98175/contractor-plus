import React from "react";
import { GreenDollarIcon } from "../common/Icons";
import Copy from "../common/Copy";
interface Item {
  text: string;
  description?: string;
}

interface Section {
  title: string;
  items: Item[];
}

const WaysYouEarn: React.FC = () => {
  const sections: Section[] = [
    {
      title: "Base platform",
      items: [
        {
          text: "50% recurring revenue share on the core Contractor+ subscription (lifetime of account)",
          description:
            "Or you can split this 50% with your audience in the form of a discount (they get 20% off, you get 30% commissions).",
        },
      ],
    },
    {
      title: "Add-ons & upsells",
      items: [
        { text: "20% recurring on Contractor+ Books" },
        { text: "20% recurring on Contractor+ Local" },
      ],
    },
    {
      title: "Momentum multipliers",
      items: [
        { text: "Launch promos & co-branded campaigns" },
        { text: "Webinars / workshops for your community" },
        { text: "Featured partner spotlights and case studies" },
      ],
    },
  ];

  return (
    <section className="mx-auto mt-[130px] w-full max-w-[1100px] px-2">
      <Copy delay={0.1}>
        <h4 className="section-heading text-mana mb-[43px] text-center">
          Ways you earn
        </h4>
      </Copy>
      <div className="no-scrollbar overflow-auto">
        <div className="no-scrollbar w-[1083px]">
          <div className="border-blackCat divide-blackCat no-scrollbar grid grid-cols-3 divide-x rounded-xl border">
            {sections.map((section, i) => (
              <div key={i} className="flex flex-col">
                <h3 className="text-secondary font-myriad border-blackCat mb-3 border-b px-8 py-5 text-center text-lg font-semibold md:text-xl lg:text-2xl">
                  {section.title}
                </h3>

                <div
                  className={`flex h-full flex-col ${
                    section.items.length > 1 ? "justify-evenly" : "gap-2.5 px-5"
                  }`}
                >
                  {section.items.map((item, j) => (
                    <React.Fragment key={j}>
                      <div className="flex items-center gap-2.5 px-5">
                        <div className="h-6 w-6">
                          <GreenDollarIcon />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-white">
                            {item.text}
                          </p>
                          {item.description && (
                            <p className="text-ironsideGrey mt-2.5 pb-5 text-sm font-semibold">
                              {item.description}
                            </p>
                          )}
                        </div>
                      </div>
                      {j < section.items.length - 1 && (
                        <div className="bg-blackCat h-[1px] w-full"></div>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WaysYouEarn;
