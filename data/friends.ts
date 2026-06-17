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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UW3YVBSW%2F20260617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260617T232614Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2BA76Uq8urHq9zWjbmx73lmiBp%2Be80L5L0iN3%2BFTWx3gIhAM4mrp4knGJQheeWLSbJazI3nTtmrkgDQ%2BrBL0bQTRU8KogECJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzRhpfa5hYAwkt0VNgq3APHgqkuoLb1zswoQqGGGgQbr3yeTVzrizVzNDYq28HZbjCIFRq3Z5K5%2FQnt7tUFGGZz33Fh3aYMs6SfH74Qp9IwsQNSdxz6RpfX3CRVipn%2FFQADxGsRYdigVji7QVISX6rZPMKrdTOnNAdUNrRH8I7fbFxAC8n1NZPgO3GF8uJutq0CKNggvZEIl8xlw057DbxD9iSNBKmQJuLOggZpmYq5JvewQoAHaNBCyumIFWV8EqTNp508Dhd06VixM4HqY7h%2BxFAYsF0gKYT5%2BhJBHdXcvZwhJJ%2BYz%2BLhS7Q4gNtbqq2yzTZ76DpHoFkwp20GuhpDz6Y3fneVlo%2BOfF%2BwcA3I4GwWxjR9EOXqRvJGm1GYQebh%2FOl9iDsS700F27WZx9VyyQ6US8LMXVdhn8q3fVqVIUUyukiaKpzRzOAPyQ%2F%2BmFVQTmQI%2BoEpUAel7ewIvn7XdAQtKd8isr%2FQqSzQ0p3ND3Az%2FJZ9GJDdJcSjaJvsv59HXIxutJZqQ9kRqNUd9M%2BYVFPWtsI%2B0SsGUoeF5Hbh3Hn82BKEx4tLaAEPJb4owjW3sQNw8zchwAlsTZhkges6diO6k5o4RKQbImL%2Fc0mzOHPwhIngw4bf%2BMOyACTujkdLl%2B93Mi3u1zeV2TDOq8zRBjqkAYJ8X3GrVdpOoaCeCejBTGDSjuRHnG%2FT%2Brr8x2%2FPDzh4hneGy5iDzGwqwm5%2B4D%2FMEGw%2BlqM0mP1levnSy8e6qfAZQLvfhkX7gvJ2m%2BLBid6UwDEM3vfqTS%2B9E2lgCwfqw0ddVm1VHhCilWcvpZfzk%2FJn5SgoGSjE5BEyDjzQ3Ta69lCyetuVSt1LlVJAeSBNIEPUCJcsqhyzyX9fQDYNkfT2YzNX&X-Amz-Signature=e69af6bb2398c1bb29a7d059cd173067f4f8fb5f97a30bb0fd9e2b10d742881e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
