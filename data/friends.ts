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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQFSUYBE%2F20260811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260811T215000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDCvxIw%2FUIKrs3Iw2%2FrvWi%2FOODfnP0gseQEKfRLgEjEkgIgfRT3G%2FR5nBkwr5FCDSljtrE1J4KjTw87D5PkxIZRFEwqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN5Ja2RsFYgmy2imTyrcAwIdHz304eDqP6qYWIsh8PRAhETQ1IAHYh10%2BibwIZWD%2FAP%2BJOI6aCFAT4RSyATJyJsRAecQnZ3Zg8e4%2FHb1DNmmuGWxuXq8rXHuaMzpkluRbwqsvaJod02E%2FCVrxEptAZiUSOGvhFKqBrVIywjQesoCaCmUN%2B5G8d5T2z6Qic743BtcATe1OpEqF38HMtOpqYJxfcmW7Bv82pLwFLqbGZ8CNeDg224Ln3%2FU6SoqZ%2BsexMr81plmTUJEBObNHdsN6aTxRPX6AsMOi1aYd86Hf0JG3pcmS%2BZ665K5dSKceBmeipISoP2OwhHQWa9JGU%2FWfcekDRscCCxGhFlF%2BtYePYgzoZKhFxbJ5lNvGF1oWlwMcU0QbEjEBWFCNmib8Xp4Gw8goZzkNY4gQgeFwAWrKFXIFB7lP5UBsgcgm9I3flJnZFcEcooTUBZFcrNXMFPTlzObJWEXwyOEO8vc0y%2BUsbF5iYEi%2BWefKHE%2BhfNe3xsr6eUoGk09z3wzxQbdukhS1cLsNHlzgzhUeD7qdAr9YfJOJ33zDvB20AvyB75MdLEqFWFdqSRosyB%2F4fkOnxOQXcief3zLMY4dpFsgLoTIPlvqjtKkbO31xKFw817RlrtJf5eAmYt5w6XULsP5MKLj7dMGOqUBGjmnlODaJi4sytAoHY4DDjBhysAxvy%2BbZSf%2FpodDU1wL3sU5CWlV9aleOydM4PPB1HsPZx89foJnTpHwxxa7N9g3rHkl5Bfnwl6APY6%2Fh62t5M95R1FMkXRFmpiPOtnjeCiyvbgeOBWv6Hna7wKUuuKvOgGSX3FPw4RVwDqw62sEbpnPkXOhBZxCczsX88qhHzf9j%2Bv%2BgvCk5RdsIwOwXsR9WzAB&X-Amz-Signature=7409fcc8a3b28a2b5ff3120527264a7ce3fd8d7f69def718e1eb47b805e25d27&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
