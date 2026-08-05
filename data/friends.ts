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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CSY2YZJ%2F20260805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260805T211050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIBEVG4yiXwVMny7ujQy48Q59q9sHqT4qdwR9uL3S4ktnAiEA8CH9XkWNvD4nYnFaPdkrkZWJD1EXLfcdOPPfFiOK0xgq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDPRKEt%2FEz0FW5VsaqSrcA2%2FdZvGAaRwet%2BYPyk1RmJvdtEGAlgnpA3akSK0HshwKrG4oNJzF42lcrR46bluTudUefOK6SRZ94O6ca9DPihLC5nHQqm%2BNuSepqYYgZ5UpoKpNqQepVlIvlce1IxKIj5oEmttek2z7C%2FEMnmWZsDlcxGkikiNNUF%2FeL%2Fod18Z05slT17H8vsSrTVpVeItS%2B2EmOwDjh3fzcxnJuYgD1QueWP9Op%2Fi8WLd79I0Rk%2F4G0i0KQXTWAJp5xX%2B6CWGBM1LShhHxCef4wjxZHubap9%2Fge2fCiXpVgXIW6i0Wa08NmYQ9GNy8lzTICvrYJnR9mnJA0lCIv%2FsCb62Z3jnyUq2LhrK5L18%2F%2FlOwCxsERH94td7PSWHAc6TP9xjpT%2FHjYPyrAi74jYFkAMXNljZDurSKci%2Fwv7oJFA7HKqP32hNEGmFPtf9WZ%2B35O5NtAjuCu7Rh5tK5ezKhl2IfJU6AHmHQYRRseW0c15HIwV%2BU%2Fky9mhoQFukthbj0UYmmPtdPlH5SFhoxKRAUOSsVAUSpPKKRtsvWnYmcB0AyR59KPdMcq9vcev%2BVDF90%2FoR71NGso6Pfb5blilU5zLQHYZhLBk7r3NdEsYaaLzO4LGuFQXHGwRMu7UIAzZjAJglPMMyoztMGOqUB9grgG1J1zviSkUD%2Bo6e%2Blxrs8cfqbpwqEqmDIEc4%2Fb1fHMVGUkeSakaIG0klF70khf7c3RBCeb6Zn8AfIrgeJQmqU6HJzz%2BdejxuP8OOvHV6N9aQ2EmYf6r466BASCoGxLpFW4%2FVW0MSo9VsY%2FHACAQ02vHxJPcM3di9R7WcRQQBv0eKrvtO5PWsfj%2FkgkJpyqchctFAbJUKPxf1au3h9q6L1dLy&X-Amz-Signature=453d1106c95211346cbb1e748ed3d5f67e43762bb975b8dba45ebbda06ad6eaf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
