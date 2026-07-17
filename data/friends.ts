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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YVA4OO4%2F20260717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260717T220007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2F6X3mps5BZKde0Xt4RwXlTopg0zqpQMlMnw0IIV%2BsPwIgPE5mTYW6jwJfJWMhxE%2B1HJkM63jzHDDVZzktjP1blR8q%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDA5ZGYRxIixeRUdZuircAwxCzXPlBXBbahmDIohPPPQFPtnHFDSktRFOmrx%2BKcpoWVmOTIJyW9k%2F3YSMlg%2FpsYY4M82gUwl%2FyZ76ymuqJLJg7rhP0ClGyrzfgeA3VfMZNaqjk5LRuNWrWX1%2BsGASA5ZnyzV3D6RLpnmFtHB1C7OvBCRZ49ej3lQnvl35os%2FhqkYzq4T2fktLdkTE3JujaHicuNYo9XwET5Bdgqhtv2uS5V4My%2FTwfTVpw22npTepCAur4WLR6h0PnGvhC8fPGH%2F6bAwrPGK%2FQ%2FjxhH%2FIFXE7I9AqOxB82cH4fwTCVNhG8Rvrv%2FxpdmS2XUBMa1srFij7oRc7CuBgXSCx4KyzRZv9%2BLUBYX1VFp3E7S8MmEZ9EC50RsbMD3W94NDGcfucnLl6IZrBBtxSj3kT0%2BS83YSXsRzCgpp39IQdt0ChhPzG684Q09P4EzXze%2FVWKNkj3z76%2FuRz1apk2XA06J2ElLx7Xj8mcjdAUkkHrD4TlLXDcCRCWve9LpHEUNJso7sIafUes3gbz0HUc4BakIhZm5CULSQRk1yDrEmfyTV1%2BSiFgQ3ksHIW1LJyNgeGz40MDxxUNHIPLHQr5d1rkpPLoZNFWPuPfhLnjufd5RBm4hjMjxwvXhN%2BspUgx963MO2G6tIGOqUB2s3Swwm2rAE%2BaLpfXdH307BsV4dRpGnSBEcyn88dEX1X5d%2F45Mo29OokVc7abgRGQVKy4d3yR8GtV3mnnW0r7e4BJ%2BFyIvws5xgFLTbkJ4ZUtdaTBUDrG2zYAE%2BrdJuO2kRv1jl5AumngvhPjmbFEr1fTV8QTPLe5kdX%2Fdo3A0PAaR7gZuJuqcEZ0lm%2B60vGGqHzMA3DS4trglgB0cK0Lr81Rc15&X-Amz-Signature=59a2991e0d2602d98a4e204c15b06fadb8314b834cc8fcd9983f41c644a727e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
