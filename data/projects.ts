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
		status: "in-progress",
		liveDemo: "https://github.com/dreaifeHebi/RssFeedTeleBot",
		sourceCode: "https://github.com/dreaifeHebi/RssFeedTeleBot",
		startDate: "2026-01-28",
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
