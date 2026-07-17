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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MVUR34U%2F20260717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260717T225925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDGWKJ5%2Bw8MUhC8%2FFKtQO1%2Fu72F0Cj7aP9yNSo%2BdZ87aAiA2idQSxdq0L%2BVa4m3ItKs7CbtU72wk1j06wT%2BmF8ReFir%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIM9YAlzDUBvNVPSCU3KtwDvzWGgzxOkUQpIGXvWziJYuczuG1aw6qKP4vLa5pB1J3avpzT48J7oA2OD4N5k13XSFpJtTaSmuuLIZQ5v%2BNRBmSRIkGuD%2FxL8E1rwgPECNAm1nKly%2Bj6z2m8KQ1M13ipKDt%2F3ItX%2BZpp9UPqjnAt8FN907mlPxk0F6LFM6vdbfzrh3jlvzwiVtbLEnJBuEz5XEevJbgS0bcGw4SiBrCmUOQt0xuzlHF06rIfhZ60vd%2FIHooAaJHesDOgGRdhUtI69DxRefW%2B05971ErmkrdWkkLn8HXK6Kym4XpLzEKO6J73%2F0ymYTYuuojFg%2BXnuzwpDBlzOhqT35iHCIOwzw5XNCQgfZzX2L7NK0FrB4Gocg5g66LWv7TcFs5VI2lymW9N6AtRkTLii7kLUIpZM6DUDyGTcYcAS2A%2FOtGBsxGWJJPAPPAmCrDsgi02lwhymbsxJSQT1R9WR18ejZofIxkU35rVwXadneWERH1uMwPyG9PX6LEWf%2FwWsdPFfwMNiCCcq%2BrsQewUsy7LiPgCnqhk5ESPpKsmaqt87jxrU09xLVqzfyAjKdBrterWqBiZLNF0rs%2B5VgOvKS%2B5f%2FaY20MGnhz8XBjQgB%2Fj%2F89wNHVBgu0jhdGx1SB3DJv%2F9UAw%2FM%2Fq0gY6pgFQr5OYOynJ2xLbNC5%2B2ydQBPAuRVb9erRNALiFspI0VFheUeuSokKKp00vIYx9Mgjld9m4acKI4vQZLP7UwKD8Y9WJZ7e4q42hHJg63MZV9ZCcigVdHExTMVQJAjEZ0cU0Gfbc%2FL59aLa7a50sHjl6r0OeaJkKrr5VWv4UmB%2FWbsHp3eMfUMJmtC3kGcGWeTvsXxGpq9h%2FqkLcxvoL%2Ff9Kkr8v7jvd&X-Amz-Signature=e4510c7ee11d8d0b113db656dd83edc071f87a8af1c02a1fd1b2828bb09bb16b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
