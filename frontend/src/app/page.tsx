import Header from "../components/Header";

export default function Home() {
  return (
    <main className={`flex flex-col justify-center items-center`}>
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
    </main>
  );
}
