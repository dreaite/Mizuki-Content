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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VE4CDAIT%2F20260725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260725T133729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCIHTfxnb3M8l7L9oX7fKPQ%2Fs9hlFGZxuyCsd8WBEN%2FMujAiAsIUGVwv0L91kYZ7E%2BpZGv37E70%2FSWTdmgkC8mjMCgfCr%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIM0G9otvR1Fe4iuK8oKtwDJehhh7UQJBkX0gzilYoJAqpw6nZGbg7s5DdGPZbY9MXA3%2BU653euq5ZgPPNLloRofGSTavw3znVE9Gf%2BXqntOcU1UKjZkdAoFIvu7kWUA%2BkFeBz8J53kTX9c1QtS4xWMSSZx5E9aGNMm%2B5nPNfEb%2B4MGTIVgmBU5pn1T3El6Xib%2B17xbp72SgcqgQ8mB2dk1eSguWCSltZ5DwIflG4bjtO9K1k80JwRdkwX9jwPqdHckvP5CfJKM2Xq0NcMk06E4tbnRFkcLN%2Bpk7ncd9AfjToH%2FCUcqcJfGx79Cm10e8Z8tKNnMJk0V5gJ5Ec4A3tHVibQe2Uxth70c4JKeezczo7avkE2zmNkHh8Y8tcOQ24QNR5EKV%2F1U17Qr%2BsxYncAGIW%2FJLTKWoIfclgW2nEHiHsgho4NLZRv1wuVs%2BeCUDRCzJtUQssOTfVW0EuzUy0QoBpKdrxdKZJectdeGizjfXeojiEhSO%2BMvQ2UBwNXejLjjEvzggzh8fsWP%2FcYMVTPmrNF4DJwbKGtpyoYLB22GJx18IyP%2B6JGT%2BDTsxzH0gEP9lrWAIlzJnaAwt4VsGP1%2Bd9ABpTmj05WaKxZ42Su8R2iwChYFRglNYg2dMvrR3eOeQUQHKrZoE7M%2F9KwwreSS0wY6pgHsW47QWqdpxh83tWOUzfRI1UqsPbDcouHNj5FCfSmKpZwI4oEBUGQY1fmsclqGk0q7Dod0FYjRIj22PgHG4HxnpPmwrir%2BYKsh%2FMkSbAAZ00OQBRQLiUVsSuXczdQ3dGujBVX7nJl8sC0qcwVP7LBeSHovDZjps%2FBCQ7IMnHOAAltgwtquqxwTYlSM1ix9pizK6R0Ja2X9MdbHD18APUYm%2BomJ0RCG&X-Amz-Signature=236256f07076ec7934ed5769ab02fbe84571ce53570af0a09269b77106bdef86&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
