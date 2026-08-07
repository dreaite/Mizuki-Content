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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWQNLX6H%2F20260807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260807T145338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFLgOhDl%2Ff5XGCFSpjzS7bSuXTbgGlQJWbGz2%2BvhJD2bAiBqQ28K%2FUVBRTDtwAkddJ13OHsacbFapaUfX3ahIn30yir%2FAwhWEAAaDDYzNzQyMzE4MzgwNSIMgtpxcmJL32ZKlWA3KtwD%2BH3OHb2R4glcnJkXIstBUCu2nYi6Xv6HqTL45KoxsHBZzdUlEj%2BTEweMXxteCxF2PnyT0zxsnJ%2F792I%2FiLNgH%2FhT1bi3grp8LsdSJh614rmCkwsO4QfXCvycnZGlIOwdrW4dowVRcRapuheJYJoHIQhfZUoDuejLlZlaWBJC2Eb%2B%2B%2FdHK4oyIPUX%2Fmuv3R%2BzWb5CIyUxuulwCE2n9IwgrJNXspi43CvWmXMWILkvwphsrYHfzwJiQoOB20LrGVOSIPylUaPRL3VnlDGCs6osSIGN4CtvRpRoz0COLRXc%2BHKWCIU8OXm9Ul12eueKOKdw8f9OI3bG%2FturcDmiOdN9miaX9KupYeI1bTzM8dZ87ezEc%2BTsnzFBqr79NeMrmcK4cmFx147hcoOlCTDc94kctmkXWh2LbHWglcBVrdetCFXTljvoj6u9HrxdeTYbyRX4BaCBj1sbK2fiiBk6PboBN0nCQz4kTyTfteS%2FBLS6qalsjRTw%2BauKvYO3Gxacv81L%2F%2F0V6Jx57Zzhf%2Bhd1TwcmKPVPe1DtTSgjmHEKw1AId3VMuVUMw96OE84NoyHIpfl8fpLEQjmVJW5x6AOOCag9avjK7IvxBmf5C%2F0ky5SEEqwURxq4qEx27VDnjow9K%2FX0wY6pgEmh6bDjq3Zf8ndDW12Amq6TsMY0ZHZUFaQIOK7UUvjRd00UIwRZYTCI4yoYZafyll7JNm4OziU2SDPgm46ceX%2F%2BrHF618HmReH%2Fqd5iijnkjhFiREdPmCRB9xF9l%2F%2BLL8sbtKwX1v6KPZJKmWUjvDnhWmO5C33zvNpxbWmNpx8bdf6Kj%2FxdCkY5RHJukvw7Fa0ht%2Fb6GRbu%2BsllzUZoHZQPDQKINkE&X-Amz-Signature=7e8936fdee014a747f8ac2e7206aad52c3aa841b95b1522af73968db5ac38bc9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
