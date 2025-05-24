import { ROUTES } from '../../../Shared/Constant/constant';

const options = [
  {
    path: ROUTES.HOMEPAGE,
    imgSrc: '/images/img_category.svg',
    title: 'Home',
    alt: 'Home',
  },
  {
    path: ROUTES.MESSAGES,
    imgSrc: '/images/img_message.svg',
    title: 'Messages',
    alt: 'Messages',
  },
  {
    path: ROUTES.TASKS,
    imgSrc: '/images/img_tasksquare.svg',
    title: 'Tasks',
    alt: 'Tasks',
  },
  {
    path: ROUTES.MEMBERS,
    imgSrc: '/images/img_profile2user_gray_600.svg',
    title: 'Members',
    alt: 'Members',
  },
  {
    path: ROUTES.SETTINGS,
    imgSrc: '/images/img_setting2.svg',
    title: 'Settings',
    alt: 'Settings',
  },
];
export interface Project {
  id: string;
  name: string;
  color: string;
}
 const projects: Project[] = [
    { id: '1', name: 'Mobile App', color: 'bg-red-500' },
    { id: '2', name: 'Website Redesign', color: 'bg-green-500' },
    { id: '3', name: 'Design System', color: 'bg-pink-500' },
    { id: '4', name: 'Wireframes', color: 'bg-blue-500' },
  ];
export { options , projects };
