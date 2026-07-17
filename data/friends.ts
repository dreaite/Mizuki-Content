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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6L3FPDB%2F20260717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260717T095854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGANZQXeVLUWgJPwHefTf7wuvterI%2B%2BcnthczCYihJMgAiEAkC3bMp20xWiunFt8CbTcOi92uN%2BM6skZwbYK0%2BjJfTcq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDFNjvDjOHGrSPxSsgSrcA13pWn4kyjgW1Cn1oM5%2BgHvs1pg9FhmY8tIxCF%2B92qpJK7LDgWkz88SohpOA0uYvq83qfNRWqSS%2BfjFufGG1mUyHjxI6Tlm3JPyxm%2FBcCwvWEsfoGFyVJj9%2FuI3E3Y9sFQn8M5Wko7XnOdf7JRcLFDFVPtJLpoBO8TTtwCEwBlLc8gkCmMTKbW7yAsQ4B9I8o2bRMFHDSqeEEcLZkYBXsHGaPYe76Km%2Fr5eNm7D5BnzoMyXcnIu23MkLI9k%2BkDk1lNeLj%2F0WqEqSCdMEjcdDcQdW76arj76lVpPnA7e0jADlbiWHCnL7IV9r%2FSV0fv%2FHL182B3cKXyOhFxsqdz6hg1Qxl2aR2zHoAwJ1kyTn8JNEFxLDN6bG3carlXPsL0PBREVCRRGFmbxlEImTW4B2dJyenlVft35u27laF8OzB8wxZHWRpsUzhiQP1cunPoLUcTkqJ4CHStHuUvFEe8VVrDntPNwBUrVAqDhfq%2F%2FnZzE2YTFqEzN140HJVa1YlCR4skBma70YOuEH58SI0rUyz98L%2Bw3YzKnHn1LrzogBm4Ux3O5nnhUV%2FsLUAjxvcHdFgw6dxuNLNdkPi1xgOUdNMRu2CGDpN0L8ZfVroTG1u6i%2FHnGC4GKYXzf8ParjMLnf59IGOqUBq5hmMksVjRfNpfrsZEb%2BSSwVaXuC%2FyNg9Wh%2F7yVjajlKtQI51jRGFhJ26MgOLHt1su9phUFe9erKATd8ElN8scw8rxBR4sNoogzXAZ13mz%2Fo%2FgT23qAflOlM2TGsjAvYONee4asqolWadMYXPiH1OKYZ6xmGgq8zYdQ2vH2NsRFjvL7gDHL9yE8riGo5PDlCluP4cK8RlzO9oRgulWYBbrP3%2BL%2Ba&X-Amz-Signature=ad79bb43c29f34acb86afa405a5edf15ab7508aaebc0032e2e3b7e0578b75d9c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
