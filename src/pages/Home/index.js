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
  const [cardsPerPage, setCardsPerPage] = useState(3);
  const [currentPage, setCurrentPage] = useState(0);

  const pages = Math.ceil(cards.length / cardsPerPage);
  const startIndex = currentPage * cardsPerPage;
  const endIndex = startIndex + cardsPerPage;
  const currentCards = cards.slice(0, endIndex);

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

      <button
        value={currentPage + 1}
        onClick={(e) => setCurrentPage(Number(e.target.value))}
      >
        BOTÃO
      </button>
    </>
  );
}
