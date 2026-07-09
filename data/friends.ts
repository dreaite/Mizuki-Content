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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AXOAUJL%2F20260709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260709T180340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEP0tjhaaQ60MDKiAa7jEtXh33M8GVELHUvVf24Jgh3wIhAIDEQIXYLKEo1gXsUj9kDzWtWhbh%2BaJmDY8euYfPh1ZIKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgymA9aeWKFl7BF1Iusq3APwpwHbJD6IxAhA%2Fd7ZGNQtndtzghWyEKCuZeQX7dIglwkgC%2BQoEpDikRce9pwTLH2XjGCR1oG3Hk3uJy%2Bin2foHJBQbFk%2BQHH%2FGAk76G7HtzX0znUTIvbxqDcJka%2ByPurEPWxbafSIgc58rCQfc7Fn8b6HCetCYv85Os83vvLeeg7%2ByhxPhLXGf09KRPpPAhQczm7XMYRujRBwQxajhziTwLRTzE0QMfRrDWPh9WFy6G3D69SfryNuHdmCQ903zc%2BvSxpoD5sF95FjNL41fPhtR1CZFD23XxArxNY6NYBnATB7OMQVoONM%2Bn0XBFDaJz2nPLcj25GuL3vXRu7qucWaxAK%2B0kVmAiowgOlS5psv4NSHyIlDqHoPN8H0NGc373jEThxcRYpJakBOln%2FpQIPlO5HBJhN%2BiRGYk8pIiu1BbfdvXzhkoc5UM9S2oYgmtQeDiWN4PUz9cy4Y9aj5hI6kvm3JcwtIXytK3SOjvHTGKOABNj881nd%2FP0dRLdMO%2FWDe9nnMcqj%2BaGGXGkPzJLo8R8ccCWUsE7SZvTDunatHIWo3YvEykccxdyf23SqvrTr90yrn5uq6VzSvxQX6fkojHus3ZPvkqMvWGQxrjlJlfdRwdYGcBeTKJfQr9TDKo7%2FSBjqkAUni59Qw56jEVSylDGGNvBgeMDl4AcgDG49nAJ3jHlMf8TCSSG2Q%2Bcad2sms2oQ5Ol5JLq3S%2FIu%2FSr8yAUrb06PQPnqCAA7UGdSxvaNn8w3jjXS%2FHOkeAcfXXR4%2FfVZUzBjAT1NU6Yl8B8KyBtLFhVYOz%2BydMaC4qZl6jvYB8dLvzFMVAQFLcEqIH4SuOhqiZblk5I0YiJ9TpW2jPZwepphqejHb&X-Amz-Signature=9674670334aee536a47d54d037feaa0a1a95ae061c24212ad755ad136242bde3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
