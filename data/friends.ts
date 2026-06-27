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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEPSNFIH%2F20260627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260627T220421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDO9Klm%2BxMc72U%2FSdC7GUmMFA9O28F7%2FGInqxQ5ZKJNlgIgcGiw%2FVygAPs2jHuzPADcjcXpe0lBqFRhDkI12hE6XvEqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAH29faTzr%2FHodhubSrcAzSIjRk8vji1rtXa9ee3JJX7elxOe1817cdgJOxrtCAjpiWv1RKunLL3tuT48ub4ucE4UrqQV%2BgYV2NwKsXimiyqpMZdYKehKRfNMmGsZkBIKKOy%2FTr68qe5n%2B6Ybsbr6WEj%2FWgjtdkuHSMCEZzhHSGoOv727dl1aBrkmwtJguXHq%2BsP5J74fLFD0dvjvR%2BNp%2BVUlp3bweu5M%2B%2Fh%2BmNWGfGtJeq7OHUnA%2FrY1MfXm0kv0ezZd%2FD4Lb7osUP4ahTultXiRtGp%2F0PhQp9cfnl%2FHy8uucmwgc%2Fr1U%2BNHgF1rcaIxcGdmhT9IzfRS62naY%2BXiaukqmd8Alv8iq5ShLH3G%2BjNOcs%2Ft5w1k%2Bf1AMDi4ZUtO0yFNTVdDBOX7DS80COagR2uYXYmyjju5nN1TO1cfSaFFo8Rj3%2F3VmHAnk1Iv5u5cg5Z%2F0kZXuMqTNEqCdb1PiDTE11ET4DdKZt45tglnNdpVLrLU%2BYvuhBc6WogcvznArbkprlYvBY2ozxKrFp5V%2FsTD1Myq%2FCjJMwZBv0vCxUecA%2FDsKxJKyTuJKJmj%2BQt0S0QJ0hS6Mibpz9minhvsTXtZl8auVL4Rx5hWtJ%2BJ9EWkIZI0szQQt%2F%2Bn50fORtPN5qt%2FNjH0iiDBF0iMJb9gNIGOqUBe5Dw8vklId6tuuv0DR1yVejebyixgninGZKxfQCEgkwKZSguaRpDI92Bj8z3Ou%2BTzWbKVBG4Ll2bf16twL0W%2Fu%2BHnUVY5xXa%2BirU2IPOPE8MRwt4sMhsjz9LDMT%2BaYOFVzQapxlsuPfTtfg3BY1ShQA9K9Vn0Cg59gq803jmn7jEFZ%2BZXWGRlUZyfAmCizbMW%2F%2FhzZpjl7kyeXR4mxLrUARiVMJ7&X-Amz-Signature=b1df8ebc90d5044ae813a4884dae690ec23166b3af83edaf2c08ac759648f64d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
