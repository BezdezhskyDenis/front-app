import React from "react";
import { useState } from "react";
import { useUser } from "../contexts/user.context";
import { useFormik } from "formik";
import Joi from "joi";
import { validateFormikUsingJoi } from "../utils/validateFormikUsingJoi";
import { useNavigate, Navigate } from "react-router-dom";
import { useAlert } from "../contexts/alert.context";

import { useAuth } from "../contexts/auth.context";

import Input from "./common/input";
import CompanyCreation from "./common/companyCreation";

const SignUp = () => {
  const [serverError, setServerError] = useState("");
  const navigate = useNavigate();
  const { handleAlertChange } = useAlert();
  const { handleSignUpChange, handleSignSwitch } = useUser();
  const { user, signUp } = useAuth();

  const form = useFormik({
    validateOnMount: true,
    initialValues: {
      name: {
        first: "",
        last: "",
      },
      phone: "",
      email: "",
      password: "",
    },
    validate: validateFormikUsingJoi({
      name: Joi.object({
        first: Joi.string()
          .min(2)
          .max(256)
          .message("First Name must contain at least 2 characters")
          .required(),
        last: Joi.string()
          .min(2)
          .max(256)
          .message("Last Name must contain at least 2 characters")
          .required(),
      }).required(),
      phone: Joi.string()
        .pattern(/0[0-9]{1,2}\-?\s?[0-9]{3}\s?[0-9]{4}/)
        .message("User phone must be a valid phone number")
        .required(),
      email: Joi.string()
        .min(5)
        .max(256)
        .required()
        .email({ tlds: { allow: false } }),
      password: Joi.string()
        .min(8)
        .max(20)
        .pattern(/^(?=.*[A-Z])(?=.*[!@#$%^&*]).*$/)
        .message(
          "Password must be at least 8 characters long, contain at least one uppercase letter, and include one of the following special characters: !@#$%^&*"
        )
        .required(),
    }),
    async onSubmit(values) {
      try {
        await signUp({ ...values });
        // if (redirect) {
        //   handleAlertChange("signUp success, now you need to log in", "success")
        //   navigate(redirect);
        // }
      } catch (err) {
        if (err.response?.status === 400) {
          setServerError(err.response.data);
          handleAlertChange(err.response.data, "warning");
        }
      }
    },
  });

  const cancelButton = () => {
    resetForm();
    // navigate(redirect);
  };

  const resetForm = () => {
    form.resetForm();
  };
  return (
    // <div data-component="sign-up" className="sign-up container">
    <div className="modal is-open">
      <div className="modal-container">
        <div className="modal-left">
          <h1 className="modal-title">Welcome!</h1>
          <p className="modal-desc">Create user to manage your'e company</p>

          <form onSubmit={form.handleSubmit}>
            {serverError && (
              <div className="alert alert-danger">{serverError}</div>
            )}

            <div className="row container-fluid mx-auto">
              <Input
                {...form.getFieldProps("name.first")}
                type="text"
                label="First Name"
                className=" mx-auto col-12 form-floating mb-3"
                required
                error={form.touched.name?.first && form.errors.first}
              />
              <Input
                {...form.getFieldProps("name.last")}
                type="text"
                label="Last Name"
                className=" mx-auto col-12 form-floating mb-3"
                required
                error={form.touched.name?.last && form.errors.last}
              />
              <Input
                {...form.getFieldProps("phone")}
                type="phone"
                label="Phone"
                className=" mx-auto col-12 form-floating mb-3"
                required
                error={form.touched.phone && form.errors.phone}
              />
              <Input
                {...form.getFieldProps("email")}
                type="email"
                label="Email"
                className=" mx-auto col-12 form-floating mb-3"
                required
                error={form.touched.email && form.errors.email}
              />
              <Input
                {...form.getFieldProps("password")}
                type="password"
                label="Password"
                className=" mx-auto col-12 form-floating mb-3"
                required
                error={form.touched.password && form.errors.password}
              />
              <Input
                {...form.getFieldProps("isCompany")}
                type="checkbox"
                label="Join exist company"
                labelClassName="form-check-label ms-2"
                inputClassName="form-check-input"
                className="text-start mb-4 col-12"
                error={form.touched.zip && form.errors.zip}
              />

              <button
                type="submit"
                disabled={!form.isValid}
                className={
                  form.isValid
                    ? "btn btn-success form-control"
                    : "btn btn-secondary form-control"
                }
              >
                Sign Up
              </button>
            </div>
          </form>

          <div className="modal-buttons">
            <a href="" className="">
              Forgot your password?
            </a>
            <button className="input-button">Login</button>
          </div>
          <p className="sign-up">
            Already have an account?{" "}
            <button className="nav-item" onClick={handleSignSwitch}>
              Log in now
            </button>
          </p>
        </div>
        <div className="modal-right">
            <CompanyCreation/>
            <div>

          <img
            src="https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=dfd2ec5a01006fd8c4d7592a381d3776&auto=format&fit=crop&w=1000&q=80"
            alt=""
            />
            </div>
        </div>
        <button
          className="icon-button close-button"
          onClick={handleSignUpChange}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <path d="M 25 3 C 12.86158 3 3 12.86158 3 25 C 3 37.13842 12.86158 47 25 47 C 37.13842 47 47 37.13842 47 25 C 47 12.86158 37.13842 3 25 3 z M 25 5 C 36.05754 5 45 13.94246 45 25 C 45 36.05754 36.05754 45 25 45 C 13.94246 45 5 36.05754 5 25 C 5 13.94246 13.94246 5 25 5 z M 16.990234 15.990234 A 1.0001 1.0001 0 0 0 16.292969 17.707031 L 23.585938 25 L 16.292969 32.292969 A 1.0001 1.0001 0 1 0 17.707031 33.707031 L 25 26.414062 L 32.292969 33.707031 A 1.0001 1.0001 0 1 0 33.707031 32.292969 L 26.414062 25 L 33.707031 17.707031 A 1.0001 1.0001 0 0 0 32.980469 15.990234 A 1.0001 1.0001 0 0 0 32.292969 16.292969 L 25 23.585938 L 17.707031 16.292969 A 1.0001 1.0001 0 0 0 16.990234 15.990234 z"></path>
          </svg>
        </button>
      </div>
    </div>
    // </div>
  );
};

export default SignUp;
