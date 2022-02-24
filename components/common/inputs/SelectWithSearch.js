import { useState } from "react";
import SelectSearch, { fuzzySearch } from "react-select-search";

const SelectWithSearch = () => {
  const options = [
    { name: "Swedish", value: "v" },
    { name: "English", value: "a" },
    { name: "Eglish", value: "b" },
    { name: "Enlish", value: "c" },
    { name: "Engsh", value: "d" },
    { name: "Bangla", value: "e" },
    { name: "Hindi", value: "f" },
    { name: "Chinice", value: "g" },
    { name: "English", value: "h" },
    {
      type: "group",
      name: "Group name",
      items: [{ name: "Spanish", value: "es" }],
    },
  ];

  const [val, setVal] = useState("");
  console.log(val);
  return (
    <div>
      <SelectSearch
        options={options}
        value={val}
        onChange={setVal}
        search={true}
        filterOptions={fuzzySearch}
        emptyMessage="Not found"
        name="language"
        debounce={300}
        placeholder="Choose your language"
      />
    </div>
  );
};

export default SelectWithSearch;
