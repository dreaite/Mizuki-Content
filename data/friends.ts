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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZEIHXM4%2F20260723%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260723T055612Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJGMEQCIC%2FbG%2FWJOvkrszHaGYQfDczDxyGtz1%2BRCCXrLHt%2FfWYyAiA2MPCR1AOTk%2BhIMPutxp4akBvidoEQWR1lXg%2BW9DmtLSqIBAjm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyy66KMLjeiMZQ2hnKtwDq2jzkYzqd70%2FaTUMZv%2Bp7fKl88dXuqnsLDR7lu5tS4rR6XY1S3mnsNkL7YPWHmMA58oCWhzOBUKpXMwYb9lE%2FIRdPT32vWRwmioJerKjfMW2Cr%2BUf9cmW63TGf%2FmEiV6M8ffOB775yZ2QLmaWV1mr%2FOnMgmUXXJNZb1sfMCfIw8o%2FYXOsvkSzgjvylAp5m61nADAsUJD8QVpPeywaxLdY5%2FtVv6g6FHNNn3N2ntP%2F8hbLPsebgfxR0L0rN1sscJdLu2bWUw8mhW9TWKRz2pEZ6Mw4%2F8zKqU3JIzdvlZ3MYyf4SshavsjXWsLJpYjcYQtSvk2GSWHH4pOQF67AEH0O%2F5jqhNyvhZ6zyyIvcIpKljMPDfKupjysNgBlvGNPCBalRt4jCqBw1IYq1MTgu0awKy2lno%2FPfgzHky9HxRLbRU1SH79U4gT9ebWl7jdFfw7Wrif%2B6FA4ud19lvngl7seUrDFR8%2BQc8QDXI2raMjaec319XI9qpT78CRtDJZ1eB%2BZdQ1FhnhZG3dHwmwHR%2BVxAHKXcwXKPeAaIPGjd39Ip2Yl6Z%2BjA5ZWhRHe1ry8ADGu4Yqw6U1GjJIjLdFbfSObK%2B%2Bx7muSCuaqObvrEjqVhQYQjO0KLDoZqIhMdowvL6G0wY6pgEDKmXlhT2UEuo6q%2FSnBOwIakPOBktreoPceDOjQ1%2FzR0wpoSl77dDBZlPPW2XTBxwiJEcHhAobrniAw5ZwCyu8ZZgGUVIbH8oN2lvp%2FmSIZEmCbdCdPFceNaGMxd0Wnl3gbDHxo1g0OJRopwoXTxjsNPv1QDtJlvUx6LKostizZ39KiYsG5kEYaiOjaaGrWqTCCVjI0fZ1yeZGLBuwcV%2BFdX%2FJU8ux&X-Amz-Signature=eff37f261afe705a573defa1d7b66b23b149ba16c274bd51dbb5c4e6ee5491c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
