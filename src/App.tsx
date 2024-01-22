import { Route, Routes } from 'react-router-dom';
import HomePage from '@/pages/home';
import Layout from '@/components/shared/layout';
import TeamDevelopmentPlansPage from './pages/TeamDevelopmentPlansPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
      </Route>
      <Route path="/team-development-plans" element={<Layout />}>
        <Route index element={<TeamDevelopmentPlansPage />} />
      </Route>
    </Routes>
  );
}

export default App;
