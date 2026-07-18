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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JABWGH7%2F20260718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260718T115328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEv8iA0jYtHtNp3Fl3RLAc9B3OsIclJaI6Nuo41lEKg9AiEAhsD%2BSOlg%2FUEJ7B6SpyGypIirTDNpKQ0yAu15SwyAqTAq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDOE57cMj1cz8C9EwXyrcA%2FsAprnUiAN7Jb0pIU2gHZhpwnhQmmuZ%2FAs6Sl2jhO8dIwWCjoRr9lWUR6rFn3rdpDa08ihKcxCC0uC%2Br9Eq3lUCagwLfDKFBRJJUZUJgQRQz09QdtbXUok%2Bl1mCr1I1vY8zC20FSCzZC8JRUWkR7iwpVqk6ZAF9ZBPiTcOX4sHSaldDxDU40ttrPOjyrlgvlrvmZeVvYmepFwkI%2BNCGxlMJqNgD2mHOaSTpjUJnvjdA3Ga7y0NwRyIIUKtXu%2BMsoJABoZLpfgrthl26pPr1iXWlNDw11gaVeVrM16zAcW7z35XcDxeLoLJarofEuemnXT%2Bs9ayth0p3jl%2Fi2a%2Fn%2FP2LHC2l%2FIaPsvA5jDomyLw5xz3%2BhFK1%2BoIaqPD3YBa60KJKjkbaHTjt8faMW0EQmDRnjEKjwiWMaflmZY7UPUrz1Mx2iEmBFtejNmVY58JZoycjtB8bJzDyl7gJe0mikFbTkEt9B61onMWZ7a7v22YWXOAlYhBa1G30%2FFTrvOkkYw4BolkfWnTeoo8Sva2umPjoMC2iBNlI25lLAJyDiofOkrda8LLWOKdDgRWI5nhz5buhl%2Bxk8ATYGk8fx30Nt0eudAxF%2FpWSH9dkxVff1IBD%2Fypy%2BpGVt6aG8GyyMO%2Bg7dIGOqUBTP70HgZjJCrnIoLBovmaPJs6sMyaQ%2BNRdw8ck7eHfWC6PHleOmNpv%2B5c3N3v0q16HkqiyHbsMh1Iv62umi%2By8UEE4coOIpC7JMrOdu8fWrP7wgvellBXiTwE1SupmaBEAUJMGyLXt0AslwufnFW3A4eCd4VVaTHTTH8B41GI1%2FQKmNUnP1sx%2BwUtf40Ntt9HyZMU1HF5lKqwrD6ck14YjU%2BIG9iQ&X-Amz-Signature=66ca842c256bbb66629cbf48b4c1654a652cac568953f1b1bf9adde7d3cc7153&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
