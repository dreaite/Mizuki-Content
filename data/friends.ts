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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQIGT4O6%2F20260702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260702T182556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIALG%2Bkp%2F2bvEZE9JmgCwOpBDNVpeqMnd1SJbuF5MV6r2AiEAy5wm4lX%2Be6bqPbLlcpl%2FT3hFoOAD6g2Gl5RKckbyLR0qiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGFlEboAG0oOSkmRoCrcA28WTxbqmTL67hxTuJRZsUdjj1QizWpB6KuyBmdeEsBqfzptpCmiev5JOMVaM%2B8XddTR1CVOeTpwWdStjNxE7o1OUxmd4CbV3Oj0o4fZMAidiqn89EqT8%2Byxv%2FeMPUjeOlcgHCzPdwG0H57SJJVPscPKAb3WfKfP5pp0cxzrkQitgbLBbwDhH58Z53bWZhDFxxWTtJ7Vm4MglmDJUJbSJ15e6kwjSgWUoJw%2F%2Bexz8VRUETgPC94EAEEYW5K6U527IagOL%2FN3oX%2B3vPxbCqyp%2F%2FIAHQQRylmguwmCG0RlWlArDZy1gWRb5klDT4j1de9qA3Fj23Pz17CFTRbDRSSqDZnfl9BpzKLp0FjvRRK1oqUKQdWxqTIGncKi%2F8b5iQVYEKdQBKlQl1joytcAbNNUyX8ymhJaKQciC9WoWb0ufMwd%2FO%2FDMI8WzB6MdakJ7Ca4T82HFU7BIrlAdWFAMFuvhO8KmMBrLuPPK7fbPHmvY1fl%2Bvir6ts0i4ZEkvn%2BjWKl7KEjeWTmxSwg33LUwGUEwF905GajARD2gJoyNnHP4ujFo8uvhpIiQRQsbjEWcr6t%2F2OqOKVRWvockncIKiXdc0ncT1xagAIDj9b9%2Bn2fj9IUQ3uBBW1RO%2FTg7%2BtWMOrDmtIGOqUBI3QCnkmlgLStmzNX4%2FxXCEZmaY5BEJTymsiMxPuvKo1I6oo%2B40O8aGi0lR%2BHopm%2FPiWGhyv3qYdECPZTtFgSLwN9itXB%2BNF%2Bhsbsv8S7Bx80H0DSfOhiVpon0VTvsLCbyAeqB4a9Pc9Ecb%2FsYnlEhYQ5gkznwj9OBQQAioNUnxR640gEVScWq92yQNHuc8t7wCSvHy8F4jLjsRTbclxcTVeogu%2BC&X-Amz-Signature=9bc7c21051c2019e5f68f600da7cb0b78250ed5fce85f925f63a78f54e2a9050&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
