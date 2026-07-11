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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WF66TTM6%2F20260711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260711T215128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIBhPMV0%2FTS13nb29ZgIJVsqLx3YEhUh6ZHbySmofXRRTAiEA9HPI72LPrQPKz8jO6A9UT30xW1zZEw4SB7qcPQnOdYoqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMZjkQUCIAYo0Zox9yrcA3eGOvqFNf59J0ZAQ%2F5DdP9LI%2BaqCzTpV67zz7St%2BxjZy%2FRS%2BvYy9lN1W8dG%2Fd3K94btWE9OdXbsp7ehxff7s%2B0RtnTVk2%2F%2BQ5e39ToXL2YvsvVTOT0kTa%2B9v4WoTIynZtdkSiXtvdwjf%2FivRDK6plwKrc6y6z5l0tc04KHoxIWVMB8XSSRAbcZsfgqWQmFCJ8GtNogxDyB3LUas5R%2BCG%2Bs%2FKcvMLQIlV5PUip4AJN5fj5itJ4Y9u9KtkxsXnG5wbBwmmW%2B0clpukWP9cBU7Ies0%2F8TmArKtn2Lfpg8zJSHfXwQwNp03T28kwa4Ju64jer%2F%2FeMKeHcsbzRsLGv7KtLlUwyQf5JAwyNSARCtsYONMZXU%2BWzipHQezh5Tjk00z9Zj%2F3Suy6cnATrmHSRwv9ZsC0UCdvPE1%2FlaEbpLe1LNN3342niS6xVgcdmmAJj5zO0Q%2Bxf83C9dtZf7k70Zn6URvOHiuGn9lfNDG%2F%2Fwsb7JMxYJyuTrr%2BNp7zuDdolai69528MbCr1gF%2Frd%2F47mSEesyPf6jbKu4GNelnJTLtZ5hZjxFinyyeTiX7bk1UTM5%2FuD%2Fqmyb3SigX%2F49GGUyEzFezNDKAE5XaIQiL%2FtpMturAzSAgBwqNnqHpVtBMOnkytIGOqUBRgRn2ojL09Sr1phrLm7dnsQZ6z6PZEXizn7%2Fc%2FvCHzy5yFlnIO68lLUr%2B1Emg34%2BXihrIQJkxGamT4hTzZnZr46XKwPQ9ntoVP9ERT86cTEjlE%2BhVJmvHpTc9tZgQ3Ajb6wsnP%2Fo64JCZAz%2BEslKOwTyKosSzQvQIGBduoHXcnC%2FD%2FDBTpNXYM02Y2zuZr36Ol%2B3Ey2NbA1PhJNtsERsnmbgHV3j&X-Amz-Signature=a22facd4d9189ff543266a1c00633add30bd128e548a4b42f87313b94e1a3eed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
