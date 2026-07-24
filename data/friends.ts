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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AJKKJT5%2F20260724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260724T164537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJGMEQCID3zqy0VT%2ByI67tCYQopJL1P1IDmAeF1TjlqOYUmUH6iAiBhuV8QzjvRPM2U9g0HIvrtqiu61iWz1waIL0w0Kl45DCr%2FAwgKEAAaDDYzNzQyMzE4MzgwNSIMwpXo0rGGfF7t%2FDYJKtwDXryhlHoX7kZoN%2FIebbah0xZYosTW7pkNmM7A2XpRKmEQ%2BhUrPUq4RVaQ6E7BKgcADiNKNtYC5pxJAyD50wjFwBrYS%2BDlse4nsB5sw2hygGjGmXcEPA219T3rEgfrnmfHW0p2uHp6zfAu4M0TCswMnp7vqg5TrvVK5BhIiP6r9KN2rADdINfpvMcwY%2FFlky76FRErbmuIe5ojtviaEqAtJ3qsxh9BDr%2B1XtqOgFDHRmSskhObUc4eBd3IuYjZ8xMln2SP2s6jzT3oHh1llTEetBgk9paXg34YKIebHViK%2Ft2Tw31wLvJ0SyIYMqzh1vP1Wr1jBQjV26GHYBrv28vNLBhXQkkwKHNhGG7VlFT%2BfqBTWtMNoaNQ22pzwlKdlhmkq6oDi4FjN0pXpaqbj042rXZjYomYRiRtwdld6dlxnKlndvnIVWTMHYUsut3szek2q1Ot1zV6ra21lZOH7%2B5oiSSYVGcCRFwm8LnzXZ1awSs%2BifEk87gVVZegiCXTlDaxTerNdQ2gGHmvb9gGIRdqRRTkzJSYFQDIVroqOjMht3f%2BtGo0caFl3kojrP1%2F6KmanqzfEOTVtDLKSUfKUaIgy4ou8ATrMUe9fSYW9SmjvdG%2BM1rK6dXeTU8MTF4w9qqO0wY6pgE8h0H8zfx%2B0FWVeeZgZ0AWpDLcXyjbkePrk9VZPtbireG7kjxtf7P9pyxXws8kDvWCV%2FXmDhZ8u9SvkXSVeyDGdr0WmhTsT83%2B5FPTQfpn9tewtfJkh%2BKAB6A5K9FkVnq9Fq5ODAieJFTkhSE91uoRnKxinxsMzX49fbEyqlXmGhxUGczk77g8xQpk0BCITZ0nAo7wQYia%2FDXjUNeyI70zv8uCfAHu&X-Amz-Signature=36cfb9c78a82f117581e3412a5e282b23126a68afd499d1bf6269facb6dc90b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
