// import axios from "axios";
// import { useState, useEffect } from "react";
// import Select from "react-select";
// import { useNavigate } from "react-router-dom";

export function Searchbar() {
  return <h1>Searchbar</h1>;
  // const [articles, setArticles] = useState([]);
  // const navigate = useNavigate();

  // function handleSelect(e) {
  //   navigate(`/${e.id}`);
  // }

  // function styleFunction(provided, state) {
  //   return { ...provided, color: state.isFocused ? "blue" : "red" };
  // }

  // useEffect(() => {
  //   async function fetchArticles() {
  //     try {
  //       const response = await axios.get(
  //         `https://api.spaceflightnewsapi.net/v3/articles`
  //       );
  //       setArticles(response.data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }
  //   fetchArticles();
  // }, []);

  // const options = articles.map((currentArticle) => {
  //   return {
  //     value: `${currentArticle.id}`,
  //     label: `${currentArticle.title} `,
  //   };
  // });

  // return (
  //   <div>
  //     <Select
  //       options={options}
  //       onChange={handleSelect}
  //       styles={styleFunction}
  //       placeholder="Search"
  //     />
  //   </div>
  // );
}
