import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				<link rel="icon" href="/favicon.ico" />
				<link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
				<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css" rel="stylesheet" />
				<link href="https://fonts.googleapis.com/css2?family=Quattrocento+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Quattrocento:wght@400;700&display=swap" rel="stylesheet" />			</Head>
			<body>
				<a href="#main" className="skip-link" style={{ position: 'absolute', left: '-9999px', zIndex: 999 }} onFocus={(e) => { e.target.style.left = '0'; e.target.style.position = 'absolute'; e.target.style.backgroundColor = '#000'; e.target.style.color = '#fff'; e.target.style.padding = '10px'; }} onBlur={(e) => { e.target.style.left = '-9999px'; }}>Skip to main content</a>
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}
