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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZCEDQ66%2F20260718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260718T131851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVyqCYWfi04DauSPOvNhwN%2FKK2jNW8vnwy%2FbDcP9wMrQIgQdGwII3DU3qAfQP9LOyN6Vh4mxU7AsTmgzKZBsyKaaMq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDJy4LwsO%2FLyGz8i%2BCSrcAymZj9udK91qQa1Iyp5AsKFR74bfHfngaUeSeOZUQdBddncZ4muuh98nC783wMdpo461QxTpyT9a2XAwPePKIC1o7tYYjrJDYXRLzwjCP1O7J3OhHCgC%2FnWdD1PW5QUDyTn35kI8mODVPgKVcyqJai%2F6g0LUqN5%2BfmWPEao8SI7dYNMkT4QoHsOUvZyOMyeEVFrriu5Wv49OfgpakSlZj1OTH%2BGflRshoulERuHfZNXnWT%2BcvG6uqFMnF3lq2fi4cpOKRDvR458orsTuIjLsPer5RsngAaS8yPjiyC0PQr2bcEWqAUtP21kKauWzH9ALgQOXlmVg7fya4JyndCNvRc34k2%2F8%2FPZamwvqa3i43TQV3OFdJTqBLi2RazLho60Og3BQSFvCvpjsY5%2BTtmOd5OKCR%2B8AtzrZpboPQIxYDlT%2FMHMTNTYE5cWo9bOXOV0g5BSq2y%2BgmWu%2BacwrryHkbeTpimPfHebQd%2F47PsqWpgg3qSiZdCQr7VYm%2Fr1MSCZ5vSKaTu6E0QhMNxlWTK%2FyoW3zdc9HaIXJrAVbTa7wH8XkM3luFgInh3rJbz5lmBCh1%2FHb%2BxsI4zKAM6auS05UHiqCpOXaq09TxQprgSKZuj00vNIQiJONKUVu4wnLMOig7dIGOqUBqsLQsmHzk3bOURueH2heQJNyWCT9PYTZvdPeyULtBeq%2Fhez3b5e6Xyn4A1Ch1hImHfIw93BKwf3ta%2B6pZoKnnSm4nWpehk%2FleEyhHD6JH4oFh3OSj68EubFwnTnI06KsKp0GyaNxaKxl1d%2BqR6o76VMdTmRufKTI%2BCYv%2FMVG0jaoh3vQzeMDrxuEvjpiEHsJY7iNuvmuV2ryQr2mcOntQiAnpRx2&X-Amz-Signature=8ff0479c95a05c2f994e570cc00b596d57617d737d58217a2ba29d9b67bf4032&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
