import React, { useRef, useState } from "react";
import { useAuth } from "../contexts/AuthContext";

export default function Signup() {
  // Form Input Refs
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  // Auth
  const { signup } = useAuth();
  // State
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Functions
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (passwordRef.current.value !== confirmPasswordRef.current.value) {
      return setError("Passwords do not match");
    }

    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
    } catch {
      console.log("error");
      setError("Failed to create an account");
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
    <input className="bg-gray-200" {...attributes} ref={ref} />
  ));

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col max-w-md p-4 m-4 border border-gray-500 rounded-xl"
    >
      <h2 className="text-center">Sign Up</h2>
      {error && <div>{error}</div>}
      <FormGroup>
        <Label htmlFor="email">Email</Label>
        <Input type="text" id="email" ref={emailRef} />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="password">Password</Label>
        <Input type="password" id="password" ref={passwordRef} />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="confirm-password">Confirm Password</Label>
        <Input type="password" id="confirm-password" ref={confirmPasswordRef} />
      </FormGroup>
      <button
        type="submit"
        disabled={loading}
        className="border border-gray-500 rounded"
      >
        Sign Up
      </button>
    </form>
  );
}
