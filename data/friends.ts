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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2A5LRRG%2F20260814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260814T155302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIFYMUY6zE35cncOdwG9%2BwWQsCtCU7Gt%2BdxGfz5zbH%2B9oAiAYyT2GlnhxZrgDnIzveyCqD5gjvp3b8okF%2BrTz0p16bCqIBAj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxt1aYPp2Wn2ul3%2BoKtwD1HS%2BpUaGkuFEX2xVu8VXHA7juk1qUb5FhxgMzN0%2BmGvjpM5%2FdsjfmrbqxFbIbftQilZI0gFcKiuTHRend88ODRSTaBV6VYM04ppwkq187Hqy8pa%2BqL80SUtvK2THs%2BLa46FMVFdq6bCSS%2FjZdrkAjyJJ1QlsbYgKQ056bL%2BM93ArWx3E2rADLqMtDF4ZQlvp5dK%2FV4NIQV%2FPxOARXyHCYHRe8bNxYEyCCE4eRTe%2FfgYybeskPMll8C4S%2BtuZoMHXqNAxjDqkqku6Wx43tz3tvht7%2FT86QtPNila3CI0tTFNre1Z3zmuNCTHXq4AwZ%2Bmfwqv68%2BJnFOt%2B59b%2BmfGQEEKEiqxF3x4LGv3tJbtp2nEF2jMGU3tWhC9sj%2FfYxqWaht7NwNQ6%2BfYcdE%2BaQvk1%2FKiK8rIFixwb0p7zTdaRL4C5i1Qw2CftVNdLzGcvIJdcxPtqj2fOZ2yKS6pS2NRRIv90ygf%2FCQt8X2tR0%2FzBODQ4BM19MgEe%2FfiR7crAJR6tb9M%2Fb1nIRhS2tOUQ9jbU3XQ2ora301O12MeufM%2FR49V5rR3xoSR9LeWaM%2BycIugnvZHqvI75X9F5gJ7oEPz9rp31Ffkno25tfDbPBxlLN0M%2Fvx5b%2BPdb%2FQ6bGKYwhMD80wY6pgE2B0OPFgePJCUdwYPQkz2YoEEFXXXWQ3grEgi7Q%2BYmIY8PM1vKrI4G%2BwcQcdvDlrxTKsEyOhUWDnpfDYb6Q%2Fifnwoofg0kixtJHcGGdH7QgX8QMzvHBrBCYxNaaPzBDAHNLcum7hN745ouipmv0VszxDC6rPNvhbpyx5nXbemZFT7j8XVwNbuUkgg5m1o7HwbIih%2FIm5iwBBig1yb2IlaeQiYSvJmc&X-Amz-Signature=53714ea1bea0638da857784298c2b8c25be74c9adfbbf5d59105801c1e504561&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
