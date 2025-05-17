import React, { use } from "react";
import { AuthContext } from "../context/AuthContext";
import Swal from "sweetalert2";

const SignUp = () => {
  const { createUser } = use(AuthContext);
  console.log(createUser);

  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    const { email, password, ...userProfile } = Object.fromEntries(
      formData.entries()
    );

    console.log(email, password, userProfile);

    // create user in the firebase

    createUser(email, password)
      .then((result) => {
        console.log(result.user);

        // save profile info in the Database
        fetch("http://localhost:5000/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(userProfile),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.insertedId) {
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your Account is Created SuccessFully",
                showConfirmButton: false,
                timer: 1500,
              });
            }
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="card bg-gradient-to-br from-sky-400 via-blue-500 to-indigo-600 max-w-sm mx-auto shrink-0 shadow-2xl mt-56">
      <div className="card-body">
        <h1 className="text-5xl font-bold">Sign Up Now !</h1>
        <form onSubmit={handleSignUp} className="fieldset">
          <div className="form-control">
            <label className="label" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              type="text"
              name="name"
              className="input input-bordered"
              placeholder="Name"
            />
          </div>

          <div className="form-control">
            <label className="label" htmlFor="address">
              Address
            </label>
            <input
              id="address"
              type="text"
              name="address"
              className="input input-bordered"
              placeholder="Address"
            />
          </div>

          <div className="form-control">
            <label className="label" htmlFor="phone">
              Phone
            </label>
            <input
              id="phone"
              type="text"
              name="phone"
              className="input input-bordered"
              placeholder="01xxxxxxxxx"
              pattern="01[0-9]{9}"
              maxLength={11}
              required
            />
          </div>

          <div className="form-control">
            <label className="label" htmlFor="photo">
              Photo URL
            </label>
            <input
              id="photo"
              type="text"
              name="photo"
              className="input input-bordered"
              placeholder="Exm:http/www.example.png"
            />
          </div>

          <div className="form-control">
            <label className="label" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              className="input input-bordered"
              placeholder="Email"
            />
          </div>

          <div className="form-control">
            <label className="label" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              className="input input-bordered"
              placeholder="Password"
            />
          </div>
          <div className="form-control mt-2">
            <a className="link link-hover text-sm">Forgot password?</a>
          </div>
          <button className="btn btn-neutral mt-4">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
