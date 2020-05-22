import Head from "next/head"

import Layout from '../components/layout'

export default () => (
    <Layout>
        <Head>
            <title>Individual Therapy</title>
            <meta name="description" content="Counseling for adults and young adults" />
        </Head>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Individual Therapy</h1>
                        <blockquote>One-on-one counseling for adolescents, adults, and people of any age or background.</blockquote>
                        <blockquote>Develop a lastixng, secure bond that provides joy through life's triumphs, and shelter through tough times. Help for deeper communication, intimacy, marital crisis, and marital enrichment. My combination of attachment-based couple therapy - Emotionally Focused Therapy (EFT) and advanced training with the Gottman Institute puts your relationship in safe hands.</blockquote>
                    </header>
                    <span className="image main"><img src="/images/block-individual.jpg" alt="" /></span>

                    <p>A rapidly changing culture routinely throws us curves. Stress is the new normal. Therapy gives you tools to sustain yourself, and offers a map to put your life back on course.</p>
                    <h4>We can work out</h4>
                    <div className="row">
                        <div className="6u 12u(small)">
		                    <ul>
		                        <li>Relationship Issues</li>
		                        <li>Depression, Anxiety, Self Esteem</li>
		                        <li>Parenting</li>
		                        <li>Life Transitions</li>
		                        <li>Work–life issues</li>
		                        <li>Separation/Divorce</li>
		                    </ul>
		                </div>
                        <div className="6u 12u(small)">
		                    <ul>
		                        <li>Grief/Loss</li>
		                        <li>Addictions</li>
		                        <li>Family issues</li>
		                        <li>Dating issues</li>
		                        <li>Crisis Management</li>
		                    </ul>
		                </div>
	                </div>
                </div>
            </section>
        </div>
    </Layout>
)
