import Head from "next/head"

import Layout from '../components/layout'

export default () => (
    <Layout>
        <Head>
            <title>Family Therapy</title>
            <meta name="description" content="Counseling for adults and young adults" />
        </Head>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Family Therapy</h1>
                        <blockquote>Build Stronger family bonds. Provide support for individual family members while going through personal struggles. Become a family that suports the health and wellness of all members.</blockquote>
                    </header>
                    <span className="image main"><img src="/images/header-family.jpg" alt="" /></span>
                    <p>Even the most distressed couples can restore their love relationships to renewed intimacy and marital satisfaction. I use the most highly regarded, evidence–based couples therapy approach available in North America. Based on 25 years of research by esteemed marriage expert John Gottman, PhD (The Gottman Institute, University of Washington) and the couples therapy processes of Emotionally–Focused Therapy developed by eminent attachment science researcher, <b>Sue Johnson, PhD</b>.</p>
                    <p>With 25 years of experience as a couples therapist, I have the training and a practical road map to lead you from stuck places of disconnection into a secure, loving bond. We will work together to build a sustainable bond, to help you to cope in this challenging world.</p>
                    <p>Most marital distress comes from disconnection, communication problems, physical intimacy issues, broken trust, old hurts, stem from fissures in the couples basic attachment bond. I have a road map to take you out of these stuck places and into a more responsive, attuned, engaged relationship.</p>
                    <p>We now know how to build and protect a close, healthy, loving relationships. Emotionally Focused Couples Therapy provides practical, focused navigation to lead you out of these stuck places of disconnection into a secure, loving bond. Our primary attachment bonds are crucial to our survival as a species.</p>
                </div>
            </section>
        </div>
    </Layout>
)
