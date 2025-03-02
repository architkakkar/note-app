import { Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router";

function NotFound() {
  const navigate = useNavigate();

  return (
    <Container className="d-flex flex-column align-items-center justify-content-center vh-100">
      <h2 className="display-3 text-danger fw-bold">404</h2>
      <h2 className="mb-3">Page Not Found</h2>
      <p className="text-muted">
        Oops! The page you are looking for does not exist.
      </p>
      <Button variant="primary" onClick={() => navigate("/")}>
        Go Back Home
      </Button>
    </Container>
  );
}

export { NotFound };
