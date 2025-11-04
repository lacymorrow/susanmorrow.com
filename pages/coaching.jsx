import Head from "next/head"

import Layout from '../components/Layout'

const Coaching = () => <Layout>
    <Head>
        <title>Life Coaching Charlotte NC | Susan Morrow, MSW, LCSW</title>
        <meta name="description" content="Goal-focused life coaching in Charlotte, NC for relationships, business, and personal growth. Action-oriented strategies to overcome obstacles and achieve success." />
    </Head>

    <div id="main" className="alt">
        <section id="one">
            <div className="inner">
                <header className="major">
                    <h1>Life Coaching</h1>
                    <blockquote>Help with love, business, and family relationshps.</blockquote>
                </header>
                <span className="image main"><img src="/images/pic11.jpg" alt="Life coaching session for personal and professional growth" /></span>
                <p>Bring a renewed desire for your best life, and collaboratively we will customize an action plan to get you on the path to the life you want. I offer goal focused, strategic intervention, and positive psychology strategies to address blocks to your success in relationships, work, and life.</p>
                <p>Coaching is different from therapy, in that it is more specifically action and future oriented, rather than psychodynamically processing early and current inluences, with change efforts based on new insights and thought processes. If you have questions I am happy to discuss the best approach to your situation. I offer personal coaching, relationship coaching, family business coaching, and divorce coaching.</p>
            </div>
        </section>
    </div>
</Layout>;

export default Coaching;
