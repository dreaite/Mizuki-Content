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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632ZULY3F%2F20260719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260719T025301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB5JzLIFTlo88EpwOMNmsvXDPul75EWEyOKICp%2BZu3q9AiEAh2Q12E8KEldD%2BpLdqed54%2FkiqNlZv%2BZcAQ439eBL1IQqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAdeZ0Z5ErYojg2LOCrcAzc4u9qShR5s%2FKRAnU6fTpXoMYl6PVf9XiR9FMuFfxzx5K68W%2BvpsmxbxWtL4HQ4IVSL3F3PpUZbOys85vEwN9074wKAqiRdOWyOT%2BgJIcXYU2NnSyfmzwu%2ByblaIHBFmK9tlcFft3PRxk7faiVZygI7qXF705v2MUJHgpDhLd%2BHn5z5eQ0UZVRKrPy7iXXT93rbGq9Zk7Tq0wb55EfIzU7NkWuz%2BxrSnW8w94Pt%2FgE0tY9YaX1H7Outl5XAtWZPcsNlHr%2FQG1Xm7aUpKcnSWvizk35uFI%2FYiSG8xGgC0CUrH3GkDOaefwusvS%2FE5e8o75mLDoTHBWYlQkOMTHjP8F6rA6T%2B9vPrCMxrt%2BMKh%2BmIi%2BuZPe3M9COY4HvxdeCk2t1KeEPSHvlcRozaeRpyXbPMk1wbfEYyZcOlP7MkO%2F0EPfr1o1uam43OnJvHQD%2F7DXweD5S3s8ThDEiJ9zERVz0fl3yvFlkeQ4Bt4zcD%2B8yu2veGDB4DyhAoV2kSeXkyO5ZjX%2F9nV%2Fa2OBio7k7cksy75QpvoXLEfcWmupfYgcjf7KeeO4vxtO%2BcrHWYg1B6Kw76%2B9SgpF0knth%2BIPQoJSyFR3mCjw6spHg2kwnvonipw097moin7gw7TedIMK7X8NIGOqUBlr4cMPoKjtg1wnpiqZSVqWHTqso75TS%2B6bkNlKwLAe5CzeJZTZdZJm3IdHj1xl4v2TrDxWQUnrJWueCHh1hZfQfV3qH%2Fcc%2BstlD9d1GfK%2Big5iG8MZ1z338wzqsnWfghMwLG%2BYg4QjZmuRyZiA1f%2FpFpf4Bzy8NVeltxsq4wiwTEib3bjb3p7lLxrcYkaDfYCpGNYGPDRDgOfX0axhxrsz3EfYSB&X-Amz-Signature=804108ddcc2fc1213f2e24f3b7eb25dc34b09880cf6369cd88a3f520835d05a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
