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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634WPD5GK%2F20260704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260704T000549Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIGAairKZXw324BjgdzjGyXaEGbuNXTxyQjYp0LpoeT7yAiB2p%2FwZCjupqpJOzBfOOJXjkhBTW2H0%2FQGPqxaV3%2BvnNSr%2FAwgZEAAaDDYzNzQyMzE4MzgwNSIM9YCjjrrPk%2BvtAzvnKtwDQy%2BfNpUVwlj5nLvbVKKN3glSleP68bYvOUvo3VWb7Krx6s96R7jz62A44UfuPk52TykpWfc%2FGGNv94WUpQcuLAyCg6FiTOL9hsTNs1eo%2Fi5JU8hDhECIN3paGbP0dW2S8wC1rWipuiy6rUnssrgAy9AsMkbMdH1RQDxi0IGfu%2FAuzs44dpS3%2B6DBAi6%2BFsYwmCqCEk3q9DKIlzB1lEP9cQ2ttiqXu7vsaA8gox3LyxQro3i%2FqnB2la5cuehpY6f8jFFQpXyNE25H9vJPMprfbUWiR8cRUQ6tgI2NVBbXcE0Hr3PNF5qi8EaqkFSweOlTXTOU0lxhAKGSXKZLokz78uuSoqDvfASv%2FMTpXds6aFKcimhu%2FNSSfpLkEO97WzGBB1s5Vjr4VLPT6hzMn8rd2HmHyZRZvqp8WmFIGYYLycUOTgGMx%2BNimBPZqaHcSDCsxrDc%2FaiDWoNrN1yF1phU5BzlvU3LFLNjSfd4xa%2B0wpk4AjqZTvQm78iHJxYd%2Bzfo4JLww%2BXSEwScw7c1H8a5uVE90TZcP8FNXS4sBGlTLBAfDKPceeNd8tIqMyRPnI13J1Z%2FWrefwzDsyKVqPPr4DZun%2BnaXd5MaYl%2F7hlJakyDBdNbGXmP%2FclICusswopCh0gY6pgFQNxBQz2%2FcrDAI1wFZD5mL3MN0B7Mvgir248IjdwfJ932AtMOsRkI25HNZqndaL9kvqkrV35LCMcTp%2Byx%2FeAdNUJ4%2BplZ0q9WHOQaAEvBL5gyj4c%2Fb9cMfjv7OcmGiM3fqSnrEZ11V2Efbyxr9%2Fe2WB6JNDWqeXkj%2FMEdyZgdoe8GQcZSd84IzlsvlzrccgLtTRfbdLl6duuAY5F0ozThMzT%2BvrZ8g&X-Amz-Signature=80a5bef647e0a3f4c4b117ca458a9c82fbe377821d5d56f705891eb1168f5197&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
