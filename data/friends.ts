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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSXORICZ%2F20260721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260721T235955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCreWjJZPgX8DKLjlqWCYXmSP5GYl%2BiB2goDLLn%2BjOuwQIgJZHfDYHDMs5ZfMnE13%2Fo6FI%2Fftoi7KSyBS99kMqkmyAqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJVc6l%2FK9aerE3Qy4SrcA4dPLz6SAYTWdXxt%2Bk1GTPpBD%2BuPJKlOz8RzYnnSdXdRkapKZVPCNYcli8QQL3oKKGqvEcXQfINaXk5iMo%2FBy3FrOuNWqEhSnvwfb5QQxdmhWmFfAeAK%2BKgJEz5f3ipikwPqpKIsyTmsRs%2BCDWksMMuddvR6Wq%2FPOZf30nw4BKP9DRzi%2F81FIcNOBnN8xnD94LcMTlKELfqu5VrLxKJWB98LMzGM95ySWwYWKVdvwfUDbErwRT57NPz6hwY%2BCfbC7N3ndASRf8ZBigOTRXTM5VzPfkRIpaAjH8r5je8GT5CKynZ%2FAEturp7oqd0KW2SW9kwGIjI9Fazw5C5%2FbePkiVUuPEwjZC4O0ziXv1mCIKOm3Wcluz5KGfGxuxCw0Ufk7BK7R5aRjaNexBZPr36B%2Fp4rHK34ddjze9pgOr%2BgTvW474XNaFAvkRqC6db50fOm2vfLRv37USP%2BgmfSL806N6L0RkH2QtbaLkgUcvyAHxS2m67gMBKVIbXZWSAxSRDf2atyVWwAHUrDWIUWbFsIeH%2ByKLwOFAslXlZq6o03yvPn9yTzOSPqvK88azeLQqPsLEJDI3S2xQBguwdPskQv92isxEgEsSNfIFWiCxXxBq3Mgo4NtHfXaYOZ75ysMI65%2F9IGOqUBwrVn4DzbbIDxOKlqspHqAiYRJ2pqGMC%2FhUE0iXgQpWYLP0QUQGlmSZNIpNO2NvpBGFb4lXZI8ZsgMPCCESjCs%2Fn1iHxm%2BOqe9hFLZYpoRFRhI6sBDPtE%2BK6MkGtkiwv9LoTegRH9zuORWvQk1Rme8YyaORzxsn1t9Lito1%2Fk4CZwn25wIHASULebtRgWVSvFZOhk8riQS6zxO35YfXlGSPUVCIpd&X-Amz-Signature=1566dab0eadc98da7b7b76d1a2c9a0f14c9e9dfca24f9bbe51bd03cbc9c0396d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
