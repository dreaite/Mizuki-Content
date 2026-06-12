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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SML7WK2Q%2F20260612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260612T101652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIQCSpccq8jssqm9CV3n%2Bi6G2b38hJvql3Ce8EYe0hSvmegIgCjkHK4hlKLgOGDnbjNcfhK%2FFhPmGwfDCJotvZyrtCH8q%2FwMIExAAGgw2Mzc0MjMxODM4MDUiDLZpySl0tx7pwW7p3ircA8wwPKKUcEXcNdER%2FltMfCE4dfAETVY5KrodgwFarDcaVRKVS1ZOsSPWs7EO4BspTOufJhI%2B2gZzcyEv%2Bkd49jxWLDRUl0EyncoNmFVlL3j7Wxmrh7B7%2FjuNrggPuzZTumiB6xJ9YGyaMBl%2BQaODBS6Ad78jjQbGCE7ux2RA2leiseiJZmSoXic07Ynbh6KU%2BuBkjadLEnGClJuAqhoHi3wOkUZ5CxWHAyScQpM5rsOkgWqYkevUxygTRsgq0rVXRXyZsh%2Bhge68yQ%2BJZlksdhmkoZUgdawZ%2BlTIOIC4Ppd2CLE8WTP2szOoW89uUOFYgHUtCukb%2BYhrZBhM2tfwZa%2FdYs78w%2BoRGWvxq5%2BfhDdjEHda1ncqSMPX11rvUAwfLii8NePrgEb%2BcyjKFSf48pe4LHAyJRgndcNTMHaiMFF0SG8JzMZdkApneWfK7qT7ANuXzcM37NiOT%2BS8%2BhcwPXejJVXAxoRcJGlmI6bnJYAtl9Rior7K3ICDF3sChgQK8%2B4y7RtXNeX4pKRUOpQaYfaP%2Fs8TdZsAAob5JVOKRffFmlaOE5OO3BPeCTOl0UTCNTpyAB63TN4ydXWU47h5KQKrqluytTn5ykjYuPX8nPOcsKo%2BeNyZ39uLVRYwMLGir9EGOqUBnbsPUxBiGcv2jzchWp5saymtDdRyV3tR511hRdgQp%2B9Cw6JlNJGWakMbtC2Jff5OCo%2BPG5myg69SzCgxAg0%2FRAPCuM6suYTnLk5UQMIecOFDYQNC2X79Y3NCJXtJiyhG7u0O6aEdKDs17ccat%2Fk2pmYa8oRfqmj3nTTp7JMJV3eOELZLSD1NpmhhIQkQkT7InXM4YqheN24nRIUTISEgMv7dhs8b&X-Amz-Signature=27e215f76066a8785806537ef8fe6ffa168e714cfedbd1f0ae2ef15302f1eeeb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
