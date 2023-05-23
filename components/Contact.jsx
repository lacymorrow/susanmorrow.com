import React from "react";
import axios from "axios";
import sendmail from "../services/sendmail"

class Contact extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			values: {
				name: "",
				email: "",
				message: "",
			},
			isSubmitting: false,
			isError: false,
		};
	}

	submitForm = async (e) => {
		e.preventDefault();
		if (!this.state.values.name || !this.state.values.email || !this.state.values.message) {
			this.setState({ isSubmitting: false, status: 'Please fill out all fields' });
			return;
		}
		this.setState({ isSubmitting: true, status: 'Sending message...' });

		// AJAX request
		const params = [...new FormData(e.target).entries()]
		const success = await sendmail(params)

		if (success) {
			this.setState({ isSubmitting: false, isError: false, status: 'Your message was sent successfully' });
		} else {
			this.setState({ isSubmitting: false, isError: true, status: 'Something went wrong, please try again or email me at susan@susanmorrow.us' });
		}

		setTimeout(
			() => {
				const values = { ...this.state.values, message: "" }
				this.setState({
					isError: false,
					isSubmitting: false,
					status: "",
					values: values,
				})
			},
			3000
		);
	};

	handleInputChange = (e) => {
		this.setState({
			values: { ...this.state.values, [e.target.name]: e.target.value },
		});
	}


	postForm = async (e) => {
		e.preventDefault();
		this.setState({ isSubmitting: true, status: 'Sending message...' });

		// AJAX request
		const params = [...new FormData(e.target).entries()]
		console.log()

		const result = await fetch('/api/send-email-postmark', {
			body: JSON.stringify(this.state.values),
			headers: {
				'Content-Type': 'application/json',
			},
			method: 'POST',
		})
			.then((response) => {
				// If success or validation error
				if (response.status >= 200 && response.status < 300) {
					return response.json();
				}
				throw Error(response.statusText);
			})
			.catch((error) => {
				// Server error
				console.error('[sendmail] Error sending mail: ', error);
				this.setState({ isSubmitting: false, isError: true, status: 'Something went wrong, please try again or email me at susan@susanmorrow.us' });
			});

		if (result?.message) {
			// Success
			return this.setState({ isSubmitting: false, isError: false, status: '✔ Your message was sent successfully' });

		} else {
			// Likely a validation error
			this.setState({ isSubmitting: false, isError: true, status: 'Something went wrong, please try again or email me at susan@susanmorrow.us' });
		}
	};

	render() {
		return (
			<section id="contact">
				<div className="inner">
					<section>
						<form
							method="post"
							action="/api/send-email-postmark"
							onSubmit={this.postForm}
						>
							<div className="field half first">
								<label htmlFor="name">Name</label>
								<input type="text" name="name" id="name"
									value={this.state.values.name}
									onChange={this.handleInputChange} />
							</div>
							<div className="field half">
								<label htmlFor="email">Email</label>
								<input type="email" name="email" id="email"
									value={this.state.values.email}
									onChange={this.handleInputChange} />
							</div>
							<div className="field">
								<label htmlFor="message">Message</label>
								<textarea
									name="message"
									id="message"
									rows="6"
									value={this.state.values.message}
									onChange={this.handleInputChange}
								/>
							</div>
							<ul className="actions">
								<li>
									<button
										type="submit"
										className={`special ld-ext-left ${this.state.isSubmitting && 'running'}`}
										disabled={this.state.isSubmitting}
									>
										Send Message
										<div className="ld ld-ring ld-spin" />
									</button>
								</li>
								<li>
									<input type="reset" value="Clear" />
								</li>
							</ul>
							<p className="form-message">{this.state.isError && `Error: `}{this.state.status}</p>
						</form>
					</section>
					<section className="split">
						<section>
							<div className="contact-method">
								<span className="icon alt fa-envelope" />
								<h3>Email</h3>
								<a href="mailto:susan@susanmorrow.us">
									susan@susanmorrow.us
								</a>
							</div>
						</section>
						<section>
							<div className="contact-method">
								<span className="icon alt fa-phone" />
								<h3>Phone</h3>
								<a href="tel:+17043325153"><span>(704) 332-5153</span></a>
							</div>
						</section>
						<section>
							<div className="contact-method">
								<span className="icon alt fa-home" />
								<h3>Address</h3>
								<a href="https://www.google.com/maps/place/429+E+Worthington+Ave,+Charlotte,+NC+28203/@35.2084558,-80.8575031,17z/data=!3m1!4b1!4m5!3m4!1s0x88569f77f1408bf1:0x1cee1c068e13ac63!8m2!3d35.2084558!4d-80.8553144">
									429 E. Worthington Ave. Suite 2<br />
									Charlotte, NC 28203
								</a>
							</div>
						</section>
					</section>
				</div>
			</section>
		);
	}
}

export default Contact;
