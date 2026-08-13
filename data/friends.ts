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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2LSF2HZ%2F20260813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260813T061711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCICALEYcLWUG9DyxZLCp2zMGxZRVsDW4yZ3muhQZggJAUAiEAq1GmZ%2B5wOxHZIgUJ7%2FrEXxmaxdE%2BzzqBLr8y%2FDtS7QAqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA8LZwqJE24w4vl6cSrcAxRtLMcgSB7gxbR60V26olmXhFFZcsFCltPyoFVaqAZFleQahGHiutXqqrWLpEJtJ4AaSH05PkWLPuaDjz1t0vGUMzbDK3mk07wR86s7IFZChRhvgzI7pe9ggj05cOcK7Z0T6JHwIsMIDty0c3j3ZEPHNomM5bZGKp3HI3MVFReplWIo7FDWZ9Sq2q99clssE%2BwUWsDVGVwuy3nXlOpYBM2cY6JHMraPiCj02NRUy2H7q9bjIn2%2FWuP5%2Bt9ej1hvtHgvGsWbOBHuBY%2BcMMm5lo4vf%2BXtfJWdnmZ6fEV6dVuwY1NjTykxzSLkEw9%2BV%2Fj1tWhDvglm5oWIVH524MfOjjScf3RO2zc%2BLPpHDSKbupjA7Bo0dO5qSAvgXj3xY4ga4NGzxeWL%2BCYgPS9GSZwWOW9W8sBOVLpKNc3XOhthhBTBT9sD0SlGZqvtDtW9kDKqw8cchSh02M4NhGvhfvNXDRlZN8LgYyonErcVCaWI%2BMc6roQRxBfR2dR3RNBBaD999yAev2qVEX2hQwof35Xz%2Bu%2BVLCWkjZYfqcx1RNlo0%2FpjBRJjiSBOiF7gW%2F8KXbbPIW3gLzbnCOwH1yr%2B1Vs8tVGRDGnDE2rOJ6zmmV4AwIb%2Bfo3iUPBbmCjGHpwxMKq79dMGOqUBhQw%2F9Me2TiSPqrIVnLkJScAbkKmYYgLwtrvPWNte%2FAS%2FbfgqGufHWGmZYrDVGFQM6wm7fP6L6jZ0ClAm50LlZ0QtrZje4oUK6AlLxxCsv5XjBjF50e03UsWvFRIp8Ewc6c6C19L4xYfEiC4PcK8zcVqnCBg6BNiCYme%2B3X8D%2FwvKIaF7tWrclFcbBQ%2Bd2zJ3ltM0amvEwL3dHb0lCyuaYFehOpzg&X-Amz-Signature=73e3f268f7b11202da1d267ee0a04f51dfb08ba1b8a1a0383af07a66f6592f02&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
