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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTPLAPVS%2F20260710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260710T182533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2F1Ug3AjjkdWnmnMHsQ%2FIusss6uECSPlep6XI196oiFwIhAJ7LlJy5SzBXmNjgtO0XklJqR7gm%2F9win76U62uV%2FdEAKogECLv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxRIGSLY%2FOQQoX1XPAq3AO2bBC52Al2YBdqUxr4KivbF2DwZZOMqCuPiM3yFHglc2ZaoUUmAHjsOgmwWJJM0U32akhF7VGsiOKKU5SyXrfxNKgtE2uoeTmyVB86LwOSkTKLdC3UPYgGfQhcTPpTW7qjp75hSNKICEEoboiKkhkBggmvmKUX%2B1i7xO0nQE5G7pSaXqRSjMnu%2F7Zhf2YDzH70D9kedYM10QoeMBT0o%2BeD%2F7LHBp16RaDIR9FM1njThCgxe8PUVmZcf8V9SYJaV%2FujCIUCSc705tpXvulKMSzNADF23JyXBziTsQfBby1EDFF7F0JcfQN%2Fe8qD0zMSppidZqlha03mQlpWi03r9KoFL2V6XrvdH5w79FRzO20%2BtnFYsuIfsRZnXTu0G9q85ECc3WDvG1w%2BUHVYx6AYXKF%2Fn5oReP2oxDhW6dBLn1pelCszTf6PaV82H%2Fi8yStKO3b87Cl02nJRZqzwGV0R4uEkQlICTuSg%2Bhbwxxso96I8jJI3IkcZ040EQBX5lbR00uVTJm3cY5Fhs%2Fr%2B6r%2F9GEvgpJStRqxFVD5QmOqvbdIDcBPpOtZ4QwfMr84kTa5SeolwEuzqT1yNGlE34QGntDEoiMHfpuo5WfdhCYAOFZ56ZJz13A0BXb%2BF1KpmZDDi8MTSBjqkAVZx4dLYkdL%2FjLSLrD%2BoomL7tlQqP2JI3weo7Z1PQIKz3ajqf4%2ByQLOUnM7Y2RhfcPuo9ghiJ99GLZE7wsIg6r2%2FUMv3XWuN6Qb4J9dQ0JAxtnQjrbwoQQKDtfFuBxkLebP1RYBOF%2FzZw2OlxHVXHIkPcNaack7vdO4q0Urg7M6LLOSM0nSmrYW5B9T1yY0zwqxrITkelQZfAhmAuP3dgUE9wsCe&X-Amz-Signature=4b2264c8d05068b8475aa06fa397f4727a9b6dff98051e590448c07cf5ff63f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
