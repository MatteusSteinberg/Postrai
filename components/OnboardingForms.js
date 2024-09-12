import React, { useState } from "react";
import { Form, Button, Col } from "react-bootstrap";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const UsageForm = ({ isError, displayUsage }) => {
    return (
        <div className={displayUsage == true ? 'usage-form active' : 'usage-form'}>
            <Form.Group className="form-group" controlId="formBasicName">
                <Form.Label className="usage-label">First name</Form.Label>
                <Form.Control
                    className="firstname-input"
                    type="firstname"
                    placeholder="John"
                />
            </Form.Group>
            <Form.Group className="form-group" controlId="formBasicName">
                <Form.Label className="usage-label">Last name</Form.Label>
                <Form.Control
                    className="lastname-input"
                    type="lastname"
                    placeholder="Doe"
                />
                <Form.Text className={isError ? "form-validation-error" : "form-validation"}>
                    This password does not exist.
                </Form.Text>
            </Form.Group>
            <Form.Group className="form-group" controlId="formBasicPhone">
                <Form.Label className="usage-label">Phone number</Form.Label>
                <Form.Control
                    className="password-input"
                    type="password"
                    placeholder="+45 99 99 99 99"
                />
                <Form.Text className={isError ? "form-validation-error" : "form-validation"}>
                    Password does not match.
                </Form.Text>
            </Form.Group>
        </div>
    );
}

const DoneForm = ({ displayDone }) => {

    return (
        <div className={displayDone == true ? 'done-form active' : 'done-form'}>
            Done!
        </div>
    );
}



