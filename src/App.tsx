import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from '@/components/shared/layout';
import HomePage from '@/pages/home';
import useUserInfo from '@/features/user/hooks/use-user-info.tsx';
import InfoPage from '@/pages/info';
import RequestTaskPage from '@/pages/request-task';
import SingleEmployeePage from '@/pages/single-employee';
import CreateTaskForEmployeePage from '@/pages/create-task-for-employee';
import EditTaskForEmployeePage from '@/pages/edit-task-for-employee';
import LoginPage from '@/pages/login';
import RequiredAuth from '@/features/auth/components/required-auth';
import ChiefHome from '@/features/user/components/chief-home';
import TemplatePage from './pages/template-page';

function App() {
  const { token } = useUserInfo();

  return (
    <Routes>
      <Route path="/login" element={token ? <Navigate to="/" replace /> : <LoginPage />} />
      <Route element={<RequiredAuth />}>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="info" element={<InfoPage />} />
          <Route path="request-task" element={<RequestTaskPage />} />
          <Route path="template" element={<TemplatePage />} />

          <Route path="employees">
            <Route index element={<ChiefHome />} />
            <Route path=":employeeId" element={<SingleEmployeePage />} />
            <Route path=":employeeId/edit" element={<EditTaskForEmployeePage />} />
            <Route path=":employeeId/create" element={<CreateTaskForEmployeePage />} />
          </Route>
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
