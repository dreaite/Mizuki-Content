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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z63EGI2W%2F20260814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260814T081634Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJIMEYCIQCTOrK01c5IrYGyG1JXWs7SqJ1yLAEnlBl8rUA6%2Bj4dJQIhAJq6g2KTFjprmRzJJRXq1qe8vzDrNeLCGtoQ%2B3LZTiiAKogECPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxv66saPOV0pr2ICCwq3AMDGRcVlc8hDdvtVtLGBJDXWPO5ECc5NG%2FB0%2FNenGHkjRwJN6n3a2ANZWz73pBBUJBDLvSh18ZaT83JFsLJC1XOpZ8WPYAr1VQxOIoTHGNA5h80c%2FI8v918BAp18nZz6Jw0d48MpACCxGFI%2BV1oksX854fCxe8HRQKKYG730mEL9Xe1zJVvs6ElBtkKVcH3Nuq4VZH5v%2FW9eUl9HrrNwITYjwqVBayuzAAR0tXgHhaeAdWKhxJnrJ%2B9aGAR3KHK0OZDjL0aFXCcb8s5Wcxp%2FgjcROGARSa%2FmMk%2F5EBrbYzwIb07yfiWlhHn2xTZd1eLaB4dkIMpH47YHoWp02Koa17eFmHgtQfYcK2M9aXT4RURJmPtbCcn6On3%2FgCGFWLHavoI9eWa3UYdRxMsY7PiKiz9xkMNuQzLpKq20Faq6dbs7qoJqvdUEr93fiCPvqm41jRb8hVyRpeXobJ5%2BqEzfgrLhZjbw8B3kn4REJbhshe4QJuyclru88nvd5CJqRYon%2BqDsOieNyPzbqNVNO0YLqJN0gOpBRn4rsY8AscTgPIK5Mz50LU7tr%2FU4vMhbfiqCadUuMkI0ts5p7vk7wAnAxY16agk4kAqDAW4%2BJ43QtZZKFCJuG0AJsioyGDu%2FDCom%2FvTBjqkAQXvQxAXte8AdygTW8lkhiXk66dyF4zlxgvxTzJWm9UAtK%2BtOYcLC1ApuMTIQMJrPXFYpKMYm5dzdog5GEVVXW7eobZpAqaEN8x7CmQ2%2BYYEs4cpTMZknsi0LV3WLDh6LLyFcJgyMUF7M3jx6FSEik0glZppCgXE9xbi3n3J6QetJg5hM2KL2QT75%2B2WUQgBdy9hYSMXkHu6wT7d3XRBtt0nT4KL&X-Amz-Signature=a2915f43c3f0ed85a393482f3d1f3931a4489573346687e9f8c0cd2bd465bbc2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
