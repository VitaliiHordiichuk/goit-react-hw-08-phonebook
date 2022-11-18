import { Route, Routes } from 'react-router-dom';
import { useEffect, lazy, Suspense } from 'react';
import Navigation from './pages/AppBar/Navigation/Navigation';
import { useDispatch, useSelector } from 'react-redux';
import { refreshUser } from 'redux/auth/auth-operations';
import { tokenSelector, isRefreshing } from './redux/auth/auth-selectors';
import { PrivateRoute } from 'pages/PrivateRoute';
import { PublicRoute } from 'pages/RestrictedRoute';
import { ChakraProvider, Box, theme } from '@chakra-ui/react';
const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const LoginPage = lazy(() => import('./pages/LoginPage/LoginPage'));
const RegisterPage = lazy(() => import('./pages/RegisterPage/RegisterPage'));
const ContactPage = lazy(() => import('./pages/ContactPages/ContactPage'));

const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(isRefreshing);

  const token = useSelector(tokenSelector);
  useEffect(() => {
    token && dispatch(refreshUser);
  }, [dispatch, token]);

  return (
    !isLoading && (
      <>
        <ChakraProvider theme={theme}>
          <Box maxW="960px" mx="auto">
            <Navigation />
            <Suspense fallback={<div>Loading...</div>}>
              <Routes>
                <Route
                  path="/"
                  index
                  element={
                    <PublicRoute restricted>
                      <HomePage />
                    </PublicRoute>
                  }
                />
                <Route
                  path="login"
                  index
                  element={
                    <PublicRoute restricted>
                      <LoginPage />
                    </PublicRoute>
                  }
                />
                <Route
                  path="register"
                  index
                  element={
                    <PublicRoute restricted>
                      <RegisterPage />
                    </PublicRoute>
                  }
                />
                <Route
                  path="/contacts"
                  element={
                    <PrivateRoute>
                      <ContactPage />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="*"
                  element={
                    <PrivateRoute>
                      <HomePage />
                    </PrivateRoute>
                  }
                />
              </Routes>
            </Suspense>
          </Box>
        </ChakraProvider>
      </>
    )
  );
};

export default App;
