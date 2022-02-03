import { Route, Routes } from 'react-router-dom';

//Page imports
import Layout from './pages/Layout/Layout';
import Home from './pages/Home/Home';
import SocialSecuritySeminar from './pages/SocialSecuritySeminar/SocialSecuritySeminar';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='social-security-seminar' element={<SocialSecuritySeminar />} />
      </Route>
    </Routes>

  )
}

export default App;
