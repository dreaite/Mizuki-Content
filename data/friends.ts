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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XZLUWT5%2F20260812%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260812T081831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDX6%2FKQI4%2FCxaNBuBy%2BnA8MgkYyFeAB3LQtrTvt2Ifd0gIhAISs7zwA64KIZtvxMZ%2Ba6K34n%2FLM3gUqx3pBxbM1Z1SnKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxoCaYRh4TK9DRy%2FtEq3AMHnDmMhzJi3NpYFJDqQbNiufdJX%2BU4HakwWTJwpWGt6Nc2ZaQNOpiMcZu5prQFK41Kh3SucgHdllqmPs7h3AINX6GtV2iQCAnbhz%2FKQq%2FImTrUQDWzPHeZA%2BcqzwtQqvISZDu11U%2BuCyxDCi3ju3rqSh6Aav24O2z0LWUcLh4uw2k67ok58tOEhpp92XLIKC3eljRGPvVSMPbDmNQOw6JjiHq2E25o3wrZAsX3vvBPt90RsQ6VIKPu3C7DxXvp2YCILVL6qx3mKqO%2Boew5xMWWmqS65ZaYYDzJgWwN82eAHAWfxIecmj7stB123YEPkdr1Zr6fEHPt7Wtb62KouFn4HNiAoL1IS8SsfjKAmRs7nJruUXUJjXcGYwu4nqUrUrdz%2FE%2FAjpHuzspEbrJ8jaJ9UAfpUoyFS%2BQ8lyqoBXNri3wwxTMkPYnNJq8IgVThbYEGMo5rTNiOuqZXy4mYhJ%2FcySvrBHUa3tmipwBEqsBFMVr17ixwUCZLkl9IkfDXt5ggpIfb7J3QKA9B%2BIw%2FulT3JkAHAvY5WKBrNtueoy8hkdjb2pzsQ8IE1py%2FVIZ0ZNi87NGMgP5D%2FkyCxry%2BIxAPH8tDNJx%2BhKRGWtDGi16z%2B6cFBShCwR83x%2BKUFzCmk%2FDTBjqkAX4vpplti3U5uE%2Bja6o04Sz8lcLulCAnTdgkqU1RCvsaFAHcOObwJjzScKpvB3bRjstelWxYjdMh4jCCS6eNkSUGM8i9xl4YtVuMIWEjGWrOBGz692vvBUbSS5QM%2Bkgio8DMVdGwcxgjeVHUcRfeHs9QCHnWXU9OY4Cc5aD56mEEqZri3BIMhnKL8TZkf5UNakP8RVhNtfCMvRVI1UXZT6cj6oNI&X-Amz-Signature=995f5b1caec9e9039ffb948aba110d83e0524ccaf640ba3f8addb18fc1471119&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
