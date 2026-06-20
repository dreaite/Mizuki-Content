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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWG3Z4RW%2F20260620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260620T181345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIGmqAKC%2FTstOaP%2BhXUaFLmuh7ts%2FYRH7bK5FZOemhRjXAiAvRho5ZheRcD5fNaxPBUsxX0PLUYLGkyuXGF5C8HDUNiqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKjetWkwpr4sSFy2oKtwD28ojijWm%2BLBgABn%2Fiq7ZkjemVjA8T7XvbmmZaLU0DfoNhi0HGCLBe2JaAjlt8sRoRl0ZRrF534ItB0NTz%2Bqi1GSYpCxHZLiGBsiZsPnOnG1CjaruOAS9n5IL1UFbGkDGq3dexVn9e4bjObpv68PNDPZNCE%2FKVwGyXeEOwJb9zkPfVu2C5iLBxuVwl0JM20wqhffn83Qyzlo1Tf1riApVd6rBB30Bu%2BtmRdXbGl7ImqwNQBptUdd%2FYbo%2BIL0pgtge096DYOvY0ynGJXerSC%2Bvf2kexJSE3fB5oBQYZ%2B02OzLxhttcZhtWE5vUSoKt4OJyqmy%2BAvTYhATSIrQj1Za2a%2BKjworikVHmIi1JjqFNcBJgO10owBq%2FYYAv3%2F%2F0QRYKLW6%2FXad8D6ya36jwp1aQY%2BgmktmwHvNEfEGZFN2HBxx8H3YrVBQW8Al8Q0oKSWFzniKnwJH8z5UEyl1tT59h%2BCOjlAM4fSOJSnoZ4liskPNUUyMOymcgjOfxd%2Bt5n3JFa7C5WYvgFvnDLieLCapsZ%2BcEgAJfeeiZexQz7vKEIJeFuq98bBKr%2Fw%2Fz%2FpDKjFZcqETzkeJyVwqXlGDzb2tkaxBFwdNBUAOXUpfRNtuNveQ7P1AQSlnQKPU3PzcwnIvb0QY6pgEbCdVEO%2BtoCE81iD9ESab%2FPGc5pLnphywXhqjw6UujBGpB1429E0Nh18rwETZnrHXqFAlHepjGwNiWEiNNWoPIN0XElflMB4KQmWF8q%2B9S5594pk5NP0BpC781jTOJs%2BTTnfG7st%2F216XI6%2BKDeIZ%2B15WcoWSpXa4v2SdP%2FLeRbPfeDW4pCdremYhdfmF3Dw1eylD8CUhKu1bT6ot1YwfiNaLiuZj6&X-Amz-Signature=57d894bdabee4536986317f794114c5b99e7536a2a11b56267a9b87c473c492f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
