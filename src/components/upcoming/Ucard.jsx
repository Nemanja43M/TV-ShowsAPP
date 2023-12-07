import React, { useState } from "react";

import CardModal from "./CardModal";

const Ucard = (item) => {
  const [show, setShow] = useState(false);
  const [id, setId] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handlerId = () => {
    setId(item?.item?.show?.id);
  };

  return (
    <>
      <div
        className="MovieBox"
        onClick={() => {
          handleShow();
          handlerId();
        }}
      >
        <div className="img">
          <img src={item?.item?.show?.image.original} alt="" />
        </div>
        <div className="text">
          <h3 className="clamp-2 title" style={{ whiteSpace: "nowrap" }}>
            {item?.item?.show?.name?.slice(0, 13)}
          </h3>
          <span style={{ whiteSpace: "nowrap" }}>
            {item?.item?.show?.averageRuntime} min
          </span>
          <br />
          {/*<Link to={`/singlepage/${id}`}>*/}
          <button className="primary-btn">
            <i className="fa fa-play"></i> PLAY NOW
          </button>
          {/*</Link>*/}
        </div>
      </div>
      <CardModal show={show} handleClose={handleClose} id={id} />
    </>
  );
};

export default Ucard;
