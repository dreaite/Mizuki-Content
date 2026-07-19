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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QC2KL5MY%2F20260719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260719T103550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4ZcwDbxDgecao5RrNEkr%2Fk0WVGXe8xeQVmajs1IXgTAIhAO1Gp%2BYs%2BGK8G6Ww9qxILBgyfFlKwTeLDj8B83TZEoNmKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx0RDew4inN5j7otPoq3AP9QebbkF0VjL8FAD1NNjdYLqaONma5Ul%2B%2BSWuEkPkzCqK2jw46kAgrtsVXLXfzdJejIzUsXZLeyJ1aDUOupdqRI9GzYKfq2OXHpIaFQGQIIw46TrKUYpfxNAiB2%2FueFIijIYaxVmEH3S4Ta3LTFNYmYMRGFnvUHBgcL3x%2Ba%2BZm3Iij4IwxiKo11npualgjeVnp1IZQPQATaRcfP3R8O2UHg5zw%2FLahE0TozWyv1a89X9qJBtrcDNXIAWlvgkJzxHLJPBTD9xDVyu6LX1nZDaAl%2BIPRkvCmLJs25qwvKoHKv6xrmgtzjcNU%2FnySRhfqiO4bKQSv6igo4iogixaSObmn7pV5rfSb%2BzzaAJLnNLQFx6k6MMOC7umAsHUOnjuV%2FFJGveALD8VlK5Ic2D%2FV0wx6pNzBL4J8rK2pNKddRCRFdvp6NXTh%2BPbJxuvR065q1ln4fLDQcAhCXeiop1dQN92BpkWtQI6j0fCKE46Z3wn15zZQuH5%2FuUnlgRIP8M%2FTe%2BF6a9fY2J3DtMobRhbzzK%2Bk0aTS%2FY0CniMlfa%2FYKB56gRrbXXG3xgTFlCXokcvtQteoNPHWO7BtCGJPtGuAtB9VUubSLyfWU1OqyqvoQuCgD2LYFr46HbD5a5un6jDJqPLSBjqkAVntdZU%2BX72%2F8A1HRlk9shFrQNgsjs6EAnVma5Jiegbo8Qg0dCLT7v8zKUH8Fyx3%2B5C%2BBdDqjb8bKOTjW24D%2FAUsjC9i4iPm8pv%2FxypeGN0040CjOQENkpqnojaT3eCIslKs%2BkiDhDSpcHWMLkr9MfSd%2B3Z7adf%2BR55MidYSb%2Ft7jPCSaVF7xjmj6tRM7RGNfjJh8inwKV%2FVhbgmH6tEKeyfJCQN&X-Amz-Signature=ebb47c6d9c347358de5f6bae5ccad5eb2d156345d0ab4be40bd1ab16b16de57b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
