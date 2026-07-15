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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNSLFSQR%2F20260715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260715T180912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQDvnUNWTfTLc8DaUOEhO3yUWeED3HUfWbxEYx3tJaHkUQIhAITYAsy2bKz%2FmnRXXllh540eFpnTKdM4vOk1FJCDSqmAKv8DCDIQABoMNjM3NDIzMTgzODA1IgzYpFivDz89AmfKb%2Bwq3ANIGigJ9DFgB9s8Q2zOmaG5g0C9SPQIjurc48QFnwF2jFJvFuwteI6G%2Bbbs7vOj%2FPgihqwISVbS3Q8NG5UEYM7nDOBXQ7cucIRRmAcOjagSnDquhaMb%2BnksmmA5Gnh31gRoEiugR8Q9qpOOxpAc3tTR6WG9Cf7G39KYk2snjv5rsC4LySZ%2BnMWavIOJJkNsqKId%2BBklm74e27l4%2B%2BFDbfxc9Q%2F%2F67fCoVYd9F9uyJUKD5v856dyYfBlFHG%2BHIwDS3UU8bmRLUS04ZtNaOtDHi2IAFc7HWH4iq%2BOmT%2BW2TTBj%2BP1sg1z9femuORUJvUYv7CIW4xM5IgM467NFaTzheghPwttl81ZbUIt3jOboN1kac9GqmZ%2Fou2AqOH2v78pmOn%2F%2BB85qvhJ0eMfMv5%2FdAb5VJWx6jwBgHLFRIDNx9WHBCV0XCAcoQ1FV8KravoERp4lZAOj8ZJV5gtQnOnLECiisz9nsK4WVFnqQzOxo%2FSSyK1dtode8yO9KNFPk%2B7HcvpcoDc8Momu62rQscfxdpM2KQRGvg6WDaMDa8%2FZMBYNjhBNooa9U6JNUttE0jnN3leecOwAH4wdx91VU3ieLfLp516JBn%2FWyluFh%2FuhqA%2B62s0sOf%2BIdnQ7%2F4z0fjC86t7SBjqkAeF13mD%2FIJhfcB0U41Pva8%2BEJby6OoVQvhzsZNvuTTvIhrRFWu%2FBRb1ZsmQiPSQoLNI7VzHRXvjlRMFmXM5ud3%2BhnPGiJqYctlWtwODz6z19jHtvnuhwwaO%2B0QxnHTQ3PRy4kiX0ItzTufpV9yk9Ch4m47w187%2BlORmreIfrrlHkoBoZi2BRQMh7TcMaUOQXmTHocHsoLz5MtwMtnQh26Zi2iYJT&X-Amz-Signature=051a4f4e5292aed47aa918d05d5d752354aa5460c61e73530dd0337a8a0b7fe3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
