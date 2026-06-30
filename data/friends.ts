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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJEAOTYI%2F20260630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260630T200612Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQDec6DnqJDIBkHgtN%2Bl2CkXh9puDtNO8fzo3Q1pC8kpTgIhAJYRtEGELoOQwt5ZcX6lu%2B%2BG01kvq%2BiUJ7SfC4VtwXMdKogECM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwfy6ZuAjgG0MCjI9oq3APBjjrJ2BN1yDnaoquhcRPL5gHDwpyboNl0W1BP110UjmasIdN4At8FSq%2B5Nq6fFB32yjmfz3bohax1gPN%2Fo%2F76ynW3Z2PD0Ig1%2BXAYBFU7gJNbyif3KRlqTiMFwCAhNXlirl9Ww02sKc7q5NG3mXJ51cMmoyExAwysMWFlQEoAnXYCz62%2B5Yb%2Fh9Ms7Y2RNEUfOPLFSzS8vBitAflrkwZWyOykAvXLt8w0dF8DJs4PrWR%2FhcwziGUlpTu2r7w2ovK13h8e6yDaPJyVn%2FOcj%2BRU0YEWN7dQ0m48Wd%2BzI8jolSJ3DMCaGSuw43Ilyzz%2FwVKu%2FqSDwx9i9CaluTBc9UMu1PN93KDuYQQZ0cNCby%2FqMnYfX4fX41GjcgfwqZm2cVbsdhrO94lnIQbrltc90wSCRAlXPrDJgSkEDS7Qw%2FPxEIDs%2F58gnCQ6U7HihznXdxzW9ZGKAJSLbVqk2q%2B9Szrc%2B4ZlBikn5dy8VdHjNgE6dbVuy7NLtZjZ5PPnxU%2FTaqx5lMN4ufL1rdiouCzVlKU3BH8FYba1uPtIOor5hX4saLvw5fOqY0J%2BdG1PYHD%2F3szZkBbPLufX6eyh2RJ2odhextQLENWYcmuvLl63KIiG2sVrZ54c5BdVYHxKvjDUuJDSBjqkAa8fP9NsT9UZHFK6ULSaXGtsgrhb42WAwyeh6uGm2SUXG4LMEhz%2B5JmLi2EdBNWkLNfAzfskkpls0j%2BadPJgc2iLyLZhCp%2BvV4prNN1ranjsrSW08fOUUOkoZbVaW1dTfktRBeYQUxuvNDofSgwj5hv%2FpIh13Jc2APhzIffcW7ZBVMSVIluTr%2BJDa%2Bc94NHLWnTnNeSKcnjvvftxrDD5Sihg78uX&X-Amz-Signature=36a5200c2e352060de70318f3fa8130502372c775fa049b1d2a3c0af336a66bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
