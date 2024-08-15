import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './style.css';




function Modals(props) {
    return (
        <Modal centered show={props.show} onHide={props.onHide} className="music-player-modal">
      <Modal.Header closeButton className="bg-dark text-light">
        <Modal.Title className="text-center">🎵 Music Player 🎵</Modal.Title>
      </Modal.Header>
      <Modal.Body className="text-center">
        <h4 className="mb-4">{props.title}</h4>
        <div className="d-flex justify-content-center align-items-center mb-4">
          <img src={props.img} alt="Music" className="music-img" />
        </div>
        <audio controls className="w-100" style={{ maxWidth: '300px', margin: '0 auto' }}>
          <source src={props.song} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </Modal.Body>
    </Modal>
    );
}

export default Modals;
