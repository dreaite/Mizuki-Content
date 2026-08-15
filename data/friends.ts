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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6W6R3XB%2F20260815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260815T152123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIEZCkdEzu18Oq6UpDdRY24h2vgcNVe1J8QF17drvu7nuAiEAvYs3UQ48LIxM%2BpIShwaLnFZfqA0MQ8A8ZMRoccC605Eq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDCu%2FaG2jrt%2B2GB0nNSrcA%2FUL3%2FAFuvnijMK3GLXb5u%2BYT4tr7cU9w%2FEgIjEK3rLnfye%2Ba04hf0R%2BMe9juFqnrUe5EqFstHkKWi45dFt1wkM9hGI8ERbUcsDMQLUiYTLRV0e2cv5lptXtBEi268MgLHE5s6A7UZ3N%2B5M3H89%2BAazq4Nh80WNEaPd5ZHAO79YVh%2BBapv00aHwHaqlfFcPFIY15suUgD60QLqxvGOcwwyc%2BakP9xlCySTYoXECK9WwJ696pcT1Y0rPCotR5n3FIefSR1qeTmiTzlhClfHmEMn0XCruJI6Q7NlzM5BoYGWKxSiNKckKaPCEtIuSA2pnrKOBmasscJrciqhSh293vfSQEHTmvBVHhK6FUgpMWgFV4qZvnp4AZr%2B9GW8l1s%2BUASI3m1gxjMosi9btLHdTK9cKZAo25uoIWdHhMmujuZVHccI7bDq38D32NHMP1vgVibC3X446XlK5024hcLqt1%2BE9Dl5JkfPAPY%2Fko2ojb3%2FI3myYT6RNgw5SP2YebG2P%2FkacB3MTqzyWcKBnN9HKzBJ90mAI62vp3PGLTkn8byHpwPk9joFRAJIE0zcIhLJNnPOIlm6poLTjiNk3F7cvKuGRxxiNMSWe852Cp2lo8DApkpwxh6VJgcve0JKjpMKqagdQGOqUBqLkpJpOTVBWEqXtylUSZIUQO1emQyDuDPprHGW0XcbN%2B2aBvufr0%2F6vM8bYHuwpAu4Us6Ygrpnt100HfpNQ6YzmTok%2B2lRfDFPytf4awjtlMwyxwvvdF0mzhnAuMoOkC%2Bsnv6wSS%2FXShi3%2BSAVlYynyDgtmUX8AVQXCIBDid4UAju5jD%2F7zjkk4QkBauZ%2B7iMRGiXUpRPUN2GOuKx15eHX%2BUPE0Y&X-Amz-Signature=16c36cae4dccc8fd7192b55aea0be6d62b56c4fe1aca3e35abc963d00e99db72&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
