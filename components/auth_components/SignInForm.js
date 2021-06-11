// React / Next
import React, { useRef, useState } from "react";
import Link from "next/link";
// Context
import { useAuth } from "../../contexts/AuthContext";
// Components
import {
  Form,
  FormHeader,
  FormGroup,
  Label,
  Input,
  Button,
  Error,
} from "./FormComponents";

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

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <FormHeader>Sign In</FormHeader>
        {error && <Error>{error}</Error>}
        <FormGroup>
          <Label htmlFor="email">Email</Label>
          <Input type="text" id="email" ref={emailRef} />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="password">Password</Label>
          <Input type="password" id="password" ref={passwordRef} />
        </FormGroup>
        <Button type="submit" disabled={loading}>
          Sign In
        </Button>
        <Link href="/forgot-password">
          <a className="mt-3 text-center link-classic">Forgot your password?</a>
        </Link>
      </Form>
      <div className="text-center ">
        <span className="mb-2">Need to create an account? </span>
        <Link href="/sign-up">
          <a className="link-classic">Sign Up</a>
        </Link>
      </div>
    </>
  );
}
