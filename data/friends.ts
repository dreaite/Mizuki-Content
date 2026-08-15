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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QHQHN7B%2F20260815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260815T043216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIQCqk8fwMr0w4g58ksSYEFA2gfdwmLgYFS4qLDhZyAeolQIgVly9mvoEj9Lk3%2BdJ%2F1EZMPYE94i3g618dlEHSU5Uus8q%2FwMIChAAGgw2Mzc0MjMxODM4MDUiDMNvh8EgrIc%2F8bpbOSrcA4EXZfTglphSdLBnEDH79PpQJx01aCEJ98807y9oOlBmr2N21lGA4brRD7lZi2VDxEahGghwjp9P7gk5YLD8QZRZWEfhNykxU7faVIjjd9SBzVBfjc6xOB6e9PyH2lcjzCVYUgqZt%2Faf8FIxQG6dCY6zS%2FZQmVXGCAqIKkT24LHuPf2NqG86xA2vp9%2Bhx3zP3ejCN2D%2BiZkz%2BjHuYqfKCiSnTVdvzEeL9Apx1eqUGlDCWq9bkHsA67PuLalrYVg%2BN9RJqSsAdw4XE6Y2GKmVVmqXOAOzS%2BUkxxE50zzG9a1ahpFDT5vPWFpn6oBPryTUmFb1O2kULDV9ql%2BPoamFt%2BRCPic%2BvPiqAbRXmz1XOSmhc9B87Do3cROgIXMzXQehQ3E3Vu0ikEt7EHKaxbpAind8t9S3kUjX9k8Aq3EIGEIljjDaFhIH%2BjheSJkbhoMeXY23PGf9WCBL3aeOg3oDxgMdLwE9sycGSVbJ7qqSG7bx9I7amgdgEvBy3G9YjYY%2BusB6g77FBpAQ7UR2eCuRYpjO9XDR8PuKVcpipk7EOgGsQvSE1RWU7Y3H3K8qqQBV3qIXJuGrtAukCm%2BINFYwsvp60LpBy2QtJZu3yDJjsvuCdCsSVDc%2FQfU0bs7gMNP%2B%2FtMGOqUBgZF%2BKzXFTmyWj%2B95gDMGq91qd2jyVSZvmMfGv7V6s7GSokSPkTSDePnPGTihDBl%2BucthVWCBZ8YMI6lS9htHVUbdQES0aD6pWptIeOnxB3VB2q1qkA9R6uiWUezFeBrvxo%2Bs4InJnwSkZTucp8PKyhSQkAwAO5G43%2F4vFYW5xnwdTWUYkAXBJAn0LDxw%2F%2BtEDj6a5RCGoGBGud5W%2FvF%2BouofiHzd&X-Amz-Signature=1fec6214dbb892a8c6160d514f708dcc70c550904d8791243e2452f97a844286&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
