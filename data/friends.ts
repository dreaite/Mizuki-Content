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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEM3VFIJ%2F20260808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260808T075053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHlE3JEgWN45FvgTjgO%2FjLvaMfp5CowZsdnkxS6IRSMGAiA5CT%2FIhkQpuXK%2BqA2v43ACyO6dITRZCZLUZhjW5gOrRSr%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIM08RCgLuB4uVlQ4aNKtwDLwa%2Bm0mNXbibvcRxrKnG2Vs0cwSMVU7JAtaSiTbMXOQFgDqt0eszO3GmNJlyljVUKmJWKnin873369Y00KZOGWX%2FZpzPz%2BRJkfpR9l0bvLWyPZOmg%2FvkeW0gyRlfSWfe1683FBQy81u%2B0IF5z1T0T08g2DlsG1ckV1Yl7HCVjWDJHZGXZ5ohOqjzBVPNVvylvXvd7QwcZxIwz%2BQmKsPYCeg7T3nLd%2FjehRVLd47SSgWlhFyslcIN%2BucmWP7uJFUnEkneNtSS%2BnCm7yho%2B6j%2B%2FQRkhfrdbSd0E0MBQ8rIh%2BHsvsj5SCjb2bFsvmRz%2BKfVLhJ4XD4NVgugtD1Suhiul1pg75c86GsFTKJWkPATNvVqwCunKKAL9o1HOOHnwHKETJqtT4QNyvcDuRWFV%2F%2BOPb%2FDoaBwjaKkGJt3CWwFnoUWTsyb2XTwmeXJ%2FbaccbMXjKaWYn5%2Bbx25Na4ZDKINwOVF3Tv%2FAIDnbHlWzQG8QbeuDrbeDdb%2BduPHnO4Y2Xou876285S%2FfdbFSvuUp%2BVnBZ04kHUruho8f6HmBW6VI2h90lq0NqFBDINDZcA4qOqdOat0fKjLfSyANmYNF%2BqNapNfjGDBlk4IO6y2yDKurOi%2B4z81EJb0XwG1W3QwpKTb0wY6pgFJsOAzAHq3gyk5aCtg8xNc5%2FGDTp0iSwvc8N69jD8EwJyP%2FYevwsKrdB6uAbcn2rAMXyGlp8C3yMejTSICwq%2F%2FLow4q1umOT6gqwSTOLkeNICtG5lDjUAu8dhCKStBmtAynkRjsee1tztQeV93SQK8bXr4inpDrAdpKQfoSNwPq%2BnKRX6utIg9ekFTm7gPsCP0pb%2B099MlgXwsqClTvsU85iGnpxEE&X-Amz-Signature=13335abee4335d98df11d5b758ca2711b61de4c5309cf35796be8bd8d378e3f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
