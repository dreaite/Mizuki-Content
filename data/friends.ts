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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UH7NN37B%2F20260721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260721T114709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsNPx9PJ7dgic4%2BhnfSxeClVqJukjTQPog1ELAXYxRfAIhAMZFbSoKGJ9UZavakTJx%2B7BYVKEa1bOTgQe5q%2BeQvFp9KogECLv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw5O4yQEqMv3PE0r%2BEq3AOWuxrftd2hpESdfSOqXJCjEcngYRbNyJOn0yVEF2KShBnVCyvTUqyI92nyR%2BAhu6j2cJoAB4ZFClTTVIJBqOZlQSQ%2F8H3XGW%2BfiM06LSMj25AMezbN6WV8a8ZE9LklJ0LInonkOr680NhMdv1QMjNUh7TdKyAqLAKKMwGA%2BiJdb7muR0rLhzuDYpn6RSziAqbZJqGZRPHANrTJaAY6WKDy81qsEr0oZpsYleRLqbDAKow8z5Tbj6WeOYmCKlafOCyrUNeBHcCCwQoehq5fMfcJZWSBs3eBurGx5DRnVGEH246NU2R9j9CDIdaa%2BYraAb7OOGxgEEylzA6jXkw%2B6ue6O%2FO28uNyMkWj7sjPXUsGYwaWhiQkdgE3uDpGuejlc%2Bh%2FWHNVGxv2%2B2YraRkJD2j%2BLr4YqtdcRnm0%2FPBDPb0W32DQcd4rk7ezeKC3FWq5qSqLKjwzp4VW2nZxqamfbtP2OwxoP2b%2FcQOgkU08jme0R%2BRx7RSf%2FG3jRC%2BIkc2sJuWl9%2FzZo1mrWEUWwkrMhQm5mrkGs2e7qS883rc9enn97%2FZHvapo3ovU3JM11nkExXdT2iIZnVHLH73Nyd%2FaXs%2BW7Ft11vY4JaBEBRxBGEdwqGfBmQcbiCB8m3kBqjCRjv3SBjqkAbRq0TI4mV9sbxDgFM3HUFwLuJRJ%2B9JkwEsyMidSloMxAERT6hebYHPOq4TMJHq55STkbZ8woua8weBdcoxO86btC5u7NBP1GOxpwvR31uIPrvWufjWocXKVCFUjqS6y%2BfAdoUGS%2Fb%2BJLplBsBraNiw%2FJWzp0Lw3K6H%2B3JRL2zNfWY%2FLwz1MKgZmj7Xnuiznh%2FCFkTvofz5bm0T%2Frgl64WXPhy9G&X-Amz-Signature=b40fc9162dd54d384d2bd695652cb579465d57b9e147579983558afaff984800&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
