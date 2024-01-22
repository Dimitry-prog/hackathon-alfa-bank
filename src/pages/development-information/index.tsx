import classNames from 'classnames/bind';
import styles from './styles.module.scss';
import DevInfo from '@/components/shared/dev-info';
import DirectionOfDevelopment from '@/components/shared/direction-of-development';
import RecommendationPdp from '@/components/shared/recommendation-pdp';
import Video from '@/components/shared/video';
import Faq from '@/components/shared/faq';

const cx = classNames.bind(styles);

const DevelopmentInfoPage = () => {
  return (
    <div className={cx('wrapper')}>
      <h2>Информация о развитии</h2>

      <div className={cx('content')}>
        <DevInfo />
        <DirectionOfDevelopment />
        <RecommendationPdp />
        <Video />
        <Faq />
      </div>
    </div>
  );
};

export default DevelopmentInfoPage;
