function SideBar(props) {
  const { toggleSidebar, isOpen, data } = props;
  return (
    <>
      <div
        className={`overflow-y-scroll px-4 py-5 top-0 right-0 w-[35vw] min-w-80 bg-indigo-950 text-white fixed h-full ${
          isOpen ? "visible" : "invisible"
        }`}
      >
        <button onClick={() => toggleSidebar()} className="flex justify-center">
          <i className="fa-solid fa-arrow-right"></i>
        </button>
        <h1 className="text-3xl pt-5">{data?.title}</h1>
        <p className="text-2xl pt-4">{data?.date}</p>
        <p className="text-xl pt-3">{data?.explanation}</p>
      </div>
    </>
  );
}

export default SideBar;
