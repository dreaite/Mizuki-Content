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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYWZF35N%2F20260810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260810T015544Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDUxk8jm8IC2c9kItm3OSz1HuL6Kkyhp6sJVNSe2dqrGgIhAICCOZX0lFJZQEYL7L1slOcQdo31YTe8PtgJSnqL2%2FuRKogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz3LiI14m9fLMbGTZ8q3APCgTLRUjN9yNNwHyXSnUtprcd%2BfcFurLzTe2MEgyEXLqpUgQMZOvwiiNfZ0iZUZGtwpQGskaLnkbLksVlVxUc7NFvyBp0ihdi7CKcmOasuiVYi118%2FLDgc66L4ssEFLXy1cvlUHDg%2Box%2BfOJGKrsWtIFiGiiXvzUhFGKef4NG0O5qtW8byCWizAxafX3hLgUkJKWXKUW91VoK9CxLtdkeXq5kIcn9PnFUXltYkFwz0Y3U4GDJVKPjtOJON2ZstCrUO88XNgUQ3dKT549neofDwgj42NGE2%2Bvx70jCx1jjUadJwgp%2FlyvXaoa35LfZjbxEJOHE5ZRNNS%2F%2Bdxox97XC28OTcPhYwJI9X%2FMr7kdw%2FXt8AMbREJUiJCLD4uscPZd9tfbLHz9rufoyv0PW8S4eyLFqb9ds1GcbSdekHbjy72fMuRTVZ75xW%2F76BC%2BRc%2F5%2BU%2FiV4jrHa8WzQNHUaYsOMosqubfe4T6ddUazu8N%2FzTSvtSFvfzq9w4BY%2BV4dnjYRQZzcZaaxWQm9Wgw6nqGSuH%2FT562ad9IqcnWO3WlnKwGqtN62WFWLf6IiH%2FTct0I%2BHtxoh1IzMy0TxSTJwvRiR1IjYehldbmCWZ0V5T91byp7JDBjtleirBjrYIDDXruTTBjqkAVfOZMWZ5cixn8t7DZ%2BX2yre9JoMESbm6ku%2Bzf9eeWal7P87EYNVb1FlbPhI%2Fw6I48LYYV%2Bfz4z7v2jlY%2BDmfVdfIiBpMqfxZS0oG16So1egSGP2PL0411bcpBm8MER02XHf6vvl7xir%2BnZQvouyB7xSbl4nYOB6g28%2FmHH%2FtTSH1pLdYZMLd363yi%2FgTn4fH8IjDwwkfN26ue2Tbv7JwUjiF0BN&X-Amz-Signature=1c5524b80ed4db4e763cc7708c2d701b8a96ad6df99dd3ab3eba578796c0f7d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
