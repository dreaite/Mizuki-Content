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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQIRWQPK%2F20260705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260705T101626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIQDPZ75W%2FfPeq7xFDUo%2B6tPzap3QBw5kRNVMOprAUFT%2BcAIgLjOUUOtKUzPgGD6h5ccJEj8h5S1%2FOPXLwNGVFC%2FvKDcq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDHXsxks3WFW7Z%2FrDkircA5UxAH3sensuSiccstJ8KWECu6LmW%2B%2F%2FH%2BN2gbk3WRpIAMt2E0JRnJ%2FrhaztMO3Qrgn89FlvUoW8sBgvAn6aRSH5koEx0kFUlbONJHaQB8xGTNxxIJgndlmITHj13TQ%2FbLYh5yFpMN1%2FEUNs4jV2pnRA%2F5%2FzRuIerbxAu%2FhLOcpd6O%2BCajtseZZLWdue36k20QzI6bLM01tCShHmLpReggnRghhJOPvvYA0siTOMUgU%2BKm9Ci3FhG6N7H48ylUQ71YoHcKi3mXoOJ7%2BCUSM5NHPgSl1bX9xc2XffZ3DKIhcdkWYOp%2F5rC%2FhyavfgPF4cu3LIIjaoxlR%2Be5gSCfArG8vHeHyj6kHd15B8UVdq%2FdWt9ogQGnK7jGHLgtpcYE4iz7JQaBRSPGJc807hvwd30dz33EjuAyrkwQHfsEi9eQRzDJxm8ifWO18s%2BGxY65dKrWlGHMXlXk63w%2F2FHUgnw%2BQaQZbz%2BtKAnDyfNUw%2BKkDErLGr6%2BTnGZ2v19dk58ZzatDj9LV%2BFaD4PIMdFKYRbiiVZU7cbIv6Vcv1jx6dPdqidm4wDQFeFWB%2BXc4H3TH0fMggHWtmfT8MSBBcc1S8mJRkILqaoJ7xRtpTAOYM4BHQpGjTxgdCNgq6Qc1WMMv%2Fp9IGOqUBoMYVV09i2IwxXswP1XBXd4Im8NamqNcV46sjQsaw0b5dSiyOpEJnhaVRA07RVDanqtdcB6ZRTnzlksr7L5BUgMkxSBeSdKwekzrKXLU5pYDtzIjaKl5zP4NpVik7eZocg7omOWwVcgRbBwF9iBqCpdl1elpyHRVgUGNQgtvRx%2BnZA%2F3FZ2BU95uFARHvB%2FxzV32HiY9QxHizVah2O3kWxHggM9J6&X-Amz-Signature=cade2c1068f1abb2d16aa384ba9b4821ebc3d7ea8108aa08e1cad6fc45266894&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
