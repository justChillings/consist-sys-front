import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignIn from './pages/sign-in.jsx';
import SignUp from './pages/sign-up.jsx';
import CompleteSignUp from './pages/complete-sign-up.jsx';
import FindPassword from './pages/find-password.jsx';
import CompleteFindPassword from './pages/complete-find-password.jsx';
import MainPage from './pages/main-page.jsx';
import Terms from './pages/terms.jsx';
import MyPage from './pages/my-page.jsx';
import MyMarket from './pages/my-market.jsx';
import RegisterMarket from './pages/register-market.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MyMarket />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/complete-sign-up" element={<CompleteSignUp />} />
        <Route path="/find-password" element={<FindPassword />} />
        <Route path="/complete-find-password" element={<CompleteFindPassword />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/my-page" element={<MyPage />} />
        <Route path="/my-market" element={<MyMarket />} />
        <Route path="/register-market" element={<RegisterMarket />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
