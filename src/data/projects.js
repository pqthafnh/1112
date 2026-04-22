/**
 * Projects Data
 * Modify to add/remove projects
 * Each project should have: title, description, tech stack, links
 */

export const projects = [
  {
    id: 1,
    title: { vi: 'SUI Blockchain Mini-Hackathon dApp', en: 'SUI Blockchain Mini-Hackathon dApp' },
    description: {
      vi: 'Một ứng dụng phi tập trung (dApp) được xây dựng trong mini-hackathon SUI Blockchain — triển khai các tính năng cốt lõi bằng Move và giao diện React. Tập trung vào tạo mẫu nhanh, tích hợp hợp đồng thông minh, và UX sạch trong khung thời gian nghiêm ngặt.',
      en: 'A decentralized application (dApp) built during the SUI Blockchain mini-hackathon — implemented core features in Move with a React frontend. Focused on rapid prototyping, smart contract integration, and clean UX within a tight timeframe.'
    },
    tech: ['Move (SUI)', 'React', 'Vite', 'TypeScript'],
    image: '/assets/projects/sui-hackathon.jpg',
    demo: 'https://github.com/pqthafnh',
    github: 'https://github.com/pqthafnh',
    date: 'Nov 2025',
  },
  {
    id: 2,
    title: { vi: 'Bach Khoa Innovation — Thiết kế UX & Phát triển Ứng dụng', en: 'Bach Khoa Innovation — UX Design & App Development' },
    description: {
      vi: 'Dự án đổi mới hợp tác bao gồm thiết kế UX/UI, wireframes, và phát triển ứng dụng. Triển khai các tính năng cốt lõi của ứng dụng và nguyên mẫu; cung cấp thiết kế Figma và nguyên mẫu hoạt động.',
      en: 'A collaborative innovation project including UX/UI design, wireframes, and application development. Implemented core app features and prototypes; delivered Figma designs and a working prototype.'
    },
    tech: ['React', 'Figma', 'Flutter', 'Git/GitHub'],
    image: '/assets/projects/bk-innovation.jpg',
    demo: 'https://www.figma.com/@pqthafnh',
    github: 'https://github.com/pqthafnh',
    figma: 'https://www.figma.com/@pqthafnh',
    date: 'Jun 2026',
  },
  {
    id: 3,
    title: { vi: 'Personal Portfolio Website', en: 'Personal Portfolio Website' },
    description: {
      vi: 'Trang web cá nhân trình bày hồ sơ, kỹ năng, và các dự án của tôi. Xây dựng bằng React và Tailwind CSS.',
      en: 'A personal portfolio website showcasing my resume, skills, and projects. Built with React and Tailwind CSS.'
    },
    tech: ['React', 'Tailwind CSS', 'Vite'],
    image: '/assets/projects/portfolio.jpg',
    demo: '/',
    github: 'https://github.com/pqthafnh',
    date: 'Dec 2025',
  },
  {
    id: 4,
    title: { vi: 'Dự án cá nhân thị giác máy tính', en: 'Other Personal Project' },
    description: {
      vi: 'Dự án cá nhân khác liên quan đến thị giác máy tính.',
      en: 'Another personal project related to computer vision.'
    },
    tech: ['HTML', 'CSS', 'JavaScript'],
    image: '/assets/projects/computer-vision.jpg',
    demo: 'https://valentine-1402.vercel.app/',
    github: 'https://github.com/pqthafnh',
    date: 'Jan 2025',
  },
  {
    id: 5,
    title: { vi: 'Dự án Website CLB', en: 'Club Website Project' },
    description: {
      vi: 'Dự án phát triển website cho câu lạc bộ tin học.',
      en: 'A project to develop a website for the computer science club.'
    },
    tech: ['html', 'css', 'javascript'],
    image: '/assets/projects/club-website.jpg',
    demo: 'https://youth-informatic-clb.vercel.app/',
    github: 'https://github.com/pqthafnh',
    date: 'Feb 2025',
  },
  {
    id: 6,
    title: { vi: 'Dự án demo thuật toán Round-Robin', en: 'Round-Robin Scheduling Algorithm Demo' },
    description: {
      vi: 'Dự án demo thuật toán lập lịch Round-Robin.',
      en: 'A project demonstrating the Round-Robin scheduling algorithm.'
    },
    tech: ['Python', 'Tkinter'],
    image: '/assets/projects/round-robin.jpg',
    demo: 'https://gduktmtteam-0.vercel.app/',
    github: 'https://github.com/pqthafnh',
    date: 'Mar 2026',
  }
];
