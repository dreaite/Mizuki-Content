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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665E5YWJJM%2F20260731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260731T173920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAKjf9GvEDPwc%2FEG7VzzuXMaX8WAPsJqGq1LAWk%2F6C13AiEAsD2nmbAr8Cuan5QRvIw5mXAVjlNHnHOvhsmKw6Ue3KgqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD68JoLbFdaRION1qCrcA1CkYONxk9X1RzlNd8jOjCk8pjdETYrfkv4DGaZ52hD%2FM6aXa%2B5LlQMoTKmw8R2keT68yXeoph1ndsCDa41SCql%2Fd3fjiFjxEeKdjyXBbdUYhuOvlptUO%2BwJViAQgJmakfcZTxlMk4HJ5mEqc2lbwYVjhj7hMd8w9U7dMcEQ2AaoSqzBfa%2FgKmqKuM6W9qSl1L8pxSoQNypKP9qEA%2BH%2BQcrcSsyqSTPgpo9wKGGdcOf4%2BvoTBDSh6xn3X3CN1%2Bg5dYgJeS3dMowx5dMZn19ZFn5gZ5gKcvOB9OfWFEWKiogMh65yvTRtnEyixyNx%2FeHI5g8BfIKm6o%2BTaBepjaptDt5TlKYnUIkkEPasZfI%2F4GlIkdQDHgHN8vDtROVpl5mo%2BqLCXjA5%2FR5%2Bj2GAJ1buv0lfs17o%2F9HnDvHS0KbosF%2B5J1yfQEj2CFIrsZVi91R1KtxciW1asnMsYZ1KTEi5fg4Cs4pLs2ZLbdwGQgGp0Dajx%2BiKo2c3oedUHVQU1aH8yilhL1pjfcDL%2FsoLvJRU4r%2BViix11amMewFdOHcZ7NE3oarmlnMj17XT0yASzIErdmHRAfl7IG1OdLn6XRjTCu79LZiXec37cSwg%2FAVFDnaOI65xZFPmXqXZdiRtMI2Zs9MGOqUBPJBo9Dc%2BIsrQmveZHcQWY2b%2FhzBOMCVIN9C%2FneIxV1Dehvzx0989QkjOQl2lfA1VjFmOuGS%2BbakiaZU%2FcFCf7ZVa9sIlZLsLFsU2rWPxL%2FGkSF2rc0IMvm%2B%2F0P6bTb9tyXDa7CGPGVLGXjjTlc4TLmH4Z%2BWxXEcuX9rBgvSeOanNsjtlDDRR5fdNcdHQZdcsUSUIt1NvzorgNgMU5MeDmP15aC61&X-Amz-Signature=de8c678567a46b91f3320285e730a7753663ec5ae059a20ecfacdb56935cceb4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
