import classNames from 'classnames/bind';
import styles from './styles.module.scss';
import Button from '@/components/ui/button';
import useUserInfo from '@/features/user/hooks/use-user-info.tsx';
import UserInfo from '@/components/shared/user-info';
import TasksTable from '@/features/user/components/tasks-table';
import Select from '@/components/ui/select';

const cx = classNames.bind(styles);

const EmployeeHome = () => {
  const { userTask } = useUserInfo();

  return (
    <section className={cx('wrapper')}>
      <h2>Мой индивидуальный план развития</h2>

      {/*<Select*/}
      {/*  options={[*/}
      {/*    { id: '1', value: 'chief' },*/}
      {/*    { id: '2', value: 'employee' },*/}
      {/*    { id: '3', value: 'worker' },*/}
      {/*    { id: '4', value: 'boss' },*/}
      {/*  ]}*/}
      {/*  label="Роль"*/}
      {/*  placeholder="Выберите роль"*/}
      {/*  // onChange={field.onChange}*/}
      {/*  error="hello"*/}
      {/*/>*/}

      <Select
        options={[
          { id: '1', value: 'chief' },
          { id: '2', value: 'employee' },
          { id: '3', value: 'worker' },
          { id: '4', value: 'boss' },
          { id: '5', value: 'workeyor' },
          { id: '6', value: 'wor123' },
          { id: '7', value: 'rhtru68679699999999999' },
          { id: '8', value: 'fdhfghfgj 8678967976 7967967978087' },
        ]}
        label="Роль"
        placeholder="Выберите роль"
        isMulti
        isSearch
      />

      {userTask ? (
        <>
          <div className={cx('content')}>
            <UserInfo />
            <TasksTable />
          </div>
        </>
      ) : (
        <p className={cx('text')}>План развития еще не создан. Подайте заявку</p>
      )}

      <Button variant="accent" className={cx('button')} href="request-task">
        Подать заявку
      </Button>
    </section>
  );
};

export default EmployeeHome;
