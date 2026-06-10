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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/c63930db-b925-4f16-9c1a-2ab31f8290b2/blog-poster.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGSTYCNW%2F20260610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260610T100506Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQCU1IS6jWwCVbbH3awSZKrrTqIuBfAcGhuozh1YElLwIwIgInhq4YfRFzFKRD8Y3s5NGnIrRQnJ8Srgb4yu07pane0qiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLwul134HBLuK4%2Fi1CrcAxLq3jN1qs5N2p3yvJAELqxigW6U1L6yQlVsnwo8lNLAZvvF%2FykSj%2FOmgHCpGeBHHWZhKhS%2BwRKVO0axA0nh5zjofHz7HxEdVaLdiLHqnKXhD5LewFkycsgJQthK12YY%2Bfs7LhOVdhLev7TFfbvC8PA7Z3t%2F9CbbUwUc8QfyHVa47llcr9t%2F18rde7riKmrQWHXWutmUAhnnIJq%2F0tJq%2BTAxko8xui%2BNflLdrK%2FDy2Uk0sXLK1XkZWSJlqHhbNBgCvUnUNUNmv2JJ3Wp0bSTrwnNocirZaZRcMD895hY2K7iD9%2BTeEn7CTOmFvIfIlIQcYXVBVdEVowj7DNVpktlqQaUpruZVzWiMznf%2BatGDLdPAjYU7j83yvT5WxpFpRlFS9wY3Rw0X3zjDEhw7B9Vjzj40vERgXuWTYzTUgkPr1Wob%2Fbr4TxfTsYHZYD4CruU8G1g3CuLNwXcPsLhuoAEyltXYvbYuMTpTdFK7bABfeRgNk6fRQsu7PDICLbDe%2FfXNvPtbxTjyr3zGAVrQoBkY4eQNc7J8Ipj%2BY13zb99ohVnrWG5hcblY%2FJmnHtjzLLsBY%2BmmdCcbarsNlzNW5XL8I1Rag0glO9bbOq8pI5JpI31GBp3oZGw12CYWnZTMOHjpNEGOqUBuxXxRU%2Bq%2BFYUXBwpQYGCgzUrm51u98Wm0BvBaGo%2FSzV2IokYW5Ta1GGwCAkbj13iahgRw2vaSDeJaSZBIP%2FxXeP7WVZJeW6JIsvBfG7VwVgS9qld9Yp3Hp4RFC3O8HuAVKXc5NGMPk52FvHdpDo%2FSOFclrAHN0XBBj1j%2FkLu05lfAElDGUD0mYiSCIp1i0%2FoZYpCr9IG8qe8IZNxuvJrxGcf7ZQ%2B&X-Amz-Signature=8b5ac0e191bbf78b574f59f5768b801fb593607307ca028f398b58493dd5f7e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
