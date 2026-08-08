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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWKFVQXH%2F20260808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260808T014503Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBXqbHnZXvR%2BpZYAuC8qzDqLzpOakC19QH1m04fC9BhPAiEAkmN6D7APIgStp3INQzD1S8wubtEw74kPhXmepNyKYR8q%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDFGdObcZs0nmoZgpbSrcA9KyK7Wat4RTEzHku%2BKwoiCuKcYT0vzGm1I5OoienmjAlPhZ7l7YwcTYE9YkZ3cJe9%2BuU1EmzFn4n1S22c%2FzSWTxv68chQZOArEeZ1DViPEhCdHX%2FiED8uvCvFMz0aDkkLdubejNNnZBQSO9lh4mdvk0bpwYeOkM8YtgIH6L1fd0UZKl2733EzMHrPF7kNCjLiup%2FpB%2FwR22P1gVUG4fu7DcT5BRv9k25BVpospnLXLfxuP%2FREwm%2FforYRQEZfwmgMTyzlvstGXsp%2BtZTO5aNNFfCNSyi7wY94xCi8e%2BZHUaj9Y8QjrFl8qtQtzO%2BEGJrymtcUaRK1gS2HB6ZLT4wVcQ7UrLDtkDkyXSOQ2od7%2BhpgUY1unAWdt7dtgAX1FR0uKNQ9LkVGRGm3QIBuDYoiV89pHJ%2FEjZ76qEeEsSqlLUd3ekAFA2%2FJ2R0b1CKcRCJByBtN%2BpH8Fcq%2BKK1cFd%2Bxmw50mmjkTbIVz59vjGQdhldCvhNGGIgoueygjwjbN9nrNPSkOsdoq7UUWRnAya79Fe%2BIIKMmRi%2BwK%2FdlcmvfzIPTWZPt9jpGDwu21vpKtKQ%2Bu%2BGXMSQmMdnOwxfUp1v0oYpaiWmZ7igiysFZJ%2B%2FA0Frbu2HezpqEzyRwvCMPLs2dMGOqUBXh0R4EDsApiTAk36QGrI4f1%2BvABOT9oqqczAObaPCjGvQ8ZUBeqASns0gD3s90TY3CL3BHCXfX%2F65L7t0Bgplb5ULlOMLCh%2FndGuvqy3Xm4Bv37Y0rDRA3cxbwhcwZUEXgtU3YChez2%2BsYfCza6KW3enFBtLnvlzJYfmTkJcIoXEkyZKl1CkB5oYypqV%2F%2BRtHeHwC29EKtFrSQrbkIbr%2FGSujNEU&X-Amz-Signature=c9f0da64c84b5f5349b8934ad3f442f72b09dd6d2ab111df218eae0ac0719ed7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
