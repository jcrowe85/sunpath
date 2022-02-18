import { Route, Routes } from 'react-router-dom';

//Page imports
import Layout from './components/UI/Layout/Layout';
import Home from './pages/Home/Home';
import SocialSecurity from './pages/SocialSecurity';
import SocialSecuritySeminar from './pages/SocialSecurity/Seminar/Seminar';
import ThankYou from './pages/SocialSecurity/ThankYou/ThankYou';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='social-security/seminar' element={<SocialSecurity />} >
          <Route index element={<SocialSecuritySeminar />} />
          <Route path='thank-you' element={<ThankYou />} />
        </Route>
      </Route>
    </Routes>
  )
}

export default App;
