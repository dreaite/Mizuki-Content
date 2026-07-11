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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGYHBPVW%2F20260711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260711T061442Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC7LpT4n%2BCBhjvFM9QQPafmBZPyvoyMzDRRAUeS3ghptQIhAMWlQs1r18Zaq5BCM7BD6ASfEP6Q39Qspd6TJtyjOELyKogECMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwZg2tEzc5xzPwg14Iq3AMMfwrKX9OwDO%2BXqnC6wuxIX4qJbGrTzlL9x4RzktDaH3Ymd6juS9kvOBjigOdCTGt7CA7XrhS4fJCt0v4TlJpMeek%2BzzJDc%2FPCCzkQ1IMK8tnmHB4vvBS%2BZJa946v%2BcNXBsDHufR41llmewyiGgCMUFIlBS7bEqahV5oQi8gxXoYXy2KZZLkZ4Xn0m2yfLDOOtbWSz%2FEHAmmD3tnYKgZaPDhXT%2FygasvPiy%2FK7VPXhD8x1Z41dS0I8%2BABs9gJwo4fVhj2spIleCNLrDjWwgdZjerWjVf8nFpT8nBDqsxFW69qdQbbjpRC%2B9CSEoBWOpRKPu9eIMw9IZLSdDavvmy8csaYkVwDkYUOBx41wJkzznMmKCjnwMQrnoBiy4SzpaUJUzh%2Bi9xLxWloITdESAgCwO1XQBpp0g6yyAQBVzpLtosxbyhMkhZeD9PLirAu3qaCvwtViBLCc1JzAZAkWSe0Uo7BxVxTWFt8R68IWl356QG6cns9XITbNxoHfEIRYz8uqU%2BhV5l5RBizaoz3oJhp9QWEsZ6hMLTuzw7FreBe%2Bml6rHXZIiLMkBmEPPeOzLgQPGz8Pqc77oHd4dwjPB%2BSsIjNlaTAC%2FPookGv4%2F78QDzEEBkzuhQP%2BwfBCizDRzcbSBjqkATZK3ghMPAocqsUQe8p%2Fu4fRiYa78cJYh5135OfbG%2Fk%2FJ7b2Dr7ceJ2dN3m6kmkF%2BNmDxcJ6vncw729ijCLyBouMyvFJKMOgIA7WEZV%2BAbPFX8X%2F%2BouTkpV2JsU7Dx%2B96zjwXg4AuEgj4lfmkbYM5Evdb05Ng%2FryYA8NDWXXV1zbihVWGZx%2B1tVog0WgOspsT6LNl5Gndc2IYp4XTrE0grO8hHny&X-Amz-Signature=d66e5f21d35b903d0a030caf6f20d437ba65c63fc5084ef402c4e1e0f2e1beab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
