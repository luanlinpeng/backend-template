import { Navigate, RouteObject } from 'react-router';
import PageLayout from './components/PageLayout';
import Login from './pages/Login';
import { PageRoutes } from './shared/conf/PageRoutes';
import { NoPageFound } from './shared/NoPageFound';
import ExamRoomManagement from './pages/ExamRoomManagement';
import AchievementManagement from './pages/AchievementManagement';
import ExamineeManagement from './pages/ExamineeManagement';
import ExamManagement from './pages/ExamManagement';
import InfoReview from './pages/InfoReview';
import SystemUser from './pages/SystemUser';
import SetUp from './pages/SetUp';
import ZoneManagement from './pages/ZoneManagement';
import TeacherRegisterDetail from './pages/TeacherRegisterDetail';
import AddExam from './pages/AddExam';
import EditExam from './pages/EditExam';

export const Routes: RouteObject[] = [
  {
    path: '/',
    element: (
      <PageLayout></PageLayout>
    ),
    children: [
      {
        path: PageRoutes.ROOT,
        element: <Navigate to={PageRoutes.ZONEMANAGE} replace />,
      },
      {
        path: PageRoutes.ZONEMANAGE,
        element: <ZoneManagement />,
      },
      {
        path: PageRoutes.EXAMZOOMMANAGE,
        element: <ExamRoomManagement />,
      },
      {
        path: PageRoutes.ACHIEVEMANAGE,
        element: <AchievementManagement />,
      },
      {
        path: PageRoutes.EXAMINEEMANAGE,
        element: <ExamineeManagement />,
      },
      {
        path: PageRoutes.EXAMMANGE,
        element: <ExamManagement />,
      },
      {
        path: `${PageRoutes.EXAMMANGE}/addExam`,
        element: <AddExam />,
      },
      {
        path: PageRoutes.INFOREVIEW,
        element: <InfoReview />,
      },
      {
        path: `${PageRoutes.INFOREVIEW}/detail`,
        element: <TeacherRegisterDetail />,
      },
      {
        path: PageRoutes.SYSTEMUSER,
        element: <SystemUser />,
      },
      {
        path: PageRoutes.SETUP,
        element: <SetUp />,
      },
      {
        path: '*',
        element: <NoPageFound />,
      },
    ],
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/editExam',
    element: <EditExam />
  }
];
