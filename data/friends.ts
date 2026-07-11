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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFKHMWDV%2F20260711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260711T145539Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIBPm7Y98iFjsifon8XtGRJOBqcE5ySSREF1hk8bMmYbOAiBlmjrZGqIuhi6Rkzf31d3ylxzcf7A06Lxkfc8K0zs5YCqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHeuxuGijJnIYJa2QKtwDihb%2B3YC9TC7G94rIF6G6DSEMKqB2ljWFzGe9ZwQym3IqmDuLB%2FewrC2gCDCL%2BHi5iyuN5OLFVms3EcIc7dCF%2Fq2I55hONHDU59oyZrsk%2FRRA0uGSbJEXOzKdjr9T0Ji%2Fr4lvCEqJAQCxk5SP%2Ffh38%2FQYy8AHsg2ezybZP8OBriZTJXd7%2FMiUSST3TqZazraD%2B4EJR4rePTWLqpWeE4PviII8cuoRmYtpWmLCOmps2tFG8%2BkOagPfIep%2Buukz4rSOESvZ8awHUrVadeYOz%2FQZ33EEAMsZsOB6ZhdjHHZyXSNx7vbHW35lnoEFm1Ym3rWrwMOK%2F2h%2BXhDjtpQCCqqmFRV%2BiJJXTRjTjVy3X10GJJo2ip%2B65bvfT5FgnaFHPvABPvaDRe1%2BDtPSF0i%2ByAHNWfPK0eNc%2F0UlsvjL6qI98Uepfr5xfAm%2Bn2bTAfN57gctrLfcA2mPB63%2F0nF6HdmuLjjhiuSGhR0mJQRgQyXKhuu8Hj8WuoWjOmsoVYdIsYwFctcG%2B0hcLsFzXNOL0355AXu%2FyXH3vbO%2BEikSse%2BTb2Vcfnt5Kk236euKwgwwWU2rDJErvLb%2FWNlzxEbsWjgMuiB0XJhPoWdiZwN8HEOVFSATQMxmVOPU%2BbN1ItcwqKLI0gY6pgEwr3%2BUMZaJCHgHQzTLYUhGbi68gL%2B%2FrXwqe9Qlkg0o%2Fi4j3qySIWymEuJnNiNuZHa%2Bc9EU34T%2F3KsvgtXy7THSub5lUZFD%2FBSsGXT0YJME6EDFIFYWyyRPjQRbyWlkYyH0Thuibtv4S7sR1SuhVzrXiw63wywPUKWBJwx9q63lzJGnY0lThPOd9KUFxzImW0uKgwyAvOlvJhooFbsolshoETuJjoNZ&X-Amz-Signature=45fa4ed029ad2be83613023769f3c87bbb07dea2f989ddc6d731c0e68a4961fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
