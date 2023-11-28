import IcBaselinePlus from "../icon/IcBaselinePlus";

const BtnThreads = () => {
  return (
    <a
      href=""
      className="flex flex-col justify-center w-20 h-20 p-3 text-center text-white font-bold bg-cyan-500 rounded-full transition ease-in-out duration-100  hover:scale-105"
    >
      <span className="flex justify-center text-3xl font-bold">
        <IcBaselinePlus />
      </span>
      <span className="text-sm">投稿</span>
    </a>
  );
};

export default BtnThreads;
