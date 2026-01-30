import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const totalPhotos = 30;
  const cards = [];

  // FOR LOOP (auto repeat cards)
  for (let i = 1; i <= totalPhotos; i++) {
    cards.push(
      <div className="card" key={i}>
        <img src={`/IMG/${i}.jpg`} alt={`Photo ${i}`} />
      </div>
    );
  }

  return (
    <>
      <div className="home">
        {/* Navbar */}
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container fluid>
            <Navbar.Brand
              style={{ cursor: "pointer" }}
              onClick={() => navigate("/admin")}
            >
              Dashboard
            </Navbar.Brand>
          </Container>
        </Navbar>

        {/* Gallery */}
        <div className="gallery">
          {cards}
        </div>
      </div>
    </>
  );
}