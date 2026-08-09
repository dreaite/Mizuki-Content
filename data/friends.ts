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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVYOSCFY%2F20260809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260809T143530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBsZBmzIaj%2BJQcZ1%2B8wwYcAs3pWYu2KqnDoI%2FHLNS5QfAiB8rF85EbW55CVkWdBXBE2j%2FnwcACEK8pxu6ojj5hZPPCqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4XFhZTmNcxD5I8ESKtwD8ioIs5TI2rRbubXH8ifZDFM6mObQLnFtPe9zZCFoyPgEPN4g%2FZhPn4a87FBz5C14kfxIfK0QA3UGuKolRWm7Oti4icc4LAQzfef9bHEQ2rHQt6mdCrm1m3O3HtsKGNv6h9NYSMplT8uFc43rFgcKkY9Dbf0KYznqsDswu1fbfaHYhUl7%2FjF9OldCpK1tESUhBqOucO1sapWUmDBfLU4r2pV8EKlTfFmsKhHMcKcTNnZyTfhrP993tpc3y%2BEz0hT7M0%2BZUv4Sccp27NFglqmoKsPtxCUjzKOL5%2BzAhRsqOVMnj5lSsaamJL5XPlsEMAXvQ3ZijmXoDfV1%2BuP8ACiqcAk82hxzsdxEvNPqwTdhm2urgHlGQBVTSYT3bnv01aM8XIK6nXrxdCgp7xG1lbHtdPSDzq%2BbclOUpDQyl%2Fpfox4NvyLbmYXHsQx%2BUr1Kfaxfj5z%2FFiQnZ1akydB4hhLmJhuW1CG5Y31cKKhFIv9oApvNxyVaTvWSlMj6L50z4ipkOv9%2Bd07AxTMGg%2FehKfqXkW9AwgdJYF5aiXiOoqZef0ugx0q8lvSoQyoW6%2Bcf4LQrRc%2BT63ah58VgCZ8HG0vyjtfJ5P56BFDFJNrsw926mOwqUcFRPihLSPlzMKAwlMfh0wY6pgGhigyew%2BmLq1dUGmmhig%2F7Ki891zRtxTHj73pDTWc5P2P5xMUorsGJDE9AoheYFOO7m5XsxU%2F%2BhhHuZfEp76mLZ5QaAofnc43yMwTloPWoAMCGuzUvfude2Gu%2B9xzjuAApnNmVgd7%2BB7mYvztOuuq3BMMEGL4XfCSRh86ru11cic8H6eO%2B9w6k5n%2FzPG22kt80MF8Fpm91k87qpL3E%2BhjYhDlZ5v3y&X-Amz-Signature=71045d74ca37ab66be46d21ad371a3c79be6514efa5a50c57dac415170506524&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
