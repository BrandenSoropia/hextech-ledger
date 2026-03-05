import Link from "next/link";
/*
 Matches - paginated list of all videos from most recent to oldest

 (Future Pages)
 Events - paginated list of all tournaments, link to official stream,
 show future/ongoing/past
 Deck Lists - list of publicized topping deck lists. see if official riot source
*/

const NavBar = () => {
  // TODO: indicate current page. Check if next has some thing with routing
  return (
    <nav>
      <ol className={`flex flex-start gap-x-8 bg-carbon-black`}>
        <Link href="/">Hextech Ledger</Link>
        <Link href="/matches">Matches</Link>
        <Link href="/events">Events</Link>
        <Link href="/deck-lists">Deck Lists</Link>
      </ol>
    </nav>
  );
};

export default NavBar;
