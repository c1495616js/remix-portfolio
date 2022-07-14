import { CgNotes } from 'react-icons/cg';
import { FaBlogger, FaRegUser, FaAward } from 'react-icons/fa';
import { FiCodesandbox } from 'react-icons/fi';
import { RiContactsBookLine } from 'react-icons/ri';

// Menu items for Homepage Two
export const menuItems = [
  {
    id: '01',
    name: 'About',
    link: '/homeTwo/about',
    icon: <FaRegUser />,
  },
  {
    id: '02',
    name: 'Resume',
    link: '/homeTwo/resume',
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
