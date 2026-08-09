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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVG6N7VY%2F20260809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260809T163646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDuR725PTjdgkqqxvSoZ6bqMB%2BjhMqdogtOKvI9xXBhNgIgHWU6UNtq2KypXm3yq8aH0v6CIgCJ2624DJwKuONDBHIqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF%2BSdg2ZQ7dECRzhHyrcAyJPJDSkko4KGUDWGKaZ1jiCYX33hX8vBGELA%2BHCxNR5vo7epCgz9UC%2BzG805DWjBrcsmnz7caNjUG7vD6wIAtQv9JPZxozQ0j8kVeHNnD4SCAXKVoNZJWIDNTPpYop5yT506aoMfchX3QtUjnR64zDqTfHlq6nB4NDUP7aUO%2F6lfgiEFsjrMG2Jhy5A5iTnE0qvUfF3dgvTNyX75DioGaBHSExKCsi8zRt3PxTmNcpdpCAriOBVEFqjTTVniTqWwC7o%2FEaKrt2QMI1HnVj4qv8LznKV9a%2BYZlKBK7snFR89cjRwC2YCzuzDzeArJKhTmdsiLUm4h%2BN0FvC88vkm4ag%2BxSHymkRU9fXEFW4gTChb0ax01fPsOVDetD8bZWHQVJdS0divFWXE5ZYPMFUHdR3Ow5lpjxR7XcR%2BYdpITA4J4EywuhUa2yO3Dp%2BMuYqU2m2OF9OXFS%2BPoL9k7httl%2Fnt2dr%2Bl0haAjQciB2BcS5BFcnKPpW7cAQIYHqgNeEI3nL5Hlg9ZzIedG8so1Sg9kJMYk6nCO0sXzzhuKUR9xhzYamUuKJu339DwvH82kRV1BQFqfx7nAN3DtwfVXrFClfYA99PbWe197jcTO5lKYVTwus0kQiIkrul0jpRMMrF4tMGOqUBFc%2FvyPpDzobJdh2mloEcwWYzl5tccczjgDKc0uvytft5rA4llWxTfG%2BQvXNR50zcXthV%2FIuLlWB6TiXBm8vWf89ScdufoiN7m8606P96rpJ0ODaQWbAAAPvIn1U3qPE3hoXlTMlDfREWKyQOnYMtXpdwuUfWRnHDb1Ir25aIPDnqO8U8ZJJtdILC%2FvDsNVu7wGxoMS85Dw7nZn5gr1o2AA%2FS6zFk&X-Amz-Signature=6a537779a2067ef6a68fedcfe96bf086ad12605500b333a6637709767fd038a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
