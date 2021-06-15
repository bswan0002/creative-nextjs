// React / Next
import React, { useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
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

export default function SignUpForm() {
  // Form Input Refs
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  // Auth
  const { signup } = useAuth();
  // State
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  // Router
  const router = useRouter();

  // Functions
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (passwordRef.current.value !== confirmPasswordRef.current.value) {
      return setError("Passwords do not match.");
    }

    try {
      setError("");
      setLoading(true);
      let isSuccessful = await signup(
        emailRef.current.value,
        passwordRef.current.value
      );
      if (isSuccessful) router.push("/");
    } catch {
      setError("Failed to create an account.");
    }
    setLoading(false);
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <FormHeader>Sign Up</FormHeader>
        {error && <Error>{error}</Error>}
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
          <Input
            type="password"
            id="confirm-password"
            ref={confirmPasswordRef}
          />
        </FormGroup>
        <Button type="submit" disabled={loading}>
          Sign Up
        </Button>
      </Form>
      <div className="text-center">
        <span className="mb-2">Already have an account? </span>
        <Link href="/sign-in">
          <a className="link-classic">Sign In</a>
        </Link>
      </div>
    </>
  );
}
