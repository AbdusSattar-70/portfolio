import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Button, Form, Toast } from 'react-bootstrap';

const Contact = () => {
  const [state, handleSubmit] = useForm('mnqydkga');
  const [showSuccessToast, setShowSuccessToast] = useState(false);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    await handleSubmit(event);
    if (state.succeeded) {
      setShowSuccessToast(true);
      event.target.reset();
    }
  };

  const handleToastClose = () => {
    setShowSuccessToast(false);
  };

  return (
    <>
      {showSuccessToast && (
      <Toast
        show={showSuccessToast}
        onClose={handleToastClose}
        className="text-bg-primary top-0 start-50 translate-middle-x position-relative"
      >
        <Toast.Header closeButton>
          <strong className="me-auto">Message: </strong>
        </Toast.Header>
        <Toast.Body>I&apos;ve Received Your Message. I&apos;ll Reach Out to You Soon</Toast.Body>
      </Toast>
      )}
      <div className="container-fluid backgroundImg">
        <div className="row mb-2">
          <div className="col-12 text-center welcomePanel">
            <h1 className="Welcome">Let&apos;s Connect!</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 mb-4 d-flex">
            <div className="d-flex flex-fill justify-content-center align-items-center">
              <div className="boxshadow">
                <Form onSubmit={handleFormSubmit}>
                  <Form.Group controlId="name" className="mb-2">
                    <Form.Control type="text" name="name" placeholder="What's Your Name?" required autoComplete="name" />
                  </Form.Group>
                  <Form.Group controlId="email" className="mb-2">
                    <Form.Control
                      type="email"
                      name="email"
                      placeholder="What's Your Email?"
                      required
                    />
                    <ValidationError
                      prefix="Email"
                      field="email"
                      errors={state.errors}
                    />
                  </Form.Group>
                  <Form.Group controlId="message" className="mb-2">
                    <Form.Control
                      as="textarea"
                      rows={5}
                      name="message"
                      placeholder="What's on your mind?"
                      minLength={20}
                      maxLength={500}
                      required
                    />
                    <ValidationError
                      prefix="Message"
                      field="message"
                      errors={state.errors}
                    />
                  </Form.Group>
                  <Button variant="primary" type="submit" disabled={state.submitting} className="mb-2 w-100 button">
                    Submit
                  </Button>
                </Form>
              </div>
            </div>
          </div>
          <div className="col-lg-6 mb-4 d-flex">
            <div className="d-flex flex-fill justify-content-center align-items-center">
              <div className="boxshadow">
                <p className="mt-2">
                  Software Engineer with a strong background in building scalable web applications
                  for mid-sized companies. Proficient in all aspects of the software
                  development lifecycle and skilled in end-to-end project management,
                  from development to delivery.
                </p>
                <p>
                  I am seeking opportunities
                  to apply my skills and continue growing as a developer.
                  Let&apos;s work together to create innovative solutions and drive success.
                </p>
                <p>
                  I&apos;m always interested in hearing about new projects,
                  so if you&apos;d like to chat please get in touch.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>

  );
};

export default Contact;
