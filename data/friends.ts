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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IKVT4V2%2F20260811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260811T015128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCY9jkB4cgYY%2FwbRw8Y20qFxIFZt232FHaZXG67sPLwQQIgXFqZBtYyo3lOBYRxXMqAWNs1PQD%2Fq%2FvMxbRpyaYx36wqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKCS9sDFYoZkuPZqQyrcA3VHmRLjEk%2BpLe2SjgyhQlhzBCF9NgN%2BivdVeVQY3X6dXZJ8eAfnnWUfkAHZsXtk4PgNMu799cyQ8QsqhICqL78pwvRaYMmfuKP4G8ywlop8B2HLyvzsMKY9fyHFGOU1mzQDnMLBMY02gKKr43ZLt7z9DtN8cIwhChoeyz85oziRU7EhzNYG0MU1oKPjKAFcqMLRptIFgXMKau8nXU%2FHio00a%2F0ptJivp50nQ2LKsQaUTYxQIeo0wyhFGhPN2BwEPivbJVrmzZMCQvXPhNUxAPb89aiUf7QBQglpiiQGCiuc%2FWpmgzQoKOndpzVTMeDXh5APuEAyHrpNGYKFrJLPi2yCAZ9XaeRyak0ntDA3jEzqpBLnoelmHBUXvGid4lFfEVqV8PnUw7S8Mjfe75sUEJ9nKAIs3sghQn0k9Bmo7vjoCQUPiZzpNGp%2BbJKNl3OzN7LL29zrB9PtZf1hwlSuNOgNB3OeVJQ4NklkkjAApuu%2Fyib%2FVcOH3i%2FMY9%2Bg0Q%2FfMH8pg9jyhBP%2FfnzbD6BVLD1VDU7V6wODicWAkHTcZN08SH8sAToTlG3CTIdHe3ViR%2F63hWVYh%2BY8qkt%2F%2Bv%2FzwLSuAZe12JUPJyVtItZJXpYvU56aqawRqHtCrY%2B4MPDZ6dMGOqUBy1U9EzUBjrYS1%2BkyjM2nhuY%2FCQG8tbNgI2P5KboeXyf8a9HVozE6TStrg7050wBqr7Q7Z2%2FxU6lVxTrbghlTpIUunPiyZj7PFjv6rxdieMwBcuxAABtCBvYV6Ktv6MISY1PhaMP4%2Bw7BDkVL159CDpNUDwx5AmUlXZf683pfqZ9Flx9zUKkh8CYbvs7T8cab1FjUIpdwjNk8N%2FTBGWI1DV%2Fnp%2Fon&X-Amz-Signature=3a1462dd3f5ab7a88e2efc6e71aebc2d67b809a0a500a8404d8f75fb9d2890b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
