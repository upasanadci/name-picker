import React, { useState } from "react";
import "./App.scss";
import useLocalStorageState from "use-local-storage-state";

export default function App() {
  const [imagesUrl, setImagesUrls] = useState([
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
    "https://media.giphy.com/media/1kEKt7lMzjcPu/giphy.gif",
  ]);

  const [students, setStudents] = useState([
    { name: "Solomon", displayed: false },
    { name: "Buddika", displayed: false },
    { name: "Elena", displayed: false },
    { name: "Iryna", displayed: false },
    { name: "Mads", displayed: false },
    { name: "Marwah", displayed: false },
    { name: "Alice", displayed: false },
    { name: "Mohamed", displayed: false },
    { name: "Moses", displayed: false },
    { name: "Netta", displayed: false },
    { name: "Peculiar", displayed: false },
    { name: "Ricardo", displayed: false },
    { name: "Rodrigue", displayed: false },
    { name: "Roxana", displayed: false },
    { name: "Sasha", displayed: false },
    { name: "Yassine", displayed: false },
  ]);

  const [displayed, setDisplayed] = useState("");
  const [imgdisplayed, setImgDisplayed] = useState("");
  const [reducedStudents, setReducedStudents] = useState([]);

  const getRandomName = () => {
    let randomNum = 0;
    let i = 0;
    // let names = [...students];
    let names = students.filter((item) => item.displayed === false);
    console.log(names);
    let myInterval = setInterval(async () => {
      randomNum = Math.floor(Math.random() * names.length);
      i++;
      setDisplayed(names[randomNum].name);
      setImgDisplayed(null);

      if (i === 17) {
        clearInterval(myInterval);
      }
    }, 100);

    const randomImg = Math.floor(Math.random() * imagesUrl.length);

    setTimeout(() => {
      setDisplayed(names[randomNum].name);
      setImgDisplayed(imagesUrl[randomImg]);
      const newStudents = students.map((item) => {
        if (item.name === names[randomNum].name) {
          item.displayed = true;
        }
        return item;
      });
      setStudents(newStudents);
      console.log(newStudents);
    }, 1800);
  };
  //   console.log(students);

  return (
    <div className="container">
      <ul>
        {students.map((item) => {
          return (
            <li className={item.displayed ? "displayed" : "null"}>
              {item.name}
            </li>
          );
        })}
      </ul>
      <button onClick={getRandomName}>go</button>
      {displayed && <h1 className="name">{displayed}</h1>}
      {imgdisplayed && <img src={imgdisplayed} className="image" />}
    </div>
  );
}
