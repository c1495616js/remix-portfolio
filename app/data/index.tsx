import { CgNotes } from 'react-icons/cg';
import { FaBlogger, FaRegUser, FaAward } from 'react-icons/fa';
import { FiCodesandbox } from 'react-icons/fi';
import { RiContactsBookLine } from 'react-icons/ri';
import { MdOutlineBusinessCenter, MdOutlineSchool } from 'react-icons/md';

//  icon use as img here
import icon from '../assets/images/icons/icon-1.svg';
import icon1 from '../assets/images/icons/icon-2.svg';
import icon2 from '../assets/images/icons/icon-3.svg';
import icon3 from '../assets/images/icons/icon-4.svg';
import icon4 from '../assets/images/icons/icon-5.svg';
import icon5 from '../assets/images/icons/icon-6.svg';

// blog post images
import blog6 from '../assets/images/blog_images/6.jpg';
import blog4 from '../assets/images/blog_images/4.jpg';
import blog2 from '../assets/images/blog_images/2.jpg';
import blog1 from '../assets/images/blog_images/1.jpg';
import blog3 from '../assets/images/blog_images/3.jpg';
import blog5 from '../assets/images/blog_images/5.jpg';
// blog image small
import blogSmall6 from '../assets/images/blog_images/small/6.jpg';
import blogSmall4 from '../assets/images/blog_images/small/4.jpg';
import blogSmall2 from '../assets/images/blog_images/small/2.jpg';
import blogSmall1 from '../assets/images/blog_images/small/1.jpg';
import blogSmall3 from '../assets/images/blog_images/small/3.jpg';
import blogSmall5 from '../assets/images/blog_images/small/5.jpg';

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
    link: '/works',
    icon: <FiCodesandbox />,
  },
  {
    id: '04',
    name: 'Blog',
    link: '/blog',
    icon: <FaBlogger />,
  },
];

export const experienceArray = [
  // {
  //   id: '1',
  //   icon: icon,
  //   title: 'Ui/Ux Design',
  //   des: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.',
  //   color: '#D566FF',
  //   bg: '#FCF4FF',
  // },
  // {
  //   id: '2',
  //   icon: icon1,
  //   title: 'App Development',
  //   des: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.',
  //   color: '#DDA10C',
  //   bg: '#FEFAF0',
  // },
  // {
  //   id: '3',
  //   icon: icon2,
  //   title: 'Photography',
  //   des: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.',
  //   color: '#8774FF',
  //   bg: '#FCF4FF',
  // },
  {
    id: '4',
    icon: icon3,
    title: 'Photography',
    des: 'I have a Canon EOS RP camera, shooting pictures in my leisure time.',
    color: '#FF6080',
    bg: '#FFF4F4',
  },
  // {
  //   id: '5',
  //   icon: icon4,
  //   title: 'Managment',
  //   des: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.',
  //   color: '#FF75D8',
  //   bg: '#FFF0F8',
  // },
  {
    id: '6',
    icon: icon5,
    title: 'Web Development',
    des: 'I am passionate about frontend development, React and Typescript.',
    color: '#269FFF',
    bg: '#F3FAFF',
  },
];

export const blogsData = [
  {
    id: '1',
    img: blog1,
    imgSmall: blogSmall1,
    date: '177 April',
    category: 'Inspiration',
    title: 'How to Own Your Audience by Creating an Email List.',
    bg: '#FCF4FF',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum conseqr quo obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur quo obcaecati rerum sit non. \n Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consetur quo obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur. \n Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur quo obcaecati rerum sit non. ',
  },
  {
    id: '4',
    img: blog4,
    imgSmall: blogSmall4,
    date: '000 April',
    category: 'Inspiration',
    title: 'Everything You Need to Know About Web Accessibility.',
    bg: '#EEFBFF',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum conseqr quo obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur quo obcaecati rerum sit non. \n Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consetur quo obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur. \n Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur quo obcaecati rerum sit non. ',
  },
  {
    id: '2',
    img: blog2,
    imgSmall: blogSmall2,
    date: '21 April',
    category: 'Web Design',
    title: 'The window know to say beside you',
    bg: '#FFF0F0',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum conseqr quo obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur quo obcaecati rerum sit non. \n Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consetur quo obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur. \n Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur quo obcaecati rerum sit non. ',
  },
  {
    id: '5',
    img: blog5,
    imgSmall: blogSmall5,
    date: '27 April',
    category: 'Inspiration',
    title: 'Top 10 Toolkits for Deep Learning in 2021.',
    bg: '#FCF4FF',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum conseqr quo obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur quo obcaecati rerum sit non. \n Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consetur quo obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur. \n Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur quo obcaecati rerum sit non. ',
  },
  {
    id: '3',
    img: blog3,
    imgSmall: blogSmall3,
    date: '27 April',
    category: 'Inspiration',
    title: 'How to Own Your Audience by Creating an Email List.',
    bg: '#FCF4FF',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum conseqr quo obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur quo obcaecati rerum sit non. \n Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consetur quo obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur. \n Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur quo obcaecati rerum sit non. ',
  },
  {
    id: '6',
    img: blog6,
    imgSmall: blogSmall6,
    date: '27 April',
    category: 'Inspiration',
    title: 'Everything You Need to Know About Web Accessibility.',
    bg: '#EEFBFF',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum conseqr quo obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur quo obcaecati rerum sit non. \n Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consetur quo obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur. \n Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur quo obcaecati rerum sit non. ',
  },
];

// Resume items for Resume page
export const resumeArray = [
  {
    type: 'Experience',
    icon: MdOutlineBusinessCenter,
    data: [
      {
        id: '04',
        date: '2021-Now',
        title: 'Frontend Developer',
        place: 'VitaminLab, Victoria, BC',
        bg: '#EEF5FA',
      },
      {
        id: '05',
        date: '2019-2021',
        title: 'Full Stack Developer',
        place: 'Freshworks Studio, Victoria, BC',
        bg: '#F2F4FF',
      },
    ],
  },
  {
    type: 'Education',
    icon: MdOutlineSchool,
    data: [
      {
        id: '01',
        date: '2010-2013',
        title: 'Master in Mathematics',
        place: 'National Taiwan University, Taiwan',
        bg: '#FFF4F4',
      },
    ],
  },
];

// Working Skills items for Resume page
export const lineArray = [
  {
    id: '01',
    color: '#FF6464',
    name: 'Web Design',
    number: '80',
  },
  {
    id: '02',
    color: '#9272D4',
    name: 'Mobile App ',
    number: '95',
  },
  {
    id: '03',
    color: '#5185D4',
    name: 'Illustrator',
    number: '65',
  },
  {
    id: '03',
    color: '#CA56F2',
    name: 'Photoshope',
    number: '75',
  },
];
