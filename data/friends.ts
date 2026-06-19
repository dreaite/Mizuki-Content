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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SA3XO2NR%2F20260619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260619T202708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2FfcZZymh2CTrrfQXMlmEvs%2B0HCHRm%2FWmIMAq%2FPDgGFgIhAOEJR4FTeStzVOtJ0Z0kl%2Fs34%2BXdegvXKKlIPZhkAHdNKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxYG2%2B83r3QlO4V5F0q3AN2MGJbkKY0Bbge7haAzwzpmOhTr0q9ODoq%2BVA%2BYprf24KnCMuUnK81WVqWW1S040v4FEPkaUsxSFev0jeH0aC8QBnO2jV%2F9aB4n%2F%2FVhnCZxm7rh%2F9Wk9szOkSb5Jw3D1cuWQXNGZbc8j4cJjL27MGgKV2qRPjGNI8ehpxYLRyit9d83%2FyD2C8%2BqyiH1aJizOQu2im0IXPMT08tbHkDfSab0CImhu%2BPS8iHMp%2BH7J7nT78GXV67CwX4DQa6gPAaZA49pAx0iXn4hXSLOOpB6ZqQ13hX8de7F5Ad7jw5Rw9L09rE3lAxflvAZ2dgfRX1ndtO6w3LdexlnQhtz5LSEG3lDHV6YDhFDczy49Y23JysV8qrzm05K%2BJxH6RyXQHQJuLYnlRS29bM5ezx3eA4EKimRJfi3ocOmEIwHyerWn8xf8BK3Ag8Q81bWTjErhQ7swGH%2BB%2By5lG9j2Vl7AmaYAi%2FZwlCJeolb9vqfaf5pfbX%2F9X4UGq240jgfuA41wWc4ybxrx9wC5D3DtDyzOq9%2BwFp%2BmrGuMLMnKFIe6%2FTg6FuT0tbLHpxah88T00P5du5jMs78w30srhskBPnH8YRqaCr2QR2DZYf8pW4AYKHnr6TFUviVOx5vLgWL7AF0jDGvtbRBjqkAW27Dcl0CC1QNhFQnakKneXEplwY%2BgAe4vqaEJq%2B%2BHIAMqxZzoxqkqxDPaf%2Fi55gWxM8EI3tMSX1Z4gYgRe9vY13aKem0rDJbptb7VPAOceO5bCjAcbJ%2F0v0VxZF4amFN8Gsii3hc327xy9kwAaXnBiSY2gcQgMoj%2FR3ZOsuO6sy6nSj%2B8RkuYcJ17IPDu3B%2FRdhcgTtxGmTOhNePjFQyVAIVccQ&X-Amz-Signature=66546f77849aa1358cbb2eaeb5b9ec8e8bacb93cb57708ba6d60e65de93b8243&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
