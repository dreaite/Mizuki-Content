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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X43KAJ3A%2F20260628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260628T192330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFGgILvosw3%2FCawdWllzb%2FNn05FUc4BPulxH1U%2BTKsWQAiEAoQN8k43d0RCtWCHO1DMBcKaYWaPeN3y30Sg9gzLCx2MqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBOGPhV5EaagqiCAQyrcA%2Fx8IUSWDpKHrks3YcxCEXPNNLzCQwh8lSjGmbIYTlPDR1cTTnpmsWAliOHFm7ubajIDhgnWSMJMDsbP745GQw6xxE9HOmzsE2wuUm0milI5LIlHqRV1ifSzfjV0MxCo2vtHp44jRyGlXC4VVosVEL90QBMyTrwqYufjrr4gc6moRKAKMHP4RxIzN8i5eM62KeOXvPmAwfl%2BiscnV%2BCz7BH14ajivAmjTD1yGqBaDd2qFQBdBmmQ7powq%2BZlU74cMA%2BmpGyPT344aTSq3S4r7vaYI2%2FB6RfMdMljZ4z5YgxvoSqHr33B5RoAYCpuxap2%2B3Y5Pj4Z4DBYUS%2BKZwWJrIzhjqmO0Uj%2BmLJ69QEHECRsLm02Vl5pPSQlE1FGwyPHOU9MvKVee0h1fqaHdj3kTFskOkHqYMxAtHiBWtmmH9BmB50okodij0X%2FiiExylB3dj3TkkVWPz9tTLXORkaiRwJDRQ6lkKvbEXYgC2Zp%2BJe1SUrk6N8Ri4nnsAySNndjJ0Z35UHGeN15LKsOV11ETfQMj6Rc0J632OS1y8YJC3WqSsq5steBllFqjXxMe1kbXYXyMTV1RxJgLve1BEbDMRWSinUbtbjuUHapw9qW%2F70i86Er78aOjCCZsnJxMM2whdIGOqUBAt2C9F0ub4%2FCIyl0DdRoOlYzFydC%2FwRt55rOam6m0Z%2FGvDUG%2FidSPGTdRLF65HevL9X%2F0KxLqqgZn1B7Ey3kd4gESEL%2BTPP0PUA7x%2BrqlHHYo7i2fhU4tbm2xihCuegmL%2BmFQ%2FiWBvjvl8raCLweyog8PNBoCqD7qKyCe6hnVTRuYYbOgLSFKtZZMScPC1UPMY9S6Qw%2Bj70Hja7SHla7yXnEWUrz&X-Amz-Signature=798b5a74343c5bdf30c326c187a4b51979a0b0223fa3e02ae2c0b86c30d47db6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
