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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEAU24AI%2F20260621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260621T211628Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIDcFawx00vrfJ4q1otOtzLmrJDXUyrpQ%2BqcasAcn7p7aAiEAliGilVSqA12ONJQg2ZLmWkW01WulHrbdMz69JjRUB2IqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBva%2FULmCsMgew7ysSrcAyXLFEpevDjTqwHXZhsZgvtElQKkihXbNKMPIpuGl3DQY%2FeWukp45whBX5eUAluLDD3i3vqzCzZGLXC1Rl1bm1X28WVBIJZOxqDI%2FRg1VEyabO5i0chnGVcfgXzxPIP6lVBHD%2BOJMXwEymjl0XZ1Oyu0b7e0IKuzDx2jRoAy7uHQFnChH91PuvNV12kXdfrF2o4JC7xutfaSZbk%2BhtlwVXAqEoHAvcK4ANTKQfhDciPHofmtNQpE9PS0dlN7dh5Z9%2BzxALSVPjGo9SriS4rn0jD3Vew78%2B8%2Bgqozh35EgD06HProplh5lOLP36eC0JFDQffjHATbo723u0%2BePPoa0TMA57DLqLLqczFUee99waLlfeNzb94K6mEhKgSgRkBEBBKb8apFJMh%2Bp%2Bj7ENBC%2BWOF5XLO46ec%2F%2BuIigOauRjf21H7wKJXYL5nnFLvPbgJAQaNXKKEgqYRfeDuV5R%2BdOX0MPW58kf8qZOTH4FRoBgRfT%2FbW8ZLN6%2BFTZsTqVZLQeQ5QDdQWcx9k5u7aY9WClqjBloOfnQ8o49S0bSGtmpON6XC2azkHtrRabsoXXup5vxgh410pxuKjX5%2BIf8OtOK9VlCUwFYnQWCiG%2BHxOI3kLZBle1eQPG8aRHXhMIWC4dEGOqUB45E%2FlKPYga4VuuVy%2F%2B0zbLN3tJqFQabbQVWWZobgciqxu1POoyBwE3bAwx6kS%2FWXCKQPo4kK01OulsDujeSP15ahsd14b2OVQ14%2Bz%2Fs3j%2ByNYEDdswkT1gqHzPMgnkmqkcrh5ysBjQ0DWRYW6qjlHr%2BIKQRSzI8pcqVELRFZjHRzz7DEq0wSkvXp0Jtbgc%2FBVgUbQnlXNteyFlBy1prkip3DO6yY&X-Amz-Signature=31543cf5c3584cad9757bd269d073241f1ee1498815d462ce98d953a9c7dc367&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
