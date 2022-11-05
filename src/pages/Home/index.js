import { Modal } from "../../components/Modal/Modal.js";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export function Home() {
  const [modals, setModals] = useState([]);

  useEffect(() => {
    async function fetchModal() {
      try {
        const response = await axios.get(
          "https://api.spaceflightnewsapi.net/v3/articles"
        );

        setModals([...response.data]);
      } catch (err) {
        console.log(err);
      }
    }
    fetchModal();
  }, []);

  return (
    <>
      {modals
        .slice(0)
        .reverse()
        .map((currentModal) => {
          return (
            <>
              <Link to={`/${currentModal.id}`}>
                <Modal
                  imageUrl={currentModal.imageUrl}
                  title={currentModal.title}
                  publishedAt={currentModal.publishedAt}
                  summary={currentModal.summary}
                  url={currentModal.url}
                />
              </Link>
            </>
          );
        })}
    </>
  );
}
