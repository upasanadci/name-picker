import React, { useState } from "react";
import "./App.scss";
import useLocalStorageState from "use-local-storage-state";

export default function App() {
  /* const [imagesUrl, setImagesUrls] = useState([
    "https://media.giphy.com/media/COYGe9rZvfiaQ/giphy.gif",
    "https://media.giphy.com/media/I9BrUZDq5hksw/source.gif",
    "https://media.giphy.com/media/B37cYPCruqwwg/source.gif",
    "https://media.giphy.com/media/hHuOmWidPXwCk/source.gif",
    "https://media.giphy.com/media/18hKuycmFuwaQ/source.gif",
    "https://media.giphy.com/media/3oFzma9FGIblOf6Wk0/source.gif",
    "https://media.giphy.com/media/7QxZfWnBLdGI8/source.gif",
    "https://media.giphy.com/media/KmTnUKop0AfFm/source.gif",
    "https://media.giphy.com/media/UseBZDm3O00hy/source.gif",
    "https://media.giphy.com/media/l0HlMWkHJKvyjftKM/source.gif",
    "https://media.giphy.com/media/d10dMmzqCYqQ0/source.gif",
    "https://media.giphy.com/media/PzQvWAhgfUipW/source.gif",
    "https://media.giphy.com/media/3q3RzbSNRugy0mH6LQ/giphy.gif",
    "https://media.giphy.com/media/2gG2xiMTtFwsg/source.gif",
    "https://media.giphy.com/media/YrD1PQldGsstG/source.gif",
    "https://media.giphy.com/media/uHox9Jm5TyTPa/giphy.gif",
    "https://media.giphy.com/media/gLQjUikb8nQnS/source.gif",
    "https://media.giphy.com/media/B6G2MYBmtnGYU/source.gif",
    "https://media.giphy.com/media/gE6IUBRWZd744/source.gif",
    "https://media.giphy.com/media/cO39srN2EUIRaVqaVq/source.gif",
  ]); */

  const [imagesUrl, setImagesUrls] = useState([
    "https://media.giphy.com/media/3xIErbNS4u2qIKW8tR/giphy.gif",
    "https://media.giphy.com/media/YWW7VnJuHoCemgL2cx/giphy.gif",
    "https://media.giphy.com/media/3o6ZsURHZbbjmbgBrO/giphy.gif",
    "https://media.giphy.com/media/3o85xAevLNP7UQMco0/giphy.gif",
    "https://media.giphy.com/media/l4FB8FICkBnuJnicU/giphy.gif",
    "https://media.giphy.com/media/1iYG3wuv8ak6y8eI/giphy.gif",
    "https://media.giphy.com/media/l46Cpa6DAjG2qSRLq/giphy.gif",
    "https://media.giphy.com/media/TFzYO9DxRRFIc15lcI/giphy.gif",
    "https://media.giphy.com/media/2sYKSeV8aBkdZuENXU/giphy.gif",
    "https://media.giphy.com/media/l1EsZitDzerENKqpG/giphy.gif",
    "https://media.giphy.com/media/1yTaZygj4gnWCUNDbC/giphy.gif",
    "https://media.giphy.com/media/l3vRgcZnE2FYriCHu/giphy.gif",
  "https://media.giphy.com/media/1dWSkX1bfXrVEBilY2/giphy.gif"
  ]);

  // const [students, setStudents] = useState([
  //   "Aimee",
  //   "Beda",
  //   "Carlos",
  //   "Christoph",
  //   "Daniel",
  //   "Francesco",
  //   "Jonathan",
  //   "Lucas",
  //   "Lui",
  //   "Martin",
  //   "Norman",
  //   "Priya",
  //   "Habib",
  //   "Shinhee",
  //   "Shrekesh",
  //   "Tim",
  //   "Dalibor",
  //   "Monishka",
  // ]);

  const [students, setStudents] = useState([
    {name : "Aimee" , displayed: false},
    {name : "Beda" , displayed: false},
    {name : "Carlos" , displayed: false},
    {name : "Christoph" , displayed: false},
    {name : "Dalibor" , displayed: false},
    {name : "Daniel" , displayed: false},
    {name : "Francesco" , displayed: false},
    {name : "Jonathan" , displayed: false},
    {name : "Lucas" , displayed: false},
    {name : "Lui" , displayed: false},
    {name : "Martin" , displayed: false},
    {name : "Monishka" , displayed: false},
    {name : "Norman" , displayed: false},
    {name : "Priya" , displayed: false},
    {name : "Habid" , displayed: false},
    {name : "Shinhee" , displayed: false},
    {name : "Shrekesh" , displayed: false},
    {name : "Tim" , displayed: false},
    {name : "" , displayed: false},
    {name : "" , displayed: false}
  ]);

  const [displayed, setDisplayed] = useState("");
  const [imgdisplayed, setImgDisplayed] = useState("");
  const [reducedStudents , setReducedStudents] = useState([])

  const getRandomName = () => {
    let randomNum = 0;
    let i = 0;
    let names = [...students];
    let myInterval = setInterval(async () => {
      randomNum = Math.floor(Math.random() * students.length);
      i++;
      setDisplayed(names[randomNum].name);

      if (i === 17) {
        clearInterval(myInterval);
      }
    }, 100);

    const randomImg = Math.floor(Math.random() * imagesUrl.length);

    setTimeout(() => {
      setDisplayed(students[randomNum].name);
      setImgDisplayed(imagesUrl[randomImg]);
      const newStudents = students.filter((item) => item !== displayed);
      setStudents(newStudents);
    }, 1800);
  };
  console.log(students);

  return (
    <div className="container">
      <ul>
        {students.map((item)=> {
          return <li>{item.name}</li>
        })}
      </ul>
      <button onClick={getRandomName}>go</button>
      {displayed && <h1 className="name">{displayed}</h1>}
      {imgdisplayed && <img src={imgdisplayed} className="image" />}
    </div>
  );
}
