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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IWPVUS3%2F20260616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260616T042455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD5KzzyndK7bZLhiOo%2Bdh4tDU6MzTfhNauYE5%2Fp%2BH5nnwIhAJIFDQKx3LAXnFTlAyapxEj8tn2YgEfAUKv1G8G4VeaZKv8DCG0QABoMNjM3NDIzMTgzODA1IgzEYqu9HCovgxjuh2Eq3AN5Kvyu3UvSIDoXnZqL5Ijwxk5KSuMhAVKURcRzqnFS9I1dqfmxbVPXInsJ%2B47QWJ4Vj6tlaGSoY1C77tG1Z0stg4ZCazxd%2FC1n81veC8W9Sb9OdsTj22NLRmBOrsucy2ZceKKCHfxOLU6ewSfoSlhq%2B4RzbDqQra7FBdnjobK4vqv9LXPZ1odSL4i%2F2McYEnPJGDfmm3w1nB8b9Yl6ggpONOAcYtpjrilFkKcC8FORqKOiT%2BrNbynFqyz1HQORsLkWV5dBI22ZhJ3z5oT98HFdUKaDG7JczFW8CfmUhnQHLHcR%2FGPPMHzqcKHSpYtDA%2FT1i3BDqi%2FqYQ8d622wQ5qmdjGsc6%2BLh9SnJ7oMNXuvovMS671yK711QIQpdIFqzvAOHCVsgSiNeR9rct5VbXqeWtTGX9is7oCAvWDGwtnIV5KuFyTJLBX5fNvlpYvQUYF8rwdKnq%2BwJeinZvpJZ%2Fw%2BWekZdOhB9q2PRwrsqAXvca%2B4vBWlIuc5ohu6E4TsQj20W3tPqQlHay34sGUB3Xnfwbpbr6QU5qS%2BY5eMY9dEf1r0PKt6AP9kdjFVBtVn9FyvgbPIYtNkWGu7vyrdUPRJTOh8S9WsYmLSwICaiVl60jaxTze1CxXJ5s5lajChi8PRBjqkAbuUQgzqibN9%2BGjgPHuO8IlwB%2BP7Do2fGahHXBDNtWaIqvF%2FGwP6hGU8a1JdOe55R9LiW%2Fn1Fa2rSCYpoO1Iu6iSBfT8t3aYvTuIy%2FaE2QqZ1ILe9cXhitMJQnUT%2Bc9GNZtHKVODgEpDxBwBJnHI6rA2UwPzo4%2F9Ol%2F8HHCshPxS51onpZCtVJVN2iKBAzBK%2BRlozD0mtYqitAjGqZAc1FUvqeh6&X-Amz-Signature=8b37333646aa5e144b25c78b46bcdb20e464984621a5b7b1cd6147b6de04bac0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
