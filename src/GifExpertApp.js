import { useState } from "react";
import AddCategory from "./components/AddCategory";
import { GifList } from "./components/GifList";

const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch"]);

  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={setCategories} />
      <hr></hr>

      <ol>
        {categories.map((category) => {
          return <GifList key={category} category={category} />;
        })}
      </ol>
    </>
  );
};

export default GifExpertApp;
