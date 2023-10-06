import React from "react";

const SUCCESS_MESSAGE = '✔ Your message was sent successfully. I will get back to you as soon as possible.'
const TRY_AGAIN_MESSAGE = 'Please try again or email me at or email me at susan@susanmorrow.us'

const ERROR_STATUS = 'Something went wrong, please try again or email me at susan@susanmorrow.us'

class Contact extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			values: {
				name: "",
				email: "",
				message: "",
				phone: false, // Honeypot
				address: false, // Honeypot
			},
			isSubmitting: false,
			isError: false,
		};
	}

	// Basic spam prevention; honeypot field
	handleCheck = (e) => {
		this.setState({
			values: { ...this.state.values, [e.target.name]: e.target.checked },
		});
	}

	handleInputChange = (e) => {
		this.setState({
			values: { ...this.state.values, [e.target.name]: e.target.value },
		});
	}

	handleReset = (e) => {
		this.setState({
			values: {
				name: "",
				email: "",
				message: "",
				phone: false,
				address: false,
			},
			isSubmitting: false,
			isError: false,
		});
	}


	postForm = async (e) => {
		e.preventDefault();
		this.setState({ isSubmitting: true, status: 'Sending your message...' });

		// Returns an array
		const params = [...new FormData(e.target).entries()]

		// AJAX request
		const result = await fetch('/api/send-email-sendgrid', {
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
				this.setState({ isSubmitting: false, isError: true, status: ERROR_STATUS });
			});

		if (result?.message) {
			// Success
			return this.setState({ isSubmitting: false, isError: false, status: '✔ Your message was sent successfully' });

		} else {
			// Likely a validation error
			this.setState({ isSubmitting: false, isError: true, status: ERROR_STATUS });
		}
	};

	render() {
		return (
			<section id="contact">
				<div className="inner">
					<section>
						<h2>Schedule an Appointment Today</h2>
						<form
							method="post"
							action="https://phpstack-1011481-3573429.cloudwaysapps.com/io.php"
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
							<div className="hidden">
								<label htmlFor="phone">Email</label>
								<input type="phone" name="phone" id="phone"
									value={this.state.values.phone}
									onChange={this.handleInputChange} />
							</div>
							<div className="hidden" aria-hidden>
								<label htmlFor="address">Email</label>
								<input type="checkbox" name="address" id="address"
									value="address"
									onChange={this.handleCheck} />
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
										className={`special ld- ext - left ${this.state.isSubmitting && 'running'}`}
										disabled={this.state.isSubmitting}
									>
										Send Message
										{this.state.isSubmitting && (<div className="ld ld-ring ld-spin" />)}
									</button>
								</li>
								<li>
									<input type="reset" defaultValue="Clear" onClick={this.handleReset} />
								</li>
							</ul>
							<h4 className="form-message">{this.state.isError && `Error: `}{this.state.status}</h4>
						</form>
					</section>
					<section className="split">
						<section>
							<div className="contact-method">
								<a href="mailto:susan@susanmorrow.us">
									<span className="icon alt fa-envelope" />
									<h3>Email</h3>
									susan@susanmorrow.us
								</a>
							</div>
						</section>
						<section>
							<div className="contact-method">
								<a href="tel:+17043325153">
									<span className="icon alt fa-phone" />
									<h3>Phone</h3>
									<span>(704) 332-5153</span>
								</a>
							</div>
						</section>
						<section>
							<div className="contact-method">
								<a href="https://www.google.com/maps/place/429+E+Worthington+Ave,+Charlotte,+NC+28203/@35.2084558,-80.8575031,17z/data=!3m1!4b1!4m5!3m4!1s0x88569f77f1408bf1:0x1cee1c068e13ac63!8m2!3d35.2084558!4d-80.8553144">
									<span className="icon alt fa-home" />
									<h3>Address</h3>
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
