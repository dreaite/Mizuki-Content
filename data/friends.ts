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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSADAR2J%2F20260723%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260723T140410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIAvOSshyybrVeKXuZryf19PCHNtfDc98VP079Gr8QvYXAiEAqAFp3qD3IlzY6%2F65BACguMdI73eymF6jWRZpTasnnOUqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHfQUeL2oF2mcV9joyrcA1lZrHZLOcjxwLWFy4Kpb%2FIy%2FRUj8jeB536lfomHHvCtU7K7LyE1erJgMNxpNeCU3GeC%2FCEFQBFppIbosjy%2FBeZx8mdiHN1w0oIAltNOSr7Kxe1075wmIZd%2Fol2JXidbNzx1M8kEVE60OAqO%2FkbaGv32GgsJ0qXm3A19Sa1734J1IWjoh2StAzVXuSTnqNKxEXSI%2FQq7ZgLjL%2BxB7LFQmmuYLjsixfJ53At86u9Fj%2BFrs071HHNG2eCZHhFLqicghO7dbBv0f0RTxhkf5Jev23Xx6tOIqdDWdkOzYm31kRabQJ05j4cU2v%2FC%2FSIGbBTTB8E60tjK81dlylEgVhVVR8tIwZDuCkE9sgWkGAb0gvdSgIDxyC0eXKvFhChGoWJcr0B%2FY6sH17crxkz7%2FygvtECh%2BnfwTDngTZWvErS8z%2BXfHxtZT2f6jFEtr6e2GAYb1u4fRQrj7jTlcSHU1xKpThOjsm49K4l83oWLSsjVICuWQuQVd9UdHm9O%2B2CwYprTu8No2%2F1zGtjd1OXLMAAZDD3xaSQE%2BIKs7S2kZvzNf3UJSh8IAVTzomPBWr%2BMDPAjkOooiny4kf2WpcqHL2pizeu%2FOC8wwE8ksOANM%2BAyDLHj2d2nKKmzI9GaOtkXMKyniNMGOqUB5V7F0gefpfrSEP30fefmt6fg69bQGTcVelJ2tPVeornYbMkYuAFmVdDJ%2F6LPaHmlqQewYXrTO055zJckVGh%2Bx%2BAx0X1LLByrUyJzOQkVGLKuqHhZsxFOOTJ9%2F%2Fhr8G9JoeiqZokLWVNS0r%2Far18tqeYvC%2Bk6zMuD5K6wpawf%2BoG3Lm7jY3Ugv2CouCIWhc85y5LtEItJfuDVR1EXptt9YRNzEur%2F&X-Amz-Signature=47a8d8bdd8c6563423f9699b4b63e3c7b807f1ca822d2f607d39775863e8528f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
