import React from "react";

interface PlayerDetailsProps {
  backgroundImageSrc: string;
  name: string;
}

interface MatchCardProps {
  eventName: string;
  round: string;
  date: string;
  player1: PlayerDetailsProps;
  player2: PlayerDetailsProps;
}

const placeholderStyles = "bg-linear-to-r from-cyan-500 to-blue-500";

const PlayerDetailsSection = ({
  name,
  backgroundImageSrc,
}: PlayerDetailsProps) => {
  return (
    <div
      className={`flex flex-col justify-end align-center w-1/2 bg-[url(${backgroundImageSrc})] bg-cover bg-center ${placeholderStyles}`}
    >
      <p className="text-center pb-1">{name}</p>
    </div>
  );
};

const MatchCard = ({
  eventName,
  round,
  date,
  player1,
  player2,
}: MatchCardProps) => {
  return (
    <div className={`relative h-48 w-full md:h-96 md:w-1/3 lg:w-1/5`}>
      <div className="absolute top-2 left-2">
        <p>{eventName}</p>
        <p>{round}</p>
        <p>{date}</p>
      </div>
      <div className="flex flex-row h-full p-1">
        <PlayerDetailsSection {...player1} />
        <PlayerDetailsSection {...player2} />
      </div>
    </div>
  );
};

export default MatchCard;
