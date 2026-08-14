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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIBNMSYH%2F20260814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260814T020354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQDZuMhkxAuo%2FPBtfjkxf1vuDI6JRV%2Fyk7XD5WUlaT0DawIhAIc9fxuJv%2F0vwEQofty8yaqKxYHXcJJsjtv3nHIp7QFLKogECPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyEWdhsSp8mzFXwfugq3APOGg0QWfOG4Texss1fHLCaBa%2FlqG1paL3EU7pL7zf%2B3B2Yb8QFjmwqkAN0cYbQCJSOSMSZQhAeTLH%2BkhDbr7xfWsRoNw9QNkWxAT8YXqi%2FobPETnrjpVBhN0kOvltoECOFd1MlwnRFE7X0UH63Xl3vR9mq6JK55bBggQmrxzW0yZMgDG22R14qVavtdeJz9haAcKinIVZYTO9mwXydMKab36gbGxk4Iwp8t4GItYKJc%2Feh6zMMNtfsBHgjqCqSMD1GPIbpeLQQ5oW6ZZg9RjpVKfdRs%2FMC4tL2gZyO7FYBu%2BT6Qc25XK8RINdMOy4rccVZdA%2BBoxaUooQMsmzbecBwKz8bxNv1V0gq%2BJLXujQWrDZV89vbMg%2Bg7Vq1eehMME8Y9Me0KKVGK8nUV2wtkJCBhLVdIWYkvqbdYaS7P%2FgvO59j97X1pqRWyTDT1l6twWTHIkkFspIvdJvrnufSwnBVqv0Pr6GVsHFX4lpWI%2FT%2B0TBoPSo3mYEvPIIA%2Faclz8eBJUf9Uahv3aX1AF16upkvqJhzkr7kmWcRSDMaoRAVzR9VwMrzP0mZ%2Bxv2be%2FiWtZIAToxEf7dCHMYIB5zAIdjbliYAJwOEhtsKXdl%2FcgkONEH3fj6yOF5Bic4yTCbsvnTBjqkAcquqPsxKT914aUd3fhz1pTU4f%2F2qOp%2F8VZFTEBVXqQVWOJTrFkpnuNRgH8oJCKds4TlGlFyUYwItrlyoRItTaIxqqhaT4ncLCl8bAsJnY9NZ6tW0BA1nR9xu29obZAHhKB6mt6rNFefQb0s8lp5OrQHs04aai2sazrAALXEDoK8anVQTm3tpErOH5qMcpoJVUexBfZFyOe%2Fu8ooDAwQ2Dbfd1PW&X-Amz-Signature=b17da64d0a3ad7916d8c8df2e87026f47e3bf170452610698440ec42c7afe34e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
