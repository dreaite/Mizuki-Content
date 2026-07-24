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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TXXK2KG%2F20260724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260724T202046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJHMEUCIF56ZEOcNMfoFATacaop%2FX2LMQUcEbz66S7SU2XvSU7LAiEA5OOtqEI%2FLeHhP4Gv%2Fm2XK%2FHhtABxjSTfxV1A81Yuwjsq%2FwMIDRAAGgw2Mzc0MjMxODM4MDUiDGxIxebBBClt5Ol0OSrcA1QH2MgIjbOPXoTT5Iu3J9bc48EdleVUiQ2K3Lc0dJTXbkZ43BPydrcenQ6NHpiCuCqV3hDZkN0W%2FYQ5yCXAzO4Ss1qvpxzxaTXfjV7Du9kVaRKjIhGEs5FpYp5wc71H6AeqTaYOZaDeibSxcFqBVWuJHFqXU5tDAw8R7iIObJkOxzxKyONqSxUFOO4mC0%2FBV0Sc5%2Fj%2BC9Fewehb2L4QPLjopvwJwDLr07xoTOW4%2FQXLhNHBxHzyYYiSfkpEBrg2QeojXGxcs5xDDreBGVXFYZj70lkD7WciEJ0XqLJ6YDwggEdIuCLjywoQeFhvFmiE305xs%2F41RMWgvZzEwlr4ksIdkhxIJKAd9bqokbynbkAJ9M6NP966t0vQ4nqShp87ZlmnQpKvFUKS88i01ZXo75p5glSme5TqKcQqtmV1dfyDa1BfPpIdJia%2BRdrUFe47E7D%2F%2BA7bFD1ZBu74vSsbbsv3Q3jF3pCRiufaBwxC7vi%2B7pEDfnO2nFL2Zx9dGLELPPFV%2FN%2Bfs4TdfjA0Hjm3XW1I3KX9EOQizqk1Bq4qcgHizPUPn3EcZwiCahBRfy4IBaCXw7k0c0Q5l0u2415jlKxi84wVlkc%2Fuy8BS%2B4P4vpTX%2BX6Ya%2FeEaDHLYTVMKaRj9MGOqUBDF9tGWd96CterCHiUasWMhWD8lCEiHLJrUMPvCM4SKO6UK%2BW%2FHwMy5VyFHiWdZZYFdrP1re6sL9UE7zyfzylWDGoJ6zlDAiqjRX5xNYQXsECyF3AQrqUxCaaxGnLF6Q9ez4ZYeiuapRYyyM59C5EmSLdSEOU03hfGWMKVRsN7N0r5Vscronw4ZwLUolh60LXAnc3aVwwtvVctGrs6XjFFmKiUIdB&X-Amz-Signature=e346bfe46e0007c76ddc9bda0e28905c03dac1efe1f6ee436fe32ebc096c33d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
