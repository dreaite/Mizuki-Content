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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667F3OSUZY%2F20260706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260706T102630Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCXCVqX%2F8uCwvPR%2FvfLKsPom0MceeCpahcYmx7lAaDbzgIhAKx4R2U4TkWBKEdyb0Ft9Npqs5Wg8TeuYCyfPaUVX8UEKv8DCFMQABoMNjM3NDIzMTgzODA1IgzkwDo64zVJ%2F71yZpUq3APvTm6%2FsdB%2BpscTZ9t3Wo4OqYWnrFlw0ftokcW4jWkKV11ROStZkkLRpfqb8%2BncOji4dPrfJS%2FN%2Bx8Cbm3i9V6IZiQ1Eh9piv%2BmxZbaD36MSOteLqzBt4I4hoGuxiyS8DHsEwbkwcHLinEyAvgO9qidtLaLyp2bx2uQJtQfxHOWMXbcEtsRAsaVejP9pBVO5CUP%2FSsOqEhACfg6ruQQqTOyN%2Bs37FUEvmun8eHxWBeE3PxYY0dqbSSIFS6V0iXqYXWFo5a1o84fCUSazL6vgEHD4bWR0pSCADygCknmz9BeSYqxyVynC1vWx26bdFFofdjkZfNEYsvttZuMSxl5sJaL0u%2BsK0NXnS%2B8kAZVfp%2FQ%2BJ%2Bv4Lly6%2FIUvm6IGkwdqH7X0cgSZuNrBdTAzUblxqmY%2FK6zFF2vdcpm9spJ8Uk58S%2BGTRSS58RH5hxgGBAp1qKprg66tgqqdWMmpZInUhYIrv222Hm3sZ9YFYp6c2qmPL5jXi6rUoWIzRdWO9p3ePwbplbwLZZvbBo54V4VobDKo9zQR%2BBsH5CnL5XJCZzrndTT69RzqeMg7yhttUZ4CwuRCIcs9jDVnebdvOXbesamkmGtKg7SDBS58C7RRjystBBNEtAiB8cf24QuMTDK%2F63SBjqkATxdh%2F1XpLEdNML43YHdrDNzvHdYoDmi4%2BLDc4SbmsuIoyPpO7y2t17i6CaRsT335yTnDsAHAx16hV0ls7umJfM25fJ7kyLP1wqkQfXOv1HlonN1qAGTQDrmjAosfBjRtXd9p58h3x8Bu767G%2B%2B%2BMdvbJHf4hzmB%2FWuYEppoYrQCAtEgP0ZQjf04jM%2F7Ja3ci7FNf%2Bfbo8SrUjg9%2F1c8OqATibyp&X-Amz-Signature=37f5cc0551b0d7a91369aecc3b8fbc478feb1cc40323c5ded83f38a986e9e203&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
