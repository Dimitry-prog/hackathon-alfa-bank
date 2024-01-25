import telegram from '/icons/telegram.svg';
import vk from '/icons/vk.svg';

export const roles = ['chief', 'single-employee'];

export const sidebarMenuLinks = [
  {
    role: 'chief',
    links: [
      {
        id: '1',
        label: 'Мой план развития',
        href: '/my-plan',
        imgSrc: 'icons/my-dev.svg',
      },
      {
        id: '2',
        label: 'Планы развития команды',
        href: '/',
        imgSrc: 'icons/komands-dev.svg',
      },
      {
        id: '3',
        label: 'Информация о развитии',
        href: '/info',
        imgSrc: 'icons/info-dev.svg',
      },
    ],
  },
  {
    role: 'employee',
    links: [
      {
        id: '1',
        label: 'Мой план развития',
        href: '/',
        imgSrc: 'icons/my-dev.svg',
      },
      {
        id: '2',
        label: 'Информация о развитии',
        href: '/info',
        imgSrc: 'icons/info-dev.svg',
      },
    ],
  },
];

export const alfaSidebarMenuLinks = [
  {
    id: '1',
    label: 'Личные данные',
    href: '/personal-data',
    imgSrc: 'icons/personal-data.svg',
  },
  {
    id: '2',
    label: 'Мой доход',
    href: '/my-income',
    imgSrc: 'icons/my-income.svg',
  },
  {
    id: '3',
    label: 'Моя команда',
    href: '/my-team',
    imgSrc: 'icons/my-team.svg',
  },
  {
    id: '4',
    label: 'ИПР',
    href: '/pdp',
    imgSrc: 'icons/pdp.svg',
  },
  {
    id: '5',
    label: 'Отпуск',
    href: '/vacation',
    imgSrc: 'icons/vacation.svg',
  },
  {
    id: '6',
    label: 'Базы знаний',
    href: '/knowledge-bases',
    imgSrc: 'icons/knowledge-bases.svg',
  },
  {
    id: '7',
    label: 'IT-услуги',
    href: '/it-services',
    imgSrc: 'icons/it-services.svg',
  },
];

export const footerLinks = [
  {
    id: '1',
    label: 'Главная',
    href: '/',
  },
  {
    id: '2',
    label: 'Сервисы',
    href: '/services',
  },
  {
    id: '3',
    label: 'Контакты',
    href: '/сontacts',
  },
  {
    id: '4',
    label: 'Подразделения',
    href: '/divisions',
  },
  {
    id: '5',
    label: 'Все о работе',
    href: '/all-about-work',
  },
  {
    id: '6',
    label: 'Академия',
    href: '/academy',
  },
  {
    id: '7',
    label: 'SAP АХД',
    href: '/sap_ahd',
  },
  {
    id: '8',
    label: 'Заказ HR-услуг',
    href: '/ordering-hr-services',
  },
  {
    id: '9',
    label: 'Заказ IT-услуг',
    href: '/ordering-it-services',
  },
  {
    id: '10',
    label: 'WSS Docs',
    href: '/wss-docs',
  },
  {
    id: '11',
    label: 'Карьера в банке',
    href: '/banking-career',
  },
  {
    id: '12',
    label: 'Сайт Альфа Банка',
    href: 'https://alfabank.ru/',
  },
];

export const socialLinks = [
  {
    id: '1',
    label: 'Телеграм',
    href: 'https://t.me/AlfaBank',
    src: telegram,
  },
  {
    id: '2',
    label: 'В контакте',
    href: 'https://vk.com/alfabank',
    src: vk,
  },
];

export const headerLinks = [
  {
    id: '1',
    label: 'Контакты',
    href: '/contacts',
  },
  {
    id: '2',
    label: 'Всё о работе',
    href: '/all-about-work',
  },
  {
    id: '3',
    label: 'Подразделения',
    href: '/divisions',
  },
];

