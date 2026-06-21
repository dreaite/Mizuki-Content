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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDGFLXVN%2F20260621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260621T231615Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQDSwcjtD4ezIJREMu9l9w1KZRR6u1yJQ4oJtG4eAFJYaQIgK2%2Bsh1J4%2BgAMsb3dVqlqhkPYizzEzdZm7DSvApqzbfIqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP%2BPOxYDGP%2FsjzbZvSrcA5SWSijCR3IwFWL9nAxuuOgGfIZ1ZpHsNi3HyguSOhANF1WPXpY388ohtcY7ugxxu1DL5%2FQ3VqBbNZEjwx1TihCAcQUzN7hq25liiJeyIBDruCqs%2FLgJ8a%2BmnkGvARJEz3XQtZUTrXNJF%2BGQUoSfGOTvPJKsEfNVDXp1j1DpMNlQTCC%2FonmTJT8r2hHt5znv04A1b8wv8Rc2GcyrVezlDyxkGEb5Unl4qmoycjeWs3hHApgGsCJqs0sNZMyV6CSgvT%2B83dBm4i2sSjxONkUWW00HlI0NWmyxWiI%2Bb%2FcG8GaEiu7dZbyXVsUx4r77%2FYOwh5AtFpvXG%2FrG%2FqaWLFkFgPiyXs3ee9aPYlpwz968MuJteH%2FEN8jF9aUSwBolMxak%2F%2Fd673wdAG9NA717QntQri7ascpbh6dZmLlsNTJYUVeS%2FOp0ZemQrtSBySK%2FSLv9uPhvij5Uqf2qlB2l02BIKTcjKytDf%2FIRnQce%2FpoUi6eOeKfbclp5Os6zJkMSpQiQJiPJe%2BTKxuThVewf4AEan4%2Fh4%2FtsRk8pRC3P4D4%2FeuiVzayAyKve6NXpdHxa259J6xGO4Dinn68zaO5FjBffqDj5oeCv%2FOSm7jbxpA%2FsmKC%2B91sOqfV%2B10KEfX8QMNeC4dEGOqUB9%2FbH4IGIUjrnEI%2Fh2cJ5QChSugoLJdOFRiiFGT9f7Iaxb1fJK6er64sBT7c1iFOor35P%2B9vxlBivM%2BxtrAFN3tZZSjyQFyWmneZrL43QnCfdAAE70%2FgxrzLoTg92yW6R06Ty5iLWchXeAxJQeJUuYADZglsG3WTYGJfbDXO8nX0p0cC8aJ2BO3hWRV9irVtbI6CA1JUFBBEDbpZgpOnyp%2BvvaLIO&X-Amz-Signature=aae5e82584cadf101b4aa3d66c00cb8e20a9f0f514c856e7b0f59619970abc8e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
