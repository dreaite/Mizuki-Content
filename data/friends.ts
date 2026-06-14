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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653CQ7QS7%2F20260614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260614T115827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJIMEYCIQDkckviRSCr1CeGs4zzwBmLleS4NDhlmAFXiV5rcDGFrAIhAMxCyHQ0MXAV4rfVGHQFP6hR66tBewGaYX7ixyGq85ZYKv8DCEEQABoMNjM3NDIzMTgzODA1IgxWt50lbjtKPE16tXwq3AMy94VMZteK6acsNq2R7h4kRRTxtm1Y%2BWOUmIs6IKpTbJnK2iPGNEtyAmhRY8diRnER6osTeCRb9WRdFu1kkOMowbmqTGrbhrx14E0gkjEHvH280mbmkiDXge2VnrqvXFmDE2mIZ1IQWPZ2g9jCVfP3Z8odrzxpRtKT64A3L7vRpVHOW9ikypMezE5WDmfEwHQQWsWKBQn5%2BQejuvoxPUJrgCQ3TmpRHlH2k1zXZzYC9aR4ZnJgyYoiZkAZo%2FXwfDqGCbIqlCo3vxSUPV1YqB3OUvoTQa7i4T0H9N1SGCMmf%2BHISsNC19caTCBjQZ58QElXKcuEWBXXS2opgc5QNCK0A2KzDStKMsZHx5UaLKHiWoGyTFQowbTr5k8Y955Io4t3aBOPCoku9wIk2VPmrQ4DMvOYSmhavimHeNx%2BBEA9j%2BvnlPRJ5Oa5LuwmTlY4iiLnaQTz26Bq3elGXWQITscmns1pGYIfjjJcdyYD4FpRbFEWvOEhjs%2FloA%2FzAvkoXDiuoHy5RuczuNWfqNfl%2BrUbHu8ZnXsmVDnOG8UX1Bp%2Bq3ivBAxdilRZNkoI12Q8u3w%2Bx3cXbitGW6oPM4zXRD%2F6SQI7TKK8DY9xkQPrmccErkT%2F9D2ePJGRTfDqwjCIxrnRBjqkAaiRRbCeKSM3WetsxakIrgsuwwnRnzU5%2FzLl4zp%2BcMjhVviYAsOGidNRXZtRWiXdTu9Byh%2BpLDhp8Xn2tC3pdeGHev3pTOcgzzpKEAOALdEvXDVDLhlwkY1DNmCL8ZSzxeGDBlGPlQF9TTOin5lWdaiRkL4NzxBy2b%2BXh8HtgoMKrotbq%2FhmgJ6JVsJlR8ugDtsbOs3unKA25BrvynTpMvZKhfBL&X-Amz-Signature=fc7601de3d64d7810b2894a8317ace9ddbff7bda9902f9c2c1deeb2778e6a74c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
