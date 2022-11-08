import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import moment from "moment";
import { Navbar } from "../../components/Navbar/Navbar";

export function Infos() {
  const { id } = useParams();
  const [card, setCard] = useState([]);
  let postDate = new Date(card.publishedAt);

  useEffect(() => {
    async function fetchCard() {
      try {
        const response = await axios.get(
          `https://api.spaceflightnewsapi.net/v3/articles/${id}`
        );

        setCard(response.data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchCard();
  }, [id]);

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center m-auto">
        <div className="flex m-auto mb-14 justify-between items-center w-4/6 gap-x-20">
          <img src={card.imageUrl} alt="Article" className="max-w-md w-60" />
          <div className="flex flex-col gap-1.5">
            <h1 className="font-Roboto font-black text-[#1E2022]">
              {card.title}
            </h1>

            <p className="font-Roboto text-[#1E2022]">
              {moment(postDate).format("DD/MM/YYYY")}
            </p>

            <p className="font-Roboto text-[#1E2022]">{card.summary}</p>
          </div>
        </div>

        <a href={card.url} target="_blank" rel="noreferrer">
          <button className="font-Roboto text-white bg-gray-600 py-3 px-4 rounded-md  hover:-translate-y-0.5  transform transition hover:bg-[#D07017]">
            Ir para o site
          </button>
        </a>
      </div>
    </>
  );
}
