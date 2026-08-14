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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCHX5RVS%2F20260814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260814T175350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIFweg%2B1HKv6nZhB3tZ1WFloSiw8mp6heN%2FUtPXvF1010AiEA7DW3xIfRp8iagmZo9%2Fomt%2FfxO2y%2FJjkn4EmpYVexM5wq%2FwMIARAAGgw2Mzc0MjMxODM4MDUiDADZYhpUODBwJ31jXyrcA319mVZMIWFu3%2FKhIQkkRX6NSjHrcEhUeK2Xk081Ct3Y4mbhw8htfaHvHLPmq9qwVDBJItkUr33r5C8Ou4ANrSdW06q%2BQ5MPPHqPSy2%2B7CWjt4L3YMy2ITx3lpe9uWdbbSOl1Pg9P5q4hk6G65lT3krtGk%2FVSmjt7zvku7uu1Pq8pN4LIwdlwCHPovaN%2FxQGP46TjkB3kpA12uAqORBn96jzkz846d0G1PqGjck3u%2FvJeb%2FKTV1Z8iorAXBDD97wmEmbx%2FWkgbCLN2Pt42YVKDUmRF1kyfTpMFV2RUXuriejDQPvUQzNdq2%2F%2FBU%2BqvXX6hoChFt92Y5jpkpTQXs3rY%2F%2BCAK0DpCOD9T2oEHusxNIeMUB6NfoSSzAtM0j5y4EVcEeaxYIyotxRsycFphz2uMw2YKlzTT9CADpEhoZpFHCtLQxjFsOB8An0zuB3P7RDjkyoFUlsh0MldrH7MBHbV5ZYXQzn3UffSmuZ%2BF7xTvPTmNBRje71haeeDil7R10BCmf96fKD5U2%2FikAopnaMfkaiR3OoN2g%2F7ZqB4L32YLxhMebVxWUVobVI2t%2FW7wtsan4dEcBH0TZBzRtf3mamqWa2E7vlVK%2BSeXv%2FSA9Jjx4neyxbyl7FWlAjKV0MIn4%2FNMGOqUB%2FEMuddo6HlPbQYf23%2FNSUvltE%2FX%2BLfZeymeBzi0KM%2BphU2bhMU9%2F7uQV0lp3clbNtc%2BDtnRoYJFreaXjakCGyJCWHrJ9vaSiHw7X1ZlmSLg%2Fg6aauXLfDo7QXRyQEx4fqPDiyM5Ue%2FhvC9hBrH%2FoRGe0%2BXzw8uJgtqgymYlsspqNU70bzMlIZ%2Bo%2FBi7yyQLjjWAQBDt5OVBHugcn6XBto7LhjhBK&X-Amz-Signature=200d1a3f8a01640988d43e507dcb69d70d6485f1611656df61d1536426867986&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
