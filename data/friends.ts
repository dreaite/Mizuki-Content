// 友情链接数据配置
// 用于管理友情链接页面的数据

export interface FriendItem {
	id: number;
	title: string;
	imgurl: string;
	desc: string;
	siteurl: string;
	tags: string[];
}

// 友情链接数据
export const friendsData: FriendItem[] = [
	{
		id: 1,
		title: "且听书吟",
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCMGCYVC%2F20260811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260811T234100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEJ0KPpwo9R7ohYTne66NnsNLFv%2Fv8ah1CZJgT4BOsWJAiA4R4CqUsddUnV5h7vNB2fYE5XYQtnAEtFWWTh7UQsTYCqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXafEEKqSN87P9BtKKtwDO9octsVZSyH2hH6s5OL%2Ba6CZP7sV4fDQ748Cfg11EDy1LFcRAeg6cZ1K79FqHwu9M%2BulKrJlJR7hNsy07LpmSwxD1VxaWZNit1xxq7p8gXxePkCKQby%2B%2B364dELgnRiESrTmzKwuRKF3k4ibdSgM3i3ZMio%2BXsoVlQaRL2AO5fTLL7xiTz5iuWTtVOYBj%2BxXRH4f4idmwoQZx0ACZosMoi8iahAjMhQtJb4Qi5jhfREd7qS%2FxGGWHRchd%2BX9FOKm3FQ3ssbCYha%2F9ltUK0H4QIfXt1PqAWwZjDVMZYnS9NoCytGy7%2FpIdFPUduW0aFiMJ8ok74sm%2FyuG5kmeZoOrvZUgJb%2FxYAHyO7KzTInJ9oJrpXnbG44pMDqXsdGLR%2Bpr0bijt82mL4jE%2F%2BiHsuEKYGGXKzZZeUrP8Fjdubk8%2Blt8BlrWE1UlsoPmYExlYX%2FshtCAiBpMcFO5MGsaDT7mRsf73T2T4YLkG77hQPSJTLRACmuTqwrqn%2FnXDP0Jk2Jwx5bDtLFe42NMPTj%2FRL99QsTK7vkKseMHyA3uTXB1Zr3QmsGL4ame%2BJq6yWq0QT6kF%2BNYf2A9fA6BYs5I1YjaiJKmDzvTO9wdxYEAy3e5Y6uWOGjLYVrOzxxXme0wuOTt0wY6pgGItP08n7KgHG3L0hcpHPLL4mYFHOS1lFUDBiynekObmhdZGZZa5DPEICqkr4IAvX4AwT4P%2BYhJdmEiwo9ILzhlX4pYkbpc%2FS95OfvpKvjxOC4vwskJvt%2Bz0pU68tITWOBlxkUxcRkereJFjGD2HlG%2Fo6krPKb7It9SdPt4AghIzlEsJ21YP3wR6%2BqA7cnK%2BEbfKfJjfV%2F%2BZvJrF%2FjhLesYU6l89OyS&X-Amz-Signature=4ba839562958241a4caec309e3e77fcd6948fecd9fd88d5ee731548ef0518c2d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
		desc: "诗与梦想的远方",
		siteurl: "https://yufan.me",
		tags: [],
	},
];

// 获取所有友情链接数据
export function getFriendsList(): FriendItem[] {
	return friendsData;
}

// 获取随机排序的友情链接数据
export function getShuffledFriendsList(): FriendItem[] {
	const shuffled = [...friendsData];
	for (let i = shuffled.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
	}
	return shuffled;
}
