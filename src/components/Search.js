import { Navbar, NavDropdown, Form, Nav, FormControl, Button, Container, Col } from 'react-bootstrap'
import { Link, Route, Switch, useHistory } from 'react-router-dom';
import '../css/search.css';

function Search(props) {
  let history = useHistory();
  return (
    <Container className="search mb-4">
      <Col><Form.Control type="text" placeholder="Normal text" /></Col>
      <Button variant="dark">Search</Button>
    </Container>      
  );
}

export { Search };