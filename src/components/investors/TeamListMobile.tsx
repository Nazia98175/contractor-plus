import React from "react";
import {
  GreenCrossIcon,
  Red2CrossIcon,
  Red2CrossMobileIcon,
} from "../common/Icons";

type TeamItem = {
  items: {
    title: string;
    desc: string;
  }[];
  title: string;
  subTitle: string;
  isIcon: boolean;
};

type TeamListProps = {
  teamData: TeamItem[];
};

const TeamListMobile: React.FC<TeamListProps> = ({ teamData }) => {
  if (!teamData || !teamData.length) return <div>No team data</div>;

  const maxItems = Math.max(...teamData.map((team) => team.items.length));

  return (
    <div className="border-winterWay font-myriad mx-auto mt-[77px] w-full max-w-sm overflow-hidden rounded-xl border text-white">
      {/* Header Row */}
      <div className="divide-winterWay grid grid-cols-3 divide-x">
        {teamData.map((team, index) => (
          <div
            key={index}
            className={`relative flex flex-col items-center justify-center p-4 text-center ${
              index === 0
                ? "font-semibold text-white"
                : "text-wallStreet font-bold"
            }`}
          >
            <h3 className="flex h-auto items-center justify-center text-sm leading-tight font-bold sm:text-sm md:text-base">
              {team.title}
            </h3>
            {team.subTitle && (
              <h4 className="text-wallStreet mt-2 text-xs leading-tight font-medium sm:text-sm md:text-base">
                {team.subTitle}
              </h4>
            )}

            {/* Blue Frame label for Enterprise column */}
          </div>
        ))}
      </div>

      {/* Feature Rows */}
      {Array.from({ length: maxItems }).map((_, rowIndex) => {
        const featureTitle = teamData[0]?.items[rowIndex]?.title;

        return (
          <div key={rowIndex}>
            {/* Feature Name Row */}
            <div className="px-4 py-3 text-center">
              <h4 className="text-wallStreet font-myriad text-base tracking-[0.1px]">
                {featureTitle}
              </h4>
            </div>

            {/* Icons Row */}
            <div className="divide-winterWay grid grid-cols-3 divide-x py-2">
              {teamData.map((team, teamIndex) => (
                <div key={teamIndex} className="flex justify-center">
                  {team ? (
                    <div className="h-6 w-6">
                      {team.isIcon ? (
                        <GreenCrossIcon />
                      ) : (
                        <Red2CrossMobileIcon />
                      )}
                    </div>
                  ) : (
                    <div className="h-6 w-6"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TeamListMobile;
