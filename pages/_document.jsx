import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				<link rel="icon" href="/favicon.ico" />
				<link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
				<link
					href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap"
					rel="stylesheet"
				/>
				<script src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit" async defer />
			</Head>
			<body>
				<a href="#main" className="skip-link" tabIndex={0}>
					Skip to main content
				</a>
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}
