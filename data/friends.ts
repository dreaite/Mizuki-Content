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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W46OED3H%2F20260730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260730T181727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDywHv%2BqO2Tcx5Ty7hUr6%2BkAlYb2C2bwg6gDhAiCDzsVgIgM2c9HmUNALuxLwBr8TflMyKUojg9u7umU%2F89lPIfM8kqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHV7jTTpxosaunc5CCrcA1eiDfHJY81pSIxxduyLbh0fq7VVVrGrjF75Wa2wIVZl12dwBxbpR7eaZw0%2FQEFVGy5ycDjD9IDBe0UbxkGssq2%2B0pP0RWRzFUdoE3ZLVKufbMeECzMOvFtDrCj7IX%2FsgUVqQlwLaDB7acGBnf8WBsARlboJwJ0c7MqEBM33sq24DkWwhosmWKyIugqbvtIrgTFg48QBsyxjrQ23QpMv7PICM6V7mf%2BAQOlQW24P4veytvXwh%2FYjeRs%2Bv%2BOqZw6UuZJepY8Aq%2BPi3%2FPlpe2qhgT8QJpSa60f2Cb5%2BcBaVjBBILDHkeyL7%2BXfwuHB9KtruKxdRB1ww6GbOAvaRWIo0Ek4y%2B20g5mDak2aDI20XirdiDDyMHR0865hHDiLLKgppqWGIdrSUYPu7gGMnmIbbQgSWnNunAj5NNDLJ9OBbRrYppAhulLivwohv6FTaGj0m7nfTWjwGXiftaWwIOUtjvoTeQGGLdRFo%2BeREN7ys7X9laKe%2B%2FKZK24jU3M2AM4yuEiCK08uuD8san0n53HE3KddyUMcRkk7bh4m%2BIw5Q8AIxeXvMoI3QkZQMqqYRfVomJQG9B16YOXVtDSzk6nG63DkAUEQBu0waa%2BgPTTQP9dWrYYMHST643suACqAMOKQrtMGOqUBuZ4PCxTjb6yZv3m%2BEd238KfywzNWbEctTMZhdkmWMvuc1EtwqgU7MSoAxb7cx90EnzwXk3kdnmGpij7DcB8Mq1rQBw%2Bw9rBKzEgqotrKX3nnJ0sNduSx9LFlPbBF%2BYiOaF16hxSYm%2BiziosNonLXBWetdqAb6Xi2eNMl63f5mQp%2Ft9O4HwA3YqZrSiFJyBxJCldnF2a7th7gPLT%2FNUP%2BnFg8kM%2B1&X-Amz-Signature=3c30f74ff0e2b64b6e8d7c12942731408763b2fd91a4c17382cd4eb628fa2c38&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
