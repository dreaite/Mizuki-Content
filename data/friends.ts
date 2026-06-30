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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXVDK2OE%2F20260630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260630T121019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDN9PFmTHeHjv%2FwXrbYvHc0l6J17YGe6yoFlqYdarT9SAIgdRtjHyanxoNU6i4mk9Oe9C92PDLEfaqaJr9Ezs40uNkqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNE%2FniwTa%2FC%2FnLqiQircA6ENZCCVQe8sg1kOr59tjcYzBqhnKk%2BAzpaCnCBBV93DjFTEMJSs7VxSn29N2HEJM%2BG7ze7HARe0nq%2BznBwTDDa8JLMIhs%2FrIUDQPAcsnmURivkwuJxNS7ZD1jsVIyT3m7wRWysUKfW1X6%2B5Ll6dZ%2FBDIS%2BBB2%2FBu3dOHO8D5UUMkpSOLE1XYQD2TLwbwQNhVxvMg4X315K81b9YLM6RpCx2eWIGkcvEbJqoRgQi8T8MkWLUotxqwep1%2B1K4BdOlPRTtCNBoNR%2F9xbvrLoYo8iNYiINVDVGuj2k8g13Dz3QXDofaIZaMGehhLYPR5akfbU5syoGv6XWxWKoQAw5EtbDQsHhP%2BWKIpNOY4kL1t3BnYYWizwcOX1SqKuUQme97YajepmlL1jyPPaA6E3Uqrq%2BSQRdDjXC2IFpDC9GeKHUq2gli8DXa5XzLRWBbviSRYobQHoCVresdic5NW%2BrUImn9rSK%2Bl24T58jteaz1u2b9mqKZXpavwVAhSt6qt3xRU5UoR2zHTDTLjFO1iwxGN7JRc7isCV0COtJcC5ZfIiPVen2YlumVRXoryF0A0AdZFV42KIJDsYZGx3uzR%2Bh7v%2B1puYfaSMxWZJu632vqYE9zrQzKy3gJ31HZDQPTMPi0jtIGOqUBrOKI%2F7%2B9kJyvjfZXs7409TLwWIfdT%2Bpe1NySN3GgcNL3Gq0gDEBmY0KeomX718hsA9tmG%2FYPBIioMoSi8a0Eahmr0uM62edzOPP69qVzuGhq7xOhfdvwG9ps8B65f66ZRvbUUUcL%2FB3G3Emv81iJyVEi6OumJV9nmm2R%2FysweDXftg1BCDUCcPxbTZ1Q1ChMHB%2FBCJhkNAkCk%2FHIyLa8lVpd1xRT&X-Amz-Signature=2a97252da17162893f37a7ed1f61cf5432c4d59ea0c4715058116a4c504a9780&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
