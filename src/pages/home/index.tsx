import classNames from 'classnames/bind';
import styles from './styles.module.scss';
import RecommendationPdp from '@/components/shared/recommendation-pdp';

const cx = classNames.bind(styles);

const HomePage = () => {
  return (
    <>
      <h2>HomePage</h2>
      <RecommendationPdp />
    </>
  );
};

export default HomePage;
