import MatchCard from "./MatchCard";
import { Match } from "./types";

const MatchList = ({ matches }: { matches: Match[] }) => {
  return (
    <div className="flex flex-row flex-wrap gap-8 px-2">
      {matches.map((match) => (
        <MatchCard key={match.id} {...match} />
      ))}
      <MatchCard
        eventName="Event"
        round="Round 1"
        date="2026/04/25"
        player1={{ backgroundImageSrc: "", name: "Player Test1" }}
        player2={{
          backgroundImageSrc: "",
          name: "SomeLongerPlayer TestLongerName",
        }}
      />
      <MatchCard
        eventName="Event"
        round="Round 1"
        date="2026/04/25"
        player1={{ backgroundImageSrc: "", name: "Player Test1" }}
        player2={{
          backgroundImageSrc: "",
          name: "SomeLongerPlayer TestLongerName",
        }}
      />
      <MatchCard
        eventName="Event"
        round="Round 1"
        date="2026/04/25"
        player1={{ backgroundImageSrc: "", name: "Player Test1" }}
        player2={{
          backgroundImageSrc: "",
          name: "SomeLongerPlayer TestLongerName",
        }}
      />
      <MatchCard
        eventName="Event"
        round="Round 1"
        date="2026/04/25"
        player1={{ backgroundImageSrc: "", name: "Player Test1" }}
        player2={{
          backgroundImageSrc: "",
          name: "SomeLongerPlayer TestLongerName",
        }}
      />
      <MatchCard
        eventName="Event"
        round="Round 1"
        date="2026/04/25"
        player1={{ backgroundImageSrc: "", name: "Player Test1" }}
        player2={{
          backgroundImageSrc: "",
          name: "SomeLongerPlayer TestLongerName",
        }}
      />
      <MatchCard
        eventName="Event"
        round="Round 1"
        date="2026/04/25"
        player1={{ backgroundImageSrc: "", name: "Player Test1" }}
        player2={{
          backgroundImageSrc: "",
          name: "SomeLongerPlayer TestLongerName",
        }}
      />
    </div>
  );
};

export default MatchList;