export const faqsMock = [
  {
    id: '1',
    question: 'Где указать в задаче  ссылку на образовательный курс?',
    answer: 'Как правильно описать задачу развития?',
  },
  {
    id: '2',
    question: 'Как правильно описать задачу развития?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam consequuntur cum fuga natus obcaecati reprehenderit.',
  },
  {
    id: '3',
    question: 'Что писать в поле навыки развития?',
    answer: '',
  },
  {
    id: '4',
    question: 'Сколько заявок на ИПР я могу оставить?',
    answer: '',
  },
  {
    id: '5',
    question: 'Можно ли удалить или исправить заявку на ИПР?',
    answer: '',
  },
  {
    id: '6',
    question: 'Что делать , если я составил заявку на ИПР не правильно? ',
    answer: '',
  },
  {
    id: '7',
    question: 'Что делать , если я составил заявку на ИПР не правильно? ',
    answer: '',
  },
  {
    id: '8',
    question: 'Как показать , что задача выполнена?',
    answer: '',
  },
  {
    id: '9',
    question: 'Как показать , что задача выполнена?',
    answer: '',
  },
  {
    id: '10',
    question: 'Как я могу спросить руководителя о задаче?',
    answer: '',
  },
  {
    id: '11',
    question: 'Как часто я могу отправлять заявки на ИПР?',
    answer: '',
  },
  {
    id: '12',
    question: 'Что делать , если руководитель не связался со мной по моей заявке на ИПР?',
    answer: '',
  },
  {
    id: '13',
    question: 'Что происходит после отправки заявки на ИПР?',
    answer: '',
  },
  {
    id: '14',
    question: 'Как происходит процесс составления плана развития и в чем его суть?',
    answer: '',
  },
  {
    id: '15',
    question: 'Как часто руководитель может ставить задачи в рамках ИПР?',
    answer: '',
  },
  {
    id: '16',
    question: 'Когда и кто меняет задачу и что с этим делать?',
    answer: '',
  },
  {
    id: '17',
    question: 'Что означают статусы ИПР?',
    answer: '',
  },
  {
    id: '18',
    question: 'Какие типы задач бывают и что они означают?',
    answer: '',
  },
  {
    id: '19',
    question: 'Все ли поля я должен заполнить в заявке на ИПР?',
    answer: '',
  },
  {
    id: '20',
    question: 'Какие поля должен заполнить руководитель в задаче?',
    answer: '',
  },
  {
    id: '21',
    question: 'Как руководитель видит, что я оставил заявку?',
    answer: '',
  },
  {
    id: '22',
    question: 'Как мне описать несколько задач в водной заявке на ИПР?',
    answer: '',
  },
  {
    id: '23',
    question: 'Что писать в комментарии к задаче?',
    answer: '',
  },
  {
    id: '24',
    question: 'Что руководитель может менять в задаче?',
    answer: '',
  },
  {
    id: '25',
    question: 'Что сотрудник может менять в задаче? ',
    answer: '',
  },
];

export const devInfoCards = [
  {
    id: '1',
    label: 'План развития сотрудника',
    text: 'Важность ИПР для карьерного и финансового роста',
    href: '/employee_development_plan',
    src: '/images/notepad.svg',
  },
  {
    id: '2',
    label: 'Цифровой профиль',
    text: 'Заполните профиль и получите новый оффер',
    href: '/digital_profile',
    src: '/images/fugure.svg',
  },
];

export const devDirectionMock = [
  {
    id: '1',
    label: 'Система грейдов',
    src: '/images/direction_1.svg',
  },
  {
    id: '2',
    label: 'Горизонтальное развитие',
    src: '/images/direction_2.svg',
  },
  {
    id: '3',
    label: 'Перспективные направления',
    src: '/images/direction_3.svg',
  },
];

export const tasks = [
  {
    id: '1',
    pdp_id: 1,
    description: 'Английский язык. Upper-Intermediate level',
    start_date: '01.01.24',
    deadline: '21.01.24',
    skills: 'Внешний курс',
    status: 'Исполнена',
  },
  {
    id: '2',
    pdp_id: 2,
    description: 'Курсы Scrum-мастерcтва',
    start_date: '01.01.24',
    deadline: '21.01.24',
    skills: 'Внешний курс',
    status: 'В работе',
  },
  {
    id: '3',
    pdp_id: 3,
    description: 'Бизнес-аналитика',
    start_date: '01.01.24',
    deadline: '21.01.24',
    skills: 'Менторство',
    status: 'Отменена',
  },
  {
    id: '4',
    pdp_id: 4,
    description: 'Работа в Jira',
    start_date: '01.01.24',
    deadline: '21.01.24',
    skills: 'Внутренний курс',
    status: 'Заявка',
  },
];

export const card = [
  {
    id: '1',
    imgSrc: '/icons/my-plan.svg',
    title: 'Свой план развития',
    about: 'Чек-лист для начала карьерного роста',
  },
  {
    id: '2',
    imgSrc: '/icons/plan-single-employee.svg',
    title: 'План развития сотрудника',
    about: 'Как составить стратегию для команды',
  },
  {
    id: '3',
    imgSrc: '/icons/potential-tests.svg',
    title: 'Тесты раскрытия потенциала',
    about: 'Открой свои возможности для роста',
  },
  {
    id: '4',
    imgSrc: '/icons/successful-cases.svg',
    title: 'Успешные кейсы',
    about: 'Эффективные программы от опытных коллег',
  },
];

export const employeeList = [
  {
    id: '1',
    imgSrc: '/images/foto-employee.png',
    name: 'Константинов-Полонский-Георгиевский Владимир Владиславович',
    position: 'Frontend-разработчик',
    icon: '/icons/no-pdp.svg',
    status: 'нет ИПР',
    data: 'нет',
  },
];

export const typesTaskMock = [
  {
    id: '1',
    value: 'Самостоятельное обучение',
  },
  {
    id: '2',
    value: 'Внутренний курс',
  },
  {
    id: '3',
    value: 'Внешний курс',
  },
  {
    id: '4',
    value: 'Наставничество',
  },
  {
    id: '5',
    value: 'Менторство',
  },
];

export const statusTaskMock = [
  {
    id: '1',
    value: 'Заявка',
  },
  {
    id: '2',
    value: 'В работе',
  },
  {
    id: '3',
    value: 'Исполнена',
  },
  {
    id: '4',
    value: 'Отменена',
  },
  {
    id: '5',
    value: 'Хорошо',
  },
];

export const loginFooterLinks = [
  {
    id: '1',
    href: '/login/help',
    label: 'Help Desk',
  },
  {
    id: '2',
    href: '/login/help',
    label: 'Мобильное приложение',
  },
];
