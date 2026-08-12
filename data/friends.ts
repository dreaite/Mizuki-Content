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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5UGZC5V%2F20260812%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260812T145801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIBjBMLuuLagQjaeXmb%2FTnD4rvEVF4Rcrbew5l10%2F38vTAiEAmORfIS2YgPgj8JmzbvyLZBlajazBidtkxPt6TvgpkaIqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD9rhwZrtCGZjxk5xyrcAzag0b7UG2ARmw4FTZ%2FinGcOHTFa7uND4CUSDA1WYnE7B0rucsZLL5nUSyLNCv8MiUvyIMgC9Tc10R5RH5DGfVQ6wjqDjZDyj8M8ZVHlh%2BHMJx6vr7Zy8m69oZ3RPWPWJ0f3OXpaAdXugv%2F8xy%2BqXEeZjeF1YKkSlpBelagMssidud6g8xNXU4gg%2FeYRiHCyoeg4%2F9GfB83zoRyEViz8DoNE0RGuKbdtbAIuFieQGw9%2Fp01%2FtdlbGFulJotIphAhfr2ljX%2Fc6hYYd1Ss5ft%2F%2BwwnEeQJtZ8MiH9omU7jQEthmhYORrUrhM%2FlcgScyxHwwMWCTvsIlkDB%2FoEL%2FjZpgzNLqi4tyGEkE8KMuzhwe2LtvaClPw%2F4Fea%2BgiFNdTYx%2FUgH0CE0F97jCqm9DI2XX0tqlwUVbdHQjQc88KNBbW%2FNLD47T71SNsNqH7q%2FDyWhmMi8wEPWfofTB3JAPCWJ1RK%2FtLyTTRqD%2FFu%2BIhGQSYAR0lPDHMkuniAuqcHhDzDb948Vpxs3tg%2BYZHrXQoIdTV2uY4wiLyXCZjU3H%2B2t65vVRAqOelzU50Vh6LHVG%2BNh3TWEpJOMwrj0jcY%2BuagPpoRFOqXOh%2FoE920Ig2Dy%2F8Z8NWfwrBOObRs23LLZMJnq8dMGOqUBktAraduRxDStR8vMd7okYd94MkhdQvnloTwpucj7YptTh7UFxRkihQ07BJo7VEJgjxpilSebnkT%2FD3hFlhrKh6tjGYsk69gE6amuN7avoNJizvjfZtxbnz6pPU9FzqjcJvkY%2FPQgOSBOvAzTymLCkyW9tDHSuh2GtAp%2FlPC9Z4w%2B%2BxXkZLmpV%2BKyl5N9dky%2B%2FFy1FdKen1AZLFWlAsxAYpgSqmeN&X-Amz-Signature=474a60c1f0f2656960bad5c0b36d167e766c3a4d32678eb0540a4be15cf5be31&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
