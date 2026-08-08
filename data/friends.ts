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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WBGV4PV%2F20260808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260808T143231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCYLud%2Bcaca%2B1CZ%2FhPW2ADvsqlT5fshcMdNFu7NwIbqTgIgHqspvgTj7CqOqS%2FpUdKUMhvihR7mCOdyPpcwVWl9wVwq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDOsF4KZY%2FPRrZQskpCrcA9wh8EXtnXYSMO83%2FGnD1b1%2B8k36DlkYDP0skp1wWzwb5lTIO7Tb2fpqEZUeGt%2FifDR43%2FLP54ihjY6nxYu%2FedDO%2BziqffFYI2jJM%2BfTyzJEXm%2F%2FA1p2ftvWDISdmLTyZjs%2F5f%2B1Vm2lyrfHRFP30kbA%2FAK57JRNGIOdsCZDyOwXyK%2FxpFb4KeflLFKzz5YQT9Cy2Ol3svYhvwvIQzoIrqyUN%2BUSrKrVfkrCmxe1LaxWM2FoYlblX3WG5Ar9%2Bc5nt1Bw95a5e6tc5a47lXvNOUdDujgsiGktUOuzPTzwq0JVJ3jm2vXuPGPJZDw%2FVGR8Kjtwvx0s6EZbx%2FBMyShTq1dygye%2Bcvz52rzx34YmG%2FaOnsxZbjEl52ef0T%2FhF9IipqfzbrfKRL7x9gYsHI%2BsX4l049r8hE7bOCPMc%2BtTx60Y3rsbz9%2FVorj6IUYhoHQaTgfuiDONVAN2jmk40VllUVIcs22rCyXAPL6o3zvGBX4BBk4SuvdPSyUosC9kr7692SI%2B5%2B2T7x6HptPTiuHyg%2FGKDKEclrkF2vLeGO9gCF8AqqufBVAelwlFhRaMdfwTtMswlz05GcL3KNX1Gb%2Bdbs6aanpf2rSvkN6wj0YTSVCy0EwesxAgiWnmt%2FrIMPHw3NMGOqUBP9X9II2JmHxED53UZYg0gpsme1vW0cDwHRg5YhOu8YuBGU7%2B%2Fm9%2BUZ2UyxbhTxrvjrfRqAc7Xt2%2BQZVqDfi7cVYVmPEmU43EqY7a79I3Mbs1Z%2Ft4ZCmp9NfnalI%2BzmuhrN42y3mvJ100sdnB65mX%2B2muAcTerdANN71XJMLaHcB8zwEtpcdJ5x2ovnU%2FADDF65pYx%2B9tCQUzzfq1sOfr%2F3GzNlrx&X-Amz-Signature=d1c2e6c39c9821bacb1e24fb71b8c0930666f87039379e347e6942ae48b3aeb5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
