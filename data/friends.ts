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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NYDQEYU%2F20260618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260618T221056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHWUW5CcoGocdoSHmDgvEIzZeJO865hU7FOA5yFMPaZqAiAvYrXGCO3Ht8Q33tAv3yCgrP9DEpcI3FAe6l6gORA3wyqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjvyKVOdi25zEMhOaKtwDQgqRLa%2BT4kkRlXKtofHcvPHPmyUEYPwlfl59EldGMB1%2Focb5IGm1nHOZ6y%2BuFTQPJgCJMhiQtTNQEa%2BcKG4ClCWaw13siuo13vu%2BietI%2FnR5FSpBKGB6Amcx%2B3pI8WYnvKB28my5lIfimF07cPCQfU%2BQhAKMACWh9lFQNJfbVNjjCLL%2FA3%2FsLEDouw6O9QsdlS6LNPf6k6U5bC9IGXgr2jXxk%2BIPtkb0Sj8QXQ7xfhRg9bfVA0stbz0Yo1FQGxX6pN3HbbNy%2B4ZuPdobG7BIZplgEPfIJBJsqp5m%2BlXwazZcPNwxxWvThcaFLYMjeBn9skqVsf%2BQFCyovG%2F%2BGcXwwmI6jnz8ZADY2GdXdvfVA53S9Tv7Yaoo7tHFktOQegURBOeHtuk3o7r3yfcP9Nhk3qHKl1AQHp6RPXar%2FPvSS%2FvWpnV2BzLhpSY3zkMmCIov4W5JWBd1S4ZY86CgPfi48X22otFuTARyROgzxg9zvscY%2BekLOKwKi5urzp8%2FJfS8ZXdb%2BB4uuQbO3oiT3v7E6lLP1LUNYwymOi2Xn7lPKuZg1ftNjJuKWPHWZqQlybLev%2FPh8YbJD9y5lAyNTNYAGFRf6ZHnNbygd5rj2YJTO8zO0DOCGtNzZXa%2B7ewwvdnR0QY6pgE4nng9phcrtUbhEd1cOxraNqyxpV8Rv%2BcgXpmVMOUluIiXMY6KE0qzYyn4TQG5dn07mfCyAYbFwFjrlTFJpwIvdMGYlLjGl3T9Xu2GTbDvixAihYJunUdQj2LXLLVQiaITT5XTsYJyDgMa%2FH5B447UuubEzJV0cwLQPuv7ReROdXm%2BCkQSgL8yi0p2xur5sHWuiYs7DZlzoyw3cDAAncLplWSQGTXA&X-Amz-Signature=25a9beb9292ea9b61f06327ecf746273db1eeb38427931b783153cab83976895&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
