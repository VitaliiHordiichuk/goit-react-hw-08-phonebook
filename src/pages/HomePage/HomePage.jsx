import { getIsLoggedIn } from '../../redux/auth/auth-selectors';
import { useSelector } from 'react-redux';
import ContactPage from '../ContactPages/ContactPage';
import LoginPage from 'pages/LoginPage/LoginPage';

const HomePage = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return <>{isLoggedIn ? <ContactPage /> : <LoginPage />}</>;
};

export default HomePage;
