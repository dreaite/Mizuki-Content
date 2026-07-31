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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VZWP5VT%2F20260731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260731T075110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHJ7nisTrg2lT4ekI9EIluopqgKVRpHgTdOWBRb78w92AiEAk9yCXCIugQndzl9RRePVeXL2s5VegnlPk8hk3%2B7AqPoqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIFVKMC%2By5VFwjNmuircA7H4hlJ620OBIuqwEnDvF2J%2FSgBj2jVT3H0qWKdnP837geSnb4HyJiTOlRrQ%2BfXG%2BViKYL20bgw%2BHAsmciYTbwkxcFDJOrWAevYLL7LMKPZvh9c1dlAYv5601qx3HjAnD4A4LNLUAS3AHV4c0sUYzvcGQsoDfe6CLgBk%2F%2Bcnmjl%2BXxPFODelZsP7xxuZpwnRr7DTiaHlEpx3hXNu1ms7a5wKC%2BZnIPXpTmzVgLudBl8E6dsafc57VDN1ZoynObHvvIC1%2BlxkEAjjiNcWzITRIoJc8dA1gkacnupYwqZyiyWj4vxEcb23TEHtwNpc58pzH73epG1mVLU7QMf2Vyxx2OFuh78J9Samw82UstE4JD9bqdm2VLV4lOSJfjK7Oj7%2Fhf3xoIv65Cp6EGS4CvDvnMHwsnvZmkv9vGvCB8W%2BI0SPNIjj04b2rTAzAbee994tOkMSBEALr%2BdJbiTMbN%2FTiah5bO3ofnnYN3mq4nMPUvyoa2OcfN84YRUswMyF2GOT8CFULyZIWqwa35Mqyz67F9LrDEGEdALbURSuPCH7W%2BTtE5g%2FlNIecH7rt%2BvXcKtUnjREMwOx62peqD0gO4y5iVuzp07uacgkF1Ec1qInkXyYsbbgZIlMZcP%2BvDn4MN%2B%2BsNMGOqUBkLXsCD1ZawS5XxdISrixAhx%2BlrDtq17UewWvTbgUQ7bx61nIKCmUbuKZOVf4DHhxJ2Jp1vJ0fgdYm%2BcyXX3hptaG93TEecsgO5SSFHpFDi1tgVyuUMNpUG96t06r54otQAUKcLur0HFBYaIPa%2Fdc1y%2Br1yDQgUIfG6CdAQXeMPx%2FBU1551KOF5s4Be9DebfKRh8awmHY%2F39QCsRiHYuwOJ9TZL1G&X-Amz-Signature=9ecdff8bbbde1253b6ec87584b08453e1924cd3dff24d1116881870bf71ccc53&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
