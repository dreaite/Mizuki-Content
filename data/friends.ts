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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665V5E4N6G%2F20260701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260701T052236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJIMEYCIQDtkIaMuTr6OglJooPmU9RyuC0jwl61FYL%2FujvjVOgGzQIhAOn5Ikml2ShhqsRGT2ndYM30Wb7orxEozqmqPo7NsQgaKogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy2AhE7Ms74ZQ%2BOsuQq3ANRTSLVnFiFArt5IrGBz7NU6EgIIO7EuQp7OkRroG7rA%2BTXCyo%2BYvh8c6rWqS6mEBcwoXX8TazsizC7YPmRhNq9tVt4nA%2FGC947wWIKS%2BcEQs75H6465ihM9LI3OXLUE6Cp9IZ%2FMXTC5LohXosC7ftYdZTtX2d12pPME8tToTemPMjWefUSjdiX4vOy5Vdjr31KbR7moftt2lS8HrogkLviu%2BRcnGn3Oet%2FHooOxLNKBHDYgtjB0hn2w%2B2WRh1KQBSNR8Uy3cLmzgkqFi7mQHiwyUwkqWkwBcFnvUiKBikkfnhxpXUxnYb8Sla1DIdeFQRiTOZPslWz1JYawQwW0gsWuRcj1BcYzeSs9F3dsaIMsZVMyfjSg2KZAKP3vR%2Bckof4w0asTvlEAP%2FRs%2BfJBt1vEFgte%2FWhKWDuUROJ%2BEHCAcF0BDM7JY91RXUjMa4K6ZziYVFdad6zdR%2FCSBZZmClbxO0s2RXCRStBwXvdKwpax8N9%2BvqWaXnUTrLrmcQd9tD5JSMb32INXXdu8nd7%2Fcom30nJkWUwewLeSlTn4kCOdZYEfPcRTQLpRyhPzBwVI1A2N6LFyosaUhykF%2FuP%2FqF16P3wk%2FqRUPvUxo%2FOhFlAWb5EwhUkqGY2iRDa5TDZhJLSBjqkAfUUAn6LVybIbA5T8B2cjvHAMuDHnBugB38bohdEgHbp%2BGDkxMMm1YftQQsZBRYqlrg4xrZjJuQLkB8dTWxAq%2FMky7hBcO34Gv32CBqoFxdgFXYYAoLEZqjOhH4DeXtHK59b39g%2BNWIPiCrCapaCImOEjsUOs8LwhtmeZlvvBx2KCvZFnL5E8deCUwMzBhqFx9Z%2BrOCHE1BtJ%2F9c2jNsxXJWO9B0&X-Amz-Signature=c90ca28405700af403c46d59f8a9816b20631319a3639c3305af1825ce84f90e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
