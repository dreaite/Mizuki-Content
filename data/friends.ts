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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRW6ZBCX%2F20260625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260625T034857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCICs1G2RsCOVsJijFhqw%2BhNd4eJj7mmy0VxAuDxn3BsAnAiEA4yO47dewssG3GVi4FOjYqVD7k9W20NQkn4ApK%2B6%2Browq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDMjG3QDwuBbaDHw1NSrcAyulH3GB9%2F0phQY7BjhIAYAR5nTGzZnCsDCqgWlWtTcWOH7rUrou1NY%2BtJlUAeDN1TfmOHIfkT4%2FL%2BX0t14js6VgaKK5689OcBF%2FVJ5Uiw%2FVILBCqfC2jY7ZgtPjpUq%2FPSteXVca%2Ffhzw4KcvMNYZGeII9o6zym3uQ2Kn%2BODQmgGfBZl9Xzqv71PyXT9mN4weQrFkfYXXmwWzcY10ygkcSJjXBRM4XOorjpo%2B2XADCm%2BnB3JCOqOYDeQGa73nyxDnd8nMAWftS%2BE9hGXc1IUEO09XCTGIkeT9ZXyMhPzGZNimxT4%2F1XP%2FKHyO15BZRbdSmukYmEhnWDWwzBneVGOkFJ4eYG2J%2Bk9fTt6KUH8q0JITyMrLaDhV3DPReK4%2Fl1OEOTmEjJ4z3F%2Fqjy2zL4fTB6HbLK%2B07QyHQlPQdJJA8tkhl7TC9%2FgmseTD8rJx8noahVlyC4%2BzoquSBYB2QeqXhQ%2Fi1Ils%2B1NuUsBHZOW8jVcsYcyGiPw3OypKvvNO7l6N59HwuldvyWlB1WI370K3h24FWRfGtouoHZHBYjaLFuttW8Ile1%2BSMrN0vsUXevR0AQq8s4M8OaA4oDOjx4i4dtGJ%2BBpVWL5NcIZ5JxE3%2BwABpbi25nAWQCM5%2BmpMIer8tEGOqUB%2BWOPOHEsoAO5q6yfPGqR2og5MMPXtersMpxU4ENpWKM%2FV7rkGLPvG%2FXlx7AW3GFQ9hu9ZaGCod9HZ8osii4S9ugR9pY%2B%2F%2FNO3IAy7OR0b2bVRn6G0zIljS4sfWV6xSMArVZNEarrJgo48pG99Ja%2F9zWHHPdDCViI6VzTEojZTxrWfd4WbHHLBjaQk9rflrc2%2BvjTM3GPIA%2F3F3mJJ6J25Aw%2BLxKd&X-Amz-Signature=9cbdc049033779db35e30c081b3d517caef6fb07a85d18c085e834c8ea184cdf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
