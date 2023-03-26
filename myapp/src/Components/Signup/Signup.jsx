import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEyeSlash,
  faEye,
  faTimes,
} from "@fortawesome/fontawesome-free-solid";
import "./Signup.css";
export function Signup() {
  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <div className="wrapper">
      <section className="flex-container">
        <form onSubmit={(e) => handleSubmit(e)} method="post">
          <hr className="dashed-line"></hr>

          <div id="name--container">
            <label htmlFor="name--input" className="label">
              Username
            </label>
            <input
              type="text"
              id="name--input"
              value={""}
              className="input"
              placeholder="James_Cameron"
            />
            <p className="para text--red">{""}</p>
          </div>
          <div id="email--container">
            <label htmlFor="email--input" className="label">
              Email
            </label>
            <input
              id="email--input"
              className="input"
              name="emailID"
              value={""}
              placeholder="jamescameron@mail.com"
            />
            <p className="para text--red">{""}</p>
          </div>
          <div id="password--container">
            <label htmlFor="password--input" className="label">
              Password
            </label>
            <input
              id="password--input"
              className="input"
              name="password"
              value={""}
              placeholder="theWay^OfWater2"
            ></input>
            <button id="is--shown" className="secondary">
              {/* <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} /> */}
            </button>
            <p className="para text--red" style={{ marginTop: "5px" }}>
              {""}
            </p>
          </div>

          <hr className="dashed-line"></hr>
        </form>
        <div>
          <p>Have an account already?</p>
          <Link to="/" className="link--secondary">
            Log in{" "}
          </Link>
        </div>
      </section>
    </div>
  );
}
