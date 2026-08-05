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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDAXJOYL%2F20260805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260805T173928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIGNSqiVZjMdRhxSZXEkMDKqNYjhmGTMEXr%2BuSgt3U0MIAiAST2%2BFUP5y7GsDgWvvho1KSfi4omoF7bAJI4i1faFX4ir%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMz4i%2Bda1v3gk04x65KtwD1%2BPxToIrusnvvlfXn3qffrIl9cKMfGH2DQAeOFZIjg2j2eldCexcOQ%2BwzZwDejY2wW5u8Pc%2FY8P%2B3dnad%2Fnd2mpET7%2Fpg1qYrj%2BAckAlSYgNx%2FIe0PE6s8sLLL5b704HxN86dH7CsrEu3MIyIQOlvTiy82Sx3gZEBK3n3tQJgWjyRocjR%2F1lOyLwLRtE5obuP5FsFl0OdZ67%2FWosqvQW8VrMG1tngzs4d%2B492NO7mfGvyisTQ3KOVuop3P9K8uxOmoGiurR5Cz4ued80VlU6l2YH9LqBjC3j8tBquETVrYu5SuVlcKz3x9kb8cYFCb5URQoFwZDEpj5FipunrpLUQPOddFhhUXKq0GssD%2B5%2BhO6%2BGtJ3rHbynAkkd%2B1cdbcvBM%2BFhU0JDUCxCueQ4P5tnQBz%2Fp5A5fk0LvKQa%2FSU%2Fx3%2BrtY%2Fs1X%2BRj4igC912uHCns9kDUanagwvkZynx4LC7S8KASrsE2yBJ7qGcAWMDWkIj9SmJlE70ag3LZA4u26RB5yzIVzysinGWJCezyW%2FANQFf5ifnBcd4vkZpvZcpA6iNckdrCpr7BLGGdEXrqlA4iQGhIWO%2BBBYUtVesbyZUkDKwZTOLZxahhSx2nKtTOHih23QssOgES%2B7jf0w7tnN0wY6pgEYcMaroevSuYp7KNQ87baF%2FuD2kzp14gR5ln8Mwcygpb13hy%2FilD9x1Bx%2FAzXzxoZ%2Fs0g6Rn2OsjZVLr5GlZdCJLkeA%2FG7v1dHvmxHUSAZeVkATJ7tZotGBttlyZbVTSMhqCm%2B1XuXu10MvFGjafbEdAi8iimi%2FEE2z616d1wFRw0KGMaVryygAScWUIKayNR%2FrtMdn5doEN5aJFFCuVcSf6%2B%2B60Yh&X-Amz-Signature=7c5eae6f6c84cd6bcc633c04a9999441f32bbef97b4dc246fe2599da47f1f51b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
