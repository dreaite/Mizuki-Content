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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKFZH6U2%2F20260808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260808T112942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCugrmfHRjjByD4D77XNARBPl1CuHA1GWpG63HjLGA6%2FgIhAKzwUfksPEGK8CjnRmU2WYpKOlYFuA6uJ7Fctq1HhDv4Kv8DCGoQABoMNjM3NDIzMTgzODA1IgzTeeQbCXn%2BdxqcX9Aq3APY4IaGqum0MSbepMpgBtdf%2Fh73JhH9BPqk%2FAbFumV21KSN1JiwITTiZwmCIq5lSsxRKS5qb4NwafrWAGJ2ChsNBWf19Q9E4e0YoZfBO%2BHmLrb0mhe6YECWnmwFVS%2Fjsll6QSX1WdM%2BdOukmTVasbWMqD4rM8agajO%2FOCzZtitT8oqHVzH%2FJTcC7wdjQYu0W8JGT7Ld6wZYxyQKZ7aESNAiz9kp1SoQOuhdzHXk7%2F6wHzdrEV%2BSqug5JKwGW7rcRDezuiOY1G%2F3SAfVN3hi%2BCxou1i1byunYQ1dCFCcRycBNzXnggzxHsZXD5sV2Ap02HZNkRJ5FBOiC%2Bj%2FamnRnLTO75Qbp5cT6DXTupkA2boE8qN8fz%2FdzDRsSOpjMDrZsBRcGmfiuwhfjKVxQ1ccrq6lds%2FLymmiRCcQxo1XpKUB9QJPHoWM6e5DFVmekUatWzpFmnyl6hnD2UQy8gzjUObJPylYq0CF%2FgA34XSDx1i%2FIrWowshsyltZhxE4J5yBiOdIz3eCABb73gASthQxK3o7XcKgDL%2BGnQcB6dqw1gtwH2W2m6NbwwipV8YLOy0MJ4ZBAQ3GYG8gLIWsoQmU3S0vjwu0JnWWcTXHpBXgBfnZ7A2OfMKa9IDI04tYaDCH1NvTBjqkAXZRfe%2FOKGvgbY7Hqwocn2FrCLdKrbSn%2FMx6UEO%2FBkyVLrSfXJNT6hD2843Jkvj6CDvrDGRAln5cK%2FKXVZCfhYZuw0Bkcgt%2FnZJbt1wgSzsPAsWj%2BsLOvIcNqR9VKr6txqDb2S4bmOIVIVHOCti%2B9yi77oA1zf7VBqwm%2BFoS%2BJnyxtfhrf5zVm8vw55Z%2F%2F4aGbaGfWSr6siVKaZXG%2Ft37JLB9gg2&X-Amz-Signature=6346b774b9d7fb214b21e3f829e33283c2ca1c567cb4caae954a0c70a7867224&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
