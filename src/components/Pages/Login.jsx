import React from "react";
import { Formik, Form } from "formik";
import Input from "./Input";
import { useState } from "react";
import "./Login.scss";
import { NavLink } from "react-router-dom";

const initialValues = {
  email: "",
  password: "",
};
export default function Login() {
  const [checker, setChecker] = useState({});

  const submit = (values) => {
    async function zapros() {
      let data = await fetch(
        `https://retoolapi.dev/buDygW/data?email=${values.email}`
      );
      const dataResp = await data.json();

      if (dataResp.length === 1 && dataResp[0].password === values.password) {
        localStorage.setItem("userid", `${dataResp[0].id}`);
        setChecker((prevdata) => {
          return { ...prevdata, email: 1, password: 1 };
        });

        fetch(`https://retoolapi.dev/buDygW/data/${dataResp[0].id}`, {
          method: "PATCH",
          body: JSON.stringify({ logined: true }),
          headers: {
            "Content-Type": "application/json;charset=utf-8",
          },
        }).then((data) => (window.location.pathname = "/"));
      } else if (
        dataResp.length === 1 &&
        dataResp[0].password !== values.password
      ) {
        setChecker((prevdata) => {
          return { ...prevdata, email: 1, password: 0 };
        });
      } else {
        setChecker((prevdata) => {
          return { ...prevdata, email: 0, password: 0 };
        });
      }
    }
    zapros();
  };

  return (
    <>
      <Formik onSubmit={submit} initialValues={initialValues}>
        {(formik) => {
          return (
            <Form>
              <h3>Log in</h3>
              <Input name="email" label="Email" />
              {checker.email === 0 ? <p>էլ.փոստը սխալ է</p> : null}
              <Input name="password" label="Password" />
              {checker.password === 0 && checker.email === 1 ? (
                <p>Գախտնաբառը սխալ է</p>
              ) : null}
              <div className="buttons">
                <NavLink to="/Registr">
                  <button>Registration</button>
                </NavLink>
                <input type="submit" value="Login" />
              </div>
            </Form>
          );
        }}
      </Formik>
    </>
  );
}
