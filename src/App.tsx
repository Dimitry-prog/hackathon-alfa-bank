import { Route, Routes } from 'react-router-dom';
import HomePage from '@/pages/home';
import Layout from '@/components/shared/layout';
import DevelopmentInfoPage from '@/pages/development-information';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="development-information" element={<DevelopmentInfoPage />} />
      </Route>
    </Routes>
  );
}

export default App;
