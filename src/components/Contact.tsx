import React from 'react';
import { useForm } from 'react-hook-form';
import Section from '@components/utils/Section';

import Input from '@components/utils/Input';
import TextArea from './utils/TextArea';
import { encodeNetlifyFormData } from '@utils/index';

interface IFormInput {
  name: string;
  email: string;
  message: string;
  captcha: string;
}

const Contact = () => {
  // const [captcha, setCaptcha] = useState({
  //   success: false,
  //   challenge_ts: null,
  //   hostname: null,
  // });
  // const hCaptchaRef = useRef<any>(null);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
    reset,
  } = useForm<IFormInput>();

  // const handleCaptchaSuccess = async (token: string) => {
  //   const res = await fetch(`/api/hcaptcha?token=${token}`);
  //   const data = await res.json();

  //   setCaptcha(data);
  // };

  // const handleCaptchaExpire = () => {
  //   setError('captcha', {
  //     message:
  //       'Captcha Expired! Please solve the captcha again for form submission.',
  //   });
  //   setCaptcha({
  //     success: false,
  //     challenge_ts: null,
  //     hostname: null,
  //   });
  // };

  // const handleCaptchaError = () => {
  //   setError('captcha', {
  //     message:
  //       'Captcha Error! Please solve the captcha again for form submission.',
  //   });
  //   setCaptcha({
  //     success: false,
  //     challenge_ts: null,
  //     hostname: null,
  //   });
  // };

  const onSubmit = (data: IFormInput, ev: any) => {
    // if (!captcha.success) {
    //   setError('captcha', {
    //     message: 'Please solve captcha to submit a form.',
    //   });
    //   return;
    // }

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encodeNetlifyFormData({
        'form-name': ev.target.getAttribute('name'),
        ...data,
      }),
    })
      .then(() => {
        reset();

        // router.push('/thank-you');
      })
      .catch(({ message }) => {
        setError('captcha', { message });
      });
  };

  return (
    <Section id="contact">
      <div>
        <form name="contact" onSubmit={handleSubmit(onSubmit)}>
          <h5 className="mb-4">
            Any questions, remarks? Don&apos;t hesitate to write me a message!
          </h5>
          <Input
            label="Name"
            name="name"
            placeholder="Your Name"
            register={register('name', { required: 'Please enter your name.' })}
            error={errors.name}
          />
          <Input
            label="Email"
            name="email"
            placeholder="john@example.com"
            register={register('email', {
              required: 'Please enter your email.',
            })}
            error={errors.email}
          />
          <TextArea
            rows={5}
            label="Message"
            name="message"
            placeholder="Enter your message here..."
            register={register('message', {
              required: 'Please enter you message.',
            })}
            error={errors.message}
          />
          {/* <HCaptchaContainer>
            <HCaptcha
              ref={hCaptchaRef}
              sitekey={process.env.NEXT_PUBLIC_HCAPTCHA_SITE_KEY}
              onVerify={handleCaptchaSuccess}
              onExpire={handleCaptchaExpire}
              onError={handleCaptchaError}
              theme="light"
            />
          </HCaptchaContainer> 
          {'captcha' in errors && <Error>{errors.captcha?.message}</Error>}
          */}
          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? (
              <svg
                aria-hidden="true"
                role="status"
                className="inline mr-3 w-4 h-4 text-white animate-spin"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="#E5E7EB"></path>
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentColor"></path>
              </svg>
            ) : (
              'Send Message'
            )}
          </button>
        </form>
        {/* <div className="relative w-full lg:w-auto top-0 left-0 lg:absolute lg:top-[60%] lg:left-[50%] text-white py-[2em] px-[10em] text-center">
          <h5 className="mb-2 text-3xl">Get in touch!</h5>
          <IconLink
            href={socialLinks.github}
            target="_blank"
            aria-labelledby="githubLinkLabel"
            contrastColor>
            <GitHubIcon />
            <span id="githubLinkLabel" hidden>
              Github
            </span>
          </IconLink>
          <IconLink
            href={socialLinks.linkedIn}
            target="_blank"
            aria-labelledby="linkedinLinkLabel"
            contrastColor>
            <LinkedInIcon />
            <span id="linkedinLinkLabel" hidden>
              LinkedIn
            </span>
          </IconLink>
        </div> */}
      </div>
    </Section>
  );
};

export default Contact;
