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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZGFI7WX%2F20260614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260614T000857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQChK6PuJNyhzAvKGGjeNs4gIJ%2BuqDXgVjdacQsGLt5M8AIhANC9w1KhP2kGXZg%2BnaahWOnSWLjPtmQ%2FpaG5njZYGOrfKv8DCDkQABoMNjM3NDIzMTgzODA1IgzZpCzAuqu0CAJXkX0q3AMm3SPv0G8bFo5WqDYQ6WHDM16GBejIgyi9LbUL3zBhJjbkY3Bck5FtzJ5qdndUb3ssaoSgiU6aA5AsneVonKBqB%2FN2oXVFSwNBBasGG09GtTOI619FXXd82Zpj7IrYaAE9F2OvYEoTg5U98FstIgZP5FABuE1ygtjN6GjbxlSL7dE27x%2Bj07Egym3zYJk03IrOhWHkJwsxiFqtCx1%2FngQWW24pKWJnqTg1obtyolo6W0OgKCc2c3JBHfOwl%2FWMI5LKaWpNQFBQlHTK%2FM%2BaAcaDuFSm45CrBwG4bBPf9MH0m9yw4nr34V5112oxfp9Df%2BMG3kJx6N6RJlkEJ%2F%2BNcTAJDv1UjOOJuKniR2qcY1FUreGslMTA7C0S1Q8W3D8Y4AInT86E9sO8ivvO6STIvRXK9EVErCTVDRsHX6KP22NyuEJDEBuNO6hbiNxxjPlbZssk0K6FDdZXBG4RgfqElMTAx%2FZ6pVWKvw6lfQ1fP%2BHi0ThRCzqihroIwNuVnmbhTVMaDGGhnN5qS1UaswfXZdwWwbk%2BIHJRrInSRPkdTkYxDaowcfQE0IcW9ea2p8hVVkVL4FEW7KCZmSU1rV21ULuXvVZ5dw%2FnTBgR9ABjL6Xi5feOONbQ91QZsLYqqTDG27fRBjqkAVtVgfOGYIm%2BwlRDke3ut%2BGtUfo0Rx5xk%2Fet8zAaOJUFiqcoOWpylSn9BxturWwHARJBW1h7TgMsoJ1TNDz3iGmXvrMwF3P%2F8J7At9hrIaztzNC6ROB82%2BrdlPzufcEqyozI86tq35Lb%2FFtS5TjFv5z%2FfMSDgQOTNnE3cNGZwSbkrGtmvNBL4Z5U%2Fd%2Fuuc95wLWebT40Pn8TpYYqPMHXP%2FfujsUn&X-Amz-Signature=247260277e290609d1a5b25116f62356e3f286ac92bc6410d7d6d859f3c3764a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
