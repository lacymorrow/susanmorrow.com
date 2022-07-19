import Head from "next/head"

import Layout from '../components/Layout'

const Covid = () => <Layout>
    <Head>
        <title>Online Therapy</title>
        <meta name="description" content="Remote counseling for the digital age" />
    </Head>

    <div id="main" className="alt">
        <section id="one">
            <div className="inner">
                <header className="major">
                    <h1>We&apos;re here during Covid-19</h1>
                    <blockquote>Online Individual, Couples, and Family Counseling from the comfort and safety of your home.</blockquote>
                </header>
                <span className="image main"><img src="/images/header-covid.jpg" alt="" /></span>
                <p>Online therapy services are offered as a convenient way to meet. I have 30 years experience helping clients solve problems, develop life strategies, overcome limiting beliefs, and form deeper relationship bonds. in the comfort of your personal space, you receive private, professional, confidential, secure services . I use a HIPPA-compliant platform to insure your privacy.</p>
                <p>During the Covid-19 crisis, I offer facilitator services to bring family groups together effectively. A silver lining to the coronavirus is we have become aware of how much we depend on each other for our survival, and well-being.</p>
                <p>Get started today!</p>
            </div>
        </section>
    </div>
</Layout>;

export default Covid;
