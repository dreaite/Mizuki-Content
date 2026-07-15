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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EEXY3TJ%2F20260715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260715T053327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQCW1Gn8IPOQSv1hbLUkr1GGHnwnypnrzeJlUxDq%2FCNMbAIhAO%2BKbabCRTwp1xe698kVRYWcWFjFbSzKf2lm5yeSn8msKv8DCCYQABoMNjM3NDIzMTgzODA1Igw33zpCVjNClI%2Bk0Rcq3AM8dOkNoRTuYwr%2FFRPkenHtoHs0uV%2B9YrsVdg0KAbqQoy3hwKjduliWZ7o40M%2FyoKX7qmjtcTm%2FBKqFHgNtSLxnfrlVkaxnRLELKHEP6zOQ%2FDDsydwQRHSfb%2FciwFj5ZbF%2Bcla1mK%2FJ%2BF3ya1Z5HPvCZfJzgJtfv%2FU%2F4W4lKHdfXegBS%2FgYWREjvoNDQ0iRbnwsL%2FiUE93yApsk0PCzKUYJGYtDELMg%2FNaSHXg%2BUkjG5ymUHEhzBfYgxfJupT%2B0EfPtAZZkYg3dUfyA2OuefRYUKoOeZmhYfsPqVSlt9zVCxJ%2B5NtK1dqYdnvXlbnZQ2Q9Ea4Du3Hd71tGQd%2FESD8a954lbSsFPRCU0iAsBhFMW2fyjH741dGN3y%2FCs9zyKJK%2Fqe3zhvMhj2qtVvFYFyUmTNvJSYIm4ilz5a%2BC%2BAtElM%2FsCAvnhKA3s%2BnXCJ6mmPBC7YhcSBOTeERxig9vUNo17hVXm6DdBQNAkKyESpP%2BM52gSU42ZOTHy%2B1oXQln5Z%2BqDJOOdrx%2B6m01LT8ckNF7T4KJshCdMDFpkVwZo2F4Pp3N5IEVSpF0cD4luswidnMSV%2BpCFUXK4wdPc14%2F%2FPiqkVTGyUsKubFLxLWYow5DgVSvh4TCxWoPzZNroejDmr9zSBjqkARo12ttUNpEVoRMLkoPyqcNlQt3vqG1GBjCxTmtqGO2X7TUkrDBzIVvc%2BTXyFVbJFfs8U7g3vlH6e5Xz1kLevOnnMWSiluUdsJpnzpQOmBh%2BZevBWkYuVxzyg%2FHws4OtLOC8Yom64akYgp%2BKiqEjbnPl2EMCn0w3f9jvQQM2esJtrU8BV6Bq64Vi4jL3F%2B7s1KjWN7HqEUB4rHIAFCSUHtj7t4Pv&X-Amz-Signature=c8f2be95d6967782a84b1f9554b78a8969cc66c083be094dc2a20861414b56ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
