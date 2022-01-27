import Head from "next/head"

import Layout from '../components/Layout'

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
                        <blockquote>Help with Anxiety, Depression, Family Issues, Addictions, Trauma, and Loss.</blockquote>
                    </header>
                    <span className="image main"><img src="/images/header-individual-2.jpg" alt="" /></span>

                    <p>A rapidly changing culture routinely throws us curves.</p>
                    <p>Individual Therapy helps for process life experiences to create a more coherent sense of self.<br />With a stable, secure sense of self, the necessary actions for a life that resembles your values becomes clear. I offer life strategies to help you to move forward in transitions, and to move further along in life in stronger relationships. I use Emotionally-Focused Therapy, Cognitive Therapy, and Mindfulness-based approaches to help you to best address your unique needs.</p>
                    <p>Individual therapy will bring focus to your interior life, give you tools to sustain yourself, and provide a map for meaningful change. Let's, together, dismantle unproductive thought processes, so you can refocus your actions to be congruent with your values and your needs.</p>
                    <h4>Help and insight with:</h4>
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
                	<p>Counseling for Adults, Older Teens, Young Adults.</p>
                </div>
            </section>
        </div>
    </Layout>
)
