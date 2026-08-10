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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YB57UBM2%2F20260810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260810T205126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFnVD8BP4I%2FFgAaV8yBYtYJSL5xTnQTj0Z25KQpph8bdAiEA39yu1hVw2Ihv%2F5eVSA9hndlRN7gxgbGidpAxoEylTcIqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCjNxZlw0DbHF%2FRwPircA2LQlhH%2BolpCkgywYSn0zLfpI3Mu8tlZBPoQzBj%2FB3hXersSzsxW6KI2%2Bd2pKRM2ViyUExx%2Fpa%2BD%2FPeRueAHYHz28llBXGojUd5c5PAwVcev8B8dzJkbJNOmxF36a21Xie4G%2Fa%2FGcnN2HP9rbYSR%2FNGjGhzHDRi1Djfg%2FCCvvaotF9rcioPThHmVesUI8GBnTNVezg5eFcHh5JYLnA60DZG%2BwWVu5vZ7zKhvxsEwELIOEZJYRye87OMh9%2Bind%2BLVjXUi3Ke25Pf%2FdEjyysQVRYc1dlkzBQ1Y9LCyc2gS4itXdBb0LjfsplIbpm6ChpAPJs4OPE9aHT6xqqGY0U%2FoN0ETQ5NOPr6U1jXlT17dpyBeZUfPa2jgE3FazuwfG%2FNRwMWcgSXMBi4x1OZ6UO7YoIhME3pR82CjJjpvaSQJv7TR2PklqMTYJ5%2B9YyYj9dyOEXYLeIbtydDvgE46GRLhTBQd1PXQGbWbMzdSAbD%2F6hqW1C1fj2v5NX9e8t%2BTcmTpDbMPRkq0%2BhH7TgmjFIK5tAeQICZYqBZyBc%2BrL9KXe3EAiwZX51IfQPAbkOfK6ZNP%2FCMY%2FwA%2FD3bY2rID1zSIrADtMMiUBUx1HmYWsUf2CoebOScINnJm93FRcZlXMNO46NMGOqUBEAU7uZY9ZN67jFQSKnEE4AlpkNH88hUr78FdNP2tU2KAlYIUkr6XdKVAEJ6mramMf8CoLQ795NjmF6YxlgL72FtUvDirsvLt0TKrOFuynL0TKzdZ9%2Ff1l7422HpisWi4j%2BrwcaR6oqUgMOyNRNmUDtm%2BODLwtcVr9prFLgqXfbmX%2Frx6c2NB2ZF%2Fy0Nk%2BOZybGf0AGFqCScTPaKqRWq6mqIuneJI&X-Amz-Signature=8fbf9505edb223ef046798af423087e718eb641d65b41da9a452cc1a67265bff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
