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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBZKYSST%2F20260627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260627T045500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEbTN%2F5keA3aJVejyKbzDuxrNs7wkPUF9xYfy9t1mx33AiEAyN0hetTDnbNawPxW9GxcKXAlIOjZ%2BfOjngIapmqN2o0q%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDPSuu6uSV0S5wQgXbCrcA6kErjyVUkJSVH3qSQ5mXw7vIO67i9MH1YzG7sHRvSP8lfogaVvns6sjHavBpIISrms56CnlRyML598d8L0LwLVhH3dwWuWgagfnmD4X2ySb9BlMiVTOcHu5nA5D1oRvvPPe6enWi%2FD8vDgbigRCBa4%2BWjg3Qkkl34fVDD3dKGgahYCUmWdS%2BwgoxG%2B3jTs%2FL4rjTWvvO6xeVqzNdug4Y4SYi8%2FW1c185CzKrmISsmv%2BkxfRMR25T5XQCn0G2SgBdfJabjeAICgSI4wUPK1HtefHuC01KFyAP4kahHwF6JXKQR7FN5H2AfPFkNusbejjK28F%2BuxLXD8Ybgd2HVsYjsaScAb83K%2BTz5lFzc7B6z7WdnAuoBIkMWrfrjG%2FVVfU46JpJJWPEX8qZxNZVJPXRUKkTutBwEowQgp%2Fxcgzx5se9EIFiEikhKX%2B2IfvCmatzf%2Fx0xwD459tVKbdCBe6mrnKFGfbP%2FDsVQ6kB4zxd%2B%2FHPVSzUt3BVk3fvhPmHDGXlrLbv%2FQp2ZgYKaeZ58H%2FF3ZcgaQpOyB9ryBBMInCQ9B7IZVqiXbYODSkhx%2FEstmFqu48rwqee8fqUHvjMloxB9JvL02VFVq3aMJ3i9A5ux%2Fwotdm1NbYv%2FuubWraMJ2Q%2FdEGOqUBMgT8hsYyxmTfiF4%2Fsp3lFM3IN%2FwhQm%2BxGEX49lR%2Fts85Zr8k39ZG99A4j4KU1gUVUCWbG82mceMkmYSkUn4VB%2F2%2FqZ1ejiugp04%2BaAct%2FEkNoi%2FCa%2FgTe2K4D9VQs4LaHNbcONlupP21DrrGZyIOazQS6oBDLljR6Xgv19FyMTG5VGJ7QhrlHmC6hKfHPED5yFKmVaWB27ciuVK9%2F9dIhvX%2FPmW1&X-Amz-Signature=ccb5d2a071804202550d2ec9a9c52f6e102fed7832dd0beabc179f21d57662b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
