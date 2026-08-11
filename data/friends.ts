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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLSDFIBM%2F20260811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260811T191246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHAp7Blo3pXUMRZrhFCpmUvOVor%2B8ZitGYITxRfTqKbyAiB4NbBhJcSBjhNyNu7FUPKcsZJsx4LCRIhzL1kf%2FZ5FhyqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpYDr62s7EvUrEOreKtwD49dgp2dJEiPXugDBjz8G%2Ftn7J8fXuD34aaJv0uGyWrE%2FRZUEu5F6ZysunsWxDYTeolpkIdqO5Ohu%2F8pAL2YxaDoHgaERbb6ShJSUyFArcL%2BnkUcIB7QExj3xhovf1UxRf%2FReoN8p%2BjwEeUGxRUbNZUAEmiO5kdE6LYrnbTaL7X%2BWriR291MThvR6L0bFdm%2F%2FfrN8oaQNtuDOR4h9Cu0CGdwpMDecpIqtv%2FqZ%2Bvorez%2FeUFL3fvhvJ%2FE5INYFWZGfXLuzslo4pj3DJplgT%2BCoPZja%2B8ablDRsc12cL4Q%2BSl0m4bKg%2B8c7P6zwbfowYf097ypr6OEB6VY2ciu4d491GfPR%2FezdD3Ztz3zeT3cKhGGmyGw%2FR7HMso%2FFBn5KO%2B37XhokdYD445dJGgnnhMh%2F0vdoQzExRRNuIAqQ%2BgSx391BEXWCioxJCXyz726PmuhxPekqL0Sf%2BXgfcVNJNC5eaFkQdK60pgoYosgSaQ12TVJauZ73vamwmtjFVEnnJoDrV%2FPE%2FggGZ5sUf9ME1qq5WJieCXILBITG7gHBTPsxVHTJLmSW0KZihnh%2BSeXzYJd7fvJnfOIC2ui6ce%2FLmHTvKX10YOk9H1hLMLgEJSC9OR3958bi6ief4gesC%2BwwkNHt0wY6pgE8cWcEUcUFbCKLwHI3ezKtaqeNvR2Vkh1McQnk0tsorHbe%2BVnIinv3IQ3hSfJE%2Bp27ShoSbXoOQPmDbr5dFVs1O393C6GKVC%2BY1ZCAQsbkFx5H%2BDwUn7L3rO6eMGlJ7FWTctOwPrsj6LVkOWp6c6H3tNGo5Le%2BdVH26GDzDB%2FCw0IELNxDuLAoPqi4LI8fwwVwWSjadziM6aW6fWuJP561qREfQETt&X-Amz-Signature=9aef6a59995875c1da63704fa0b8d4b2ca84de5120545a29bee381dc1821ee33&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
