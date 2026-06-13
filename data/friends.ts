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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665V3EEG6V%2F20260613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260613T002054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJGMEQCIHFnAGXXWhJFKjkv6dtR3iHWY1xqSSeshQkCiJ2MKfO1AiAvw%2FooUeWDH769n8BhTASDQ17EpSJuR29VmEd6ghBfACr%2FAwggEAAaDDYzNzQyMzE4MzgwNSIMp4fuvIM9B4Ohe29%2FKtwD1FhcFNqqXD5W8bs1II4bw%2FzfeJTybGXRHUjQtWpDAdeuVojc9LEkBGh4%2Fs2Y74Nsax1zLxsnqN4tGFM5fCoVbCkdNinoOLHqaGh3ZhNVDuTqE76CJJwfNyMyiJwwEc85clK5Y4y272F3gYEsAk942I7J153lmtpK4wcyP2yGY3CFgzqCf6sPc4FXhDZNpMmmCyP1D2sKvNtOGjixvR5tuPBcUR154PKBampIdmXjBXv3l4jHNkYjyujD5fG2WmSgiXWaKpnCndfQCt1OUAgc7aMNydH1M66oPXmW2rB2ucbikJ2k6LuRSkwCqlK724P8%2FFmdfe7JnvR9tSpLA9f70b7NZKJcIEOET0VEtpnmAgdfjeSwPhOhiSMWPbYOfe2GLU3Eg809fMRdFKjLinT5dlYfiJtM9vVWop6Fo3NbUZxcVYLjLKZmyKFPQikVGUawgOBFx0glpO8qHVwCJ7K9sDDzwjeOgIrvdPqy4wNwAaGUyVwhqFoIIhUGT8vZNUbdlONkj8GciF8MmhiCgEWe8tB69iwAmGNJRh8qu5DJgN0AdSJf9GoJBXjZrpX7h3bp95gALPA3sZm%2B%2BB%2BzmklQf8qPLr5wzo4V4w7Fhmolbr%2BtCJGI623SnlPz5jUwy5Wy0QY6pgGenNQtHO5he3BU6I48d746OUFDM6TopzvMgr0mI7%2B1lFw2ABnZDKrDp9wmWLJLRvhs%2F2WWpGyy4jV9Jk1U%2FO%2FYMQIgP9ETkthzU4VfwhcWZcfxnw%2BBgvCohdrLFd6mUPjPSo%2FK1zdyEMMsgV1PTDbMNbxbAm%2FjeFNZkOJWC%2B%2BjT6QltHr9jl3XEjPMKR4e2NjAkJ3zKklxcWYdxU1PdTp3iz019jdw&X-Amz-Signature=d67e58675e7ed98a3f1999279e79bfeca7ce1127f5c58589883266f58a59011b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
