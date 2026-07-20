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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6EZKIQH%2F20260720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260720T155140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDfZuoOWuokFtFPTQ0KQ5YtkwMuTp1lKF8CROOXLuNicAiEAt8Q6Jylbc%2FJJURLtq0Wq99gvL9yuqsRSyNjPstSKff8qiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOlIClb4V%2FqtyOrQ7CrcA2TE5oEBcBns6NBx%2Fs64oaJatAb3a%2BDezbd8KL8bYC9CQRsQYjEP0ePOtfOShSteE1aNKDuJnotJl2FdqMQBdgY8AthFWTF3lKa%2Fi7elrND0BkzHEZ9rwTA2Z6HMqC77frnmI4ZI8ntNRaMr5Q8%2BuJ48PJ%2Fd%2ByBz4tzHGTofyZrf%2F8yKkTdBkFyaaFWFDsQPgsmoeBJtH7rKWfAwIFodKtTR4SFmyLgfkW6HGiSxWw0y%2BSlEEdwV3dqtMlXbMAEMYtxJ%2BpZgU1ldIEgEXFFqxz6w3TxWiGJ44s5mztHUgQl9A30nLTJngmLqhedAtompbsYHO5aFU52wBg4H%2FpguIf5eshtvIHWD7IFbT861J%2BniARVvaAhkSIOWOG%2BJr7kImoCkz%2FEz9LpBiL6ZOk0V3ugmWmlMfGrVCUmGR3sLA%2Flt3%2FgAsO2QeA7%2BCOaMcgAFGRaGG2mlDg5AXyfoWWxJ5u6zrOURW9aqgMUdIDiZIvuIZY1m89EoWe6oOP2YpBiETY1zwcdzVSanunWcIcm0Zj0l7JGgVJ%2FQmJuG%2B8xpsvMJBi%2FW0AHQYE44SFCuJtaFb%2FfsV%2FYs2uwyiOznhu%2FTWoKnWEJUw0Ayd0f0jNj5dSxBpIrcFEaYNHRyCnpXMKfl%2BNIGOqUBbORIf6CGdfv3yp4D52%2FEWmfX4mHJv9XFr4aurDjLpTPQKiRvCfx6y6J1czr1O%2Fekp2OaEESGqBUqRODCQhORyqEWPvncDYYkzJk6f68Z1vPKjtV%2Bv89fqewaFILWfVyIEy%2BbTdUTGT5m3urQbSQX98tqcdmIpfMnVr6GTQ%2BrW1dz2wOd81OdQI8AORz%2BsWidJKhaO5leG5HdrQpGaZIKW6dJxZAn&X-Amz-Signature=102aa1a761e35b05ed07e32bf070f559005b1181e2d9f0c5368d970f489d83d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
