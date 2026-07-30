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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YERBP5XV%2F20260730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260730T093138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCSYpPgYguieuxdb2ZGLTeaHS5F9RJ2xCcf36N69tpuDwIhAJZ8bRMele0WqULkJXJncaddYP2t46spf2yj%2Bw45MzuAKogECJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwh4NoVp3fT9kp5zl8q3AMIWJ9ksumDtIZZrNwUgMecFLQGmljTCwbwoGsFx%2Boax2k%2FtY3x%2BJVt3WOD1qsgmItqi0xLCMh42t8Y76Ayt2osXDcqY9PZbaR8D%2Bkn3U9HbuuzQOAriwTlFq7k86c%2B7ARmHvEK5sHRA0%2B8kfllLuYUGSt5katL9SVPUh0W4ylCBT%2FI7JiVWnkr0qbV2pH247C6LR9dyFSt6hcIyv7bTU5c0EuAuteCxrxRAJtuokQm9Z1eybXfVHRuFlHxOmZgnPhAI9R9kZ4GuGVHVU%2F1EQf50gMifPrgQVCPOWfobc6%2FobqDHsPpboDUsSHw5z9ltAEgFoepaIwyr8SDFgFrb%2Fyg0myAhPAkzXPBZq7UG0l0CPG4TAx2Yc5UrZTy2MSu3VracAVzi3Anduymr5mW8ZrO%2B8h4bcvOtDgbJMw%2FLXaTe%2F%2FqCNLEG5X1HzFG8c3pgZ0G3RW7F5evb3%2FrxfjzoimSh%2FijJyEIddtKKxgaDzSuhl5CSTE6NC2VtfwBFjPyE%2BzxvxI0NJhmSPgZY400i6W%2BUtDJiA1s7Z9r%2F5fwvZ1jfVE09rILYOloQcAP2TMD9m%2FAH8YA2vmj7nFl1HCnPBmt60yvaQL3sXLxfi3CtY1lD5lUk5INac%2FenWSlCTDDqqzTBjqkAXl7me1WVy3GLcQDNzybIGsMgiFrLDr3%2FTvDsZeCv%2FXX5FKB8vb317br5dVz5PK1thlhiMeGNkd1GiTBxc6yLhQ9%2B2E0eq%2FwnjZuONYkPAUuAlds8MQ6zIgG9hvnPOY8mffJMkpjV7WbfDidzi7NNeptf0DYQnty8HGbCJE9B4izK5wreQVGGTb4PCDkMvTRgq8lm9FBOHFWyEz7i%2BevcWTk%2FVkJ&X-Amz-Signature=0c77486ec5ba2d0d59725eacae80ba042996363c784af964876b63e67fbfbd97&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
