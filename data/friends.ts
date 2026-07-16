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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGV4CTBO%2F20260716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260716T032822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIHBjhf4v4GxDQoboTGYYpx4ovHtLmrIGcLwF6s05EN4NAiBVOzHznuThYkowG%2BFrIv%2FBG%2Fqr4EvIaT32EX8SWdi15Sr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMIWIztsZs28fD3mCCKtwDZgJug67Jm3H%2Bch2wTiTf8a5f99S64O2t5cyFtBMQjxvp4j8zUUWrfdCdIKfgp3DY4SKT4ywbI5IZg1IsPjblZrk9xSP0F1AKJK9vGXqNBfj57THjyTNtgVfoC9%2BKNT3ZBnbLDbdtvb2HrRXlZrfqw2UNr3XRrfY1T4qaw7QpFDz3wxEHFedMWkHvsTsNAq6mMLnnCYD%2FpHrjzWR89VSBWRVruZaGti5U3k4V7DRWLAYFt8InuWcEEHX6nZYUnv6e4wy318RkVoygLa57AhGXka4H5AM4JypRg%2FL9tUJaLLKQKmIlhSvHEJ%2Fbamyb%2B0OxcgPp7hdncdkva8F19TCvD0NV7bwwug4Qu5o73jzaDpKT6tRDN%2F%2F%2FcLyIXS8hGgw5kOAmTt67Ydlv4AvMMkTv5Oxo28HKyNGvQL9bs2kU%2FYMdbaFY8a5m6IqegzyQcMHCh2ZRupCesuuejDIU2vegEwxyQGpMEaqHZ%2BRlsPTLvU%2Bx%2BW29EQ9AKRaWjMkYLQY1UWmnNgjVbV7MkxfqEBW9G9vZaBhH1JEzw8PMHP2NWkn47sRf%2BwLX7GMnuwAAmyfJgSkKGmJRTcyheWciOzJyPC%2F0v%2FeSIHZ5ENne8rwHymkr%2FpUghRF8dfxA%2BhUwoP3g0gY6pgFw13XLqvN4hTium23Ypu4AwrysYUXfOTxY0o5HRj7JGBB62%2BoTQ6oFPgkhno86GSEMD0HKLL54mLTbMsiAjcg23z6TT9MIyK1zsrx4wguwS%2F%2BpnfgJ0ar2SYsEwzYJkmuzj9GG4QdEwbuL66zTvlfRrgnv6XNeOHS%2F5Wk3vXMZN6ny9GZagcd9ypVxuNa2aIXoOWNhTRdpOYQGvEdwAEKUhyG6PFOJ&X-Amz-Signature=5d223dda05495d74a6147a4f780c41b3d5e580071adc9d4ec0b7c18adb522c18&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
