import classNames from 'classnames/bind';
import styles from './styles.module.scss';

const cx = classNames.bind(styles);

const CreateTemplate = () => {
  return <div className={cx('wrapper')}>CreateTemplate</div>;
};

export default CreateTemplate;
