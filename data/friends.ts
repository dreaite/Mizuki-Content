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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TN5CXDLS%2F20260728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260728T164109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE0UEhKMjFMQZwiLEILUAzICeQB8T2lACqAvv8KVd%2FuhAiEAt5HQ2WQq4nV%2F96IC3Itfa8cj%2F83UhCYe6yYyYJbbm%2BUq%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDDa%2BBC4ptb1pkyaHwSrcA0QbWvY6PQzG5K2%2BYtjcZpLgY1ftZ3Ggkhn61NlU8tMvP28gmC7PDprFrEF%2BOZ5AzUCSYazb1GV7GDp21dp5j3mqotoxlixbyjRa4%2FM%2BPYDYTV%2BDfi0n1gfKaSeOsLHmcmAuQJT2FF5RiURYnD7MLXKBqa60uP3xM2nqqZ8E%2BQ5M2MAwCsmv2GuEnNYNRzU88L%2Fc8r%2F6qz1N8Z4PzZL2T89%2FvXOriPldqpGyQADw9qeYoOn9OWomp89XX5kyoqOOOfOhYTHIDEf127K1lxV0vqYx%2FptHXnzPVSTR%2FNJThhYy9HxhH4Up5F8AdtfHAbPPe7b%2B4KiDS70BsT7AmEuOSzDvfF%2BDo%2FCoAxX6XCmM3ZihMAYrRizDUIyDk6lhu5opWIQB9COMBJUFyqlBZPxuubpTd1COl0K3GAYUJfzQoOOmN42kpz92M2IaotRumkjBZX98i56fyXkdDAoMO%2F7wvetIpNsCqU5Bnl%2BpcB7X4ZhL8WalREALgf%2FFHZVBmPsuYyVvw3N3CIofGHuGIZn2nq0n2odtin6aifELRIiloQj77KIWL3SB%2FBqDw%2F2kfPQzjUoCAs3bC52%2BfvYIaTA9BJT5UuWCvCBRAVoVV%2BatudV8Zo%2FHgUFjE6F9EpmZMKe0o9MGOqUB7QdZqOohHDi4uZvrKZjbkOvYNUSaQM2y6D%2F3UoPGH1ijLLjiiylclloR1Ert5J4P4GsLeW%2BGeEhhNAyNRBtnUFWOwjebJP9DRfQRxSLYZTmGuzxS20iGT1QLmx4gfyuDrhuyjIEzr8d1clgtqlGY9a2IfPVc6DjqqHWRQCOYTh0RKsISzwd4KiY2M8GPrkGwrP434AZOBo1Msdx913EDRIB3lirk&X-Amz-Signature=27040a8d9d78a0dc55fa3e214c89edf8202bbd5535f2c6ca4256f62bea363a0a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
