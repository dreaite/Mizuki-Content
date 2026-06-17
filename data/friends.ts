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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6C4OZQG%2F20260617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260617T153711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA%2Bd9BgGQwbPUlROFSVA%2FBjUHE1aT%2BGuCjPuXvbuvx3xAiEAqnKNURBCCWNFpMOMuVrHtDkS3MwjUyehBLyROn6rIVUqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCTosNrwqeNLnNf88ircA%2F%2F%2BU%2BsJLhQiD%2FzKtRs15Y%2B9ykvHBezaJWe0Ir6Ti%2Ffy6heV5Pgr6DDDY%2Blt5Eb665S2bpp5zVuPSHXPvMrD4IvYBPnDXo2AIung2M5332aDaeSVIno4B8a75W8fWZd03CG1E12WThLqbMW84ZcaJTrN%2F3d15tm11eeDej7XmGMz%2BGyy7S5jhd8ulZuaiG7f7dBWS4QjMWRUvRC0SXMFPsd%2BWWCtmpbCjll%2BuLy8P4HUhk6VI1b%2FDQ7TUnf3mG2Ze3GHdyIDTDwA1vfOByrGknCtpZxo4GuG%2Bg%2FClqBSdg%2F7HUz5mmhu1aqm9Tr0i%2B30v9H1QKWWkdtDX0AZRVM5S6XKsESLeGpx%2B9HVdJGvSp%2B9ZMlO6DMpibgqm4DOLE4aUq5FWdBR40VLy%2B1ny2UciSdfrZAAInBPA%2FS8IBenvutaOdnW2flZ%2FvwkNop2DpV7K%2BVf0NWN8WsI1dv8NIRxROIIHtJT6%2BWTVqG%2Br2y2%2FniFsBBGWusjNegYp6mRBAYsHybAMG2Gd%2BhzBvNnmv0k1nCYvrJa0EEhd5do2X0Y%2BN%2FvGrF5Lb5NyU5RjQCPK4OmdWqm3o5WEgrUVI6ls8nSp4hM3nCEWi9LXogjxiOf3Vl4oPU0Si2PN12txnxwMJLYytEGOqUBUyeJr5av3wz%2F8Zx5cy35nBp3ux64Pf68PRplVU19%2F5k3SVQvrGQckR6kZH6laAJhNg%2Fvb2D%2B3u94TvVs55yW7%2Bj5HIG5vsDOYb0%2BdOpLAKCcYvJwaopwHButO%2FJ%2FNiavPezKelkBeYDZcOLVF%2F8nEoKPycKM8oq2URLoydFct9bbQ89TcmjvDR%2BK%2F8UKKaniDdyninz4WaGvcicXZfR81O4HRS5g&X-Amz-Signature=4649e0b5c74f92aa29a77794a2a6fc99d06947628c4c2f7e804b50a8ad53c456&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
