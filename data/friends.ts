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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THMD423V%2F20260717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260717T191235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD1aaQwmQ8btIUcUGsVjxrSySQfhb6WcnJ1jIt3ZUDJdwIhAPnZCevD1PhE53eDxIZg7r828cniTS43J8HglsIp3I%2B1Kv8DCGMQABoMNjM3NDIzMTgzODA1IgxzxrELdJpyjZg0efEq3AMhkNz4gkLzTEViXGHPrhc1LzJnbuoFBqwll6fpY5xRHN1H0ZfpeYkqsLmdpWsUN2iRo%2FW31DE1W3W4n%2F%2BeETIhOs0kSMxypXXlkhj46UcHPvDk4Pj%2BESDfqYsbU4NKdQbQWEZIkdMVokBqCKHkBWvxUm2hoRyGCp3vxz2Jw20oXh9aA%2Bp1XOn9norv6c5nFsGr2vGzMpr3PVSmo86HOMSy5qxxJrvCDavp%2FTaretLQ5TjYVaOJygKXecmTfahz5GbqfgOcqnyMWnl%2BIXq068uYYrd%2FVSW5BtOYrQoeuNJ6PPnKvyqaif1Zre8ifjd48BjOYU%2F35Hh9oKP8RvPW37mEcSPXgzJa6QWwOMzYeG2KuCqSDLv5IAz3GG%2B54VgJOqoU6RqyPGjjNL6KOWm773xfXI12UFvV5zz8xq9qzV7QyybJguETIVcmxi0B7qujDOdb%2BaNUgRF7oAQ3wG9zleLmG6Z8cEtLhAlfkrqcq%2BTtpXDpYNxihB7XG2P1O2obuPL0sLvlrvJnAse78Y%2BMtmzI6e1lfeaqwH4wvGDhMV8xdger%2FsJMvWx7%2FKTdCsSa%2BkE7XfeZWS2OYytUiBJDzXmnB9MR40wtaUhZonZrJ4EDJWdLYefKGhykufL8WjCpyunSBjqkAbVg4vhh0ESEiaaotbpjKDO8Op%2FqXyCuCxxPzWut0EzCgoKjbc4OThu%2FKdUKl5BR11sWnghrJGE7BKaN4eNmvrJwRaWH5ULIjqKg%2BGcWNDNcxmgDxNRJVCelTxwMTZ4v6C8DmjBCkZ8iWwfu4F2CP3kNpeOSR%2BUrj4h0CH%2F5zAPDY62oNyE9zs281%2BLnAaf2B6bbRKjv5p9oitYSsiEFFIL%2BMGP1&X-Amz-Signature=53d42fbc0eecfb1ebe13d1d38450e71f42b1593028ed93887ad2dd5a068a731a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
