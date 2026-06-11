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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNXOY4FJ%2F20260611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260611T140019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJIMEYCIQDJh3toKJHTK6X7Ov3CWAt8SbljKm9DwWidfJHEyEyP%2BAIhANvzYtiTbZHYb517DoMt9xGUfhVTmvoWGw2cXg2dKux0KogECP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzg%2Fgo13A4bv2pXIj0q3AMQ8oYlooSE4DiDZ%2Fvf%2FgQtkiOMzbtxXhfVJiZSNdCKZfA3%2BduzZMv4HwJObHWQGe1o5k2CWunF%2B1pK74MBQBhShgTyHDQVoBJALT%2F3lhZ7TOuGhw0GjiJA2VkzESnOgIKLa0zFKNU2Ytc4SM%2FP%2FxT8LQ4FAjCT3Xek33K6cjcTu8lanrTjcc3Qwq5Jujsa%2FsHa9miLiQDzpr4IiwrjBceDSOJ%2B7j%2FQv6tYy5oLCXbABdVFJ2wxmt6TTOIXYTiJX1jDhH8NErIICT1F9b7M5cTUvTZOpwZsiMtFvSv2csplCRRnwYpIGJr2EudU0zQRMSasQR8tf6DEH86HOvpmSn0edu09PfzxuU%2FpONoN%2FJOuQPExJkpz4LiQhFNMCRsg0HOXCP%2FTH5QVm46SbABR2pNY%2FvqTxsQPYhBmkYMZCsMRnRTEEDEPwU6AEok%2FrxVzptGQL145Wun3o2BQhar6O3Myg%2FUkbiVkTUEqdulF3%2BXpeJ3y3ASeDYMl%2B2LWdeawwocfidaAkQgWIyUjfEGOfhPDnrPsyg%2Bvp7SsNhYAfGSoyn1OY7nOeqQJ5GqJ%2Bjh5NEcCOX6tJO2w9kKXiRY12kQTUHGvj1kGIulEF7c4l%2Ffjwx35I%2FIwZrwbW5fpxzD92qrRBjqkAZl6B4kfIDOCJCVlRRgIvwXbnjGhacEKbpzZQ6jvm38miAwYxucxoh2QyE%2B6l6EszUyISZjVBAryljPaaGCx4mDn6MgbDJ9zUOU72H9%2BwQjeLm7cqb7u17aqI6WhGQLSkfDZb%2BalLKOJpd87L3LIr9rju6vl9V9IX6Nbj4hm4ZSgZKfClovO31b0tRccnmxyW7ZTCdVO%2FiXaM0ZNFxsDk1UuljZb&X-Amz-Signature=aced944eb136c818fcfc4bada2928cde0e277eb910a22c287f939b44898b00b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
