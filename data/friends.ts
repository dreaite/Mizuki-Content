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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676ZBFV6F%2F20260810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260810T035923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDhzhyQQKD%2FmNBMbT0YnneyQWcX20Vt%2BnBtPjtvXaQ2pwIhAMkk7mhKvWYQlklQXjy0qjH5sVtBzIeRgwK88O0Q7RAtKogECJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyrIMtZ9JO6XehFQ70q3APL5b0MT0NB4bdYcP8eGeDXKO7xc2U8K9xJ2AXq9URGcWCTmYl38X0pRTeYkGOmYEgQpSYG29dO8llnEfbRUiH6e6rRvZBbC6eSV9gnO50cp9sXoYzHBgTS7KawhLMH7VTRQUrs1bPdapXL%2Fq7X7pIUvSTrxVZABo%2FkYSGnl92rZa9kDL0dLmlFUjk6kx9P8a4Ps%2FATYkTyzSiiWhyz8mka326cyJTShn%2F4EXuD4FjrfKEA4HZ671z0wY21h8s%2FjhdlLsHHDEnm60wLU%2FcdWqBP8bC6jEOxgO1jm5MAPtCeQXnr%2BGBXmVT%2B3g8kmt5CltJOuzbQJ6LztrYUdFtm9HAonDQ4M9cdDqeh7rcG7bblEx4joLQHEOuMv9NbdR8V9GcSG27T8Bt58oflr%2B7xFwAMouRmVV71eKyLXHW72AxbgLEJZcyC9pe3H7YlmOp8zjxPxyoype68CYPFiiNDxz648%2B9hl2eR5m3qrZD3hMvbZnoklrY7mTvSVtwumxA04fmDNafuSgvSb%2Fbwd4IqNHq73VKWA5zzzzySz%2BvOvQV3XOKifE3clsaoP32jZU7rEOhhusoWmo1UVfREFSzYFWxcW3YXbMuSfznyc7uA7pj9y8t9XkCMNylCnkqDhTCt5OTTBjqkAZAmbMJPljLvnSg%2FdoOkMoRkECpVbKXnuO7QM24dFJl1h88D3E%2BRrdR2jPlVGwBrDNRLkTisQMJVp0NoEK65ea%2B0uub6tTIB2u0oshlX%2Bz6%2FI5uRojsePzz%2Bhqz3LEHokzIfmsYxovXSB%2BVUWN4S90KAKAciHWGXB2g7beMFp4bWLm6FATDRs8CMJux899%2FA6SXbzZ4AycAV0OnoQhB0VV2eeOPp&X-Amz-Signature=62ecad29d5c2763f2a931c9d28b388813fdec81f200e6ef900af5519ad7eac09&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
