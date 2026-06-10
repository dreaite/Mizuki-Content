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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/c63930db-b925-4f16-9c1a-2ab31f8290b2/blog-poster.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPUJHH6W%2F20260610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260610T100008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQDzwCo7c6DyYFgVrail%2B975TSNBfc5jGhtrDtj1qkw1eAIgQExCCQS0Q7SnXrLW0ih%2FloszjlIkWx5NbcCYzLHipxgqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKeNx6cGzPeJvU7xSircA%2FX2kBLUXtSeB2mDGi%2BNv3M8aNxJuGf29N9pLKCU%2BnuFiSoNJEvKZJPMR%2FqCpLcjMbS3dLMbPPX0qNNYmsvmJQNemAUSVjCqABh1qGIFjioBwd8sYC%2B7q46gTggjX9VRq0VBOLvngPm5LGZKteIwvueTmdXRCPd0xY1RgHMq9wqLr1rTqZ1DWmd8fUxVcVHZmtWXVmp%2FhRInt85q3jULWrXiGG%2B97L57jIzjCsWWSUMFS4nLk0fkLjGAW1dTm%2FgoT%2B6n0IBzRvbQpC%2FRgK3AzaV%2FkHbSPrcm2%2BQlOds794j9FACxL6QuAGvo0IRLg1L0dL%2FcU78P5saTkgSwyPk4ZdmVcgGLeBrWu5NO7njEI06byALJQYhgdTcgLaQYFovlejjsch%2BFQaQUh%2B1ULkoOX1EGc9lmOXuZcmlxgzKAp8nWE9xLMYknxsP%2FRAxw31oHb%2FRym6C8yiPn5ly3CU8IygpGhKtAVpy6P1krfVyWofSZiz%2FlZQBzL2U5YpYh1MGHrwjI7Sx8tbQFMhBZYcDsFjk0gGNeEbXTcNKzxP66pW5f1tHHlzw9HE3tRkJ7HgW3OPRXCceqRyVEzp8B2MDTMF3KNqEVkrjBz5r76G9lfbNLQZCGXtnHF4q%2Bl2kzMOXjpNEGOqUBeFrohZWm7wME6wb1V1RS0DqJlAobKuLT5PZbZZ3PJ0WxuPIrV3DRbuZ08w2SeDqyF4o0ktGglSBwP5JuGYv5jsok7Na6yNOTQOkURsFtmAXfMpUHZlKPA7R%2F7%2FHDkvLmYyqVN3JIneH9OjSLNxxUPmNLZ7eM2R%2BCRORzss0UhyP%2Fd3cqAu%2B1MlJl6VgPrjHr2jjWl91dr10fsaiUi7ANYdRgUkgG&X-Amz-Signature=ecad31dc9f02f14305651e5abf9c01b3565600d19a8f3fb01aca950fc4f60119&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
