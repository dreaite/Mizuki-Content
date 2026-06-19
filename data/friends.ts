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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3YTJPXW%2F20260619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260619T185632Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD5KEVmYyCNwoQNdtdoXeqNKOwrJ0Xr19OfrY9TC3SnGAIhAKdY4F7%2B8zXZ2mV2MkKY08rXrWJGbaALpDo2NJf3u8clKogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxKsc%2BmPuJltJ9ez8Uq3APyG8CxV64CWqT1jUBYzvprNrmYJySoMXJEcQk81crP6u8pMjF96TCn2IPZ%2F2jXR7r1wih04QojC1jwiJac8nOZVbs7vEM9sEk1T2ScmaAdiYYrttA10HVLc4zvTI1XlKrZ1zIeEfhosuSkAiBLOQunJ9qF5AssWtwU8dOnELy%2BIDCz7A4ZpeCTB5La1zNkGvqpQHkRMtxQK5uS3XA8Eub7rQcdCpSOKA0N%2Bte6j%2BiJEPWBNyhEkyRzNkLSYR70Dk6o2gpQUk2MrFDRIPKehrO6MpeDcYOYRByAhcPnTH3p7hrU%2FrNBzm%2Fe2WK4UIJr0oUWBqjeD0gMMWzIDMFXGH16hlBk3BcW4E1NVl99Fkamd2h%2BmRERsVbNQS1AojVVwYGFVOb3F%2Fah%2FtA%2FVHojdsP6umOMrpjreRX%2BLXDE3ujdCIXVjjMCCFOmeUkE0vbEs1AuUSgHn0dNMzfzZc7BC4MTi%2BEKgU70YazfvgCB2qQkYsPFuXeJjxP5ZFS%2Fc29W1MPIi34us4Q82TnQAqdyFmHmzDjiosI2x3MbQ%2FOxfZQ%2BZ%2Fs%2Fi%2FOvZQY7waKWCkicapmuEVBBQhvjHL7zJ1WV1xYR3OHgNFhMITF%2B0gWwEHmvOQ4PyMTtUP6M9uRvMzDhn9bRBjqkAWx%2FZkNLi3POGQ4m1H%2BO6tLO3q4lPe21ZY%2BdEO7YlVdDByKksfuDEX0fQnQVT1FGGLdOFg0NwAI5V40XH5AqRqZQbfE2OT%2FXAqE4J3he9Nn5GKPREuCGDtmBC4eO7b0uDaM3Fw9uJ4AZKeP%2B2%2Bpns15IA4dOCSFp%2BS%2F3euK2rwS2AD%2BEQ2gKg1yJfvOecqpBJKBfn0zi6MjRuLcrPnTnAmyx%2Bmg5&X-Amz-Signature=d2da982bbe69fed366b431aa2389a5a8fcc84e73a3654157266d56d6adfeae25&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
