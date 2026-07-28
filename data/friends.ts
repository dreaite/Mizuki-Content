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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XN7U3NRO%2F20260728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260728T111900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLl6ADNEp5L9DyYq6Xl5Rxesm9rXjpn74MTa1iSIZrywIhAI2t8Oy59%2FT9rbCCI6YQAbpcJRd5prsoYSLDOHpLI9gbKv8DCGQQABoMNjM3NDIzMTgzODA1Igz6N7iQMAH6TrZxp34q3ANHlu2EJRWR6qXRxFxSpFktkQM9u9WOBCwVMlNoz%2BVSamGVPUok0f2lTST%2BXgnOjQ2HoTo09At1zpkaTU4%2Bhx0qCdKXlWK0Pt2Xv%2BIoeZqMeR2j3ZtniZ%2FzDqe7fN52cw8KMbHuo96OR6Ow2Do%2B9JumSpUru1xRU%2Bj6cVOC7fogxR%2BYVzqZR55nKzZq2HeOHIgDdCXTr3tRMl1f%2F3BJYWc6T9rFWVeB1uj5Jtl9idjWXlH8GyfxuA%2Fq8DpLM0a%2FM3ZgdjtcpY0QJOLJtRks7bi4FYb8J8zAUQl873zLOfUkSfhR052BX1i7M0%2FLP0lesasTmxCFp61ErZ89bUJjqya8dJxLV83ND7FjgMHf05jXmwEgySL0jOVcTt0zi2hnNxxhaZjIbcMoH07%2BO3rifk6kYmUJeYZXqGvsz6Py9peytOfbblSH5K87zXYAG2viBaT3n5P%2FHEJyg6ukCahPoowVYmShSebOesHgYXfKBDIJejoYW%2F8vyTYadmt%2FI6Pz%2BXBRU4%2FlJ0ZJ%2F8Ps5NyuHXtqyMFlCtXbNjTNu33aHO63nJw0G%2BKYsu%2B9%2F995Z9%2BMKgL71pcVfapVPKWDbHrfka25EVoFWGbuyNl3bPGJiKCH0ElFbaaIDlgtlBc0zTCqkKLTBjqkAT7efwE3yvMxn7%2FYPCyXM9HCtgX7V6888j3CJggvAx%2FjBew15p2roqK%2Btyk4C%2BbNp7naxdI0EA%2FVdXSy80v2Bi5IB%2BAINDc52th4sdlYm9fpFojZD6AczK4TiCLxmG8KF6yZ89HQahdsnkJfkrTqgzYZhUY49ArEzSEB%2Bk9yEbRZg9WW57PVL4Vbq29vP42KVY%2BCcf2aW%2F3QC74to1YtCGw4K%2F%2Fy&X-Amz-Signature=726b189404abfe77f7384cdc99b2bab07553bd9016b74b344ed80f301e529040&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
