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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FDJJOWD%2F20260730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260730T172650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGXsWn6CzJX7Ytpj1DIkuBCxffkPGSTxCsS0zL%2FlaxsyAiEArJuPm0Bm7UzjBOpTUJv4NEeHqfza6nawwRdcRmaO4CkqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNgx%2Bt3TGtCXkW8nlSrcA%2B27zgRHg34urouF97NqAG%2BmPj%2BUtkFsm%2BxocM1E35bE7xyqOK225AZBQOcLgqGa6hl%2FSN4yR8JPM5UE4w6tyaxXdQvr8S7nOPFFCfrdObV5irsaiuS9NK4HySpN4UEeA%2BTqAtQy6IUB6F5ROLybW93WHFCJlG5y89jAF2ZKONJgNJrsYy9miWjkpA%2BmZLzJT6GNylzK7ellIJDmLtpx6raiMDTBFlwgB6aQ8EKH69812%2BD6IHLBpQqF%2BhLR9dC1APL1nhMXahay8Ool0E3MkSEF7yDyKRnO8MDpiJLPofuM5GHELHxDwIb%2BCr8zns60btEOPdA6Tcnb7rTAvE2mpXIBXmdeh0zssEYN0GEtQ1kn6eM%2BKzSq8419gBiOgrvp1wZ%2FuVmbTMzSgp%2BVsG3tJ8bhxg%2FRwEloj5cQWQ2HdoUzDCqTWYirXH5sGUEng%2FhTemCm3GUNuZRlVtByKDfSWeuyaowE1ckwMImktckzwT1DSAV1kiqxzvs8BG0ENecQcuoYdWJPTKI6kQCuXCIU8CzkJM7RvhYRcwRfeyNVbbwI1mAs4ZcuCAxrdDRIh574mLO8MYaIIU1Qq%2BfDJVm1frWJXDY0k1i27wDuCHUwfsIbCw9CVgQ4WEjpVTK3MP%2BNrtMGOqUB1C%2B8WVSotfL7gNRfJ1EhFPxBX%2FPyZ%2FQcsJL4u10tZJJoVfVYN%2F4td8hQqHa0ZVpFpd8jIAAcTecjlZJsQgomODZZeRpQFw801cK9OV%2BlIyJ%2BUYJ6GhgH6c%2FQcbV0ScRSL5LNOetRcUGI%2BTIY%2FsBymF2Z606EQPt3shSTVGJLZ7Wr9kCimmzjRIMHB1XYVoZCyUam8c%2FquQfOUVduWLkK85N7DHlc&X-Amz-Signature=449265f1276eadc312a4b95e4b8a0c25f4690b7a4c421379e7e8cd9938b60f67&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
