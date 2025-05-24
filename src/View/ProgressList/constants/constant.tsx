import { Column } from "../ProgressList";
const columns: Column[] = [
    {
      id: 'todo',
      title: 'To Do',
      color: '#5030e5',
      count: 4,
      tasks: [
        {
          id: 't1',
          title: 'Brainstorming',
          description: "Brainstorming brings team members' diverse experience into play.",
          priority: 'Low',
          comments: 9,
          files: 10,
          assignees: [
            '/images/img_ellipse_12.png',
            '/images/img_ellipse_13.png',
            '/images/img_ellipse_15.png'
          ],
          images:[]
        },
        {
          id: 't2',
          title: 'Research',
          description: 'User research helps you to create an optimal product for users.',
          priority: 'High',
          comments: 10,
          files: 3,
          assignees: [
            '/images/img_ellipse_12.png',
            '/images/img_ellipse_13.png',
            '/images/img_ellipse_15.png'
          ],
          images:[]
        },
        {
          id: 't3',
          title: 'Wireframes',
          description: 'Low fidelity wireframes include the most basic content and visuals.',
          priority: 'High',
          comments: 2,
          files: 0,
          assignees: [
            '/images/img_ellipse_12.png',
            '/images/img_ellipse_13.png',
            '/images/img_ellipse_15.png'
          ],
          images:[]
        }
      ]
    },
    {
      id: 'progress',
      title: 'On Progress',
      color: '#5030e5',
      count: 3,
      tasks: [
        {
          id: 't4',
          title: 'Onboarding Illustrations',
          description: '',
          priority: 'Low',
          comments: 14,
          files: 15,
          assignees: [
            '/images/img_ellipse_12.png',
            '/images/img_ellipse_13.png',
            '/images/img_ellipse_15.png'
          ],
          images: ['/images/img_unsplashmicqqgydq6w.png'],
        },
        {
          id: 't5',
          title: 'Moodboard',
          description: '',
          priority: 'Low',
          comments: 9,
          files: 10,
          assignees: ['/images/img_ellipse_12.png'],
          images: [
            '/images/img_unsplashbs1xgrkih4.png',
            '/images/img_unsplashkiqjfzbii9w.png'
          ]
        }
      ]
    },
    {
      id: 'done',
      title: 'Done',
      color: '#5030e5',
      count: 2,
      tasks: [
        {
          id: 't6',
          title: 'Mobile App Design',
          description: '',
          priority: 'Completed',
          comments: 12,
          files: 15,
          assignees: [
            '/images/img_ellipse_12_24x24.png',
            '/images/img_ellipse_13.png'
          ],
          images: ['/images/img_plant_care_app_dribbble_shot_1.png']
        },
        {
          id: 't7',
          title: 'Design System',
          description: 'It just needs to adapt the UI from what you did before',
          priority: 'Completed',
          comments: 12,
          files: 15,
          assignees: [
            '/images/img_ellipse_12.png',
            '/images/img_ellipse_13.png',
            '/images/img_ellipse_15.png'
          ],
        }
      ]
    }
  ];

export{
    columns
  }