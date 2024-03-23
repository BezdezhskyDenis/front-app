import React from "react";
import { useState } from "react";
import { useUser } from "../../contexts/user.context";
import { useFormik } from "formik";
import Joi from "joi";
import { validateFormikUsingJoi } from "../../utils/validateFormikUsingJoi";
import { useNavigate, Navigate } from "react-router-dom";
import { useAlert } from "../../contexts/alert.context";

import { useAuth } from "../../contexts/auth.context";

import Input from "./input";

const CompanyCreation = () => {

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

    );
  };
  
  export default CompanyCreation;