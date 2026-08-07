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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPC6SBFE%2F20260807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260807T034950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCdVbVxHkhWQ2M9Eq2JyeYXBZehFiOheReJDEEW%2FdrHpQIgN%2BVLB8tK%2B1qiIiUR0PCL2jjaQbpSS9uio2I8DTobGisq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDNQeJoIwZTWzGnvEsircA3eKZ69mbw0z3wZcvliqJBo3GD8piUmkVBcMOeQVdEqCswTIJh56UcDHdTL9wBD%2BrD%2FX5%2BOrcCfd0Ro2PI5hpxj1v7skqkUF0bU2tesDUv6vTWh8XDSGVwZbvLLFPanhuBto25NrNtx3Reo1PJIOb6IIGXGQyYV63UaqzGYXUXzLzYxY5GaxuPLHZfuiKw0ejj62%2BX4JMrJ2SZ65U4ILxFfmnGx7nD7valwfB1xaVhVNCR55QdTWxh3A3h%2F7IMWlZ%2FIC56Ncayr9yKPIIevdQkfPUgy6QjhcX6faY%2F5J%2B0d8wtUSTdbTSiUkA52uigcFi5gkg56XgnprKOya0lhVEgvCacEVX%2Bogc8278uKmM6mqoGef1%2BnKfpz99aJ2SBIl4ajAIuHqVOPRurEyBAvrx3uO036wapr4x6NbZ7r6ppJpwQgnz87CD3VxHAqjlu2XKcJbnkMhRXQy5Ibln5Lcp%2BeVYJNozLbh6%2BPYBRubF3aS6NWmRakDusbQ5Ogv1DAVkXAIWG3lGnmNek47aSeEI3x0qRyReDhOFr8bbZjJUNvxPWEQqqfMvqbPRrZC218mmS3GxKwmO8FZbAsrZFmM0iqM5lazu5nsZNvHH2qx%2B%2BHF5O%2BAsuussytLNvW4MI%2BT1dMGOqUBXdNG4H%2FKprKX0PR5yJ86apSk9SXpL8v63LrM7Qh1bmPInxkzPTc6QGiZlveEXRllXVBhF%2BBWuQnLpSpbYZeTWm7XzO3Pd%2Bdz5wa%2FJzPKmNlvbz%2FRP%2F1LPDlo51C1aTunwuia3TeYYA66NsU3D1JRDqfUcZ8cdO3bHu1EFu54AdIvFfFyATRu3apxLolTG3TccovbKbb8wSTzNpSBP4P%2B%2BrEK8sfS&X-Amz-Signature=72712d860286df3c5c09b63903b58217691b6f6459717fb618d677e31b6cc418&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
