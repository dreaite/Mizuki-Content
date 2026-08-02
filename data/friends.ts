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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UI4TFMK%2F20260802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260802T235852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIFxs5pYgl0I4AWz6pdAYoiV1d4A%2BBTJdyWp3NeW%2F0aAGAiADk7xPhSWGx6%2B0nOa8tW9tzlD4HnIFFUYkEzaOP8ulZSqIBAjn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQgofw6ANWz6kR2ilKtwD9cgWssKtYeWgyuE%2FnZT6U4hZB9OjJ%2ByN7sF4qASMaJA7MIOCygopwFYBXHPbJ9nLwR%2BTqLdCb4EBv5QgwllxlYCxHNfjOihUZ%2B86fiEYYG5Bi0eK5KUWhbn2YLpB1Olrwgk9pqY4nuigkUKaGzaEkBxY7e0%2FnBMHMkhs%2FVCcpOG7rDD%2FnX1WqSJhzZ%2FfpqC4bkL8k%2BApOI%2FlbeQ3Mn2cF0bh0Dlvqwb49gbh09Be0RpJS49CjP53xqplj2jwjfRM2%2B9bXbkgs35YDuoVfxkXVde79imHNvscMNnUFGivPu7udHEiRG9EV%2FsYLdtbm9nroaJU0Eizi%2BRYbnykGCwZ2jrgSIDHIpHCpXO8FJI66uZzaxlNHVkQ5xmFF5d%2FAK5lLar06eCRPMkiagaNbU66WYIsw2pkY5P9XsulswidjbwSftmy%2FTMArQK5cLWZv6pkyFumyQIZE7tauYg853AkTxKqNR5nmwLdV8KVvVfg0OSrrk0WHhKpn9%2FvaGNdiRao4x7ZuSWfLBEKv66sIh6l1XMvTXjFI9EcXRumGyPcLqj3tAPVusefE69QdvSjwM3aiC0C9oRYd46nmz0BZ74Bv4P6U4Fa6ViUVg2QCCZT7dU0scPz4NOMRJLCRHkwr4C%2F0wY6pgHomOkwRdV14uHlM62%2BVbrEdaubhkSBhWGVp7cDRUCgaNaZ3WjtF05j688PBTeEyIWCN88OVilvXBAN5nm8uvRqj6d7aYztXgGzuIUniNIjDPXZicOH10GvboJP0Har4aEfqxYlBMdFeNdZPLrxPreFRaCl8XF65n0i8IyCRaAzBfRsocFlqqllUQfVTGdATdOJXreFVui45YuOzR0jdKSOebJjb6m3&X-Amz-Signature=d24ef99a7a7075b6fcecda35e6f6d9c9893a11b9059149d4d876bee7afe2e259&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
