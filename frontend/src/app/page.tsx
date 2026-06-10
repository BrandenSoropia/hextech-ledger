import Header from "../components/Header";
import MatchList from "./_components/MatchList";
import { Match } from "./_components/types";

const placeholderMatches: Match[] = [
  {
    eventName: "Event",
    round: "Round 1",
    date: "2026/04/25",
    player1: { backgroundImageSrc: "", name: "Player Test1" },
    player2: {
      backgroundImageSrc: "",
      name: "SomeLongerPlayer TestLongerName",
    },
    vodUrl: {
      type: "youtube",
    },
    id: "a1",
  },
  {
    eventName: "Event 2",
    round: "Round 2",
    date: "2026/04/25",
    player1: { backgroundImageSrc: "", name: "Player Test1" },
    player2: {
      backgroundImageSrc: "",
      name: "SomeLongerPlayer TestLongerName",
    },
    vodUrl: {
      type: "youtube",
    },
    id: "b2",
  },
  {
    eventName: "Event 3",
    round: "Round 3",
    date: "2026/04/25",
    player1: { backgroundImageSrc: "", name: "Player Test1" },
    player2: {
      backgroundImageSrc: "",
      name: "SomeLongerPlayer TestLongerName",
    },
    vodUrl: {
      type: "youtube",
    },
    id: "c3",
  },
  {
    eventName: "Event 4",
    round: "Round 4",
    date: "2026/04/25",
    player1: { backgroundImageSrc: "", name: "Player Test1" },
    player2: {
      backgroundImageSrc: "",
      name: "SomeLongerPlayer TestLongerName",
    },
    vodUrl: {
      type: "youtube",
    },
    id: "d4",
  },
  {
    eventName: "Event 5",
    round: "Round 5",
    date: "2026/04/25",
    player1: { backgroundImageSrc: "", name: "Player Test1" },
    player2: {
      backgroundImageSrc: "",
      name: "SomeLongerPlayer TestLongerName",
    },
    vodUrl: {
      type: "youtube",
    },
    id: "e5",
  },
  {
    eventName: "Event 6",
    round: "Round 6",
    date: "2026/04/25",
    player1: { backgroundImageSrc: "", name: "Player Test1" },
    player2: {
      backgroundImageSrc: "",
      name: "SomeLongerPlayer TestLongerName",
    },
    vodUrl: {
      type: "youtube",
    },
    id: "f6",
  },
];

export default function Home() {
  return (
    <main className={`flex flex-1 flex-col items-center`}>
      <Header text="The Competitive and Learning Hub for Riftbound" />
      <form className={`flex justify-center items-center`}>
        <label htmlFor="searchTerm">Search Term</label>
        <input
          type="text"
          id="searchTerm"
          name="searchTerm"
          required
          placeholder={"Search champion or event"}
        />
        <button type="submit">Search</button>
      </form>
      <section className="flex flex-col">
        <h2>VODS List</h2>
        <MatchList matches={placeholderMatches} />
      </section>
    </main>
  );
}
