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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XWLXDPP%2F20260813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260813T020550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIG0SDgBncNQFHw%2FsDLvLlFCGR36YjHl%2BJepGsbwiPg4iAiEA%2BM445ogggdyYMWeVOWSZIdYh%2BUZSmvQtUD2sPBnXTSQqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFxkT1qZDHkINJ76CircA5NPLiWqU2FHG4G9Kf0AnNJEV8LcH1kj%2BECu2VHV%2FUhsCugoyTJNqT2hXoN3J0HA0uS01%2FSdztArTLxfMIGXdUzjj3rON4oFjbe1Yxt65lWVUJ9OZubwEfkUfuR5vw%2F6YKpT1Jozw3DCMk5Gn1LUZwF5wPKjLkDCinFb2DkGNeCdpBRISX6TI8qOenAtGtddj7ZV7Yr1k6kKgwkNXzFhs3VKRgVZgw3NiH9IPjURVJzXw6IG64tOML1wU3v6xmaGeIH3UdrRvP9IvBknT9%2B0VY9MQ8FsdNFmzUU2UE5YNi5fhG%2Fwm2Ag9U5OwK4q0h0qO2MOTHB0OOIEqlqRDmi7jUQc6QqU7lMtd%2FKpsaElRoB42qgXA3%2BCqHYBloDAUNuYZKL1V17zfgfWHGHTQYoXoAdyrgAKTnDHuqcOU%2BBluzCiOQvbBZHvS9RW%2BK3%2FDfKD8d12%2BARIjjxbgf10LJkf4mSCcUHp3bA3oGucC5C9%2F2m8MYljJsznVmaaSUeL3UBaLkFEhoOEv0wt9cTmf0wNJkUUlKyW4ZVzhVm735%2FRoMiyU6r2zCLEoxrFx9b3T6FTYuz9NeDl%2F22VhQKxFE7AdhMiS2C80o8yJ2lXt65rcXVHNNaYICgffCCQsFWWMODD9NMGOqUB0wPlOCcbqJv4XpZ%2F%2Blr6Zj%2Fx%2F%2FcMWZujlFrPEY2Gqmcz%2F%2FM07oV1mbUUNZK8MIDISDaU6U2KTCiZAjrcpdIxp8bBiUE5gGBLDsOqyPnSZ9hDxrcyFe2waX8stASkKJjA5TRjigS7%2BmcgKWdMboybua7GW0Wn84Z%2FSlUq2IjEiWTGLiL%2B%2FGJeaSU9BqIAyM4fPToAWQ4MSyWgcnshEOXU5okvRJb6&X-Amz-Signature=fe0211c37910cc20b329f073c90ab1ac25e607da768a2321e5d4b801d4b53e92&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
