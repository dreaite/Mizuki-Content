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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPLLBUZ7%2F20260703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260703T044239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCID5OgB1eQpzfyZHyFxUb9XW%2BdCnCR0U4fspG75R8iOUiAiEAuAb0XxGzhGhkzsmLoblXwdZdoorSSRG93O1YkZm5aLcq%2FwMIBRAAGgw2Mzc0MjMxODM4MDUiDD4F3Y0uKmTuiXMx0ircAxCjlA20kKzIk4JXy%2FUocift4H2X6Je5eOgBncdCAqEHosQXceDlGHP2ESCassxCsyl7TZEEX%2FihzIbSIH76Wyfc1e9kASVB2c8kzPdTT0GpK%2B9ypEAC3xJtrzmtfzzJvzNdM9JSiCFwakfvAX%2B6Un4zFVnzlIqc8gXi8NU86IHm%2FzCMtQsk8lNvL%2Bxun3P%2FChV5vFx85%2FaCYnjyJWzEPOA5%2F2Lioglj0Fnivt9M96i54FyX%2FNP1H2L7LKaJ8h1C4pK%2Fp86ZRkFhqRLRlhPd0Q3TIdPlnULIc4jCK%2B%2BolGp6IkpGGEc2KkJu%2F%2FdPEnhiOWOqLhZoNNMvmytAvGlrFuoZtBJ9A%2BaWB5zkywUZPS0L%2FR9dCW%2B4pSp8jtD3JajUe3oKKPRs3iD9qVG%2B2OXEmVbebZF6y3VGOF6LGyO6jMhX200w0JpxGuaA8O7hAxHuZ4uSbomewqYD8bv8P9Hjy2SpW9ibxQxBv0PjgltfdKRNYqcsEhswU0fUkrPE0tEySPm4TSwHetEIN9GsorQLkPZ8QU1a%2BQok9StgqG6EeGQIoOsCvC%2Br5CzSOjMwtiVor0i5i53xWJYVHfgbvRhR4eU%2BPmfrdT%2Fk%2FK3LSl1g8m17J6%2FFh5ZkJzxHo1XHMMjmnNIGOqUBFeHPokpFG6qTxrvy4qfCnCjCjckTBA%2FLcD2i6Fxw2iN3iskV0sbDOzNyDSt30WQVNh45abzQe6bQWIKRibEgaa2VBTd2RAqN2DsgrI93DW5IghCrcXq%2BMddTCOElhpEWIZ9XP4b3NM8VWlVdTwTGTzzB%2F128Ci40x4kUeWp%2FG1%2FY9dBGysyn%2BOiHbdUk6PoJGDeVb3B5TEIEP3EWk1z67sNj5i83&X-Amz-Signature=6b22112ec27d1e2f40068555bc29b33285f945fb917bc7e8e990d265f33f8c32&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
