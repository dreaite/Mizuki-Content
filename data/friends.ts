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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNVGES6H%2F20260805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260805T000410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQCEYbxN9m5AccQL7fJZtvpPQo%2FGhP0cOaZggWbOEJWuigIhAL%2F7gZlBigQQcBI2JUZ%2BZDpwqZxGNOAkgSUS38d%2BkvMHKv8DCBgQABoMNjM3NDIzMTgzODA1IgylssvUwni230BVvPMq3AOeAFhvL4%2B9UjVFkPibWFvK4TvAK0KJnvZDz6Z18El%2BTSpkIQM%2FRFBynwk1zhYpnaTlHtDJFCFe64XUq6tX%2FNjNegp51%2BLKplgBonFH8jsll5gmDNX21CdAtPntR1XYYnaTxdrE%2Fp%2FJGgmHtIdCFVC5Lmu70Kw9lBShSWVWB4nEUJrXvpfaSHvqBuUTaEFUuRONVoDDKAmpDTohXQMK5fu4nqLqpOCaOBhv1%2FVled3rU8JrhAUCvOQA9mqzWK1NNb%2BDKQHCK2h%2FPn3EP%2BtH5eKyZtwzWlcdpqz8Tid%2BVeJWD%2Fk5La3U2xkKdnGNqWdaWRMdyz%2FMmJgExePZvX6HArjGrFAsMMGrk56sCTeyDNLTGLZjZy9w6OVJxOttCRSQ3nsaGzun9eoIfkQlFxuKWt9fnWh3u8C7tykC0x%2BlijGhEavUKTkRbiihy25285x5Zp%2Bjc1BjlnJbec4LwA%2ByXe8S70hqxdQU%2BLl%2BRKYoRXRW4SDiXFN2P%2BjxpNmXUa67Kiydtt08sGLKwm%2FKryroq96AzI3rjqSOyaKXOkJ3CPCQNJ2PCudcV%2BkywBlJ3iVJq1b2CctkGDILhjm%2BEDLuMbpmTgdmudAQmX5aUNZmEFoNyWOVbzMrqZ6szLN9FjD85cnTBjqkAQ6t3NeqQee6ODROYvqejliZfrOqBnQqir6yszuxRDgjZzWsrLaLyCHiw57%2FDv4Sv4h%2FgVQEdVLve37rNHdb8u1aLegDvsSwQZ7hZZ9ZC9ETBhGp6pea4pdwx5M1PzhkeinRNdFSxf%2BxfZ6MFUS6D38Rp6Jxi4fQS%2BKuGDa2ktGYuglm13LC96HF6%2Fc2AOoCOZAegyne53YFCGq9YIxyX3TaoYI8&X-Amz-Signature=ada3a41e6bec8abe701fae77c0254c83d23c69709d81126e42e4bb490683537b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
