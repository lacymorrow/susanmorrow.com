import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class Testimonials extends Component {
  constructor(props) {
    super(props);
    this.state = {
      testimonials: [
        {
          quote:
            "Just can't thank you enough for all the listening, support and gentle yet honest truth that I needed to hear. I feel like I really truly connected and trusted you from the moment I sat down and started talking with you.  You have been a godsend to me and I will forever be grateful that our paths crossed at the perfect time when I needed someone as I was spiraling out of control.  You guided me back to a very good place to be in and I feel I am back participating in my life being fully present and my old HAPPY self.",
          author: "Former Client",
        },
        {
          quote:
            "Thank you for taking a journey with me, and helping me through it. I will always appreciate your rare combination of intelligence and deep compassion. Thank you!",
          author: "S.B. former client",
        },
        {
          quote:
            "So grateful for the impact sessions with Susan made for my life.",
          author: " Lori L.",
        },
        {
          quote:
            "Committed, knowledgeable, caring and personable! Susan has helped many, many couples save or improve their relationship.",
          author: "L.R. Charlotte therapist",
        },
        {
          quote:
            "This past year has been one of the most challenging ones for me. I am discovering a new level of self reliance, self awareness and mercy for myself and others. Thank you!",
          author: "Former Client",
        },
        {
          quote:
            "I am so grateful for all the times you listened, offered guidance and tools for navigating my way.",
          author: "Former Client",
        },
        {
          quote:
            "Susan is a very compassionate and wonderful therapist, especially for couples.",
          author: "H.S. Charlotte psychologist",
        },
        {
          quote: "I am stronger today because of time spent with Susan.",
          author: "Former Client",
        },
      ],
    };
  }

  render() {

    const settings = {
      autoplay: true,
      autoplaySpeed: 6000,
      infinite: true,
      fade: true,
      arrows: false,
      dots: false,
      pauseOnHover: true,
      speed: 1200,
      slidesToShow: 1,
      slidesToScroll: 1,
      className: "testimonial-carousel",
    };

    return (
      <>
        <Slider {...settings}>
          {this.state.testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial">
              <blockquote>
                <p className="quote">{testimonial.quote}</p>
                <cite className="author"> &mdash; {testimonial.author}</cite>
              </blockquote>
            </div>
          ))}
        </Slider>
      </>
    );
  }
}

export default Testimonials;
