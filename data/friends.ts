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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GKZT4QQ%2F20260729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260729T150828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDthOiMYDUrjUDa8vc%2FrZsSPVERL5Mx3Q3zr0TTEL%2Bc7QIgeIXYwzA1ujC64gYynbKoX0XugxzomjxUwDGYC8RkHCYqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ4zU8epkLH%2BKlz44CrcA3lR%2FzcCr3R91BrgVtJ03%2FdCBeGbBwgsNxLGFVRpXMbN0mrYMt2YKYCemt12cLBIdB07tPY%2FzlZYxNXhcXiwhXsPI9o2VgE4TvB1pTUeR8MzEp2LmwiDi4JyKnLkoEXFMehVWqL7zZ23R%2BWX8ku4KEDGMc%2Br4aJLdXM9NWTUqqrcVYhl%2Fp9bIVet3g4x%2FdZJbngYQXTSmEOi2%2BdLg%2FsxUz5uUEWGXDuD3aFnAAjTUUwg9awxmpIhjQLr3tUeyZpR0JVcD3mR5%2F%2FHr%2F%2FQNpwqx%2Favdp7lxJvToa9BSi9NB4z5i5CLtZtyKlqIEorgicrOVv39wlbYOrAKH0SxdJ%2B2NnOzKbuOEDSx%2FtytpngIvf9TgVxuWHlSqzEVe%2FxGFRqjgN8pbqHFPYFEko8R80Y%2FnpUg8kLnx%2FBZbHN%2BJJqdrW%2FdKs3gM6solwMTsxEoNiOaDjVXzPjdhIMANlwL2x8atArMbShxbs4qcNGsoQNL%2BccedFRTB61Dxzypw7ujR2q1rNBiMGUTB2YUsQBRBaQ%2Bk0wKfUfc8FJsF%2BlwrX0sMU%2Bc%2BkANIEuoU%2FJm4B2Z4KYOgTA4EUKCDJ1XdTEDk1IAmriiOKDYLr8H6RZ5dHvOaiyBiDTmQhJoBXmICejaMP6iqNMGOqUBXG3FiNE47s9iPSr%2BPORyQqwNKArGM%2FTrJezmR31jaIU5XdKrz1gh%2Fj9tWIQAkmRkGQU5vh57%2BFabcijIZ3HMHqASe8crk4w3xpQp%2FqIrdCjKWFq4EFaZ1ay6SaF8Q33T1AniZBQLCzCmTCcve%2FKl9n5gJCeKNhsZjBl4wzbfflmSZDX9MKTcco5h%2BumGZey7syu0Q3hVdnsGuYbd48ySn3NOmgP5&X-Amz-Signature=c89ccb1360ed9ef2c4e75efd5d96f2bc165123cafa0fd38da494a56af3304c62&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
