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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJCVFNVY%2F20260812%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260812T214721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIQD9rMAN4Z%2FdrfttDmFqg7D7Svz9y20urI%2BnQeZnoQpMAgIgJRtFXIqXlar3BpfhKnq6jfRFRFepUO0ESMMEJizhfSsqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEhWd%2FEXMgdf%2BerXcircA6awJq85JccyIvybERE5%2F6QdAsvDqGnTAPhNvWhtM1CWXrd2WYBzTelunpBRfeoGHfLScnRdTgfbCWGC4QoLXv8AW8043NPELjGb8AeD6QGM5spC9WAHFOKvpnqz8agp9%2B6LpFDpSzSmUmoKC2JwYPKmtKZCugpXvWMI9CoRvykn%2B2RAG9vRksrR6sZn0TjeKoPsGNtoTjr1E%2BZNTTEx%2BDzQ3p7gB9xvs5J0ZP%2BJ9yp8WJmW6RKQzaRkL5%2BcRAwhgL5o4sf%2FWOYPDmYZrdzCXNh0fp6IphGE4dyRFbnj6RLRZ0lo5v2cSrKWbbkHIXkMvMlfcn0RaLwmeSKgkyItHx4oJdroVOckxHJIJN%2BCD7Zc27cYj6y4C%2FikbNr7tWwoNxTtNkvuvIp%2BIbstXQEgOJmNFxnZn2JWreN6ECqqsdQ3zzT4UfUGm1pLMQ2Xa8DRjPLuHeJUm2DifS0o45lA8tSrKs53Plq5gBFz7Rdq1X9Yx4CvkYg6X8hQ3q6n9VU2n%2FoYdIohcsgWpBq7K4BKJjloiV3HAZXlwfphuloAtFu0WbdqLzEMAhOTQRovO2XgGe09VWsZs39CDNKAY1xddRynRuA1DuLxQsE%2FylUo%2BkmxaqiGd%2FF44PkK0ecAML%2FL89MGOqUBKmNGo%2BSsJ8OZ%2BdIaRawgr%2FGeJ9zacaSG7pQSjXsWgqVD%2FQrT%2BKEZKLo%2BrDA16o8YxB%2BPgXKA6pPxq8%2FsZv%2BxMNroUzv4gnrDGgiijH1HQ81usAnlV41IWS%2BupIjajk0yLIQSMKak4%2Fls71xXJ1zppt1FYy2uQZLDYW1POfYiMMjaVgqsntwSy0vw0Eu3bvWfTnrOj5C7ywRIEcR2z2plKgbaSBal&X-Amz-Signature=662805c83899142fbb2eddaa6e758b00d942345105f8c0fc093b5348232189cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
