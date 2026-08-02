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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662REV2OOR%2F20260802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260802T025509Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIC2ijYS%2FYDga8IlwXfSnhHW%2FNOYK2a%2FwgKGsQWysy3wFAiA6WE1U58a9ATcPNGJvSvJaa74Xn80keob393ySwMXwuSqIBAjT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNdOgcPVUZMgt%2FJSrKtwDfG0WKtcU%2FSJTU2Z5mf0GKUxAtEw1DPy36vKS6V7E69V2%2BmrmWRQqlAreILjvShHBox%2BmEOWaurYCiI%2F24AEyGW4gjFd5Ndr9Gls38va8VX0Imxr%2BrcYjEraS%2BQnXQ6rLuU9VKw4dn%2Fuw7GSxcZd6CykBSDLJQhgIOHKtFFU2YrYuh75xz2zr3HURAO06bsdTg9pjpvlvYVPK2Ek%2F0zJojiP4GXRJward7Ei6yJU8zYF5RnV16e7UEoRnFuBdu%2BmILLn9K%2FLb%2BGghaZ59co27b8cDMaXWGmFtlX6MURRoAqyHkRGNHVZYAXu0SJeUBuw7gu1HA1blQu7LSRrxc0FtphSQ2Ht%2B2O5au63PWzvXRC91hSzSRWMTUO02t8aXz1YQEqL1lyEq0%2F8z0IGTFOB5rq6oMYoIQek%2Bn0dI1GstmvmrjTpDhCmCaf0kga86feFrtrDqAhhVOsff4xLspVyMkjbYcUqMra3xGw7%2F7UYlPwAfT2ZK91b1VhXu91uHkkAJ4Quf%2FSCY7tTnFXaHl5KETnaXyUD5m6%2BXU0m2R6RTeMu9SDazLUCiHvF1p9XlIL6maKI4DahLSbnQzT3G4QkqhfIy18zhnq51RzXH8GgW%2BVTR6BL37ltbfgdzyBwwhMG60wY6pgEhlByCC8WD%2BQSmHaCRO6OgF5x34IF8bAfplaIHPJw3hKyVHJcsH13MBWjX8Rf4iJMTdCfpv%2BuvEYcr5O9KuyT9p%2BoshVbUtFpUQm2uh1P3JJyau4VadehOD45n4GtSU5CVTPv7x7bWhpEJAk3v3pez27jrESISyglo%2FZPMC4QkRzUTvimbnYjfFOkiXpYlvZ%2FDKDi1VVK%2F58sZUj%2FBjp44TaIzQ2vI&X-Amz-Signature=9b49bf3a94f6137b2532ac33722117309c136a970f9d97b16795a430b3d363cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
