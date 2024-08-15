import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Modal, CardTitle } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './MusicPlayer.css'; // Import custom CSS file
import img1 from "./images/b-01.jpg";
import img2 from "./images/b-02.jpg";
import img3 from "./images/b-03.jpg";
import img4 from "./images/b-04.jpg";
import img5 from "./images/b-05.jpg";
import img6 from "./images/b-06.jpg";
import img7 from "./images/b-07.jpg";
import img8 from "./images/b-08.jpg";
import img9 from "./images/b-09.jpg";
import Modals from '../Modal';
import song1 from './songs/music1.mp3';
import song2 from './songs/music2.mp3';
import song3 from './songs/music3.mp3';
import song4 from './songs/music4.mp3';
import song5 from './songs/music5.mp3';
import song6 from './songs/music6.mp3';
import song7 from './songs/music7.mp3';
import song8 from './songs/music8.mp3';
import 'bootstrap-icons/font/bootstrap-icons.css';


const MusicPlayer = (props) => {
    const songs = [
        {
            id: 1,
            title: 'Is Karam Ka',
            artist: 'Artist 1',
            audioSrc: song1,
            img: img5
        },
        {
            id: 2,
            title: 'Akhiyan',
            artist: 'Artist 2',
            audioSrc: song2,
            img: img6
        },

        {
            id: 3,
            title: 'Tumhi Ko Mubarak',
            artist: 'Artist 2',
            audioSrc: song3,
            img: img7

        },
        {
            id: 4,
            title: 'Paraday',
            artist: 'Artist 2',
            audioSrc: song4,
            img: img8
        },  
        {
            id: 5,
            title: 'Husan',
            artist: 'Artist 2',
            audioSrc: song5,
            img: img9
        },
        {
            id: 6,
            title: 'Fan',
            artist: 'Artist 2',
            audioSrc: song6,
            img: img1
        },
        {
            id: 7,
            title: 'Khawab',
            artist: 'Artist 2',
            audioSrc: song7,
            img :img2

            
        },
        {
            id: 8,
            title: 'Baari',
            artist: 'Artist 2',
            audioSrc: song8,
            img :img3

            
        },
        {
            id: 9,
            title: 'Tumhi Ko Mubarak',
            artist: 'Artist 2',
            audioSrc: song3,
            img :img4

            
        },
        {
            id: 10,
            title: 'Paraday',
            artist: 'Artist 2',
            audioSrc: song4,
            img :img5

            
        }
    ];
    const [filteredSongs, setFilteredSongs] = useState(songs); 
    const [currentSong, setCurrentSong] = useState(null);
    const [currentSongImg, setCurrentSongImg] = useState(null);
    const [modalShow, setModalShow] = React.useState(false);
    const [titleSong, setTitle]= useState(null);

    
    useEffect(() => {
        

            
            const filtered = songs.filter(song =>
                song.title.toLowerCase().includes(props.seacrhinput.toLowerCase())
            );
            setFilteredSongs(filtered);
        
      }, [props.seacrhinput]);

    const handleModal = (cSongImg, cSong, STitle) =>{
        setModalShow(true);
        setCurrentSong(cSong);
        setCurrentSongImg(cSongImg);
        setTitle(STitle);
    }

    return (
        <Container className="mt-5 text-center">
           
            <Row className='d-flex'>
                {filteredSongs.map((song) => (
                    <Col key={song.id} md={3} className="mb-5">
                    <Card className="border-0 shadow" style={{ width: '18rem' }}>
                      <Card.Img style={{ height: "20rem" }} variant="top" src={song.img} />
                      <Card.Body>
                        <Card.Title>{song.title}</Card.Title>
                        <Card.Text>
                        Let the Music Move You: Your Perfect Soundtrack, Anywhere, Anytime.
                        </Card.Text>
                        <Button
                          variant="success"
                          onClick={() => handleModal(song.img, song.audioSrc, song.title)}
                          className="btn-sm"
                        >
                          <b>Play...</b>
                        </Button>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
                <Modals img={currentSongImg} song={currentSong} title={titleSong} show={modalShow} onHide={() => setModalShow(false)}/>

            </Row>
           
        </Container>
    );
};

export default MusicPlayer;
