import React from "react";
import { GreenCrossIcon, Red2CrossIcon } from "../common/Icons";

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

const TeamListMobile: React.FC<TeamListProps> = ({ teamData }) => {
  if (!teamData || !teamData.length) return <div>No team data</div>;

  const maxItems = Math.max(...teamData.map((team) => team.items.length));

  return (
    <div className="border-winterWay mx-auto w-full max-w-[500px] overflow-hidden rounded-xl border">
      {/* Header Row */}
      <div className="border-winterWay grid grid-cols-3 border-b">
        {teamData.map((team, index) => (
          <div
            key={index}
            className={`p-4 text-center ${
              index === 0
                ? "font-semibold text-white"
                : "text-wallStreet font-bold"
            }`}
          >
            <h3 className="font-semibold">{team.title}</h3>
            {team.subTitle && (
              <h4 className="mt-1 font-semibold">{team.subTitle}</h4>
            )}
          </div>
        ))}
      </div>

      {/* Items Rows */}
      {Array.from({ length: maxItems }).map((_, rowIndex) => (
        <div
          key={rowIndex}
          className="border-winterWay border-b last:border-b-0"
        >
          {teamData.map((team, teamIndex) => {
            const item = team.items[rowIndex];
            return (
              <div
                key={teamIndex}
                className="text-decemberSky gap-1 p-3 text-base font-semibold"
              >
                <p className="text-center">{item.title}</p>
                <div className="grid grid-cols-3">
                  <div className="mx-auto h-3 w-3">
                    <GreenCrossIcon />
                  </div>
                  <div className="mx-auto h-3 w-3">
                    <Red2CrossIcon />
                  </div>
                  <div className="mx-auto h-3 w-3">
                    <Red2CrossIcon />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default TeamListMobile;
