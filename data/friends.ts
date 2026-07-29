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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBAWSQEU%2F20260729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260729T120141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID5H4KTVawac1dcL36uk0RtoqjBH%2Bs84BtDoQuVRMRKzAiEAmQEEIsgqYhhhNDsSAk%2BiZlTqExZeRHpruGPUue6tuuwq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDLVNRlu8fM1OYRhjUircAxeT9xCdm2M93%2BN0jzPYpj0ZdT08cPbVjTDEJ%2B%2F%2B0lpgVLRxOBQzzV%2FFYC3CdUZzxLrSex00AY9N0X59mjiartn0eXZiOOAfcW4lQb%2FGYQCANGTkLPlFo7JSkfv%2BURRUfrxXjVeO%2BN0QkE%2Fn0CjmYiw8zL1Y06B7rCceGnlGNbCv7Sd7HVzzl0YfmDP9Mu02A8f66L9io4aLaA%2BAzeKnCt%2BY78R99snr2Q6TDcMN6OTJwKcxfGUpOj%2Br3ii70PjPk04YQgq5jSR8CqcKtS6dSbcDjk066fcHOPsWbr7hr7OjEtMsk1DZ0ipk%2B80CciS9Fb1xL0lcZgMRAHwJvaM7%2BKQhwBz5x5YDBASZ8fefUH86d0dwAwOjWblH05nlkwJoSDt3NJneglGwtDvNGGkCDnyBMZwubCRDHVRT01RBhfPahtxMQojq8Djqqi021dAdht2W5vx2aZVALRVORBjEtYkxQfpKxphyMmKNklMpMEzvhZNqs4fhgGcD%2BRFUDEXWierpl8nlxquDf6t1adxTerjdbiOml2NxiO9wex6UdPzTY%2BbPqNd78cslGaS3sqX526wR6Ye05TP2vUqXfEnfmNzixEJtPmTs2lHItAcmads%2F1aBSFc7xRpL5QYoUMNi3p9MGOqUBEWQ7WQLodQ9M7bLTrYh%2B0%2Bk1OFTl4NykQxDJ6MnfsgmElXXxTJDtHvENfiEikOwqxwulEkf6uPvBRIYK6AKfTTUMbDiHJrxe8I74nUHjSkPl6xWJLWhHVG6JPXsiQJlg%2Bvbda7wlrl%2Feem239eyIXySHoNUEfTZ6DNwKPJRwC73AIqHTCa2RdDqhxrHD%2Fj17YoIayYrQHkEdAI%2Fr6BbkMMfL%2B1qL&X-Amz-Signature=d71a9ec3749cf544871589b43d3868be73f6e5fc3b10084fa5dde666408a5592&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
