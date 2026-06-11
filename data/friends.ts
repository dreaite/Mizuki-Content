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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNUIJP3I%2F20260611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260611T225008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJIMEYCIQC4vr4MOBrsYik5sZXEQV%2FD4TeJUVNCSYohXVdE3NJKmQIhAKADOtrYkXG9hKhpOfelZZWXJRDe9SuYp988AdgCSBrgKv8DCAcQABoMNjM3NDIzMTgzODA1IgxjYkRlNXhbn%2BEbRNoq3AM4tJnRebMjcXuUigbyzWHn0YcGpP%2BsEQEHQyKjFFdynj7hQel59wNOogyHYMU88w6BGSfGfrRdRf2jGN69Bfxt3WWj2ehbJPH%2F8YjCPArtJvusT%2F2r6WKguIf%2BWOroKlxqacWvWXr2UltA9zay2Wjd8jW78qCBPUrmROWSZGnWckf1mWv5LzkrYlri9RKJWI56BPFwZ1BEHS%2BgTh1AMMU%2FhJGCsisi7v%2BKeQ%2B2Vfyi8BsGfO9Nj8bBh3nVUzTls6guAX74MkHL0MSAm1JBsxkC3Cu3D8X3OR%2BQjwXKxHY%2Ffq4sivL884sdUvypYtFz6lds1eO2W2J0jo64u%2BnYNbIY2HEmOpNrcvMldLa9GlFb%2B0MWHv%2BoeD5T6CFHiC%2BUSQvBXoWqKALDFq%2B03mYR9VepJVxLLAHjnpOB2wmiyL5zbH7XJI3tdwsaxhTS27C4UTp3OxGhlMFR3UNTpnmmx2RtAC32kHn9H9NNLr4dm8LhkbVXFtknI%2BPE2cfvXCAlKAYE7uBKf885cKUFNpM0MAj%2BnWahHdQ9BGQbcrLPxfqxlcJSZyDBRyFXWPO961MxOexPp6%2F3LTxWaglr4soEmkzBm03sMeYT5yJmZgZfNb%2F%2FBal%2BZSw7qRpcQVvwoDDl1KzRBjqkAVtKRUaRBAoZuySfh9BUdg%2FlDGuT%2Fnf6yb8rqJr1H%2BMf8fKaafpJEHQ6MkMtmdMv9oDXqzdqxvKEZdciqZecKdxWEANW61xxhcsBZXQuxlx4oiezRYY5E8CIp5j89RkpJRbk4j4bdW4w11EcvDwsKPg8WTzw%2BWcfTAaVJNqQxhwq6gJFt8UjTRWlzaNQVYb1HO9AQK6K1AnS2Al1mWjaW8POehv3&X-Amz-Signature=0a007c7c6dd991ac98581cb546c974c651da67b2ce86030e843f2d2304da8e59&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
