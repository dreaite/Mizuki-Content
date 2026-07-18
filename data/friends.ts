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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SK6ITLYK%2F20260718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260718T190721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAtT0pYlVAdskaybM7Ds1mNVZIoauPBhrqWyw6%2F2zHsyAiBjb3Ve6gP%2FpzxbPE6M3S9jEmuVOBOUncxGsCX0aZAA4yr%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMvJSfW51TLQZckjfvKtwD4UdOpplO9Q8CEZoo5h%2FM3dmOg8XQEuyZpJXQlieNYSptPNz1x80AYd6SRVYjko9IdALOeA2JDlESA0VL0diCDDkMvwEwBjQ6GetffGLghuQOcFgkdKFjQbIjhvTIx%2F41qc2w0T3cQvSPNh4UUKOnnrel%2F0qhidtl0rR6fESO3F10GPO6beLAvJkDQHGCMkUd5m6CSyYSddyTBKKfP06zGSzGwW%2FzVsS8V%2FSLU6HYpsbVhjcrkK5rlpZeJFikZwIxCBhMuHzKghhUSlY02IxfVBukasFUizAul1DlnS5iGJFFa7ldSYKEnJmoIGOgiR4%2F1GyVBLFtZg52X2P3sbD%2B3gIKIDQppbQ7jDbsPKCvQq3l7G5PuXq9AfIzmrBMnl%2FEPEf%2BXiiORojy3M6He79fINXDZ8UZ4kRB8UJsj%2B2%2B62M7uA0q82zcxyenqTsXnDFKQtqMMPXJgUZoem77mJFI0vxQfrkcHoDDo8lXORF%2B3ixWmdnO3TfcL8XJWpSbVI9r7TrgGxKRs%2FFdPShd8QaFv9jx47mLb3BELBZlj%2FVa2monSBiv%2FNWh5R2zmm5gRxUo0ymW8dYqGmMLRJjYNV%2BhUo8NEOst8ocW9GpHAQ61D5X%2Bznx1klwBDYeRgLkwo4%2Fv0gY6pgFaKRBazDQvDO9i%2FQrfyfi4%2BY9CenGlc%2BwIczh8yy%2BD3IlB8LPcPYjYkhqlZtgTOuzqEu4ELz4MGB0AD2IuCUeNWtmNOTNxwqwnW8oO6%2BXi5LoXDnKUYigG%2BA7IAyM7QeR7aTsxMFtZckg6DyT0smi4wfXs2tKTIUroywpFWZcZ28z6AZ7fOz4jTbLqh27ln56UOibs9q3QcjzxAQ9UMDtqJC79EfO1&X-Amz-Signature=30f0234d774289e465c2188c7d1afea605c2f7dc6a712b635526e7fa47ad9753&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
