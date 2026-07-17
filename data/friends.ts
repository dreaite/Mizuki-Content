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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJJRMVZV%2F20260717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260717T000454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD47UTt9FJIiB8eqdn%2BZdywX%2Bt4iBqY3KNYLSTlFmUz7AIhAIEIpOZ59hpoc1Ew2dDPpFzy%2BOJY8qPKCBtf7qQ35ewjKv8DCFAQABoMNjM3NDIzMTgzODA1IgzPU9G7999PjXuuZSQq3AOLRX6BUdijupFEfqb167L9WU%2FKrmdUHBEB3rOU9SJXzPRadgjwTrtHPFbAPuYWNjA%2FR6qP4WKVeuoL8NhfyTGGbMRJPVWrhBE96lsNKidh%2FW3BeOI6sentCCmW24cha9khZdgpyCFwtXcSNXwfS5tY8RKtLJH0hRfOjesN7otZdXLndiHgY5j8wRv%2F%2FM4fYG3FFv3PEmTFqvR2qxoQBk07q6aoUjlSetZUsC7BjPHe0xdCyqYXdjycE8MZCu4JjmxsbZYMMsVxjbBB%2BTNSc2s9WzRmtYaAFhij7iw4FnLbNB7nfXH%2B3VUrLk9Zxc6HFtJZsfHyBC%2Fb%2Fb2Vkkb0GACi%2BoMKozs1HH1Kbdomyy4dy85WwY4pqWY9s%2F6233OWmkviJ5J3Vrqpc3bGXVRdE0QWnTE9ucJ9IiGmLNx1bzlT3W4dYRmrhZWaTUVrF%2Bv%2F2J%2B9a48ZUkkfaTzjZvOAEU%2FIg%2BZvQ4AM9HJOX9TkDpnBHh8%2Bk6WJs0N9Auh2eck%2F3zbME%2FsOO7kyyAb26guW6qL%2BVrQ1m45Ui7g5jaJQICgpq%2BxBNG8vlR1oYDWYo0uVNhg7enLKNE89n04v1Onum99YGsKFEJ0LPic5T9CH4LhcbA6MBYzG8camxJEu5DC6v%2BXSBjqkAf0HyiV9Q8ydjxuo5X76w5Pk0OPyFAcb6W9wRLyxHKHp8TBJZUQhk%2FlMqBgglzvaYQ0cUZLAzobQdAOUqROqD8bS78SMdvD34d7tXyQpfKWdc3uvnRjgMde8sSHcgl5L0q6d0AmoGlW%2BWvJMY08mK3fvb75leuMb9ZwNacpiJLULBSUsaHEDzNiDNrscBACiPTEWTAylMFokzkeireTZkLOni1ex&X-Amz-Signature=987621e4937209f427d30d327dfd0611066a35092a1fa175aa8cd727958c83e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
