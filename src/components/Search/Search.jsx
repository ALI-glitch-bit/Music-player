import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Search(props) {
    const handleInputChange = (event) => {
        console.log(event.target.value);
        props.setinput(event.target.value);
      };
    
  return (
    
    
    <Navbar className="bg-body-tertiary justify-content-between">
      <Form inline>
   
          <div className=' p-1 d-flex text-center justify-content-center align-items-center '>
            <i style={{fontSize:'2rem'}} class="bi bi-file-music-fill"></i>  
            <div>
                
            <h1 className="text-center bold">Music Player</h1>
            </div>
            
            </div>
       
      </Form>
      <Form inline>
        <Row>
          <Col xs="auto">
            <Form.Control
              type="text"
              placeholder="Search"
              className=" mr-sm-2"
              onInput={handleInputChange}
            />
          </Col>
          <Col xs="auto">
      <Button type="submit" variant="dark">Search</Button>
    </Col>
        </Row>
      </Form>
    </Navbar>
  );
}

export default Search;