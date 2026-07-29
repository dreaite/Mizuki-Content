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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXFE7WBH%2F20260729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260729T093812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCUmbxgHl2XVkuH5f5ZCOSfGcDev3zlvpM%2Bw8daPtR7bgIhALY2GP7%2FJbVojfD815prGpjyNZQoVLF9hvopCdKEJK7JKv8DCHsQABoMNjM3NDIzMTgzODA1IgwuoQQDNr9JWUrF3O8q3APKDj3hIjfLZhLctx%2BK8LBEWUhgvCniyayU1aZxJMJPT%2FoRGzWQYs3yVGMubj2qmLgsinwGVwpju0rFdm3XL%2BueCE3fNHjxRBmbBgX5tuHBzt7pK6GookDZnWe%2FN5oulSo4fPQttvTMZcvCwVGyeE5KjArfCesSUo98QkzUK2SWlj%2FMfcCR1ELrV7O1l81c3TbhRlb7zfvnCmxlCqdjQAcunh7Uf677pZ7Jiki0OZf%2BNDXiTfyn8d3umzwzbpEcAdteP%2F7L8LeWdmcqWvHTBLaG%2FaWlbQhpEe3GCT9i%2Btq3M%2Bu2nJ9VEx%2FS9Eg73qDxWVNNXcVRhKJgHtW3v35KXkDAbhpQztRQ7wdQ9O2wVHOn%2BOgt7NwKMNK2UfPYrvbVPrku7To8FiYXMzp59hP3oVeaKX6fgx2gIliP%2BGwFSkI6SdPEaJQTCXtYT140ItVWWmVMXdvO5wlMgD%2BMIaXUD76n3k4TfzcrFYgAAB%2BcOZIAbEoYTmfIqi0fxChHhXxpf1CCf7S7LNicDLXDQb2shqkiY6Gz0uLx80unuwUerNUFTmBX9y4TFR2TIzigXf7UsgZ1n31BqvKWc%2BuDlM4Oq68tY55qiQ6pC2CAKZ2P5mh4qSNB4Cgh7az5eZ2zTDCakafTBjqkASeEyNZBX6D8wpkNPkMYAPllESS7%2Bk9fTnz49Wil11tQjphbbxFcg1mAFAkhErelWqpuquSwLVANkR0zG83HJkFpSZHGwGwS4%2Fcttml1PjsXrBsO%2BDTHf3zo52mkTZCAa9E9KQvNPjcquzCY4RMw5Yq%2FjYao6paOm0YfZMHnwwLkeSjdtm4yFh87f%2Fo62iCNz3yuZX%2B6tX677FFe2azi8L695VMW&X-Amz-Signature=88f593532ee3a8347a8e37ec0e5aed6a8dd90b804e40a58e509aa1df4038068c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
