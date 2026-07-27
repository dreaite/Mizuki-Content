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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QYPP6IS%2F20260727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260727T230308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA8Cyf4HGho0BMdc1keE7vIIXmoRK%2B29zqPRK2X307CKAiEA1HRaxydfabOoXwHS1YqDpcFlmanevKp3LDmqeJ0ZO%2Fgq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDOVRPKe%2Br9Yy7WyocSrcAy2ZASnMT%2BPAXlujAxTePsWLLRBQiQXOBLDYgExLh3jwetIhdOJpZ0WE6IfvqisEarzNVC7cMOtxBPe7TFLHjzSn9x95xiM8gIfF4Epualddtvu5MsIhNevrbhdIzMJjbC%2F%2BeNm6jGRnydflWoQo2hCFnuEXvYp74K4RGBA9DTYNbHjfSZGvrTi253efsWvunUpVWLVh8EN3od%2BcWQ2Txefs12Jzfs%2FHeAAaaeFdL5mRlbZSVCa2ArVUE03aMrgC%2FMsJWhEexDzvE6Usk5vK%2FFx4sqfZ1TmUwr58bHiDqumVkPChy8pOyMHu%2FYTzqMX1lxf5G5WgEbjYWjw12lJNzyodQL1ZJmhnj7%2Fajq%2BwNvqiJw4FmgGRE5DAGYH7FqAC3eZbD8tNzshlEOxq5TQBPx6%2BGGS6HA61tOD8F8jWYDEl%2FNZtkw5%2BoBSILbeVYI1AdIF%2B734mXxS6re%2BUy7Senlw9QYqUJriCOQvRK4A%2BGBN1ZFfth3Lmxdwl2viKPbbd3yd9zUGcuxBcpu5ve3sZs5BZp%2BTWqZAEBCQKqZoru01t24E5REvDsEtGoOD1w5QNZuLtKsxoX3xRWut43Xefp1IIkKhzG3ombSoHudySybQR90Adjsi5iVlOoHJjMJ7En9MGOqUBsvxethxjpGvFepE6eATvLSeuLbRaaMVhXLyBIzImnCXlYF1xiFvPZSFHQ%2BNWQNKEa1CZQfJGa4oRdpHKqsly%2FxNW60RvVRrO2BFW3Sz%2FpWQMM3wvPPaupeCx60xj7j2GJnjLxFHIe4l763naBnRYsOy3VjvjzFZA%2FRqtKMBgsBzHm6XSWsbHY%2FdUs1ybemlP13UVNJ3nRj24%2Fd21qgggPs2gxfTi&X-Amz-Signature=814ddcee0e93cb2693fb12e5616bd91d65cf03806d3ec16caffd0a227fa8096c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
