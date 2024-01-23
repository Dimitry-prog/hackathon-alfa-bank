import { Route, Routes } from 'react-router-dom';
import HomePage from '@/pages/home';
import Layout from '@/components/shared/layout';
import TeamDevelopmentPlans from './pages/team-development-plans';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="team-development-plans" element={<TeamDevelopmentPlans />} />
      </Route>
    </Routes>
  );
}

export default App;
