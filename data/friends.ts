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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MGGBJYI%2F20260711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260711T235635Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJGMEQCIFakK5M8nIkL7N60UgBRbjhoG7kcUOWfsN4fjHRkORDQAiBL0E%2FO21m7vKbHnUg%2FAkSzhoKXw1eDb9INCo2V91iKCSqIBAjW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwmRo7QxGD91GtnN%2BKtwDEEL1ZefdV1%2FfTmpqLl7JBkbNrvdp%2BsNUaowq64B2NUtFnSYN5CwVz%2BECKHQphrOnutm7KASGwkDxoN806%2FGb75Bztj6p%2BW7%2BQwlrl6uU%2FJU5qAph5uBqpQS5GLe3A5RhchQahnTp5uazN3cdk5iTSGzB6pj%2BHlYKPrqqoaAhca3nc76lyjmKMpRqotRGQw048nBNcv%2Bg36oYU%2BRkE9h9EsuUF4UESKWroooaha5VN41d2O2wCTonzYUjyj%2F0GcwakufYbUXyz%2B617ZBxGraNv%2Br3ZAkjmo%2Bxv7rdQXUrkyorkE0rgmgIVMLdSDUREMx9l5Nf7aszGDWYBMmxxkOJIO6qjEncVZ3eXm%2F%2BOOraGJrcmjlg9b9oFfBZqworv8vOsiAuvAbRUo3A0XrzTlsZgStlZtsJtSxTy5Wu%2FsWwrpbYc4P2e6A2Nr8OblcL1qJyZgYSYMQFmqPVBY5npPFHlMWXudIuKwBJlLWcl33%2BfL55rXAOzYckXH1gy2ActVraBPRT3H7xXaCgwAJNbjR4bSxq6c4tCr8QHKMidcsT6TZgCgXkaIEfEzFtDH287u2NWhKdWJrramm0ncs9E%2BWlJS4SCq%2BjLrYCFmeaq2uBQtSg1Of8or6MvyWn2Y4wt93K0gY6pgHYUKc%2Bzs7dJ21qiU1TDnrCBj0xVf1Dejht%2B4%2BAR0qrahk8SIvhYp2J0CCdvj1vXi7sMoSmQOxzaIQom%2Fnha175qT3qBnnsHHlcWcGyrHBGHRdlkwwuvt6Sr48oWeUB9Ca2N3k6lUVZVR2WkeCzZ2oeE%2BidkRMM2zZPdh8ocOfkYs0REloHGey0xtX2WP6Ddm4Bt8XfKab9oouuVdmrr09juSQjjPi8&X-Amz-Signature=5b96a39f07653d61a988ab48c648c6be2117f4c402f80ab7335aba62d43bb319&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
