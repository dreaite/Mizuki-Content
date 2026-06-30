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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RIODNZV%2F20260630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260630T221548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJIMEYCIQCaA7I3W61PRDhgdDVHXi5aKN2MzHXHCXWXoJDjeMW5ygIhAJwF%2Fe7wEp6F9sJYrU5bnV6NsiIlBvZAs9I9sm6TNNozKogECM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwYuqF%2BgQh5NsmxK4Mq3ANbRE3WGRoz8twNq8Y3AnDaGiPQERGpNMqVRVemUrqsOJ3sda62e0c%2F6vKXH0LeSdIqD4Gpyant3wTjNlfmHNQuH8hyOrAgXycyIoRfnlHeNk%2B3z2cn3SjnrK8Vs5FIq6mNmTqJEYAUIaAZz5nFpqzffIG%2FOHSW3kd0dx6lHVXd18T71BjuTAcvJdu5i74LQ7nmkarU5U79FCYz82KIGYaBt%2FtvMUxGCONMKWIMCHVGkq%2F8ph3kbG1z8awGLu77lIyosp6RNXN7LRj3%2F%2FkJxR7NiwzwSXhwuHGxq5jEGnHjULJAA47uFeEESVcSnKZY2StlNrAogBEF7ku3zrgIFBnV3sh7MnXyP%2BvNeYiQswf3O6H3UXkATe8qg2qtjdxKYCAH9rEg8lq1QkmvwUY84UVPwn%2F5D9r19kb7JuOoN4qStnDlsoRaDpGDjvdSd3C6BMFF2r9v6J0ZB3Lb7kOL424qpD8V%2BAL3lq15ncloNP2qvHBX%2FMFkQZJI58vU1ZjZua2KUtWWCMv1FjiZOyhlvM84bmaUdBQBzi5qNe5SuDRp2z%2FuhZP746KnLlmoLer7jCXFCQQaesoOgImnUTn78kjRgPLwly3nW%2FmE9yNMLAFDehCmcxvlZuPCIysDTDCu6pDSBjqkAWkvOHlbmN6yU%2BMbUFju1aH%2F6%2FsjfVe8JLQnv5HXhmgxecsF955Vrf%2BWt2%2FWhlx%2BPzyN3z69qPpXukv8UeXATgJLvZWwSCZZhyU2Ikf4FbRZWoWzWd%2FBADQN7vNulKrlyUGFbKyyOUtITEUeA7H%2FnofZafsRf9aOunzL2WKJ4s2Bi%2BAgDS090aw%2B4xIElUkxj6SldMMLEGBd4Jyb%2B0cpnO0Ay97K&X-Amz-Signature=8277d814df869e86724e8c67093627fefbcf6b39ea9331946b823eff10ac063b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
