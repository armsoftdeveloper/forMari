import { Formik, Form } from "formik";
import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import * as yup from "yup";
import Input from "./Input";
import './Registr.scss'


const validationSchema = yup.object({
  name: yup
    .string()
    .required("Պարտադիր")
    .matches(/^[A-Z]/, "Պետք է սկսել մեծատառով")
    .min(5)
    .max(15),
  email: yup.string().required("Պարտադիր").email("էլ.փոստը սխալ է"),
  password: yup
    .string()
    .required("Պարտադիր")
    .matches(
      /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,15}/,
      "8-ից 15 նիշ առնվազն մեկ թվով, մեկ մեծատառ և մեկ փոքրատառ"
    )
    .min(8)
    .max(15),
});

const initialValues = {
  name: "",
  email: "",
  password: "",
};

export default function Registr() {
    
  const [emailcheck, setEmailcheck] = useState(false);

  const submit = (values, {e}) => {
    
    async function zapros() {
      let emailchecker;
      let data = await fetch(
        `https://retoolapi.dev/buDygW/data?email=${values.email}`
      );
      const dataResp = await data.json();
      emailchecker = dataResp.length;

      if (emailchecker === 0) {
        setEmailcheck(false);

        fetch("https://retoolapi.dev/buDygW/data", {
          method: "POST",
          headers: {
            "Content-Type": "application/json;charset=utf-8",
          },
          body: JSON.stringify(values),
        }).then(data=> window.location.pathname="./login");

       
      } else {
        setEmailcheck(true);
      }
    }
    zapros();
  };

  return (
    <Formik
      onSubmit={submit}
      initialValues={initialValues}
      validateOnChange={true}
      validateOnBlur={true}
      validationSchema={validationSchema}
    >
      {(formik) => {
        return (
          <Form>
            <h3>Registration</h3>
            <Input name="name" label="Username" />
            <Input name="email" label="Email" />
            {emailcheck ? (
              <p>Նույն անունով փոստ արդեն գոյություն ունի</p>
            ) : null}
            <Input name="password" label="Password" />
            <div className="buttons">
              <input type="submit" value="Registration" />
              <NavLink to='/Login'><button>Login</button></NavLink>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
}
