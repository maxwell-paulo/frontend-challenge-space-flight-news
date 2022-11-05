import { Link } from "react-router-dom";

export function InfoPageCard(props) {
  const { imageUrl, title, publishedAt, summary, url, id } = props;
  return (
    <div className="flex m-auto mb-14 justify-between items-center w-4/6   gap-x-20">
      <img src={imageUrl} alt="Article" className="max-w-md w-60" />
      <div className="flex flex-col gap-1.5">
        <h1 className="font-Roboto font-black text-[#1E2022]">{title}</h1>
        <div className="flex justify-between items-center">
          <p className="font-Roboto text-[#1E2022]">22/10/2022</p>
          <a href={url} target="_blank" rel="noreferrer">
            <button className="font-Roboto text-[#1E2022] border-[#1E2022] border-2 px-5 bg-gray-300 hover:-translate-y-0.5  transform transition hover:underline">
              newsSite
            </button>
          </a>
        </div>
        <p className="font-Roboto text-[#1E2022]">{summary}</p>
        <Link to={`/${id}`}>
          <a href={id} target="_blank" rel="noreferrer">
            <button className="font-Roboto text-white bg-gray-600 py-3 px-4 rounded-md  hover:-translate-y-0.5  transform transition hover:bg-[#D07017]">
              Ver Mais
            </button>
          </a>
        </Link>
      </div>
    </div>
  );
}
