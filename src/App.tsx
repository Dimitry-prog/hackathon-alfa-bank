import { Route, Routes } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './App.module.scss';
import HomePage from '@/pages/home';

const cx = classNames.bind(styles);

function App() {
  return (
    <>
      <main className={cx('main')}>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
