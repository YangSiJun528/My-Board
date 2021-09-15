import { Navbar, NavDropdown, Form, Nav, FormControl, Button, Container, Table } from 'react-bootstrap'
import { Link, Route, Switch, useHistory } from 'react-router-dom';

function WriteBtn(props) {
  let history = useHistory();

  return (
    <Container className="container">
      <div className="d-grid gap-2">
        <Button onClick={ () => {history.push(`/write`)}} variant="dark" size="lg">Write</Button>
      </div>
    </Container>
  );
}

export { WriteBtn };
