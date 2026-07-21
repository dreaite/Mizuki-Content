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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WI4JZCNL%2F20260721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260721T062920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF12yTevnAUupZLlD59ZcRllG8igtFDqgwVJPT0sjV1jAiEAwun7SrjwNF2Lpd0BKCQMtwEpNPld2sZa3IVb0LoMSSEqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFlAlaP4RAQQ%2BaQGgSrcAyytjSQLfhBLrWPHlrHPkkGvasIBCVySJukr8L0tVQMnaG0en8KUUapfCjw2ZXgNTw5tkXHviMzParJj9J8H2%2BHqSxsrgVqAvjcT%2Bea2nIdttNykbKHFaUysPeqS0dk9FSgeay6ozXPPCB2U3YWEitJPQzp%2FWwEmm4dfzR0fYp%2Fwd6p0OH0QBxO5VFdQW919GbIchBA73C%2BZDsppf%2FMHDiyE8QUqoa%2FvwhN7ezMwy1SeMs3fJrj%2FeuxJctnPItP6PMJ%2BJHKRhGHpxUePPx6X0fD8XCF8ACg3jX92n9NvWB9mJbxx%2BtLrFUwjkxURitrVlqJDJJvSdUBPTJo5JUsIlv1L7GDwQMsjVPZuhUhRp9Utz%2FBkGDbkkaztR6FVobfPJQLUiNWEuYHxCxPwhXJogHbxdDMY22YymPtXCrbrvUouH5l9QOE6xQ4hJlOq8K5FwlMM6U3i4CwQvOJpyqA%2FFWjxYYG80kU1RS3ZkOH6lJtvTs8KWV0kNSP7A0Jkp%2B5RLC%2BLFYAORXELqGY77NY72paPVxcIStfxtLDWLl0eOZYsEW0IJTVJPzwaQ%2FNsT63HkCB9pCAXoGPMkEmSNA%2B1%2FxVsoaTepT9egd6LJl7XUErb28%2BgI7bPW%2B3MgkNxMPXy%2B9IGOqUBZm5vKQS9lTTAMXWoWTfSf2jAfXvv%2FH2N7eUp6yYOKtaLFJjnRIr307TIFVM6m64mP2nAWOkoUovzMI6cN8pOkUA9p7MNqB6mhBmvs6JD7CHUml%2FvK%2F%2BYSQqHcAsaX%2Fb1LLrZKPQNIPAjnoB0GjXcfczNMoeis5zWvnYJEd09EfaSeKT%2BqU0p%2B9UL%2FmFsQ44RKjnYrpO0tN5f1ZYbTeGH6iIL7xU9&X-Amz-Signature=9e5e340b2fa555bdf020d08b57e1bc35ae3667cf0b6e47c8b5ddd28e13235b3f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
