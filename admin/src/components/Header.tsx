import { AiOutlineMenuFold, AiOutlineMenuUnfold } from "react-icons/ai";

import Searchbar from "./Searchbar";

interface IHeader {
  toggleNav: () => void;
  closedNav: boolean;
}

const Header = ({ toggleNav, closedNav }: IHeader) => {
  return (
    <div className="sticky top-0 bg-white">
      <div className="flex items-center p-2 space-x-2">
        <button onClick={toggleNav}>
          {closedNav ? (
            <AiOutlineMenuUnfold size={25} />
          ) : (
            <AiOutlineMenuFold size={25} />
          )}
        </button>
        <Searchbar />
      </div>
    </div>
  );
};

export default Header;
