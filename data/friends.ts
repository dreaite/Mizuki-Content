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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657XZHBNU%2F20260616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260616T194011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRSYJuRkuhsJwoPZ70EQUaRuD0r%2FGNTqfMnruc4L70PAIgAvniszT9OEu3fu3VzWWXoMo1SbKgMpL16tfgSFxZQ1Eq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDJlDQfmIxOi%2F%2BhbEUSrcAxkf%2FzKV6zkjOdRI6HzvvmS43qLkday%2BKRvivBsVtgHurpdxCzxRSHVFfzyyVgSTTH%2FDZTgPAralaEMbZvRBpIIyOuP0uBE2M4Hi608bjB0QK6n4P7KGxBOw8AEGacm5dEuouwNIq9Zr1kZSs%2FkcjuiD%2Fvl3%2BSK%2BKNT2T%2BSSyYDON2gEGANh3MRnlUoR6QUzSm343dAo5wM96aOrquGuS6KCT6W0dqPSP7w3mqOwOwPvGh9KPcTlrxaGuTcmHiEeFNmA2WbwaDAQGfYE8e5mpWO7EM54TSMVukVJL%2F%2Bq619ufsFaXTF%2FDxRyJd9p2GroSdSGGib2MP%2BEehe01GbSOW8zAmYQmB5Q8MfjC7t4fmQg5Oh2plP1lMXxxnEMF7G9GHuV7vOpeToGQanLa3jCtxsgIRU0VGVHbbvpI5CRQyLqlRynzMuhSof2sMJ2MFLO26ONVFDw8RExlnmzjHLlsSR5uECuW9Ap5rSvnh12YWWLk6ufaB53vV1CAB7SneZuUbaFipITAbYz6vP3xM1DrUllYdYiWjSOMEtXe9CnK2Ck%2BSm0RIy4t3DOxYyxmMj691ogyetnHa7NYR38XnCHT%2FHXlAxLBEWFi%2BBMh06gv8LPkyUhtL52v3E978Y%2FMMynxtEGOqUBfQJBvaFAWjqCCTrHXQey1dPS5Oig%2B4E3jZl2Sfqr9slA29ip0fCbahWtOc5VMjZm8aMwaGQEsoyFqyXYOf4y79BgaY9xHOxe58Kxd2T0lTpuJJ1XodXEf4y3TDZ%2B%2BQkK%2B8YD3B4rCOhcDhkohLvZ%2F9lnNUhzCJHfY77OQzKxAp83bftl3KxhuzvZG3ZvkYbHeXxUS38lDH95NZC%2BrkvDscEVWoSm&X-Amz-Signature=997f9c95118382fdb0c8003f1f1005ff0f7ef12bb6ff790d771dc9d3c0825b69&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
