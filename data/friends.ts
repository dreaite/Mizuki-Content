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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RZEL4W6%2F20260728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260728T181507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDMoFVSIkY1SaHBnz5mzW33dKyqsabDsplGEC5aow%2BX9wIhAMIp82JCjsp9S1vw8tv9TwFGQK7DGMmoXdb7e6n9SS%2FXKv8DCGsQABoMNjM3NDIzMTgzODA1IgwGmcR0hzpVZxLrvVgq3AO55n5fow7tkSb1F2uBNzgPodQIb4zduwmmYWobN6OPGzq0EjVhxZwyThLpspURFeEuUk9W44EjZHtSCfm7M8oMLxeUIi8uaNyBNMDGfp9AE%2FzhW2Ln7hthe13CR%2BWB0we8YQPBjNskABf4wE8x4N4FM4BBQCw6juR%2FmQx1zvmJBhccGBt2pSjAHkqWyCH49xcb5KjMJNNB%2BYp4kqXwKej5LY%2FfSFJEnaDuWE5n1nMlHAgABQDSvMWargP3JCfZWR8h3IldMP5hUw%2BvaOvieXZLvPI%2BtV4i0OEgJSpZMULbEM1Rz%2BSvyEc48dv60g%2FSCLfYOd1a7gCEdxcimYKxfJwOX90jqhNjIY0Grp4iDlRbyApGNU%2F8vpxXJukeC%2FYHZ3Z6r8KCMygUMvjNGtAAn2ncRvZ26aX29IHUMHzMlBRVfMXt5oq%2BMasuVC1qRxnK0FIOhlSVlOq2xZW64o%2BL9Gm1Z2HgHy3tlGQ7RPzkJxZUHqzM3IuF9UohQIExnLNqWw49FXaXaMU73TOjRxV4aunJHZyn4zzVyyX3aTwCWSTAbYNqe3VckuFEeFaxBAnv%2BMzvZ26Yrrz2QpJ46ZCkfiS6sq97Ah0FWIUWibMut1AbstpHaUApOsgDfBlqezDl16PTBjqkAYRFEdC68b0U7GMx9opteVYvIUktv3AnUyA6XM%2FOzn39EzEKTXK4qgF3X3Pn7D1djrVxL1hHZtIadBtkA6KBENyEOjafIptwmFrCaN4FDS8e8gxiTDzOqcCBPUghuiDwkTUKqYRWP7TWfwIkZAfy0NxHKXOVT77olNVtXtZgCoKFRvCWIlEXPAheEMwPfSXpYDXIkoVo5uie2G05uZt%2Fo3nh6trt&X-Amz-Signature=9f5aa49d04b163381ddd3bc13cbd948ba1fb130feb6f1108b7f04f5a5a6340b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
