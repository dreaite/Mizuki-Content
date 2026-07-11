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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642TAGCK2%2F20260711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260711T132256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIBb6s96XlXojvUJpI9GpSMWWlfipA8Xty0Zpd7d%2FU6lTAiEAoejDO1LfbhZGvXwxpmq97qZExS%2B%2FzPhF2NCejzQCUjEqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCyS1pTbn8KJmnrwyircAw4WbB85VCAIQ0RxnSdcaHpLluD20BPaObFrcgQ%2FWHnsP8ZogbsytQGa79jtYTM%2FDHvzKm9uqtmRZDauD91BK28F77VbtXIKoFWYNLJTeZg4oRr4a1U4V20xYJOM3tIUADu75BJJRv4qec1ak7Fbszj9l%2FTJTcEbANjpYOXgMuGCzBzhT5BcpL1nBiYXr0gacm49%2Ffv61lC%2FvWwdTZVok2H%2Fe5rMuBFS6PALS1eG0DPIn37PM0ymwJ0YnfBovfH1yc15hstYq47Xol9w1%2FUoQbkaoFr2qrHjsruQHpdmK0ylZvo4W0Z3gO6APZqgdWYpkBZ2%2FFz6hlUCneU%2FkuHDK%2BkBzpk%2FoUeoW559iUHx85UYeSPhkuK6uedaown1nuNsIKMvE%2BrxEBXkEgcHB7WSSUa5qqJenb9eqiWEbaFfvUjqmq0J%2F62xPqEk4PQURyBGaapUSNxqSRmfPqeGoOQkTT4TvTzRhhBKAfo87XeycEyGlUgzcNKT0XFr2VNz519nbfCIge%2F3UPQTLQt8CbnKuBhmvO5aU4QewxSglJGMF2j6NND0b6zoTE8lxNGMvOiyg%2FF8ZcoxmrB41zB09MtlEDhoDZQBU8NbGU4HXcXb8G4mD2P6ObkMwfuZRs1JMMP2yNIGOqUBpf82ZMUFXgSbn7E3pYmQeWv7PvHxTj9syBFXGsJD3PEeO1DACo4GRIw7sKlMqChZoutqy4nQ0lqKuHZVuOwvuMzMYxaj0kMDeIsBYn0TskC3ip2VBm9mDWAacBUUvfsndnm1Cz7S8I3hQbjSBSHEjLdvjsH90esnzZblEvaUauv%2FyJccJRa1IyGQH6izoG%2BF00HTSLYq9Y5aobddEiiOE85PrO0P&X-Amz-Signature=98ba2465a6b8317ede0263f0f40ff93ad9d68af85ef9d4155d2036de2f58cd8e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
