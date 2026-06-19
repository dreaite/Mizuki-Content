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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OXLK6EE%2F20260619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260619T160612Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBqNKkpV1sHBACiQmWrdlaxPqjZ1OtYvkqX1d1NKdc6TAiBqOy9kW6CeMqglYyYPXDQp0kVYGLhfBsGjR3kEuR8wpCqIBAjB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbZ6ASzfT8qrtaa7OKtwDZ8XZVXqO%2BYEezSw79dk7d8PWBxV3GcTuiUX%2F0ET78nA9Ux%2BFh1hiix25GhFNmRcLQGyV34chgUkCfHUxaSbMuZ3AqAWTYc976j0p7MezXRhZhP%2FRotoz9MGsUtPYBJ6KrUbbZARm85%2FYK8kHiB5R6xvgmTRf3GzpPwqavPZKszrNQZ0AJzrVCE%2BHtYsvhNsjvkt4OHuQBuGixHFfkKDFwePSVmXJwhGFZ%2FUKQEgika4dY8cDPSC8mSYab8WN5SpCOXtBvaN7T8ACr92d9NHiJsQH6ibam9z%2Btp2xwZgS8d%2FdPBEQknxUaz2ePVoqHAsPpJkApLLjnTcyvtZ8%2BrNAniSEH9732tVXgDmeBbML42XiQ1X2IrLZ5woQ%2BKL4WNi7eugMQ5tInV0qZbV2fmk9LVyUUOA8uSaiZTyqntEsbqm3xj45H%2BnJ6RgW3O4SUrgBQbsH9Q8QcatAjqOPgCnQJd0mU%2FyjFjtlswTUdG8W7sTg%2FWcOyatwBZiS4snrZaLkCCR%2FpbVJPWyicqXPjhonQTDYaRZiRaHTDuaXyvE%2Bn5Yf%2BTdB07QaWTFFD%2FQ6pIFRqzL2%2F5bGvqGp2D850xW6HvePUGYlFGH1sYaNlSWkdIlUtdiMfmHczok1K00wmcvV0QY6pgEoRRyhZn%2ByeX9bA6BtIUW4ixMqdcv7Ea7TiB3aaYnwQscD1Wvxjv9m1Yzo0WDS54s7egAF15XiK7kjHgxX%2BctC%2FiTnvfe76MNHMpcybEQdj2Dax1wvNEK0nAh37jxZJfP%2FXC5RN%2Bm8Qf2HqY05rqO91WzNT9L87WmSuaFX1tn6gZhvQTzwZeAAHEnQdRfJfe0AOCgy8GJZtq8pDHtiS%2B5AsNqbT%2B2R&X-Amz-Signature=6f2ec315b5396bb2f6692916273352c0d801530cec589448431a21d621aa04ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
