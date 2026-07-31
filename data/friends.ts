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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMDYLQM5%2F20260731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260731T152323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAKt2G7VbIjpKx4SQBeM0vxWGpR%2FT2fp8Zysb5SBm3%2BFAiADkTuy7xQ51qLCwLUDywuCQArAgkFNqd2geL9yUHBwaiqIBAiw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmnKSop4ADSXSApoLKtwDrAc%2FBAx5HzWoTBbi0UDxagKhQx5d%2BEBOgzUyH5a2VqJMZJkF%2BPftRWmzu7bQCx%2F%2B6msFpG1WEIxepB7P0FYgrpBPDg8uvpT681iJ%2FldD5hLHGzHxE9%2BEYsOkN126xXxJT1A1wyU29kuGV2Ft1gri0T1LtRdfkXgSAhpSOgfSYc9ZXW%2BJiMHshFfOVJo%2Fo0ecZ%2BeS1m2ZrSiwcu2j%2BypsHMRhUVx%2BfNSY6v7az8r2VBShm6J0jfGzifMNCvBzI4gEs86kMzMHatsOTsslj9qXAgk70P0TKc73FAl2dmKLl9rIC008MdNFpcBXACKpjRapmvT2SGvNBRpioEW6KTYhoXXryhGiJg%2FRHRX5vNzHDhT6eHujyLcpXRwP2JoekllP%2BhDl4tnML7kTZQdz3vEn5Mc%2B3EjOn8LHe82xntXoNhePKh7XlvaE%2FH1YOD%2B79YTdxESy6mXBgmIJVDqOPMIGLcp42zzli30HaCQZfs78bzWfj5jud3%2B0RygKVEwB2vhqF%2BMirJWTeOn2M1XDWAnEMYOEeeFk2s5YZSWqSBUBNvO70pqSEyPtIGowUe87S3%2FnYLK6TtjoaNQBEqrafziUyNMx59v5bpaVmml%2BrL3yV4WVJ3ugwsd3T3AeLcAwh%2B%2By0wY6pgEqd82a79ojy8N1%2B77DHq7uiXaTB2De9kQghngbPYpsIYAM7dfQKsipNOQIFeTWf88fcdaC8pmmmQyTDP1EzzD3iaOBAfi2rLbwL5WNRFIgCqN%2FpdfQgujSp7kaI%2BUnuc47iGHu4kmAf91pRkgYqI%2FLhm2Rf%2BoI8JT5%2FPUxJNQpVdjyapVLDgr7%2BFv2S1QBKNMWwtCGHiiRj%2FC14n5NSliqIc%2BRrR9O&X-Amz-Signature=c145742ea14fe1938fda8d8597bed2dfe7894a30a4303b479fa0fd285eded225&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
