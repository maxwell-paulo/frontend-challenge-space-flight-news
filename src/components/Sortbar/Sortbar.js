import Select from "react-select";

export function Sortbar(props) {
  const { cards } = props;

  function handleSelect(e) {}

  function styleFunction(provided, state) {
    return { ...provided, color: state.isFocused ? "blue" : "red" };
  }

  const options = [
    { value: "Mais antigas", label: "Mais antigas" },
    { value: "Mais novas", label: "Mais novas" },
  ];
  return (
    <Select
      options={options}
      onChange={handleSelect}
      placeholder="Sort"
      styles={styleFunction}
    ></Select>
  );
}
