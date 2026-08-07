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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFHYNNPN%2F20260807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260807T175352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC8ZrBm499Bn2TfxJLdfG54G4Licw18QssiZcg9yVJbtwIhAP05%2BslxpS7CS76%2FV6SVD9eDNdhDiiIlVoQUO0OuOigmKv8DCFoQABoMNjM3NDIzMTgzODA1Igy9Kio0ooEAKSMhaIgq3AP%2BlsGVS2RtU2hFisg0IpxePMAMqqkuMGASEp50G8JoIzljL0z93MIrO7pv0eeYePVxe7LDWof9SfdbEn3Up5MvCz4AeiLB53uPGpb2JRgFN8zHyK97H9SaLT9RBd0%2B7REEb28gnGPjElJHSSmGSkTtWH0%2B6DPyNmGUcbOnTxrscXml3A7zdX3wr580UVh6a6P6SGvw4m6lxfRbKxWjmKjEqF9KSqI9iVT0rvS6jWNoeePpukPT7QEVW2JXJP6lKQ8F9cCQ7qSgjqKPoQHokEIbMW0pEA2Cz%2BhdMb5icleK8RvS6PYPIrYFwBKTdr2dgnubWLGLjyh%2Bkcqw2DeAWGaeirlKejYO5ynZGr%2FiiS%2B14B5%2FdRGurOJhiNB1pr4YlAZU8ABY47RdvUIYeKgHK0o5utxI%2Fy4XRaZwg%2BwYNLOzj6Oi5PaJUJU4cicokJzCdOVaw96b20CFg3NnS1%2BBmANRiuhGnN9sQPIYyVEYvSvQ1jSdK6NBj8fd8wogQa9pKIrgOBo6uOQRwr7NIMjNgPYd1K30436Lc3vbDNcNGGKQv1aWzoLWEa4RQOAmLcUWPs86OuAU4e945qFLfmWwBCGAvtQ2mgK1xQd%2BG4TAldIGDCsVxLavDayoFznSSTDLmNjTBjqkAQFTZyODttnqNub5MNjjdXGCp%2BVgMySyhUGEzFdS3tkHIQFFh%2FiXIoE730DFuxOqDQmsBZSFJEKNHGCuc5sTBX0vvddGnKZe14Do0ZCusqELh%2BAOJa184iEW3IwYzPZ7XkumjW3wv1VhKkqnXH0EUX2viFv7E0aDkdEJUelsIG6G6fb9JKbMFx54L%2FwgxOA3FvI2%2FaXeSF1tIf2AqCpzSdLSXWmz&X-Amz-Signature=7fb891dbd90ff5e8a6268b27ce35736b0e5e406b4e93e97410d7023de86c3dce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
