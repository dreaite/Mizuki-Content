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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XI4ZHSHJ%2F20260704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260704T220001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQCdllxGZApNhDTlAbEQogCIG7GP4FoQxfLlhrAGNRfTDwIgLfjdDctTuLnHQ0TVysEW7VnbTXZYoLXGm%2FLZQtUknLwq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDOAUrzi9dBUZ6BOqpyrcA2iuAHSa5Gwj%2BWk9JGtCBQGqota0JF6eBD%2FA5Uoc2ZsmjX8nMOtAIL3byPR7Bqxr3I8d1cZVeZO6kwrtvx%2FDwmura32hxiqMbdcPtVyA4XWcov4mcjliGkxWGyBbXW8raYuCe6rjFFY4eVZEwXfOJUUtnrl%2BHuSvVbcpdNrOACBqGUVrrpR39vNr9mCQFBcOK6zzIVYmLA2ZHzrJoPHZ4AST%2FbQ78kTjKTTJ6yRF8kRh4kXeJuRd2QlKWTYy0On3O5u2uu69%2FE41EiiPbcmyh3KHONPPZ406SDv3JzQl0Cc5AXUuQntXU7F2aFsuzb3wPk18aB%2Bp6sz9ZFY%2FCVwmtZHf8BZtrt4xV1%2BjCVGPgbDwzS4TruXTZVdt9hRfBJVa7cBiIF4aZcGVmAJJUfDGvJr%2FTaDBO%2BZg0EkYW1XUSFm1n5NXFjAZD%2FXVpeIsJPQOG1eOc8sQ2yXIXWF%2FnHV6CbHV7rgs1Z9CGTloXfXdS0235RWMeKR2%2BpVRfpbNLvLssJ5wcqI7Uc1prtsQ6wccLI4kq5IvloOuPwn5SKlJ3eNA64BZNhIOyK1DL3aPzqcgEvrc5mfQtZ2KhrTweIHrIjR23XivlGK9Nk18vFmCmXcwHrb2t4sNg%2Fp0DLyQMIv5pdIGOqUBSqPfRkrK23UY8iK7Tkzjoeftycfz1Cu74Z68pFfvooLgOBXBB8ZxJXcHZJ01ORMC8dySPl55AbyQmfPdVah2k9UlrQ1kjMCMqo3jn9Q2nwOP73FLXAdkwMxhrgCYcivXhpa4%2BJMSp3w6uUuFQVvkDZJfPWqbR1BDkMfrcMXym1%2F8g2cFplWepfu5q0Jm2rtRox44GNQYzjunEy7TWVdWItVbSPl0&X-Amz-Signature=384ad762c552c831b624f292350f0d733f0422d409204c63348eb98632df1f49&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
