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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6SNMW4V%2F20260629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260629T173849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPIX38kyS1tOoQXo7aXQcFYGOTE%2FH6oRa428l0h3E2LwIgBZVyMRo9GlMM3xfNbIgR%2F6OSwg5qf%2Fb9u0a%2BHYrdClgqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKMMzPkxW9oIgMu89yrcA0wzv2QuGGyd3Z84Y31AKzgkW4yBxATBD9KrmrSI9sdMIcJoR1Mv4R81dxvfdda8tjrakYI6w81u97tRPG5Rxty1jyIqSuPfK5QxrSdfYZkavc7pYHJvndnBSxhSDRfc%2BUdxK1rhr0AoE22h0abAW66Tbukv9xJqDhjl88KI1nO2d80tl4epLhLetev69VheDITg9Br%2FkfbUL29dnJBBsbbFpKQvGVxgAI%2FF0Vpx0A8gbW3eU%2BU7zCDj8qGNxedyqeCLAPZhRbcIBckKVpNiw5piIPv9UqX%2FN66U1rh0i7GIM3nmI3ZC9z3LYPCLTDU4VZ5mjm3JgBtJi2UUjWAcbNAaK5rJq0ssvReVUXmtmrEMSnAudUcFPeC2IRYjNrXMXrGxMCf99o%2BwiHjFRn2INMhf9K1fyWQ%2F8f9cYO4fW5VOkXL1YyLd0t%2BjXis2tQs4%2FNc9PpNLcj%2BRx5QwR9IuWYWNxard6TKukDuvCUoVMVHq80dcWPKKJCgeBKq8IMMRzI97Fv88dIp3gtasMV%2Be1YIKswnt8BGD9KfpiE8mrow6yuKIIoqh4FWzFdWfZ9sPmh1fMFUdvolq3oosLAHbLPqpe5iIa6Wf9m%2BygafdckglOoczZjb2QyN9e9wlMLzFitIGOqUBDCXDZ3cl3a%2BK5ThuR3kX7SLVbILD4vSfYVjdOCJaCqtJ5uR0odDpyxQJCAYPscST3ZmQdEpdoIzWlM1ipJNDF9TjfrgMqhgMNlrMpzC0rkjuIX3xfSSQj8kiR%2Bu9N41f%2BGqNMWcuFnqBtE%2BBSLJc1BLN5F7%2FyJDcd2h3WWclf6er%2FLzd7Xj%2BmS4nVPTYvQovPAXcjbYb8LLuQITyb%2FmdhhKpirxR&X-Amz-Signature=aaa4b2e743fc8f62bb91dcf16c4f2b2f95bd62b464fb1573e088ff523f3f0cd3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
