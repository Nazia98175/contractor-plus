import React from "react";
import { Red2CrossIcon, GreenCrossIcon } from "../common/Icons";

type TeamItem = {
  items: {
    title: string;
    desc?: string;
    isIcon?: boolean;
  }[];
  title: string;
  subTitle?: string;
};

type TeamListProps = {
  teamData: TeamItem[];
};

const TeamList: React.FC<TeamListProps> = ({ teamData }) => {
  if (!teamData || !Array.isArray(teamData)) {
    return <div>No team data available</div>;
  }

  const maxItems = Math.max(...teamData.map((team) => team.items.length));

  return (
    <section className="mx-auto hidden w-full max-w-[1029px] px-2 md:block">
      <div className="border-winterWay z-40 mt-[77px] overflow-hidden rounded-xl border text-white">
        <table className="w-full table-fixed overflow-auto">
          <thead>
            <tr className="divide-winterWay divide-x">
              {teamData.map((team, index) => (
                <th
                  key={index}
                  className={`font-myriad p-2.5 text-center md:p-[22px] ${
                    index === 0
                      ? "font-semibold text-white"
                      : "text-wallStreet font-bold"
                  }`}
                >
                  <h3 className="font-bold sm:text-base md:text-xl lg:text-2xl xl:text-[28px]">
                    {team.title}
                  </h3>
                  {team.subTitle && (
                    <h4 className="mt-3 text-xs font-semibold tracking-[0.1px] sm:text-sm md:text-base">
                      {team.subTitle}
                    </h4>
                  )}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: maxItems }, (_, rowIndex) => (
              <tr key={rowIndex}>
                {teamData.map((team, teamIndex) => {
                  const item = team.items[rowIndex];
                  return (
                    <td
                      key={teamIndex}
                      className="border-winterWay h-full border-[0.2px]"
                    >
                      {item ? (
                        <div className="h-full px-[22px] py-3 md:min-h-[80px]">
                          <h3 className="text-decemberSky flex items-center justify-center gap-1 text-center text-base font-semibold">
                            {item.title && (
                              <>
                                <span className="h-3 w-3">
                                  <GreenCrossIcon />
                                </span>
                                <p>{item.title}</p>
                              </>
                            )}
                          </h3>
                          {item.desc && (
                            <div className="mt-1 flex items-center gap-1">
                              <div
                                className={`${teamIndex === 0 ? "mx-auto block h-3 w-3 md:mx-0" : "hidden"}`}
                              >
                                {item.isIcon ? <Red2CrossIcon /> : null}
                              </div>
                              <h3 className="text-wallStreet text-xs font-medium">
                                {item.desc}
                              </h3>
                            </div>
                          )}
                        </div>
                      ) : (
                        // Empty cell with same height
                        <div className="h-full min-h-[20px] px-[22px] py-3" />
                      )}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default TeamList;
