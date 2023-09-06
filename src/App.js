import { Route, Routes } from 'react-router-dom';

//Page imports
import Layout from './components/UI/Layout/Layout';
import Home from './pages/Home/Home';
import SocialSecurity from './pages/SocialSecurity';
import SocialSecuritySeminarNewportBeachMarch3rd from './pages/SocialSecurity/Seminar/SocialSecuritySeminarNewportBeachMarch3rd';
import SocialSecuritySeminarAlisoViejoJune23rd from './pages/SocialSecurity/Seminar/SocialSecuritySeminarAlisoViejoJune23rd';
import SocialSecuritySeminarRanchoCucamongaMay5th from './pages/SocialSecurity/Seminar/SocialSecuritySeminarRanchoCucamongaMay5th';
import RetirementIncomeTaxesInflationRanchoCucamongaMay5th from './pages/RetirementIncome/Seminar/RetirementIncomeTaxesInflationRanchoCucamongaMay5th';
import SocialSecuritySeminarVictorvilleJune2nd from './pages/SocialSecurity/Seminar/SocialSecuritySeminarVictorvilleJune2nd';
import SocialSecuritySeminarAnaheimMarch24th from './pages/SocialSecurity/Seminar/SocialSecuritySeminarAnaheimMarch24th';
import SocialSecurityWebinar from './pages/SocialSecurity/Webinar/SocialSecurityWebinar';
import Retirement from './pages/Retirement';
import Checkup from './pages/Retirement/Checkup/Checkup';
import CheckupVideoLander from './pages/Retirement/CheckupVideoLander/CheckupVideoLander';
import AboutUs from './pages/AboutUs/AboutUs';
import OurProcess from './pages/OurProcess/OurProcess';
import ContactUs from './pages/ContactUs/ContactUs';
import PrivacyPolicy from './pages/PrivacyPolicy/PrivacyPolicy';
import ThankYou from './pages/SocialSecurity/ThankYou/ThankYou';
import AppointmentConfirmation from './pages/AppointmentConfirmation/AppointmentConfirmation';
import NewsletterModal from './shared/components/Modal/NewsletterModal/NewsletterModal';
import {isMobile} from 'react-device-detect';

const App = () => {
  return (
    <>
      {!isMobile && <NewsletterModal />}
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='contact' element={<ContactUs />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="our-process" element={<OurProcess />} />
          <Route path="appointment-confirmation" element={<AppointmentConfirmation />} />
          <Route path='social-security/seminar' element={<SocialSecurity />} >
            <Route path='newport-beach-march-3rd' element={<SocialSecuritySeminarNewportBeachMarch3rd />} />
            <Route path='anaheim-march-24th' element={<SocialSecuritySeminarAnaheimMarch24th />} />
            <Route path='rancho-cucamonga-may-5th' element={<SocialSecuritySeminarRanchoCucamongaMay5th />} />
            <Route path='victorville-june-2nd' element={<SocialSecuritySeminarVictorvilleJune2nd />} />
            <Route path='aliso-viejo-june-23rd' element={< SocialSecuritySeminarAlisoViejoJune23rd />} />
            <Route path=':location/thank-you' element={<ThankYou />} />
          </Route>
          <Route path='retirement-income/seminar' element={<SocialSecurity />} >
            <Route path='rancho-cucamonga-may-5th' element={<RetirementIncomeTaxesInflationRanchoCucamongaMay5th />} />
            <Route path=':location/thank-you' element={<ThankYou />} />
          </Route>
          <Route path='retirement' element={<Retirement />} >
            <Route path='checkup' element={<Checkup />} />
            <Route path='checkup-video-lander' element={<CheckupVideoLander />} />
          </Route>
          <Route path='social-security/webinar' element={<SocialSecurityWebinar />}></Route>
          <Route path='privacy-policy' element={<PrivacyPolicy />} ></Route>
        </Route>
      </Routes>
    </>
  )
}

export default App;
