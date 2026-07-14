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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLAKBSQE%2F20260714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260714T053231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQDNVXbjYWF2P65o2eBPFI6KWDdmoZD2ZeldxxKnEMKZhgIhAMdDdPhrtglcxqiHUqI1jvCZz4TovvTMyTOm6x23XNReKv8DCA0QABoMNjM3NDIzMTgzODA1Igwj2ODxxBZ%2Fjem88nwq3AO5yI%2Fz45wxEsQnEJZEdTJEGtwz4LMBVWIEX4qdRp6jJ4eQ62ETGKKLDA1LWSPnTh%2BjSEHWSDPBgWJ9U8mToLxi%2BhDrI2dLIPZfeO88nmwXqyjA0xPAvuXHPJW3ru589dzdPfFbmwejT5JXaWEVTqONIxKzWMCxvR7BVAm66QlaiUXB3eXl8vbjOiUAZkauhDwMoGni7A8R6TCmMkXWSSSCQ0zHwtykV0RhHjvlHa%2F2wMpSdNybRoekVcZVb1jwwWcyBWUq12XUFQ7gxSUWaskM%2BOj1G9Q4wI%2BDGdjAD3%2FZeXl6LXrC5pYDZPkyFvMqLPRjdQ%2F1Y%2B%2BcUtQDzHWedudvB5v95y0tJxaDSLDqWQNctrRNmnd4kGhWgc4AIJutLOHgZIG%2BfglAEIEZXrp1CGWu2mleWAjLgjv4sLux61KopVqRMfT7n9xXhtV%2Bg56k2Z7Mq%2Bf18FRrCjGjjiJ4CVb20xd6MZzcwGA0SR2Yj58KuizdAA4M4rxVIHxBStktFctlsY%2Fg%2FQngiCL3cv1PuNzkLqy%2F03VMo7InLhNIC43QIM4J80iQ2CbOiriB2Ag%2B%2Fc8TteCZWnpAmXmBtVQ6drcX08%2BmWZbdODGsYzYkEGBTa55rXJTC6rprEhtM%2BzCd4NbSBjqkAYXOZmoP6%2B5yTZeLM1q9ZGawMhXd76DxJEgHmeSgh6E2CId18LGq0Fmvr3jPy2rxsOAQD5AdEGVDTzFBhkWmwW8rkWdpneaMyWuZunDVw%2FJiVUIhrAmeyIvY9sHusGqQJAyHDL6Aif5tdafrYWh70ICrXNOJFKZ%2FICTu6dberF9Sn8SdaNw5mRjdvWXl9BcVHSmQAHrPLNTOwIIF6AFJjMapBpPk&X-Amz-Signature=484a1f46f964d4449eae02f467c309017da70e6ff10d3e1ff3dacbb9c636334b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
