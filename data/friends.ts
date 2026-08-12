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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VX5W4XZW%2F20260812%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260812T191131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQCE18B%2FO3TQcL1lNFQq1nJLYfWK4LH4u%2FXFeCD8t5KVewIgX%2B4BL%2Bcj1q4Nepf7GrRKhWMFWdVeH%2BOINtt%2BCFFvt6kqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI6PrNZP%2BtqR6wybqyrcA%2B9My4vAHxNv1ZOMEFrKgCJxVmFe%2BHya5C2hvslDyVvQLFOlcrMYMjmq029gcsyymQHY%2F733K66R%2Bp9ZhlrEb4gUVI4VkQojY8aoYSvQRV%2BgVuJ7Kqa6o73EUjLmUlVk7BkKAnZGCvYMR4RAMkBfHD2uKjlyUYShzUwihJ57pOvqksCxZDOUXeutmdcFX5A9WIIFh5S3nVojZpcZE%2F0Gq4mAqFzO8v3%2BpMX2E4v5hmbbMaGbTvgVzLtCUW0DZ7DbFERi%2BTuO9IXQn0a%2BCOkW2Fav5z4yF0rYP52JzIOIiVSUtFmBOTjfV0P8HhpavaicpbxnBif1j0l0YTrZUgiETivAykXp5tdQTf1So72WqdOwXvEOGcWjG5UgbhHoguIepMYp3ksaCwtaimU7NuUKoCBPF0Jyat6%2FaAhWUblpUWByHkQGKQqBc21LDH6dv5tSYzTJ25aU37kD8sPqmfq617Ra8doHF4FG9pWptEBMgB6sZScklY3SUaFc6jRKocGdiYfYe8K961wCw5DuEZnlXZuUJqZyDV2Vfh1VxfU6wWJjvkqvcHYCd9JJThS1lCWtEqhEtUdpwDhqXqVY4vT9r8dQuPN%2BMcfTMRBmkM9E41iClb%2B9Zi8ke9WozfeoMP2G89MGOqUBbec3DNvWDtKLmsDEAaA%2F8PxLhEPvxejOwOPxzIglwkRsr9ahw9pH1p%2Bf8om4kkN1tPTllTYHt9RX5vUsUWtmm4zetnJllkDlELHNjbaCADZm6%2BFWbOZUYmoCocIBNBTlrf8%2BAHDzmOZgljO7r50fXlzjmTxDJz%2F6smtEKWBlD2i9XcBhStihrhVf6YmN0qTCWY%2F3FwS3UdPd959kfD9CZTCMeDgJ&X-Amz-Signature=870c395e471b5ccee6a5eb189bf2bd84da30905898f92291eea261945a028ab4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
