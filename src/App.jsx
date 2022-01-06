import React from "react";
import Template from "./components/template";
import Meme from "./components/meme";
import { useState, useEffect } from "react";
import "./App.css";

const Memer = () => {
  const [templates, setTemplate] = useState([]); //for the main page
  const [meme, setMeme] = useState(false);
  // for the chosen meme

  const fetchTemplate = async () => {
    const response = await fetch("https://api.imgflip.com/get_memes");
    const data = await response.json();
    // console.log(data.data);
    // console.log(data.data.memes);
    const memeTemplateJSON = data.data.memes; //meme template image obtained from the API .
    setTemplate(memeTemplateJSON);
  };
  useEffect(() => {
    fetchTemplate();
    // ();
  }, []);

  return (
    <div>
      <h1>Meme Generator</h1>

      {!meme ? (
        <Template templates={templates} setMeme={setMeme} />
      ) : (
        <Meme meme={meme} templates={templates} setMeme={setMeme} />
      )}
    </div>
  );
};
export default Memer;