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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTQ5WHFW%2F20260808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260808T103437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCKy1PjVDh5wBgpMUHFX2ehjcb3WC1B7tN6k%2B%2Fw83omjQIgD6prpfAlKhWvkoRSeUW39bxDVxsWulAzp9ejXMhJyO8q%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDGh92kn7MvZSEmTNWCrcA4SShPdE22BTjSr0j3hwhJjZlavjQp7wkgvoSnxoe46rJLhlo9ITvchEr7tKeRqxt2a6TL9ApgmEbIveoQUG9XTVufnGNnO%2FXt%2BifxhSdz3ssvWJ6xHfguJZCd%2BMOd6SeEVnvjpSDDp7TKJwA8OS%2B1IL70rXcg97defFhuohwXQSPmu4IH7hj9bvqb4wk6kDVIGmDpXdoKrvilD0SRpVQtF%2BHWtn5UzvgSm0SLwGxMlY2tlL99Z8LlqQeoKbGsW8PY4u%2FpOvl5PfsUvvbx7%2BKxpCBFEdQc7%2Bxy1pHccRgVGiAem0F6lqDEC0%2FztSg54Ub1drJ5kDDdBTEQXDIZIGV%2Bk5GkcLyoIOQvFz70Qepm5IMpq%2FG19agH71zTAEmH2B0U%2Bk%2FmbVHqUOjO29T6bgmXXoZKoK3%2B8s%2FiQM%2FfZ3kMl8No1VjqOFP8NonBSNKWa9dsJ%2Fv2DJj7L2kkIlR89AUc7EdLTOXjA3KKe0RFOC1WfzX5g3iiqTHzGT7FO3LgzvBSGTHMTv40rG9Oxk8eO%2BvoR0I5TaFa2Wyj2XFxRKP37nRmtcmWn%2BOYi5%2BF6qKrvB6BXJvZWixMVs6fdUsOVGhwJPv5zkC4cb7MgGB7mJOLBInMXJsABfJIq3XdcUMNjX29MGOqUBBXQn2aKE5BPfslb6l%2BLsx%2BOAOKn%2FIiEIWWjkgRqBaLZ9UGCUreV2lguwWa6CufX8HSjDWlVgnbIY0e0xMBSUDNgSxmPDrZpBx4Tcd8wmlhaCIQOR52Y9mR9KQBj0Rf%2Bb3S%2BMON%2F8hqgNj9VweSCzp4jSnoTCip2pZBvO1UHN7VCy750rRI8TAK0phv1u40IOyDXPeD5N9e%2FTQ5pirc0%2BSsLgyKMb&X-Amz-Signature=44848f77c68b04054e772d73c83a942eb8f26b5b9a39c7f6a778d680ac61f34f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
