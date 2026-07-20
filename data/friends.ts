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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XO2ICITO%2F20260720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260720T235713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBbEiKCFEWl3i1z%2BbDr79m7yoPnye4Bsg8HFcAo1isdmAiEAu5MIZuNEhWeqDzzuDiIjXkmQhUWGhkvLb9RwRU8toYwqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLFdapQ6CcUxPCIdYircA163nWFvlNRMPeK1D00GV1gZGJUhMzW17MggQl2AobSkbWuqYBROj%2B2TdXHRzABimt1conGVCCURgN%2FK01mSxB9UbFytOnNfTxbXByvYMhXP%2FrmNECQt4g2hqt6jg2z8ueUlq%2FtdccrjTuqhyJ3uFrwRvteODE64XRROEXTlQSB3sSLzgio9th3akJxSBBL574bk%2FSsUZQxqSB%2B1BNZo3wLbZ8qpiBqLJsGg8jxDiTkg20yWEypLSmmgHQ0119jBXm8de9%2B1kd8W4%2FQ%2F93mCjCFEF7Z9JqDwAZR%2F%2BfttpeMOtKNz8Gx1TddLrxnvE6C7KQaCW3ppFviwk9qnKpuLRCrQmIwaiPY%2F6uu6pi2n8y8bmhtT0bzxYLmk4gHpZGZ2qxFQDs7PT41gw%2FO%2FVj40yJngDeCZmQaeXjP6BD6gnmfbtK5DON1H4IIXY4JrnFzZe5nXPPsmDQ14WiO0A1bI4PCbQXYLVr73wy10qx0DrV%2F3HI%2Fq4tO48XFyLk88sn7%2FHIPF5Ie%2BGeHEv%2BRFcgBmPO8LGGaYrO4B%2FjCF16brJCRdqeXBVtPQkeazQkad9T%2B1poVEx%2BlrWTgaVNbs3R09xxI3hUzU2HUTqucrO29XOVmvJgTn9HNz6GiZiOFvMI%2FD%2BtIGOqUBu%2Bz7yo0VpAupbSgDI3lfDfVnrhk%2Bi8Ivy2rnmj7SYO%2Fl0dDmgJaoyOdTG3cVc5xaVGGxnZPTznJsDNjf6%2Bt7ciRGMleoJJdIADLP%2FDYpH56tEonrXbf7a5JZTmYiqvdIBHLbqlFKQUM%2B3G7iEQcffrZui8W1uVi2Zgk8hF%2FfqI1k7kuZdrjb7SzxB3tkU35fw9PYIq5t2%2FURGRXED0ajft10bYNm&X-Amz-Signature=eef525c6d261da58cfbacb26e7bac116c67cc4dcb01a056069bc12b24a1edb7b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
