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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYZHQFMF%2F20260713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260713T065424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIHTi4kcwFK70m7oXo0A70pNUkHf%2FzxXGCOaFxTlcYlzVAiEAn%2FenrLZPjOtlYr%2F8jMeLlnP17unrmGbCT3tCEbT9KBsqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOZJ0biujUsv63fAuyrcAywLoa%2FuO3W8FGK7X9ogOjApuWl6xZuPs20l5jeG7DmHWs4bgYTZ1o1B7TsYXw%2FOEdpc9VNv6euy1aNDGI4hzWe4YXrkM5vuhwlvnPYQo1sAxqoUxyMAlFquaboYBBsEFD5RCm%2FoJY2v9sLimKXVxE%2Buwti6kn6i%2B4ROTK6xASIZIFdFMNUZplXJHuyc53gmB1R8S%2B3%2BYz2aa2FqSPQFbS85j0Za3FNX7V0Cf1DWjGqipcku6ugBy6fvpgJIyfyvcgMbPbkc5iN%2Bv2AIz9rM5YHIwCDoalVvg0QWaL2OzgVGFbzCQs1uVkMfVXm8xLfyM%2Fz%2FEJofm52yzBwX0d98IFqst6FEpElcib1FhsXXvs0Z0U2AekjUztnpw2E6aKfkbSihlTh1ptBYLFkNkblzY2qkptqhzAxFP%2FQ1Ic8oMtwFX%2BYR5xt%2BOOuO8uTAFfBsJf3c8HibN5YbQWqXM3VwvkBn6OtTsBaFhvGKU2LqtT9%2BlyIWz5SfEqgbo4uDwKrle4v9xQ7cX6p4s3zoavMT64a69YCM1j%2BRq4Nz0A6IqNvWgpTKwJ%2BJrcv3JAufL7aUC%2FRwTFsVRfcmep7N099aefzoenMbtsLJQmC8kixCodwmoEN6MCbihh2s%2BnPHMLDu0dIGOqUBRuR3oTN3zFGwmvywVe8hme7NsFkfVm2bllxfbDF8jWXnQbTgCwcWHyg1qURUzjVbY2WSLOu%2FkWXbh%2Fn2mtdEUgD5mBROcni21k%2FCcEEd2M6ILIGdevgrBv8Na03YJWn2xdEr9qT%2Flb%2FekOrxnDzZ2dKgh3kWSHn8GaHYAvrtourBujJO%2BZvmfANAr09mYz03ZMN07%2B0pSEBB3xxa4fQCNBY9b6HL&X-Amz-Signature=25f27c7bd8a2da404c1c7c558783babe0c411542eac2771ecbf16076981d6d52&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
