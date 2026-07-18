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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYGGGE2E%2F20260718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260718T032031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDPOjmZ4KQzjE9%2FIfqhVn5sIiAVfiG6rlZ8rzD%2BtfN7DgIhAKXNbMOJro1k81pQWMF1r5JVyvSX%2Fv6ynk0fWIGfHV6LKv8DCGoQABoMNjM3NDIzMTgzODA1IgyuYSUTEwLAFH%2FH%2FGcq3AMKqFcJ5Z9lV8weiu%2FBWPCLt7tRZG0YwyKmXZ06qH2c9xvOOGENveRKHAa0mMjItgkOnVTSaJ3Wn95ijhGCN6CJ%2FMCX2ZskNo1fF2yBQ%2BFWfZz43Tve0z63UcXiNjbqgGOOigBTwh8%2BGvIVS3MYShvLTRDZN2D2qs5AK20zdKngJVLVyNV6YmfV%2B9DgXyXAAyFMQ%2Fnwr90eCEEY3IRcjwN1mfuvG8znphTru1tAyzt%2FuyyT6KRFsWNWZQWa9SfpP9OaEDPDAhXtQqVYQ%2B43W%2BD7bLVK%2Bu2LbJQcJX9t9EHiDjjKz4%2FxkEpjswRCLtAUPx%2FxDOiBXi7M6KlnMnKVVUD0NQerm7ar0w2A1QYJ6gF361bBaFpHPYb2gdedCe1s7ZKw0xIfBSEefXH6GWw64miZuVpk6as7E%2BU0AluYcWiMOU%2BMLJsELRMDOWcD5nfhCpA24a0C6%2BhxrXQVHdkRZTVRUFFZEHgeHJx4JWfmzJujS6oZv5Kz0cFT5rPTF9SvRul9zZ0gVTtndQOrh2xdadu6szB1zmPdDfqOecD6WFXwE4uv3EzCLNnfqPgKM2v9SRZnvtiI5NNtlESSI5gSoaOCITGWxZHKlAJWvTn8pN9C0GLXCmNEW4WXp%2BhfCDCppuvSBjqkAfLytP6VamNXHc3G8Luyn5r%2BGGhLZleyEBFinSrrNiS9MziCLw81ho0XOhKe5ENj9WIHLesC4EXfF6wJMz9zuI6ZQOOGx%2BrYX2v8qZazo2mtJq05Jc6sKI2EuGpAXM7hlCFV3b4eupl%2BvJTd271iB1ynrSllN3PQu0G0eMW2gwdGO%2BGSWo2SpYAjLT0eFz6Qd0HxN6BIW8uYEj9J8vTrxBVu9V3W&X-Amz-Signature=6ce059c95c12145b824143acbfe37ea81d466f98116a36016b93fefb441a0edb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
