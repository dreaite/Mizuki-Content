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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675A5S7S4%2F20260806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260806T055004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQDFEzVKeRTpIr%2BP7UL3rwkVSjE0TX9Ukv0sroo3U445zwIhALhVIKihygLh9Pg0jGVvEFle6Z%2Bm1N6pI93wQ7pK5XlPKv8DCDYQABoMNjM3NDIzMTgzODA1IgzPPOh50nn1yQvp%2FYwq3AOXkUNPT3s4K8dCRV51vKli4d3GhZulU%2F5qE6%2B2oonzImqB5q1a7oDYj2CX%2BQ7iEaubMXKLoQFyQB4y9VADHDV5WLwaUZH15ge6a%2FtONieW6w6bmHteGJnfQDM9lP4hhuEvOW89SU9ImQ4N261bQxFYcHlUmjevwZBUQoXqrjgH%2Fby0%2BV75SG1PlGwagkaiyYO%2FMNmdU9l9WSUBdz3y8QCK0KZ%2FxOfqvONgqAkV1Pj%2FCY4ilf7ruq%2FlTX4WEagyEn9J51OlUnseB6DsMQ1wN%2BYOvwI1sqlOe6ziRdQOlS9vsHq%2FCT3x04q4VyhZDg6xV%2BmQ5f1iQJraEheNJz27cLzjwflcUVBfSXrvWz%2F6UD2PRInczMxm7AIhkS41CgMQqWxWWBLQWjI%2FFAF0t5AidmMsZlUDnXXBBz228BgTkRXO315KpPVNETTRmrrwD3vs8umAyu9kiUs4LhEtvr1kh1roDndeqyHUx47ulyyFIIDH%2FFhj4IBSJSN83jvxJd2HsqsQsE5ahQtxgUwQiT1Q%2FvGgZtfUk1zISDSNxxTs2w%2FsFhKlml0tGaAPuwC%2BqzLXDfjreucO1BOehDfXvICivFBRLeziFp66k0XuzRggLOW97ybBULcp8l4l5O%2FXuTD5qtDTBjqkAeTbYHdOc9oPz%2BX%2BJXLRHXP6FIocXfStjqdjamKsjcO%2FbcPKL6OMIMTuNHl7IG9pq6qlHzeQdsLEkrOGMC75Fm4dlxSCdHUz029Lz0s87Fa%2FXLvgT3qRd1O1%2BiAs01w1HmMhFxGu%2Fvja44PS47gNQgsbca7BfrMeMVA32xnXZn%2B44PKKIBOOM0BksrSve5JGU0WJFx1lRSBj6rd%2BS3tdPoJMwX%2BM&X-Amz-Signature=b7a5d3cec07329d7444544380fe329f5da9fedb0350b43b27b0e1e7effaa142e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
