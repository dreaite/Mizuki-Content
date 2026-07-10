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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664O5HYA2V%2F20260710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260710T143025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIErrfvw68XkDuAe4EJPMZZv80AB7HRnN8e03UblSt2h7AiBSuHMUVdbrXAnBbzpX6JWG%2BK4BQw1u4yI2C2lQso1u1yqIBAi2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrj7JdxjX7PSBLYqFKtwDKHaMmg5AmTnVgai0lRp2ZUdAMw40x3KXMOxTZuRG5Fp%2BLRWTDVMnoXBJm69S%2F7JQNb89u%2BfTlWDd3cVXpOscwjTUUnzHPdFeYxEEowYh7DGYfrdqM5mvpARHeiq2sxbOJ%2BDbkKfL2I%2FGCygBgIWQ6i4FjxZSn0FMKjRVMVd9eauaMtoeH3dFEWt%2Fo%2FdzUap%2BAnv2j3wHd%2FZfHsXWnP85rm7gqAQPJWYSH3egdYkL%2FFB6vGLCZHi8IfrONbbf32nKl0OYHJvXUbHgg8%2FOECG%2FRsCVJFer0BnALnC3ZME79uwo%2BQ5CBSyVj4LplDUYljJJF6VY1Wu7ar1nRAOJ9E6SR09kCxCN3ZqDl3yHx33RVWflj2fhV8XP%2BLjHsx0FBIM3A8f2lmdg8lua%2BYoYALJCabGPGAo9Jj0knxUbIUWhiUVGeYrDgdA5m41%2BDaLZTa29h8rp255v9dabF6SfZEYVrIFRfqBoYljKtNGwBkXZRbxq3VInMRlaSnpLT3ZQHv8DgDxxtGL%2FmjtSrRf2bM7jbDSCWMEN98O3SdZu0VQ45h0cVbtk6LNb77PCsM9lJzZVWvFsj8psiA1vy5PoLZKDkd67PKjEekBF2rBjfC7r1%2FKiDKa8bI9ehmZQS9Iw%2B9fD0gY6pgGag5r5npgaV0lADgIT7KMleDKQG16kNhMmRtaaNPKP8fobR2%2BtCc6pVR%2FhIVV2JS382usqQ9Kh9TKD7WaTsUyDdc4sNeGdhhU4L9tZGuYc9i2orvknKdBp%2FdAbEBiPDc4iiV%2BF6MWEQNkp5FES8%2Be4U6Yjx8RLGDXBtRTiw5bFBqySRg9kETA02HDbdgx2ox7O0oOB6UsJ6MbbT5sB5Pgy%2B81Wu84y&X-Amz-Signature=5b3246aa12ef64b799c5f3916b79e358dc47528fdc87109ab1260c952a08b6f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
