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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SM35URLV%2F20260615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260615T062636Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH3Ks2W7V2z9x%2FhcEAt9AndARgtm5gWpIkbHiiHLR46BAiEAl%2BxVGufOHSi469tuh%2FOqia6Gt6kYv0Sij0VNWARe3TIq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDN1OwUmqyh6nL0gfDCrcA24ibeOsxF%2Fcx6414vhYU9t0WLYPkjxIIHYTln6%2Bo7Bc4fQBAKh3eE2CSymqeqCX0iLuUULfr05N4%2BvnU256lHTyZKxuLh%2BilqpOzidLgQghNOyHL6i26UrxCmIlBiodW3rJrUQtWIth06xFSqG55R8wqaV7qlG%2B%2BaYv0%2FLS%2FFLK9zXXOhERCbEsvJu2a0TA01ZnO12fQsuzuhZIrhV2eShcLdcJr4g%2BtI0GmJW7cMCqeDspewcEtq8WQf0Jc6AaTAIfX%2FcXJc7Nodovrqlsm52I48TKitpRLXAbXcfoqwvdp9OkobbP3vgThTML0hK7KYRFnBu02Q5Pw0ejttEiDjq%2F1gc6ILA9tJ9j7sbUG5ji2TLzQsJSRmrsM7ibtwNJ90yF4j3sUz8tY9DRLu5UADczLqYbCsfoEangjWfOYrWx%2BuxLbbfOAylIGqwBb1HRYVWGMNsYPm2ZKeesN%2BqvTnWx4zgCNJPSpXpYNYT%2F9LumszbIIH%2Bz4gSw25lmYi6RTgIezZT17roTP0WgHMmMgWAUJi6wdRZdDEZbTsEOUPhvqPCMqUJBMqiKge8ostCtwqbsvyWkykUbk4e52kxJWC%2FCQJECQvlPR%2Ff8QcXVyq%2F5TQB8lOaAyl4QvPL9MKm2vdEGOqUB0L87pkRPpx%2F2aWwp%2FIa6mvCYqWg2KS8FoY8bGxeezz75akd7uLELQEF%2BopAhMY86hfpk1VMWRAt1YoTZh4TiDXFSBKAChnxhNa7p%2BVV1dtsd6pm3rbg3FZTSNT%2Fbnr%2BowwQ1v43p4IgGGTL5dz52XWsxKYiRRWmaJSawqM9WlPvFRBAVCaZCT6AIZzPXpldv9ITyuJwyvMQlAlgyYL79IuAdtij7&X-Amz-Signature=d3fbf6c36861869c13d07acafe6e0cba8af325ca60e75c107bbfc39b7219a9cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
