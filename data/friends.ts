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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQ5YDBSC%2F20260810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260810T214217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCrJzTceTMAgT6rGuv8PWO6gLXNhIFmDffPo3FIvGkUxgIhALG%2FadmjHSFNJD2fxiMf8w0Uss%2BWumfJMr7RzVN1xV%2B2KogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz9fFJCQ%2Fa5XpQKa%2BUq3AORyGRWKvLUR1rF4bkA1fvJhVY2tWnPfunHXIK0IEOLAYX6xrji4BIR7JofwvoFucqXPP43O20CgenI8%2BTJOIhnzxZ3w1W4Z7T8oKc7Y665Z%2FhABNERdGMhj67TzUNMJGAWarMM%2FHH4I5Hkmm1RD0LVrCgsuaojkgByvdqSKJ9DbgkidG%2B0ZT3aUl4feH7v6EMDjh7xhCixI9uh9LmZ0pOutNKfyVbYFiuje%2FGO8v%2F5Pdy8NH6OEFLcsRWpgVExebzoQLUgYfdBHrOxAsAn0jt7kO85Pns7Ez93oHbDVA9LtbSZCv6qNA0RTzT7rQCRezv7jdt4%2BJ9hZtkiCuVszFDBxuXBxlnFXEmOHahlB%2BMzJFLmydyXvoSmbnzYEP%2FzA3YoPvaS7tOX33kzyf27b3egPQjVwyQqAsnaiYTF%2BtNPSpxq4KL1VOuQjRTFmgxvXrs4hm3qTLzJ%2FP0iQM7dTNJJKWZ0lkJPElrIU6M4w7JzPTf%2FsdqM%2F5AR4xFvSQc%2FCW5iyeeqb5mAKFdCg2bUM0zEZ3M8FOntMKCqSNWTo%2BBxBUDab27eXTEFGIgbmt5QJhWSNNDT7qi%2BOM%2FDtdtoOo4W93i42nSLKvuXk16RrWluVnHOnO%2B12tcINmoVSDDI8%2BjTBjqkAUnlaeRcuYcmfCbvSumzLr0ibHQD6DRU2db6TeXe9FUPoW%2F2FDTd3YkutQTnXbPSCIiN0OYJgFXI7%2BCNV3WKopIV4PDliEKxUsziCQvvjhZgBzIuR8rbZU0TGxOXMyImbfvT24JHF3kvIkIdUfphgpqxPtfMYEQbSS0jh5yxo5DS0bovQhsr7m8eHtwMHSO1W%2FFImYGhdPJF4yT6xABeb%2Fv2QNpj&X-Amz-Signature=2410101ce5431a0ab9e9bcc0c343fd7f9d3e2234d477c0c410c032c665a8b242&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
