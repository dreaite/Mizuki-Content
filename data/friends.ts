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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AYFIOSM%2F20260616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260616T155607Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCeLKZWvoMILogWQHGxK%2FC64OePH5iBjPmCq7aQs1JVawIhAKNW1uFUJNt7BKOucPCAQzsGfrP9cbL7poqgOsU17YXyKv8DCHgQABoMNjM3NDIzMTgzODA1Igyxkd%2FjDu9zqBmq8dUq3AP2%2FTN7QG%2F%2FZmQiju81Z1qUGWusCsIk30CzteqOzE6gEXmvhS1Ciy4S2yTs9ntZ936cr8yGCOyavKaMS2LdMNNQFbq73CNs843%2FjWVOCtakbiJmJajRQGrf0rPS68SOcZ94psqedHDlCFCxaILkRHE7lF%2Bh6nB%2Bf2MkxAjjMZUlEVQuRS25wAXvYQGfFhbRCb0EOD90dtTT%2BQRD2XzoCoC6fQMQ9wWgCwJJ59gTRbiuUxJ2EOqEBLYC8mFh%2Fti5%2BPq1Lc4BoKZqR10In8Pqv8Zd38CO1Yn8ZR3Q2%2BTY5OcwkYmmOTYeOJowvRhaQHgVjzNHBKbteJV1Afn6s%2F%2FXqhW2wW6ZWga4Ru6zSNL5agtksOrYdBN%2FiIIQ9m6Z28vhkuls55%2BpMo9ALCJKqTuZ1vGhqCvzpNPGOE9GnH35il1LM4Usb6PvqXfoa0KWvBomgRPyLWmIxSKbfR2wOsF2WSsD7UG8qtVruN%2FIcw%2BWUcxbg1MM2IBkHLkfuC2yt3Z3MOkHty8Y7aUXvhavG2SaId9IghqUM3O%2FD8SNy1EcurMwgYKoh3Vn%2Fm4Ujn8bhWfcrueWfxRhgtgStHSRdEgMdFOEPwlVejWFF0r2RrsKRh5ZFfNTHi5tWBOTLIJElTDl0sXRBjqkAYZyvfCQoE93y8A5sNdEmFN5bA6p5ifJdn6fx5e%2FTD4De74nqdjWaoOaCA7AS9rrqnqYWgr31w7%2BC3EeM2vVqMyyA5iLl9YqfAoQJ7blV8ZiBWMyoVtl3GtWacX2yumB4vq3Ac8GUw51oPRjsi9HBScKETA2iB%2FBaF8%2FB7BAEqkn8DrfHMA6c5tXQviKiOKJXNCLGKHzJQ781QMItLE43tJu%2BVs0&X-Amz-Signature=479503ba29f35bec510deb8d3ae0b3c6c2822019993720bec714bd5b75f07385&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
