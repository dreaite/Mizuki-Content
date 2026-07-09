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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKJDFSPZ%2F20260709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260709T120453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGCZgETUMbNCCmOfOR2gE84EJIOAgnZ41pDq08EdNbBUAiEAzJ9UNHxzKFDlWThmnDlaiQ750OW8bt1Zymq%2FCupLEKQqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK2vYUFV%2BBcRKiuq9yrcA02DfIT0qe%2Bu%2F95kP5Yb3ufOyrNY55EeqnPfyeJ4NFEpFHy2rozAK7answv7uRyLNwbmleXF%2BHzgCkebTasn1dpWdPf%2BM8AiSL8Rlf57M1531Saz2GmwPd51wAilbuP0IoEOHPvK%2Bx9MJZfLiEp9bBo6pExnlkuTkGACuG4Mc%2FbVDsKQZFyPDnBPpA1GgAHwv3QDjzL%2B%2FgdB0Bb7%2BUveqjjyeFU6ZEL%2FQyJMTJuRJjrIqLwIJY%2F%2Bp%2BzvPLG6gshzE1PLzui4d1HCqevwe9qOtd6FcoIWNxwhE6E9TEs9DS%2BrsU18QYS%2B6j9NYJrm9LCrZxS87Lr0ZFXQWjUQ91H%2BdG%2BSjhxNY5hgj7X9GqeNi%2Brdojo6FBrIhzYrfHoDXGz4BEs4JBgFaXmyNg2DkerWxbgpxPHZM071SDDfUwG4817b4Z27ENrjXgWHhJq%2BY%2BWLc4Ud3HS44AyxVUEbHNnOLkufR71jHfo1eurJR9qYI7hZBhaIuvJoERfQjFtTG52sRhZQGdn7eQVNGVbv1pqyNfgG0XTD159%2FhfgffPI2dKwb4Pz5A%2BfB7sSVuEVoZ6nA%2BkboMSTBbY6FHrSY3FuT2H%2FFW6qvj5gernUJ%2BPIpq7I7s4vifZ8jIdIYJpaPMIOIvtIGOqUBL89LOfxxBr%2BNtvZLBN21r1G%2BWeAUtpChP4ja8%2B9VLuNOpNTWhESL98c09R1d9DfS2IxzSY6JYWA4rXIoMZmG8q9VxQJAsL35a55kTFOYk2EwuaBVTitjgYrLUrTGuD2ElzECiile%2BlM%2FLOeDOZ68CzxWxcuomRIfDqtKlDJ2LUbWpfpVHhl3rqLQtPKI7IKaMbyBpQM14ApOQD0JGiF9svQnvCqZ&X-Amz-Signature=2bec0cc65929dcb020749596e57e72d57e5c7dca566f65d8f7aa36c1a4699183&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
