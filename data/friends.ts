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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NBAFWPF%2F20260611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260611T174029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIGGDRen6XndOVR9xwv0aPRzubzuVKeTznQPVuWlUrUmDAiEAkECdvkLMGoVbOBO54GMUGU6fD3jr7mbM2xbqdbD64oQq%2FwMIARAAGgw2Mzc0MjMxODM4MDUiDA3m1%2FdlDVOh2Uzh3SrcA9i1y5GIrbS7NEx66CWh9nB29MtX2GFkDO%2BQg%2Fvu0qGOB0KbHquQUZY3EcMdEy6lYz1M3L71daLeUH5SeGxMeL%2FHNa4sR0PZrz61tTC0jwiAjd54jvRTobHd31SNpT9633XL6l%2FHTHtw0temobueqvfxyr3oTT9xPeCjd7SAr5fGQCep428ZjlCIn5c96gJFdd4UieUA4GVpjaJduABO7%2FTGRwQR3AinLVmyyKsB1TDCySYcEgO950Ru3%2B484GkrCNpCAIehTcpQom%2ByTUCAqV4iDSeFXEifiDdSZQB96tSBZVPMvYEZe7ILoSooursgUOOvPh%2FzLUka59u9UqHppnaNs1JO89utIypUGiQVfJsQ%2BWF4JBce0DANMg8cgM9aCz2ieNDe97wXgx%2BWeTiz0a9wCWHUblJvmgWkxNo%2BqFxr%2BTEnrrX9FBgFrLbZRsikVR2yDXlGYX3sqQ3Zdh%2BHwMMVrYepldJu21FORC2BPl%2F%2F%2BSJ2%2FNnDO%2Bt99dAHpseO4zwiY3%2FZ3ksWE2wJSlVRfyo5OOVyMG1ch%2BY7ctGnKsEMVosGclEfcKg%2Felbz55G4N9awRpb8DCeb2bNZC%2BcsNrwaEWfLMjoKXpWWzvlr85dmsB36u%2FbltYBPSqeAMJm%2Bq9EGOqUBTNto7suZN7mBqvPlqN9Jd%2FnfWF%2BF52fxtk0SgV%2B9KWWT9dXrioreb89HQ4Sz98cjll%2FLGF2ROMAMynFudOvX85Ni5oAfeO8ze5kc2k2Spxy3fzXO1xbGJ6%2BA%2Bg0bGwHFGKxDTpvHsTH%2BUvUIkpcm5r40MeHTHLXPc%2FxaTdfkfUnN7t%2F2PjB8wDzgQ8XTS3BrQGJEukFYVdB6JHh3qa0IlxlmVtsH&X-Amz-Signature=3e99362724798fbd21f612d74ca9dce6c00d551384049aba0c1e2084a1f08cb7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
