import Head from "next/head"
import Image from 'next/image'

import Layout from '../components/Layout'

const Online = () => <Layout>
    <Head>
        <title>Online Therapy Charlotte NC | Susan Morrow, LCSW</title>
        <meta name="description" content="Online therapy and telehealth for NC residents. Secure video and phone sessions for individual, couples, and family therapy." />
    </Head>

    <div id="main" className="alt">
        <section id="one">
            <div className="inner">
                <header className="major">
                    <h1>Online Therapy for NC Residents</h1>
                    <blockquote>Remote counseling for the digital age</blockquote>
                </header>
                <span className="image main"><Image src="/images/header-video.jpg" alt="Online therapy session via secure video conferencing" width={1200} height={360} priority sizes="(max-width: 736px) 100vw, 75vw" style={{ width: '100%', height: 'auto' }} /></span>
                <p>We live our lives in a digital age. While in person time is comforting and desirable, it’s at times not practical.</p>
                <p>I am available to work with you through online or telephone services to optimize our therapy progress. Online therapy uses the same process you might expect at in-person meetings. If for some reason we are unable to meet in-person, I provide these services to help you get the support you need.</p>
                <p>I am licensed in NC, and am available to NC residents for online individual, couples, and family therapy.</p>
                <p>If you live outside the NC area, I am available for individual and relationship coaching services.</p>
                <p>If you desire lasting love and stronger bonds, contact me today to get started.</p>
                <p>Online therapy offers meaningful flexibility without sacrificing the quality of care you deserve. Sessions take place from the comfort of your own home—or wherever you feel most at ease—through a secure, HIPAA-compliant video platform. You bring the same courage and openness you would to any in-person appointment, and I bring the same attentiveness, clinical expertise, and evidence-based techniques. The therapeutic relationship we build is just as real and effective, regardless of the miles between us.</p>
                <p>A typical online session follows the same structure as an in-person visit. We connect at our scheduled time via encrypted video, talk through what&apos;s on your mind, and work through the approaches—whether Emotionally Focused Therapy, CBT, or another method—that are most suited to your goals. There is nothing complicated to set up; you only need a private space, a reliable internet connection, and a device with a camera.</p>
                <p>Online therapy is especially well-suited for busy professionals managing demanding schedules, parents who find it difficult to arrange childcare, individuals in rural areas with limited local options, and anyone navigating mobility challenges or health concerns that make travel difficult. If any of these circumstances resonate with you, telehealth may be exactly the right fit.</p>
            </div>
        </section>
    </div>
</Layout>;

export default Online;
