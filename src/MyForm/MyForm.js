import Form from "../../node_modules/react-bootstrap/Form";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Button from "../../node_modules/react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.css"; // or include from a CDN
import MoodSlider from "../MoodSlider/MoodSlider";
import { InputGroup } from "react-bootstrap";

const MyForm = () => {
  return (
    <Form>
      <h2 className="text-md-center text-center">Sign Up</h2>
      <Form.Group controlId="formUSername">
        <Form.Label>Username:</Form.Label>
        <InputGroup>
          <InputGroup.Prepend>
            <InputGroup.Text>@</InputGroup.Text>
          </InputGroup.Prepend>
          <Form.Control type="text" placeholder="Username" />
        </InputGroup>
      </Form.Group>

      <Form.Group controlId="formPassword">
        <Form.Label>Password:</Form.Label>
        <Form.Control type="password" placeholder="Password" />
        <Form.Text className="text-muted">
          Your password must be 8-20 characters long, contain letters and
          numbers, and must not contain spaces, special characters, or emoji.
        </Form.Text>
      </Form.Group>
      <Form.Group controlId="formConfPassword">
        <Form.Label>Confirm password:</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group controlId="formEmail">
        <Form.Label>E-mail:</Form.Label>
        <Form.Control type="email" placeholder="my.mail.example@gmail.com" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      <Form.Group controlId="formMoodSlider">
        <Form.Label>Your mood:</Form.Label>
        <MoodSlider />
        <Form.Text className="text-muted">
          You cannot sign up being in a bad mood
        </Form.Text>
      </Form.Group>
      <Form.Group>
        <Form.Label>Leave a comment below:</Form.Label>
        <Form.Control as="textarea" rows={5} />
      </Form.Group>
      <Form.Group controlId="formCheckbox">
        <Form.Check
          type="checkbox"
          label="I would like to receive our latest news"
        />
      </Form.Group>
      <Button className="float-right mt-3 mb-3" variant="primary" type="submit">
        Sign Up
      </Button>
    </Form>
  );
};

export default MyForm;
