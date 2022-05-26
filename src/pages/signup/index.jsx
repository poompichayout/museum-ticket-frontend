import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGoogle,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { Formik } from "formik";
import { useMutation } from "react-query";
import axios from "axios";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/ContextProvider";

function SignUp() {
  const auth = useAuth();
  const mutation = useMutation(
    (payload) => {
      return axios.post("/signup/basic", payload).then((res) => res.data);
    },
    {
      onSuccess: (data) => {
        localStorage.setItem('tokens', data.data.tokens);
        auth.login(data.data.user);
        axios.defaults.headers.common["Authorization"] =
          "Bearer " + data.data.tokens;
      },
    }
  );
  return (
    <div className="sign-up">
      <div className="row">
        <div className="col"></div>
        <div className="col-3">
          <div className="row text-center justify-content-center hello">
            <div className="col-12 font-25 font-w-500 mt-5">
              Hello, welcome!
            </div>
            <div className="col-6 font-12 mb-4">
              Enter your personal detail and start journery with us
            </div>
            <div className="col-12">
              <Link to="/signin">
                <Button className="px-5">Sign in</Button>
              </Link>
            </div>
            <div className="col-12 mt-auto text-right font-rufi font-08">
              DONJAI ALL
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="row text-center create-account">
            <div className="col-12 font-25 font-w-500 header pt-5">
              Create Account
            </div>
            <div className="col-12 d-flex justify-content-center mb-4">
              <div className="svg-border">
                <FontAwesomeIcon icon={faFacebook} />
              </div>
              <div className="svg-border">
                <FontAwesomeIcon icon={faGoogle} />
              </div>
              <div className="svg-border">
                <FontAwesomeIcon icon={faLinkedin} />
              </div>
            </div>
            <div className="col-12 text mb-1">
              Or use your email for registration:
            </div>

            <Formik
              initialValues={{
                email: "",
                password: "",
                firstName: "",
                lastName: "",
                confirmPassword: "",
                roles: "USER",
              }}
              onSubmit={(values, { setSubmitting }) => {
                mutation.mutate(values);
                setSubmitting(false);
              }}
            >
              {({
                values,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
                /* and other goodies */
              }) => (
                <form onSubmit={handleSubmit} style={{ margin: "0 auto" }}>
                  <div className="row mb-2 justify-content-center">
                    <div className="col-8 mb-2">
                      <input
                        type="text"
                        name="firstName"
                        placeholder="Firstname"
                        className="form-control"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.firstName}
                      />
                    </div>
                    <div className="col-8 mb-2">
                      <input
                        type="text"
                        name="lastName"
                        placeholder="Lastname"
                        className="form-control"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.lastName}
                      />
                    </div>
                    <div className="col-8 mb-2">
                      <input
                        type="text"
                        name="email"
                        placeholder="Email"
                        className="form-control"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                      />
                    </div>
                    <div className="col-8 mb-2">
                      <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        className="form-control"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}
                      />
                    </div>
                    <div className="col-8 mb-5">
                      <input
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        className="form-control"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.confirmPassword}
                      />
                    </div>
                    {mutation.isError && (
                      <div className="col-8 mb-2">
                        <div className="alert alert-danger" role="alert">
                          {mutation.error.response.data.message}
                        </div>
                      </div>
                    )}
                    {mutation.isSuccess && (
                      <div className="col-8 mb-2">
                        <div className="alert alert-success" role="alert">
                          {mutation.data.message}
                        </div>
                      </div>
                    )}

                    <div className="col-8 pb-5">
                      <Button
                        type="submit"
                        className="px-5"
                        disabled={isSubmitting}
                      >
                        Sign up
                      </Button>
                    </div>
                  </div>
                </form>
              )}
            </Formik>
          </div>
        </div>
        <div className="col"></div>
      </div>
    </div>
  );
}

export default SignUp;
