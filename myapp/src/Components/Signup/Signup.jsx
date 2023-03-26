import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEyeSlash,
  faEye,
  faTimes,
} from "@fortawesome/fontawesome-free-solid";
import "./Signup.css";
export function Signup() {
  const navigate = useNavigate();
  const [field, setField] = useState({
    userName: "",
    emailID: "",
    password: "",
  });
  const [errorField, setErrorField] = useState({
    nameError: "",
    emailError: "",
    passwordError: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const [captcha, setCaptcha] = useState("");
  const [captchaInput, setCaptchaInput] = useState(null);

  const usernNameRegexPattern = new RegExp(
    "^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$"
  );
  const emailRegexPattern = new RegExp(
    "^[A-Z0-9._%+-]+@[A-Z0-9.-]+\\.[A-Z]{2,4}$",
    "i"
  );
  const passwordRegexPattern = new RegExp(
    "^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,18}$",
    "i"
  );

  function createCaptcha() {
    let captchaString = "";
    for (let i = 0; i < 6; i++) {
      let captchaChar = "";
      captchaChar = Math.ceil(Math.random() * (26 - 0) + 0).toString(36);
      captchaString = captchaString + captchaChar;
    }

    return captchaString;
  }

  function validateCaptcha() {
    if (!captchaInput) {
      console.log("Enter captcha to sign up");
      return false;
    } else if (captchaInput === captcha) {
      return true;
    } else if (captchaInput !== captcha) {
      console.log("Must match with the captcha text");
      return false;
    }
  }

  function validateFields(
    regexPattern,
    fieldName,
    errorName,
    errorText,
    errorField,
    setErrorField
  ) {
    let errorFieldName = Object.keys(errorField).find(
      (item) => item === errorName
    );
    if (regexPattern.test(fieldName)) {
      // console.log("pattern matched", errorFieldName);
      setErrorField((prev) => {
        return { ...prev, [errorFieldName]: "" };
      });
    } else {
      // console.log("pattern not matched", errorFieldName);
      setErrorField((prev) => {
        // console.log(errorName, errorText, "printing at line 34");
        return { ...prev, [errorFieldName]: errorText };
      });
    }
  }
  function submitHandler() {
    if (!validateCaptcha()) return false;
    else if (
      field.userName.length <= 0 ||
      field.emailID.length <= 0 ||
      field.password.length <= 0
    ) {
      console.log("Enter details to signup");
    } else if (
      errorField.nameError.length > 0 ||
      errorField.emailError.length > 0 ||
      errorField.passwordError.length > 0
    ) {
      console.log("Please correct errors at the fields");
    } else {
      console.log(validateCaptcha());
      console.log("Successfully signed up");
      navigate("/home");
      resetValues();
    }
  }
  function resetValues() {
    setField((prev) => ({
      ...prev,
      userName: "",
      emailID: "",
      password: "",
      captchaDone: false,
    }));
  }
  function handleSubmit(e) {
    e.preventDefault();
    submitHandler();
  }
  useEffect(() => {
    setCaptcha(() => createCaptcha());
    // eslint-disable-next-line
  }, []);

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
              value={field.userName}
              className="input"
              placeholder="James_Cameron"
              onInput={(e) => {
                // console.log(e.target.value, "username");
                return setField((prev) => ({
                  ...prev,
                  userName: e.target.value,
                }));
              }}
              onBlur={(e) => {
                // console.log("the username field lost focus");
                let errorAlertMessage =
                  "Must have atleast 8-20 characters and includes only .,_";
                validateFields(
                  usernNameRegexPattern,
                  field.userName,
                  "nameError",
                  errorAlertMessage,
                  errorField,
                  setErrorField
                );
              }}
            />
            <p className="para text--red">{errorField.nameError}</p>
          </div>
          <div id="email--container">
            <label htmlFor="email--input" className="label">
              Email
            </label>
            <input
              id="email--input"
              className="input"
              name="emailID"
              value={field.emailID}
              placeholder="jamescameron@mail.com"
              onInput={(e) => {
                // console.log(e.target.value);
                return setField((prev) => {
                  return { ...prev, emailID: e.target.value };
                });
              }}
              onBlur={(e) => {
                // console.log("email lost focus");
                let errorAlertMessage = "Email id must be valid address";
                validateFields(
                  emailRegexPattern,
                  field.emailID,
                  "emailError",
                  errorAlertMessage,
                  errorField,
                  setErrorField
                );
              }}
            />
            <p className="para text--red">{errorField.emailError}</p>
          </div>
          <div id="password--container">
            <label htmlFor="password--input" className="label">
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              id="password--input"
              className="input"
              name="password"
              value={field.password}
              placeholder="theWay^OfWater2"
              onInput={(e) => {
                // console.log(e.target.value);
                setField((prev) => {
                  return { ...prev, password: e.target.value };
                });
              }}
              onBlur={(e) => {
                // console.log("password field lost focus");
                let errorAlertMessage =
                  "Must have 8 to 18 characters with one number and one special character";

                validateFields(
                  passwordRegexPattern,
                  field.password,
                  "passwordError",
                  errorAlertMessage,
                  errorField,
                  setErrorField
                );
              }}
            ></input>
            <button
              id="is--shown"
              className="secondary"
              onClick={(e) => {
                e.preventDefault();
                setShowPassword((prev) => !prev);
              }}
            >
              <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
            </button>
            <p className="para text--red" style={{ marginTop: "5px" }}>
              {errorField.passwordError}
            </p>
          </div>
          <div className="captcha-container">
            <div className="captcha-output">
              <output
                className="input captcha--text"
                onCopy={(e) => {
                  e.preventDefault();
                  return false;
                }}
              >
                {captcha}
              </output>
              {/* <canvas width="70" height="15" style={{ border: "1px solid green" }}>
            {" "}
          </canvas> */}
              <button
                type="button"
                className="icon--button"
                onClick={() => setCaptcha(() => createCaptcha())}
              >
                <FontAwesomeIcon icon="fa-solid fa-redo" />
              </button>
            </div>
            <input
              className="input captcha-field"
              type="text"
              onPaste={(e) => {
                e.preventDefault();
                return false;
              }}
              onCopy={(e) => {
                e.preventDefault();
                return false;
              }}
              onChange={(e) => {
                setCaptchaInput(() => e.target.value);
              }}
              onBlur={(e) => {}}
              placeholder="Enter captcha text"
              value={!captchaInput ? "" : captchaInput}
            />
            <p className="para text--red">{errorField.captchaDoneError}</p>
          </div>
          <div>
            <button type="submit" id="login--button" className="button login">
              Sign up
            </button>
          </div>
          <hr className="dashed-line"></hr>
        </form>
        <div>
          <p>Have an account already?</p>
          <Link to="/" className="link--secondary">
            Log in
          </Link>
        </div>
      </section>
    </div>
  );
}
