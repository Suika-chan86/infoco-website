import type { Metadata } from 'next';
import { PageIntro, Shell } from '../components/SiteChrome';
import { projects } from '../content';

export const metadata: Metadata = { title: '项目与作品', description: '浏览 InfoCo 社员开发的游戏、网站、工具和创意项目。' };
const statuses = ['构思中', '开发中', '已发布', '已归档'];
export default function ProjectsPage() {
  return <Shell><main id="top"><PageIntro index="03" label="PROJECTS / 项目与作品" title="有灵感，就去实现。" copy="收录在研、已发布及开放协作的项目。" accent="blue" /><section className="project-legend section-pad"><span>STATUS PROTOCOL</span><div>{statuses.map((status, index) => <span key={status}><i>0{index + 1}</i>{status}</span>)}</div></section><section className="project-index section-pad">{projects.map((project, index) => <article className={`project-row ${project.tone}`} key={project.slug}><div className="project-row-index">0{index + 1}</div><div className="project-row-visual"><span>{project.slug === 'infoco-exe' ? 'SIG' : project.slug === 'infoco-club' ? 'www' : 'G//P'}</span><i /></div><div className="project-row-copy"><div><span className="card-kicker">{project.kind}</span><span className={`status-tag status-${project.status}`}>{project.status}</span></div><h2>{project.name}</h2><p>{project.summary}</p><div className="tag-row">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div></div><div className="project-row-side"><span>{project.collaborators ? '● OPEN FOR COLLABORATORS' : '○ TEAM COMPLETE'}</span>{project.href ? <a href={project.href}>查看项目 ↗</a> : <a href="/join">加入协作 ↗</a>}</div></article>)}</section><section className="submission-note"><span>BUILD WITH US</span><h2>项目开放协作</h2><p>程序、设计、叙事、运营均可参与；可提交选题或加入现有项目。</p><a className="btn btn-dark" href="/join">加入 InfoCo →</a></section></main></Shell>;
}
