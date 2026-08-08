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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z554KTQT%2F20260808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260808T233002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0b0x10qe7fd%2Fbs1HpimnfvPSN9LCkXIUQtWhiJK9p6gIhAMx6GAWGggys4m7hoM785a5mAbd%2FhdqW7DDDW389ZAzrKv8DCHcQABoMNjM3NDIzMTgzODA1Igx4diNYD3lTGeGKmuEq3APMNJ1%2Fq2eMmdfp7E%2BGLhLzJxYGspM6SGvPkj411TsSTKBoHO4J%2FFrqzTWUoapWOETqhtNAJ%2BYmtp9erHVt%2Faf2nAuNdh5bKupPi1xarSVQtQIsXTVC55ojE7SNqr73GFs68bfQn4MQx3uNRgdCTJjLm8zoo1wOPY9nynO2oRFZU9VXiPjXIwZ9LbgbmFDraIwxQPaZBAc0Q9qkB57%2B4Y1XqIqSRrU8cti3jkI1VMTMiA%2BiA0WGholNHQclmZo0smBGVtw%2BVCKQYyrDRTbOvVwYlv2bbWqlqrhEyDSIe1sc0K0XsCibqVkqSO2g0rXUcEGGf9y9GlVXY0%2BSaEvReu7UeYkBGXvGjo8VgXqysJ3PZXR64AwSO6zei3dW%2BIfIt6QqfWN5%2FV2A7T%2BrbNO5pPZIASedd11PZtMicfWj4UmWa1xlsfOOq%2FccK5QWA6JOqtbs4htYIYR9%2FXKNNucA8b50qQFnbeI%2FZmN0kdTwTtnX%2Be1%2Ft3WhMZPRH8W7AUXWeqc%2FzBy98nglXy2YyJr77dRj81QN5a9vTnqPaQo4iQxNlyfT0YeKw8eLPVx0i2pSbxNY4SZ6vbtk80gpMPPSSIqC1JWTzWXHFfwvI1WXrVXB6y2GeZVxpuL6CfCn7TD61d7TBjqkAWkAk5SuPReAs95ScEkmMEzyTfj9HYv2X%2BxaVN330fRalHSkEEvIf9yp1XCH1knSyKZ5UT3iRA8Hem9VtcF%2BtHsOYAOhH5vA%2BE%2FEMRdraFZUdmWPTnaQykdVBA9gZbmJVKesj2OtEW5KlksR2nEtgjZtqVY911ivsfJ%2FOOxeSfZhPofEoM95vbcB686RHKKqyJKyzcE8ENVj7CZ4ziNSqWX5TLMf&X-Amz-Signature=c7a0cee3cdfb47284a80a0e676956fabf31dfe6c82fc52372e35bb3ba9936e4e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
