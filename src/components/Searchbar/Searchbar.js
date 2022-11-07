import axios from "axios";
import { useState, useEffect } from "react";
import Select from "react-select";
import { useNavigate } from "react-router-dom";

export function Searchbar() {
  const [articlesList, setArticlesList] = useState([]);
  const navigate = useNavigate();

  function handleSelect(e) {
    navigate(`/${e.value}`);
  }

  function styleFunction(provided, state) {
    return { ...provided, color: state.isFocused ? "blue" : "red" };
  }

  useEffect(() => {
    async function fetchArticle() {
      try {
        const response = await axios.get(
          "https://api.spaceflightnewsapi.net/v3/articles"
        );

        setArticlesList(response.data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchArticle();
  }, []);

  const options = articlesList.map((currentArticle) => {
    return {
      value: `${currentArticle.id}`,
      label: `${currentArticle.title}`,
    };
  });

  return (
    <div>
      <Select
        options={options}
        onChange={handleSelect}
        styles={styleFunction}
        placeholder="Search"
      />
    </div>
  );
}
