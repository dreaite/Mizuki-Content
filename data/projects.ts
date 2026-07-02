// Project data configuration file
// Used to manage data for the project display page

export interface Project {
	id: string;
	title: string;
	description: string;
	image: string;
	category: "web" | "mobile" | "desktop" | "other";
	techStack: string[];
	status: "completed" | "in-progress" | "planned";
	liveDemo?: string;
	sourceCode?: string;
	startDate: string;
	endDate?: string;
	featured?: boolean;
	tags?: string[];
	visitUrl?: string; // 添加前往项目链接字段
}

export const projectsData: Project[] = [
	{
		id: "upwork-enhancer",
		title: "upwork-enhancer",
		description: "upwork-enhancer 是一款专为 Upwork 平台设计的 Chrome 浏览器插件。该工具使用 JavaScript 开发，旨在帮助自由职业者在浏览工作岗位时，快速评估并筛选潜在的 Upwork 合作机会，提升接单效率。",
		image: "https://r2.dreaife.tokyo/notion/covers/3915465cca17801c9b44e983329c88f2/ai-generated-1782992912349.png",
		category: "web",
		techStack: ["JavaScript", "chrome extension"],
		status: "in-progress",
		liveDemo: "https://github.com/dreaifekks/upwork-enhancer/releases",
		sourceCode: "https://github.com/dreaifekks/upwork-enhancer",
		startDate: "2026-07-02",
		featured: false,
	},
	{
		id: "RssFeedTeleBot",
		title: "RssFeedTeleBot",
		description: "一个无服务器的Telegram机器人，监控RSS源、X（Twitter）用户和YouTube频道，并将通知发送到Telegram聊天、超级群组和主题。支持直接在Telegram中添加/删除订阅，支持多个订阅和选择性转发，完全兼容Cloudflare Workers的免费层。",
		image: "https://r2.dreaife.tokyo/notion/covers/30f5465cca1780a8a667d7cb8c1d5af5/ai-generated-1775396031107.png",
		category: "desktop",
		techStack: [
			"JavaScript",
			"telegram",
			"rss",
		],
		status: "completed",
		liveDemo: "https://github.com/dreaifeHebi/RssFeedTeleBot",
		sourceCode: "https://github.com/dreaifeHebi/RssFeedTeleBot",
		startDate: "2026-01-28",
		featured: false,
	},
	{
		id: "notion2page",
		title: "notion2page",
		description: "notion2page 是一个无第三方依赖的 Node 静态网站生成器，专为构建由 Notion 驱动的英文个人项目作品集而设计。它可以帮助开发者轻松将 Notion 内容转化为高效的静态网页，极大地简化了作品集的搭建与维护流程。",
		image: "https://r2.dreaife.tokyo/notion/covers/3915465cca17803c8613c02b47c29075/ai-generated-1782992687889.png",
		category: "web",
		techStack: [
			"JavaScript",
			"Notion",
			"CI/CD",
		],
		status: "completed",
		liveDemo: "https://project.dreaifehebi.com/",
		sourceCode: "https://github.com/dreaifekks/notion2page",
		startDate: "2026-07-02",
		featured: false,
	},
	{
		id: "ytb-asmr-tg-backup",
		title: "ytb-asmr-tg-backup",
		description: "一款基于 Python 开发的轻量级后台服务，能够自动轮询 YouTube 频道，利用 yt-dlp 将新视频下载并转换为音频，并支持自动上传备份至 Telegram 频道，帮助用户轻松实现个人音视频内容的自动化存档与管理。",
		image: "https://r2.dreaife.tokyo/notion/covers/3915465cca178071bc6dfb2ba5139bac/ai-generated-1782992455041.png",
		category: "desktop",
		techStack: [
			"telegram",
			"rss",
			"Python",
		],
		status: "completed",
		liveDemo: "https://t.me/+9-Cy-yue1PJiMWY9",
		sourceCode: "https://github.com/dreaifekks/ytb-asmr-tg-backup",
		startDate: "2026-07-02",
		featured: false,
	},
];

// Get project statistics
export const getProjectStats = () => {
	const total = projectsData.length;
	const completed = projectsData.filter((p) => p.status === "completed").length;
	const inProgress = projectsData.filter(
		(p) => p.status === "in-progress",
	).length;
	const planned = projectsData.filter((p) => p.status === "planned").length;

	return {
		total,
		byStatus: {
			completed,
			inProgress,
			planned,
		},
	};
};

// Get projects by category
export const getProjectsByCategory = (category?: string) => {
	if (!category || category === "all") {
		return projectsData;
	}
	return projectsData.filter((p) => p.category === category);
};

// Get featured projects
export const getFeaturedProjects = () => {
	return projectsData.filter((p) => p.featured);
};

// Get all tech stacks
export const getAllTechStack = () => {
	const techSet = new Set<string>();
	projectsData.forEach((project) => {
		project.techStack.forEach((tech) => {
			techSet.add(tech);
		});
	});
	return Array.from(techSet).sort();
};
