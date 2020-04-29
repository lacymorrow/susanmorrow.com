import Head from "next/head"

import Layout from '../components/layout'

export default () => (
	<Layout>
		<Head>
			<title>Video Therapy</title>
			<meta name="description" content="Remote counseling for the digital age" />
		</Head>

		<div id="main" className="alt">
			<section id="one">
				<div className="inner">
					<header className="major">
						<h1>Video Therapy</h1>
						<blockquote>Remote counseling for the digital age</blockquote>
					</header>
					<span className="image main"><img src="/images/pic11.jpg" alt="" /></span>
					<p>We live our lives in a digital age. While face to face, in-office, in person time is comforting and desirable, it’s at times not practical.</p>
					<p>When you have life circumstances that make it difficult to attend in-office sessions, I am available to work with you through online or telephone services to optimize our therapy progress. Online therapy follows the same process you might expect at in-person meetings. If you have barriers that get in the way of in-person meetings-  childcare, travel, living in other regions, I provide these services to help you get the support you need.</p>
					<p>I am licensed in NC, and am available to NC residents for online individual, couples, and family therapy.</p>
					<p>If you live outside the NC area, I am available for individual and relationship coaching services.</p>
					<p>If you desire lasting love and strong bonds, contact me today to get started.</p>
				</div>
			</section>
		</div>
	</Layout>
)
