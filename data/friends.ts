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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIY54IDJ%2F20260617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260617T061420Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIARV%2F%2B4eQflZ2YxAtTQdnpaTw0TUB0LatwvRXebCVhsiAiEA5Mv64vtzRLmjYEHrrasC08eLxZXvh1ior3abXfjn5EEqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC8Pp%2BJ0VwwpigfBQircAycGyElmbgom6mIOvGTjNoxuwtC2KRj7K6Jpkw1Y0NyB0FxaBfL4fWZ3Q%2F2sqxFRSw%2BZRQLZyEsMqXwZm2igbZf%2FTNXPGK27uViy2Vh3oOU%2B%2FZRV7fXa%2Bt5NeWV%2F3vzXO%2BZGifAsuz81NLp5x3Zq1PbUwcs8Z%2Bq%2BfuERP8QA%2Fj3PWgx%2BLQrdSWO2dVMsU4K54JZdgy3SE3zwFjSaDo%2Fm8mtrkvMOL4%2FWTcpp4pTubPYMe6At5FL4xYEZqLqQqL4%2FsBvnADxGYiW7JuEJFqFsQeSWPe7ZVFhK6mkEUI1g9T04FbCd%2Fpzu0zRWKDs4yyIwrt8DM15gbsSbSGo0OQRC%2BwV9PMSOB6IUSsotJW9CRPGtUH8zh4%2F8iEzTclejBBA%2BgS8omG1khMO47CEcVGUwEQrO6cfxFLSpxxzQj%2B4h4L%2FVO52cyvxeNJim08GUzpsyC9ATphXn3HsVSfKbWrtk3hO%2BIfjMeFWsGwPwFpFs5tzHjqf75m85PU5czXVNdU4jvwQmbQO2LQbhEGPfSFvIrlIJl8SvF%2F3MBGCFKcOjNbF2D8P50RCQuJHV5Z5bM9XnCCAD%2BcavxmZZX%2FBW19lZgRs8dQQNGF3ELcbFJOhY0jjSTTfLa0CG0OGjVsj0MIncyNEGOqUBu5IpmIvr0sV9%2BkSkPdDlk6UFeZlhtruWg%2BRQBq7HNpd%2FJMmV9TQP%2BDa9SX1El8jjJAzccUlesSlGdnS5dXlaZxh%2F163f8h%2B5%2F2XgzBVaITijNCZRFODcLM%2Fbtf%2FGAB3UDItynDjn%2F2TVOTvCnKa%2FPQQ4T4fruSptEZEyAiAvaF%2BVAyfntqXSobZzDWJt8Z%2BDMb783hixZty4NlsmTmpPnk5hBv3K&X-Amz-Signature=e99ae88595ec49e6ba187e774fb8af68067d5a3ba52b43854d22a356e984b4f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
