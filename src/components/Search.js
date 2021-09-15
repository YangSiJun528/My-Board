import { Navbar, NavDropdown, Form, Nav, FormControl, Button, Container, Col } from 'react-bootstrap'
import { Link, Route, Switch, useHistory } from 'react-router-dom';
import axios from 'axios';
import '../css/search.css';

function Search(props) {
  let history = useHistory();
  return (
    <Form>
      <Container className="search mb-4">
        <Col sm={.1}><Form.Control className="option" as="select">
          <option value="entire">전체</option>
          <option value="title">제목</option>
          <option value="user">유저</option>
        </Form.Control></Col>
        <Col><Form.Control className="mx-1 search-bar" type="text" placeholder=""/></Col>
        <Button onClick={()=>{
          history.push(`/search/${}/${}`)
          axios.get('')
          .then((result)=>{})
          .catch(()=>{ })
        }} variant="dark">Search</Button>
      </Container>
    </Form>
  );
}

export { Search };