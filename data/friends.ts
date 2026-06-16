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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVBP3QK6%2F20260616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260616T221310Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqoiBvDHCC2i1TgGkwtyBNdlVna6N6%2FyEzwUEH8tZRigIgCNvdGnSZe3YCE9VvI%2FUokprFMGSwICWjPQDffAn9UgUq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDBiBujdSlpZ6Re3%2BJCrcAz4EPfTRZrS%2BRlpAgjn5BDgKy3E95ri3AXSwkh2FVWw8iSSW%2BEpckwBWjpG4cxj27C5%2B0AiAWXPZB5R3FPtOlcCxlY9x1ZvP%2Fo8LrZ4q%2FJ8t%2BEHivZ2CRRi6Ye3gxrWYluKE2H6XJs6hveTb8Uo5M7CLN8JymHTwWEdnFoZrGmcv1ir1NR7nqNW5k9k8mfh6X9P9OM7gGEs78HqZrHqwfiJ3L%2FD61B7C3A27OomU%2Bg3tvUNuhLR8AcLbzBUulGYsyFIhSwwaM%2FyiF%2FOKI5mAoMvM7KJlZ3rM0S28tWskLtr%2FRz0HpTdrewgeUWSS7RP9xKK3fouUAlg6H0ia052ZmIqun6oHO%2Bs1fdMPtwhJ6CB%2FKuj16and9mqIRYNKZMaxrAI12%2Bs5cOo3n%2BJX%2BrPPh6HOU%2B9COtsKhhQBPNV%2BkZTHsLAPzVPyOpyUSh%2F787toM%2B1JgMb3Sk9l79w79n7Am3D5XyUQuKyv3E2AAuaCj7tIRKWUwSImqqo8858he8kQJZBbghFKkbwgFGow%2BAd4Z5W%2B%2BOmFHbiC6QcKZaPMqQh%2B7UPBcvfbNK0AKe5vWlk8EGb5PTWoUui%2FqJqwXqBlAFpdR4GdLvfTvfQhiBX2EDlfwG4Bqzs0xzcBbPZbMLuCx9EGOqUBTzlb4ZjcogRKif50NraJmbYyx8kRDv0tvGtYjuNLzPfRrml0p50pnqbbi8SvRgbdjUa8ssGXTQTKm13l1ZcXBkGQ4FBvyVPtGpCbNqn3PO1Kh7qtYw41oIa9lrJJK3Xu2526euphs42VPSwBo%2FKapATyIbBoK0eymNy0lDZlyTwtfuFRSLzGWixyQaWgWPZ2Eh5X0QsAjwhnP9v0384NgvQuwbHF&X-Amz-Signature=a2852610d4f01b5fb10f62a655a9961dd10c3152f0449dea25e07fdb6dd278b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
