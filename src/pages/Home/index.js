import { HomePageCard } from "../../components/HomePageCard/HomePageCard.js";
import { Searchbar } from "../../components/Searchbar/Searchbar.js";
import { Sortbar } from "../../components/Sortbar/Sortbar.js";
import { Navbar } from "../../components/Navbar/Navbar.js";
import { useEffect, useState } from "react";
import axios from "axios";
import { parseISO } from "date-fns";
import moment from "moment";

export function Home() {
  const [cards, setCards] = useState([]);
  const [cardsPerPage, setCardsPerPage] = useState(4);
  const [currentPage, setCurrentPage] = useState(0);

  const pages = Math.ceil(cards.length / cardsPerPage);
  const startIndex = currentPage * cardsPerPage;
  const endIndex = startIndex + cardsPerPage;
  const currentCards = cards.slice(0, endIndex);
  console.log(`currentPage: ${currentPage} pages: ${pages}`);

  function renderButton() {
    if (currentPage === pages) {
      return "hidden";
    } else {
      return "flex m-auto bg-white border-solid border-2 border-violet-400  p-3 mb-5 text-violet-400 font-Roboto hover:-translate-y-0.2  transform transition hover:bg-violet-400 hover:text-white";
    }
  }

  function renderDots() {
    if (currentPage === pages) {
      return "hidden";
    } else {
      return "flex m-auto w-3 h-3 bg-gray-300 mb-1 border-solid border-2 border-gray-400";
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
      <Searchbar />
      <Sortbar card={cards} />
      <Navbar />

      {currentCards.map((currentCard, index) => {
        const postDate = parseISO(currentCard.publishedAt);
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
