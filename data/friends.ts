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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYY2KTJE%2F20260620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260620T091846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJGMEQCIE%2Fg71kCV4F0FTyuAx7rZm4dsPGWq7oGI4xfmI3f7m34AiAWQ%2BnQ6I8mMTPwb3NgaDumAh5%2B1FCZKd5cWOVWyXk76iqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXiYVChc5k4djZ7PJKtwDFC0Q8nAtWi%2F3qq2kMZJ%2BqUCejZn5JWHznSg%2Fzp0gYfj4qIr110GMry%2BmurRhiGCEPfsObPuERJpdYEypQ9QkIvw4yp0wuncy7F3AglA8Xogg5GF19o6Dn8cB5Fxx%2FDCcuJOFmVouV7pnS16yQnf6fjhJr8ZTxv3oueUimJWlNQm9dq38Zdq7AJm3zOx4ENEpf7JcWxrQ9ITBVxgUUFNVzqohdBw4Ur1pb7DIzC6a%2FqaMS5los0LdBQFfoJ2%2F8GZslSPCmsyDXT7EWski%2FardR49yhwnL8KzI9%2BBUVq2xSupuWZjnW5cW2Fd7NDHkP4mO%2FFNXZKof0mD8oFF1P5Rnygjyk%2FdI9zIYJoh59XXvDfv3SPgQ0DXvWhOtRal1%2FxE2KDG4BdLy4uDD49vrUqYrYQZhaQ8w2lAluvr0n4WnUCMqRT6YOPY68pzfRf4r3f1eSon1guyZPC5VZ5zT46zzNz7rCnJGIR9p3k6dUV%2FW6fHxxqciWOEDxq6jqcp%2F1zNaKOHt%2Bkc%2BWTrrNLO0TY8y6tDRKooLcigJmA9f3xL2Noh15lzanCJwbIcfAwdBndzTuiWFfj2aV0I3hrdj%2FANqDC3mv56RZqOuvKNFMnncuFWX1gY8onTBKiqOnpEwmZLZ0QY6pgGX7V03LPKaRY4xECgs7v4nEjZMPMPZXzdplCgIcIb9EskIcgho1Xi5%2Fq1Te0SGpL2HkgfRjXM7I9ZbjtpObZCPLKkI0Ks7MnqU06nmixqw8dqDSHkH77II96RwnahhdspifUdZxnlrspxywx0fk%2FV0%2B9kfyQWEbjVd6nC%2FSzmpzCVvjJTSBPfjuZCrQKMMCiPI3%2BlupqQdT5nuFA4lv4BwxQszo1jd&X-Amz-Signature=710cc8f9363ed396b33349b1a9a18ddc0f43d5d3b383401e58fe7a00d2ed9341&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
