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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAUHF3G6%2F20260714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260714T121428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJGMEQCIGZf0mgyzBYMLNbhs%2FjmIJFlH1Rn3zxDzBUvgHlp%2FwUWAiB%2F9YnldrKnwouUFZuUsNEnDViI2VLNsT5%2B%2FHeOGzToGir%2FAwgREAAaDDYzNzQyMzE4MzgwNSIMMng%2B6r2XqQYmpXvKKtwDuRlSFofLLmRJqnk786rFLse%2FD3c8e5l9sOdACAjx87xPQ%2FZ3zCkq%2BZPtNc3g8y9eapNQ6JSpXelOSaNvZI9RdMM4YqaPaFkaExqssigjgIemYSgXm%2BMmY8g389uMRW6eOJsAwuM1frYHu3FfMMPqoXT%2BlzwEmVdONDwXJ6b2CKKi6AxbaYLuEXEXFtI%2FvqV4VQwK0LvRl2Mrzap7NoRpSoI%2BCdSY8GDSKsetx4YaOjhLC7u7bIeQ9EWPdee%2BuS%2BWTY5esz%2FjIDe5ifr%2BS26JrCRAdvaztKa3%2B0rlNUCdScZqyJlLWwLtJEqemdB7qftXxXfF86GAFmO1TSJLmmVn7WQizAj5DcKozbFV%2FtVVDOC%2FPwlm3hhnqbPeysm7PV4IT8YvP0uq7NhIFR5nEAD0aaYcm5J%2B%2Bt7RpsM0eMMaPwTMA8j5TaAcL4guGP3jnHJ9uNwCWo7AHupgD4xKs78B7qWxkUbpaPQ6TY4Dl1Dg1DRGLnviFGj6u4fsd80Dy2DoGwJxMBrK9S232Vv2aX7LI9hbedPvFQc72J1rQZzGQNDAJ0AfIyrvhBbCnoIWxKjKZpIbTvHCCxGr7b4cgcrz4%2BIVAIl%2BR%2Fqcf9qWHi4LYA6QxE25%2FiRDOtIU5LowxMzX0gY6pgEYpUQS2D%2Bgtqjsyc1J7EbKcK%2BTQYJREmVkwj421J0Wgh4dOA8F3PhITqSe7UBpriJmfqZ6gRU3rDmymY%2FiVKtWv%2BhXzJ1jV9yPklJ8HmbFb7t6YshEfHFO32zrcdtbKhPq4Drv9ViN6vur6t2i8cu9dUwuuXExBbwskoeAkVEl7q4pqm5PValQTXoWG0GdzmI7TUihb7ZacAQc0gq6ptUGHiSZkZsM&X-Amz-Signature=7792c508065a843c8d15462e16dd166073fc2229630c15efcd98d1ce132fb63f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
