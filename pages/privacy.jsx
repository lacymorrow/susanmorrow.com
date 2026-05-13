import Head from "next/head"

import Layout from '../components/Layout'

const Privacy = () => <Layout>
    <Head>
        <title>Privacy Policy | Susan Morrow, MSW, LCSW</title>
        <meta name="description" content="Privacy policy for Susan Morrow's therapy practice in Charlotte, NC. How we collect, use, and protect your personal information." />
    </Head>

    <div id="main" className="alt">
        <section id="one">
            <div className="inner">
                <header className="major">
                    <h1>Privacy Policy</h1>
                </header>
                <p><strong>Effective Date:</strong> April 22, 2026</p>

                <h2>Overview</h2>
                <p>Susan Morrow, MSW, LCSW (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) respects your privacy. This policy describes how we collect, use, and protect personal information submitted through this website (susanmorrow.us).</p>

                <h2>Information We Collect</h2>
                <p>When you use our contact form, we may collect your name, email address, and the contents of your message. We use Cloudflare Turnstile for spam prevention, which may collect technical data such as your IP address and browser type.</p>

                <h2>How We Use Your Information</h2>
                <p>We use the information you provide solely to respond to your inquiry and to schedule appointments. We do not sell, rent, or share your personal information with third parties for marketing purposes.</p>

                <h2>Analytics</h2>
                <p>This website uses privacy-focused analytics (Umami) to understand general usage patterns. This service does not use cookies and does not collect personally identifiable information.</p>

                <h2>Confidentiality</h2>
                <p>As a licensed clinical social worker, Susan Morrow is bound by professional ethics and North Carolina state law regarding the confidentiality of client information. Information shared during therapy sessions is protected by therapist-client privilege and is not disclosed without your written consent, except as required by law.</p>

                <h2>Third-Party Services</h2>
                <p>This website uses the following third-party services:</p>
                <ul>
                    <li>Cloudflare (hosting and spam protection)</li>
                    <li>Google Fonts (typography)</li>
                    <li>Umami Analytics (privacy-focused website analytics)</li>
                </ul>

                <h2>Your Rights</h2>
                <p>You may request access to, correction of, or deletion of your personal information at any time by contacting us at <a href="mailto:susan@susanmorrow.us">susan@susanmorrow.us</a>.</p>

                <h2>Changes to This Policy</h2>
                <p>We may update this policy from time to time. Changes will be posted on this page with an updated effective date.</p>

                <h2>Contact</h2>
                <p>If you have questions about this privacy policy, please contact:</p>
                <p>Susan Morrow, MSW, LCSW<br />
                429 E. Worthington Ave.<br />
                Charlotte, NC 28203<br />
                <a href="mailto:susan@susanmorrow.us">susan@susanmorrow.us</a><br />
                <a href="tel:+17043325153">(704) 332-5153</a></p>
            </div>
        </section>
    </div>
</Layout>;

export default Privacy;
