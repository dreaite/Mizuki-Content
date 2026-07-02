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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EX6LSQD%2F20260702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260702T165050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCID37bS5wxFHUFizoRMZeJISZcWxcaVHVuBPdNVLmg%2F9qAiEAs7yw6tuiemgrwm2u17cJS8ouWJo7GvwOPXftZAs5VxUqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCJL4z3XH%2BtwDJxuAyrcAyBcXhUcjy3IltpjJULZidqDQ9C0FIfrfkRGGty1AKHqG8F1fyMVLF%2FCixDkrhnhcvTyhSmKEmuU10qwP4uuSu53pPxiCHiNZdypqIHoCPpcGf6ENoU9LpiAaTjFEnJ6cDvLUmxheMbEXSX2bX1py4NqvrKO5aoUZTJuhmgGSwjYCZnkbWWcWENOhTgTt6qF8VYtzipAESBh67T1MZSYBXpfMY89RfxiWUuPRPBiZf3rZCVdUN082cMiSUTSZWjgXCu3xBMypkTa3vRReGB%2FzuIY1zB4s%2F8mPs15%2BrTSBMQAgVOKTRLxd2%2BOTlmFD0Ghi%2FCx0vVzsWuLU6fEhBdxISOd5POYydmvA8XoA7lihar4RILxsXLeQIuoxJ6rkwVRukh%2BOR3rJrBBAHTTNOQ9WTIR3Hj6bkQddT8bxDVS%2BT3Xg3kOJzoQyY6HJIhWaySSjC4eHUggjK38muecPBL2kSWjdUn08wuL%2Fx5Cw4EQNU3f7EGIxEJO2LyVhKPB4B21qfxzSgtw7Cse001hs49wU0LZRdRvC%2FlayVeuqD6dE9RDD0rLpHX%2BM%2F0qQs2B5t859GpvSI8YffEMXYrGnCjrS3D2sNaKjqlJSUHLwVqdFT%2Fd%2BdaVhW7mgAGuQ3mcMLKYmtIGOqUBn5taEb5QHLHM9MdjyejzbUHwLv%2Bll0GiuQZ7nhTZgm2As6ntXFCsoX0keI9DKYvR2Bu38gRvgZDjPZwBT4l2dtn3ungQYUgI7JlsI3c8pXV7yWyhNnM7%2FrIlJNnxXSaALV2rLXHVzLMSUPaoxIDP2rzfntVXkkswv9VLTuixLxhKxeA6XGu3UchCMDJ3szqPDfD2OJvmgNneuEVCRbWft2ZhRvW9&X-Amz-Signature=e7b70a5b000b413a24528079cf79eb45eedd1dbc39896728e950f10d46eadae7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
