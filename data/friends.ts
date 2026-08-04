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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYJSCSKV%2F20260804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260804T202540Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIHB%2FwYyaRrL0Zjuj1r%2BSO1WWSFAXot4X21oOai5A4R6lAiEAqy8vdYJLQVByjzSmkDybuPLuP0xe5cfQoPSaUDKgU%2B8q%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDNhOP%2F%2FD%2FWT9yFHkGSrcA%2FhYbCfqjPLqYv7EvmLas75KC8IOlnKuEfVzy15RxP4NcMeHpw3s5WfolmEVVDDy8Y%2BVH6lqhMrRX%2FN2ZY78f%2F5k1IDf5tzeBMG5lpfoZFrpdib3YfMGTmm%2BqxoU7kpvyIJ3OeS350SHxcUnmd2DzOA1URN9E1KaCCc2lKw4mBmHogoN1xI%2B1dQZNor54XBdtTqtUCqClow%2FgwP1UNc2I6rVAhjCr8hyjuhLoBQwfceBkSN09jVPO2ysvFIIH9LJHdpE6vJmmuNnBXjfRhS%2Bno8yaim1BOEDFrKMQu%2FDR%2BpUmiL4eoKWMPGxQpB%2FOBq%2Br0areub8HD3euPUjR4jfDIE5YB6IN%2B5XJgtCakSnE6xPKdAorBPbJlFuPuLLSOd%2FVo8FojVERbBjw%2BnzCBKSWMoYU%2B%2B4duSzD5zurJJ0Ou3QjVrzLfnoixsJiF6fsuVIOgEy2Rde83vaApFp4AMobtq1EtaAorzT8S%2BqBvJyROVd6iipaJbfOUvjXi0kDT0IECiXH0APbnGzXoPK4%2BEnp9O4P8YbobRGJyWlOZvxZuNBNotl0tzUag7D6fsaEMkfbeEECdEateVRX2RljzBUMyGxBG3fRJbIPjqBU98Ce0LTpI5XLjVErMT7VvmWMLCPydMGOqUBBzwgi%2BF6eN9t0b5bfA6pAUYMPzrJDRijAmvJGuxvG7Hgfe8VIhJszHrTKtUuRLJ2yBwrmm7mduLKAR01bzUUP2xkZBX5dJD95Gdx3a16yd3KfJSbi9lZu8GI06D5vaLy5kh%2FH6VuztqyghoX5ozsN%2BI8yjpKrzjedm4Yf9Utsc1Oh5YnCEmz%2F7yzYxmWHpLXdJhONbknn9qVtQZszB5z%2FlU5776R&X-Amz-Signature=7dcca5e55ce1632ecb1949f00725e0ade95f6b380ed8648235a48568e480d062&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
