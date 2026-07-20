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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QG3LM37D%2F20260720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260720T180522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAYhJc6b7BDtNB3PRuvpBze6jh1TLvHhfRcvcD9pJ%2B8HAiBItZFhJQ88nNDq%2FwD0Ix1HBO0IvcN6hg8eanYJxFnZaCqIBAip%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMou6pwjKHB%2FhtkTlhKtwDFutQRK8Q6yjECf0gp34sxJjSrI6fMgJKc3bb%2BJ0C7idENC6lnxysTdRGAhGySe3VC0he%2BKs8vWRFbdJ7jL0NPN6xbcAoVW34Rbr8b4WO%2FuF7Nco9Q5IdXCWw%2BHpfToW9txJSxfpNXP9psicTM8vsmaOa8hTr2zV7AxrNGbokkszJF%2BxxJl2IfP3BQBCShlJeyoF0HrkjwchR9PtbWH4f5JoL053LVaocryhdX01%2BiR9PAM1K3jtiR1cgww4canF0iBDFWEGNm67OMMI3SpCrp2sCn5gvnR07yplzvX6nz%2BE80dfKwEZdk%2F1BrOUVf%2B6t5ugjAXlpSkPHQJJDoCJIlBgOLwlGy1uvrZMkla3iSKGiOsK2pMPJrAS1eH9V5oQmRJxEOW%2FB8Tsq5C%2Fo4FazB0XTlPxlFRzMXVSMEb63ejUen1WYW4%2BkvaswbFDd73n%2FmAiCAh0cyQraQ9Ldh9aISZsYYNhPnhg6s%2FDa2JcJIcWOy2Hb32z3fsGISSghAI%2FbjQm%2FGjH2l9CYOHUco7UqaQkdxJJ1I8fr%2FhwzPKncsu%2BLKXY195EZCwtGUHQO8%2F%2BTQ6DtMTcnFPodpfl1G3frX9iRX%2FeS7vITAhrsvZ5Phh3Y1%2F44Ws2zhTOZk5Qw0Jb50gY6pgHpDrMyRGCD7jgG3As4pC2Qerg9PUZiiFmYIAeU91dtej7mWnkfhGffqxJhFSSe%2FyaZD%2Bf2syGmf1oHHjQ8wcnyCjDywCPawOoC2XtiI4apqE26T7eoW7PSx3eus%2F00uY6BbmYjwK4e2VrK7dwrV1%2FF04XQ4T1oU7Xe9wjv%2BWgUcq3iBnSxAewGjQ%2FjXiiGSepWPrmYyUvv5TEJUVpKAtAmh8z2036Q&X-Amz-Signature=28f8fa95c1343f553d34d97b576b57272fb55f1badaecc2c88668b4b9aa3bcf3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
