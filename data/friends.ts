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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FBYODCE%2F20260715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260715T105129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQDlCghrSev5CW47rxMlRtK76GNfUp9qL596H7JbOqvlIgIhAIROAFblEqupkOWJ1YV3bScCOFnFlKYcqdP9YP9%2F%2FP%2FCKv8DCCwQABoMNjM3NDIzMTgzODA1IgyMlu5aZBVO1ppl42Iq3ANF60dGXKhp66DzowGZRqXOMfz%2BR%2F1HTn%2FG9poRqfcA3n9vex2WrEOi1RPvb5uUsezNK7TwapMXeKa8%2FPDplWxbdI%2BCDk0OVHRn16AHiLHJCUgaYDn3To2jJCaNzH0dPqxfyk3uAzNaPHaiM1DIoII1OvZes3ZrLA8Sk8G%2FtQpLF22O2ErjP%2BKOEnzmE%2Fcijrpyg6%2BPecQi54FuCWJNLQAF4OXCWrgy%2B93nklWYVuCIzNVB%2FrgXr1sIKS%2B0dtbTvjYBX766jhoYg12D1B5pOz4gHUNXE7jEJZXewshqV30N9eOiqkB0DL%2FdKrzWaia1Eb0Zo7iEMbvOUl0q06wxnAm7RGTE5VnUT6LRevv3WHDGHPWWfq4wYl10g8N%2FEwZ3RT9OUNYcQKKZZLQ2aTL%2FSncR9hQUYq6dPgMRsVCh%2Foeo%2BrlrpiGXdnSVwlEVIRQoi%2F4g16z3Hzj53JZy9S8XmqZyr8F8g%2FsR2nsm4mfFvsMZDvu%2F66iwbWM08RMuwo%2F4iN6F%2BBEb%2B3QlWjIHqPh1WUkO%2BQjdj5Cf2fFIPgPszxesU7CgHjXe5D2qKjJ69y5Aw%2BEleaP1sg7DFSK2f%2BNfF%2FRwdBqcRGXglCMKBM0I0e71kkis6tDmiD6Tdi8E3TCEw93SBjqkATyHNyJEMxYmiQwgvfhLbP5pkq1SpaWpsFpywi5vOomZ2CpKQc494MjxB6lw2BB%2B3LRZXDbcWsjj5vld21fBx81aC1hxX2xI%2Bfrw4UQpM93%2Brjohh7ai2A68seuoMAbor%2FpgZVP40KjQw8igQSfa9gDtzboHYiXhjYO%2BE36ufNH40gordNIUfG0rbjakf7KasfLcdQHS7l6is2AhRgIQrufgg67M&X-Amz-Signature=3b0b00a4dcfff8b878bb430632a6035e8b52d6bd7c70d4f18b55b2288edc58f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
