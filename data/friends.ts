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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VO3ZRMIR%2F20260808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260808T193037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDgkCu97wUZ1DZtXHkXGyM91C36ecSiIdAXLwlLknyVcQIhANgv75QwFUBQpH%2FJh7qThGUu%2Fnlwu51z6BiNjroyABtAKv8DCHQQABoMNjM3NDIzMTgzODA1IgxamV8Tx71qVaJ9sM0q3APXR25EgIPIptTUUUsBGE3ZyBlxOm73NU86TA7N5HoE8r%2BXfQ0ecc44nn%2BEuI%2FxMmEkP8DRvNRmlQcjcvjC%2BZU4y7WG%2FipVFeeuZltZXROuQajwZLVs0V9H298W8xrL9Fum2btfSwvvBEEdfHz9c%2FccRBY0pX04qEiRtZ%2FMUl54%2BQfrTydOPIoaVoG5J6rr0i%2FfeOOwLpIG7uSk7UaJVQaTk2juHBeqVgT5ndzWdFNlm6YOzh%2FS2VuxERatJwaIsiEnq3bqcN86ebD8h8KmLbONMTi3L3VtCkKkH18FHyaAiVqHSKh86RsM4jc84FgsQr1y%2BGoz%2Fzcx2coeyS51AByM8%2BqyKZCKHdVKwUq6bVulfFn%2FsAmQVrmG37EV%2F7hXe%2Bye%2BJ8d85%2BGcOZA9KmEcmPrTwE7TRZn%2FmZbPlDQZJrQNW8xCbamh3OGZy8SNYZAX%2B1%2FocWzxQMsLl4n90jBtjjz1Y8FRMXqYm0cOrCe98z8Zi7%2Fy%2BwUU3m0hwWacYte5ftBP%2F6cRocCF8b1ihQyiBRqZLpVX6k9TBecVAuulydAv708kp%2Bw0qYGIJPV%2Bj%2F6Qi1GL8OHRWSt2ajY2B265NhILMce7FoX1OzI5KlP%2BMfLd6WLLPHJrYuUozv79zD1hd7TBjqkAYtYb%2FoVmPWzi09bBlpCWg6J5IPbwCE8isesmiLXJjZyCFFaZib%2B%2Bbdu3xF83jNYHz74CBeaM2gkXB5I9GU%2F1%2BqZeDRpERJMY8zizGBtGDLhS6SkI%2FZ6lVVAmXnJUd%2Bk5xb4NbECK8TAdLo3dcKltSuKJ8YJTeUDxyz0xBaEng%2FgrMQO0XinvzWUQ7iBWpmSFIRlZz9579c0YHuAz0nXIBtgQArf&X-Amz-Signature=5b057f58d97d6791402f696446794c88c41b94bff9eb181759439c6aa0978733&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
