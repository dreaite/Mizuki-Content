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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NBRFFIN%2F20260802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260802T220016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIHQi%2BrKx%2F3vtW6jwDIslINoUtzns%2Fz%2FyaZvP4Lr2tZkwAiEA5UYG4oOhMYYmyel81kttcNGMcgvNRxoNR0X3gYxUD9YqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLEKfJUre3qZGioE5SrcA1ysSeq4zTdKET48zpPTNJ3AS%2BFG1VTq3WltmD52AlX5gk2I0CiJ2e8oIvLYrE4P2%2BQUW3Ma7mw7G%2F9aK6iMrUPQ1%2FJ363jkfInZ5uZiAeZ%2B9X31d0QZzVAvRr2MkwNazfKCmS95ViubKuQRu2TVwBC6PFufEqdJYQ829ne%2FQh9FYNfMZiUOc0ad08NncQnCI%2Fe4FA2mQ9gfqZKFZBPP5yX9k5PV9a3VfGxEqMM2%2BIxYRAAmPScEl80wCE8pqwfrjKaLsipCkylfmb9lsom7pQ%2F2KZbWrvarGE4iD0h3IQSlIToSv1KZrNnPNU5tJuJxrh34UgmwO9cmYloQr4Ysri%2ByX7H6eJBfNjE5LNvjBgeaADLz7%2B7a4dddlVPLjBCwH00rjecir2QGzBRDYWApFHkHdxxmmecttbKICtJG7FroRTKlMJjP6NB0TOGRA0ArfvJbEY%2FnopWVQ6gyvcD0tbnC24H%2BU7SCawMU%2Ffe3W6%2BDK0752ttNhKXvsvZucFGqvCRykS%2BE4SewmSoU%2F4JDKoIRkvKkDr1fyultKGaZO2nLvjA18wSKBeDD0XtS6VPhBOJXbAl1oKHhTWQLi2Z3EHYd6L9EYBMbLtpKDLxC9SIFWUcxT7LvnpzZDAd8MO3NvtMGOqUBkmD3WAh%2FyBo%2FbjMLMDszopebzl3JmbuvH8%2F0vTbM%2F3Boci%2BnWymqkJWlOgDhcW0s%2BA6ojc0w%2FS0bYO90mieW6fU98BV4it8Fpp%2BUSfmucWB1t3OUgORobX%2F8O1FtnUUerfmsXHWakLcv%2F0YPiH%2FT2ytM%2BKOdWgIlpIjKYiwPrYN0XG5qy1N1%2BKCpHXCBVA7%2BPkjsTnOga9oUM0LFR3hZWlTW%2Brho&X-Amz-Signature=3098a2410ff79bedc4803352fa1225505e399045717d6fa1160f75cf76a573da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
