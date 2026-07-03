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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IYIOWXU%2F20260703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260703T162600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIQCyUJYQJzO0lwIsbcBONMKGiFvCHlkPM4Wh2FdQWv77UgIgYRgBsZ5V4o3C3Kh2bQspzxywU2%2FUC0q0ucWdTQY087Mq%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDODOlHb6rTQeaJX%2FTyrcAzhL1uVlNe9s5TzIrbbq58JmIj%2BbMsPNlgvElmfKlrXEvgBnbxP0PpGJ8Hqmvf6YPxXN9lwOFCpW0QXE3Qz5tuew9oj0ySmLZf6spdOqv4MJqzdFh8hPQimDZMIZnLRnKkpO1%2BrjM%2Fye8dZ%2FI1L8Cf3SK5NWSVDpviovX1NAlT%2BtORRBBRkTOG3Faztoake57qPkW9kbH92Vn5ngdxP4v%2F%2F534fDS5VUrvl8y12hgj8unfbtwTUpekuU%2FsRDUQHk%2FfmdkYFdiz42iA5i0kyqErmPH%2FRxfwBGyMZ0W5hrZsH5%2FinXklZLSo2oXY3JkA0XkmBYg%2Bf%2F3idcSkIHQ00F38aigidk7zrmW5UVBWtKCluQkZOXOAUunKOzyFeYnQ%2BUMJOja%2BFmy8hxYseqy3E4f9lBAffBeJ%2FO0GZrWCor6lYZL3z74hYUWG48yl4F68zI5NGCuzIKRlyX5uwNy4aHPkqBI8Gf0022%2FpFpH3DTXCcLJ66qPAiIZqnLVw8xq04ueueRrknDbqzmdNz2Y%2FKJdTpsmqsj5JOIkEAjJshcpemD6asqdWdJBF6u%2BnI8WpImNCoS8yetfz0cHkpT9r93T3lI49BNbPbxJwZPZhaxcUi4gyTAFY7D0wXi7QZwMKqun9IGOqUBRzIsW3bwXOmU9RDarSzMQTvJxWZ%2B3xYMsl30d%2Fg1PXKOq2Vd38bX5Tvhx1gfHMCSNAiY8LtcJ4UJEEittolGF7RSHxVi1lnENiTTUr1TJ9JtL56mHsc51Iq6LWjDMEEoEXbZbEuwuzOhjmY3lbQozokiNd50OWSB3T%2BQM%2Bu1%2BCmFLm6XwPfprBWchSwPz7aAObMZsY3Au9nbFZ%2F8m8Omzv0VkSLw&X-Amz-Signature=fb7cf8a835f9513b5a90cb344861988acafd840c3572691f708a2243f2c6353a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
