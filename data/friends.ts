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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PRXLTW3%2F20260708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260708T164034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCOSA0gAephjMLWyRO8xHh96ktK0SJqg1FywSPgnWB8hQIgJl%2FI0hvyc%2FDsdp2vjjynijxgRBIjIAwBFIfXmVREFwoqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKhJAaYAlmRNz2E7FircA%2BDxCgnShONiHC1jIjb72VovGzlfNG5xC0oXRGZAItjfMsC0OT%2FY28h0Ep0Ac%2B123J%2FeahQryvzrzxbpqQBaigIgOM0A45N0xGQTr7eBYwDZahjmTU8ZzlPt45d9uHvk%2BWVRt5%2F%2FZrktMIoYmhAEfLQmDTY0JDJV%2Bj7y2ra8VVQ0Ilty94yGWtRpxZbQfYeRVoxjpxTCiObGc0skVb1SLmwMoP1VRGAdMzf68Xrj0DInpzF2Em8x%2Fq9deU21SrVqSfOE3bY4wMK1T1IcmOdfKJhsj66t%2FQ%2FlqCYNwRgwoBGiu1T%2Bq%2FM7pvkYh8oLnxULHoBgESEqXxXqsSOH8fxJ0OOpAPTj%2FxekNXF7YtpkNImMQLnEbVUFVmGZeYXGBr%2BJPOh%2B%2BcfFvLLjlxfI5kTmXlEp5C2EMmXHULlp1cr5qbF6Zr2bJxU7A3m%2FrIhhCHMD0WtCdcyf0aQX0DF02MT4QOG%2FvbQ%2BxePsZr28sGQeAf1USpXLuFlm9LShDhfrjEtwwdLvCCv7ICnWla6nXSiG2%2FoV5ZaQLdWarCHwF3foGnFG0Cf%2F9%2BkIKLnLKiz9TIG%2F9AcXCf4Af4uwwNJ4G5wa2qITT42CPBQJTAQhL0AqoFowMjrcDlt170a5xdS%2FMJ3fudIGOqUB1haPhLC%2Bs60C%2FMOsO%2BEucyJosIClrGjyBRs924RyXemYCKKE3EfQg%2FUURSowi3klqf5WfGgeycJhZiQ5XCK15nV4psLIFH%2FFeDp4VqRUOq9%2FwqzpvQBcrZBQtI7SKfZoJ8XM0%2BgdnL7A%2BUdWa1%2FFNUYMpT2YyBu7ekyOOXPebpib8v1svE75%2FrbAxzmxQsIUy2b4w7RabddlSb%2F3axmtT2QPgt1j&X-Amz-Signature=0bccd993cdc12ce37742eb7c12d5d274110aa3681712daccad90179e2631eceb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
