import type { Metadata } from 'next';
import { ShareButton, SignalRouteGame } from '../../components/Interactive';
import { Shell } from '../../components/SiteChrome';

export const metadata: Metadata = { title: 'InfoCo.exe：Signal Route', description: '旋转线路、恢复信号，完成三段逐步升级的数据链路挑战。', openGraph: { title: 'InfoCo.exe：Signal Route', description: '连接 TX 与 RX，完成三关信号链路抢修。普通体验模式，不发放奖品。', images: [] }, twitter: { card: 'summary', title: 'InfoCo.exe：Signal Route', description: '信号链路抢修 · 普通体验模式', images: [] } };
export default function GamePage() {
  return <Shell><main id="top" className="game-page"><section className="game-detail-head"><div><a href="/games">← 返回游戏中心</a><span className="status-pill">● NORMAL MODE</span></div><h1>Signal Route</h1><p>InfoCo.exe / 校园信号链路抢修</p></section><section className="game-stage section-pad"><SignalRouteGame /><div className="game-instructions"><div><span>HOW TO PLAY</span><h2>把 TX 接到 RX</h2><ol><li>点击线路模块，将它顺时针旋转。</li><li>对齐相邻接口；荧光绿表示信号已经接通。</li><li>在倒计时结束前，完成三段逐步升级的链路。</li></ol></div><div><span>CREATED BY</span><h2>InfoCo Project Team</h2><p>支持手机与电脑；关卡本地运行，加载后可离线。</p><ShareButton label="分享挑战" /></div></div></section><section className="mode-warning"><span>PRIZE PROTOCOL</span><strong>普通体验模式不生成兑奖码。</strong><p>百团大战“快问快答”及现场兑奖为独立活动。</p></section></main></Shell>;
}
