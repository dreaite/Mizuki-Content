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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TY5JE4YZ%2F20260721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260721T154504Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC7PO5rsKDukUxiQllRDQE6UffZQwsAQRBKkF%2BJBKBkUAIgLgIkgzH9If4srm8AOmW6m95TMtzpMBkaII7UBkNVBRgqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCJ9AL65GwL%2BIOlxkSrcA09ATbDAgZSSlgTupf2r67othabFyBkCRD6lbd7GdcTaFgK06dahPy0TAWmyu%2FN9PVTUi410GVYic3Ug%2FqXNBBaWymv3SAs6%2BkN7SxqHKbhsXY2bhEHNFM18Az9X2MTQTiBgypc05xsoPACwIEdzokqGm23ZAeTFAQwPv1Rmn8gO2v6IuIImOu67v3IfEH7zhjDSwMVa1cGH2eE9I68ecaMllPOeXIbui%2BOy0scElvvbktEq%2FurO1fmqRT4%2FzbN9%2B0WoBDAx14wpAhouJsWwlOPeyZq42plBm%2FxIcJIBduq5ddcnPdSvHeN58779jdB3NIbqv4vRv%2FGgyUQqwDcMmbzJi7XuUwXsn7TFefhUtEDKxKVsTp%2Ffq703TJYEcEI7wcz9m5NgOBIWtVe9PKSRMrT3EoFyHZCWAe56kC9YkjoGaJH49gewQ5BcIJhLvI1EJzSIBINPNof759j4exmVenebF0E87dr8RLoOT%2B6RFSRpI3RJyLCrWlUgr3ilkK7TD9t2pa2QcKJ7S2HJG8QmQGGidll34RTg2ki6KJOS4xHbol6THKYslpnW7OLStBsmML4bgvaqQ7OOw9PlAJbim%2Fc%2F0bCRLy2IpHuXYSy715tESk1tefjTCS%2Fw9JURMPD5%2FdIGOqUBfUNDQAYdh2OioeJbPFnkRjdOpk12TTrOZQolSbLYXkzPbPyc9e0P%2F7lV4KAFGtoEJ59yzCy2ABi7lMkAvbXHT%2FG%2FFZyuRWJDtR%2B7ZW%2FHDWy3aB5nQwIT7uHMKPqJV0kM1RpXVXXwjWF0kvDnsmnEQNeFYnL4%2B%2FhyYdEKCYeewNBo0twqRYTeM6urnh%2FvmFWwZfIibzRCkbXa0ftV2RCusbyaNiCy&X-Amz-Signature=7a9d53840567164d1ce90f69d4a93defa77ffd300654a05ab7eb34941f8b5d3e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
