import { useState, useEffect, useCallback } from "react";

const testimonials = [
	{
		quote: "Just can't thank you enough for all the listening, support and gentle yet honest truth that I needed to hear. I feel like I really truly connected and trusted you from the moment I sat down and started talking with you. You have been a godsend to me and I will forever be grateful that our paths crossed at the perfect time when I needed someone as I was spiraling out of control. You guided me back to a very good place to be in and I feel I am back participating in my life being fully present and my old HAPPY self.",
		author: "Former Client",
	},
	{
		quote: "Thank you for taking a journey with me, and helping me through it. I will always appreciate your rare combination of intelligence and deep compassion. Thank you!",
		author: "S.B. former client",
	},
	{
		quote: "So grateful for the impact sessions with Susan made for my life.",
		author: "Lori L.",
	},
	{
		quote: "Committed, knowledgeable, caring and personable! Susan has helped many, many couples save or improve their relationship.",
		author: "L.R. Charlotte therapist",
	},
	{
		quote: "This past year has been one of the most challenging ones for me. I am discovering a new level of self reliance, self awareness and mercy for myself and others. Thank you!",
		author: "Former Client",
	},
	{
		quote: "I am so grateful for all the times you listened, offered guidance and tools for navigating my way.",
		author: "Former Client",
	},
	{
		quote: "Susan is a very compassionate and wonderful therapist, especially for couples.",
		author: "H.S. Charlotte psychologist",
	},
	{
		quote: "I am stronger today because of time spent with Susan.",
		author: "Former Client",
	},
];

const Testimonials = () => {
	const [current, setCurrent] = useState(0);
	const [isAnimating, setIsAnimating] = useState(false);
	const [isPaused, setIsPaused] = useState(false);

	const goTo = useCallback(
		(index) => {
			if (isAnimating || index === current) return;
			setIsAnimating(true);
			setTimeout(() => {
				setCurrent(index);
				setIsAnimating(false);
			}, 400);
		},
		[isAnimating, current]
	);

	useEffect(() => {
		if (isPaused) return;
		const interval = setInterval(() => {
			setIsAnimating(true);
			setTimeout(() => {
				setCurrent((prev) => (prev + 1) % testimonials.length);
				setIsAnimating(false);
			}, 400);
		}, 6000);
		return () => clearInterval(interval);
	}, [isPaused]);

	return (
		<section
			className="bg-sage py-20 md:py-28"
			onMouseEnter={() => setIsPaused(true)}
			onMouseLeave={() => setIsPaused(false)}
		>
			<div className="max-w-3xl mx-auto px-6 text-center">
				<div className="mb-8">
					<span className="font-serif text-6xl text-white/20 leading-none select-none">
						&ldquo;
					</span>
				</div>

				<div
					className={`transition-opacity duration-400 min-h-[180px] flex items-center justify-center ${
						isAnimating ? "opacity-0" : "opacity-100"
					}`}
				>
					<blockquote>
						<p className="text-lg md:text-xl text-white/90 italic leading-relaxed font-light">
							{testimonials[current].quote}
						</p>
						<cite className="mt-6 block text-sage-100 not-italic text-sm font-medium tracking-wide">
							&mdash; {testimonials[current].author}
						</cite>
					</blockquote>
				</div>

				<div className="flex justify-center gap-2 mt-10">
					{testimonials.map((_, i) => (
						<button
							key={i}
							onClick={() => goTo(i)}
							aria-label={`Go to testimonial ${i + 1}`}
							className={`h-1.5 rounded-full transition-all duration-300 ${
								i === current
									? "bg-white w-8"
									: "bg-white/30 w-1.5 hover:bg-white/50"
							}`}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default Testimonials;
