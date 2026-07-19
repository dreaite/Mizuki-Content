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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SXXJQSB%2F20260719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260719T160200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHGAfu0Td74v2oy5fx6StZrGoMeREG7xszwg1eUZhu6MAiEA3BtXOaXl72IArqSgVnqNer7LsgAxvtbfPcww%2BMy7ha4qiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL%2FLdu2GO411Ibdq5yrcA3f03oF3l2PkuvsfOmf5UIf4nQN9g7IaEFPSVCyMkQ3wr0D5ZXEQGeHaBGNtfw3p9hVkYDSg3oft80aYYeJfGLP90RbjPra0IMRd5prmenf87U7WdmxVxsypCUlnkptjQ8It6VIIIIdk9%2F3s9iPmyUoVG0hb36RQgwFdSS9vqrsxJLJsm8eCXrJcT0dsGWAyggJG6vkdFQVd1xZP%2FERusv1dQiHpVhog0h4cQjowXb%2FQq2YkQ4R8dBqnRLwJ3sYNpkJ58QNl%2BqXTofy6EEXz2VCntjzU6LWQQCVYEi0sMh%2FCVd%2BL7ZWnBYgKgLP42hm2QscpNECmHP%2Foc7lJv1RRXhCJlCvvwqKJ%2BYi4zc7S6wB5X1KimAxWgQLGwe1MuJeHgiJ%2Bg3qhjIFL9VvlnOyiIhdK078izgSBSfWGqWz7tbBJ9hvlzMo%2FMLsMUCpc%2BU8SdPLieY394M0V0a7SMeUAKjyWSHxa5srJz5OTrPAnCWSVpOrqEO47%2FvNLbX5AObnH0EPghcgAF5dvxuY%2FV2gDTZ3LPec5nnjbdUy5bRH11vhmkKpJMemLwDIxkrNktmAhpw8H81uRt57dP7P5Jk%2BWQf2A%2BufgbfaiDiDModXdLHXl3SrMmcHz9KQ8vmerML6h89IGOqUBFp8%2B9NHgMH9gtz7GQC%2FVUCcJIIySF5iBe5IXoQshm%2BQU8NWKPGP8CqPV4diTtodUJg6rFORpUKBdZ8sji%2F0rshcsIi2zyZkSmfWBfIniUDJ6Oq9Dzt8n1IEcf9%2FMoETB5QCFxgsZDqaWhE3zXf4J6wnFiyn8fqCcrKVYkJnHc%2F%2Ft%2B8%2Fzc9WPLcAOxYJbyPmxhzWmsUMKKPoQBs%2FIOHHAvi4%2Blgu6&X-Amz-Signature=07d3b38bce00be09eabb9c8cf58f2c7d624d40f231a8dc483d483e913656ba1e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
