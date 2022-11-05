export function Modal(props) {
  const { imageUrl, title, publishedAt, summary, url } = props;
  return (
    <div>
      <img src={imageUrl} alt="Article" />
      <h1>{title}</h1>
      <p>{publishedAt}</p>
      <p>{summary}</p>
      <a href={url}>Ir para o site</a>
    </div>
  );
}
