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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TQ7R5IH%2F20260730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260730T201451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEUZXWKK9L026%2BuupGTe9ukfKWq43yFCA4qFp3twHxWPAiEAyZxbGv7X%2BJTxm0sCFAMvU0h75SyaHbjU%2FsMjDUt8VmIqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB%2BjfiqVHZ4%2BlgpYAyrcAz5lksGKc67RXZOnPzfUznK542fo29cxXrWlfdDhTOeO18Xt5OovuN0uYv7uIuSpVDuocObsxA98imYIMHDe%2BKP4H%2BjIo9UAhz6oEbrzWbKLGpd9YzX40crhVrQr1UJn9xN4IZ2gx2neeIPZ9vzn0la2a7r%2BzbI%2Fp%2BJ8iiVMQOZlpaZKi3IpdwD9yCqs4iDBBrBQn3tv1D6dbk%2BuKHt6Swfe2rra0JDls9omWfHeDmBMuIFCiynxJKrkU6Q8dakanFk%2FPzx%2B9hUmQBz%2FWchrbV95U1qZKcyQNoKzgXC7na6BC2h6n38LnjmtC6MyUnk5Hb0BU%2F6osQbMbLltukKqGIqBDEiwBZKy0U5tFSPar1NW855BCzz2YKqW9gZZZ6ck8XlWDJwn9Uo6s0GijAEM1v%2FDScD4SqrtImMsagr1wdd8JXBZojadL%2BnzX8gd8HQm1mnNvkqSmVjuyeXo75NqaG70yOX3TeZM%2FsZmptP39Q0snpuRpC395e826aVRcWl%2FAsJd70J18frpjy1eSMLLj3V45GZxZRYVUaTSeYsTAvS%2BFZxaa9R0Cq59t04do1miE9sW%2BgvxDwd20HRKjG6ck1WkBf8ZjYJRCF1VvXf3eYXMtVf9LBRiF%2FSE1uPOML7VrtMGOqUBROR8DpBU5s5xh0A8HoOZ0r4usgrsUwY58NF6wwuk8nNw4tgtaNBrnqWvXlTpLOb1OGepoPZjWOfaFzylLC9M%2BTavZsXUR8J%2FAuzGFCFkJVzuTpPAstPScihl5IPFC4vJsnjjQ8sNiFfXjNDb29I6YHrTF0kPBLWFaO9AYXkIgWS1Xzxfga2Kp7AzjHbHgAw7%2FkQoj%2F4sce50lPeV6yv0%2B%2Fb2SjTT&X-Amz-Signature=4552712f8db425d90af42328c7fbca35191397b795b35bd8263033623b83a291&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
