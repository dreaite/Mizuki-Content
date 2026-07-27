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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T32IX4CA%2F20260727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260727T122443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH6PrLl4AtCSAJgipxJesovvI1lK7Cn512h%2FLqWfgGDTAiB8tAdeLAFoaQvckKdFiP7rtAWRMGeh%2F%2FSqoNxnxAEq1Cr%2FAwhNEAAaDDYzNzQyMzE4MzgwNSIM9M0Q%2BFLTucYDgdFKKtwDwUZHlNM%2B3HUPkT2zTI3AeEUTG8sJNwsRYoBtCOzdbRldmqgm0n1rayP1cZcIetNKZZJl1RolB4%2B4encWbh5f0r%2BKHzuTtFg%2FxcVLqO3UAXYBPcZ7KquJ%2FbJnoECi8ZkmaERuUMrRPL%2FEHHYbom5DYC6Hma1PcAahzIvK7bprtyjOClSW%2F6vhcr5SRDj7XqYC3zkmyAt%2Fe%2F5lcG49MqyoEFw%2Fhu0oPMZUSfxHmLK0Xa2AivJe5DdKPAi3nKJKM5CelePvguhT0MXgnJF6oxEQA2hc3qmwMXAeL%2Fwi10NjKeAC6viwRCELBjhF0%2Fu6yayaXxNLL4vgJU9dM0NlMCN4eiyveD2uc%2FjfiavVKzLXkrlIxFMkSYJgyRUbTD4DzU0jt9T4lc0c5JffQ742E6%2F6VMU%2B6dCtYhvLLbsxvhEAmUNWn97XvVHyeXoc7D22YvEExqlKlN9i1ivyOFQsoAIWSJpWiK6KisCMsxg78SkkPyb127pHlzQ9CSD%2ByUq6HWkMIapGLY%2B3qnWXfD897q3vhm4zfISRzn6Glvgk4sguOY6OPyMlPFxmBaBUUeYP8Y8xQes99fPVAWDdDfr0OktNTSbmZHQDndKK%2FRb8dgIiWejGHVNMO1zRdDWVX%2BIwhZqd0wY6pgGJiQVRencLopqauB7%2Bc6KYXhgWxd19%2FWt2qyncaxmFcYI%2F2EgznT1K%2FtFNTuz%2FDyzuXn3UGdQQFb9LgkwMvm9Yq%2Fa7rHInLdz6ROAab5wNZAEukm6NsWzTRD9iHZAfMQgSSUzHIzn%2Bnlb32Bb9Fk0%2BC3Nqs7GA4KGS%2BudhJot8JYwOfy49jdMQ9%2F18ffku6m1wn63sIoymsZTNN3PXRoMhUX4UTAd7&X-Amz-Signature=b77562d90f4729ef1982d44ab8f94c5badbc5b5dc0b76e23d57eac1d0359dc28&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
