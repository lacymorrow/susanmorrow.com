import React from "react";
import Head from 'next/head'
import { withRouter } from 'next/router'


import ReactGA from 'react-ga';

import Header from './Header'
import Menu from './Menu'
import Contact from './Contact'
import Footer from './Footer'

class Layout extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isMenuVisible: false,
            loading: 'is-loading',
            gaInit: false
        }
        this.handleToggleMenu = this.handleToggleMenu.bind(this)
    }

    componentDidMount() {
        this.timeoutId = setTimeout(() => {
            this.setState({ loading: '' });
        }, 100);

        const trackingId = "UA-247410-12";

        if (!this.state.gaInit) {
            ReactGA.initialize(trackingId, {
                debug: true,
                gaOptions: { cookieDomain: 'auto' }
            });
            this.setState({ gaInit: true })
        }

        ReactGA.pageview(window.location.pathname + window.location.search);

    }

    componentWillUnmount() {
        if (this.timeoutId) {
            clearTimeout(this.timeoutId);
        }
    }

    handleToggleMenu() {
        this.setState({
            isMenuVisible: !this.state.isMenuVisible
        })
    }

    render() {
        const router = this.props.router;
        const currentUrl = `https://susanmorrow.us${router.asPath}`;
        const siteTitle = "Susan Morrow MSW, LCSW - Therapy Charlotte, NC";
        const siteDescription = "Online sessions available! Over 30 years in private practice, Susan Morrow has a solid base of experience providing therapy, consultation, coaching, and training services to individuals, couples, and families.";
        const siteImage = "https://susanmorrow.us/images/headshot-2023-2.jpg";

        const personSchema = {
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Susan Morrow",
            "jobTitle": "Licensed Clinical Social Worker",
            "honorificSuffix": "MSW, LCSW",
            "email": "susan@susanmorrow.us",
            "telephone": "(704) 332-5153",
            "url": "https://susanmorrow.us",
            "image": "https://susanmorrow.us/images/headshot-2023-2.jpg",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "429 E. Worthington Ave. Suite 2",
                "addressLocality": "Charlotte",
                "addressRegion": "NC",
                "postalCode": "28203",
                "addressCountry": "US"
            },
            "alumniOf": {
                "@type": "EducationalOrganization",
                "name": "University of Georgia",
                "department": "School of Social Work"
            },
            "hasOccupation": {
                "@type": "Occupation",
                "occupationLocation": {
                    "@type": "City",
                    "name": "Charlotte",
                    "addressRegion": "NC"
                },
                "skills": [
                    "Psychotherapy",
                    "Couples Therapy",
                    "Family Therapy",
                    "Individual Therapy",
                    "Emotionally Focused Therapy",
                    "Gottman Method",
                    "Acceptance and Commitment Therapy"
                ]
            },
            "knowsAbout": [
                "Psychotherapy",
                "Couples Therapy",
                "Family Therapy",
                "Individual Therapy",
                "Emotionally Focused Therapy",
                "Gottman Method",
                "Marriage and Family Therapy",
                "Clinical Social Work"
            ],
            "memberOf": [
                {
                    "@type": "Organization",
                    "name": "National Association of Social Workers",
                    "url": "https://www.socialworkers.org/"
                },
                {
                    "@type": "Organization",
                    "name": "International Centre for Excellence in Emotion Focused Couples Therapy",
                    "url": "https://iceeft.com/"
                },
                {
                    "@type": "Organization",
                    "name": "Carolinas Center for Emotionally Focused Therapy"
                },
                {
                    "@type": "Organization",
                    "name": "Carolinas Group Psychotherapy Society",
                    "url": "https://carolinasgps.org/"
                },
                {
                    "@type": "Organization",
                    "name": "American Group Psychotherapy Association",
                    "url": "https://www.agpa.org/"
                }
            ]
        };

        const healthProfessionalSchema = {
            "@context": "https://schema.org",
            "@type": "Person",
            "@id": "https://susanmorrow.us/#person",
            "name": "Susan Morrow",
            "additionalType": "https://schema.org/HealthProfessional",
            "jobTitle": "Licensed Clinical Social Worker",
            "honorificSuffix": "MSW, LCSW",
            "email": "susan@susanmorrow.us",
            "telephone": "(704) 332-5153",
            "url": "https://susanmorrow.us",
            "image": "https://susanmorrow.us/images/headshot-2023-2.jpg",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "429 E. Worthington Ave. Suite 2",
                "addressLocality": "Charlotte",
                "addressRegion": "NC",
                "postalCode": "28203",
                "addressCountry": "US"
            },
            "medicalSpecialty": [
                "Psychotherapy",
                "Couples Therapy",
                "Family Therapy",
                "Individual Therapy",
                "Clinical Social Work"
            ],
            "hasCredential": {
                "@type": "EducationalOccupationalCredential",
                "credentialCategory": "Professional License",
                "recognizedBy": {
                    "@type": "Organization",
                    "name": "North Carolina Board of Social Work"
                }
            }
        };

        const localBusinessSchema = {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "@id": "https://susanmorrow.us/#business",
            "name": "Susan Morrow, MSW, LCSW",
            "image": "https://susanmorrow.us/images/headshot-2023-2.jpg",
            "telephone": "(704) 332-5153",
            "email": "susan@susanmorrow.us",
            "url": "https://susanmorrow.us",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "429 E. Worthington Ave. Suite 2",
                "addressLocality": "Charlotte",
                "addressRegion": "NC",
                "postalCode": "28203",
                "addressCountry": "US"
            },
            "geo": {
                "@type": "GeoCoordinates",
                "latitude": "35.2084558",
                "longitude": "-80.8553144"
            },
            "priceRange": "$$",
            "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday"
                ],
                "opens": "09:00",
                "closes": "17:00"
            },
            "areaServed": {
                "@type": "State",
                "name": "North Carolina"
            },
            "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Therapy Services",
                "itemListElement": [
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Individual Therapy",
                            "description": "Counseling for adults and young adults dealing with anxiety, depression, family issues, addictions, trauma, and loss."
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Couples Therapy",
                            "description": "Evidence-based couples therapy to develop lasting, secure bonds and improve communication and intimacy."
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Family Therapy",
                            "description": "Support through family challenges, strengthening family bonds and developing support strategies."
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Online Therapy",
                            "description": "Remote counseling services via video or telephone for NC residents."
                        }
                    }
                ]
            }
        };

        return (
            <div className={`body ${this.state.loading} ${this.state.isMenuVisible ? 'is-menu-visible' : ''}`}>
                <Head>
                    <title>Susan Morrow MSW, LCSW - Therapy Charlotte, NC</title>
                    <meta name="description" content="Online sessions available! Over 30 years in private practice, Susan Morrow has a solid base of experience providing therapy, consultation, coaching, and training services to individuals, couples, and families." />
                    <link rel="canonical" href={currentUrl} />
                    
                    {/* Open Graph / Facebook */}
                    <meta property="og:type" content="website" />
                    <meta property="og:url" content={currentUrl} />
                    <meta property="og:title" content={siteTitle} />
                    <meta property="og:description" content={siteDescription} />
                    <meta property="og:image" content={siteImage} />
                    <meta property="og:site_name" content="Susan Morrow, MSW, LCSW" />
                    <meta property="og:locale" content="en_US" />
                    
                    {/* Twitter */}
                    <meta name="twitter:card" content="summary_large_image" />
                    <meta name="twitter:url" content={currentUrl} />
                    <meta name="twitter:title" content={siteTitle} />
                    <meta name="twitter:description" content={siteDescription} />
                    <meta name="twitter:image" content={siteImage} />
                    
                    {/* Additional SEO */}
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <meta name="author" content="Susan Morrow" />
                    <meta name="keywords" content="therapy Charlotte NC, couples therapy, individual therapy, family therapy, online therapy, LCSW, licensed clinical social worker, Emotionally Focused Therapy, Gottman Method, Charlotte therapist" />
                    
                    {/* Structured Data */}
                    <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
                    />
                    <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{ __html: JSON.stringify(healthProfessionalSchema) }}
                    />
                    <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
                    />
                </Head>

                <div id="wrapper">
                    <Header onToggleMenu={this.handleToggleMenu} />
                    {this.props.children}
                    <Contact />
                    <Footer />
                </div>
                <Menu onToggleMenu={this.handleToggleMenu} />

            </div>
        )
    }
}

export default withRouter(Layout)
