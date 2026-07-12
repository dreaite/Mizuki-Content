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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QBL5VTB%2F20260712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260712T160417Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJGMEQCIC5HFsLO5eIk1q3Mdc8bRRl5egTNxSTpUuJf%2FaJezjsSAiADPFHdGRtFAoyXlruxb310NedigIlThIeeooPzUsFxbCqIBAjl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPbUiAkPJnn67fVdiKtwDxJdookySOFqBS1y7CIKxZ0%2B1TR4WYBrDrbACp8eb2hgFO4%2FZRk%2BgxYNTX%2FcCVpgwdsiD%2FbOd1R7HKTE0kb7QgIg86GyEagwnBD6sQXRyib9mu4UUeziXy4GvPYc74%2BOCoyCcos8zo5PTPyoFRrfJZXbpCvafqrilg14F9RmbwikFyokwAvVng26cYPXPVf3khMTTibgX%2BFZFMmmZKIZHZlmmmiZXAl7FWJ3HJO54S3jqSesAFE5%2BMGo98XqYz8uCWwNdxMX0lKC6UV5qJqvlADfgwgXvmiMpNz7NuIBc1h3Fhqg0de05kc%2BORCHPiSC7BUiE7e%2B4MtO7ld17fq%2Bg3A7xOEevNtE6HoRTmZ%2BKLIQIPisPoQud0I%2BRAuO5W5KLsLgQzoQJONiGHa84qtxo5InwTe49A263aqnAdTeFCoTB5MqrAQhCs0Zx5ETU%2FHj4Y7qpxVZf%2BgH3qMkEvcWhfMmj8NkihiAKQ%2FCL6AtY03FhKlH2422UdFrPCqyxt6IJiPAoazRXj%2FWKeOSGYASHokGnnEmqF%2FY4xLM2BF%2Fse%2FS50KX3grO%2BTOQJpcHCMD2mUfn5RpEH%2Br6CYvmq3vbpPtmV1Iq2Y7qI7CBUiE38ucvSiEQ0bjGaXVQHcfYw6oHO0gY6pgGgNGdVC%2BT6LEhLHurvcjBQVf8wgZomKKURWDtPGELrxtowdMp9pxCY1rlm%2BnZ4v2Mft3YlklFBuIekNe%2BVuwVlbVB2teHt8K2U%2FSbKp5qUnP5AJFZqksFDqL%2Fc6HDXdOqRyiVYukED9ytgf6vz9XGuoz2RPICv45bbgMomRdTGedbiin%2Fuf416jhqvF%2BNjeiMsRO7HC9RXxTIbBooQeRzkU2tkOb1%2B&X-Amz-Signature=2450e98c61c1f2c6a5a0b524e3581bd012076f5646c15ac4d06d2955ba7fbbca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
