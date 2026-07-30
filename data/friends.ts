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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623OXU7AK%2F20260730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260730T115238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCp%2FCIkRzkp%2Fp43VZmUtKMS1lLQBKy9Q1jcPTZp7MZqHwIhAKOjce6eYyVuIu3bvw1Y3l67LvJXdhBZzhnYnaUI68NMKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzL3avsspcmPBhuc4oq3APO%2FHQvHZORbITEB5pMOV%2BTU%2BtBwH5x6KiGP%2BDpgxg%2FURWRl7tuBCr3JcGqwOuQqG%2BYsqGf4JlpqqZ9LJIOau8hRW9%2BibUywDzI9O8mHq9PTvDU86Xy7znNAbIIty7VKxR3MYcgnnug3hDsqtWYmNRiOgZ%2B2gMviUk7gN5rZSYevkVaJCD%2B6%2FJXDPguUmsL%2FpgzTWOVghe3JaL%2B6Hp3Yb5%2BM5hMXkvN6Xi4Ev7S8FJByXYUrr2k7jNiNxPUFXCU1VQGkp9Iywzo3%2FI9cMj1LxX5PpdErwnkp7jdwAc6%2BuEb%2BzP5EUnRpnt3%2FuPBbk%2BujVlGtgOSSyBYgjnQ08QEyZCwNjAxn7zIuAtJugQIXL0bhhRgSfL0aqZS3bViJoQJxaPOsXlrPKSfVlpRH1wDH%2BI%2Fr16BvCzpqsNLn50piKhVDgzcmM4KxlWUtFLiD50Oyu4kN5I6JD%2Bn6wmG4DKqnFk6%2FxwZbQP5M12WsStUuBAtQkkozP62phOQkvwWkPVqV1qFh2d94gbbLTAFmZwpa9b0oBP%2FHQwRR0SbzeA9Vy0e0xDMwRy04P3lvsQ5%2BFHs9iUy3VRZYowJTXUoJlvQpf13zl%2BRVnrYuMFO7BmNtSNMrHVCF0LfrChNwtNs0TCn1qzTBjqkASld6rsgGJ8BQO0%2FoQEDpc4pyaD7vLJRAf1q7PvuKX16zABCbShfuKfnC9d8E6vPWjnUdz9sRge92TeQ9WgVOdrOgG5cm6sAHRWqLMNLcO1eDLJoiTLXossnJYTq82MOiTx48131Xnmv2g2%2FLY9pcQz4JfDfB6OGsFHMZ8R0oOsFFm%2FjJi4tSkj1fp0iWe3wJ7EvCC3tz4YmvPKAYtjdq%2BjRH16D&X-Amz-Signature=0a363c1b746ba1fb6399fff91a03480b9895a2f9c8e1c529ea6ae2fa634c7834&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
