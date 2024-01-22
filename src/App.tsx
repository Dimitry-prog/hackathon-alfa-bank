import { Route, Routes } from 'react-router-dom';
import HomePage from '@/pages/home';
import Layout from '@/components/shared/layout';
import LoginPage from '@/pages/login';
import RequiredAuth from '@/features/user/components/required-auth';

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route element={<RequiredAuth />}>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
