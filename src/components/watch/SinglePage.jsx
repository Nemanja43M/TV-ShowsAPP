/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import "./style.css";
import { useParams } from "react-router-dom";
import Upcomming from "../upcoming/Upcomming";

const SinglePage = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  const homeData = [
    {
      id: 1,
      name: "Sand Dust",
      rating: 4.7,
      time: "2hr : 22mins",
      desc: "Sand and dust storms (SDS), also known as sirocco, haboob, yellow dust, white storms, and the harmattan, are a natural phenomenon linked with land and water management and climate change.",
      starring: "Karen Gilchrist, James Earl Jones",
      genres: "Action",
      tags: "Action, Adventures, Horror",
      cover: "../images/home1.jpg",
      video: "../video/video1.mp4",
      date: "20-Jan-1997",
    },
  ];
  const rec = [
    {
      id: 4,
      cover: "../images/rec/rec1.jpg",
      name: "One Man Army",
      time: "2hr : 38mins",
    },
    {
      id: 5,
      cover: "../images/rec/rec2.jpg",
      name: "Jumbo Queen",
      time: "2hr : 38mins",
    },
    {
      id: 1,
      cover: "../images/rec/rec3.jpg",
      name: "My office Boss",
      time: "2hr : 38mins",
    },
    {
      id: 2,
      cover: "../images/rec/rec4.jpg",
      name: "Shadowe",
      time: "2hr : 38mins",
    },
    {
      id: 3,
      cover: "../images/upcome/u3.jpg",
      name: "Another Danger",
      time: "2hr : 38mins",
    },
  ];
  useEffect(() => {
    let item = homeData.find((item) => item.id === parseInt(id));
    if (item) {
      setItem(item);
    }
  }, [id]);

  return (
    <>
      {item ? (
        <>
          <section className="singlePage">
            <div className="singleHeading">
              <h1>{item.name} </h1> <span> | {item.time} | </span>{" "}
              <span> HD </span>
            </div>
          </section>
          <Upcomming items={rec} title="Recommended Movies" />
        </>
      ) : (
        "no"
      )}
    </>
  );
};

export default SinglePage;
