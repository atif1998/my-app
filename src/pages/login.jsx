import { useState } from "react";
import Input from "../input";
import axios from "axios";

const Login = () => {
  const [login, setLogin] = useState({
    username: "",
    password: "",
    checkedme: false,
    course: 0,
  });

  const [error, setError] = useState({
    username: "",
    password: "",
    checkedme: "",
    course: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const {
        data: { user, token },
      } = await axios.post("http://localhost:8080/api/user/login", {
        ...login,
      });
      localStorage.setItem("userdata", JSON.stringify(user));
      localStorage.setItem("auth_token", token);
      JSON.parse(localStorage.getItem("userdata"));
    } catch (err) {
      alert(err.response.data.message);
    }
    console.log("submitted values", login);
    let error = validate();

    if (error.username || error.password || error.checkedme || error.course) {
      setError(error);
    } else {
      setError({ ...error });
      console.log(login);
    }
  };

  const handleChange = (e) => {
    // let objCopy = { ...login };

    // if (e.target.name == "username") objCopy.username = e.target.value;

    // if (e.target.name == "password") objCopy.password = e.target.value;

    // setLogin(objCopy);

    if (e.target.type === "checkbox") {
      setLogin({ ...login, [e.target.name]: e.target.checked });
      validateProperty(e.target.name, e.target.checked);
    } else {
      setLogin({ ...login, [e.target.name]: e.target.value });
      validateProperty(e.target.name, e.target.value);
    }
  };

  const validateProperty = (propertyName, propertyValue) => {
    if (propertyValue === "") {
      setError({ ...error, [propertyName]: `${propertyName} is required` });
    } else if (propertyValue !== "") {
      setError({ ...error, [propertyName]: "" });
    }
  };

  const validate = () => {
    let errorObj = { ...error };
    if (login.username.trim() === "")
      errorObj.username = "username is required";
    else errorObj.username = "";

    if (login.password.trim() === "")
      errorObj.password = "password is required";
    else errorObj.password = "";

    if (!login.checkedme) errorObj.checkedme = "checkedme is required";
    else errorObj.checkedme = "";

    if (login.course === "") errorObj.course = "course is required";
    else errorObj.course = "";

    return errorObj;
  };

  return (
    <div className="container mt-5 mx-5">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Login</legend>
          <div className="mb-3">
            <Input
              label="Username"
              type="text"
              value={login.username}
              name="username"
              onChanged={handleChange}
              error={error.username}
            />
          </div>
          <div className="mb-3">
            <Input
              label="Password"
              type="password"
              value={login.password}
              name="password"
              onChanged={handleChange}
              error={error.password}
            />
          </div>
          {/* <div className="mb-3">
            <label htmlFor="courses" className="form-label">
              Courses
            </label>
            <select
              className="form-select"
              id="courses"
              name="course"
              onChange={handleChange}
            >
              <option value="">Select course</option>
              <option value="1">React</option>
              <option value="2">Angular</option>
              <option value="3">Vue</option>
            </select>
            {error.course && (
              <span className="text-danger">{error.course}</span>
            )}
          </div> */}

          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="checkedme"
              name="checkedme"
              onChange={handleChange}
            />
            <label className="form-check-label" htmlFor="checkedme">
              Check me out
            </label>
            {error.checkedme && (
              <div>
                <span className="text-danger">{error.checkedme}</span>
              </div>
            )}
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </fieldset>
      </form>
    </div>
  );
};

export default Login;
