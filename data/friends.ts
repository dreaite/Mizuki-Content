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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJNUI6E3%2F20260801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260801T215728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJIMEYCIQDvX5ydCI5pNKGPiNQCqNxFnCjkhByVAk3zPZEnCkXZPgIhAI8H50x5Yt39JZNm2slCE4bmRwDcvW2m8cXKVcAV2lIwKogECM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyOdSYCHsuxJW0WWa0q3ANc5%2FjqgL%2FYN1zwBE6o9vZ6EjRV%2B7%2BYIaBKeyicnDM%2ByNiUkj3mvQVCJJ6W%2BKHeXelQZCPHzbE8cqFiYs0dZy%2FsrebDulPUczhFC%2BxWZHJNigi3BECdvszQ5EzgTGiglXvcSBqbCP7%2BVcfemV%2F1yhHyAjutecsbuKkaoo68PfcsEqLgiUMr4t4XcpZ4KlGTw9Use6ed6DtRB6NMzgVS96CY3n%2FZCijaDrw%2FmbBxAN7nfczawoa%2BQDfud7BgF6g9rw1HWl%2BXtuG57tezLxsDcNxMZFnyI%2F5U46DjpGYsiz34XpLxEc%2FWFldN4vp2F9ecG8Rp0VtEhPZkpgjtzdocyNYu0Arfd8FYHkDG4pZ%2BEGvTuY3YkgNn6NP%2FygsxRFHkz7EOOpxLSTMUGRq4feEEl2fkPDP80T5N9bWSVfJ6KJhqIVI81%2B2sIE957p%2BUUVxpI4I3UuqNjIKlqfwVAOvLgpSZ7etZ0PCEEh3%2B7kJgnLqQq7gHvBnTf1QuUPpQ%2FE7LMLOrGeEh6FL%2FXbrlTGD3KzGey%2FrGWWSCv8bfogzwL21YVEWhQ85VS7OCIDFtu4xjytah8q9gRI8bSwNyJSiKd9eZuuZ6jJ94X7bu0vQPVN2%2BiYpo1GmRXL8gJNGj2TDr0rnTBjqkARsAvlcK%2Bq73bwhw72PwtuXj3WRgIk9VMlos%2FvnLNPhiEZBiHJjUSg9eAmh4v2a7sBnAIROKmBativ7sOAHx3snUe7fNCQ0QDcbcuAytElhZuZv%2FvgSbncj6ry%2FVSVT0I%2FX%2FLm5NwpQSiS2fnS5peKusxsOdtgSjxGRo0iiYRdrj0T16ak75SXdClzZ034dNa9ksSkClsLwM5uSX7yQCFckNj9Tq&X-Amz-Signature=156161fa42abe1c037f327efbfa6b0b9721337262c03444d99a14d9e1fd0fbd7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
