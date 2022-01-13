const GifItem = ({ id, title, url }) => {
  // console.log({ id, title, url });

  return (
    <article className="card animate__animated animate__fadeInDownBig">
      <img className="card-image" src={url} alt={title} />
      <p className="card-text">{title}</p>
    </article>
  );
};

export default GifItem;
