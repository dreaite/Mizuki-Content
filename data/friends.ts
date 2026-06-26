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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RODZ564Q%2F20260626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260626T105441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2BTq5AsMrs2VvJm6tI6W2iPcZujNd3uTzlJfr1tPlfxgIhALFUiogGmUr5MJ2Ccf5nGSwdTqAYigQPKdvDExEx11PVKv8DCGMQABoMNjM3NDIzMTgzODA1IgzoOIGwqsgKJwctYLMq3APOOEBet3sOswkBOicGZUSHLx4MObVE0IOnxGCXQnq5CD3y9%2FCVBwoBNEtQBos8aY8wNmwu6hs5aQOzMDdh8%2FtyHZ9p9gmBTZVSxzbMoJWaVdbwl%2BXqJthuH3EoGAEdEfmSTNoxy%2F%2FQmT%2FCdF3Xu0533SIVvgrZ74Wx1%2F0fDhtblv1QIj0%2FUUbHIfYBkhmMbUhZ54sJ7sEpndMbBL0eNHq8YAYfKJ4iVJhhRa6beMvB6lDkcqYzoZehFS%2FtQi5AZBMeWlICeb6XIGI4olsAsHQtFwjPV9R9XLrHhBNvusNI3qvoMo6kVhLcnWcjlYC94x8xcXfrvGdHFUYuM0E3OhVhuioziwos179Jn0G0jhn2Fl6u4tlMOHMHWDFTV67bTNdX6rbeop%2FS4FoJ6CehBeqqEpWPjt9jRkUt8tb8KwBrc84Lc%2FzBwAja7PeixUkv5h7c4grVxbl9IFiTafd7X0nLsIe8foJJZIVgrUDyEJ%2BfZfqQzMS74UKAYLragfm7cJHLa7XHEykoxypbMEpEJIyGcOeCf3qXYrRKTBmnEMeGwk9BerpO63MykFlvz%2FkjHa1%2FavYMm6d%2FEr68GZwDQSaldkU%2BmSSQCIkJhZaTGZmw%2FZStorBCTVWeFE3SPzDEnfnRBjqkAQcnIOhGr9SPxr2MjqvGRhhD1waoU4WGbujy1lWZZ%2BviZ%2FnrLFxIi%2BaUrnpWdnW2vHY5clNMjsiz9tamp7kDiI3yD3zG2arNMhH%2BuSrmS4jaPjnI9%2F%2Fq23OpClHTtEGsILIf6t7SYPI9fYUev64Xc7fPd%2B%2BEdEn4pkj%2BX5HTgqQyplkbi3dobVQ78%2BKxgvpZvOHCBLy4UtGQlGjKytwDx2hF4wsv&X-Amz-Signature=565216868ef71fc9f32d33866a310a7b87c06b7c0ddf0e8965371d82e2be41e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
