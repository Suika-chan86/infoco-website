import type { Metadata } from 'next';
import { EventExplorer } from '../components/Interactive';
import { PageIntro, Shell } from '../components/SiteChrome';
import { events } from '../content';

export const metadata: Metadata = { title: '活动', description: '查看 InfoCo 即将举行的活动与往期记录。' };
export default function EventsPage() {
  return <Shell><main id="top"><PageIntro index="02" label="EVENTS / 活动" title="来相聚，点亮现场。" copy="课程、比赛、Hackathon 与社团会议日程。" accent="orange" /><section className="events-section section-pad"><EventExplorer events={events} /></section><section className="events-note"><div><span>EVENT ACCESS</span><h2>报名与回顾</h2></div><p>开放报名后显示官方入口；结束后保留活动回顾。</p></section></main></Shell>;
}
