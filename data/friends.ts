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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TMLFJ2F%2F20260812%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260812T160327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJGMEQCIDVTEzrppOwQtpQt5LV5C8yfHIMVKwmSWngyP7G4YyUkAiBD1fYzrzJz%2FBVwTre1ejUp8gN8g1Z24bCt%2F1%2BYdiM05CqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdkf7VMq5wYE49pA0KtwDTnc6KUUpGsfPajQvBGTVtNBUKEidg25HKmfm5Wa6dwGsOHHqiJyrQAm0jnbGvq2zNhSzmPNUoBzJQIG9FMAar%2FNXG%2BVMmyI%2Flph1%2BE1h08Kl33X0HpWmv76mWr46%2BFqVVncVkY4nG%2FU00NrxhcOrjUVsKVS3d%2BZMl8H2xtJ9kVz%2BXHA4FTyewNIcQlGbKk%2BgGGii08C5g2Z3UeOxhejE7JBJCpe706cNP1s%2B%2BSnbrC85P9FQg098n3hS4CiDTQf9v7r4o9wbP5g%2FN4PQ9yUQrrA6pO5X0KEzKbvNti%2F75EKqoYsVeppe%2FInYS1%2FFpndm47hs6Yw6rRahovPy%2ByHftnPxeA3B0DUC6yUtEANQrDVyD05kdBqbZOgYEdRI6Srm0mhbEWazvViuM8s%2FftMg8JSIS3uFZ8T8IZfXza%2FPrjMCyobdPvL7PVNwLx8sXoy0JPOOxhpqJO6TD2CQwrIwkPlXNVMJOAtLSZp1IFsDSdfleb%2BLroTywrGy4JLlefnvuajSPkw%2BHd2E9NajD9PEyN%2BfcQ%2Fw5Xh%2Flldt7dj82oeIQY6V9WnLrCNEvTA%2BayZh%2FMk77SIPom2wN0oANuEdVmpJHLLRZtNebaiDtJseA9aXdCfJXOcbvsSZ%2FT8wwerx0wY6pgH0QaKm3rRFPgNGaQDTqPzjIyB8sGUCpA%2FxHbSaxGz4c0k%2F1UsXH1lDxmPVuYaQeOxNtHx0rbnpXADXuwBzBgykXATosRF0VLuSrmrB3xQk2hx7nFjqgfPZ2JOSYIjZfJ%2BGncfF%2B1yDSR8R5Qi8YU4W77fg1IfLxIyzNqqDaOhgldOn90hFGrgyZwQjIDQtpFic4DQ0FIV7NTRTpuJ7pwVM%2Fb2cfyfK&X-Amz-Signature=1a39f3597d7bb4bb3803e3aaef91306927babe88fb334059774309b03a76b928&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
