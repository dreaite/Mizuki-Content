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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WDJAQVA%2F20260720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260720T220047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHZObma6TfmB1efBqqiwXiaH4YrJmqCkTPaPl7P3w6lNAiBGYvXZDpq0f%2BH7%2FP9ivN9aH%2BJrncnyE1gMH3EAXsDAmCqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMr8LoG87BDrLu0%2FMNKtwD06nQog%2BHgWHUCT7MYEQBee1TEF0zA8FgtP3mhTbA3M8yFuCe6Hx4kb%2B6%2B7zz8NRepAVWztj7RkVknszHqZJOkY9fOpih82RlhIklfSCPr25shKabscioAD2LWJYheAHz2hy5BSXsmQAqce8SPwlfd2a%2FFdhZKcflTY4BnzxMCes4wLhBgvXxZPr4tdtClY70QPw0KaPqmYLgk%2F9F7reoW6Kshbsn2bw8FMKVN1fShAMBLRUADyx1nFSuKmN77Rq3GSu13L3XzWoIBsuCNZqFk1XXvVqxh%2Fu7dUpgBYTwH%2FdqzcuY6GsoNFmcCyG0sXnCe0qsYwDErIeOJoQF8OU4wewBr7O31QoF6WQpkxFmg4e28RspA2Pm%2FOdWzYc16DFRD9rZ7suqw4ZzK6h%2BH4fK6OEUPGY1MwL90k%2FSltRRlqxfDM433aH4xWmrlwNcRQe4z8LNJhqcw5SFEquqZE2Bca4nIRtJPDTsHTS97H4np%2F0dJTSuUbv1s3Dkwk3XyU9U3%2FYaQjF9ZL5MA%2B4vJL8Ep0ba6WmaOGLhyq%2Bc8JgvrFuU9wed9G0%2FIMF7h5bwzaOnijEt5PE7XsxfRfEL%2BGmqjmEgv5%2F8Doggc%2Fsc8%2BqALGoayxMvqlBpB2xW9YgwkZD60gY6pgE8ajD42iCVXPd98ER4jIBJYQYKW5wqrE%2FWOAVT76IoWANCzSQr%2BT%2F08BFdXEdZgpZQ%2FnxxnBxf15kO2LxapZ445982UuczurrhZZssIG4mZMINBh6%2FXpDZcUL2ZqDOduqxk8LSTPuyxRhB9539IFhKfN7PJE9xiGS4AFHmTKVCQp3tqq1xbXgy8LUQ2497LJAWbD8NCDt86Z1c5JNByFIiOzH3N8wb&X-Amz-Signature=72865397fb14115774f8da1c7d4a1956baf0a0e8783e6cde00007020325eea5a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
