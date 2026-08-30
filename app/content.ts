import { upcomingEvents } from './lib/event-data.mjs';

export type EventRecord = {
  slug: string;
  title: string;
  eyebrow: string;
  date: string;
  year: string;
  place: string;
  type: '课程' | '比赛' | '招新' | '分享' | '会议' | '文化节';
  status: 'upcoming' | 'past';
  summary: string;
  tone: 'acid' | 'blue' | 'orange' | 'violet';
  href?: string;
};

export const events: EventRecord[] = [
  ...(upcomingEvents as EventRecord[]),
  {
    slug: 'apex-arena',
    title: 'Apex Arena',
    eyebrow: '48H HACKATHON',
    date: '往期活动',
    year: '往期',
    place: '校内',
    type: '比赛',
    status: 'past',
    summary: '48 小时完成组队、选题、原型与路演。',
    tone: 'violet',
  },
];

export type ProjectRecord = {
  slug: string;
  name: string;
  kind: string;
  status: '构思中' | '开发中' | '已发布' | '已归档';
  summary: string;
  tags: string[];
  collaborators: boolean;
  tone: 'acid' | 'blue' | 'orange';
  href?: string;
};

export const projects: ProjectRecord[] = [
  {
    slug: 'infoco-exe',
    name: 'InfoCo.exe',
    kind: '校园互动游戏',
    status: '已发布',
    summary: '倒计时内旋转线路，接通三段校园信号链路。',
    tags: ['Web Game', 'Puzzle', 'Touch Ready'],
    collaborators: false,
    tone: 'acid',
    href: '/games/infoco-exe',
  },
  {
    slug: 'infoco-club',
    name: 'infoco.club',
    kind: '社团数字门户',
    status: '开发中',
    summary: '社团官网，集中发布活动、项目、游戏和招新信息。',
    tags: ['Next.js', 'Design System', 'Cloud'],
    collaborators: true,
    tone: 'blue',
    href: '/',
  },
  {
    slug: 'genesis-protocol',
    name: 'Genesis Protocol',
    kind: '跨社团游戏共创',
    status: '构思中',
    summary: '程序、叙事与视觉协作开发校园独立游戏。',
    tags: ['Game Dev', 'Art × Code', 'Prototype'],
    collaborators: true,
    tone: 'orange',
  },
];
