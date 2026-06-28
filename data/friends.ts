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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNVI5TGZ%2F20260628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260628T151858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDp6EJRLkkYa2zV3Ztx3F%2B%2Fb9w%2FySvx39SN9rbCLUAKyAiBAI10FvSvyyuqqMg%2FxUM4nnrw9WXtkcqFN4iB%2F%2B8vMTCqIBAiY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMn79qBaINQksvxSOCKtwDb04dk%2BKBj4ghBnc3mWSup1JbE2DBrkif4MAojIiJtjuhUyB2560wo09QhYC8aNORHi%2BWriE724jma0y8L4abjvillJrJjoeQ6eDRiyxGXZuLGaLo5oAjqgOdXOGtKejrBF%2BXqBNqBdpt%2BKiVpeRUdtewhdKENwRyARRt2HcHSTegrTS9teagR7UdXDDMz5%2FL33im6IEVJ7mXluvArBRNxAk1HTqPXyAXHaSGPY3ZdOOaHmgbSgwYgmSWqrmMypAF8JuvrmrLCzSx0yqsShrgU21JTdgiOveA%2Bzaga39XbB2vJe9wUy1m6IdD5w%2FC%2BEX3kB6CpA0kI%2F3LMKCsdVhjoicKWTtNS66F%2B4hVhLBKKLHu4NzIe4evmdwWGPz6KR0Lj4UY5Khgh0pLUqn%2BFXipiXgB0fPE3MyzHPQvBMvVcRBrLULLLl02lZMRnKqPIiaz7j%2F0hbiRBvfah2jKxIuqgc%2BNJaj1Q2z%2BOXE%2B0Lo95dd0bdL43lJ9mqfMzfUekFtPwe643RbTSIqMpXo3ktG4WtD89hCqngsDt7SzVYYh%2Fuowlp2KAec9lZyygYupjo7Jqc16o6QerBPtKppqALwyezO78wC1cC%2FeEcy2b5SmcjoZEEhUcleOwhylEQUwhuuE0gY6pgFVf2aEOCdOgZar9xdwXdC2uOiqTSIGw44tP0ii2wrh6zgjYWBfLESbfwhGYB9QNG5SKd4O0yTlSZG5XW%2FwVxlFdOGzN%2FStvtjV%2BlTMobsZNkvwy0XUE15nLLn6af4gcrpp745n1ppi0Hq8bg1JzjjQCNY00b%2FUrF%2BdsXm0KVwLNmYL48rSOta5nyssx7pObKe51QlutBvTYqw%2FEYy56fh81uZJHIDf&X-Amz-Signature=6fb5d4e1d3174b843d2d4eba3d5e15b5f6bc2f4e7043e5e2b5f816cefe6b6bc4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
