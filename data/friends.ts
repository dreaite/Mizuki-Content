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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QD4NZRPO%2F20260626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260626T035532Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEhUGH%2FBc59uKuxzN3TQYi7ms3vl1XT42kUbWbyH3wX0AiAwITXJPjeoutL3xV6GLhsVLGev0YkNNi9ZdZEG%2B2g1CCr%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIMbGAM%2F23MZlwUPGNWKtwDExW6NOod%2FHLnpPuoGgKM9jz%2Bejy3eMrEo0rJgH0jGsYBLuhB%2BZ0fnUDvKYpdGrBAdMp4134cSpaew2ko1A6agnisa8tYBRe62x2t06JWwbNyoZynsUv2bqvLQvGXDjL8BdNJUNK3J2ikeMQaPS98RIs%2FJI9I%2Fb1QM0%2B5f3DxrVnWVPg%2Fptcw33YPjRIYl3onectRM5Wn1XzOKedoJ5lMAtknB6TRM%2FwhREPY5C0szhKJjez5f5HuzZczriBJsIOxBifrWZJ%2FXgEbIhqDNWwEwrGVVhn7sbbqlgmrq45NhlKrO5n7oh%2FPyhg2%2Bv22iCalo5Q4q2S01H0GQoBs%2FH0aM7iQim9TTi5CowjuaT3v4ozTPt58vDiwwQdRZ6pNw2zHVCI0iutolzfPyXAM1LdKyylfrzKHOux56yDgA4vwE%2FvN%2BRvfT4%2Ftxp9w2vceQbvwTvUXz98CL1RACe0qqekfvz%2Fq%2FXHzOcHUp3H67XTU1zL5e2tmNLgu60o6JH97%2Fs5NKG32nLb8flrxtVNexCVFC2Fcj%2Fd11ujD1bgL5Jk4pz%2BVtzOghrxYI8nX77ODAyemhLK9u2wAv%2FXjfL7KkFjEnwUELrwAGXzZE%2FXNwkxIina2u%2FjMHNIPXj5sNYcwo8f30QY6pgGstb8DKjHbgb5obEGqbjZUif0aIM1NoZxfO1epxsDMH57t3GZA26RFauTHJm1HNJQiw7WRDAtVDD8Po%2FWuy7kEOeoL4DBI0TMdnlt9t48JXVpqrUJCveoUCM0w6veC4V7UW%2FrbX2GH8XBiHOc2gKwbEgjECpISYlwLkX1MUuhs4hYJbiAOKMEYQaJ4l7%2BRAK%2BfTPFd%2FM1kP5gnXAxtiyFde17i66f0&X-Amz-Signature=ff4ad31a3e003cd1359ff20402389c9bc75e22b4427e077ce800fe542ef4b138&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
