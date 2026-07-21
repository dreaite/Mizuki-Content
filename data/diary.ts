// 日记数据配置
// 用于管理日记页面的数据

export interface DiaryItem {
	id: number;
	content: string;
	date: string;
	images?: string[];
	location?: string;
	mood?: string;
	tags?: string[];
}

// 示例日记数据
const diaryData: DiaryItem[] = [
	{
		id: 1,
		content: "真紅、お誕生日おめでとう🎂\n\nこれからの1年も幸せでありますように🥰\n\nホットケーキだよー🥞",
		date: "2026-07-21T12:29:00.000Z",
		images: [
			"https://r2.dreaife.tokyo/notion/covers/3a45465cca1780d28d8fc551b999f497/inline/5ca528db95ec4845-shinku_birthday.png",
			"https://r2.dreaife.tokyo/notion/covers/3a45465cca1780d28d8fc551b999f497/inline/89046353fe098e8e-IMG_4971.jpeg",
			"https://r2.dreaife.tokyo/notion/covers/3a45465cca1780d28d8fc551b999f497/inline/012d7566129bedf8-IMG_4972.jpeg",
		],
	},
	{
		id: 2,
		content: "和真红的海边散步～\n\n个人第一幅画了XD",
		date: "2026-06-28T12:05:00.000Z",
		images: [
			"https://r2.dreaife.tokyo/notion/covers/38d5465cca17806f8141fb6eea89de45/inline/27142b38d1064ac2-shinnku01_last.png",
		],
	},
	{
		id: 3,
		content: "仔细想想，现在的我应该才算是真正开始探索自我的下一步吧。我是谁，到我可以是谁，到我应该是谁；从脑内到思考，到行动的渴望，到溢出的开始改变的现实，我开始深刻感受到我这个存在。",
		date: "2026-06-14T17:39:00.000Z",
	},
	{
		id: 4,
		content: "有一说一，最近开始学习区块链，没想到反而感觉更类似于当时打acm的时候学习的状态了。secp256k1要补各种数学知识和推论，再实际看ethers的实现的时候，结果又发现了熟悉的竞赛风味的代码（也是非常愉悦的了😊\n\n话说我本来以为会是学习java框架的那种感觉，现在想来从钱包这个主体来学，可能是个不错的选择。",
		date: "2026-06-13T18:41:00.000Z",
		images: [
			"https://r2.dreaife.tokyo/notion/covers/37e5465cca17806aa05ecbbfe728e0a5/inline/eb4331db2b71e582-image.png",
		],
	},
	{
		id: 5,
		content: "最近我稍微意识到了一点增量意识和存量意识的差别，虽然稳定的工资可以提供一份稳定的收入，但是这也会诱导人的思考局限在了这份开销水平之类。稳定的收入更应该作为一份心态的稳定剂，而不应该为此而把自己的行动边境就此限制。当今这个泡沫时代，依然还是有很多热钱可以赚到的，没有道理因为手上的一份收入就丢掉另一份。",
		date: "2026-04-03T16:29:00.000Z",
	},
	{
		id: 6,
		content: "到达！\nねり真可爱",
		date: "2026-03-05T15:23:00.000Z",
		images: [
			"https://r2.dreaife.tokyo/notion/covers/31a5465cca17800ea630ce1133d62da1/inline/b07fdaea9d9e2b69-IMG_4504.jpeg",
			"https://r2.dreaife.tokyo/notion/covers/31a5465cca17800ea630ce1133d62da1/inline/af76c478fc5fd3ce-IMG_4502.jpeg",
		],
	},
	{
		id: 7,
		content: "正式搬到mizuki来了😊",
		date: "2026-02-24T08:48:00.000Z",
		images: [
			"https://r2.dreaife.tokyo/notion/covers/30f5465cca17802bbd27fbcc5d9068a4/inline/5a79f9ca47c65d7f-MASHIRO_e102b.png",
			"https://r2.dreaife.tokyo/notion/covers/30f5465cca17802bbd27fbcc5d9068a4/inline/a38d26f4aaef1f93-SHINKU_AS_e01a1.png",
		],
	},
];

// 获取日记统计数据
export const getDiaryStats = () => {
	const total = diaryData.length;
	const hasImages = diaryData.filter(
		(item) => item.images && item.images.length > 0,
	).length;
	const hasLocation = diaryData.filter((item) => item.location).length;
	const hasMood = diaryData.filter((item) => item.mood).length;

	return {
		total,
		hasImages,
		hasLocation,
		hasMood,
		imagePercentage: Math.round((hasImages / total) * 100),
		locationPercentage: Math.round((hasLocation / total) * 100),
		moodPercentage: Math.round((hasMood / total) * 100),
	};
};

// 获取日记列表（按时间倒序）
export const getDiaryList = (limit?: number) => {
	const sortedData = diaryData.sort(
		(a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
	);

	if (limit && limit > 0) {
		return sortedData.slice(0, limit);
	}

	return sortedData;
};

// 获取最新的日记
export const getLatestDiary = () => {
	return getDiaryList(1)[0];
};

// 根据ID获取日记
export const getDiaryById = (id: number) => {
	return diaryData.find((item) => item.id === id);
};

// 获取包含图片的日记
export const getDiaryWithImages = () => {
	return diaryData.filter((item) => item.images && item.images.length > 0);
};

// 根据标签筛选日记
export const getDiaryByTag = (tag: string) => {
	return diaryData
		.filter((item) => item.tags?.includes(tag))
		.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};

// 获取所有标签
export const getAllTags = () => {
	const tags = new Set<string>();
	diaryData.forEach((item) => {
		if (item.tags) {
			item.tags.forEach((tag) => tags.add(tag));
		}
	});
	return Array.from(tags).sort();
};

export default diaryData;
