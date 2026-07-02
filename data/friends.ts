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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCNSH47O%2F20260702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260702T000935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJGMEQCIHXMk1gnnRYGefwAFFh8XDaVFWNHbbmjgrnYz6qkuTN5AiBEGpaOrWVA0WC6N5O0vrLilEsCiIJ%2FW42lhzAixXMIgyqIBAjm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMadv51kpYR%2B6DALR4KtwDl3MLV8Gzp4C08aytzNPEjpciDyjh7AcC33vSCXNuLRBWvKhSP5qKUYva43IEnNJUuI6q9g1FW900ybRKfIXVBebqtFB2SxDAnKlB7AaHwxqA1MERR9JKaDpJd13%2FOdZDAberfHUy1gLJY%2BzQF5vFTHjo8opmvMFLNUECbTAf1CtSudaAGIgSMYmXLSdBy9KbKo2Pvn%2BxeXLimX55YOcBSdrM4JxqEwqR6oHibrDDlxWjA48QaCL6lW4bwyCnDQ8eZIvY%2BHiHQSTGoSbCzo2Qot50vZoqEYa14ai9YxwzzzLjWG1G5Zh0qHqjw%2Bng8p%2FMcZtYVaxHlOVOChdyIGc3rGjNmMgrXNSALqcfEsvPc%2BfFwa%2BFhuIlZXpANrSTC%2Fj4I7Fp%2FJ%2FcMteWKbbgQEck5XxxEyMTwFYRoCE0UxS4%2FgfRtvR2eCib%2BjQLZOqn7airqCRmxC4gDiW8WPZiocazUWIPsc%2BGUepcjbQfsuO7W1CI%2FyiQpnWidsVL6cCv%2F5xrrcPZvFk4Mdy5Wfdx%2BttFRnY2jY5dszPoSNeYWzVz9J1nikxvlzh43cDQHU08FttG2R9Oc%2FF91jFDpib5NZ50gCDNk%2BJ8Otpm5yYVtB75U4qvA7MO1KzN8ll86%2Fcwp%2F%2BV0gY6pgHTC1MaAiPLLZ4IfcCQdsPT45AGrmf7EcoE%2Blho6H7XItng9JT2ibVdD7GY1zG5fHodbn8JnSL5osmM%2FEdm7ZQOKIKP5jvHl%2BQfOEEEgmx24aOgsP7yzO5hMTTdxdCioY3hkok2AutBsamw7YXxHjAbw2BRnBo%2FpOaraT%2FP7xK1%2Bw01QRFyZJq%2BwYztOOqLJlt0VZdcCyOVMBmf%2BzxRpp5Tdk3zWrS8&X-Amz-Signature=8f9024faf52e0f33de76f83c43948793ea0a30cbd04dfe247038b395193c8b2c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
