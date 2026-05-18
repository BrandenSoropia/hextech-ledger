import Header from "../components/Header";
import MatchCard from "./_components/MatchCard";

export default function Home() {
  return (
    <main className={`flex-1 flex-col justify-center items-center`}>
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
      <section className="w-full h-full">
        VODS List
        {/* TODO: Figure out why this wont fill width */}
        {/* TODO: Figure out how to equally size cards */}
        <div className="flex flex-row flex-wrap sm:h-1/2 sm:w-1/3 md:h-1/4 md:w-1/5 items-stretch">
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
      </section>
    </main>
  );
}
