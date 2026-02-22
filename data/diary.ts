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
		content: "正式搬到mizuki来了😊",
		date: "2026-02-22T10:21:00.000Z",
		images: [
			"https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/6b60d7a4-72aa-4ba6-9bc4-711e240d9d93/MASHIRO_e102b.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWGH2GW7%2F20260222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260222T105342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBwVeXbbXINoBMM4AB4wVnNtWPfoQn9FhsQYzwfy%2FBKEAiEAxkcWIvcRQ%2B72j05g3GMwMXSW7Zi1T230BEWCMPTGa3YqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD%2BtaTGUMmDKP5UToircAx9%2FNJi30mhhJvR7FVySuO9JLjQXGxBu1N5l89mTlsr5eXvTHq%2B8YzBSXegsSfF9MFL8bT%2Br5fmYEL7e7hrz9e2Nwe3X3NIh7I7SSENEfoh6yVyBpficrJZSsTFrPNALnbTgOTVGGhH%2FrqUoMvlZ2jwPa%2B5fiRET5sHMIMFVNOZSutdVTlAK7bREABFrPfkPljDacWl36GrmeZ82ah7wVk0%2BuBTC%2F3jkD93k8VU0NGSYHr8WdLLry5k%2BhQTGLqGuyb%2BflU8vx6b94rJIRz3pW0Ipz6F3ec47z0F760JN7SlxWyg7AoKn2QUCJ8ZMGFL33S8D7hFUOR36uCdqZfXu5mXmyFxBy8LpQnVp66oaLO0te%2BCHTwpP%2BO8sYz8LAmAnR0%2Fsth%2BVTI%2Bum6VhlWfLI%2F%2Bpkv1trvdiuTgb1U07MnacANLFDq1JgqTWDQCG4G4sBVtMty%2BFQ6qY%2BZEJzFJ3NhMdQhhMUMjGMtlg0RTkT%2BVbKq5Ifi3SWdguMPcEIhCB2Aws%2BB5bh3deCaGAIf86YSx05Fc1Ow25Z2THDWg40LnNvOD4pAHt8UdqfQCXpId0KbhFl%2FIT9K2d50gXrc8C2ymjjVrQtR7POyGuswVAaOtJYs0BNhKe24wdKzP9MIDF6swGOqUBnqf4kHcsXCkJ7zKocpdjv9rtrCrjTdEZ9kMG9JMXQOM1sDsYAxJGBL722Pu%2BEj7pxst7QRzdpxjJaCknGL%2FcWcUkLQK3DjX5q%2BotTKMvcFrP5nCG%2FV2tFHTzyy4o036E%2BE5W6SgZEzjYKh2kMu%2FoXB6TpLXoCmkWNeFBJzzdbRAqpW7NAw%2Bktie1fXZ8guXnYG8euvpu4Y%2BDvGxJDe9R89LIBlO6&X-Amz-Signature=64108b59e84f100b65bd9620f146842f0ba78c93b162a2a30e02d8a1e6992837&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
			"https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/c2bf4974-c1ef-4330-968d-0266e45daa8b/SHINKU_AS_e01a1.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWGH2GW7%2F20260222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260222T105342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBwVeXbbXINoBMM4AB4wVnNtWPfoQn9FhsQYzwfy%2FBKEAiEAxkcWIvcRQ%2B72j05g3GMwMXSW7Zi1T230BEWCMPTGa3YqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD%2BtaTGUMmDKP5UToircAx9%2FNJi30mhhJvR7FVySuO9JLjQXGxBu1N5l89mTlsr5eXvTHq%2B8YzBSXegsSfF9MFL8bT%2Br5fmYEL7e7hrz9e2Nwe3X3NIh7I7SSENEfoh6yVyBpficrJZSsTFrPNALnbTgOTVGGhH%2FrqUoMvlZ2jwPa%2B5fiRET5sHMIMFVNOZSutdVTlAK7bREABFrPfkPljDacWl36GrmeZ82ah7wVk0%2BuBTC%2F3jkD93k8VU0NGSYHr8WdLLry5k%2BhQTGLqGuyb%2BflU8vx6b94rJIRz3pW0Ipz6F3ec47z0F760JN7SlxWyg7AoKn2QUCJ8ZMGFL33S8D7hFUOR36uCdqZfXu5mXmyFxBy8LpQnVp66oaLO0te%2BCHTwpP%2BO8sYz8LAmAnR0%2Fsth%2BVTI%2Bum6VhlWfLI%2F%2Bpkv1trvdiuTgb1U07MnacANLFDq1JgqTWDQCG4G4sBVtMty%2BFQ6qY%2BZEJzFJ3NhMdQhhMUMjGMtlg0RTkT%2BVbKq5Ifi3SWdguMPcEIhCB2Aws%2BB5bh3deCaGAIf86YSx05Fc1Ow25Z2THDWg40LnNvOD4pAHt8UdqfQCXpId0KbhFl%2FIT9K2d50gXrc8C2ymjjVrQtR7POyGuswVAaOtJYs0BNhKe24wdKzP9MIDF6swGOqUBnqf4kHcsXCkJ7zKocpdjv9rtrCrjTdEZ9kMG9JMXQOM1sDsYAxJGBL722Pu%2BEj7pxst7QRzdpxjJaCknGL%2FcWcUkLQK3DjX5q%2BotTKMvcFrP5nCG%2FV2tFHTzyy4o036E%2BE5W6SgZEzjYKh2kMu%2FoXB6TpLXoCmkWNeFBJzzdbRAqpW7NAw%2Bktie1fXZ8guXnYG8euvpu4Y%2BDvGxJDe9R89LIBlO6&X-Amz-Signature=90a661e0fd88d6503c84d728ffb08619b008b516d4d82462d93f423c3e740be8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
