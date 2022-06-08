import { Link } from 'react-router-dom';
import './termsOfUse.css';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';

const TermsOfUse = () => {
    return (
    <>
        <Header/>
            <main className="terms">
                <div className="container">
                    <h2 className="terms__title">News API Terms of Service</h2>
                    <div className="terms__subtitle">Terms</div>
                    <div className="terms__text">By accessing the Service and Data at https://newsapi.org, you are agreeing to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws. If you do not agree with any of these terms, you are prohibited from using or accessing this site. The materials contained in this website are protected by applicable copyright and trademark law.</div>
                    <div className="terms__subtitle">Use license</div>
                    <div className="terms__text">This license may be terminated by News API at any time, with or without cause, with or without notice, effective immediately. In this case, any remaining paid period will be refunded pro-rata. All provisions of this Agreement which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, waiver and release, indemnity and limitations of liability.</div>
                    <div className="terms__subtitle">Data license</div>
                    <div className="terms__text">As part of the News API Service, News API collects and generates certain Data by aggregating information regarding publicly available web pages, utilizing News API’s proprietary technology. This Data does not contain any personally identifiable information regarding any end users. As part of the API Service, certain Data is made publicly available to end-users. Data accessible through News API may contain third party content (such as text, images, videos). This content will remain the sole responsibility of those who make it available. In some cases content accessible through our API may also be subject to intellectual property rights. If this is the case you may not use it unless you are licensed to do so or are otherwise permitted by law.</div>
                    <Link to="/" className="about__link-home">/home</Link>
                </div>
            </main>
            
        <Footer/>
    </>
        
    )
}

export default TermsOfUse;