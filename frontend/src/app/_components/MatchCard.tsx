import React from "react";
import { PlayerDetails, Match } from "@/app/types";
import Link from "next/link";

const placeholderStyles = "bg-linear-to-r from-cyan-500 to-blue-500";

const PlayerDetailsSection = ({ name, backgroundImageSrc }: PlayerDetails) => {
  return (
    <div
      className={`flex flex-col justify-end align-center w-1/2 bg-[url(${backgroundImageSrc})] bg-cover bg-center ${placeholderStyles}`}
    >
      <p className="text-center pb-1">{name}</p>
    </div>
  );
};

const MatchCard = ({ eventName, round, date, player1, player2, id }: Match) => {
  return (
    <div className="relative h-48 w-full md:h-96 md:w-1/3 lg:w-1/5">
      {/* Use encodeURIComponent: https://stackoverflow.com/a/50943429 */}
      <Link href={`/match/${encodeURIComponent(id)}`}>
        <div className="absolute top-2 left-2">
          <p>{eventName}</p>
          <p>{round}</p>
          <p>{date}</p>
        </div>
        <div className="flex flex-row h-full p-1">
          <PlayerDetailsSection {...player1} />
          <PlayerDetailsSection {...player2} />
        </div>
      </Link>
    </div>
  );
};

export default MatchCard;
