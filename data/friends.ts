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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623PX6VYU%2F20260722%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260722T062953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIQCscqdo3ZXsz1g06V5DmVWIOs6eb2OejM82P%2BI%2F9j1dOgIgJ8AJrN1MWOybi2HjdtOO%2Bk2uVO%2F%2FB3EHQl%2FDs3v7z6QqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLun0eE2h%2FfAnxpX2yrcA3GrVe5q5tHXUW4eKwgJi2SmlnBGfhTDJei%2Bwj1wLn5T5cDVVGZFsC%2FltDQutkqfZA7SBSkIHxQ8FPGpBj9%2FcPpY%2FOtl5Aci86JfRPmlRvHU4YzgDkEmmnifkZx2Bx5ghk1JvZGK45Hl44ZNlVM7mrM5fDGOUPgFVxtnNcLopdclRTJhcrzZqLuob8CwN3Y%2Bo3Z8gdoIS29uhHE7qEzUCks%2B%2B7L4AQqoLDVZ1vH74Jyjmb2XBEz2wXbGUF1Y4HS6Tmf8wcpdZQu%2FYREBlmtLE8Sgyy0xU%2FeyYdSHtiKIJCSiztVtMjYChfzG9pdGuCRArBWhWaWOOPA47CIGIersMHYnA3yty%2FSwaJMrVsu3IJ3TUfNzPHeXUbyliKMJYho2KH1kJjneDap7%2FXmlMRjCL%2Fn3XV%2FqOc4r7cwYLDKvCCOwQW8lN2avV03AypnL4dOEaCalTBPrY5pTfOPDi%2FFVEVTe6Nf5oSWEwtt682GxegVqwU7lE4ClAcG%2F7MnuL2P27JeLgfYJo%2B5VhLu2ui5qEdwlOgB%2F4ChzmPUH0eycYlN%2FDomm8D6lBpNgYf3bJRwKgOGSZYsHEUD%2BinxDzi1AZruK3HweSpFAhgJL9z48zkC3IwNGEVWBYRrxQZd2MNCqgdMGOqUBFMJ90CzFDQe9I81j1ufPMbZKxa%2F%2FKTKnX03sK8GtOwgAtk56GFuoKcHWqt9yc2dV1MvcIpBaqHTwEVQk1t2WxKbTum3GFoP3LZyMK%2FCy3CqqDMvms%2FnCB3B32uJU5LsC2h80uPYTFMaEcjqMxAphuLZqnQi2qxzwcV3Gm74gKyUD4kv5u2DFRFLhS9vmmn0pOi%2BCmhDir7hKLrWUYW5TMz4ExwLt&X-Amz-Signature=b157cb812bcf442ceac11a9307ab62c8d68e38cee360101e3088bc97fd846819&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
