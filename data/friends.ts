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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q25775RH%2F20260702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260702T140521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIQCJjkxq%2Fg%2BOVS3DhY%2FmloeXAiv7%2FgSS3s7%2BMkC6auWC1QIgZXWX%2BBAQNyyawTUjjoWx7pI9qC4jAe3SMBgtr0TNxXgqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLHhvEnX4ClMuX%2BCzSrcA4vhv38rbli22ExAMEaNyvKUJqUlnUKgHA%2FCgA2NeejlxBQIEwkumLTzXf%2BhO7fzY7O2fKzWesjSSq4SFKzDgXPuCkNPfefYapEnICfr%2BGlEE0Qawx2xs34z64EjBfRE0Fp2kmUhoX4hC5K%2BWQkxQ4lFIAz1rGkqGsblGMVoHpab9Hxx2htYdhYTxjBx0XOUgokVgRiK%2BMEW%2BT4uTi8LnsH7qSb7WuOEtZl5pKAzipGePuromVRj%2Ba%2Bw0mUKcU3KOA5A0%2B5q8wN8KYaICnohUOC0uDG6XaZ%2F15iBJseknMiqnigbxfcNNIxGK%2F1RiqCso8Uo%2B1hjnQJ6tMmRwsEGbHHy1TJa%2BWvHHcnBNwVG%2BF9gxL%2B99mHkTwHbcQFRyWtW0GeMlovVc0pgVfkFD38XcWvmqxalfdVBTQ47PJl%2B8mtl8HI6IaKGSnYOrpOOVfplweJ%2FZEZHn3L8S9aWOfP2a54Lnvq4qt9FMqD4RmwImZo5yyiO%2FIvGnZgsp7uHlidfVZsDQfdp2RBVadLP3dN9%2FWfoKn5Y2AvtVMIswx%2Bgt7iAxruFlgdg176dd0fI92HroLysHi%2BNDqWzBZsEyOhMhg1wLU1zeZVCe1542GJ3LAsjBgZk%2BZQDeAdPwYA8MJ3ImdIGOqUB5uIREbrtdm%2B3ZsdDhM870lOlg6v9iL%2BYf4y7YrgUhqRvspZitlct%2FJEIzh%2BZYJR25Kpqpse16bNcsHXdvP3ixSzClDg8PDOrynxi0y8hqhyle30x369UlvNrptSFvw1J%2FOUAC1yUO%2FEMJ7rcqu5QS1O7M1CNPwB9gRqxahZQ81qO7Y%2BxaKJAHRJds8KDLD7EMrLPSTHOMBk53zpXzr3i848g36M9&X-Amz-Signature=afee1900f970d112b95a548a13b0fc3428967d9b1f9215a853a4a5c0a2fe0e27&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
