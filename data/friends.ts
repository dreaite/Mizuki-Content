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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXCVN626%2F20260718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260718T225154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDvo%2FBwhCCU%2FL5C79bbe0MS1a7q8NLRKfbTEi3tqMZMXgIhAPj9Spqh7%2FEbEQQqaYkdegY4dRItcXP%2BOAOHtQySgcGmKogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxVMRzLkN8x1U21LvYq3AOkj3AzX0JIGohsdGcGxPGm%2Bpbc398jcwXwgUsZLrqUT%2Bl2pzo1SoAZ0FrT2BFxnlhEB2UhKqQ7jqMxrKlfc338WJGk7VjVaRRmIn3LYqDyjxEGyoIV7Kae73sj%2FzysziGfeIQXIryIp2TlWc5vVyoYigtDBTa%2FKoMnbECHY23V2aOF77lDPsvAyn5NzIC0XkydqYtQJLJR02dRsp6fh84jHCpnRCVvOtg9xlKGuSUyMQYL8Nyn8Gw7ZKc6v2PGcPSIOv4RoNqllr4A5V8yGYPb41Nq%2BZ7jyegFiVA%2Bhjh7UhTJojyRWWn%2FccBS93pnky1s8hIOKvmqLh8h0uukn0sj0n6hMzsD2TwhUT6%2B9hld3968F90Jfur7kshmwGfbeZVhch55MWOxgx1nHtrNhlWeTkzpDrHyFtz%2Bi%2FV13GsluCsgoWHV5jGwVWCRvtMWBb0ZUTld6EqpnkTwf6lGibB2LxGEPhhUwwGjReRWanMgOjCAaxJY931VzkSLBsFuZBfgtGZc6lcOCTA9Dr3difgU%2BMo0QYcAh%2B9mWl%2FYWWfU3z79EtJ3N3yUC3CLHBSLWWmpn8KAfubNRpUs9ZmCie72hvow6n%2FCgbsC3oD5%2B5vbZque7lsyRBoT2P016zCZ%2Bu%2FSBjqkAXN96aaayX%2BVtVTSN3UpGN05q5%2BDw%2FhZf0zrnZ96VMgy%2BUx2TEAyRoMRMeFs1PcRtp0OWItNcaxyD0SEZ%2B0jmkRCO4rvWtxxQQ2ZzbMWNDGcBpYZRfYEMjGbDNhvgT%2BnBrEcDXCFA7WG9K9DOkZJc7G3j9CbAWlicXYvvBwv5oKdwua5jgOPOgp5P60tcbga%2FoBIXdP6BAebHTD8OMFuyKc85LGh&X-Amz-Signature=7666205fb9c0259ee05759b110c762122832c14f2ad23971ff1e2dfd9b8aecf8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
