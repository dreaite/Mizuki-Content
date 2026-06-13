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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOBOMTRZ%2F20260613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260613T052144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQDT2i6ZrC5kGaCCNDkj5QR7yPQKo0WvRE%2FQUZxmARboSgIhALm9T%2Bc5rfjUID%2FKh%2BxdAAB85Od7g3fyW63Dc8clXWHtKv8DCCUQABoMNjM3NDIzMTgzODA1Igwl%2BJlTgfDfDDRd1cAq3APKgOw9G%2FUq8J0jRV%2FIi6E0IV4m1Svkx1Wp%2BtyPCe6f8PeQcL5wSSUM1qVkxivp0Wtx2NqWB8GljtiOxKRP2zM6rUuZgMx2y7%2F9NA08nxh%2BE3iojO9AttDETW73V5h1ZWsqSGXoOWToPHWm%2Bzf4v2jepQ0OlsbURLTC6MjD60bRNZHoVs%2FQxHCUxYZYMlmJ3W%2B5mXgkTUvDhAWK0SngXIxucfswi4%2F1dm68xM2iR%2BuoSl79Ntw8fcye1%2Fxfv5iIsoqu8wpskqb0PjC1CwWUXom43uezUKE401nlBHYh1meVIrtsMNZqdmK7cU6ek1OXogOicUh0m%2FZxemslX0F8%2BOxWihD25OETbFveyCX1zlOAYdeo79tjPiPjto7dcllWOnzagEZO4Lurtu3KNFKzY7q2mL2KwKV7TzcfAAdhgjPNuqQccna7dpjR12l1HOCWfhUXIhuXHzTeAdgQSvvpoU7tEA2CpvtW4uGdPA%2B%2FNi7yjCjujPE9YPUA0IU7eXXe2d0TCc3t%2BqQvE625fkssDp4VYQM3Pp0qUZ7TuMQAPur2LAava8%2BRBQhC3X6fgno%2Bn8nqWs6u3UYIafhrr%2FxM2%2Fnvt37DcJuX%2BTNrxj42AlCPZm9ru9zv%2ByMiXtelqjDOtLPRBjqkAV43qzqOWzn%2BUKJYjALxZELD1LA0aNnPh8qrZ1muo7kz9ky%2BTHudu0U29IZMQ7xcC7omZReeWo2Xpp8s1qPNB6LR8aLQfYzwIwfIA%2Bv9KzSSK8APth8WoLUISU7kaKpdOAvZOvrqzzURcbVQyGabHZSb2lLh3rNsS%2FRi4RwGMKJE0FacpJ0H38rfjIB9Ro3QumoodWl7Hol0pR6CSgglTQVgJm7W&X-Amz-Signature=f4dcdf883171c5d38abcb69d5102c94113eacf65d882eba0341056f18bd3420e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
