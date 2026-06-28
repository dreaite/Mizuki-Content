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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675LR276J%2F20260628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260628T230410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFzSNJ29q40zP8y5WrQJUPTX0zFM8pVah9iVo39sASTNAiEA2A2gL9zScEdjDJEaI9EhyU8JJ6v4LAdGM%2FpzYsBlT7oqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMYIyA%2FN7VTBHfS70CrcAxkYg99%2FdtOwg3Sdf9DXodJrD7V%2B%2FhsbZeEqs0yK65wDmgdGNURzeJacdYLtV2hPo0FpNdNEsJJdHsSmSzsQLsuDri1Hee9q%2B5OaqkBNyyRdQGRR2byfk6ANm1IVj5mkb9TbFIwtAeQKv22DSFM23GASZHDaRBscX7zDGUUUc2kG8VE9YERWGjhCtuXUSg85UE3jO5vaGrdzrrJ3CK5NvAKvs5mWgZAytNSRmHDVzwM%2BXbLcvEcxiyBNz8RSC16hQtqhTpRDe4JMB5VGqkKAl0mgkMbnnfArQk9sy2WQ092pm4%2BunOcmJPVhIrp8SLcbU8yA9arsrG%2BfbxCyQvaCVQQitDHImmosMEAFSQr07NC9q9nlOtS%2B2ccDIeUvkWaHt7Eee4HMkLWfGKPemeJu3hRbevGKHXS5ifDT4Fa7oFh93WZQb1yZKy4L0y9zoEiXrwP2yLaIJVBj7sCj7LipXwrUsviX9wS2A9qNEgdME58Vf3OiPC9p0sxQdvEdS2cuiI8sJvxLly4Bk66tATFCWKklstgiI%2FDu4BsAQhpJpLfP7amwtx55qI9uZi8J7e%2F5BGSlEyiHsQN90gK5j9nfMVmZz6IT2fvn2KBHji8FgJhLIyfLKa5BDb%2F%2FHvYoMMOqhtIGOqUB1pqSxqpsoOeze%2BnB3iR70nNQ5%2BWF1%2F41FL0%2BF1fbV96cRMLZPBxifvOBu0KdRYJpYottiIg6XqaIFEzI6RiqGugNvzVvxXK9IH5iQlJ%2BWo%2FXNm00iZfqOIwuDZ3dVq5oMNczw%2FC6SeCMc0%2F9inxKvcIHYHTW8DNXGaUjxYnmD%2F3v0ldL3BvlKXSVHqaAank%2BnbH7awzuLEsbOiQf4aUnojwxcluz&X-Amz-Signature=7984c6b7ff1c472bcfe0ce94557f56aea714445847d38cc65099f051c0fad4b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
