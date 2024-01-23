import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from '@/components/shared/layout';
import LoginPage from '@/pages/login';
import RequiredAuth from '@/features/user/components/required-auth';
import useUserInfo from '@/features/user/hooks/use-user-info.tsx';

function App() {
  const { token } = useUserInfo();

  return (
    <Routes>
      <Route path="/login" element={token ? <Navigate to="/" replace /> : <LoginPage />} />
      <Route element={<RequiredAuth />}>
        <Route path="/" element={<Layout />}>

        </Route>
      </Route>
    </Routes>
  );
}

export default App;
