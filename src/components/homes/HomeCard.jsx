const HomeCard = (item, index) => {
  return (
    <>
      <div className="box" key={item?.item?.show?.id || index}>
        <div className="coverImage">
          <img
            src={item?.item?.show?.image?.original}
            alt=""
            style={{
              width: "750px",
            }}
          />
        </div>

        <div className="content" style={{ marginLeft: "660px" }}>
          <h1 className="clamp-2 title">{item?.item?.show?.name}</h1>

          <div className="rating flex">
            <div className="rate">
              <i className="fas fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star-half"></i>
            </div>
            <label className="star">
              {item?.item?.show?.rating?.average
                ? item?.item?.show?.rating?.average
                : "3.8"}
              (imdb)
            </label>
            <span>GP</span>
            <label className="average-time">
              {item?.item?.show?.averageRuntime} min
            </label>
          </div>
          <p></p>
          <div className="cast">
            <h4>
              <span>Language </span>
              {item?.item?.show?.language}
            </h4>
            <h4>
              <span>Type </span>
              {item?.item?.show?.type}
            </h4>
            <h4>
              <span>Network </span>
              {item?.item?.show?.network?.name}
            </h4>
          </div>
          <button className="top-button">
            <i className="fas fa-play"></i> PLAY NOW
          </button>
          <div className="palyButton row" style={{ marginLeft: "300px" }}>
            <button style={{ marginTop: "-200px" }}>
              <div className="img">
                <img src="./images/play-button.png" alt="" />
                <img src="./images/play.png" className="change" alt="play" />
              </div>
              WATCH TRAILER
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeCard;
