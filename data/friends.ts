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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNIZ537Z%2F20260811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260811T204639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHMFUqDDk0xQJ2nK8lAR16M1C0jxtIwXg1uqWXvhYxKiAiEAtwYH%2FZ7FsLyQU4xjFhOGnVcADIYwbz9rhkLd0YgV89UqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPd7v1k%2F6PnH6%2Bj%2B8SrcA6WpwtK8AROm0wlhTEzPap935dujkJTYkmooExJi%2BbrlmdGoNIW%2FlVm9dKUVU%2B7suAKFNzzHNqqpGhqR2usSQz%2FgH14lIQbT%2F96DXS45EWwzFCQhq%2FvCSDUcRhsbwKE46wEs2aV05CiNwWgBm86%2BoOQg5itOku6ZVPgmbWahTaWIs4xeIMesA7HuHiEd6rBM6qABMy1RNAG3yWXysCYjQ11L6ZQ9ccTIkZK8FP6VhJWziRGCKwhKl8F%2F9Q9TbFHTAGTl%2BRwXUs6z7A25zKBj%2BQV%2FjG5qa6M6A8fz7%2Fr4%2F8m0gfBE2JFC0v1xZxpjWMl5Ejm7rm%2BkrhckD8D5UUQmOHRV1q%2B1QKPRSqO3WQ1Y70PQAC7q7reoTNzj7SbTJ7h5UxnXmscQ6BS0t2xxX9Oa5h0MYqGu7MdVfWIxYdKAK0e2waV5cZNjzXSPIDLyKGcIFNgIkttr4a9oACcvj4NrO%2FKexDgK8BS624QLGUmdq0ibMpVJwX9YihmLZp5rjHVYT5QmTR6xVh6Zh%2FVom5PWhB2ntPV648AdRKQiwRsQfYpBr9cPnbKdEeNtWLM4Ux1AKOOIrOdSLBMlwnFJd713HNggyOF0edtZZ56CiIRB1I%2BanOesRuMTlhfxirMeMIXw7dMGOqUBToU2SMkZbtJnx%2FiJsSI1IztMDEVBKGR2OnxK2Mxw4zEPGh81By41qlS7jD8og0nGceh3UiLpIxhccWb71TamYXB6M6c5HZtDmMXpB6J%2B%2FvL5SGtZEQpoyDZ5Xkn8U479X2YvB94RTM43hReQrfC4fyfAoxRJ7W%2FMC20tcCW544kBFHOTyi1IqH6JAH%2BwF3r9RHH7ms0eklvMWIY5rDrsRbAbLba8&X-Amz-Signature=12d1bf898401c4f96725d844ebf2b94ca10c4211bf8db80f8d26b37489d6bf62&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
