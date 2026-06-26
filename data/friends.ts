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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5CLKKFH%2F20260626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260626T204751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFp8PqxZMwGwJLO%2BrBh30xfY%2FsOpTnrlknXkUY6QJGfMAiEAroJgLGCWqzH%2BeHitM%2F%2Bze3B%2B%2FcN%2Fbbxghrwhl1wzHkkq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDFaHQEcitqmqvMUzjCrcAxJSE2q1Aq%2BO9R7BPqUxh5sI7jt2Lpzbse15baPSBEDGZZarK5ysVMh3YwwzNIGCQJt%2FJ9dFYfJQZ3AsuV7ynY4gh4oZp8YhiMVU28vr3rwekZsn%2B0n0BQqU6sO9GrSOgCv0cZkktfFPPoQCRhDBohobFuXGRLNI%2FWRiworDpBWzt4ifR7Y06E1tL29nADQW%2BrzwaFttKaPiItPDzS%2FPjTknWKRtGPAQqArqCwF5alrAb0NAETal1%2BPYnUMjfIuJjIvsn0wQfbPrbDq%2FuAmvn6PJjV3wGzj6c8RZt4wksPHZUUsbNMcn64fRCedaMUh71KRV3f97LAwXLyI2qr6zZwtoBxOcQHhfHmzJ3nu65FpzOYNq%2F7XX%2FjR8h4VjEOYp9OZ5G5yjeY4ujEQTuVEcdlv4SkE5PDJtqWNFY%2BhPZ1VHHvKM%2BwcmV0VSf9Jjnmi1xNcdH8ACO7Xv4LKUPnW5XKaTDzg8hNCOems4NfJ0J5PrbZ%2B%2FrQR0uv0nKiqaAAZkL%2FYAJoRNAulnuaBwHMWKC%2F7o%2BrpCHHv7O%2Boz5pvKr%2BogZgppLAeQfDZ5DD3gmPIe%2F3wsTk6XfAjaAX2MaPUzmMvIhk3u7z%2FaarlJhWQr3cpG2NJxBHgC9wMP%2B4MBMLC9%2B9EGOqUBvfpSFtkMc85FmSaepQLqROJXnNTKkfY7Ad1hFzx736MizOw%2Bd5r8pNQy0OjGoOYYYYpZo2xxx%2Bjh9Te0OmqkiC73F%2B6kSAKYhoWeGjBWA9ri%2FFLqN5eKzzdwCv5O1nbHxXDnjzpMs5IJeZjbT0jyL0zHuAqvqopDHuty9BpJJGpv0kSvukPhUjP0FJPdj%2Bqh6r2rgWYPZg4Jk17AcNSJtnIdU2vc&X-Amz-Signature=5a85f0db7614fdbab5bafb19356a7ff4f8430e0f747f4aa8d269a9421ebd6c6d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
