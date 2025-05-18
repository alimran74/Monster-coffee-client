import React, { use } from "react";
import { AuthContext } from "../context/AuthContext";

const SignIn = () => {

    const {signInUser} = use(AuthContext);
  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email , password)

    // firebase sign in send kore dilam
    signInUser(email, password)
    .then(result => {
        console.log(result.user)
      const signInInfo = {
        email,
        lastSignInTime : result.user?.metadata?.lastSignInTime
      }
        // update last signin to the database
        fetch('http://localhost:5000/users',{
          method:'PATCH',
          headers: {
            'content-type' : 'application/json'
          },
          body: JSON.stringify(signInInfo)
        })
        .then(res => res.json())
        .then(data => {
          console.log('after update patch', data)
        })

    })
    .catch((error) => {
        console.log(error);
    })
  };

  return (
    <div className="card bg-gradient-to-br from-pink-400 via-purple-500 to-indigo-600 max-w-sm mx-auto shrink-0 shadow-2xl mt-56">
  <div className="card-body text-white">
    <h1 className="text-5xl font-bold text-center mb-4">🔐 Sign In!</h1>
    <form onSubmit={handleSignIn} className="fieldset">
      <div className="form-control">
        <label className="label" htmlFor="email">
          📧 Email
        </label>
        <input
          id="email"
          type="email"
          name="email"
          className="input input-bordered text-black"
          placeholder="you@example.com"
        />
      </div>

      <div className="form-control mt-4">
        <label className="label" htmlFor="password">
          🔑 Password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          className="input input-bordered text-black"
          placeholder="••••••••"
        />
      </div>

      <div className="form-control mt-2">
        <a className="link link-hover text-sm text-white">❓ Forgot password?</a>
      </div>

      <button className="btn btn-neutral mt-6 w-full">🚀 Sign In</button>
    </form>
  </div>
</div>

  );
};

export default SignIn;
