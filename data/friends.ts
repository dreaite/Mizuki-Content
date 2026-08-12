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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMQBYQOM%2F20260812%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260812T175719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIQDwnzpSH6vYJkLtD%2B2rOp0D4FcPTOmvO8XurduZljy%2F8QIgWszPq3ozx%2Fy3xoBnl7LKu4StLMOWK3IU6Egr1%2FRphP8qiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGW%2F1ERLF0kEJiarFircA6ms8PorqYVju8i9Iyz7FwPqiV4CHpEO4Fned4lFYote4nq0o591zhhXgEv0Au2UY9PoYoOSxeilzHnPNwmRrpBaS%2BSMpBKOUI9LzzsEratToBgSjT8jsMGbzWYGpc038pYNJdHs88UDgeZKQYVLUyQkPEn5zaq8ywvFVNjz2n11C1QISYL4CgnY0%2BYsIP4yrW0n1S8d9ksTSti4pXdEHh%2FtgOIPUtsYqY9XEdarGeBB%2BR8WQH4JoooBlIAIWS0yUeOp6FOeeUvTfRhZrGcDZB2mtVKm6hJwYKxd7WfWCD%2FCl4RPDihfjZqsSzqriZYI8UsnlxzEYmxeCJphCNcB%2BIdxkAL3SP%2FO6Kea%2BkVeYrclOyXDn3Z5AcK5GVlLVLCv9V%2BdbGQ9im6O8my7Iz%2FsAzrvTISNZ3KrNT6SrQ6Drt5cibSy8%2Ba9Dvd1aguTdSJ5dxO3IDe%2BoVBr5VX%2BLQclLHhLXgdrRfo%2FpyuoyBTitvfhJOAtpAg2xw%2BbcVeF%2Fi2UYW%2BEVcpCo4WBxCimnC5PO5SDEBCW1cVKtLJQ9ggfAaZrJCKvDl9sHrQMtte3cUAZxb3ec1AsWhfH877GBYjf%2F3HYoP3E%2B3OjOuTCKgCKQ6cV%2Fu3LnqK7hxgZ8vDLMPOx8tMGOqUBbxK4bGSJuk6alYv8ZoxVFtzsuWJI8aQ2mEkbce1HoBBfuPcLT8m3l8BApLJyU3xaommrdQmLT1EzREBWdJfFq5z33LBZEyDsdiFXM9WBXPA4Z%2Bc3L9JybEdV95Z6aT4whx1y2wOtq3wQplXcgG0WDp8bKcFlzz9s3naS73O8T54WYfwZga%2FsXY96jQS%2BlYoLJ1RrExph%2BemyroQkvWv8IIJCRB4m&X-Amz-Signature=8ba822619d590f1d05724626c6925295f1e66a91b6480c05a6614d199478e46c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
