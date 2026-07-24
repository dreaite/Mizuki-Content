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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6DBMDZX%2F20260724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260724T101955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIGuw1OVXi61Nt7OWLH2GwDd589UAFmPF0zBFErGNeVzIAiEAuSfPL0NcacwbUGvf6E59VUspHowapDbDVo948ZyMbGQq%2FwMIAxAAGgw2Mzc0MjMxODM4MDUiDE6s33IuSfEed0a7QyrcA6RlvOT0HVtpOsZFM6Pw4qpt6gF%2F7AVky4dK83tPgc5f8Ij2CcoLNFSlQEdrFP6NRslWDawqNEZsMiT13nm%2BeW7klDy%2F4f0hh8RPEZK0N3wO5CN1Gmwu6YFcLcQe%2FKTPbcxwRv3Wr6Lh3g5UybOVI65r4swfRJm82xwz4%2B1t%2Bb2GpSQtmq6mzgEfl5izm5c6STihiUCOr65%2FWx3q0QZo0Hv%2Bykgw%2B5BPr0N%2BxuUtRk5rfm88kmnOtlRCmqOow9D5vBI9X6iV5p3WY1e7GKRWazghgma8GPsnbhrubB%2FF5l19VljiCJBDt1pCugIZalqdorSuuACjBQvlJbi3v03aGoTnnt%2BBFqP5WPzGYptfyTkzrwAkpgILmyeURwGrjXlS8VSbAP0%2FTh%2B6k71lgWG8gI%2Ff6%2B%2FNQxErBAwiv9YT9Id%2B2t%2BDkFqUVjRpKLF5XDA9IyoKOAx31nSpRjDDKQCuhI4RNJsPh4yiseIoebyRZrIkgNjn3e3v4KLSwSbJigp4kS%2Fv8UE6pASqXiwxnzakRn4X971j1GYrTezvMcMrTE4AoAgQN6%2B4XtoI%2FxiiW7jQ9LgWxMXQbYNi68qzhlwS8xiSDN%2BcoUn%2Fmi5VdRbTEomkYr0oJQ%2FDsO5JQzffMLPkjNMGOqUBp4NE8AnJV9AECyGOnlc25vC%2BCwjxsMXGss7PfaiNV9cCD5OcyymoChs6FakWYLHvVQ6rdvdCG%2Bhs%2F38lLqUkiks8KWtp%2FyepJdG2dZjDYc6P2sBrkZ4mbvyhP0liJ1ZPgsYzo1tVXoLPtria1abxZPzLNNqYRw%2BPbgqDO4tgyLN0YrZQBriljBlYlge49IOOD9n4abUnyfJVizK4SeF%2FyyIl27ZZ&X-Amz-Signature=727b76debc9d27545105e87576f1d29452c316405e52a2f0b7278cfc7aae516b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
