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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDDPAAS7%2F20260723%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260723T025321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIGF7WMoFpKmMuAsAxnqvnz4hGHPkalKdzq9iCWctHGuGAiEAlu9DYUH5kDgm196gCqqfQVfuDzxnF7eiLatsELg0rQQqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAixfN2O0MmJTWlK%2ByrcAzyoq7FP0EIGPhwRlwWCtbUBq7ZoeXtciK5TvOde8VAqfLXpRdKzvyySkI4DZBPrjVXG%2BebG7J%2BMDnykUgRWSig%2BPSm9tUsRhrXk7PWav3r%2FHQB4g1s%2BRAZeelSyxn8rCtxamU9hZJx46GXYkR22nNDxVdztql1N%2BRm6jQ5hC2044MEx5kF86p6Ukk%2BVal3wHuKz%2BoXPTk9b4G97osUtn6NzHlWnyVEutc36F8hiFsxoI%2FAuDnHPpkIteo%2BSKMD5vIKgQyenKkyrSW2ideiaDjngvRldA9vC6M9b%2BVMXnp2AThDk%2BMAwjRk61L3b6ezUBCGLQ55Cq71a83iEGN7P9nnO%2FV%2F8asSj3mG1raskGZT%2BB1UZguwo4oRNPJ6r%2FS9re2vR8KkhaOBBG4dkkeOBYtunih9s63CDndleuIZGhoeL%2Fue%2FJZ%2FtNi0dK0tJqTCcNudaFjP3MCGqeGEmTh3tvtyiXb%2FP1l5Yr9PtnA0EEo5yuQuR3%2B%2FA568BcjGIxpfA%2BBbJX%2F8AhSN9cl5LeZwN1f3gw4sblS1IjsFHaoHtI6EVKqzDY4PgnBdea1ueJjLeFHbdPy6jPVOaijCKNvLIUFH18d%2B%2FahIesZwk8n8lZk454RjTSA%2F95zhvPXHaMMPchdMGOqUB%2B8U0g1i8gO3NNkmr%2BycuK421fJSrIzpa2nNFhifaHk52GGGlZlDntBnow8o69qBt9aaB3ojsHspcYuSp1N2nzEZYBnKZXpYHh3fG8bUSMiqD6ycmhsSQriZVv9v7XhA0Cp0z0WkEWuyO%2F3aqE7PXMjpzTjCMGL6CNhDh9a%2FX1XzegHtbZs4jnTOoTiO2qJ%2B%2BmQ3%2FdvNQKASdPaZw1WUPdo%2FO1frt&X-Amz-Signature=fc28bbb8c2517943a079988b53e696db6df9d426c0b11c4c67859d789c5ee35b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
