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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QINOHEV%2F20260624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260624T082311Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJIMEYCIQDJ1c9e%2FvQAI9HkEIPyKcW33n1fi437VXWJZoepur3WpQIhAOHUyArJLqgqoBexGeg81puCTrbkSHcmXiaO5yGu4vL6Kv8DCDAQABoMNjM3NDIzMTgzODA1IgyapRjYojbsh6dJr5sq3APgCEqoQfab7fpteX%2FhaVB7tLcMHSvbKtXtEBszRXP883W0X3YCw90ZnyJ4yIBH5Drn2c6nPeCRlmlB%2Fw18SKM0Jrlc0q9feDOaV7eWTxXkjb8lKBcJshH7LvuCNWpGvlsVQvNZOHo0dZfuBbhFEJGW1QV%2BRmk8WJ7FjVY2hMb2Gt8o3XsoAC8N33463GKoTY7h9TM3EkpL3ffImv%2FxZ6K13iLar29s4kCfpmPeUUf%2Fm6QfhiADCd1HQZ4KnaxJ19zampcg13f7%2BdCNMWGZARNzE2lbm7CGqDb89f8LEkKOOX%2FCFbS%2FKYk1T9lvlmU2YCboJc4fxCIHbjCP%2FE%2FnNZtJWWF3bA3FsKhIORMyzviyNePv4%2BDLiYzNouMvLnSsVVmO0Qvc%2FMt6j0TjpSloy%2B39r%2FqDP17j6cKG0b8cxSK4U4OD%2FcsqBHd9WvqJggsKUoZ1r%2FDiqDn9%2BWPxWA%2FhiyrGuCWQCHGJLb4SZt7I2b1vFW%2BGRP07uoP2yQSDvfkKj7RweUkiwY%2FfbJuaZ%2F0C2txBWoeio17fGD7JQ%2FBPkgfbjssTU5jINvJ0g2r8hIn3rwOxc99FXsLvxf2BXbJMVzNTCh2XwmmWb3GT2R4tbGpGgJOkzmdRQG0WS%2F4q9zCIke7RBjqkATuskvyQzL%2FBH7Uxyw2vcn6qiTcx9jKkaNLu5PVqSegtTWst7SEnkN7C8kIh6b9EWIMBLLlHiB7t0%2Fi2CM3%2BEmf13VhxvpjBdmQvCsYdRB1ahme6SJY8a7tBCC0aF3a6rfGGSDEVo3el4KAgY0DIIrNROgM4JYFGGakTdFG%2BW9vA5qQ7ywvX2Sezngq3cLrXTHqEBemqbn7lGeMHyGtj%2FJjTlvoh&X-Amz-Signature=89a1bfc55f505828234c629ae5235dd5ae4eae6e68b9d5b952e3668e5fc43345&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
