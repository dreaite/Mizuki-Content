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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2KHSZKX%2F20260729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260729T171626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3xljHn5%2FZueKxtyj1kxuoIY02AQwQTzBeArENfUP%2BtAIgX61GeeWJLkJglKVxMV7ULB9Qs3dFLFCfxB0Hyj8FARYqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE2umIMn7OnZfYUMrCrcA9z6zpyU7GzoBQXAs1mUEyg99S6CpwwbdLbBkZZu2rGbPLNJCgrBH5btovm4vAA7jEkVDEnfjn8HWnIz5u0FKLQsAkBwkCZ%2FeMTC0Z6l5vINe4GANQgMkOzgZflb3WM79m92uXAWLbzbi%2FiaXBXqa8Srw7z20J8nErgxPh3puVbY1KOJttr3RTk5PpAOJzYnnxlkH6EfTfqWKj5bCsNFDniAcpAmXycthi4MYwz2O0Jzu32AKkyq%2B%2Fw2YT4fVk2fknUifXw1f7%2BIOQ8N6FcgRgXYvXYmkoIRh9dqSdpewdj2D3JtmbTLcYYIR0CzAyEfr03zPMiXrOZP%2BWH%2F8aqJNiSDbzFGa0Z1lfFjqcrBLWI0sNQN9qwht%2FmnQ%2FVQnl%2BsSQXol1Sv3eEZ1JmlrgfPEsK%2F109DNRNPieuheA%2Bo98is2kkagDj5SOAgwnxghuUNzfwvSX%2FyssHUnBpW0LybEVFwilcqV86GCrvL%2FEPbNKSkqEX6Xa0WL51z5hh3nEf1SVH9idiH96FpK2URJ52mXoyYTQm6zZC%2Fme0YtwUzUgwRaM41IvodQ1eYHO4gHV%2FVtdUG1X9v%2BB1Tzbl5%2FZajxq4y2Cjq%2FH3N7MPOgKxbmqR0Em%2BHsWxfzFnivom5MPHoqNMGOqUBrq4%2B07NE09oW58FdhYwanWdCzX50CSxZcqvYxdmduuMwvcBFgZLIyxXJbaEF0Iiwb3EseyehvNM%2FnjiTk2IFUVc4Ls3RtkHixsPpT%2BoE8uizPGkPW5UwdE00XEPqEzuzR%2FyhGJ0LZJf%2B4fud3YrwlpaCGqZCgPE9m5wSwUiymsj5nPBi2EZFGBA7YCi1stel%2Fls2hmetFbMMq6w3Y6I7O6BAEuja&X-Amz-Signature=cb8ce97083e5cead00abacaded07dc33f45349fc2d75b2d6549d4b34f01bd568&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
