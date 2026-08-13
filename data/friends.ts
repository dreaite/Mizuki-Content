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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675JLBJEW%2F20260813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260813T082138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJGMEQCIAlpfXpNNm8CK%2BPd5xwo8NJPEHMejWXyE4okKQxj4%2FWZAiBeHH8o%2BXYhTDSyuph4TBTYFQuAFaxIGLHrPxj8kRfLeSqIBAjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3on2f1Gpv2wtvimgKtwDTrnKR%2BhzwXD%2BQ9ljWBB5AUi4GyliWLZDprrpRiL1f9DWQ5UEV1k%2FZLzZJLVGGWXjl5Lt0tMZpsx87pYsfjvmLsFSJHrpQ4Hy67%2B2Iu1RpboFO%2Fr73fR1aB8ffDUWL7xz2bDlMRnBoUyCnaG6RQmBALmzEw%2Bjs235tRxa0TX2DQ3a7EIxDObAQkhi%2B%2FYb4znjQTOGdo97vFDpIs51Z07RBC5oxZ%2BuvW7pRDyi9Lv7q4FQprcBsLY%2B6yXz%2FjjhTDT4sK9sqWUn5GY5ZKWJnycCXF2wEmoCeSKc5L1qsFuNGFWwSxd9uHeYKCMWdjuwFKvidpVmKVFinYSG4mG79Os9zHkoNTEfOIWTOFZcgKd%2Fdp%2Fdy3JXLBh0YTw93IVIzfBRi463gACBESXjNb0nqEvENRjshkmvVa2uYD3z04ZuG%2FYCst7rbD9OIwpOpwvAKFCyKnvgGYARfPgl9ZuIHnpIkJo%2FO9%2BK%2Bnx194avN0LiZlgrJQ8H2OEs0pLLBI%2FIaOwxptVqP2c1B%2BprIkWeDtPyHGeNgvwCU2bBJxxcYHu4hqYAhCzgJ4qjr%2FVAOWyZEbi5v6rLc52tSs8AJU5Ki%2BzWDiAVnpQNYycgJx78VjJkICaAIKRKlgeIw%2FLnvqww5Lr10wY6pgHZsblwkQOafOI6%2F2ASRkhPiQ6rxJInRAJ%2BBGunOQV3NgNk6eSaR80ZQN%2F5k5yPmW9I3O9XLvAb5m1VkyGvWAViAPdujW6RfJHHNfGOrCvs0zIi%2BgAxnKSS8TRngROPyZzSrt2vs9HwRJOOq%2Fuf0DiATmStddNMFVcb8IkS%2Fl4Jd%2Bdaq2t3%2FHORghsfNc4OUPIRMGDayKBcH15jgaM41%2BxzdTBfVaGd&X-Amz-Signature=9740f1e341a3488a6cf337dfc15f6cd537cab724168df15fd37346dffcc24f82&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
