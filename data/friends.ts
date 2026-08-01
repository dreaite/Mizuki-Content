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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665A7KKBXJ%2F20260801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260801T025617Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYkc3GAy5cUNTrW%2BoRmms2a14fbjW8wNy2b51hy01CCAIhAMnqlIrjrnbAYi5eHvnoRicSButCMmlS68cTl5SA5Rq5KogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyLy0VkiWnxWMe7ghUq3AO9cbIcTUB5e9sIDMYJqT28shdFCrlvzquXf11z5i7FgQxENQqYEpfVvaUok8gQtphmuAFhPKo5mzDVOgn%2Bbxphur0SYhYo6oa3PptoVaFLcNaPJ9D3dQqLZm3dMuVv%2F9If6bXFO1RilW1HbvFFfiH52qGxwAmuLYpDuhKW4TsNrhQkOdzO4EPNFf3KIkn%2B%2FcLNfQPSAR%2FS1accqDtG%2Bv3A765rrIPe6R%2F1GT%2FjVXUMFmVewah1QQ19RyfI3Eu6uiOaDN9vPuAH4bVKW5iPTZiIlLHD%2FKfhVC7f8ddsxTP1TRgizjdm3aJvEIhjmqXtWeU%2BHGmo6mLE%2FlZLHBHbDeJEpo9LBDtqhOSW9YdIlZf9oH%2B7%2FVpYvP91NoyJIbI7SeeSHNRszPaCbKDDu7ZMOZ%2BYdAYk41%2FoPZx2%2FmDspeuOSrm73SD8chb%2BTAsj3Av5x548mb6CcIhuddgZd8OtL8Cd2HBAs%2FjDLfH8o%2B0ndg0RPX8Rt%2F1zKOWkbT1tsxMFXe8aNpoa2T3cUXBTbGeKnTQXnYP1V72B%2B4xGTVSayj7pYjPWMGvZx6t3t9vtS%2FCk7peFsO6KoeQyVOKz4M21TBSxVMZlMdZV10ZMejaECMcaKQad0hliNEfRuJvSgTCwtrXTBjqkASeLAJm00ZRLbozoJFcvdlhB3nlpQt2YRJ77NQ5xLRC4FPNgQsaOTGAjsvGJZAbCg1RqBYEsFWgi8JTkA0wzbmaSgB8UTIj3XwhNDlV37UleOqpiB%2F1clkQ73FKE1uTVddOTgaEcUfnBz3mvoy%2BCcvh%2FW3xHNEC9saUE0eCJgzzptPt2SMANDStAd1kf2zIdkT5rILjmjAgAJH1VSBfkFJsFW841&X-Amz-Signature=66aa503e8d0e4e26dc2de655d22cedb0de735bf65bd671d19dd3603177fbfd12&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
