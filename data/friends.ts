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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BFFK4QH%2F20260716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260716T225735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHFcUVRfaIBUOKP8gkuIVTaP%2FiqnYVaHC%2Fgoj85WMU4MAiEAiom5s4HT2ks1x5A6GLkO71mArT7Qc8MsUIXB0f6meq0q%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDGg6uGT647qJM7o4lircA7wfqjM%2BrhOzS%2FnuBUvFl7IWzepxU%2BBd49XEkhJiUv1LqdW2ND62Ig4sZxJU4HffjHUlXsOPpCvsSWotRPSyZA8BiV9Kw327bO11KOa2cYImEjL%2By5hQf9csl8I36PcVEmrFKvBIdpNNhXEOTjREK0Wajar3NaaePIHlwpbobKHtlgCCXws8POkiheuDkIzqK4MQGHdBK%2F7fziol4fyVty%2BNdxKnJ9Q48DezT%2B3hR2EJW27RYaywPA53J%2FLZ32MRqRK78cR8gkZIO2l6Jn8sLaQd5Xdaq8P%2BHRvA6js9Sijux7RAWIb%2FQhIAnqGR%2F2p3Py5E3hH7jppqhnwy8A9eZl9AGFmQM7CH0fAIfkjq27iC57SYDzPurj%2BUv2BxKl5NU%2FL5KGHDExuUNaS5wp6cVH%2FfJNTcBm8omSYMW69n0AdAN1ptKBxEYaWubfaPAhk7yXNCihYS%2BSSbAUTSTmdDss6zuvU%2FPRC9aC0KC3NETK3shH3fvJuEYguck03IOtUeEmLbyPsN6NIE50bG2uZzB8eu%2B%2FLEtt6d9w2KCsdy9gRbFwc14yWVOW4KQWtb%2FNPql%2Bbr%2FTD12fpbSBXGOea9sQ4%2FT6xi90go1JxRauv4S7ulrpQdfuyBLOpB%2BGuyMNy%2F5dIGOqUBAsTmkk2LnsWaM9zadjN74fs%2FY37Ntz%2BcLEdVYnaqAudaOhBeSS8siNaVQJZLop0tjOMJRRCjEh9zRbTqfIQ9oK8HRzGmpaf4ygQXVvWMWUsTaCJrq%2Fsd%2BKqlHefQGsR%2ByJKfDpNmngOeU%2B1OCAudKP0yLTiERLCX40p6hPAZJ4aOS2NzPTSa3aqHY%2FRIBUzZD3AL332Ga2nqvZsKqNRUPKL85mRq&X-Amz-Signature=c23b23e9b9d13b9a91a6f7b53312731014357ed7c8559f508aaa344c54ba1c47&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
