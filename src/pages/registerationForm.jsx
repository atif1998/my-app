import React from "react";
import * as yup from "yup";
import { Formik } from "formik";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function RegistrationForm() {
  const values = {
    name: "",
    age: 0,
    email: "",
    contact: "",
    password: "",
  };
  const navigate = useNavigate();
  function validate(values) {
    const errors = {};
    if (!values.email) {
      errors.email = "Required";
    }
    if (!values.name) errors.email = "Required";
    if (!values.age) errors.age = "Required";
    if (!values.contact) errors.contact = "Required";
    if (!values.password) errors.password = "Required";

    return errors;
  }

  const SignUpSchema = yup.object().shape({
    name: yup.string().required(),
    age: yup.number().required().positive().integer(),
    email: yup.string().email(),
    contact: yup.string(),
    password: yup.string().required(),
  });

  const handleSubmit = async (values, setSubmitting) => {
    console.log("values", values);
    setSubmitting(false);
    try {
      const res = await axios.post("http://localhost:8080/api/user/register", {
        ...values,
      });
      console.log(res);
      navigate("/login");
    } catch (err) {
      console.log("failed to register", err);
    }
  };

  return (
    <div className="">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-5 mx-auto flex flex-wrap items-center">
          <div className=" bg-gray-100 rounded-lg p-8 flex flex-col mx-auto w-1/3 mt-10 md:mt-0">
            <h2 className="text-gray-900 text-lg font-medium title-font mb-3">
              Sign Up
            </h2>
            <Formik
              initialValues={values}
              validate={(values) => validate(values)}
              validationSchema={SignUpSchema}
              onSubmit={(values, { setSubmitting }) => {
                handleSubmit(values, setSubmitting);
              }}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
                /* and other goodies */
              }) => (
                <form onSubmit={handleSubmit}>
                  <div className="relative mb-2">
                    <label className="leading-7 text-sm text-gray-600">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      onChange={handleChange}
                      className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                    {errors.name && touched.name && errors.name}
                  </div>
                  <div className="relative mb-2">
                    <label className="leading-7 text-sm text-gray-600">
                      Email
                    </label>
                    <input
                      type="text"
                      id="email"
                      name="email"
                      onChange={handleChange}
                      className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                    {errors.email && touched.email && errors.email}
                  </div>
                  <div className="relative mb-2">
                    <label className="leading-7 text-sm text-gray-600">
                      Password
                    </label>
                    <input
                      type="text"
                      id="password"
                      name="password"
                      onChange={handleChange}
                      className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                    {errors.password && touched.password && errors.password}
                  </div>
                  <div className="relative mb-2">
                    <label className="leading-7 text-sm text-gray-600">
                      Contact
                    </label>
                    <input
                      type="text"
                      id="contact"
                      name="contact"
                      onChange={handleChange}
                      className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                    {errors.contact && touched.contact && errors.contact}
                  </div>
                  <div className="relative mb-4">
                    <label className="leading-7 text-sm text-gray-600">
                      Age
                    </label>
                    <input
                      type="number"
                      id="age"
                      name="age"
                      onChange={handleChange}
                      className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                    {errors.age && touched.age && errors.age}
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                  >
                    Sign Up
                  </button>
                </form>
              )}
            </Formik>
          </div>
        </div>
      </section>
    </div>
  );
}

export default RegistrationForm;
