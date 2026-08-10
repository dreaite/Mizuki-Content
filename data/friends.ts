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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622OYZVVE%2F20260810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260810T053931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdSMe0zVWc%2BncEM0rb8Gj%2F%2FIwQn1tCj90AygzhSNynlAIgXpQdm70%2BMnkwhHlJh%2FuNKEYTSwbktNujABsB%2FgfwA%2FUqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFcLhFTjZgJ07c%2BEPSrcA1uCaORTNWM6qLDyYMTuiIfa2S6AFCxFLgev2b2XVkFic%2FKpDGSRT8BfCHsSj6d2lL%2FPTLsN2Ape6sQfxfxJgQ2njTeOtZbBudo8OEVliWm9pIksm%2FObLLMv%2FKs2N%2BXCbefXaHmn1BM9Og6mhVv2wzdMcxrHw5qMtzPjHZnDwTjurYAYVM7qAJiPQbUxnLng4W3TeBX5SEKhzpGu9jVx%2BgGjvabjsJVc7%2BIDA6N0MR5GGyTkXCqG5JRu3KipGb5nmtSIfMzRnDlv1JiZjpYuADRvt%2F383HXTnIgMEtd0Hw7XZw3zEhPwcMY88tmtAXc4SSvXs2DvYOEcY0YBBlXrdnIYLgFVwVX1b7soOwkaLKHXjSPEV%2FRzvSQFO5bPTdnjj2KzQQ8bQfVuAHdt1cyKd3IJhfjJr1A0U2Vi8zWJ%2F%2FVJkauJfNfAougmZnCCZEesKkQsPlCgOjrr98UhjYfy0mR0OqjavnzCBzOHuHZwrmaa1yMGVvAsCqKd5jhBGgYhlzDorj66n9%2B8ND6w78OTB4P1aj2e2PGseCJsAV1FUyyBs7dMymmt6s%2FQMaycfi5xlMBhTaD1zqaWgv1WWRxftJ2ZOlPSMrBcSW0FWdRSev%2Bc7c4jOrz5nMOGg0VXMN%2BX5dMGOqUBzcTa5HMY4WvKjMsrYXo0qr%2FivYikk%2BPysT7EOrQEI5IlK18mUYGTjFTz%2F8EDGi4OdZ4uMh6AT5dYH8FRnWtXCWX%2FIsrWVuVq1oMFwqY0YFIa%2FzdSyi0wivPjxhj7j1NJftBF02gR71W6jUPs6blrm1IOhyR0SHVPqzHBxxdvav9E8JYwK3NXU2mlg3%2FCJxSsMbt9ARHJ%2BTNpC9SYDpgzr%2FNeLUcu&X-Amz-Signature=ec3493b5af31ab923ebe20878734c7c857762ed36e86e3cde7fe4bd9b6300d9e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
