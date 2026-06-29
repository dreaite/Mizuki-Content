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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YI7SCTKO%2F20260629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260629T220837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIElltoQj5Fyox1BJMheLzk0lgPteAacersOBVO1iyUw7AiBkm8%2BsFdvLUCGX5PQc%2BcSRb7ZNz8yPrq%2FxvQOsWsD6DCqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgGvHn3uxs%2BFG1WbNKtwDXy%2FbUHXsIASrQule%2FeJXNhjgPp4F6ChriPVNIMrgqkqrudhVVEpvG34ijh%2BaWxf%2BZpv%2FLG%2FWhKFVToQolFVA0%2Bij2sXAdNXROwYTTk72isQa4wLMub%2FNZ7tTQc3G8YvRzn%2BUVPPt42Vud4mnVCkzbWuGTjpK0hHyGnsGObSYL%2BcsLLeEpn3TPYHNVEiDKFWheZF%2BBdQvTytyWM0WNJ8rgBf49vZh2AlixrD%2BJd9uSp5wjOt4mv0ULC6xqpoX9nHTLoDTTUnIwZzmSinF4HAtHAcsFbzWXLhV9%2FNSWucIzCnVvkmZE4gc0%2FQwQq1jj1o%2FerHowwjkDzwb%2BKWn7JKAFPAV2%2FQB5Y6zTuBKGT6YkPmv7M427FLtAvHOp4qwhlV%2FnDS8v%2B%2BFR3DAxTfS84ppzkYIHcWnvMS2teB4Zk4K%2FtyRWAYaacLQLW5pdHrSTNw%2F2kY03DQ9YSLNIWqtrETAqPEZHSiPS4baozAUbh5xBtBMeT%2FYVqi3iR44w3FlfMAy1mpu%2FZllPwbVIZ2621vaqiP%2Bd309xHNb5ae4pEceRXRa79B7t1u3GrU4im%2BJSTVCo9cPhewtMRxyfCaxjNi9xp38g2%2FGbpjgSfo2kWELBHfmK3Nm9ZaDUKnCkcMwmMmL0gY6pgGOvvCKOPYxKgxoORLfk8Avjbcz4u52BWK4Iy83qROdaUL9QvDRcWQ%2FYLYmzO0KK5SaAafWk%2FZfZk3ldsG5H%2Buwv0SFplhDCUf2fV%2BdbM3If%2FTc7b8%2B%2F8IE1y%2B2sFL0fTEEu%2FH8bkY1QlZax6flmcn7bV7NxgVpN8DkbapH3WI2Umaeqw3iSKFsVroTH4W7%2FEMmpyIHrNWpqKNDr1xCYF3rAO5mBc0G&X-Amz-Signature=2314a665658d776bf907d123b6339e65c972a82e6c122aed044a6bcbe4b89210&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
