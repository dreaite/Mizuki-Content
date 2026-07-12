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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QH5GQGYA%2F20260712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260712T132330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJIMEYCIQDF873EPBd9ooxZ0E0jq2k0Rz5kb1nSlvsyJpxJcb0qqgIhAK58UH4pp1mVDGNVbZ3%2BZoDgaIHUMJFEtnpf42WqGiIKKogECOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzp%2FTiOlHLeepVocSkq3AMMpATqHmog0sTDDuYc%2BWijTYM6c%2BF%2FsJnMNjX23BqN9iIVjYADyu5cEgi%2FXJrZXAb58QpOaeGjl1WtsL%2FO09TE2rSlBmq39LVSzFPjqPfvCBCcpTWv5%2FJcMjRSy8z9evCPCA7uFnhbPDDjmZVXq4Lihjn21d0UZBIV1n5pJaAIyQJeWfrtLR8g61NHCGJrYOAw0Z6Z3QDgb6r7U8g16NISi%2BBRVUce%2FWMSWcjGB7DdYX8vtuBWnr82nx9DxufcrFJnO9ATdnTLQqQpXG%2BYu%2Brk0QAQx9XzPx3dmasN%2BdEGCzh7Q7gD4I2CEe3bEedEdpRl%2Bd1lUFf%2BnuTeudGsGV4CFT87jHeyRENK5%2BgZPkk4nIkIzvupdRzpIcjH2X23fra1Uu0nAp1Cq2oHBu70sRd8w1MevScyCCSjzUoFPmZtAPR%2Burwp7Y7wAmC%2BL79ftzswiCuZVd3KquPcTjMSaweCdRu5Xv0RDRd5QJ1%2FEhqA7Qjb1%2Bpy%2FCdgIBNs3zGUzTU9w6gIg4PxAmqH%2Foo%2BWAUyFQ0KQ1D20RXIGFi84XO6NzIxweLCcGRW2LyRYMcgfz7BrsrBnnnwIhDFaqCURjomzzTK4F7g11syhgi3naiwNn1o2ElpBWywM7Sm2zDEgc7SBjqkAWykR%2BxQSHSc8fCPOAxpmPVuWF7zt37YZVKOnYUIzZgY5Bfz4FA53yG0PU3GVz6rxqVWV46w%2FLzgpB00koooIHtUqUSWkpKJaBLvoO2ag01dacYrYBAVT9W%2BLfryaFQOc9SVQAepisuTfRn8zTF8Ld0SxddwwihSWsvEsqZvTM9JirYzf4dH7fkkAthCN7HKAfYLkZA7IUEfRsGYVuvzbwn3qfeN&X-Amz-Signature=f3c537e2d3495d837fd9ab2c7c2a4df35ef9bb132a90b4b421eaba2351e45565&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
