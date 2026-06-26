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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQNS3RYE%2F20260626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260626T221528Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCwEXSqhusjbxVS%2BQ2vmSxsgn7jVTrrN%2FwcXa7YNWmErAIhAOTAhqgVmg2ZkxS27qxaaM%2B7Wx%2BCGKdZxY7pmDLQPT5KKv8DCG0QABoMNjM3NDIzMTgzODA1Igxpme23BahNeVJKMhcq3AO5L99wWOoSHy78wqH9d3Jm4kPO4%2FVjrJ%2BNFqkntOFRf03nEWhHXPKx%2FsFjtcK91bFKJFMVFIhg3kqgqBqDUda4Mjn9e6jl42uhBGlSXBtRwWvXEMCAVcbpPuPN95k5pjKYdYLSb%2FOJtVGGD5BisQ6y4E6e3A7PoqX8FA4%2FAYmxRgeShvayy2pjY9%2FjMSsKleipN%2BA8nWgeTViSDPzSjb7wlxg6JsaGjeeP4JYqJhOm56FSnOzkyAm3l4e3jMfzLXU3TdznY9r4p9NJVerz3bRMHl18vGKEbbX%2FJowmDsucZvZYxCV2Xzj%2FXqxqiaFM6wKCvV2UQAqjusB0XZ15UttkYg0KanTHv9cvEF7YNNTY4%2FdtXsJY5c%2BsxAjuk84PRtnXe5446nhuejYLcBGd3wKff4uF3uURTPayPCtkiqpthgnU%2BnoUDRqp4SHkdD%2BvGLMLFqUZUaIBCLfsc%2B%2BGPANcnhnw20acKtJQQiCjqk5UjCsOX00iXGVMyj%2BuS%2FjqCZvYQzHC6rxHeVUdlBthqMdNZSJJmYQDyo%2FZ66GXtkgW04bECMG3ln2hKBdGpwFVCwQLv6mn5jU1NvtV2M4o3stc4vByuop6o2Pke8IzgY68%2BeyQB0VqYdiQdFqiIDDKu%2FvRBjqkAQpTJtvxZ1bhAQpkAIi2VaoWdawup0XyS50vyzaVuaK%2BHbIf1PN6%2FxIi4g6bmX41uIh18kpzt%2FRmzCpmpkoKkRXks%2FMHsi1%2BCxtb%2FYyTOjjST92Q00eNpR2%2B9Bt%2FhIFhOEUzgg3HKxdBYe%2F1UQlITSh%2Faa%2BIztZFZ0bY7UFUslqLfMMOC8sKpQiJDJDNOCN9C0TIHDz%2BLr2yrPYkW56zahB0dfpc&X-Amz-Signature=589b514930d151582868924ace18698a69893c92ab2d6010c53e93edb04ba962&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
