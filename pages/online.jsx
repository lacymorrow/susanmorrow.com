import Head from "next/head"

import Layout from '../components/Layout'

const Online = () => <Layout>
    <Head>
        <title>Online Therapy & Telehealth Charlotte NC | Susan Morrow, MSW, LCSW</title>
        <meta name="description" content="Professional online therapy and telehealth services for NC residents. Secure video and phone sessions for individual, couples, and family therapy. Flexible scheduling available." />
    </Head>

    <div id="main" className="alt">
        <section id="one">
            <div className="inner">
                <header className="major">
                    <h1>Online Therapy</h1>
                    <blockquote>Remote counseling for the digital age</blockquote>
                </header>
                <span className="image main"><img src="/images/header-video.jpg" alt="Online therapy session via secure video conferencing" /></span>
                <p>We live our lives in a digital age. While in person time is comforting and desirable, it’s at times not practical.</p>
                <p>I am available to work with you through online or telephone services to optimize our therapy progress. Online therapy uses the same process you might expect at in-person meetings. If for some reason we are unable to meet in-person, I provide these services to help you get the support you need.</p>
                <p>I am licensed in NC, and am available to NC residents for online individual, couples, and family therapy.</p>
                <p>If you live outside the NC area, I am available for individual and relationship coaching services.</p>
                <p>If you desire lasting love and stronger bonds, contact me today to get started.</p>
            </div>
        </section>
    </div>
</Layout>;

export default Online;
