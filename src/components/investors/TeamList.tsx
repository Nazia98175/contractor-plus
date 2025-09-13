import React from "react";
import { Red2CrossIcon, GreenCrossIcon } from "../common/Icons";

type TeamItem = {
  items: {
    title: string;
    desc: string;
  }[];
  title: string;
  subTitle: string;
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
    <div className="border-winterWay z-40 mx-auto mt-[77px] w-full max-w-[1029px] overflow-hidden rounded-xl border text-white">
      <table className="w-full table-fixed overflow-auto">
        <thead>
          <tr className="divide-winterWay divide-x">
            {teamData.map((team, index) => (
              <th
                key={index}
                className={`p-[22px] text-center ${
                  index === 0
                    ? "font-semibold text-white"
                    : "text-wallStreet font-bold"
                }`}
              >
                <h3 className="font-semibold">{team.title}</h3>
                {team.subTitle && (
                  <h4 className="mt-3 font-semibold">{team.subTitle}</h4>
                )}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: maxItems }, (_, rowIndex) => (
            <tr key={rowIndex}>
              {teamData.map((team, teamIndex) => (
                <td
                  key={teamIndex}
                  className="border-winterWay h-full border-[0.2px]"
                >
                  {team.items[rowIndex] ? (
                    <div className="h-full min-h-[80px] px-[22px] py-3">
                      <h3 className="text-decemberSky flex items-center gap-1 text-base font-semibold">
                        <div
                          className={`${teamIndex === 0 ? "block h-3 w-3" : "hidden"}`}
                        >
                          <GreenCrossIcon />
                        </div>
                        {team.items[rowIndex].title}
                      </h3>
                      {team.items[rowIndex].desc && (
                        <>
                          <div
                            className={`mx-auto w-fit ${teamIndex === 0 ? "hidden" : "block h-3 w-3"}`}
                          >
                            <Red2CrossIcon />
                          </div>
                          <h3 className="text-wallStreet mt-0.5 text-xs font-medium">
                            {team.items[rowIndex].desc}
                          </h3>
                        </>
                      )}
                    </div>
                  ) : (
                    // Empty cell with same height
                    <div className="h-full min-h-[20px] px-[22px] py-3">
                      {/* Empty space to maintain consistent height */}
                    </div>
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TeamList;
