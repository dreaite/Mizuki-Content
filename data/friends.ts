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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZ5NLCJT%2F20260807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260807T155657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDRrN9xeDpZPyktHiFb%2B0O%2FpjJi6NCNbaTsN6LqiMzRWgIhALNHtstyWrFRz6sVcIXaKQ9wgfiWyTgSnVGxC9jGQmd7Kv8DCFgQABoMNjM3NDIzMTgzODA1IgwgT8V6hZPbepkNtW0q3AP11mfafrVl35ABcAWYzi6Lk9ol8KoZvWTIhfrR9cI%2FumLmYM9SLiVfAdeYrr3HW4Ib9QykbrMiw8r%2Fh5svDodxgJ3CYdU9%2Fw8jxzgrspG%2BwQFbFvQynQpsatE1gYDeIV0JNN8VW7DonHVzWu%2FH1KTa8FwZ%2Fk9Rkc1VGfR8HVcLaMXZQL2xE2tn4sLKfFN1iwCslmYXKE7S2AboR6mkgQ6rSU9x8JkOGRcj6D4KmQ8QhVDv4w0WxbOUoT0t0w16ZJGMN4tNRBcSKUUreGkjlpr8HRSjxZfW6yQkKs8Xhmo2ZScm8WQnNJX8H%2FBUyX1I7d%2F00gJVBtG%2FpTI0BslHRRVzoWlcSzostflfEeBnAKzcZ1lE%2FuDUksgikoalJPaFyQak2QxCcJ4d6GVNeDVA2DsmB2BDub059%2BJDtMzC1M3lOC3eIGBzpyqL6HGdEjmYacpweS40w4HeICcC2JOcmVi45Gf4NHXyQ9jXUpAGuKnGQjkBm2rIftgAoH6bLQRCybIo6x4VCiMgJhUqZOb6fkPr4NBuewjOJXamYWVRPkxrow3snj1Nd15zPuzdQNqYmRn39QfMNDsG9hzeUshOuG7mrSKSqtB0CTtlSDMnqPPzShmLHxfhhSruhMC4IzCr4tfTBjqkAa6B50L5NOsp2gvzCqvwWbqIuqRA3a73tiQHm0ZYSvXMWHwNCWDNFbbNz5B9dMtsIwB%2BF%2FWZxDT1Ppf%2B4edqojnhn0sOm9JUjFpTehr68yDPoqHPsbN07vECMR2wJSyvLL2%2FnCBszb%2FBJq5Wd%2Fm8amhMXVJ8DbzhBxY3x6YaboRTVCkNkeFpy%2BH5MxVmCm6x1ViKmYGoQpugnZQPSKXTqFM1R%2B%2BV&X-Amz-Signature=f8a42413dd56f83b431546dd0e89ae5f7b3da9cd6be60b1deeb94520fba232d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
