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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URTPUKP2%2F20260811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260811T034549Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQO%2Be1W7Gakvo1bz%2BwquN8iveU0BPLkPhhAXxRcUqFEAIgOJFsaxk0Qyags33AM2iArLXTmrrnQEnZagmSj0cd0ucqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA%2Fmsnm3NI%2BNgqQRJyrcA4Hy0j1aBomWEMnun4DNiiXow0Tx%2BkB6hCLT3KW4deo%2F9gfDtgt7Zf3hotNIHze0CsyAsN1mkan7o%2BgfPs8a%2BXKa2fLoCvQNIjPYfARRY0B9oQhzQvTG0n%2Fct0%2B3kY1ahiVHe%2FeWwbmmyA%2BH4D5%2FXtgcxqDlcnF2yApODSgTdzuifVp25S3yWUDNQ7UMhl%2FQGPIwyYNxCdjaeHNQIWcmPs4bajIXcYSrHv9QE4%2B4vmpqOGqRkJI2PxTZcOK2ySxpCRqalllbGJuFyKGDhIxCSgJ%2BtJZZMAe9uEaTSvZZtVmHsst1qaAw%2Bqfpm%2FG2yoTYfsJuh9eVqTC54rQIVbm9mxGCKOrBs%2Bnszc72qC8vZOz%2F4SFLfOWWHAfAUAtPgR2rvcFeKuk414V4AZ5QGDsyOB3A5VtHw9GHe1sRkKet5vdA6DX31fpHcLXZ3ndzv9ZdRubtSF1oNXC3qvRU3PB2t0gro5MUDcC4hbLHQZ%2FW6%2FsyZtswW%2BsFCsqIaRNhusuydDj0nT%2F4uOSDblrwDXUpjVaOCKHS2ihLjD0KKORzdaMZuVQ3RaSRurzDLcT7cK8x38VSO2kZym4eydWUqDe9TMHvYnrtybCKKMSAtj8GUlpjwSmAe2HbTc%2FOKDqZMMmq6tMGOqUB0r18mssF3Cg3RLqtri2GKHMZRycj%2F2CDUrB8tNfShuKunfM8idb8sFIICq84ii9aQsQ13lQiyBAvs8E2g4nsGdL%2BEkYJfCxlNSzScBAcyusMrf32rnolmvmaYRpjPm5GVIsyaaiGqhte4L4WU8gR4FdorRRhDY3PpbnQc4I96Bl8723vK8e%2BwfZwWydwB0I41ybFMYht0OhF4b9xXEZrRUoFNsKP&X-Amz-Signature=c64a573d2c81ec5a5170359c9e692e114a7edd2ef0df27ea27a14bd0f641fa80&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
