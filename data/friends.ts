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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPKT44O6%2F20260815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260815T052518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIQCm8QKGc8uy61sgUv841IihERFi0vAOS%2FL5QHMt1NV4JwIgHzidUV4u0HnQTnfElfTjJGazfThgvlAmPitGGZf7FrEq%2FwMICxAAGgw2Mzc0MjMxODM4MDUiDDjrFg5%2BwylBFEh1GircA5u1qRk4E6iTP5L%2BA8bJNDS4tLsqMh27ieYDtDRnmdmm9fKRdrD47JolK6nEi53B6Tm4M7IYIvJM7HVEyd2mZAB75BoITRD%2FHy5%2F7To03S94qV4y35kH0ZFdKYh6kIM%2B5W6caJ9xQR%2BAWrdGW%2FS17m9bUGMe0kBlYSr%2FnDizH2pL1K%2BUNejz4ArLJKD2hvwbtAy8y4DfF7IDN05Fi1kut3TKKfuumq7xHYsLVs0Zs2EsoY4y2Izlyp7L%2BKhtRXdp8YjHUbFmfOX7trTdiuXmHjAIQ8pWoQlfvILtxC6rHaOnlfoYwYhhFDSeZlus2c3OM2CmMtFxTupj7kLnMqPBHpl5yMTBpUtwqK5QCqDcVryz05eb14cZtSoXdiG8GjLNzWxzz48weSiaXpYqaEZssiaEVMgqJkX6Um%2BwIKNAxia5Dqs4Lf8AFmMg1W2gWyA5YMiFIk1KLbnWR1le3T27ndfshLRY08KwWetiDGy4OrAIGYhpYqXHsqv1Q8OS1CsBl6c0ifgmEdZVWzt5vYoRelRWGv3syqzA8IHknqLiGSWJNkWWZw8pk3hP0J3CzPGWBX0uG3A6gHr6OFSwagQvKrI%2FKO4w34i1e%2FZNsNn2x9WYn3F07sNxV%2Fxa7zhAML6A%2F9MGOqUBLl3irGPHCb6HEmu%2FsTESOi6agE%2FCX2LIJQnn7nG51gIb4ZwdPl7C7xRI65YjGVO8Gp50ooLVzA5jc6bV6g8w6wx40kdZuX8GvZUbGNo4gSRDBos62Luqb%2BpQiXu61G%2BsRXDqo4uRlV8STVlZ1dwwI2zm%2BMm7ckDOh50SCA%2FiRal15ekuxvOYb%2FwRzACw5oB7KSvMR1deCWOmE86zlFiodvcc6CDn&X-Amz-Signature=ae466a6d8c79bbdc7c37b8bd2171961b525f00f4596146d1d841d86b3a650d22&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
