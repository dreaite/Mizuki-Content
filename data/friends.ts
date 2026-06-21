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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6ZQ4N4U%2F20260621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260621T174049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIGuWDWigYUw%2BY5aO38ifsHYn6PquNA9NfGnPvHUig5RTAiEAwTsw%2FdCoRKe94N09Nwxvb9BN6dDRDJy7P08c1c1l0rkqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDISUt8LWW9rO5SSivSrcA6gm4K2%2BGvy1av3ENPzznlCxFuQDl1NsMP1Vy6kMTX7Xz2GZLgWzvXmcWdLCB9OFnZg1DIrloz%2FbNvd2aACrdScliUKXfcxq2dRupZdg3YAj9bSha%2BRVucUgq6UgJ93Oe9xS3ElYfd%2B%2BecspT7qcL4VD1hkzVAvqNquZbgR%2Fe2%2Fm64JOXztG%2FLhK2dC695eV9FpQYtpK2YyVaxiPqeeF%2FXsbNJzrLmXl3ybleI1r6PXu7kH2FsqIxml99DCnxA2jjgzFYfN%2FvJdt2V1xltlhFCuVcclznn7q%2FsjlDZZEawX62DLw%2BTS%2BGl79HXvJrJ68%2Bc6A2ZLxJ62YnxiDLgVe1kYS%2BbwEwxJxDtIhFihiux%2FWBLGVRiwqaW1%2BTUhlza3ll5egCrSLx70JtxpMImFt1jZLuedNG5mkASNe8SpVPQ9QdO8XPI8ZHBfldNDviiw4BD6R63YS5IiiuYLlpivm4he2%2FldGQGd9XJqW9JGXlTWoUom%2Fb%2Fdw3o83mQW9P3g5datpsD7umHrdGiP7RvI6y8wD%2B2IVGG01i0h3fmpgzpSpcQjBjnxgWTJMGnf6qmZX60SijinSzcsv81hdbVptj2lq4Hrkj5tnl%2B5EIvXOtKPHz8ayAcercrCeMHq%2BMLan4NEGOqUBkUgQaXOcpFU3%2FWd327MPMJrpuF8Z0zHwji2rFNUnCiTkHXizeQTRl51B%2FxTZ5KpBtn6o%2Be8Zm5UVpY%2Fy9LFNvqPZQ2feM924kGw%2B66Ou3mh7EYef6v97XVhiJN3X0rdL1i1sPzKUkkN2vUv3ttvKY9%2FRtjUtuXUdwOJyYx77%2Fo%2FdNTOuV01ZGf63voTX1mOZpWzKupBe16KHqNt4Sp3krg%2FuR4tF&X-Amz-Signature=596850153f6cc9797dac86f395e47d54cb727bc7801e443e6a0bfe33186225c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
