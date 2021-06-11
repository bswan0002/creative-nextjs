import React, { useRef, useState } from "react";
import Link from "next/link";
import { useAuth } from "../contexts/AuthContext";

export default function SignInForm() {
  // Form Input Refs
  const emailRef = useRef();
  const passwordRef = useRef();
  // Auth
  const { signin } = useAuth();
  // State
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Functions
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await signin(emailRef.current.value, passwordRef.current.value);
    } catch {
      console.log("error");
      setError("Failed to sign in to account.");
    }
    setLoading(false);
  };

  // Components
  const FormGroup = ({ children }) => (
    <div className="flex flex-col mb-4">{children}</div>
  );

  const Label = ({ children, ...attributes }) => (
    <label className="mb-2" {...attributes}>
      {children}
    </label>
  );

  const Input = React.forwardRef(({ ...attributes }, ref) => (
    <input className="bg-gray-200 rounded" {...attributes} ref={ref} />
  ));

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col max-w-md p-4 m-4 mx-auto border border-gray-500 rounded-xl"
      >
        <h2 className="text-center">Sign In</h2>
        {error && (
          <div className="p-2 my-4 text-center text-red-900 bg-red-300 rounded">
            {error}
          </div>
        )}
        <FormGroup>
          <Label htmlFor="email">Email</Label>
          <Input type="text" id="email" ref={emailRef} />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="password">Password</Label>
          <Input type="password" id="password" ref={passwordRef} />
        </FormGroup>
        <button
          type="submit"
          disabled={loading}
          className="border border-gray-500 rounded focus:bg-gray-100 hover:bg-gray-100"
        >
          Sign In
        </button>
      </form>
      <div className="text-center">
        <span className="mb-2">Need to create an account? </span>
        <Link href="/sign-up">
          <a className="link-classic">Sign Up</a>
        </Link>
      </div>
    </>
  );
}
