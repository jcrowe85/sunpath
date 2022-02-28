import { Route, Routes } from 'react-router-dom';

//Page imports
import Layout from './components/UI/Layout/Layout';
import Home from './pages/Home/Home';
import SocialSecurity from './pages/SocialSecurity';
import SocialSecuritySeminarNewportBeachMarch3rd from './pages/SocialSecurity/Seminar/SocialSecuritySeminarNewportBeachMarch3rd';
import SocialSecuritySeminarAnaheimMarch24th from './pages/SocialSecurity/Seminar/SocialSecuritySeminarAnaheimMarch24th';
import SocialSecuritySeminarRanchoCucamongaApril21st from './pages/SocialSecurity/Seminar/SocialSecuritySeminarRanchoCucamongaApril21st';
import RetirementIncomeTaxesInflationNewportBeachMay12th from './pages/RetirementIncome/Seminar/RetirementIncomeTaxesInflationNewportBeachMay12th';
import SocialSecuritySeminarVictorvilleJune2nd from './pages/SocialSecurity/Seminar/SocialSecuritySeminarVictorvilleJune2nd';
import SocialSecuritySeminarAlisoViejoJune23rd from './pages/SocialSecurity/Seminar/SocialSecuritySeminarAlisoViejoJune23rd';

import ThankYou from './pages/SocialSecurity/ThankYou/ThankYou';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='social-security/seminar' element={<SocialSecurity />} >
          <Route path='newport-beach-march-3rd' element={<SocialSecuritySeminarNewportBeachMarch3rd />} />
          <Route path='anaheim-march-24th' element={<SocialSecuritySeminarAnaheimMarch24th />} />
          <Route path='rancho-cucamonga-april-21st' element={<SocialSecuritySeminarRanchoCucamongaApril21st />} />
          <Route path='victorville-june-2nd' element={<SocialSecuritySeminarVictorvilleJune2nd />} />
          <Route path='aliso-viejo-june-23rd' element={<SocialSecuritySeminarAlisoViejoJune23rd />} />
          <Route path=':location/thank-you' element={<ThankYou />} />
        </Route>
        <Route path='retirement-income/seminar' element={<SocialSecurity />} >
          <Route path='newport-beach-may-12th' element={<RetirementIncomeTaxesInflationNewportBeachMay12th />} />
          <Route path=':location/thank-you' element={<ThankYou />} />
        </Route>
      </Route>
    </Routes>
  )
}

export default App;
