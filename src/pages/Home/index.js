import { HomePageCard } from "../../components/HomePageCard/HomePageCard.js";
import { useEffect, useState } from "react";
import axios from "axios";

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
        .map((currentCard) => {
          return (
            <>
              <HomePageCard
                imageUrl={currentCard.imageUrl}
                title={currentCard.title}
                publishedAt={currentCard.publishedAt}
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
