import React from "react";
import useFetchGifs from "../hooks/useFetchGifs";
import GifItem from "./GifItem";

export const GifList = ({ category }) => {
  const { data: images, loading } = useFetchGifs(category);

  return (
    <>
      <h3>{category}</h3>

      {loading && (
        <p className="animate__animated animate__flash">Loading...</p>
      )}

      <div className="card-list">
        {images.map((img) => {
          return <GifItem key={img.id} {...img} />;
        })}
      </div>
    </>
  );
};
