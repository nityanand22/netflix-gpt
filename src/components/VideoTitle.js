const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-2xl md:text-4xl font-bold">{title}</h1>
      <p className="hidden md:inline-block py-6 text-lg w-1/4">{overview}</p>
      <div className="my-4 md:m-0">
        <button className="bg-red-700 text-white py-1 md:py-3 md:px-8 text-xl rounded-md font-bold ">
          ▶️Play
        </button>
        <button className="hidden md:inline-block mx-2 bg-white text-black py-3 px-8 text-lg rounded-md font-bold">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
