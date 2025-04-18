import { useLocation } from "react-router-dom";
import "./styles.css";
import { FaSearch } from "react-icons/fa";
import {
  MdHome,
  MdOutlineHome,
  MdFavorite,
  MdFavoriteBorder,
  MdCategory,
  MdOutlineCategory,
} from "react-icons/md";

export default function Home() {
  const location = useLocation();
  const currentPath = location.pathname;
  const navItems = [
    {
      name: "Home",
      path: "/",
      iconFilled: MdHome,
      iconOutlined: MdOutlineHome,
    },

    {
      name: "Favorites",
      path: "/favorites",
      iconFilled: MdFavorite,
      iconOutlined: MdFavoriteBorder,
    },
    {
      name: "Categories",
      path: "/categories",
      iconFilled: MdCategory,
      iconOutlined: MdOutlineCategory,
    },
  ];
  return (
    <>
      <nav>
        <a href="/" className="left">
          <svg
            className="logo"
            fill="#fff"
            height="200px"
            width="200px"
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="-42.21 -42.21 306.55 306.55"
            xmlSpace="preserve"
            stroke="#fff"
            strokeWidth="5.3312159999999995"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0">
              <rect
                x="-42.21"
                y="-42.21"
                width="306.55"
                height="306.55"
                rx="153.275"
                fill="#be123c"
                strokeWidth="0"
              ></rect>
            </g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <g>
                {" "}
                <g>
                  {" "}
                  <g>
                    {" "}
                    <path d="M111.067,0C49.823,0,0,49.823,0,111.067s49.823,111.067,111.067,111.067s111.067-49.823,111.067-111.067 S172.31,0,111.067,0z M111.067,214.2c-56.868,0-103.133-46.266-103.133-103.133C7.934,54.2,54.199,7.933,111.067,7.933 c56.868,0,103.133,46.266,103.133,103.134C214.2,167.935,167.934,214.2,111.067,214.2z"></path>{" "}
                    <path d="M126.933,111.067c0-8.749-7.118-15.867-15.867-15.867c-8.749,0-15.866,7.118-15.866,15.867 c0,8.749,7.118,15.867,15.867,15.867C119.816,126.934,126.933,119.816,126.933,111.067z M103.133,111.067 c0-4.375,3.558-7.933,7.933-7.933s7.933,3.558,7.933,7.933S115.442,119,111.067,119S103.133,115.442,103.133,111.067z"></path>{" "}
                    <path d="M177.93,122.188c-11.367-6.56-25.952-2.651-32.512,8.712c-3.178,5.507-4.023,11.919-2.376,18.059 c1.645,6.142,5.582,11.272,11.088,14.453c3.738,2.157,7.825,3.184,11.859,3.184c8.232,0,16.248-4.271,20.652-11.896 C193.202,143.335,189.296,128.75,177.93,122.188z M179.771,150.733c-4.373,7.579-14.094,10.184-21.673,5.807 c-3.67-2.119-6.297-5.539-7.393-9.634c-1.096-4.092-0.535-8.369,1.586-12.04c2.934-5.084,8.278-7.929,13.767-7.929 c2.69,0,5.413,0.684,7.906,2.123C181.541,133.434,184.146,143.156,179.771,150.733z"></path>{" "}
                    <path d="M111.067,150.733c-13.124,0-23.8,10.676-23.8,23.8c0,13.124,10.676,23.8,23.8,23.8c13.124,0,23.8-10.676,23.8-23.8 C134.867,161.409,124.191,150.733,111.067,150.733z M111.067,190.4c-8.749,0-15.867-7.118-15.867-15.867 c0-8.749,7.118-15.867,15.867-15.867c8.749,0,15.867,7.118,15.867,15.867C126.933,183.282,119.816,190.4,111.067,190.4z"></path>{" "}
                    <path d="M111.067,23.8c-13.124,0-23.8,10.676-23.8,23.8c0,13.124,10.676,23.8,23.8,23.8c13.124,0,23.8-10.676,23.8-23.8 C134.867,34.476,124.191,23.8,111.067,23.8z M111.067,63.467c-8.749,0-15.867-7.118-15.867-15.867 c0-8.749,7.118-15.867,15.867-15.867c8.749,0,15.867,7.118,15.867,15.867C126.934,56.349,119.816,63.467,111.067,63.467z"></path>{" "}
                    <path d="M166.071,103.129c4.035,0,8.121-1.027,11.859-3.184c11.365-6.562,15.272-21.147,8.712-32.512 c-6.562-11.365-21.147-15.266-32.512-8.712c-5.507,3.18-9.444,8.311-11.088,14.453c-1.646,6.14-0.802,12.553,2.376,18.059 C149.823,98.861,157.84,103.129,166.071,103.129z M150.704,75.227c1.096-4.094,3.723-7.515,7.393-9.634 c2.493-1.439,5.216-2.123,7.906-2.123c5.487,0,10.833,2.845,13.767,7.929c4.375,7.577,1.77,17.3-5.807,21.673 c-7.579,4.377-17.3,1.77-21.673-5.807C150.17,83.596,149.608,79.32,150.704,75.227z"></path>{" "}
                    <path d="M68.003,58.721c-11.369-6.562-25.952-2.65-32.512,8.712c-6.56,11.365-2.653,25.95,8.712,32.512 c3.738,2.157,7.825,3.184,11.859,3.184c8.232,0,16.248-4.271,20.652-11.896c3.178-5.507,4.023-11.919,2.376-18.059 C77.447,67.032,73.509,61.902,68.003,58.721z M69.843,87.267c-4.373,7.575-14.094,10.182-21.673,5.807 C40.592,88.7,37.988,78.977,42.363,71.4c2.934-5.084,8.278-7.929,13.767-7.929c2.69,0,5.413,0.684,7.906,2.123 c3.67,2.119,6.297,5.539,7.393,9.634C72.525,79.32,71.964,83.596,69.843,87.267z"></path>{" "}
                    <path d="M44.203,122.188c-11.366,6.562-15.272,21.147-8.712,32.512c4.405,7.628,12.421,11.896,20.652,11.896 c4.035,0,8.121-1.027,11.859-3.184c5.507-3.18,9.444-8.311,11.088-14.453c1.646-6.14,0.802-12.553-2.376-18.059 C70.154,119.535,55.574,115.628,44.203,122.188z M71.429,146.906c-1.096,4.094-3.723,7.515-7.393,9.634 c-7.577,4.375-17.302,1.768-21.673-5.807c-4.375-7.577-1.77-17.3,5.807-21.673c2.493-1.439,5.216-2.123,7.906-2.123 c5.487,0,10.833,2.845,13.767,7.929C71.964,138.537,72.525,142.813,71.429,146.906z"></path>{" "}
                  </g>{" "}
                </g>{" "}
              </g>{" "}
            </g>
          </svg>

          <span>Movinizer</span>
        </a>
        <div className="search">
          <form>
            <input
              type="text"
              className="search-input"
              placeholder="Search a movie? "
            />
            <FaSearch className="search-icon" />
          </form>
        </div>
        <div className="right">
          <a href="/catagories">Catagories</a>
          <a href="/favorites">Favorites</a>
        </div>
      </nav>
      <div className="bottom">
        {navItems.map((x, idx) => {
          const Icon = currentPath === x.path ? x.iconFilled : x.iconOutlined;
          return (
            <a key={idx} href={`${x.path}`}>
              <Icon size={28} />
              <span>{x.name}</span>
            </a>
          );
        })}
      </div>
    </>
  );
}
