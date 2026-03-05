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
		content: "我意识到了，自己其实是在抑制自己。\n\n这个是在我接受外部刺激兴奋冲动时意识到的，在发现受到这种影响后，自己条件反射地把这份产生的冲动抑制下来，让自己的情绪依然是稳态。\n\n我觉得这应该是我很早之前的一个想法的影响：我认为我依然处在茧中，在之前学校期间，我认为是那片土地的环境于我而言是有害的，所以选择把环境和我的更深处的互动隔离开；现在我来到了这里，我觉得周围环境稍微好了一点，同时我的周围环境也可以更加自由地由我来抉择了，所以其实我应该更加放开来让我获得一个真正的发展。\n\n但是貌似我之前的生活让我产生了习惯，对于与外部的接触感到恐惧，对于自己的内心脱离这份人工的稳态感到害怕，所以开始不自觉自主地维持这份寂静，乃至于我过去的一年可以说得上是淤泥般地死寂。\n\n今天这里，让我意识到了，其实自己还依然停留在茧中。\n\n那么我应该怎么办呢？我对于现在的处境稍微有点意识了，但是却无法出去。我一直认为，只有在决定出来真正的自己之后，我才有信心面对外面的世界。但是真正的自己，不去不断接触各种事物，保持着这谭死寂，又该怎么发现呢。 这大概就是我的困境。\n\n不过确实，存在于世的自我并不是一开始就存在的，而是通过和世界的相互交互而决定可以存在的自我的形态。\n\n但是我所追寻的自我其实是更加本质一点的东西，是我作为自己的最本源的冲动，这是我想寻找的。当然我不是说冲动这件事是只会有一种方向，让我有前进欲望的冲动也不会只有一种，但是我觉得既然人是存在着未来方向的定命，那么决定这未来冲动走向的我所做的决定，也决定着我的未来。\n所以，或许我也是被这种可能性给压住了。\n\n选择一份方向，本身就意味着需要抛弃掉一些其他的可能性。当然我也知道，这些方向，并非是在我选择了其他方向就会消失，我也依然可能在未来重新探索。但是我当前这一步的选择对于我而言是实实在在的改变，它改变我的大脑，筛选了我未来经历的方向。所以我会对这份选择，其他自己的可能性丢失感到恐惧吧。\n\n不过，这么一想，其实我最害怕的是自己选择一个方向前进的这个责任，我对于这份选择的责任感到了恐惧。\n\n那么答案，其实也就在眼前了。",
		date: "2026-03-05T14:03:00.000Z",
	},
	{
		id: 2,
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
