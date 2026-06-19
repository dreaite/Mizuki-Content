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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657QANCCH%2F20260619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260619T014336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCdj7nH0uqx%2BG%2FT4odPUK5prPTATr5fPkoamhjEB%2FqsCAIgHR6mNHbCjJqV8f%2FBM5PIrCx8W%2Fw3deFHmK%2B%2B6fx3OLYqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNwBUOi0yuA8N3YdmyrcA6CvwkQKBrTIdi7UYnwPMIQGbRVFcakz8DOJIBrVvb0eMCb19aYPNbyagbX7OO%2B%2F74KUhzd10JF7pDUSHbzr3LdeJrGsO2Ea7GNGAU6AKbTs%2FFM4iDQkCisAE0UMV3d2Hsg%2FmNV8i549oQhqeyIm%2FZJ7ciIy7T86h7e1%2FJgc%2FDF7wx%2FRepPnijh2e3IzfVkzwW9mlPg92qeuACvctURWqz2GJXR4KX9bogQSw%2BemR1FGMT%2BJTTWeW8Oc%2FX3KfcnAm5G%2BrIr67E5m5K6v9gAiHqqruzzPhcBcXH6aBIa7%2FGMjLdKpTRV2VRWmAXmVZ3gJeLMpFae%2Fhet7Hr4aXVh5IN1QGXfeco629HY0zkmkfMjCw9A2TEwBY%2FzRh79g0Aw34blOsmqZ%2B%2FyfOw7MxWUJLm4w1nrdwmFZ93NDuvxhct8T%2FpP5FCsBk3MmmmP0j0nqphUL4mD5XKuZa3xVahKNEpsO%2BPSiFrmgDKCehCjeliw5YmnpT1DTlguQph0WE9u2ziVjql4lMJ4BxyxFnFTb%2FqtL8ghHzuUR9m3u970iWpc1t%2F7umyLMIcoDrKHkTON7qNOWf1wXTJGs8qbJYbUh4ge9Zg9Fmm%2B8VSHHZfm0UngIS6rCofsAQVSBzxIqMLuf0tEGOqUBPkRpKflIl9mqAdxNWTGH5ND4Af5S2YisV4WotL9U0PSNbxJ0y2JNYohzjAtR%2BdZZqRRBR2XqsS6j63j02dYhUKt3%2F01uapDbsjZn7hwgEkq5knV56qNLP2krhcAWOTVuNafWgXa9NSY83PtHRazOo%2FFa4gge%2Fydc2oRANrDaeQgbiIBufCxVioqGY7FF9eAAJ6daKuiM26XCXZEQQhkwTk7e9sfE&X-Amz-Signature=cc141517b4912d7c4125006b73ba8b58b0c70dbea015bfb53609b39ccda87ebc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
