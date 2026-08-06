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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJU2MJLB%2F20260806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260806T141312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQD3kMnZKKhXuJ%2B3Qafzs4VnfFpnwoUzW8azR7%2BSfQNjuAIgFuFwlg1HPS9UvIr1Q%2B3HfE%2F9dRMefuhlo60Rjf8PPL8q%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDIGqWy9Sjz0j3I3%2FICrcA9U9Sh1%2B57sJBlsidWMaN%2FomZE74rLvPQRbY6BM8e2Kw2yx87IBpz7Z%2FbgwxLxI%2BrPKcVQf1CNphi9%2Bmiqw1GEAeI%2BrA2w6Pu%2BYPczALbD2MtXhxRg9Wz%2F1mMBx2v3AO8BHZXLjGOvRdVA2WmlFMt%2BlWFyEl3f8UhIrGML2%2BQKnSaRNK12%2FnLUi%2BRr93xKTrTxKLb%2FAo7S6aFlAmf%2FZrfPeurOQBxvCgKw6B39oMLXkBNcuNtbBcK1XnNFpsggJaFl4XzCpPJqwoK5dhxUnBY8xE7mZ1p81uAFTZzNVaZkHz5vTTJhVf2svat71xIE7b5ZgBbd9fnqdBCanfwL6Ba69Ho2hNH%2F7qbVFWsT%2Bfj2%2FQjfhYd8QVG2weoeJMGI7t0lGu6R2ifyp6Y7tJNJpZ05DzFUdQN%2BmeyXZhil6Sdu2Bkrk%2FWJrhT9bxJqIHJTJBeV9YJf9kptOsJ5Zz%2FGat3ZQEZ1egA6FhhuX8LM53COs03zTNcBcHLr6wamnsPmVYIt2s%2Bpkx5m3PTVc6KD%2Fh9i6sc6BFFvMHdIm1GYB4bKaMsD7CHVQRgvhRV0Y%2BCfbaO1NWxk7GCHf1fW5egwINAJ6n3VrXyO9gKDg3iRnY61zlJ1LzLQcvox2OqIFsMO6r0tMGOqUBOd9WlhEVi9QJvGxO10kMgonYUqZLKVW05CWuCWyXxim9bJgNb6RUA66dcGzUeZT%2FXPwh0noH9wNG6acYZ4Ru5C6EEhW6D524YLYcHuS%2Fe7pSLQc1Ug9HgtuUY2wf1LiQjr77HeFP9w3F3Qpz1MHH3IEauyMJvAKi5C4V4SlmgrMmlXfl7JhZ2x4oLaHkO3csCyEXHdoSOoAJiSrKzT3Ijx4s237V&X-Amz-Signature=63263e725ecba8f33dd32cb2033e97a1df83cdf72b518b71f514650b9c96e92d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
