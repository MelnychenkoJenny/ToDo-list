// import { Container } from './App.styled';

import { AppBar } from 'components/AppBar';
import { Layout } from 'components/Layout';
import { TaskForm } from 'components/TaskForm/TaskForm';
import { TaskList } from 'components/TaskList/TaskList';

export const App = () => {
  return (
    <Layout>
      <AppBar />
      <TaskForm />
      <TaskList />
    </Layout>
  );
};
