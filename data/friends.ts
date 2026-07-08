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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLAQJK4O%2F20260708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260708T083134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC5CpNj1YWtygh3Vx2xZLW%2BnPSKRKPQIJoVPJpC6sgZqgIhAMtZkQ1zYp9QO7l35tVcayMaNzSHMt94MsqATMAVz4wSKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2FDCPS%2BTxeh5111mYq3ANDZF%2FOx8WDYzu0OYQbEJkqj0KYnXwB4VIF50%2BS8G7jPXpC4F57YXYigESmYRmEF5F2h1qJypar2n8gCMWkVuZDBwvkQ8nW3WedVHXpmS5WlXEG0xq9vGsUBxi0PVjCfP6TkNZGxeHoO5PorMlC8CiE8fA7jAW5ldlznV0jZd%2BSrWjSzpQaKwRv9hHCSykrlgknBPZTKxbSa9JDzp%2BP31Cs5%2B6wXFklpCCVwE7OUE8eyrfhQiT9I16cqqs4LvIFKYdRhuRjRAlJXG7SbXFWTXdzTSXpAgCa7yka0SCHFtkuaQgCJUvTC%2FdjavlLdARgyrrixij3wAOhVx%2BMyBZi1Qb6OLHKnIIRbt6MPxZoAGbpLRbYXoCofz%2FmlkS8lIs8JWFR017mTAn3vL0gfiI%2FAruSOi%2BhEqwNqIwhqfHpYIWUyr7cmUpLjnfUPExyPefQBf77sqjJ2tVTo%2BjTfVL0dEbVsDsrkwOwYZX1zh%2BGewmdAAutPuRbn81llH62yU7dwwIgChDThC3aSOP7wfaqtbfEIJ8wJsr2COy%2F%2B9x5Mw5kpZ9hg5b%2FLiLQD4U5JUm5O8rizgcbL4wkqPRL9JiybuWAN5JQedyABjrc3%2FpL5%2BXB5sljxENySu8u4BVU7DDvjbjSBjqkAbRTET5MaLLGvVCy0leh9eMKMk2yk9opfssC1GcfD%2FLIT8%2BKJAATkbLfr6%2FeBUzc%2BF0%2FffurrcprtDeVfXo0auQSeQLDo2WS3CJDnN7AjV2ycQ568e9hpn1ZCrCGuhDZbJ1QAxnmGZxVnWaL3ckT%2FGg9RHqEZ2Q6mDRrhlpSooIL4lsWVv%2FtzVC3LxJ6ITCMUEREcgjGfuZSqRPYmg3Kh6bC8Vzp&X-Amz-Signature=1db99251a2aaa4ae7e440f4dfb1f33069fb241022080714ee4563e9c9cccedd7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
