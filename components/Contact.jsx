import React from "react";
import axios from "axios";
import ky from "ky-universal";

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
		console.log(this.state);
		this.setState({ isSubmitting: true, status: 'Sending message...' });

		// AJAX request
		const params = new URLSearchParams([...new FormData(e.target).entries()])

		axios.post('/io.php', params)
		  .then(function (response) {
		    console.log('response: ', response);
		    return response
		  })
		  .catch( (error) => {
		    console.log(error);
		    this.setState({ isSubmitting: false, isError: true, status: 'Something went wrong, please try again or email me at susan@susan@susanmorrow.us' });
		  });

		// const res = await ky("http://susanmorrow.us/new/io.php", {
		// 	mode: 'no-cors',
		// 	timeout: 20000,
		// 	method: "POST",
		// 	body: params,
		// 	headers: {
		// 		"Content-Type": "application/x-www-form-urlencoded"
		// 	}
		// })
		// .catch(() => {
		// 	this.setState({ isSubmitting: false, isError: true, status: "Something went wrong, please try again or email me at susan@susan@susanmorrow.us" });

		// });

		// this.setState({ isSubmitting: false });

		// const data = res;

		// if (data) {
		// 	!data.hasOwnProperty("error")
		// 		? this.setState({ status: data.success })
		// 		: this.setState({ status: data.error, isError: true });
		// }

		setTimeout(
			() => {
				const values = {...this.state.values, message: ""}
				console.log(values)
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

	render() {
		return (
			<section id="contact">
				<div className="inner">
					<section>
						<form
							method="post"
							action="https://susanmorrow.us/new/io.php"
							onSubmit={this.submitForm}
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
							<p>{this.state.isError && `Error: `}{this.state.status}</p>
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
