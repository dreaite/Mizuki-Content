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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQ45FUE6%2F20260804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260804T141809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJGMEQCIHn7rdCOZKY3LmNormfgk7GRS%2Fm7HwxE9eVTsGKpLRYnAiA8vGUt2l289L1ZWtJxbC0KYrSS8ZF76BiWGE9np9Rw%2BSr%2FAwgOEAAaDDYzNzQyMzE4MzgwNSIMALNvvRyfi8G4u8TaKtwDEMiid4YS5rMjOffeoVewZwZgIMZxWIO86s4yBdW3eYV73SrhfUeMi2A5r6TQPk8HUDuVKPzG%2BroQXpQ%2FwESyYSNvJg2D9xh9%2FglxDW8H6ig3%2F7d7J9Wd58Bw8x6f2Agr99eeBuVY51XaWxOgJ0DVbPt06jeaFS%2FUCNcOy6it1%2FxPnmFbJ12E2HWGqWScuAW4Jm12t5SDgWJ2no1yskRkuBStGYkx0JyiHkHDncV8QsHzdezrYeq9xS63vWHN6c%2FSJcHSBf8AXqUZzerAdmyRG3zyoTh7qXMksHdmj7hvBojCVD7dvCuS%2FkoNwiKLGtvGYi9lK2ubvI7d5BBY7fXhkyOmExteMOj7ZDT8vft04tz8opwHvGY%2FFcRKCwpGFsckCHeZAt2l19RZJsBHo60wy3pJiqHssrlX0OSEHzvIcIt%2F58hBDgodS9kAOe8inzL9Km8K4uvtl05LPizSHN%2BWm%2FY6fXcBf%2FfttpBbgWYOKh8sEsAh3iiyxYzDjcsnT69vdMlV%2F6z%2BId5NwNrSKoYysMYmO4ck0ALgU2WI0B2vJvkitbYLF11uCodCl0cDbf%2Bef05V4A3b9omiOn3F5egIu1F3c4WtoJ%2FL5n2iYc25sAJxp3JJru4OvUwUqOMwp8DH0wY6pgHazqZPzrFqPdYVgy8VAXtwaCWyX%2Fr0nNpNtJNMr%2BEetHBHI7X5zgvgIHNh5wG4ti%2Fz34l1ESQp7A15Hnof7LUPK0c9nur3YSVrWkqrddfI0%2FGBczdm6EBapyF%2Fk4eLDWitmrOVSaCac8XVxNr5W1X0MlMKwCX5DaIZiEJd25OZvEuL0i23OuQSsMvavY4W%2B%2FH44Zzkd8QfpcCigw7msq7kWLqTqMai&X-Amz-Signature=3a146221110df18bc5cff32b5296238eb00187bbd478c395dbca5eebd3d28775&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
