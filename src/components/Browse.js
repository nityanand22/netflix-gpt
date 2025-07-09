import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import Footer from "./Footer";
import FAQ from "./FAQ";

const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  useNowPlayingMovies();
  usePopularMovies();
  useUpcomingMovies();
  useTopRatedMovies();

  return (
    <div className="overflow-x-hidden">
      <Header />
      {showGptSearch ? (
        <GptSearch />
      ) : (
        <div className="flex flex-col">
          <MainContainer />
          <SecondaryContainer />
          <FAQ />
          <Footer />
        </div>
      )}
    </div>
  );
};

export default Browse;
