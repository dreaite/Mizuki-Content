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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNNQ3B43%2F20260809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260809T015104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHpPWNgkoo%2FNB4tYG0vX%2BdeEBRLnIEHZitDE76HB3YZ6AiBSRTemFbTf183CioJmHKXTzV8ID4tMwtguyIXrudSzHir%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIM7Is2enO1MUU8%2B17BKtwDBFEUWpAQaikVGreszfkaDOgqMNwn9Sv%2F1guAj1xjOJqBpZafmdqvYowEW8NpfA0PGXpYsgleTpxGJQb83W3oBRgbvfze7hsRcTyHZPqMj%2BWl3ISjDTa9D99n645fDwy5MzWtKISPlSFSfwbEOqhaaAqfKCnY%2B1c6Y9ajrPffqgVNg%2BkzzUi2blc1%2BPs%2BOW0XmO3TMyjU%2F6Axa%2BTFJFsXnlHwK3G3gERDUCEyFds3zABGTonnn3S9QCkw3P7A0%2FUOcPBw9enSNTS64QsOkK1yejfKVjjgugS0HI%2FV4Qn4ciRE7GTyOtVQ9CB0W4CQShwzPClaYfEwYF2rPcbnhTKQF44wRSry16pbm3dwoZJZijdmZel2RGj4Gp8upR4swCRMO9dNqnMZaDJATsuIsWMA89daBTmGRD4sw2%2B8IFcsdklsHlf7mbBZK%2FlG4a2khyJ32noML30yzcbY04FZqTXCONowMmifIg02%2BBmrDzkrnaWl4qdWWJ8s9hfbFj%2BouyTa%2ByY8NCY4P4lFznjNUPS26OIr6yxoG%2Ft0UJAEToKVm3QluVQryLcD322cPeBrHF5gPbBTgUjlrOSK2rhyN1sdAx4VCuhd7LpeSjRDK462ogyay%2BRUIV9da0Ag6cYwhNPe0wY6pgGTVcBeLaNTFfeDfcIsOJBXd7QRymu2OL%2FNap4lahSm%2BOnYs32kxEgyQovSKP9jbVzAcvhlaZ1Ne%2Fku0J5kaTgJBNTSLJdCkqDEinsHPd2oBpn6aYWuBO97%2FTgkexSUbKYs5odT2LiAwpFSu4aqcbAoEjboqDiGv2qXUHSqdYdXwVbJ3mkrzqrFzMehBykLtlTqvEUBeSDNrJmJvGioREzQDyXzMAMn&X-Amz-Signature=b83431baa1449135e38c1af1d1b0d4129955288d72f2d460062c6a7270f075cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
