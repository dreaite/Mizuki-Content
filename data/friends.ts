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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UQ2FCUS%2F20260719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260719T115936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICu7E7k5Z2CoCwoKZvOgApQR%2B%2F%2BY2RHxkg7yuSWFytZ%2FAiBdgeLQDiI7M1Pox7NxQ%2Bl7qmQW5em5ZmTzVLRnZLj21iqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXihzmh7liki5ZTXaKtwDQh5e5HGxd4QgX6v6n%2ByXKnMNN6VRNISHLw1qgqqfo1OlkJz%2Fp%2FJtHEbvJjZoyChlVixkeICZCbP29%2FW2bJx8VtirvhC6BMGFL3wYVh%2Bc5ZMx3vJ6YpP%2F5cDJVOzdKq%2BDql5Cpkun2x4b%2FQLKwblxFAyA06%2Fxa2X6cxwtMCGm2G%2BPpiruaXIZNHhUluRZEGgmEGivIgPWiE05wFPqVpRAJ0kydus6yTleGGd%2BRMUj%2Fm5G7lXScUDdrfg2xhxCwmyvXL%2BpyV%2BDkoIj8PsLsSTklHivY0Mqq8pgNC9gcCyqQSujA9wMdhF7VY51RXZrDtWPUZGEegeSohsrdvqtljpXU9ecayB6IANoIV17dwswscpouKkQ2n4bif5a6SVXeeYJNDeHI%2BHSQ1PsJycpsAtGseY5i%2BY7p2%2B8h80bvVGDx7nom5Y37cyQIwOfEb%2BQCBmOdIH3ftPB%2BMtVkyKHYJdjTq64PG5mOqDY5rNGeZOKEho0LraUjnI%2BKoBi0e1%2BgBEnvAWVopD5xYAkhI%2BKCLCwAIOJNH3PPY0SRh%2FLHiRluZVG8LvPcMY%2BT4NDwWdEOc6akuEpVwrdmMK31GefWENUnyWLQjiWZiIlL9pqDDWiPb1edV8Rc6zu6D%2FtlBcwvqvy0gY6pgHKMtnlPzaABZdoogFZEVBfYzGp7vpIu8wutBfVzKCUsZ8%2FERYaGbtdbIvbTv6Odv3WyWxgx4he1xTyQtctXqJkIVF8HNxbv64zIQ7ytiM5spb2ukhVQZVFAdtpMvfIcS58%2FuCXKOtY7WviZ9DUzkkjBw3BwIQ0NlWqMhBAm6XGnyRg0qNsFNYcT8a0u7cbMoOLNQoregN9XSfvvUMgooDI%2B0AXTUIr&X-Amz-Signature=97b6aead020221a7c173d49fd91e6df44ebb46cbf00fbccf944597c1fc92f5e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
