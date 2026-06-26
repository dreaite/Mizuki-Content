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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOA5L3WM%2F20260626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260626T075602Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD8pOkk2RuR1ESYDbKp7RpPiGUtXU8lAkPL4dvAE7XpKwIgU5PJ7AyUR6Vo0gZQQv2PNXFncdHjj0jkjpk61rBPO%2F0q%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDJsXG8iSfKKBJg3J6CrcA30ABo65s8E%2BgNsShkBYqgeczcq0fv4A9DtzofRgTQF5CopOAJfBjfuE1cltfW4FyKJcWpt5RDbOx9OjgWIVTVA%2FaTRciiQ1lgCG3B1NQgYpZ5Eaqbvg0wk%2Bp4gwvGiCR6SsJkWZ7AfIhetl914unbYD7s1vwVUmm8JET0LmhPK7AjSmP7oeP4V3crf5S6d7EmuwWHuW5qS3awyKpZPB2r8v6Ndq%2FxF61VZyF09c7CSiAS512%2FtVVhmpdQGkvefKUjzcV3DJJ0Ef6d63qMqGF6Tw63wwPItWc895m8W6tzl%2Be2WBj6unlmW5l69Kyxv3INNEFAm8eL3HKH0NM%2Bjadobn1ISuIgiI%2F4ybN3tgLbti57Xdt2vSscE9uXKLYeY35yzOiQb30OJQvKTyVxffmNK1K3RbiWQpxblMleGFO73T%2BJJfeNX7iDCXG5AMe5fCG%2BqP1QyXJo46PyKtTJfqrUkphwV0sVTP2xNNpz5bgFkwKYWR6Cx0S05kyi0jYf2FnU8wdLih4ux8G8dHtbwplGTTtkiMUJrd3GOnCg3gIsyfFo%2BskRgXDIA%2FIbF7eRubvhwJVA15cvEiSfi17QJ8CvsuSBGeBCOl19hhuoeUv8hlGapxFX8DhWyGpn7FMKbL%2BNEGOqUBYHS4wwD6aGvl87xV8fOLoVEkrixhvMF9pnHMgvi%2FN6tXhAqOPgUB56mKDV8TptKO9XOzW%2F6yPm%2FhtvAmbVcmdd2dA45IqJU%2FtBFblPkM2ol4cENCPeGk3T%2FKhjDl5FbgtHbPNb6ONyjTpjLOdpFF9KAcFO%2F1DTRw2X84VcxSmL0icLAAVqiqwHkjbJIwL1huvAOalEZ1w2wJUjQCzuf1jb1DuWFL&X-Amz-Signature=b7223876244f87ef5812107ae967f1bfaf1d150a4c7084d1fcf161fd34a78c15&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
