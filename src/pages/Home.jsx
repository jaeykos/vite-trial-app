import Navbar from "../components/Navbar";
import NavbarChat from "../components/NavbarChat";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="flex h-full w-full text-gray-400">
        <div className="mt-[120px] flex flex-col h-auto w-full md:flex-row ">
          <div className="LeftSide flex flex-col  h-full w-full items justify-between py-36 px-10 border-red-400 border">
            <div className="text-8xl w-[500px] font-bold">
              Find your Everlasting Penpal
            </div>
            <div className="text-4xl ">
              Lifelong is AI-based penpal match finder that finds the most
              compatible penpal through reinforced learning. Sign up to find
              your true lifelong penpal that you can share deep connection with.
            </div>
            <div className="text-md ">
              Disclaimer: just for training purpose, we dont sell data reveal
              identity
            </div>
          </div>
          <div className="RightSide w-full">
            <form className=""></form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
