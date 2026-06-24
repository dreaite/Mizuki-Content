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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3VV3V42%2F20260624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260624T194905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIQDTe%2FoWUltNlZvgO1NnmFifkkV9GYYAZ43E7uuvch0%2BSQIgRZocuUvprVI63tEkzuwMqQm%2Fy00GQCH4uuSz8515YfEq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDFoMCMzyHAIU4UE2GyrcA8VpX1eHoppMITZGCl0Oco48aYChK8Zi43mo0cROW46g2XzzfLrTJ%2B%2FUAKOGJ0UjVqTTVe4VFASFzVJHZuef0UphB%2BxZtngKB%2BNijLMewywyYQMW%2F%2Fho6Ob2oXkVB1py3Qh8flCAwC84vrLtHpMZmKycse%2BAo%2FErb0cey%2Fvqz75ziBB%2FNG82rLaSC4Qew0QBbK6R8lqwvZ7DdkK1WyGPs06a9v78FVPKkNDLmG4c4M4S8fVIWUdvGHWpQ%2Bw9IZq5TidAKE1EqFDuQV5H25Cf31PFZ6HBGI2yCibE%2F%2FEIjI5bnLiIaEd9DOl54syxbDNbi6M7fR%2Fwj7g4gzXJCuL8GcdHnslotHAfQ8bF2WFBFBqIoJWQPx7wyW6h4pN7Um2ii%2FJiaxPqaE6erVvcr8%2BTDb9ZjNMaB5V5MKF4nWIVb757U5%2Bl2szJs5e0YZNvU5%2FoGTHGH0KbGQQCInhioxe5u5Yl8W6LXP%2BSjMTRLZVfuzTtgL5FeCH1NCCbnL7HlZXGaV81VoMv3NQTNjaTimP5v6UX4TD3YQGrM%2B2yJFI8Q0LZlWsqHhHTjOqqmfym%2FDTiSUSk1KfaJvTm4QARQD8gWZ3%2BfGHEZZyUdItLGO4935iX5kcWKJAHcv%2BX1FCOMOyV8NEGOqUBeD6srSENMAZtj2SBiSUhO%2BMeSjtq7qyp4QP7xkJU8cH4OQDWbQhcthOiH1VQQ1bnzhbgfBHYAx5E12UA2L1sbF2uJP%2BjJUaS3Ky2kV6gipUaXjfUXFo7qohtPcX8pHfuzT0fSwo2mAouKYUFWAOLc3XC6dKK4ZatdoVyCj4yHhApKYJhbl9%2Fadzu8zar%2FpJOqhPOQE%2Fz1L%2B56%2FOkWlyV22vxHfK3&X-Amz-Signature=f7a6ed7259a026d9b946513376ad433e516b52c3db93db2d2dd9fb8d393c4b65&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
