import { HomePageCard } from "../../components/HomePageCard/HomePageCard.js";
import { Searchbar } from "../../components/Searchbar/Searchbar.js";
import { Navbar } from "../../components/Navbar/Navbar.js";
import { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";

export function Home() {
  let [cards, setCards] = useState([]);
  const [order, setOrder] = useState(1);
  const [colunmOrder, setColunmOrder] = useState(cards);
  const [cardsPerPage, setCardsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(0);
  const [sort, setSort] = useState({
    Sort: "Mais novas",
  });

  const pages = Math.ceil(cards.length / cardsPerPage);
  const startIndex = currentPage * cardsPerPage;
  const endIndex = startIndex + cardsPerPage;
  const currentCards = cards.slice(0, endIndex);

  cards = cards.sort((a, b) => {
    return a[colunmOrder] > b[colunmOrder] ? order : order;
  });

  function renderButton() {
    if (currentPage === pages) {
      return "hidden";
    } else {
      return "flex m-auto bg-white border-solid border border-violet-400 rounded-sm p-3 mb-5 text-violet-400 font-Roboto hover:-translate-y-0.2  transform transition hover:bg-violet-400 hover:text-white";
    }
  }

  function renderDots() {
    if (currentPage === pages) {
      return "hidden";
    } else {
      return "flex m-auto w-3 h-3 bg-gray-300 mb-1 border-solid border border-gray-400";
    }
  }

  function handleOrder(e) {
    setSort({ ...sort, [e.target.name]: e.target.value });
    if (e.target.value !== sort.Sort) {
      setOrder(-order);
      setColunmOrder(e);
    }
  }

  useEffect(() => {
    async function fetchCard() {
      try {
        const response = await axios.get(
          "https://api.spaceflightnewsapi.net/v3/articles"
        );

        setCards([...response.data]);
      } catch (err) {
        console.log(err);
      }
    }
    fetchCard();
  }, []);

  return (
    <>
      <div className="flex mt-5 justify-end items-center mr-5 gap-5">
        <Searchbar />
        <select
          className="w-30 h-10 font-Roboto border-gray-300 border rounded-md pl-2 text-gray-500"
          onChange={handleOrder}
          name="Sort"
        >
          <option hidden value="Mais novas">
            Sort
          </option>
          <option disabled>Sort</option>
          <option value="Mais antigas">Mais antigas</option>
          <option value="Mais novas">Mais novas</option>
        </select>
      </div>
      <Navbar />

      {currentCards.map((currentCard, index) => {
        const postDate = new Date(currentCard.publishedAt);
        return (
          <>
            <HomePageCard
              imageUrl={currentCard.imageUrl}
              title={currentCard.title}
              publishedAt={moment(postDate).format("DD/MM/YYYY")}
              summary={currentCard.summary}
              url={currentCard.url}
              id={currentCard.id}
              index={index}
            />
          </>
        );
      })}
      <div className={renderDots()}></div>
      <div className={renderDots()}></div>
      <div className={renderDots()}></div>
      <button
        value={currentPage + 1}
        className={renderButton()}
        onClick={(e) => setCurrentPage(Number(e.target.value))}
      >
        Carregar Mais{" "}
      </button>
    </>
  );
}
