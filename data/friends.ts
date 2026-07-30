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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666L5XFWJN%2F20260730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260730T063533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEkO2n2A%2FIsK5z59ePBTkLIauRSzecgEIShOZ4UuDIDXAiEAk015005jo71oE%2BKiuVk%2FcCJLPeJ4RfLAjZJj8Llhv78qiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCaNXQCVw%2F2NiZjpoircA3EQt8DeXolGcv%2BUU1%2BTmDC1T6sup03bbzP%2FEQY6C81m6pPH1lMHLJHZiarBWp5d0jc%2F8tLeTPX3ySmBAxJ387MTd0ZumlWFvd6VfCdpUP0Yp37vrEAqZ7Ge97GoNCeNlmg6X7zfkRVmrwwwW9ZXxduM%2B9SrsR6jcNzXcXXUgciQh6Gk9g%2FbfGuwjoeRJ1MbI2RVGCCUNY7dAi%2BLlPEE%2Fzun5ljQ77qq5UGC168xU8wI0Sf8lZYtbv%2FnbZEVwgT0e58MQbMkBIYPywgN2RyFhSyhdPkYzk6P1aEKsGVXSomMAasQEkqKc5dVYP%2BASEp1IckISWfn%2FU7lqhTCoMwxDaCldFn2FHzkqdobhAVoUZYeRYqLO%2BgHswoG3enCsr05pkHAGDE9XM8l1%2FoECIWUDZWSixiQ9O3UbkgsGYTzugIIdpf%2Fd8RcTIXvdXX7Q%2ByttHqN7V08NCda5u58JGeKrQZ0Oe9PwcnzYhq%2FgWoj6Fm3%2F26BBIehmGv0SjotNn1HC5zmSoo4P81P4G%2F4WPoriE0mr5YDk5NFRrmtpAdXwtAIXMCnFo95GQDlAYApk3iueRFyV%2FtIFQuxvXijJEbldz4ZVXM1DPb%2BsLdnuvgpGzBmM84Prmm4Mlh8hQvUMMbCq9MGOqUBZggOgFNi0spyZkBAIxTZAqQ1HK1WPWG%2BWl2zPXKOx1fn3iVnmpjtdJhU9ABjsuN2fqAWOArEPX6gLY6q0RZ7PeMUvUAuPav45OKXhyYf%2BDhOsKbb1EBvTtbDnIqGFaBeXWPxy8TFlRnqyAHseM3Do93LZVMZP%2FZLJ8lbjjGmeCyH0rP0Px3kQB5sC3NIfDJJLThJApirpns8h7rzozVx6S3qhuIN&X-Amz-Signature=faa69c7fe4db3d14c207ba60943c2f474b7ab3d087b46461db59b28e40630c86&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
