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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNLAI5A6%2F20260627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260627T101104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCoceR2ernqcAPmEzuBLkM5vpBcM3HT10SIsoMd8kNQLgIhAOHGa%2F0cG4%2FYWJ4%2F8hXwWus6LijJDiBCfQmTmW8kMp40Kv8DCHoQABoMNjM3NDIzMTgzODA1IgyCc9719DNv83IWXE4q3AP8MWYtqae2pxWIHfD%2BcjEPud5KYr%2Fad%2FZmpQpjHqw5tcVjHZjAADRsc0Ga2QbB%2F%2BvsRh60uhAj%2BpTdrgJOkaqUPXV9lOkMAaPfmm3gBRmUORAaD5O0zI074lACtSHfDugmnL3DvPaL4p0A05xH0puSd8sLgy%2FgEh%2BNgMqbeS6qCzBVZbx3OLV93Sqc6Md%2BRrWzOKN71NKal3I%2BSQJh5itCEIkG6cJ%2FAixRi9n%2B3avqjvm71lvAy3a56B2HiAJ8SqJLic%2B%2BEhoGqhxm9vUgQpcEhTWWfubHfay6CmtEJrj6Tu5uN1CQcgSv0NObISxrS%2FEkRqlvFli5yt5U5XY8VPuvyz3vbc70W5eLUm%2BncvYSyYpjaHjUEz4VxQNQGoQQxsHLVgrpbCRcXxsSVx6A4BoT6eqMAojnZl%2BzEkrUfeByPnpxu8Yv7ywLpt1Nu6xBvneBydlb0QBmA80SnA%2BH1VIHSn7uKQ50hN5VuNJjXAU9JhalDsDZDyiFRxzzynsGypig9QKdl7wdaGsJV7UnLklIfs%2BAjEBItQ%2B47tKCbsfuytMgsk7x7Fr63Xk7jN4H7VEK8ckVVrCRogofBw8ZRfVo3HpGBp47CcoyWcCSLJ176YC0rZtWhAiDHxLdyjDcof7RBjqkAUbTsEQXWCNNi4nSI%2B%2Bus6DqzRC5ik%2FLH6fozgDk1oBwlJ9AK3oT6O2BkFWmfA7mVG%2BcP%2BUYDu%2Ffb5%2Fp2OOidvMR6w1Mro2lIK5WFZshtWcSuJg%2B8DNe3gCHUd80F1MHydoOYKH8%2FLjCvgJ9Ze8pCIMZNq77Jk9j5SbXpm5XZc4LgJfv1l0Z1ci8%2FHTh7UhosGp%2FE%2F7OESvUb%2BJ9yOxUNwmRMqol&X-Amz-Signature=365e64d4cf3863d059f2d64305d7623ae50e6cd420ed80e5d830bd35b43b9644&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
