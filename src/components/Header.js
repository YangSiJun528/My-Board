import { Navbar, NavDropdown, Form, Nav, FormControl, Button, Container } from 'react-bootstrap'
import { Link, Route, Switch, useHistory } from 'react-router-dom';
import '../css/header.css';

function Header(props) {
  let history = useHistory();
  return (
    <Navbar fixed="top" expand="sm" variant="light" bg="light">
      <Container>
        <Navbar.Brand className="pointer" onClick={ () => {history.push(`/`)}}>MyBoard</Navbar.Brand>
        {
        props.login === true
        ?        
          <Navbar.Text className="justify-content-end pointer">
            <a onClick={ () => {history.push(`/user/${props.user.name}/info`)}}>{props.user.name}</a>
          </Navbar.Text>
        :           
          <Button className="justify-content-end" variant="outline-primary">Login</Button>
        }
      </Container>
    </Navbar>
  );
}

export { Header };
