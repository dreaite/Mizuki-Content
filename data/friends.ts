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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6PD6GZL%2F20260809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260809T125307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDJVJfJsWVFCp9l3Y2plgENG3cya8PdGNpIqab%2B9XFOBAIgT%2FoAmMgPTnrZjWUT9cRDOIsGEpXUfFhbCE8hTBmLVdEqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNBho%2BCiJwiwskfzlCrcA%2FKEnweNURwsiSYf6IFS45akj9UclGgV2DNK%2Bxsqd1qOYZ1Bu9VcIsLMrYq7knGQnltZtykh0CbO2dRbJPSd3ngspADpcs8pUtS%2FQK8TxMLl0cvfdAf9hQjgCOJXBVl9%2Fp51sD%2FmNI7ltBPbJvi7sjd7%2Fg4p3L2LRnfpx9ns9WjE1FIc75BMREO0%2FTevLNhYISkIU2EemJo%2BrMxdYqX9zWw3xyL9w7WGH62dkeLiSwyzFRxPBWIciojIZ3YINT6QLe6ftyMGZKS4208Jl9EP8vBy6lyBV%2FH5je4QTyIr9TVPI0k9GbQ0UFgUGyYCeW3kgOV%2BMnhFSmE2841%2FeRgifXyTwuxFPBi%2BecudUWGPxvPEq1yxfPuPDNNS5sr%2BWAbWFa3h0Ja47%2BzVoZCICQFfsdHSHvP65Fitys%2BW8s17KDUpFGI6XDF4j1kTl25G4OjUyVXlJvBYbwMpuRadVB04cGZ6kjVFoUw4H0NO4eHsv2EJRJ3JEjsBdiDcHU5z7P%2FkL%2FiLecsH0wKFpAbvF%2FyXGStiNqMEWpl2DtXKYHthedtM1s8N2uu%2Bi0TOoBNgB8WnTJwrqrrtGfYp5hk2gmvAR3T7wtXkkZFkQHU5qSJXvDjeS1vzDddEZfQeypMwMNqk4dMGOqUBizoJjiNhjCyE9RPSuXrS%2BkyPyMVOZW2Pdfnlqde4GTfJqRJlvFTS1C6sT%2BqS1kziZQgWJl3aqKGOa1k%2BmLL3LbLqp3BVO%2BwXDfOp9XY%2ButtuXJV5fe3%2FiwQ%2Bz9DwzununsY%2BQux0MhTcVa3fDW9teZcR%2BIDsc2igpaUgXcA22wP8Uw9ruwL5UORfnuDx%2FioOV3aEA1PMfHgLg%2FsJFAJbspEDBnjq&X-Amz-Signature=c2cb2d697d18e182b9938c3299225c1c166fc2e7a7919950cc5f5965451b396b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
