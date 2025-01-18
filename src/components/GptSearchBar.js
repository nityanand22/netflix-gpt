import lang from "../utils/languageConstants";

const GptSearchBar = () => {
  return (
    <div className="pt-[15%] flex justify-center">
      <form className="w-1/2 bg-slate-800 grid grid-cols-12">
        <input
          className="p-4 m-4 col-span-9"
          type="text"
          placeholder={lang.hindi.gptSearchPlaceholder}
        />
        <button className="py-2 px-4 m-4 bg-red-600 text-white rounded-lg col-span-3">
          {lang.hindi.search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
