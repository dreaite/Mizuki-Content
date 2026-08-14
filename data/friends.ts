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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCNPWCBO%2F20260814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260814T061431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIA%2F3ggKKu9IRA4XKYq6tE%2BHq8oUnT0ZFGNxvAh4C%2F5pQAiEAhXz8xicyyRNTrrGz1VWkDkEHpdiOt098J7WHiVq68qkqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKjQM1A5oozhfXZcvircAzEp8MoLgCiZwWFzuB8nf1FTyDNEe2kb6TcK9SEbrxn6HuicCN76elw6M8%2FnYqpFlAUYgo%2FYq7qqDiscofzqnlWhuhMfTNqhN5EC5cLdxT8FvWhYN9iufBXVnJNwv%2BPq4SXhLHw8mxaxkcpEuAebZu43G7S75lXbOLJ6raJdZhoXWb2LgxqJweY%2FPMtzDZGWz%2BEBpa%2FgLrKytahR9iDWQmq%2FiV4o8%2FaUhYryoXasvyjD8Y1DoPjxgOflb96Q499I%2BJlBJZtwiQ%2FfZu87Onv8ssk1FIIkhuFyUsDjky9ZAucFy%2FJkzgpmT8WJpa2mp5tcNm7wjo16oAWkWpC7CDrvRMyX%2BEUOjbaSNJYX6dUbAoy5p%2Bq2K4L0KXDgMNWF2%2BalqOYeMpaIxixKPVkIVD2F0%2BwX%2FjXvKhiVz3XHgOenpMxdWC7O1%2BYoz4otpmtBOovfQ2mzxK%2F4JhUtbTClPKdZAp50xFf0CtMXBqZkLeeqRI4n%2BgoP%2BbOez5me%2FTXID53vHER5BnkNDUZW9aLOxfinRaLpjBBcn45OscFhNNHGhLe%2Fx4p%2FHF3kZZozmov9jsh0Z3G6Xkm0HtWPiwFheiEk%2F4Q78tC9AdhUwIUhqnqfGK%2BaKIXyxjDnwhY1ocjUMMLb%2BtMGOqUBMb4Vlc36wYjorGSVZwqxNWyV%2BqKIYDFH3XcEdwplW02oM0knHVe%2FTaLziTOcItueb2MregqpIFzNRqVEklCpzU9MTxcKDgB0xrSd0eSdr9bQrvPeanc18aZp7Ohc7Iwx7MKtpkjMfXaDFI0wrZlwWmnbxefeZG%2B3nokRTrIiQFopLtBCZSbld9hFM4NEAKMUdSCx73dNKAakHlRoEeLEAFqxVH3U&X-Amz-Signature=ef72976a258842bf5566218e84a6cb11fc612c009dc45939a96eb742a54f0595&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
