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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZY3I5MMB%2F20260629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260629T040842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2F95ALCf5Od%2BWl3J4ND59OFaUBNO75f2DO9Vdw6j4ZHAIgBWW2A1tXBo%2FfzanMi0SItTqaz2k0Jn1KG1ANjxzFo0MqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD%2BXu%2BMduenaPgAkzCrcA9Sj%2FKnIW4m4GQ3TvwGjaTns6aESnaqt1cDeZ2FsDbn56x1jvRuAop9G4uLfbwAYPJX%2FUCoe4cysQ4iCxT%2FsdEj6A9mMlYhqY%2FiRSMVw%2BBG8eGqxg3LVVdzBt%2FsavWDtlNbip3QlrIu0DN5Rgn4WTD7Xtvb5WXbBy0CirPkYwLweN3%2BI5G2js6bFcKRElyL4A3NY4%2FWGdRsksMF4QO8r8zQm%2FWWhF2VTOndLGQZ1BmG1hUrxdtNhikIslX3b48sRbHF5i7mruEjGBKzVqZFOQS65%2FCAYt0Xsy5a2W5Gn3DdAx8n6QCi9W%2BOe7s10DuQ1u8SX2njTdVVm5tQ1So6T566dfTfelzDudgmohTg3A3X5vuUwXfsMRpMaYkA96MvMZFtbRcB9O8o%2FIVI97R5mqTFFZrND134xaCD1Wc8qpjmyJn4Pp69sYYlD5jZGl0YGRkruEo1LkZirwNe%2F5vMw3%2FWXVB0GunVk50clp9cX5QD%2Bnb3OUbqvCdF3KsLeBtqiSfpyuo2Y6f7vsrptgkEuvzizPJu%2FhvVJMISWzfn53ZegTBqng9oimlTmvkK6SOfUScAWymWJDWmAcRUIxiffS9bsEPm2HNfTwtHcPuuf3OzsoYGa3dW6LVuA40nyMPLVh9IGOqUBmS%2BTN7L6tdS00PvePTT%2BuxM1HZ0dew2%2BqnWI47SydLo%2BE3kJfyWnGQjaSa0MpHaxbMmmH69D8%2FeppHY4gNkXzmZHXgtc2ylBmDSAz0yGiCD%2BYd5m9QHtEasCceg19a66moG3NQRJ3LyTYRYTnryNIvs5wkKb6Ku1tpAjh1R3Y%2F6AiPQ%2FO7QISGPWUyT0YpAJ0fWRC%2BpMr9cJ7HoMMUsW%2BKaSIAyf&X-Amz-Signature=30dd47a50dce759e2d3b1716c0a0d120bbc02d4e0b91714cf0f54eb71db0728d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
