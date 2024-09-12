import axios from 'axios';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { Form, Button, Alert } from 'react-bootstrap';

export default function Reset() {
  const [isSent, setIsSent] = useState(false);
  const emailRef = useRef();

  const onSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post('/api/user/forgotPassword', {
      email: emailRef.current.value
    });
    if (res.data.success) {
      setIsSent(true);
    }
  };

  useEffect(() => {
    return () => {};
  }, [isSent]);

  return (
    <div className='reset-form'>
      <div className='reset-form-content'>
        <h2 className='title'>Reset Password</h2>
      </div>
      <Form className='form-wrapper'>
        {isSent == true && <Alert variant='success'>An e-mail has been sent.</Alert>}
        <Form.Group className='form-group' controlId='formBasicEmail'>
          <Form.Label className='reset-label'>E-mail</Form.Label>
          <Form.Control ref={emailRef} className='email-input' type='email' placeholder='Johndoe@example.com...' />
        </Form.Group>
        { isSent ? null : <Button onClick={onSubmit} variant='secondary' type='button' className='reset-btn'>Send link</Button> }
        <div className='back-link'>
          <Link href='/login'>
            <a className='text-link return'>Return to login</a>
          </Link>
        </div>
      </Form>
    </div>
  );
}
