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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAUJ7VQZ%2F20260701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260701T175813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCICkiMN1LWArUjy2cn76GbYxMlFTBnR%2B0ak3p5SP4%2FSbHAiEAgLiXitYb7UjWzyljweS%2FtLw6HmwzmcqWww8AlvtOpiAqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNz32R%2BbJLoKeM9BOyrcA%2BoFewImg%2Fh1aW%2BDNATK39OVUH1vWiOpqIA8JVgRuavxhxOQPUnBGURNZf%2FiCgjIxShspyBlSuGAB6pR0%2BR9Xty6BEIlvpB5o6Ybj4XU7XRl4giix5ZChYNGutkp9boIX7evEMY%2BKkAYpkaKF%2BFZNRvKYIs%2BJHpJrhw9VvVgyr7nK3UvGUISL97fOEx2DHHRnvFUjZAdBn1%2BBhLltTDFCrsaHGCUz8NRZFX8cqKKWuxsgy7eNtaZ2QPp081ITJnW9e7VuTZrLSRuSWUoQiRUBYwglhKxk%2B%2BWGh1j9v3Xv%2BkTHZmK8HkWkSLbXrTH%2Bcgjk2%2Fr8Qah3mKNqI9atk8jro76EhC%2FkiRJfJYTcbhl%2F5enQ%2BS2mieN988bHvSFJlYeaz8MKTRpuLn12eox%2FLVg0jHD7mDGWDBot%2FK%2F69Ed7SgI0%2BCQp4R0I0dgfp%2BCg8cYmTImFTsIJkGUN%2BROqlnVFKjtN1dXekyp5wwnyg4%2FzwPqw08yuxqLzWFcY3IL%2Fupy0YpyW1HyWrgapSjV4tjz6Cob4Zs8iUVJv%2FnfT40nIErRhxxjAad580ZR0BbZ4Q8%2F%2BD%2FKJEs%2FIlyxY%2F7Rawgju5yCu7STz2EpmcM1n2ZWqH0%2BbX%2FF21uqBiMpoXHyMLWblNIGOqUBv3wd2rjWTSK1FZq8xAEw5sZ1ILJAA%2FKBwZPzt9sqk24iZxnkFr2cyVVckUS5xSDeCHL6M7BMM0gEmLb0zec3YGWdDcB9Sr9il0Qlu3ONiQ3Vkg0HofnfoIhKnQwHxYGQbeMR854AG1WKJufZK1JCUaCMqAq%2BogO3y695xvp7A61eGOVv3kaqb9U2jemap4IXZsGmsKedjxeOqvpbj1GdG0KOQdzL&X-Amz-Signature=b774d77478f4a937477cb66316bc89d5c9159edbaf12defa9ec2a67e6acbb62a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
