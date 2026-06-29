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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJQWKUSK%2F20260629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260629T200024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDGfB8JfqCCT%2FxodmDQN4mY60m2GaffPIBWN3nMZKNRsQIhAKtKuEw0h9b66E3nVo1%2BFfTcVbyN3QAuyM0j6q%2BxwGa6KogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxiX4lmya2%2FBP%2BU0gwq3AOS7Q4sIkDy1Y65rwUY4F24%2FEKzi5ZsNIQjVYJHn%2B4%2BOgWXOGRjyT79PZIyRpOgXjF%2FYVIfYZ9ZjXcl6q%2FA%2BVTiggap2vTFy%2FD%2FM1lI4Ji1Q4LWMKCESZ5Y9QgdlKyLGyTkDy2F%2FQB%2BSlpdbwU%2FbOAk0xDZRbtheuZA%2FqwlmvojMF2lm7jmaix9R48Y3I6lGnPBX3hxsMKaQLF%2FuZrD3XxHbClfGXt%2Ba1mlF4cCrZrDfTXl0M25f8QLcU5CJlo76h0FIL9NxscwwzGGoJyR1gJNp95Et%2BS51AO5pbzveetiDqZtyKk0fpyNvpz37Yguc5vXg6etDEGlgqKMHbbUkm5mfsy33eeZooCXIEkj%2BSz2a9WBE8vKzeIzBu6dbF%2Bw49hrnrbf5huEICdzhc6arRTA6XXdg5JmY%2BwBqAX%2BSzQiCWmLMeV1arT7%2Fa1I79FlC%2BSVf3tilJeMI5n8v%2BxUOdyQ2LUmGEpOwJYnS409rvsi9bQi82N%2F0HwjEbJaBFNsMACiWhxtbgO1TXh587UaBVxX4QQmSKMll9XEq5hdQcsz6t6etLUlNB17k4uhHl5Sp13%2FLTgjTHAKfLBknetHkW%2BVeB1RXm8OLaJAdFyouJBJBTW6yEiKHRU5y5bWRzCNlYvSBjqkAQCI56oUANcuTRmjh4%2FW36TFXyN3C5bqJxydhuSefNHuEEjiMjM0H%2FU6nC2fJbrN83C%2B8fpoWzwv2n4%2FcINZzQSz02EnlvK3UZcrR2sUEgQCdE0xOOBqICP%2FdciW9SSB4GKR0qSWfEHo87pF%2BEABY7s3JaldTU9g77KVCnjf4hIe2yzaCOgNUkK7qz4XLiOSBtUPLfWe%2FwLiH5cLJjXd5jVviweI&X-Amz-Signature=98f08b2caec445040a04af3216e53c8b9e26bcb300da62d239177b51f6f8ee42&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
