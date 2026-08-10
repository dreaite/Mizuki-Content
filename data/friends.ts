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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665I6VD6K4%2F20260810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260810T092340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDCUcrds%2FA0%2F%2FT7rWMUu3%2FG32HmgUlbxCTvUpQd35WdMQIgK7s5HdZeKFnPgabocasseNqd%2BHZ%2B3zRcthSBApvr1%2FcqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIoHEZR1BRp3xkhYtyrcA%2BE02kjNlvmB5fbdx2vNFxB1Abhvtr8kHk3rHLbRUeA56YCRjoTwCUuMVCkiKqXv4j4SuDQ0huBLOTc3i1Fjot0QAqmCABz8LtxXxsstuQmFFyAYJlzI7kosOFQHfkFl5VUBPMT341W%2BZyH7MUePRywe3IAAv6kj2CZyXtvTz9h8OCHKKb%2BFcbO1o%2FhPRUdGzaoxQa3MZ7mfdGTKEdQCkiMSMk7d7F6xNR1q7o9kSOwHuqMfPrj%2FOotA8lV0DjnHPf59xzW7MFivfoLbPZDib37dL226DI4RykobutVm7avhwR3pah4KyIiCj6Jy3NZ2y71YFX%2BV2ZZlSONRv9MneCDxCuHhebgt2h6hOeTowTqNSUvkjhG%2Bd9XPoy6PUm4RvSODx02ISkVJx2wBSDd2o%2BDLJYAJFaHhCEkPv6rLdAai08u8mAMqJW31BpgxyfcBHqhJuyuJHcS%2B700NxMdrMBlcIH%2Bi9mYltbWfNZjEsYihULM6h%2Fg7iZv4pkLZsaO9vzzOZ%2BvbnGvthkv9xqtD%2By5D8ar77ypezbnTvzFpqihrzs7Hf01JqVAnt1AyRiTcJNZswZFAX3Q%2BpuvcttkYOWMRbtZugrP5Schy815rYtHYGIbHwzjGcun%2BCqAZMMyD5tMGOqUBAM%2Bz%2FuVtW4VT2NzFzJOBeb6l%2FDhKeSnP2YX%2FXwmL9y0HyTfx%2F6ciX8xoFsZexllwjeUEWX3Ei0xKzYOsgNY1kk1mMwHtkiUWu27uypF4U%2F49SG9Nt%2FEvX087MfyYfv8hiqwqY5GnIOSXGOHMALwB3CShzJ9kgbrSwjT0MvTrV%2FnsiWEckJvVFLd6Ze5r%2F3uGcJQKs4OJoJLFi8LbtIYF%2Fu1Uz%2FZ8&X-Amz-Signature=758036638bec374e5e258af3a0aead2f45fbd0a2dd4c0521bd97eb3b36afe481&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
