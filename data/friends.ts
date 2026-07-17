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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666A5WQQJU%2F20260717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260717T205740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCm2HEpmEPQRX2%2FWF%2B0D9R3SiG5z4n6RDGGNs6qm7c6rwIgV9t7%2FR2B7CuNNnn4t0ODqbPs%2BU%2FJaqwZUh%2B72I0pPP4q%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDMYYrzrvje74%2FUoUzircA9dNznnrdNfOcwfKGeBHxQL8keGXHa6Znsv8u%2BG7E%2Fk5%2Bx5mz5TGEczlTDqb5er9ZOXHEuB3SWd7SnPIT8MznYvD5tBBYxtztQKjZzjON8STi65UmyUoy6R1qXA%2BWKSQEMKy6VWdjLqfcpGAiMg79cMkRZJ3sPbx%2BtvIHjoPBkZKtnMHkEkmip8vhyJGAHB09TlKnBuaaeR0zz%2FHx5VMVwwaWdnOGpMvXSN4ie%2FdeSOhP013NDYTW30MQGlibS1b4VNij6%2BiRnr%2F%2BveCfsNs7fllYBHOGmZ06MBU3Q5bg3dZGGb5IuTvGFttBd69FKkHOpHRFdvtAFV5m2Doyb4goUHI2cEZ09uE9v8pzvAMn7iRyoUVRNUCxw%2FBYV85SBaeyLjSuPhIQyvKer0tda5qgU6ZENjiO%2FGce58%2ByUh2%2Blyc3mgtCpbkkpKcmNHT35VS%2F4mhIemLV%2Flt%2BLX28IDvnLC7V4D06fkZO5YJOlcsYYyHlE8t6wkA2gIxBiXhbyXoTaLF%2BUF1516%2FycY8t69%2BEArxoOwG7f4fhojXiVFDFf8SGYXyVL4z%2F8RmIrmKhdNV4D2jX5t6SViB8XRI14G9TdjgiTBnJkvM7pItO62It4ri19QwX0FymbGHARxVMIyI6tIGOqUBCH%2BnytDd6%2BTDNavkBSKJZnLj0lBbJwOKT7ONy8iJF9Gcj3jgEbhfD%2FzJoKbNvIFKZ59VT0TsFkBy5yswcC6C2D%2BiClRK2BG9H5Rgfl6Y313vuYKYAEYjA5MC7HB6HrORhrxczjW2h8dyvZNmWDTpPKBnVI8qUA6oApa73FbaZciRo%2FZxCVHRHSI8Qs70agTzA8jFZNySh6a5ZO%2BUS%2B%2BzRi6xKKYh&X-Amz-Signature=93ac4ea9842d821b6a62a2ba6a5bc359fd91594deb99f7e5f94d34951689b487&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
