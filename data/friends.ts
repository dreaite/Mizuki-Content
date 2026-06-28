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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QTQ4LBR%2F20260628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260628T134227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDkiw%2FSwOs0SahXMvY331Tb6iRFAet50p2kMMioQQChSQIgcnOxmvgV%2FuqQXBdxH7YmPhWkbTLIwpN105bBjsMCB6UqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHMlXP4B2DygvrKDOSrcA5ALr4mddiuoAbwHOJzyrZmvcV611VkchJ1AZCBllgaTE%2BJU3OMUEh6k3COpu0UZoqCRD8oMcXtf8xULyYbX8uLVWBhEHLEuAUb7dHti%2BGoAr6nLoC%2Bxph3JRD%2BI1CjI5DeFEnRxNdWzlAXDXU8DFM4dguPrqwFyWv5scSL9EuVkFvaBgmt9Nf0Cf3%2Fr5q7kvFvogiwkJQVUA1yFlfguSQSEa6fLW61B3lfKKhHAH9tolOa1qijQzgRDQExypI3V4RW3qlgaYO7zEgt%2Bpfa68f2xIQzSrpX5OsyELIicin9qo33ar%2FmmviThe%2BewpVB7PYBVZ9lYsP%2BwL8FoLSLlggyjll48GSzn2ik8ds3O2%2BKbUYT0CE%2Bi35a3LkKyJIlawCTWUbeUXpBFGGxt5RdTk0rxw18PhpZU4%2F7p5LtQluUWiMpx2klUo6Aqbl1dIS0V0RJ044QpVuzHbQM%2BPlZuaiCJyrNCNx%2BD%2BTQatYAewVTgLeK%2BXFSviASEM8uwWqkkP%2BIn1NKj3tH%2FYlGc7Bjy%2FsOnXGvFBmAk3P%2B9Zm7S%2BcZ8J2bj%2BnfIUwAProEk2qTb87GHBON3kGzk9WazaaXPTYMzobAR%2FH4bMun7hD0CLmwWjfIjweIv%2BiPax5C6MIfSg9IGOqUBmvI8dj4cSs3j1eXjyrO698CmNV%2FlbQ5VLT8DFLEye4p1HRhssXhQKK0tgSO3PFYK%2BMs6fXg0%2FmVF%2BkMN9mL5%2BxQMxfIHP18MuOSya%2FMeXNV9%2BQFNC7Mkk1CnMx6I%2Fpe4T0l0vayKImf6TMscHDgRKzTMzS9bnKxOVTWLT%2Bwj7O2cOenc0QEk8IvxHsc6ge%2FwD1VA%2FpR05iYAvwuYmvbQNPpf8%2B%2F5&X-Amz-Signature=08fb2a96664f003d38a841377c03c69637bbb219812d5ec3244c400227df3adb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
