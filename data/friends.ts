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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVSTV5CU%2F20260628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260628T085515Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD04wnJ95tTNnZ%2BNA5d%2ByNA0ZA2Ef0AHQvKqFQbiXdV6QIhAJW5C6pDVzslGzQtjKh4LewSe2MM%2BWKyJpeIcdUBeCEzKogECI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw7jMk5MHGX%2BVN2Y1Uq3AMjyfxK7NW8M87yLcsFydTa6f4l%2Bh7ouJc7AsCsOdhsFBii3xPKTcH%2Fn7dU4Q3gg1efRz%2FlG5nScI%2BX%2FiOUjt9SAiClWig6xEEMih0PdMZI5RomXLCb%2BaGLQdedklmfcTCpH%2FPzqT5hvh4fcorAUYYOAWEiOVGaOPSoHojDBgGgKsKo9RKwcwj2T71sG9902bVMUPMZqVAB7vX%2BCua94vu%2FbvQZLc07Smqy5C%2FfgKweDCpoT4WFJyR5PPrNnHw47yo5suWWxAEesStYjurhCemcO5jKQtCej%2FOaho84zPEevGawOllzqbRIyQVo%2FguHoYGMoYj3pQ9nZSXyZ0bhEmar26nzl%2BUoTXs02LVJs5OxH886UgytsR877w%2F1mBpC2qQnAL82lzJ4MlwVnzayLE1bG5d0bl9XvfPt8v7O%2FnyFAHLsZAghHXk6A%2Bsrd%2BHeZIpK74Q92ZEiNFPsiFHOMPvsWP%2BLDgqIpOgKKtIPSECp1jqlyURMWZSrvYfKdzj%2FfsAU3TXBrexAf87LGIQ5yrWtxu%2Fma20iVmpGmxXNp60ge388oNUQFH8W2zhSVa6e6zOt0cIdokoFIB%2BTxVzuj1fwHVY4RI6MnWwjBGEu6AAJ3h8cWQplduXgD4d8rDD764LSBjqkAd%2BYASoUT2HR%2F8YMFnbaup%2BEOOl8%2BiDMUjlLKURLCTvqO1MKlo4CnQGK78HxAngzkZlCOQN6FQfyII9RpiOg6mQwRUWMvpoifNdX3pjfIgVj4oubpzgci7kMVF77hBhGvxZI5Pfjrr%2FSm1AazNvPXvl6sKRYAdzrjc6Fl29VoJKDvG421Bn4d%2FLb1FLwQykKJZ9aymz7n5qei2Iz8WUulesXbEvk&X-Amz-Signature=26ea610b59dadf1b30fd3f937c8fa140c3e6ef266a32c7537508c7c2e64430a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
