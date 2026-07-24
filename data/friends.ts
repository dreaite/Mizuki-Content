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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6W33VAG%2F20260724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260724T145622Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIEvXfRYhmRG%2B5a9cFGAA5%2Bck7Az7i3NUR5AHamNEI%2FSOAiEAugKveM8dkoQAsFGFkrlTTEZZiOnJFIi2KjDILbZ1CvYq%2FwMIAxAAGgw2Mzc0MjMxODM4MDUiDI21iPQ2Fgv74KzSLircA1Er1DqRGdnv%2BFGGWqDVhEIqHD%2BrzRi1CMAjfp9y4PwvBO8f402iLrhAQV6epcJERMYl9WOrJiDh9%2FGyXwp7VhQSXhbDDpNvRZnEiTCJZOCyOqOS7zjdsOgMzPrQGOB4Pk2sJOHG0MhQ6XTcmR8YJInOneVMzPfacmsJpQ9zuvdY9RKd8WHKJR1cqcD%2BN73cGp1FmzGcUWPmZNFa1zXWGdtgmzoc%2FNJTgSqHz%2FEz7Ihi%2F36JlMwXpD%2BC5oIgtvNNkeL2QGpGtAQ8kBwvIqfqxGrTi63JKuuKSCuMZLWyjcDS5V6Gjw%2BT%2BnYeLCGWl36BfHcWLgcL08IdJvsWyKeY8lp%2Fw4CSZSIwbCvtNPDVyp0Md2vhMsvIMaEknoT6mf%2BD1dELKPhkbU9f27CxO4zWHPwRWNTAscg53jice5jIQ6C%2F4DWPoUShR36u3Tw7PhUpH%2BiwiQKT2937UFVrgEbY7HdWXM8Fy7LwWOfjtkyP9HImf7zF0jZHoTQsZyX7w%2FntR%2BpYudYzEs8i0A6s3z37kZkREBl6WE%2BDmZZZRXASCR164pEYA7ur45Zh7yWlFTuQDpLNeavn29ZzuYfP9htyfY1gXD0EuAG3eJOd5R7elZN68QuL8Ue2gkJKxO59MIXijNMGOqUBYtmx3k0wLZwiWurE7c2dFwJcSDeN253KGoHx8SFjuQC2pajPqGd5%2BF6QK7iSL0BXUWlVSStHKVHNNaFioc21%2FY9imNtizKHvdZD2fu0JtnJtuumOv0qaA1P1zCUK%2Bqf84LGJsmE3lNgrWNzRoMNDoZTGJg0xipNooRMgdGxem9fXtUfRx7jQ5u6zwW93XhqZm8Ptg6wXJifwCyQ5mckqPMsxKoqK&X-Amz-Signature=cf6f9ec262067569afcc43e58964682a923295585dce299676f81bb111629a57&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
