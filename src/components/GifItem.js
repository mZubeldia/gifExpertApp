const GifItem = ({ id, title, url }) => {
  // console.log({ id, title, url });

  return (
    <article className="card animate__animated animate__fadeInDownBig">
      <img src={url} alt={title} />
      <p>{title}</p>
    </article>
  );
};

export default GifItem;
