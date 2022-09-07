import React, { useState, useRef } from "react";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";

import Container from "../../utils/Container";
import Contact from "./Contact";
import Error from "./Error";
import Form from "./Form";
import FormHeading from "./FormHeading";
import Field from "./Field";
import Input from "./Input";
import Label from "./Label";
import SubmitBtn from "./SubmitBtn";
import Textarea from "./TextArea";
import Loader from "../../utils/Loader";
import HCaptchaContainer from "./HCaptchaContainer";
import { encodeNetlifyFormData } from "../../../utils/index";

interface IFormInput {
  name: string;
  email: string;
  message: string;
  captcha: string;
}

const Index = () => {
  const [captcha, setCaptcha] = useState({
    success: false,
    challenge_ts: null,
    hostname: null,
  });
  const hCaptchaRef = useRef<any>(null);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
    reset,
  } = useForm<IFormInput>();

  const handleCaptchaSuccess = async (token: string) => {
    const res = await fetch(`/api/hcaptcha?token=${token}`);
    const data = await res.json();

    setCaptcha(data);
  };

  const handleCaptchaExpire = () => {
    setError("captcha", {
      message:
        "Captcha Expired! Please solve the captcha again for form submission.",
    });
    setCaptcha({
      success: false,
      challenge_ts: null,
      hostname: null,
    });
  };

  const handleCaptchaError = () => {
    setError("captcha", {
      message:
        "Captcha Error! Please solve the captcha again for form submission.",
    });
    setCaptcha({
      success: false,
      challenge_ts: null,
      hostname: null,
    });
  };

  const onSubmit = (data: IFormInput, ev: any) => {
    if (!captcha.success) {
      setError("captcha", {
        message: "Please solve captcha to submit a form.",
      });
      return;
    }

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encodeNetlifyFormData({
        "form-name": ev.target.getAttribute("name"),
        ...data,
      }),
    })
      .then(() => {
        reset();
        setCaptcha({
          success: false,
          challenge_ts: null,
          hostname: null,
        });
        hCaptchaRef.current.resetCaptcha();
        router.push("/thank-you");
      })
      .catch(({ message }) => {
        setError("captcha", { message });
      });
  };

  return (
    <Contact id="contact">
      <Container>
        <Form name="contact" onSubmit={handleSubmit(onSubmit)}>
          <FormHeading textAlign="left">Get in touch!</FormHeading>
          <Field>
            <Input
              type="text"
              placeholder="Your Name"
              {...register("name", { required: "Please enter your name." })}
            />
            <Label htmlFor="name">Name</Label>
            <span />
          </Field>
          {"name" in errors && <Error>{errors.name?.message}</Error>}
          <Field>
            <Input
              type="email"
              placeholder="john@example.com"
              {...register("email", { required: "Please enter your email." })}
            />
            <Label htmlFor="email">Email</Label>
            <span />
          </Field>
          {"email" in errors && <Error>{errors.email?.message}</Error>}
          <Field>
            <Textarea
              rows={5}
              placeholder="Enter your message here..."
              {...register("message", {
                required: "Please enter you message.",
              })}
            />
            <Label htmlFor="message">Message</Label>
            <span />
          </Field>
          {"message" in errors && <Error>{errors.message?.message}</Error>}
          <HCaptchaContainer>
            <HCaptcha
              ref={hCaptchaRef}
              sitekey={process.env.NEXT_PUBLIC_HCAPTCHA_SITE_KEY}
              onVerify={handleCaptchaSuccess}
              onExpire={handleCaptchaExpire}
              onError={handleCaptchaError}
              theme="light"
            />
          </HCaptchaContainer>
          {"captcha" in errors && (
            <Error margin="0">{errors.captcha?.message}</Error>
          )}
          <SubmitBtn type="submit" disabled={isSubmitting}>
            {isSubmitting ? <Loader height={16} width={16} /> : "Send Message"}
          </SubmitBtn>
        </Form>
      </Container>
    </Contact>
  );
};

export default Index;
