import SearchIcon from "components/common/svgs/search.svg";

const SearchInput = ({ placeholder, val, setVal }) => {
  return (
    <div>
      <label className="relative block">
        <span className="sr-only">Search</span>
        <span className="absolute inset-y-0 left-0 flex items-center pl-2">
          {/* <svg className="h-5 w-5 fill-steelblue" viewBox="0 0 20 20"></svg> */}
          <SearchIcon />
        </span>
        <input
          className="placeholder:text-slate-400 focus:border-sky-500 focus:ring-sky-500 block h-[46px] w-full rounded-md border border-black-tint-700 bg-white py-3 pl-10 pr-3 shadow-sm focus:outline-none focus:ring-1 sm:text-sm"
          placeholder={placeholder}
          type="search"
          name="search"
          value={val}
          onChange={(e) => setVal(e.target.value)}
        />
      </label>
    </div>
  );
};

export default SearchInput;
