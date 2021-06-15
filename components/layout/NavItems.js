import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAuth } from "../../contexts/AuthContext";

export default function NavItems({
  isExpanded,
  setIsExpanded,
  navItemsVisible,
}) {
  const { signout } = useAuth();
  const links = [
    { "text": "Services", "route": "#services" },
    { "text": "About Us", "route": "#about" },
    { "text": "Office Locations", "route": "#office" },
    { "text": "Contact Us", "route": "#contact" },
  ];
  return (
    <div
      className={`fixed top-20 right-1/2 translate-x-1/2 w-full max-w-screen-md transform transition-transform duration-500 ease-in-out ${
        isExpanded ? "translate-y-0 shadow-lg" : "-translate-y-full"
      } ${
        !navItemsVisible && "invisible"
      } bg-white bg-opacity-50 backdrop-filter backdrop-blur-lg`}
    >
      <div>
        {links.map((link) => {
          const defaultClass =
            "px-7 py-4 flex cursor-pointer justify-between items-center tracking-wide border-b border-gray-400 font-bold";
          return (
            <a
              href={link.route}
              onClick={() => setIsExpanded(false)}
              className={defaultClass}
              key={link.text}
            >
              <div>{link.text}</div>
              <FontAwesomeIcon className="h-4" icon={faChevronRight} />
            </a>
          );
        })}
        <div
          className="flex items-center justify-between py-4 font-bold tracking-wide border-b border-gray-400 cursor-pointer px-7"
          onClick={() => {
            setIsExpanded(false);
            signout();
          }}
        >
          Sign Out
        </div>
      </div>
    </div>
  );
}
