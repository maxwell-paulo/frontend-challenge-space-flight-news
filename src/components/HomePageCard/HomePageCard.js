import { Link } from "react-router-dom";

export function HomePageCard(props) {
  const { imageUrl, title, publishedAt, summary, url, id, index } = props;
  if (index % 2 === 0) {
    return (
      <div className="flex m-auto mb-20 justify-between items-center w-4/6   gap-x-20">
        <img src={imageUrl} alt="Article" className="max-w-md w-60" />
        <div className="flex flex-col gap-1.5">
          <h1 className="font-Roboto font-black text-[#1E2022]">{title}</h1>
          <div className="flex justify-between items-center">
            <p className="font-Roboto text-[#1E2022]">{publishedAt}</p>
            <a href={url} target="_blank" rel="noreferrer">
              <button className="font-Roboto text-[#1E2022] border-[#1E2022] border px-5 bg-gray-300 hover:-translate-y-0.5  transform transition hover:underline">
                newsSite
              </button>
            </a>
          </div>
          <p className="font-Roboto text-[#1E2022]">{summary}</p>
          <Link to={`/${id}`} className="w-24">
            <button className="w-24 font-Roboto text-white bg-gray-600 py-3 px-4 rounded-md  hover:-translate-y-0.5  transform transition hover:bg-[#D07017]">
              Ver Mais
            </button>
          </Link>
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex m-auto mb-20 justify-between items-center w-4/6   gap-x-20 ">
        <div className="flex flex-col gap-1.5">
          <h1 className="font-Roboto font-black text-[#1E2022]">{title}</h1>
          <div className="flex justify-between items-center">
            <p className="font-Roboto text-[#1E2022]">{publishedAt}</p>
            <a href={url} target="_blank" rel="noreferrer">
              <button className="font-Roboto text-[#1E2022] border-[#1E2022] border px-5 bg-gray-300 hover:-translate-y-0.5  transform transition hover:underline">
                newsSite
              </button>
            </a>
          </div>
          <p className="font-Roboto text-[#1E2022]">{summary}</p>
          <Link to={`/${id}`} className="w-24">
            <button className="w-24 font-Roboto text-white bg-gray-600 py-3 px-4 rounded-md  hover:-translate-y-0.5  transform transition hover:bg-[#D07017]">
              Ver Mais
            </button>
          </Link>
        </div>
        <img src={imageUrl} alt="Article" className="max-w-md w-60" />
      </div>
    );
  }
}
