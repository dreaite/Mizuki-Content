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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665X2CHZPO%2F20260808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260808T173142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQClUWRcfGawstPd5rkGwdjMEn%2FlVBhGLAyJfvHO4IfxOgIgHtnTzb%2B%2BdPmVUyoemnrNJTMFCWMnnIBmmc3jldp8%2Ffkq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDIN4I6GlORr5IsCqkircA6gsQo7v93SXpJT9C%2BNL7TYGzoDJMXNNU%2BMt5vVOOh472VwX8xtnDSi%2FWL5aN39JYbGldJKNBYYRWOZm5jnmMGKOXRbEz1rMiS4SkCPg2sQAORD3xrRE3KFC04GyAsdtXGkcYOIolEvtJXC%2BZL9QmmMbb%2FPmvi0V2ZGAqaSS9G96NZICULN78V7giSd%2BhcHeDdBeAun3OeJm2U5AVuztgBSLpDqJE8QobuPEhayJkx%2FyHFKK5ogsxVFP%2FziN4xJoyjwyEc3l%2FpCetdJKVQo1%2BK8Vr2Bc4BTAbEg78FqE3GsjkFk0xWyAQ%2FCDSFK45QeNIwpdbwqo8wOvGIAcMo3cLGWg7Xtyw8cYpNsmPD5CNdglOOrkBWhJRwfSIjl3MgLY%2BnW%2FGtE8hK2ajfRTBCas3E%2FBx4L9v7KLsxFa2YqEAnetYZqolhGBN3xURbexaXYqWBqE3xoRfr5Hj7NI6H0q3ug9sgeP1ejfO08SnLf3xg2SsY%2F7sIYLGNn4uI%2FyZpWxoPCHTIMwlb4dZoNN5eImbqDRdwqF15v6kj9hPjgZU1cw%2BtcGsriD5AW7eyE%2BkqqpjsKj%2BrSyxCGPi3b6N6bh9IqKC4LS%2BwYf8GTvZjjq1dwpWi%2Fy6d7Uol4RVCB9MNqh3dMGOqUBBZyaHnlg7s45XtJ8QMH3K5FfFilnjdalerT%2BzVuAA41gV0BXF5%2BwdHRzp3ES9VvMhwpN14%2Bex0lXPSEfkjm1hQ%2Fm7ri1MiJjHLvHyq0ra%2Fu9Ru2j47zrBr7A1izY%2Bd5nmoMT22e5jD7BT%2Fe3r4QP3m3tYgK8JzuyFn639VCXAm1vu0bhjalIseh0ve0pe9%2FPU35z1XJBdBlK9z6mWTexXE8mvLTS&X-Amz-Signature=51c9e0d49c6c3e0a82746d0d60c98fa615dd37669de8a48e6f50e3a3236d7385&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
