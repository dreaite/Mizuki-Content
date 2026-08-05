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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HAF7WAJ%2F20260805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260805T074009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIBYaMfaFA7KhU286j9W8LZ8qVycj9%2FJGVRkEwP5duol0AiEA9Ad3PQdpkD23OXtuOAPVRMrxD9hShwgdAwYDFLzUVeYq%2FwMIHxAAGgw2Mzc0MjMxODM4MDUiDMihx9N2pciL0tmptSrcAwCHMcJPB3382cj8kebw9SYsab%2B%2BECEByWmJgY4L70g%2FdrJkulunGGKHGxwWQ7KTHIsR4z11wPtIxeXKWfCF%2Ft4QFQy0YGDUQX4swi%2Bqeya91v0KQM1kpdPuE1nQHy4Z%2BnGY2vxo1HHwifJ7aenEz7W%2F6vPeE3pWBgs8KjwpemeFU4hEn7OwLdjD6va9rGKS5jkYSKSHQP16BsfwJKu00BW3%2BHnZFyJjhfc3vCPgd2HcIRDRDjUGUWWMzjG6rJnDygZVQrMVkRsBAFcOhS%2FtLyAINpKEz%2BpqD6byvkY2RVrFuP%2FbBqo7W1ueMwoEqbCiqtZKqSzvDNsSgfkvi9wTVyUCl%2B88ZcsJQvP6KPHORZUYBAv6UEIRwLw0O23Y%2BfIpXYX9lWMV0F5dDNFW7FUQ2mf5QkfesTmFJ02I3SJNRzOEkFVWAUU%2FetnBd8%2BP78RzJTe8mD0sLl%2BA%2BJ2IjqCnrbwl6p%2BtIwjsNfqA9AFJ4oK4K9AWLAB5%2F6v6udP%2BW0FHB9M5AY%2B4QCkwn14hpdE1KJi857QQ0e4brZGQorLOtn0mItkY997s22EQmF1jw%2B2My67BO9rcC3FpGfIFQozTkssqrDCdG2a%2FWgDgP7oQSmzFRRq6MJZolq43lF2OMMSpy9MGOqUBFaqFXo2sTLu84HioyJupY6ZGhqQYgMGnLwiSaIzz2UHZk9fVKgRtoOz6OCBe7MaElhqEyRu5Ctw5EqUQp13qu7179gO5Sb2AePEuJ6SFqbUtrxByin06ANEUZChd8YAnYp%2BY0bc8mNFQVd%2FAgjO56V1CMEX8je6TJHfbAkPvrqU0%2BfoG9Lj6SMPiSkxYGmmuUzKGWzo%2BTW0sAEo5UimgM2KWMQ4B&X-Amz-Signature=c692b73a54de1f51a40ca9bf73f213e8c3f419c7febd058ee988889412f89003&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
