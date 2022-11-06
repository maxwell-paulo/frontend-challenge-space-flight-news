import { HomePageCard } from "../../components/HomePageCard/HomePageCard.js";
import { useEffect, useState } from "react";
import axios from "axios";
import { parseISO } from "date-fns";
import moment from "moment";

export function Home() {
  const [cards, setCards] = useState([]);

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
      {cards
        .slice(0)
        .reverse()
        .map((currentCard, index) => {
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
              />
            </>
          );
        })}
    </>
  );
}
