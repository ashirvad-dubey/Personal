import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const totalPhotos = 30;
  const cards = [];

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
        <Navbar expand="lg" className="bg-body-tertiary" style={{}}>
          <Container fluid style={{display:"flex",justifyContent:"center",alignItems:'center',fontWeight:"bold",fontFamily:"math"}}>
            <Navbar.Brand id="dashboard"  onClick={() => navigate("/admin")}>
              DASHBOARD</Navbar.Brand></Container></Navbar>
        <div className="gallery">{cards}</div></div>
    </>
  );
}