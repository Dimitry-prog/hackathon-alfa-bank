import { Route, Routes } from 'react-router-dom';
import HomePage from '@/pages/home';
import Layout from '@/components/shared/layout';
import IndividualDevelopmentPlan from './pages/individual-development-plan';
import NewTask from './pages/new-task';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/individual_development_plan" element={<IndividualDevelopmentPlan />} />
        <Route path="/create_task" element={<NewTask />} />
      </Route>
    </Routes>
  );
}

export default App;
