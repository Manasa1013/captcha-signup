import { Link } from "react-router-dom";
import "../index.css";
export function Home() {
  return (
    <div className="wrapper">
      <h1 className="heading">Welcome Home!</h1>
      <p className="link--primary">
        <Link to="/" className="link--primary">
          Go back
        </Link>
      </p>
    </div>
  );
}
