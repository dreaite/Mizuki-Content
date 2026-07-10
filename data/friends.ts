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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WHINKMY%2F20260710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260710T045305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCxct8rRfKIRZO%2FL6PtyabSBOu2j06ghURR5DE9mVkdpQIgFIqNmgcwfuG8SzHPL9iP%2FuK4Ib5YRxlHKD0D6a0qk5kqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH4XnBwB03pgJMSCNircA9mJZqnybnL4gHgcxdPrFtm2alQ%2BjC598XETOkZuwVNAEY%2FhUMc2OV2%2FQeoFGcY4XFxtmg3RXvSuGFAXhV037xPE6YrCEXAODFOQsueggefsVXEDq4oqyapi42wfbqE11UHQ80sD75p5luZVcCo4t57XzQKL9XaV3n0PzegjKSY2M7LMrRfxCPHcJISZQco9sMDwWhF6UwLQFF1OWZXlP0cU%2BxhN1p87jHdOx5aWXZAITgGk37dMDZfgMQrZMiljEAwRR%2BCLNDTFyFgq2jxKIPg%2FGcNNEGJ0fe3u8qJ01qMGHyP3aJGtlVje4W7qZGg4ZvqLkId8Gxk8ZN0CyBBqICSj62epcIYN7N5cRe%2FqEACyeowfzEoaxf8uXSVsz8o%2FZcXJCFooiWdkbEkZaKYxIpFUczwsVTtE3bNOOlL%2BBaDnfieSaaNZbUYCF9nAZE6EFEhvOmx8mQb6lmecuq9mShohZzSlrw8MWoMe0B26PEHeSkTk1E4WbBsRVndWS1I0xe7CjUrobqjVNZH%2FmKibZ7ZWkNBb4FPR%2FksHba4zz0OeKNQ%2BWmQB2N8jtpnFmO3RfDlnDPc4tahTZP%2FGDnPkFkfC7tVXaw8tU%2Bz8U3v2KcczitN3MEFNeQjEe5mWMODpwdIGOqUB5t3oYRi4o540AhofW0XhYNPgtEnM9GLVtvZiXoyaD7midSYLVLhl8%2F7alzZ2FqgyvEWrMV75%2BlticEceyS0GGrk7WQ3BE70FXCNyvjPhhZGrytNtPTSvaeOzA%2F6%2FxPrFux8CZUsjW67mEC%2BGSXC5ri8I2OQxaDbDALH0Uawyi%2B0vsLzkgTjRYlFWwrirkXmdeAuntZziQNn3wZwPih41K80RB5hn&X-Amz-Signature=aceb2d6d90ebb35a72eb7f6e33711106a3cc08f8a5f1a2051558e41d169cdaa8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
