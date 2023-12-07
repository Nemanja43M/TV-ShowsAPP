import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const CardModal = ({ show, handleClose, id }) => {
  const [movies, setMovies] = useState([]);

  function fetchMovie(id) {
    axios
      .get(`https://api.tvmaze.com/shows/${id}`)
      .then((resp) => resp?.data)
      .then((data) => data)
      .then((movies) => setMovies(movies));
  }
  useEffect(() => {
    if (id) {
      fetchMovie(id);
    }
  }, [id]);

  return (
    <Modal
      show={show}
      onHide={handleClose}
      centered
      style={{
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
        border: "2px solid black",
        backgroundColor: "black",
        padding: "10px",
        borderLeft: "5px solid red",
        backdropFilter: "blur(8px)", // Add the blur effect

        // color: "white",
      }}
    >
      <Modal.Header style={{ textAlign: "center", color: "red" }}>
        <Modal.Title>{movies.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ textAlign: "center" }}>
        <img
          src={movies?.image?.medium}
          alt=""
          style={{
            height: "300px",
            width: "300px",
            padding: "5px",
            margin: "0 auto",
          }}
        />
        <p>
          <strong>Language:</strong> {movies.language}
        </p>
        <p>
          <strong>Genre:</strong> {movies.genres?.join(", ") || "N/A"}
        </p>
        <p>
          <strong>Network:</strong> {movies.network?.name || "N/A"}
        </p>
        <p>
          <strong>Premiered:</strong> {movies.premiered || "N/A"}
        </p>
        <p>
          <strong>Status:</strong> {movies.status || "N/A"}
        </p>
      </Modal.Body>
      <Modal.Footer style={{ textAlign: "center" }}>
        <Button
          variant="primary"
          onClick={handleClose}
          style={{ borderRadius: "30px" }}
        >
          Close Details
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CardModal;
