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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDA3XB6D%2F20260704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260704T101147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJIMEYCIQCts70ES1f35J8slOj6Kq6D%2FMj0HH7EsEtl6M%2Fol8OSfwIhAOwIr9J71YmQthKkOf32v7t%2BsbCtk9wyBzDpfVmM0Z%2BRKv8DCCIQABoMNjM3NDIzMTgzODA1IgxGkuOGLn5LJTfTIHgq3AOFMsapJlTjjVA%2Bwu0DpDRK3eoqRxmpG4XoUQP2lubOwMqxtfNruzEhWBRQlU8HfFxw88MnFo654sUAFopN0%2BgAE51RsDK5U55z%2B9jyPLJh1ewqFDHRSRHG5u5%2BLiiZ3j18gzFngR0DBEYcxiJ8u0Cf64kOAQns7vTM6K%2BZ8098TBZKPSqDcKfC53%2BTjPoEkJnj0YKnGCbRQ79%2FMbrWpZnp%2BtAI7QiovCvxG%2BZwZAppCctVcNZX5936%2FiJb4is2B2TgmC5GqoOjvJXFRScid0thiyVdZDcTDwQ68pmNluZPFsQb8d06Lp0DvdGf%2B1X%2Fdvsqg8YGjWwSwxhWXxBSKG1c1VtyQitY5WEvUTtDbdOk49AZXzwJA3GI4xhVccVZ9MKCjduYkkkZQEg1p%2FjXO%2BIz%2BbrTGI8MpbBd49DadQpI1xTMU179mM9sbYYUzBTQC7YMk4c0Matqc7naLYza0fPQ7nmPTxgP2I3DIpmvcd5hZJHHSA28qXCo1oGOrKM4ap2yxXJKSKEsz8NO%2F0ckDtii9BVcZXJWpUTSYavjKfb0mIE5XA%2BPMiGLFRpUMn6DevkYd4fY8k6l7frZp%2FxI%2FhpGu6SkGPbU9OumL9%2FdKAdM55o%2BXCgnTR9z15vU5jDqn6PSBjqkAXhv3thFwIqaFr99vm8sg6XoZSkx1gbodNOSVfbIoVs6Ys%2BWukcDyrfMQgrTgvYKOmE3lbJyE49355kdjIrEB9w%2FlbvMJWIaskEmtp0xLuvPAVO2PQby4fCjXpcAWRUU2rHOjWfbKDKS%2FjNnR%2BlLaJfJzyaOO9cVMu2OyYmYqmFZhh1Fr9p%2BNzEabLh4q14vESAo5XzG1e1W%2FhP2WBmwRoovRjv9&X-Amz-Signature=9d8738c28e0a6a223bef1b7d3038b6c25662f19eaca724da97df48ed0df734fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
