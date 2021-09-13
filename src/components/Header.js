import { Navbar, NavDropdown, Form, Nav, FormControl, Button, Container } from 'react-bootstrap'
import { Link, Route, Switch, useHistory } from 'react-router-dom';
import '../css/header.css';

function Header(props) {
  let history = useHistory();
  return (
    <Navbar expand="lg" variant="light" bg="light">
      <Container>
        <Navbar.Brand onClick={ () => {history.push(`/`)}}>MyBoard</Navbar.Brand>
        {
        props.login === true
        ?        
          <Navbar.Text className="justify-content-end">
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
