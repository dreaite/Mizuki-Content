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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634RPMELH%2F20260723%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260723T220536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQCjtoPctNGTG5Im%2Bry2ZH0%2FcuIZB63nZHtpFreRRaYe3wIgYdrLq0I9%2FogCOlRySpocRg4V1ZkBYT9r7hCOL8ztMssqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI1y%2BrmkB8k0Og6rgyrcA2Rub%2FsbJb8IBH6sty7ep9W2jhdLdkgpbCirdM6yAcmiU9xpgfSX91cXiCFbApuvgz9g6IeyTrHp5Mj%2BdZScz%2FiC6HjaVYDTz9pByMyTF64vBYQuuhKmgAMV8VSQd9wdcG%2FozufjyP8iNR4AyhJp6AdZOpUendnd85WZu%2B6y%2BmcdA3ZeOCELR%2FqOXFe65c2AWiqZBlkmXEvMm%2Ft43nSPLlB01fCT5T13M2qRKai%2F9Brvk0%2BpZUe%2FmfDfkSDkojMMlofZbC%2BTmsPiCnwmD%2F8kVh2zI8t6NUfsqwgSIVR0bQx3WovnnW9t223SS66UOzw2T5TgR3Nsw7im6hokwlnxjTbNojiQ5XOzPGdDhIEhVb2l%2BGBGf6ZNu7jV3%2BLJ7gsCdSb6qNjWaqA1OWXMOZ30WV%2Fg8VtEMXig%2F4HVWOC9MyLNfk%2BCU9wg60XQTiJBAlXWy6AsYgXNzEwJ89K9wf%2BuYaQiFjq9lD%2BW2jxD54kYLBc9LcwTHbkY4O9fQ222Zjbay3NRgl1d42hRp6JCdsu3Pwkgtjv1L7MxZy5MMHFTwQO2p1ioPvrqcrykBHbc35feSynAfP%2Fhm4wnx7pi9kRyoqKdWkkdCHTymDZsZ90gajz07CiFH333WoP1bqXDMNuUitMGOqUBNWdW8qeY76P9ll4HbGHXQhwgLm7OW%2BgpX9MSs1W%2FBR62bwuGKWZZCI9Q2uRg05%2BwvfYlx9tdx2zBJSbneg0LdIbIAvGmwGvbQV2cus1LE2wvSK%2FgFDbdKR9he9sK17NVYf704%2FyI3eVhtqRkFXzWvNjPueMYWvOtAoyf7ZaUOnXE2w8isfN51jPgG9883NSQE6Y0Xq8%2BQ%2B20O4hlzYW3TYpl2nQf&X-Amz-Signature=9feb753849db56b574c66cb38de27540af0ff96dc4fffe40e7ce9d2ce27ab54d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
