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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665H3LD3HZ%2F20260808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260808T045806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICrpe1gCD3kd%2FdS2d%2BUq6wTOu5o2piX%2FVqD2ky3DxCJWAiA%2BiV9QYt%2BfKixU7jbBdF9ySWhEgRyAQVp3PFBJSp4Oxyr%2FAwhkEAAaDDYzNzQyMzE4MzgwNSIMzG4CeEXWoRYNi1LCKtwDAXif03vk7uSBOPzcZRkcZhPDkh7WaUoswFZL%2BaHV6vZKqfifvuod1Bn%2FCYLaQa8lZ0g8AoeMmCh6C8O%2F7tbpcoi8mWAKjcnUYkbCRTgZhEP0qaVB8rgY0N90f8%2Fkb63pHYvZQqNFZus1sh%2B9%2F8zI0FDQSIVgOOi7nzuvaxyrAGYVkAGF7dHSuKlOzKS0cfv6PeONJQLm8m4eOWlrwiZayB0OkqbhqPGoE2bQDg2uDfPryNUGyP4aNxnD%2BVY%2F906sZDc6EJ4eiiKjhDw246VA1YVHv4YMrrttqe%2FNbPtlz1296g3qG11TP52ILyLFbjhNaHSIhZextIaAMYZGi4EzZ1neoVzYJcdYer7d3eF%2FrZVH%2FuK6VRSBK87RxqajkgBJt%2BNoTodMYLi%2BgHxv8FXdBXn7LIp4i3tep95r5n71e8mQNo7k0lT649vDb9mwSA4HX8otPuvolUkJFV4lbPO1J3Cmqq0upugj7kRP9UzXMLYCgZGYOOWNN6IRK0Wf8NQl8ltOhZ5E4I44SycsraenC22MIgyARWABhGoFpzCtIQuBI637hQb9ZxZic1RdvxK2LTwNFWsFiebUDvG3QMR14SZs6YrTL2Tw9A0ax%2F2bQHo8NFKy6GdQm10GuRww1q3a0wY6pgGNIF5B2ENQDBtmKL35yUAOzsJaU6TWVGK%2Fscw%2F3ZbTWZY0feKEP6%2FnUBUmJY0eaQ707F6trZt6enTOWkbP8bSyhZrjMvDLh2WbpM3dSPNpqWoU%2BYJ9DIn3VneYv0mj2CHxuaHxOWOhKeZVI4j9aajTR2kdEkFrHMjZ5vybRwPOFET3d0QnULCpIAWUeRqtkAE0MmfWCBVEvDVfFc4pSTSy8U%2BonX3F&X-Amz-Signature=d098708e9030929aae92a1555c3f63b5cc123c39cc42d8a9fbb5aaea8159220a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
