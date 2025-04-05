import "./styles.css";

export default function Home() {
  return (
    <nav>
      <a href="/" className="left">
        <img
          className="logo"
          src="./../../../public/movie-svgrepo-com.svg"
          alt="logo"
        />

        <span>Movinizer</span>
      </a>
      <div className="search">
        <form>
          <textarea></textarea>
        </form>
      </div>
      <div className="right">
        <a href="/catagories">Catagories</a>
        <a href="/favorites">Favorites</a>
        <a href="/newist">Newist</a>
      </div>
    </nav>
  );
}
