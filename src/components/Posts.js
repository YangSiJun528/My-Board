import { Navbar, NavDropdown, Form, Nav, FormControl, Button, Container, Table } from 'react-bootstrap'
import { Link, Route, Switch, useHistory } from 'react-router-dom';
import '../css/posts.css';

function Posts(props) {
  let history = useHistory();
  return (
    <Container>
      <Table hover>
        <thead>
          <tr>
            <td Style="width: 70%">Title</td>
            <td Style="width: 10%">User</td>
            <td Style="width: 10%">Date</td>
            <td Style="width: 10%">Likes</td>
          </tr>
        </thead>
        <tbody>
          {
            props.posts.map((post) =>
            {return (
              <tr>
                <td>{post.title}</td>
                <td>{post.user}</td>
                <td>{post.date}</td>
                <td>{post.likes}</td>
              </tr>
            )})
          }
        </tbody>
      </Table>
    </Container>
  );
}

export { Posts };
