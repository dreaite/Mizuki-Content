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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IK5AJVI%2F20260808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260808T084240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDVf7s7NI7aSL9qAh%2BRXcEiRlyB16dyiIafkE14iBJSZAIhAJwc5MMZzJI%2FNr40aWqOPCPRAMWvDRp6X%2FJOyBArTliDKv8DCGgQABoMNjM3NDIzMTgzODA1IgwFZnjWYkE4fT6Be7Uq3AO7V8BSc%2FVSuKc%2FKwH1kp6X5eYlbcOE38usWbSu%2FsPIenTdZoVMbzj325iokuN8vX6E5cVDRnu2UuqxAGdH5oySoLGASp%2BPtvrNAJUVuGBp7FoRbuh9tVgkn9%2FAK6RxPl31myORd1XHwcrqHLs4OVDluFloIvVRuD%2FkfUjbG3PMkRx09%2F%2FCBJw9VqzlWJ6uGDKPaFxMuOLv4wo7YGPxoBged1eW6Bc8IjrCWk9DaTPfQzkPxicEUVm%2FeEvNPRDgRtfu3M7bKv2nsQpLVUNpDLYtBmVKriG2zeU9F%2BzhKlHzjLtYcCMIUYGmFRqtlv%2FeQYWn3OzzPi6%2Fjwcq2G%2FQyehoL4uMDTcspi8zx2syUScFJ5qqubTli7%2BN52fNDbtYn8Qc0wTjoq%2F5UitSTW1XueTtE1tLcu4TP9vxPLc%2BNaj4FOTaZrWhPSZ7GfznnSEnXDxKTBKn8pwiO60oxzmqnNb1TGkzLWpBgUX7ik0Gp6sMYayxGPqVQfMvDuGNCQqLCBD64tVb9y%2BSnQMQE54qXsKQ9A3QAv%2FOu1DjkOz6iFOw2%2BDtKGFLpM4wPDwFfhYjmKiA4LF9xNNw2KTtL65eYayEJT%2BlUwS%2Bw%2FnCFnxyba1QLPQWv9N1A60v1XESljCnptvTBjqkAYrDByEGcE4qQwv1iAk10wPM9O5KvjiyzR744ZV8zn8%2Bo5FxvBNeRHdzU3a9CeQNVVUAavJQUJQnWdiNNMqC12Z8zb9pbSK1%2FlP%2BUX%2FKf10in8s1r4bfKiXeKQZwljSLcB4CXsspKjQaMzt6Ug1fr6kK0LDOmoyqQL3h1XPmlHkdepVtR%2BJ8FXkfQSWeBQMGuNySACrLKLNiex6wFgWUAgy78Nky&X-Amz-Signature=d2d4dc72df2854b31e4a1327c92b01ae1586f535f7dfdce61b9edc8d0f59a947&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
