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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623ZJF43Z%2F20260704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260704T043609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCIBG%2FUIOvflhM5EyI0zIfMPpmt4YQCRVzM2Yjn4Qqd06hAiBIEW%2BHuEanB%2FwHb1B20oRsl6I%2FvcGjLUj5pvsUDiE7Nyr%2FAwgcEAAaDDYzNzQyMzE4MzgwNSIMe6C1R80kj88%2F1HFAKtwDAZm0s1IuWIAS%2F8dSZqz0byuU2IEe2ZaGEWUZpA4dfMnu3f%2FYiNPl99yW78hw4HwA%2BggZ%2F%2BAht8cl0lqKt%2F47sQ1ZrQvrZaXCJstkOJpeWZGQVMQDjG1K8jj6uPomr8lRZgEgR7Ulf5GBqEs6r3qWLlMVJ92utsNEvcbSe%2BR6PRwE7Igzm0AZuvt6qEx%2FmemBfhyj6ggvw%2FXF3tvQNE2EApkulxh3ujLFYyd2R2Spyl2s2B5vFh4YlKvi5LSLBAyiXcZzwFhv%2B8Fqt8ck7onxnHisIDzzl8m0r3pNnogJK7LHRvJNN4t2F%2BLe3jf2maVFOx8LrxoLvPI5FL4grAFLl0PLD5wOohO%2F5zspy7cNiSLUCyz1dUA9zb4U0myxbN9FnhBmoXisS0BSfc%2FSheSOpElWWlW5YbsKyyBnhvMcx1849F6yeKhkQN8tQxX%2FE9zsDfEuCUOzsINEVEl08871UvsDE3hg6cF3L%2FbROXdh5VbpXOFYmb39UokoQhdxQzyOhWeBSAr%2F3sEhRKhkj69RODIIf5e7dmCbDCJhvabNjvLYUM3noxTTb3L6lzn0M8%2BdkHBsoX2%2FfsIcsHdWHD%2FYQy93QVL%2F6p5URh%2FKBOE6zko2dDI15LwklMqrfE8w6Oqh0gY6pgGewQHQiIhOfcBwjgEyuyTrQ4tRZw856HJ4ROD9y0%2BbAAZ5lG%2F4ONVde16cuv%2FWnMI5uXChIyXU56zBr2HPHhAywf%2BKA%2BNXJtRIKPDhYzAcvllrLaAlxKqHIfXRceIH6WBqvbvV8k00cRgIOwF1fVPxdCO4QVnALDxOBhndIjWGvzPY9weqxttn2pE5%2Fg%2FtkPBYB63zjvbk3XVcfRu%2BHNf8RI2lEk9M&X-Amz-Signature=242f9c25d4bf75a8b0eff52d213ed105bbb00e158dbd57f63c2ffded88241de9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
