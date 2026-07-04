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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWDGDAGO%2F20260704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260704T074741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIBvQrfCR9zvW%2BLbq1QdjL67S41ho62vVX%2BiWTq%2BbbbwbAiEArdgbAx0EGp69TmlwfDefyZYbl2NUFcTfpTdz6%2B9vlJgq%2FwMIHxAAGgw2Mzc0MjMxODM4MDUiDOncBVaMHR%2Fwi%2BQmCircA5uSE4ThGKKUUgWJo49v7%2F%2FWkExA2B9oznn7cjGTVyDErZVieF6WXt5ndGna8oBzuTbGnHgDSP6QgsLmN9ZG%2BR%2FlHPViB%2BpV5ETKlBRTdEU0uueBnFqflhVe%2FK4pE1fFoKyvqGpjjlMwe9IrQB9pD3HnhL4wrHsJqqRLj%2FzuJvnB%2FPd6uEzTiJLLJBFbEvpD6DOEewTu6siHGumoB8qvXh4irOZqtLuqmTJPBJ7h45dZmDs7iGkHHU5ApKtunG8Wsu2uZno7Uwmt9PCRJk%2FvtRmwfLt76BjPaZePvrobuqsY92i1KiMZAZOjLV5wLB1GjcmsOzqN3cqx1iEz8JyUjjFndrIqeNNKxZzJX4D%2Bbg6hWktgEs2HcrZLY6CGMxbxGRS2hfUEnMBS2qDATQOA11vp82uAP%2FGADVS7JYIr86OXjAjEPFuaZRM9EtUxkSJZwLJg%2B6Z1y5EdKwW9h3%2BcBZzR2gKyxKwkQkB%2FlNd2XZtXGS5f4pQR4aPdUwHHOyc8RnfYwnESYqMqz1uEceO6wWu5WO0lUDZkUlawhh0uLODAAsR2FNY22fgbQiklrFJGW2QSoUZFQU91GQ%2F3m0R95Xrrtz2nQWZvSgX3TVKND2mHANA8LqLgFX2xcTGrMNHLotIGOqUBd2Pzss5ymh1YNmSO2jzZgjksSCn17x9wAXK3DDQoIwLvOxxGelWTSCbpNUvQDKXOE6TpoNkFcQhEXWPlbDQDGNtdjYqyExsVC%2BtMQ%2BY6JYxzetdSYwtm3TVPRCzW4yKaFhAYKzFNY7rjtIJwLFzNISMEGYh5taYAu9Z4kzzutarY2unZlQCPfXOp5sE2YfLj0ezBaNI%2BIZltpbKGCSnVtl0goKvE&X-Amz-Signature=4833da7a0b52be81cb5c602e147d5a2a4f13e5fb93676a3f3949c83686b9e34f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
