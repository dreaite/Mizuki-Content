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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y53JXI7F%2F20260709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260709T204715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDA3Hk5WHBAQ2pLd%2BizQDWyH%2F82AqXweRaxEzE4stl8%2BwIgLPS9SEsxh%2BphkmzmPyiqCrkKm73KkAYKCRzXZP5ihSgqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGSiu41meQOW2nNpOSrcAzrzpLaqzg3G2QBAj8L0FDPtiKsVlh3Au0nBgfbyAxsN6BEPafxW6pAreYVH01zqDtTIi0SjLi6WtWJcKCvbHGj7kwRstNb1NsQHjxYd9uiXvYK9RhpLFMAJprY2Z%2Bo05371PzduXyNTDxov1SPHhvBYI%2BDTt8JMMP1uIDdQifCChDafIAj4u%2Bi3dDaS58Y6%2BWIUcuesnhT6rOJOTTwCV9wSBIwvOms129dJ9IYzI9xICYZDWqCSOmsB%2FYZOi%2Bm6BxAkPfkoUmyAMmzI9oRohiL%2F%2By1wS2F9r%2F9PhGjdxRV2i1kBgEaHHTzz1W5SzgsDCfdnyDQ6Kq%2B%2F1VFJKIYMaSdF2otrZG0cmc0jZvF5VcGbZTm0yxhxtuNhzMAr1pdgDkqUz7iqdwDN8N72EICaZojX5n%2F5xzLDvDBsRz6COhOhtdPmsrFgMN6WgtLz5LLEh%2FNE8dndFhCgaF%2FIxxHPNsHMGSOpFn4d5GhbZxC3Pg7tSgUS6DtNVBpi8sWVu2kdp8a%2FOSaWfz9zRbdCRqolbiBCvQ5YvJhg%2BQRRSmD4lD35tWztoe%2Bv7KfKY0EWu00g8HIw33cfZymT%2F8yci3VdBZpvUBjY8KCCxk%2BOdi%2BWdzBgS%2Fg%2FcL0J5awDCdS1MKqMwNIGOqUBD%2FjEs7UfT7OcKhAII7Kz9%2B8o0L7GNBR3N4zZIXBDCurFSq3cWruH6tmopb4wAkPxrfG8OhzvbybpLHeaVgXFqrNZtCesZakWPPo2t3sgUOXGG5dVFoEW%2BflDiXs0Fw5MbTtTCWqvx7QFaAf2%2Fso6Sqz9NrK0o4is1UX6b%2BmAunWGU2UElqmUt2EA9CuMX73yzscOBAZG2HY1khqAgU33IW7juvSU&X-Amz-Signature=4b76154274c230aa9235576b8d5daf37fe18434311bc0ddafd70d250b2fdfa95&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
