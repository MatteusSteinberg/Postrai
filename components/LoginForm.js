import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Form, Button, Alert } from "react-bootstrap";
import { signIn } from "next-auth/react";
import router from 'next/router'
import GithubButton from "./LoginProviderButtons/GithubButton";
import GoogleButton from "./LoginProviderButtons/GoogleButton";
import FacebookButton from "./LoginProviderButtons/FacebookButton";

export default function LoginForm() {
	const form = useRef({});
	const [isError, setError] = useState(false);
	const [loading, setLoading] = useState(false);

	const handleSignin = async (ev) => {
		ev.preventDefault();
		if (loading) return;
		if (form.current.email.value.length === 0 || form.current.password.value.length === 0) {
			setError(true);
			return;
		}
		setLoading(true);
		const response = await signIn("credentials", {
			redirect: false,
			email: form.current.email.value,
			password: form.current.password.value,
		});
		if (response.status != 200) {
			setError(true);
			setLoading(false);
		}
		else {
			setError(false);
			router.push("/dashboard");
		}
	};

	useEffect(() => {


		return () => {

		}
	}, [isError, loading])


	return (
		<div className="login-form">
			<div className="login-form-content">
				<h2 className="title">Sign in</h2>
				<p className="text">
					Need a postrai account?{" "}
					<Link href="/register">
						<a className="link text-link">Create an account.</a>
					</Link>
				</p>
			</div>
			<Form onSubmit={handleSignin} className="form-wrapper">
				{isError == true && (
					<Alert variant="error">E-mail or password is incorrect.</Alert>
				)}
				<Form.Group className="form-group" controlId="formBasicEmail">
					<Form.Label className="login-label">E-mail</Form.Label>
					<Form.Control
						className="email-input"
						type="email"
						placeholder="Johndoe@example.com..."
						ref={(input) => (form.current.email = input)}
					/>
				</Form.Group>
				<Form.Group className="form-group" controlId="formBasicPassword">
					<Form.Label className="login-label">Password</Form.Label>
					<Form.Control
						className="password-input"
						type="password"
						placeholder="123456789..."
						ref={(input) => (form.current.password = input)}
					/>
				</Form.Group>
				<Button
					variant="secondary"
					type="submit"
					className={`login-btn loading-btn ${loading ? 'is-loading' : ''}`}
				>
					<span className="btn-loading-text">Sign in</span>
				</Button>
				<ul className="mt-2">
					<li>
						<FacebookButton />
					</li>
					<li>
						<GoogleButton />
					</li>
					<li>
						<GithubButton />
					</li>
				</ul>
				<ul className="links">
					<li className="forgot-password">
						<Link href="/forgot-password">
							<a className="text-link">Forgot password?</a>
						</Link>
					</li>
				</ul>
			</Form>
		</div>
	);
}
