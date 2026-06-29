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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCRK2MN4%2F20260629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260629T140528Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGqtgjQqsVerr5lpfylo8P66c8dKFnOOiyr5wuMkkR1jAiB4ivMSlp1pn5sALPIfk9f89U3Y8fccLXuCWCCVJ9fZviqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFSJ6fZDBi7%2B%2FDVCPKtwD4mvNwVao0Lq%2B69UjHTFZkqniWBsFSMZ3m%2FwIDRXwj9lBBgFG8j4vDeeHbasvcKVW6K85GXE4hGWb9BCTW21lduG%2Fy0%2Fl6avOusm6LN3S9QI56mVi%2Fwhs5kNCU71sPo1K%2BjwVL4Z2KSnF9flOvpAE6PVZZ71NmGnpWQPQQ%2FmkNHhQzgrZoMQ7WMkXrHSBfCUMbKAFt1SvFpnLoff%2FvKTvN6MtgIlzhCsQhNcb71h9eAMVMfATjrwNhnYxQHxdQO42RemHaPHAoQu6lK%2B2abnTIfi6TG27dii02XKlcuxQzCaVHrQItlmViVRnAfE8Q4t3NOsYUVDt7Q0Tjm%2BadcwNg6YreUOWp%2FPlmBZcwf%2FtPXOzeaNwI0WRWGrWVlOg%2FoQ3kgTJcR7yKtPjgl0gwVTy%2B%2FmTC4Iy%2Fv%2FHDlVl6LrsW56RmrvY1gQ74RYsF9JfoTZ6uV2hI8NuDLL0S6qqPkhUVl6zUO56%2F2y8CF2YIk8BWx6NecYIuK%2BiSPSaPkQPjbEKy6kxt%2BlzCYN2Y9xc9s2zrBF49VVkmBI4vaCujCQlJqg2tinINoO%2FWns2IulOFFADMoXx9vtaC412V%2BkcilH4OYJqhR25%2F1Ts6B490Q5x48JiIw2Nah7iNznKorkwmduJ0gY6pgHh0OmIrcCkpkUdKnKWqBWusd7QXoMGJP3wrxpfP13DXFnMJA754m1w%2FEHnd8zZEr%2FIGbZN%2FMWReKJJzf9YOX5W2RHqEyqAzfr%2Fo%2FsUCCEsAsHkFAHsgJR9m1swcla%2Bd8id0EaPSoLM1OQDDU4LClOuaCYB3KmWSQKzta01QuJekeozEJcVeE4WNRTk%2FGmAs2ZH2uTHnntYPMBhGUY8qJLL8OfoJdJj&X-Amz-Signature=b8aacd7125075d8bba122ec20b52243e02dd4d6f948b703f1be99f4123dfe73f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
