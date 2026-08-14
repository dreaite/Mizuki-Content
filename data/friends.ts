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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQCXNDKG%2F20260814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260814T165428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIHVTeFtEUUMVvxvKzDVsLwdlcu3Ng57%2B92%2FM0im3pmOzAiBn4S%2BQUr65gybKzTuHYAxGhjUYJnwdgZJMPGw%2BY1U%2F6Sr%2FAwgBEAAaDDYzNzQyMzE4MzgwNSIMyNczN48xHxqBbbZ2KtwDEIhhvNws5Y0AoWnJKKDmFPqhejDm%2BV%2FHaLWpelbVwqmHak0wSAWLVARkW16Xhe7bNXwT22Qae6UgvgSg8njBKqrBAaJ1RRycWmZ022ODOLkTnVq7NRUmJ2tgETNveHrb88zt1smqALB14cQPiO%2FlV3SwWrIPtwZ7Fir6BY434rr5gV6HqIEe5JCIAJstr3cvOhnLSPh7Oy8XRnf4EUJXa0HxP5heE%2Fg6GPC7Hwyo70hGOC4JxFpn9ONs4gF3XsQp2w4rP3rZl6txlLOJAqUqUI5v%2Bp15GlH3zhVkIOZjdu2ZaY2Y064njvmJh%2F7zR6HxjjRbhu6k8LDDSoBRuT1ZCCrZv6OMj0HFwhq4MJztnIU1qYAtEtzQSa%2FIDA0qogNL0BZcBr16WRovm7TbBAcXmBYYJPv%2Frs73dlRYmVPQKJ86cnSTSsQrk5tlKs2ydS9Y4pAD415ErcGU1Gxa2lMB8eIoqvOhzcHKXqvVvYil%2B6tE1zGObRLOwhrqtKsWFratchy7%2FsnQI024TO8uHr14%2FJ89%2Fbuj%2FW19rp2SPUyJcFeYId%2Bb4sfUDGQI5gbzH3TyDzWsST8v1aFEdOPVbtPOD3eeUXWsPH080VCNpp7G%2B9%2B1yJxnlRUQV%2FR17eUwi%2Fz80wY6pgHlondCBJkM54hryI2KaAdGJK0b%2BzjJzmhPfTegF%2BsT5tiVb6pigSpwGAL7tMCs7ltc1IOJ6UqfMMv9Z%2FU3ZEMvN2HSDzq3cOjyqSEk6dJbijnsXUF4kkY07QvvwEsj01zTDxRdm1u8TDaayB%2BCUuCpUErBZNDpkmivR4JH7BleKKciguDUO2lIK8jz3io5BRNnxbiD88DSWhpvbG7hIhRpi4ASsq0S&X-Amz-Signature=1431418d535702af2d1bbf9e874675b70ce43fc887ea97b434988ca2c5539408&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
