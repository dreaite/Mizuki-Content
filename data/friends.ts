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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663M6QTEYN%2F20260815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260815T033941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIAjzDcw6q%2Fqt70dmXutX1mgh1ir%2BT%2F53hfDDGlY5cKwwAiEAmPfgKNEMdxzR74ZBGPcvS9nPCUUg0FANFu0g09vdt1wq%2FwMIChAAGgw2Mzc0MjMxODM4MDUiDNHCcz7989mCItgHcircA9LdYV2WL4F6asyr9Tkjmfbj25vqm%2BOD1TaJ5R94%2FZ%2BjKRxuWVU3YOvFiVUgIadWpCmCIybwd7myz1mLK2r1bwqmpuLUe0alk8bSCQNuQdymJkkootgiwNiGOe13dwZuf0XS8JnwJLIBQWqjGlaBKQlvFma%2BreIO48zSQJYuRJxvVahJfduPw2zODqY48cNH9Le9%2FRsL6ZqWAqUP6skiLb2ClkHjDfxema%2BNigc8KnA6eo0IMU3LsJHu9xZ%2F7AYpwHSt%2BL5OV6IKQ7osKw2ahpw5DqEiIhkzzpjjwlVc8%2FEe2o4itLd0VKdmH7iZMncOL1ftCN7M%2BM4bP0%2FHbAwJppm9Lcx8g0A%2Fu0R2%2FWp8X6QY7z8ECzDASImdqUZmceyfEDrpMeKjvdk4g9Ym%2FKLCPMn9IcHiCz7s1g1%2FKnxhsrZE0LAxpeiIBUqmdRYNrMgr6KOl3IgqFB8Seejyv6xCO1XU8u%2BoLoTewEZXLprhR1j58Z%2B9cS62NG0Zl4f8JeMmiDXdLkaEscB67ZLUUQ2DQS%2FjMZTKZOAO8EajUJn3plpuekgeW7xwCAAcBHFBIQMXacj0kcLmSvLssULgjrr67QH6SfSFAnP0uRIsXU0tGCvxjAfr1o8m4T61Pf75MNmA%2F9MGOqUBt%2B4HKOIoGe7N290q04oaU7JB3XGvBc3YntN66Qyqq%2Fihwf%2Bf3lnvt7SHh%2Bg75w6DsrA2rpyRLj0GqO0fltYn0cBvguZphB4syWcXei7sUIM7XwLGgYrff5XTSQo4SpOJxk8mbnJpb0Qn8laJ6JHXkyoVmihPwnmgdIYBkkM6ISpkz9DF1VD2eePWQ%2Ff3n1cUfIz%2BDF%2F%2BxZ2S10fLSxwuEP6P8RAt&X-Amz-Signature=a01d51bc30952dbf4287888426b1907be989bc470df3cab961b6415a036bb491&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
