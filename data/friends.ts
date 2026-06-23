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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VG22542P%2F20260623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260623T175817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQCnyU%2FGkHu1FzjqD%2FLu4N19BAbLUw8Chn%2Fw2vzmN8W8XwIhALEfl2CzhlbnCEDHyIPiqBxStf5BkTmaui8Ysk31OCCnKv8DCCIQABoMNjM3NDIzMTgzODA1IgzSopSSsFkwA1rzVZAq3AMBdEPyqoe7LfVROZu38%2FG4dif0yc7oTib2KbBO9q3Q%2FHFq2UzbRNU3HxQ35z9zaWKXREvQiaYHuamuxDtE5nJ9hLWznMNRKiWOJLJ%2F7KiPQRiQrZWataL5iT8Iv%2BlEWaycOHwpOKOCPJVwgCNagaboCo5ok0A7PR5a8JzzHhjJjzoHqOtYZAHubp0tWq4z4qEIgvqEief%2Bk5IOnvcqbprgeJj9DbOiixLm4JXEblAiN4PcZ7DJAXRhbdcPytM10VgiQMi6A%2F%2FOwKUnjqszXCZ4luXLGxDWHbXKjP%2FPR9S%2B0B7X6FE8%2BE2UVxCvHHD76aflJo1PWxgoCqukvNkq9xC%2B3ckxM1k%2BdW7shxIkt3DEcfU43tH1Z%2B%2Fm%2F%2FJQQQuc%2Bp8gR51akNfAFk2sjWSgr8U27WpF7kqIiLlvI9GQK9%2FPAuXS%2F%2F99hEKBncB1DZIvsxqQOPDh3JkvnTYLnXQgmmT%2BBIfxFdr5HNI7goPQFi6tYAT%2F1l2sMKgZrszu6mIAsxLjZx%2BNjmMJkI884%2FddIH%2Fc3Ys2XAw%2F9JqETttBKG5ag2LY7XUw5VduNSqm8NgvjUNmSnIsvEdR8JzQuDbpcFyYq6gszntWTNNQxrGLcooCXfwslUgqmYT51oXkQDD%2B%2FurRBjqkAUVOC5ipwYnhp22Y3ZEgjqY7RtPe4BJvIxT6TjvOLpK%2BpDt%2BnMcefcRAiBycVDQ%2B2rlneRf8VQ%2BgeubcfeNnuRNulwFPTM%2FCOgM7U9NV9%2Fs3OG%2FB9u0F4ZdHrfhbUVzJ%2BU2cvR2h7Oik0Kw%2F2sfXN0VT6JBBKa%2BGxcC1mM%2FVFAR0I6F5UegeczXSAsMMmIHT6YAq7OuCbxKiVoB5gB6JZntyrChw&X-Amz-Signature=19d4b635945efce6e0f7060d47feb55e5706607cfbb6ced620e5a75a8b333934&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
