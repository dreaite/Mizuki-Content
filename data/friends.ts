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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FDVZJRX%2F20260713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260713T230321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIQCEUaNA8Vcf3Z6VV2gie5qxNAxX1PpaPd3%2B%2FJuhZWzNwQIge0aUOhXBK%2BANw93Ihx2ACsSXuMk56EbaduCWoZsIufUq%2FwMIBxAAGgw2Mzc0MjMxODM4MDUiDCu%2BTxh7fEOwnmJpGircAz3IDMvzhLRhhch%2Fq5mHcYVjaGSUA1QsJUHMl5GEERMSA%2BGud95nZtkXI%2BqUcKhh6eCu1P5yuNb6VLHiXS39LSkPwtVfcnfEmEDGOlcBorQudB0qNn7USSYTWT9CoGdxJ3lPHcP88mX7gxmyNgZJr%2BLnFpsRgC46EU6ggY36TYIVB5o1hDl1dInfgr0juo6rZ37FdCIPuoY3kmmC39fr7TEGqzcrv8gMRztKpTpClRtIfhkXHkOVty22cvmwTo6Sq%2Fe1cvjudR7StCY5jnCQ13wxwavNEGmygR5mc4JyNSjubfgdEAo4ty0uj4iqEcx1h4%2F%2B%2BJCE%2Fxu%2BgKrfBDaoBW8xJOA%2FdWrPnb3iSIn72hPTLnPUx1a7wMK8eBjlFyED2CmM3yzfNTU5XGSa4ra%2FSE%2FKr0mZxrfpGr9svUH8Ap7EUcC7sNkBVI%2FhGzZfOplMOi0Ih4GijAzTSqHdl8QCjnHqDH3LbqGTqG5lv114FiWI4Mfy2yyzmK%2F7Mfuw3rEa4sdRwLSD6ZQqfDhKH%2B8Tl8SxwfGbhX7ChKBCmCQxfr%2F%2F5mui4EPEM%2FT6msrdEB8kpKaJRbOhM4E%2Fm97Io%2FOnVoHsNBaUytRgbGxHnsYYJXRLeLo3rot%2FjSaTSoHwMMm61dIGOqUBfVjG2C7ZwPITuCbyslF4JZYFKi8d9NLW2CNq61bbSbmoudbWeXe6YJEbL4%2FQs%2FFIwRauzQPXnPRubAnG4MS560DP2EeRvMyCyRmXtdj2%2FJDc8Dm5PjAoBi4HHi1YVJ84ZHmR4WA0kpAHh%2BXm9WwmWOfPEVieRIHNzjj6qCYc5jMspdCMU4KQBgtZUlMrCQn%2FvuEW05Q%2FRSazDplt9Yd%2FmncMZTO7&X-Amz-Signature=ddb1dbbd86766551869893f8bb316b6bea8bd742575c2138fcb5ea559af685ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
