import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";

function HomePage() {
  const navigate = useNavigate();
  return (
    <div className="main">
      <header className="main-header mt-5">
        <div className="text-white col-md-5 mx-auto">
          Donjai All Museum of Anthropology
        </div>
      </header>
      <div className="text-white col-10 col-md-6 mx-auto">
        “A museum is a non-profit, permanent institution in the service of
        society and its development, open to the public, which acquires,
        conserves, researches, communicates and exhibits the tangible and
        intangible heritage of humanity and its environment for the purposes of
        education, study and enjoyment”
      </div>
      <div className="text-white col-md-3 mx-auto py-2 font-big">
        Open time: Tuesday - Sunday (10:00 - 20:00)
      </div>
      <Button
        variant="book"
        onClick={() => {
          navigate("/booking");
        }}
      >
        Book ticket
      </Button>
    </div>
  );
}

export default HomePage;
