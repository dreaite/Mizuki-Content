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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLDQYQHV%2F20260704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260704T200959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQDPd0mGGXXeeGAAyaG42UQqnZYn7UDKAFv%2FxBHWJ0aPIgIgEWiVujc1n1GcZJJFhDJs5XsSKS1%2BgWLK0UUM%2B%2BJ%2BFB8q%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDLSJb6bvwpWc5vX8ySrcA1sL0PfUkaVQBAWNeIr19fgtb5uhQ2iy%2B%2FmZANmz01vwRc3mV%2FAguaaLdHHBXeNlSCdQ2kMEvYtX87m6rE06VYYAin5UwD4K%2Fmx%2FWgGfQeGlyBO5UC2S927a8whQOEUVzTVpKYX%2Fict9N5lFtJiAapoFFC%2FcFrN5KXY7VLPR%2BgYaDM0%2BBvk5wSjNkmmn0zZaAc96eHxk3RJFZlUQgeLDeOV5gYOSSJCF%2Fx%2BbEczKRl6efi5eDVQGsljMCJWMyatU7x2c8VPijO1AX5H7o1aVMBchMoyReEtjGzVlYFAAwoEYzjP7C1s54no058YvxuuM5VJ66vSpyvwSJ%2FRPg5g5hBPaI53I36S%2BIIHQV11AYsH%2FO%2BiZHSIR9ajJ3uqiXLWIG16doHCr8Ysy7m%2BNoBwtx8zfwKCOgcVbaSi25Y0SEYqL8Qoh3BKM7kS8J3kSegSUZK82mOvhKdaQ%2Bsbn3QUhm42x1qX%2Fo1dsyf4PbQ4PsD%2BjvVqsU%2FeSJGrt9NrlpIAzi1Wi470g6iirLVpVubBA3IAsG2%2FrxXMvEzqC4WcVppNlgLavyBIWAou9wfsycdOayh8mGTfVu7LEgAhJ9X3rAKgBA%2Fwz%2F3sBxAZfM%2FjWqCTJ%2F21QYICl7S4T%2B3flMPqwpdIGOqUBAiraqDB9%2BsSD7McsvB%2BBtCq3GcDEvPvc07oqyEWkcADFVQaMJYSRHnSbqmYO%2B%2BcsmuNs%2BSIkk2emKjmF8Px9qakF3TwgpQqk87s3sSIVtz0mnaGpJYeTP4EJe6n68bIeBsIjnJJRxsNgyoleNOQNiz9%2FcGMxF%2F9ji2q8k6rOFSQm7BhnaSQR41MxAUpMgKUFZXj1BhwLohjiv6I9cQxeCxthnjpE&X-Amz-Signature=da6e29421d91f8b71386206195923a6a720832b2fecc33dab18406e1a3776f7c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
