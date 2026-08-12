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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YD6RZLHE%2F20260812%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260812T044726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDVM9aF1ahgwls0TRc9%2FZ4PgXjuHxZ9d9wa1BTPkcR1wAIgHkqUCjadhzFHB1G435kx88rP%2FzyehI7quOa9wjXrSvEqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJtPdIyeg242S9lhwyrcA9vG5Pa8yQ9XuYretyCW5JqHkTgL7mL0v0iwF61RjUXasu3TdoMV5EnuxuRy7LFi5dacuck00K%2B2g9aa8jmv6jRAaYWvWXUzN1bqjgSAYOPcWARxKim4Da886JufDrMSXPoTgA65CxRn3DbPAWvDGQxGQxHhRE2HurL97YwiDdAWlz3%2BSBEQp7qXYO3EophuBMV2MTfA59IRq6SRZiwxkBIJo%2BQ5uBuSsisv5%2FSfYdlIBSoH7ZrIiKQyprUB28T6qoBBFU2QxmrbZA8prXdZ85UiljwQfEn417WGox6ZqIjiU92iBgUPC%2BjCN4TJtlPWyqAsx2agcpSJDLL%2FE8WifQx6MtaDqBlK0L1S3%2FfTAVPtHeylUIStjpbB2781UYZ30AXcGeN8uLnDW%2FcDTC%2BmZ7jALLyR9O7p33gN4uPwctuPPyv8rSeXh%2FBDIkYYLTfbSiTCB5JD6hr5l9q6yyoSzvVt9qhkjiYWiIwNTiVyEWVVYovbE0lB%2BtPGN0nhQi7MGKs4y2slt98W%2Bwc8xUFQjLWbZYpGFRudf5Jy3pTwIosmIMEQ1u35bdxlN3dne8sfMwobGydssIG0CnAhYOXpbGX7CtmZ6HDTv9YSkqUBwo5VnQapwZkJ1ZPin42gMLTg79MGOqUB4sa7mujwqpX0rmIk11otDp5zwEhcmSTaf6e%2F1WoPcFqmgDMPEx0eBhfnabybsRnNUE7G%2FZYm0e3vBJbdhrLkpLueWykXpcyJAdqSyr5dToFCNwLXpHQdhRAVanh0LhLjZ2F9etj31gl1jHzGSqAhcVAq0JXLrVncSwAnszj0VjXMwPWU4wQq1xCm%2F6RqPYqZI7mhpvEOqLHHdrCUjtpnenEHLtVA&X-Amz-Signature=fe402e3fc0f8ac5acdd17f1f2a115a809bfadde6aa352d3357bb60991ca08446&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
