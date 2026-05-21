import React from 'react'

const FAQ = ({ heading = 'Frequently Asked Questions', items = [] }) => {
    if (!items || items.length === 0) return null

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": items.map(({ question, answer }) => ({
            "@type": "Question",
            "name": question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": answer
            }
        }))
    }

    return (
        <div className="faq-section">
            <header className="major">
                <h2>{heading}</h2>
            </header>
            <div className="faq-list">
                {items.map(({ question, answer }) => (
                    <details key={question} className="faq-item">
                        <summary className="faq-question">
                            <span>{question}</span>
                            <span className="faq-icon" aria-hidden="true">+</span>
                        </summary>
                        <div className="faq-answer">
                            <p>{answer}</p>
                        </div>
                    </details>
                ))}
            </div>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema).replace(/</g, '\\u003c') }}
            />
        </div>
    )
}

export default FAQ
