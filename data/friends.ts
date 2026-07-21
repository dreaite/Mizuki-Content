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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIWW7YNB%2F20260721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260721T032954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3QJaXqinqk8D5FPML63cSi%2B57M%2FJdo1wys1MZzQhx2AIgczVfkW1geGQXnSt7kiwq79IOnMQ4sNRQSqKJRc%2BFRcQqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPKWwb94gZZFQVoNgCrcA1lqcdfiRxH2hE722Ekb3twkZssk%2BeBniruqF6rm%2BW24D4OygAILl1pyvZ4qEMmezba6BcoK%2FD%2FprIRtDf58oMJ3WPjOpDEwVFIEYqYiLhlCTskID2OvoJtEFV5pfHbICBpjdM%2BGxYK%2BLMrd8rZVG%2B3l48hXoz9Y5%2F98wE7QAJ%2ByL4UFJABe2ZLWEF9mxxjVZGjrvwS3OaFhiURkKs0mj2xst9FZaWsNbm4K3oB1LzwwgIVK0dUP5S5IBm0BXH63bIEDcY1gMpvfT4WSl9zoQwEjCv5e9AsoejsJBozW6LUn7oDl6G9T1Q8mDZptzIhb6xWPUHVF06Ut41mUILAdxxul6UBn%2FB10RyeaOA%2FQm%2FVtdkXMG5cVtrqdT0ySBGCgBkkxp9gRqkTKSBPp7JodSqmWxmMxhKGaEJ9lQFmUm6deB9bVY0fEmzF4vGpn3b3rEaKXKYWlUW4fgL2J3ogIvAJUXj8h2NQhVZUnIzzu68Ev23J7858o%2B88RGHYU6QKHaHtxOHkjfy7sVrnWG9Wn2cCQCcoMuhQvmpZu6mx8PpZL4gTuVMoDXAgwW4nLBBQN5PMlhRUG0MkEoZKE%2FpTmKn6oUKFK%2FaCZKZsn2yJr3S%2FWZ2AG2MApt9l8C4VbMOLC%2B9IGOqUBlCnpjYXeF0EwHKyIEi7Xs3OwVoj1FxSpy%2FzsPVBqkiq9Ot%2FhITfLT691Cki5OpQJA7SFY0QDl06d8ljdvAu74l28YSt6s9CDwTLbRbCJvRTA%2BIDauhbipprX%2BQu5Eg%2F7b9HO7dZfN0mC6gfNLRsgkLlwXIODAVV%2F7JPoJRZrmFUeoYA%2F%2BV1vvaqMUrJE9SX2FxLqXU8trVpVzOKqGr3e4NwRGTh9&X-Amz-Signature=5a142a83e1cdc0ad85b46bb8c5ddb4807225a4c965766d2238718018f3244f28&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
