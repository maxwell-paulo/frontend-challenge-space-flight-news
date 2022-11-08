import { useState } from "react";

export function Sortbar(props) {
  const { sort, setSort } = (props[(sort, setSort)] = useState({}));
  console.log(sort);

  function handleChange(e) {
    setSort({ ...sort, [e.target.name]: e.target.value });
    console.log(sort);
  }

  return (
    <select className="w-60 font-Roboto" name="Sort" onChange={handleChange}>
      <option hidden defaultValue>
        Sort
      </option>
      <option disabled>Sort</option>
      <option value="Mais antigas">Mais antigas</option>
      <option value="Mais novas">Mais novas</option>
    </select>
  );
}
