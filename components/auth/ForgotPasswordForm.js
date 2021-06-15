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
  Message,
} from "./FormComponents";

export default function SignInForm() {
  // Form Input Refs
  const emailRef = useRef();
  // Auth
  const { resetPassword } = useAuth();
  // State
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  // Functions
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setError("");
      setMessage("");
      setLoading(true);
      await resetPassword(emailRef.current.value);
      setMessage("An email has been sent with password reset instructions.");
    } catch {
      setError("Failed to reset password.");
    }
    setLoading(false);
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <FormHeader>Reset Password</FormHeader>
        {error && <Error>{error}</Error>}
        {message && <Message>{message}</Message>}
        <FormGroup>
          <Label htmlFor="email">Email</Label>
          <Input type="text" id="email" ref={emailRef} />
        </FormGroup>
        <Button type="submit" disabled={loading}>
          Reset Password
        </Button>
      </Form>
      <div className="text-center ">
        <span>Need to create an account? </span>
        <Link href="/signup">
          <a className="link-classic">Sign Up</a>
        </Link>
      </div>
    </>
  );
}
