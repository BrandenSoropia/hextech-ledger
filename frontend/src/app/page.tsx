import Header from "../components/Header";
import MatchList from "./_components/MatchList";

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
        <MatchList />
      </section>
    </main>
  );
}
