function Footer(props) {
  const { toggleSidebar, data } = props;
  return (
    <>
      <div className="py-3 px-5 text-white absolute w-full bottom-0 left-0 flex justify-between">
        <div>
          <p className="text-2xl text-gray-50">Daily Nasa Picture</p>
          <h1 className="text-5xl">{data?.title}</h1>
        </div>
        <div>
          <button onClick={() => toggleSidebar()}>
            <i className="fa-solid fa-circle-info text-2xl"></i>
          </button>
        </div>
      </div>
    </>
  );
}

export default Footer;
