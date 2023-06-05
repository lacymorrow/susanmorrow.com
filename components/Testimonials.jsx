import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

class Testimonials extends Component {
	constructor(props) {
		super(props);
		this.state = {
			testimonials: [
				{
					quote: "Thank you for taking a journey with me, and helping me through it. I will always appreciate your rare combination of intelligence and deep compassion.Thank you!", author: "S.B. former client"
				},
				{ quote: "So grateful for the impact sessions with Susan made for my life.", author: " Lori L." },
				{
					quote: "Committed, knowledgeable, caring and personable! Susan has helped many, many couples save or improve their relationship.",
					author: "L.R. Charlotte therapist"
				},
				{
					quote: "This past year has been one of the most challenging ones for me. I am discovering a new level of self reliance, self awareness and mercy for myself and others. Thank you!!",
					author: "former client"
				},
				{
					quote: "I am so grateful for all the times you listened, offered guidance and tools for navigating my way.",
					author: "former client"
				},
				{
					quote: "Susan is a very compassionate and wonderful therapist, especially for couples.",
					author: "H.S. Charlotte psychologist"
				},
				{
					quote: "I am stronger today because of time spent with Susan..",
					author: "former client"
				}


			],
		};
	}

	render() {
		return (
			<Carousel
				autoPlay
				interval={4500}
				infiniteLoop
				useKeyboardArrows
				dynamicHeight
				showThumbs={false}
				showStatus={false}
				showIndicators={false}
				className="testimonial-carousel"
			>
				{this.state.testimonials.map((testimonial, index) => (
					<div key={index} className="testimonial">
						<blockquote>
							<p className="quote">{testimonial.quote}</p>
							<cite className="author">{testimonial.author}</cite>
						</blockquote>
					</div>
				))}
			</Carousel>

		);
	}
}

export default Testimonials;
