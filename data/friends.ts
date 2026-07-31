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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDZTEZL7%2F20260731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260731T104056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB0oyHId7IDg2lFByKvx%2Fi7QwklVSGneGc3RpDWLmPoKAiBbl3tPgljUD9iSXz%2BdrfALj5pPiSVcqEQqWTbIn0%2BIyiqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvJ5n17AJOqJRFJkxKtwD%2FwysSxEMAKq9pd6J5%2FjiT70T66oDYSuaqIVtub1CjXxUFGoOdrWdLYYmnU3513Cj8tikelF%2FMzhybzIr32nDawXi59WMD1KTWYzC5WjddOChGvvyqicgHjf3fjrF%2FmTVouXmrrSCSt%2Fq%2BLqE%2FNkBYeeqlfE7LOcgyCsb4qin6deVRNUfQsrNj0Bi0XdU6BpA5X9g4sroU%2FxL0GoOFqqNk3GK%2FTZZdiNkPvPCrj3nAIZuV%2BR%2FO7RjVD6SWgUOOrp0%2F9RQzB3YzaCH1xep%2BLHEKkm%2BVgijgoXpC2dFPBmWVvlAdEix3bJMUMDcZd%2FSoy%2Fd693l%2B0VCbJck6Tia2cUFnh4SLFkRv2H0fDmO4z0omNewICYX%2F2SyhXoh7EFe6tz%2BL1llYZvLN0pn%2BmbGfloN%2FqwluRJbsGLaUMFbs1AK4ijjrUFEbR5KNFM7LjtZ%2BPy%2F4IEEFGvmt3To08dmAz3ZwJSVsWmdmAxHQlmTPDik4v2%2FTlumsRQronxWJK9YQYbEAAbxmlOjmR5cn5EIgCotWkv79MRqitMoXY%2F1f%2Bim0LpcgSfV4HvUwxuHF66NMm1KFgtMiy6JFjugEu5f9Gx3GX%2F4uD2TpOJVbdGR7B%2BP5zw4hRNLDaXFA%2Fh8zskwi92x0wY6pgEES9AQevBJYlBPDX2Zi3bc0%2BrK9HRbTZ%2FRk1G2WBUYovuHOaCipBmDx1RDp2fPXW5yW9EXICXGP0Q0p0TPTtGszVdnR8zQuMmcFWh%2Fah2ocRZWTW4Ct145ywFqqWXXQSXnQaXI%2BI87%2Buk6WoFxX1Tjm%2BGZbl4jlqfRpYkNKD5kI%2B5HXMt0OqaGsjS6V47045KJFm3Tyf4xyOtyOLK2KU8PEVCZ6MTU&X-Amz-Signature=1b6f3940975d70f48ce6e8979f7d9283b6b6e987da8f9275dfcb5ce95ec3fd69&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
