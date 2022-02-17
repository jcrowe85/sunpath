import { Route, Routes } from 'react-router-dom';

//Page imports
import Layout from './pages/Layout/Layout';
import Home from './pages/Home/Home';
import SocialSecurity from './pages/SocialSecurity/SocialSecurity';
import ThankYou from './pages/ThankYou/ThankYou';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='social-security' element={<SocialSecurity />} > 
          <Route path='thank-you' element={<ThankYou />} />
        </Route>
      </Route>
    </Routes>
  )
}

export default App;
