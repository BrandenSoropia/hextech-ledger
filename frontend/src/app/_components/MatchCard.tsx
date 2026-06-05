import React from "react";

interface PlayerDetails {
  backgroundImageSrc: string;
  name: string;
}

interface MatchCardProps {
  eventName: string;
  round: string;
  date: string;
  player1: PlayerDetails;
  player2: PlayerDetails;
}

const placeholderStyles = "bg-linear-to-r from-cyan-500 to-blue-500";


const MatchCard = ({
  eventName,
  round,
  date,
  player1,
  player2,
}: MatchCardProps) => {
  return (
    <div
      className={`relative h-48 w-full md:h-96 md:w-1/3 lg:w-1/5 ${placeholderStyles}`}
    >
      <div className="absolute top-0 left-0">
        <p>{eventName}</p>
        <p>{round}</p>
        <p>{date}</p>
      </div>
      <div className="flex">
        <div className="w-1/2">
          <p>{player1.name}</p>
        </div>
        <div className="w-1/2">
          <p>{player2.name}</p>
        </div>
      </div>
    </div>
  );
};

export default MatchCard;
