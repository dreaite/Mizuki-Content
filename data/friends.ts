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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRQNB36S%2F20260614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260614T162356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIG8OjZJdss8NpSpTtzk2hno6B1GaUoVY%2BAgnHB0LpflCAiEAj5Jl%2BsKORCRTxfHLXnSlX3tMw75NGM8OWyAl4QidASgq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDIerH2RuYJTzhLSxtSrcAyosmXNHHkLDoynxXphXFiDL1nSXtzVT0MwyZLXk7i6cqyw3tL2cYaxAXcagsV2EayjM%2FQh%2BQ0ANYPj4%2Fn3HwuUsqKkBdKQgR%2B8lw52KXHIKX6ZT%2BUsjwcKfSVMUX6eXPChNypkEjuXEL4ESHj6NmTRq2nKtTlUflDqngo4hZRgLcctE5VOVf0E62%2BTKqcr5Te7L5TWNj01cyCSXSqYhKGyLVlxgZrsRm0nY3d7SmfT%2BNfbcSyXPS25Yi80NtoCT9wIF7hbtmJHGD%2BhCFelOSBvsOTsGl4NikIrnxIccgg7p5W4Xcn8mMzlPRnpDfk6ugyHH%2BSI24ZM6b2fyfkumCe%2Fo7qKeKlYTJaDppqok7zp6nyT9MdevhAY7s2lP8eUIITVmDC2CyqzfNCEZO%2BK1kKhONIq%2FkWuL1DIXUGwBfivXOkAGD2gvGhX2OO7MiEbqofr5UQxKlywbX8IOpLR4FmYFRg4CPKD%2BVkUm7acjjG8qN1ZtVVtvDPEwblD4RqAes%2BPBerQoDNxtF5NHIU7PWiam5vou4Rtk%2FjuciskEQ03ETRS%2FwxNSm1CsgM9PoK1Uga3TpWeqKlJ%2FU%2Bpwcrou48HjvkSiui83zWCuboc9uhCIww%2B48oFfgxWcTTGPMIfoutEGOqUBE0JfEIt4P%2BoM9QIADT55K%2Fey0iumusbv%2FfV9lZ8HK5K6fcbuEC2qsBvYeySolb3549dwVwzdx3urZe3ypiRRWBNece3sxqNiJqVbr%2BrGCbcWT1DJrAk5jx7omMe4Ghn0UNabPV%2BKDgINjOaXsjU6XXGWFTKmUM4jduGLQvfC46T%2FaGHB%2FRgNQ2fGGOK1KtEW8mFg%2FJnwoSOpaInmGfEU1l9A6ITn&X-Amz-Signature=69815dae940ee46cf03a189e5eb7c803dfe73419291b961cc939e46d3ab9b6ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
