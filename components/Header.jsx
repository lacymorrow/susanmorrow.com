import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const services = [
	{ label: "Individual Therapy", href: "/individual" },
	{ label: "Couples Therapy", href: "/couples" },
	{ label: "Family Therapy", href: "/family" },
	{ label: "Couples Intensives", href: "/intensives" },
	{ label: "Life Coaching", href: "/coaching" },
];

const Header = () => {
	const [mobileOpen, setMobileOpen] = useState(false);
	const [servicesOpen, setServicesOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	const router = useRouter();
	const dropdownRef = useRef(null);

	useEffect(() => {
		const handleScroll = () => setScrolled(window.scrollY > 20);
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	useEffect(() => {
		setMobileOpen(false);
		setServicesOpen(false);
	}, [router.asPath]);

	useEffect(() => {
		if (mobileOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "";
		}
		return () => {
			document.body.style.overflow = "";
		};
	}, [mobileOpen]);

	useEffect(() => {
		const handleClickOutside = (e) => {
			if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
				setServicesOpen(false);
			}
		};
		document.addEventListener("mousedown", handleClickOutside);
		return () => document.removeEventListener("mousedown", handleClickOutside);
	}, []);

	const isActive = (href) => router.pathname === href;
	const isServiceActive = services.some((s) => router.pathname === s.href);

	return (
		<>
		<header
			className={`fixed top-0 w-full z-50 transition-all duration-300 ${
				scrolled
					? "bg-cream/95 backdrop-blur-md shadow-sm"
					: "bg-cream/90 backdrop-blur-sm"
			}`}
		>
			<div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-20">
				{/* Logo */}
				<Link href="/" className="flex items-baseline gap-2 group">
					<span className="font-serif text-2xl text-charcoal group-hover:text-sage-600 transition-colors">
						Susan Morrow
					</span>
					<span className="text-xs text-warm-gray tracking-wide hidden sm:inline">
						MSW, LCSW
					</span>
				</Link>

				{/* Desktop Nav */}
				<nav className="hidden lg:flex items-center gap-1">
					<Link
						href="/about"
						className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
							isActive("/about")
								? "text-sage-600 bg-sage-50"
								: "text-warm-gray-700 hover:text-sage-600 hover:bg-sage-50"
						}`}
					>
						About
					</Link>

					{/* Services Dropdown */}
					<div className="relative" ref={dropdownRef}>
						<button
							onClick={() => setServicesOpen(!servicesOpen)}
							className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
								isServiceActive
									? "text-sage-600 bg-sage-50"
									: "text-warm-gray-700 hover:text-sage-600 hover:bg-sage-50"
							}`}
						>
							Services
							<svg
								width="12"
								height="12"
								viewBox="0 0 12 12"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								className={`transition-transform ${servicesOpen ? "rotate-180" : ""}`}
							>
								<path d="M3 5l3 3 3-3" />
							</svg>
						</button>

						{servicesOpen && (
							<div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-xl shadow-lg border border-sand py-2 animate-fade-in">
								{services.map((item) => (
									<Link
										key={item.href}
										href={item.href}
										className={`block px-4 py-2.5 text-sm transition-colors ${
											isActive(item.href)
												? "text-sage-600 bg-sage-50"
												: "text-warm-gray-700 hover:text-sage-600 hover:bg-sage-50"
										}`}
									>
										{item.label}
									</Link>
								))}
							</div>
						)}
					</div>

					<Link
						href="/online"
						className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
							isActive("/online")
								? "text-sage-600 bg-sage-50"
								: "text-warm-gray-700 hover:text-sage-600 hover:bg-sage-50"
						}`}
					>
						Online Therapy
					</Link>

					<a
						href="#contact"
						className="ml-2 px-5 py-2.5 bg-sage text-white text-sm font-medium rounded-full hover:bg-sage-600 transition-colors"
					>
						Schedule
					</a>
				</nav>

				{/* Mobile Menu Button */}
				<button
					onClick={() => setMobileOpen(!mobileOpen)}
					className="lg:hidden p-2 text-charcoal hover:text-sage-600 transition-colors"
					aria-label={mobileOpen ? "Close menu" : "Open menu"}
				>
					{mobileOpen ? (
						<svg
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
						>
							<line x1="18" y1="6" x2="6" y2="18" />
							<line x1="6" y1="6" x2="18" y2="18" />
						</svg>
					) : (
						<svg
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
						>
							<line x1="4" y1="7" x2="20" y2="7" />
							<line x1="4" y1="12" x2="20" y2="12" />
							<line x1="4" y1="17" x2="20" y2="17" />
						</svg>
					)}
				</button>
			</div>

		</header>

		{/* Mobile Menu - outside header to avoid backdrop-filter containing block issue */}
		{mobileOpen && (
			<div className="lg:hidden fixed inset-x-0 top-20 bottom-0 bg-cream z-50 overflow-y-auto shadow-xl">
				<nav className="flex flex-col px-6 py-8 gap-1">
					<Link
						href="/"
						className={`px-4 py-3 text-lg font-medium rounded-xl transition-colors ${
							isActive("/")
								? "text-sage-600 bg-sage-50"
								: "text-charcoal hover:bg-sage-50"
						}`}
					>
						Home
					</Link>
					<Link
						href="/about"
						className={`px-4 py-3 text-lg font-medium rounded-xl transition-colors ${
							isActive("/about")
								? "text-sage-600 bg-sage-50"
								: "text-charcoal hover:bg-sage-50"
						}`}
					>
						About
					</Link>

					<div className="mt-2 mb-1 px-4">
						<span className="text-xs font-semibold uppercase tracking-widest text-warm-gray-300">
							Services
						</span>
					</div>
					{services.map((item) => (
						<Link
							key={item.href}
							href={item.href}
							className={`px-4 py-3 pl-8 text-lg font-medium rounded-xl transition-colors ${
								isActive(item.href)
									? "text-sage-600 bg-sage-50"
									: "text-charcoal hover:bg-sage-50"
							}`}
						>
							{item.label}
						</Link>
					))}

					<Link
						href="/online"
						className={`px-4 py-3 text-lg font-medium rounded-xl transition-colors ${
							isActive("/online")
								? "text-sage-600 bg-sage-50"
								: "text-charcoal hover:bg-sage-50"
						}`}
					>
						Online Therapy
					</Link>

					<div className="mt-6 px-4">
						<a
							href="#contact"
							onClick={() => setMobileOpen(false)}
							className="block w-full text-center px-6 py-3.5 bg-sage text-white text-lg font-medium rounded-full hover:bg-sage-600 transition-colors"
						>
							Schedule an Appointment
						</a>
					</div>

					<div className="mt-8 px-4 pt-6 border-t border-sand">
						<p className="text-warm-gray text-sm">
							<a href="tel:+17043325153" className="hover:text-sage-600 transition-colors">
								(704) 332-5153
							</a>
						</p>
						<p className="text-warm-gray text-sm mt-1">
							<a href="mailto:susan@susanmorrow.us" className="hover:text-sage-600 transition-colors">
								susan@susanmorrow.us
							</a>
						</p>
					</div>
				</nav>
			</div>
		)}
		</>
	);
};

export default Header;
