function Main(props) {
  const { data } = props;

  return (
    <>
      <div className="w-full relative bg-no-repeat bg-cover h-screen z-0 overflow-hidden">
        <img
          src={data?.hdurl}
          alt={data.title || "Background image"}
          className="w-full h-full object-cover"
        />
      </div>
    </>
  );
}

export default Main;
