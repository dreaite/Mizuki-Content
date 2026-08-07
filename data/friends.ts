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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5YIUZOW%2F20260807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260807T165820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF3jKTN5MHtBy2r4QKgzD%2FbOAnNwUDcEahKn3lgSI6%2FDAiEAgc%2F%2FAyZCKE%2FoBWdtB4hmvCBtv5eNknOyb8J8E9mTO6Qq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDCZzPqdAAZlvi6P2nSrcA3OrsQuMr7DMW8R3nAXYBf4NZAizl%2Fq1xr%2FvnygrI54WYL3IRd5JbHmyonPhy0GeFvcZirS0kiBWzynj01aa0tNMstO%2FGg9NgPD2HjdXjtP71ijlM%2FCHwVo8ClOL9cZEaISlj07kXqqdlcL5oOGcmutx3qCF8gP7oPYDYTK4TSc5b9Cf5WZl%2Bj8x5Xgpxm%2Bs1pRadgcb9rX%2FdDSpjg6rdlaxkoUE2UsMlBmSk9AzunGlJScCafgbgKR%2BivtyLQ6ngEvN81ekJiz1NcMCWQfI7LwVkRoY4BTY%2Bd4H0T5Opvte16%2FQ2Ynh5%2FgEFN8HMLrlWM%2FP0xiz5YbMpMUHw04ffkdY42NYkqTTbSaaVMSvAOlg68UjqEikwFEWQgewbxo3MiOvo2c4eBksvJqb4AS%2BCIybnvna8osGUaWwTe2J4fEok7o3X9vUW4OZqUaZmilhfZgU45PRiIZwn5TQ9OO4SNPV4UprwAOURIWJdjHZ88lzgFP2oTb9%2F3%2BbdeS7faCRWkCfNO0W3vhp7o8mC78HFdLlux7UHAyEoXhva0Ry7q6gvRFT3dBXlKEwtWfZ%2BEe62YKJSCdLw1oL7B%2BE%2FSgwH8VcvKg6wxSmJylVWuX%2BPMVAZknMj6BVwT7wXXAOMKWW2NMGOqUBj2YZfkXh3cwtrC7tCr9T65gTE1g76ZxHqALuhNvsBij0I10Lf5dlEXTixMcZZKlV1Zjqy46O8XEKdaWICR0iBH5BHTw%2B96AifvHxr56SdMJOCORpGG86l%2Bxb6ckshzwvJEfV3FH3K73Bwp%2B04K2HS%2F3Bwd6oMNw1nU5EJnYptiouaAoO8%2Bv58HE6y89oJhoBnp96Zr5MJb1z2HEH%2F%2FsVZ%2BIIiZG7&X-Amz-Signature=d96a42dbb903de973019d0e6928ca9d6dcb38a2377008f17cdcc7f584d3e9048&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
