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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SASSIDSB%2F20260705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260705T180444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJIMEYCIQCReRSUwy7DD4%2B31dYp%2BXG2XCppqULcWfFcevJwrIm7%2BgIhANNiTDu1OMzoSE%2BrRfT8K0XAS5Gq6aEOZtfKxHZVdppYKv8DCEIQABoMNjM3NDIzMTgzODA1IgyV2gzmXkQfUuur%2FjAq3ANZ%2FcV28Z8lXCXOvb7XfJeD19h0c4nr95uDI3Wepir1BEdpt0N4ezGD6UKTvtolLliaPQk4CqMaJXLbJ%2BYnwEAppbS2m6fcooJ8AzfCYODrxDwaRQOZjSfqOSDXD80HfKT34rUiUibfa7aTaoUcNr3VG1Q8HPhWj%2FBeVQy2jDwXKWfwBzZY7JiBzRNrASxsJe0B8iv0x2sUYaFro57e3m87dGN9Kp6cODkbqq%2F5r7uQRBlu%2FiyLTv2mn3qm2VQfgy2ECvu%2B0%2BUmIQnGH58xmMzL0l39lpy6UbK7tmY9dCfg7lpBKX%2BteE%2Bckczh7AxNkXc5zP4DqiinmbT4HmasAjIesZVSLuZ53dYSR0xj6s7ilG52c6c%2BMolh%2FHaEz00Cxrs9o%2Fx4EmV6JjweTboSllpiXtGNjUJb9QMeJ8HflLESFhBgFSll0N87tKbOV1eO9Dqz0uLnZdj6XA7PS9SaL%2Fb1qN5LMbIxyoxC%2FJy%2BTYa11kRS60boZszij5%2BsnTFpaqEZKyzL2pg30I3U08ID3ncggij95tFUVZcyjvBy4nR63K2vRAGwLUtp%2BG3T63rF7pNssK9GvckQ5%2BGfWJjWWPGbWbu7Df0SMvZsWcc7LTdQDvv6SyCByKezHyUJqDDnn6rSBjqkARSZ4KcgTbfq48temyocMaWdanWDIKHwyIoX3jcEhbfaAyuBPlEC0phAg%2BoLV%2BfEG%2Fqs9mB9YUAyjfBAgqtp%2BMI3bCma7zbv9EwFSGfudgNw9QkncVgEqeNmNcIG%2B%2FJM3mHauYHANTXeakTMoqVkzWdt9t8CYJtrul3TxaqJj84GXTBN7HALLoKes6HEcWlcPwdPu%2FarGNXHKL3X%2Bq0gsKDko6%2Fl&X-Amz-Signature=9d3c88902a3b23d6c9866c09a44f1829a6894cb37593482ea0244abb37780ef0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
