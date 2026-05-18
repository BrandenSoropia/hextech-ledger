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

const MatchCard = ({
  eventName,
  round,
  date,
  player1,
  player2,
}: MatchCardProps) => {
  return (
    <div className="relative">
      <div className="absolute top-0 left-0">
        <p>{eventName}</p>
        <p>{round}</p>
        <p>{date}</p>
      </div>
      <div>
        <p>{player1.name}</p>
      </div>
      <div>
        <p>{player2.name}</p>
      </div>
    </div>
  );
};

export default MatchCard;
