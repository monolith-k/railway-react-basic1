// components/Header.js
import IcBaselinePlus from "../icon/IcBaselinePlus";


const Header = () => {
  return (
    <header className="mx-2 p-5 bg-cyan-500 text-white font-semibold tracking-wide rounded-b-3xl shadow-md">
      <h1 className="text-3xl flex items-center justify-between">
        掲示板
        <a
      href=""
      className="flex justify-center align-middle py-2 px-3 text-center text-black font-bold bg-white rounded-3xl transition ease-in-out duration-100 hover:scale-105"
    >
      <span className="font-bold text-xl">
        <IcBaselinePlus />
      </span>
      <span className="flex justify-center text-sm">スレッド</span>
    </a>
      </h1>
    </header>
  );
};

export default Header;
