import { CgNotes } from 'react-icons/cg';
import { FaBlogger, FaRegUser, FaAward } from 'react-icons/fa';
import { FiCodesandbox } from 'react-icons/fi';
import { RiContactsBookLine } from 'react-icons/ri';

//  icon use as img here
import icon from '../assets/images/icons/icon-1.svg';
import icon1 from '../assets/images/icons/icon-2.svg';
import icon2 from '../assets/images/icons/icon-3.svg';
import icon3 from '../assets/images/icons/icon-4.svg';
import icon4 from '../assets/images/icons/icon-5.svg';
import icon5 from '../assets/images/icons/icon-6.svg';

// Menu items for Homepage Two
export const menuItems = [
  {
    id: '01',
    name: 'About',
    link: '/',
    icon: <FaRegUser />,
  },
  {
    id: '02',
    name: 'Resume',
    link: '/resume',
    icon: <CgNotes />,
  },
  {
    id: '03',
    name: 'Works',
    link: '/homeTwo/works',
    icon: <FiCodesandbox />,
  },
  {
    id: '04',
    name: 'Blogs',
    link: '/homeTwo/blogs',
    icon: <FaBlogger />,
  },
  {
    id: '05',
    name: 'Contact',
    link: '/homeTwo/contact',
    icon: <RiContactsBookLine />,
  },
];

export const experienceArray = [
  {
    id: '1',
    icon: icon,
    title: 'Ui/Ux Design',
    des: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.',
    color: '#D566FF',
    bg: '#FCF4FF',
  },
  {
    id: '2',
    icon: icon1,
    title: 'App Development',
    des: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.',
    color: '#DDA10C',
    bg: '#FEFAF0',
  },
  {
    id: '3',
    icon: icon2,
    title: 'Photography',
    des: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.',
    color: '#8774FF',
    bg: '#FCF4FF',
  },
  {
    id: '4',
    icon: icon3,
    title: 'Photography',
    des: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.',
    color: '#FF6080',
    bg: '#FFF4F4',
  },
  {
    id: '5',
    icon: icon4,
    title: 'Managment',
    des: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.',
    color: '#FF75D8',
    bg: '#FFF0F8',
  },
  {
    id: '6',
    icon: icon5,
    title: 'Web Development',
    des: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.',
    color: '#269FFF',
    bg: '#F3FAFF',
  },
];
