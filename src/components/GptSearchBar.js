import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import { useRef } from "react";
import client from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { addGPTMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/" +
        movie +
        "?include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };

  const handleGPTSearchClick = async () => {
    const gptQuery =
      "Act as a movie Recommandation System and suggest some movie for the query :" +
      searchText.current.value +
      "only give me names of 5 movies, comma seperated like the example result given ahead. Example Result : Gadar, Sholay, Don, Golmaal, Koi Mil Gaya ";

    const gptResult = await client.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-4o",
    });

    // if (!gptResult.choices) {
    //   console.log("error");
    // }

    console.log(gptResult.choices[0]?.message?.content);

    const gptMovies = gptResult.choices[0]?.message?.content.split(",");

    const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
    const tmdbResults = await Promise.all(promiseArray);
    dispatch(
      addGPTMovieResult({ movieNames: gptMovies, movieResults: tmdbResults })
    );
  };

  return (
    <div className="pt-[15%] flex justify-center">
      <form
        className="w-1/2 bg-slate-800 grid grid-cols-12"
        onSubmit={(e) => e.preventDefault}
      >
        <input
          ref={searchText}
          className="p-4 m-4 col-span-9"
          type="text"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button
          className="py-2 px-4 m-4 bg-red-600 text-white rounded-lg col-span-3"
          onClick={handleGPTSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
