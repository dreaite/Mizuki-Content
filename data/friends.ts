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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QD236N4%2F20260815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260815T133112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIQDCClW0Wl7x%2FBpNfUzNQQsVjtfjN5sLzvNFAWkaH6M9kwIgDSiQSCxjN6fr3Ui20e8J3gXkulMHmFreGuEbqkYBIOoq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDGKK0ZpvmKAc5NxEVyrcA4h7Ch7nzNYiXPL9xYfAWCXt2siwZbZO6B9cbvSnbDDb0N91AY%2BiB512cEPNF59f0gQmTjco%2FzfppODDkjh6qy5zqd%2FhBjETzLwoKZYGF9CQzTlmxl2K1w%2BhQURvipUCTH2ZtHOSrsx%2FfsI0j95df3qpEpnnJa0FqNtzL3wwDoCLfLOyuq3bMfF90csc4YqShOA%2FszpxIjWxea8hLH9CTfdDp2Q58Dk4Myo8Yvhca2xzPHTGTyEUcRPyAZ6FySnR8PoPSaKF126UoyupQXD1pSP%2FjKVaemTBpUqXqtoHj1joYVLei0S2yVYyzV%2BWub0H4wVSNeFFNWJGLt2SVJRHvDiQpy5Rr9Aei8%2B%2Fp7EV2i8geJhYCaWJkOg4FuJvgI7KoyNuJNnEztbG0Z%2FMYMwE3JTnJtfZVz3UqG%2Fqg5%2FdnUQCkjYXColEwKRpbbSqLeb8QH49qcUV%2FpmS%2BgFgOeegYb8vbUs1Aggm5gTHtfqq85oB757UBhvj4cfY6wFDphhJuoJNWy3shomM%2FuXWoBzKf5fSVr3Hr07i3vkr1Dt%2FTy0X5m32n9%2Fmx7qqEEet%2Br%2BPJ0RHPdQ7u1REq7PZRpNNEnLfWmb0Gpg0Wk%2BZX8wBosoaACEtOGm4%2Fip7%2BUBjMPqagdQGOqUBZsmSBaUT4ZiPBFCMlmh8K3SbueOCEM3wNVkX9qgVeyQcjLFRiheyFBc%2B3n3ZDWnMt5t6ZKAa8TXYkSQRcs4XtgxlojSliAnN8zP35WVCRYcu7tNbUuctXnQ6M0tkt1O9NCpzSTzTOfoO%2Bg54A2pbbBny4AicdkjmU43opPWduYBElDTzxbiKXhh5vAnAimm9r0MAi9XLCKwvXVFjNmx9y%2B96%2B%2B17&X-Amz-Signature=a5fbd5d7faf8ce9ef7d1650c4fe4c80abcf34e9070f803880019d575b452ed34&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
