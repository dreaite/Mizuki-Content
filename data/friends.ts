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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIF7RZND%2F20260804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260804T221328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJIMEYCIQDY9jCKhFliFGbTQKtftmXB6x4atr9Pi2pzCMVaJaujAAIhAOhYeBgJ216fXe9N4dVRGnaExLDvJsARvDg4TY%2B9R99YKv8DCBcQABoMNjM3NDIzMTgzODA1IgxwqRNT8CzSyz03B1Iq3AMHWx1iJQplskTcTRtiXe4P%2BRbYvnQHY4%2FEZBWTIwfiw9gpmlW51oPBPYmBa93pGtvlyzfJkHtQPZ0kQGyqICIAYDuCsxd0nekcQ5Cl%2FFCMWX2F2%2F6NOKLfvf6hteiNN7XQhnEAmYpk%2BrQJ4eK4vOg1Q292ForO%2FIgltIAWPhecCpzVauGMthbqs1OjpKrNiQF1s%2Far2UL%2FQZ8aK9mc9XJJgsmQDF3CtYkwftPF8yLOHIAbgTR61telsGEvEP9QrIuVYAFLpWzIvSpKhTOAjqTQIGfHuUiA0TXaTp7PK0E4dxdDDo4%2B2Cwyh16Fwa9kVH3w8BFg4GG%2FXlMREwZl641eUiwxIZkCZpII63ssSJGwuO03YsCkfsNC00Zz%2B1jz3rZShJmO5Cx8%2Fp8xkEJSyf%2BgwewTaE4aRPn%2Feu3nwNpveUFs%2BfTTNahwsYZGIQJyd%2BEdEbVbiRqv5lezlqvHewvKCv5agf9um8HvELiRIoFw5afCSU2xoC59SDd%2F6zhy%2Bd6VUOf5kKHnm1CuhivESdyeXgu6w6l4ODM2xjljfW53%2FWtI%2FITXvuWrJNHecJWAB0SHsmfIwHVD2hDkqWIv5ja9C8aj%2FWkWwHGIJQZrfBbv8p2ecZun5j9DXXJKdzCyusnTBjqkAertqozh8dhuw0XZna19yK1XttfWJAjfwE%2BS6MJ%2FftKH8S2ORUpGTHnKs%2FDqmRvTDhEeqNdXz3oz2V0Z6bwDqMZKOvKwPz2BONgcPiMKo0FckaTlVeITRH6Z956KrW6UV%2FGrVLsqfN7lcVra4I8sIQQ5cF6ZN2nakaP03ylX9Qmku%2B5DbENC3t%2BxUOoJC%2Bgy8hbh4L%2BgS%2F%2FQd4QYLyroNMtmZKvH&X-Amz-Signature=3e6f7288066e212021634d5e38cdd311b8eaa45c2918065a0c4185344cc5bb6f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
