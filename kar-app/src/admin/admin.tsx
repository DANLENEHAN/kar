import { useState } from "react";
import "./admin.css";
import { post } from "../requests";
import errorBlock from "../messages/error-block";

interface UserData {
  email: string;
  full_name: string;
  password: string;
}

function Admin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [full_name, setfull_name] = useState("");
  const [errorDict, setErrorDict] = useState({
    email: [],
    full_name: [],
    password: [],
    form: [],
  });

  const createUser = (userData: UserData) => {
    console.log("Creating user with", userData);
    const response = post("create_user", userData);
    return response;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Submitted form", email, password, full_name);
    const userData: UserData = {
      email: email,
      password: password,
      full_name: full_name,
    };
    createUser(userData).then((res) => {
      if (res.data.name === "CustomError") {
        setErrorDict({
          ...{
            email: [],
            full_name: [],
            password: [],
            form: [],
          },
          ...res.data,
        });
      }
    });
  };

  return (
    <div className="main-container">
      <form className="form-container" onSubmit={(e) => handleSubmit(e)}>
        <input
          type="myInput"
          value={email}
          placeholder="Enter an email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          autoComplete="email"
          required={true}
        ></input>
        {errorBlock(errorDict.email)}
        <input
          type="myInput"
          value={full_name}
          placeholder="Enter your full name"
          onChange={(e) => {
            setfull_name(e.target.value);
          }}
          autoComplete="name"
          required={true}
        ></input>
        {errorBlock(errorDict.full_name)}
        <input
          type="text"
          value={password}
          placeholder="fake password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          autoComplete="new-password"
          required={true}
          // pattern='.{8,}'
        ></input>
        {errorBlock(errorDict.password)}
        <button type="submit">Submit form</button>
      </form>
    </div>
  );
}

export default Admin;
