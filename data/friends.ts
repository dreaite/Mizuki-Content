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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNPNOSYG%2F20260715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260715T201035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQDmuHHC8JuVooJoNzA6ZwxwSn8c9EWbgShWty41s2lMmgIgJX6bghKMifMpGHMX4IW9%2FzN7FxawcDyVt6OVwvN1NKMq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDCJEo6seAzShXFMpEircAzO5ru86xIvoDd4tPVEanV%2Blc0gwL3IfxbXxgO1tFgBVsduY535YNSnWW7UxzBiR6nWVGeQeQJbhNZWYb2lQQLKSxnZ4P3v16hVJE7DcAtwpoB6taaELTXwlySWWjPL5RB%2BliyNw6BW%2BZkYq8sjFSQlGQvPnAkBn0y8DM6xeazN1ObXbQpAKRNXStnMwhDUlccPCJb0B%2BIs9msYAQKVlT1K8p6n0cx4xIZFQUxGb%2BeGyqJicVJ6u7o%2FwPpI9u6eC3cOxaeJVO%2Bzu39X18FrxZRYMndFpd8yT79N5giHfG1OWSFcRSRHThCAwdwPST22sCivbMsTt%2FdSDzkPQgsaquQC5%2BmzPO7Cp1JgGVatGet3Nyrj91NYA5ev3GXaERr%2FDYB5ZBbNmDvQU8l6p9gs12SApy71nA6hkE37nF%2FOhjG6Q55NBPJ1UY9PiP4%2BD2SQm5tI5VH24C3Vfjg0%2BE1WaWaDrGSS6%2F8zQepypAOR%2FsbVZU7cxuKRP%2F4bwN6ryQruj0BwdNrXul8%2FZjHUEzBvx1Ep93kZQn3g85pW%2Bj1%2F5MNMPtcDDCqJ8loG5jaMBAaK3RMvDfos2Z9AcZntzcg2JMwTtG8tth3LFgAI872XUg20aWVLuRDweW047OVkrMLSg39IGOqUB%2Bd5EWE6xEfvMSo60alFX4cHNVFO2JSwd%2BkG7fdyUpgRRyWWdWtCuJnuhCYR7%2FR%2BR8WE1zWvOr%2FMFpkYg3iD5U2CHrWq8uuAok5r%2Bxl7dxr3neajSpYr4g1PUXflMndRqWjjkW5E6xRk9CMgeswTYTYFXzdB%2F6MvI6%2FplTrN0AIfHbg8NO6bxmJiTaVto1JUtDyvbL0uHTYdNSPZfh9%2BIbUQE4OdH&X-Amz-Signature=ff69a9ef1a809080fceca10d3e9a20ff0026c2e99d8e4d02d2fecc8ac4c068aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
