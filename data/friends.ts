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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3FUJTWH%2F20260726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260726T220626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCIF%2BKoXQpNZFPwwj%2FX9Fkk3ejZNgfrZb%2BiG2qj5pAptPgAiBCcIWIUjGzXLQuiPAFPq7xEw%2FsF6vRYyNwxUleH%2BwkFyr%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMlYyG4tS%2FSMQJ5Rm%2BKtwDnDS2Qx1c3gzI3iLuO7UT%2BzfzAm9Md9eFo0UzFucYYqgOXoq2z4Dgpu3gCtix1oTHMJ3eCTKe3zj6j2kgjD0JmVl43w%2Bs6XflOQWdgN1KGhc5wXr9MAs1nTjfL1wX4BJlzbkOZ3dV6OSWZq2BaCoW7Kd%2BNBSSaon9CcXwl7xbkvAPF%2B137MN63tYLVwX0omrqEswid3SngyJXsdD6LYpg6QdYGhdNS8LdrXk9euvkUkQfidZK4rv6J1ug1OiyjTBIUA2SBwbAtzEOaxeMr3WwFrMbmsY62fbG%2BTMS1YTg4pcDGzOLww%2F%2B5CcXGbH8X9HxWQfRwdszR1bgC%2BxJMAAXs7DigOe6tESt83TmNtdARQqyGdojyugMItDeCla14y34a6GvLjR7W1VzKaGlQ2HJo4w2jLHHQrk%2FENQpC7LBo1h3FUxBrS6sUH8oAu%2B%2FZrolxYckk%2FLJHO2rnGgn43mda8%2FnxN5YVDw%2FBYfRIuz9Qse188%2BgIjv4s9u25TCjEg3ST2Npi%2FyfxzLttm93nhak6iFE%2F1vBevDVabtuXa%2FZ6Ev8mqaFurG96rcl2mkddA%2B6jMyxCnrjgmM6iW9ul5EniIyeAzbMD2TfSccEaO%2FTLmc3DkOYOiznqy13M2kwt%2BiZ0wY6pgEWHx2Qf6pMiXJX7jdAlO6oMdG6HLrlt%2B8YXmi%2FAEmGB%2Bx8QrgnEtZc0i9eCCX3M6VfbTnmdhQBpqBq1EOzRAih79m7LRhPc01fPpNrWY7QPAYngf4NCZsk9ReCTHKtGRR%2BpQ%2Be3Vo%2FrqRg5qDCTSYUtlmLim1ULzm%2Fikj5zeF0hs9GDMRJo8tRMbuUwNdS1wNcn71gkG%2BczpD3DgxDlOTu9ksu52kB&X-Amz-Signature=bca58d559303f5f3a12822280034c75e877e0c2d40f3044bb33e35f0701a00ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
