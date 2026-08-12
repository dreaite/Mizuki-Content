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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAL4XK6D%2F20260812%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260812T204723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJIMEYCIQDq4%2Fpm8tiDQdkQ0DAL5jRBqkuXm0GoTbImzk5LIQ3lXAIhAN%2FtVJGbxBSd0ZckwnxzVVEUbSHB4N0%2F1iGTZZkQ1zOiKogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzIuuD4GhGjBhwcQnsq3AOTp0LEiw0yYuaGwm4yML0KS5PIurPs4KlIax6lMNjAQht0Y8YzvbA7bg13yCbTGFx6E8eqPv6Y8avXM5ieVpqB8VaF465C7ExX5C2EEqqIWNZ3AYe6jq4hq5J6oxLalYVPVbOOCjQka9CYTBIJ%2B%2B5KoxM%2BKeqa0z0b1JSRlQu82xvnPtbthKTgBHoqPrCAUrmkqJkdF8LG4fM2vW%2F%2BJ57RFr51KQw42rxKS7NyG8i9dryk1LQuRyppzyEMENOIA3HKYHEUCV%2BpZO0BKixdAg1hQSnn%2BSZLUxv73ZLS5cK%2BkyMQFp8QHalxPss7UL1IO7aNbuGAoU3wzmlp9TSkWJ4CDz7wfzVL9NyyhxfNLbYGCspahZZiSPdllrfomiihK0R6pQChCZENr%2BbFdmlLlIWg2a6ftqGYprEz2I1hDGbZ1%2FVVsEBMzH%2B7%2FRBznCiD7EhW%2FkrytxQW6AL3Pg%2Fb%2FwDi%2BhIiTsBnztQaesfHWgEgT8e7rezMsPX3AToZqjbwf%2Fve9LX5dPc7PAaBTGcemBSr%2BLuNNOsICbcC6%2F7a2hRQJrl3PWZtvvpiWG1CMGXoNHnYL%2BSA6INXhnFSAHI%2BYpBT6ZLSuEtafLkyTtmi3KTLSCjPdo5TzC6CdOCSGzD3hvPTBjqkAZD8liWo2Wgk3uAQ5SUDNTE8UYIPu88vn3QMu6pGHHBF25TRHeC9s%2B%2Bpq3X9SydFuTLAdJoUlZQFQY5ZIYDip3NOdA9%2BB0T7bCJr3Omy0kTj6eqYCdJsmff1u3a3nVfeq9gsBGifteXguh76jPDddIgjPSFILEtRsodxyMdML2rJCbQViWDJIU5dR15LEus%2B4ATGhzlijWS5g0utI3A%2Be7KqIjg1&X-Amz-Signature=65aaaccdd8677d4472976f33a9386fcc98fa73b58c6cc34b52652f0f789b627e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
