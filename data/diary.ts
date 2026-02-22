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
			"https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/6b60d7a4-72aa-4ba6-9bc4-711e240d9d93/MASHIRO_e102b.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USQIPIAO%2F20260222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260222T125050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD2Od5%2BI%2BtC3Gx%2FSUkNDLfquYSeAXEbJQRPGHYBZMm5MwIgGHT%2F%2F9OMVvT1Zgsy6tgrYHJYVpBxRIju5UEO0IMmkHkqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH7tR183mwz2JCx%2FHSrcA7TgDBeRXSdeJsr%2Bz7Pvh8UjYv2rzVSDkGcODsHdF2w4b4qJA9EEo%2BtzzMcvzYTM4IYPVrljVPZuddoyvtd6OCTQyOh8EGk4IavZgqmrbSoZ2NCi%2FkEzflsBUZrRmhclwWG%2FBk4Cg7WLFYEhgOFEZpjj4BhgdwiWOiZZAjgohmNwW5F%2BFtkbkGoIG4JUe6%2BjVkoWmHGrHhenhVpPF6EXL4Sowj6OcPu5OpSWrmzyeL06fU9rK2zjyjSp%2FV6BosNIDqOiREKVt9ePGK0g3Fw02Kw%2B1Ppkrr376AvhXhJ0I62HZxXhLe02J0JODZCVI8fJ5r4k%2BaNaAET%2BwpW5EkCF3ddRoAz1Sm61kux72aadTTdfg6%2BTpMMGkMmFECzHHrqQQmU82B0DcXRAA%2BnQmLNXRs8TjMj0e7fCA9tZ3bu5nkeO8hqF%2FwAam3fmaRWHMsSiPDQxGnhSLFjoaEnNLIFiQ6uCeWF6hWbxIlWJBkKVWQmsSxCkXxHOKNOgWaMsgP7OjnMNzWpwd1u%2BT2372vDCfnvWT0YZBv7cdPDxRNFlkpwWJ4ZXCQDkxML9q112u6yhDBrPD6NaD%2FdiMVFnhiqwrkEHemm%2FbpnjWBdwEhtwsx4kd%2FVAQx00G5AbhLTcMM3i68wGOqUB8BdNu4lTEpSIc7lKjRIFIopPtfLoH06OZZhWkBMDCqbgcSdl%2FJ1FSaDmyh54YNdu9vocSjcLG8xKAIbi6N9CQXwLqwnyJbSGZuLBMvjHQl308T9CGWUTbd3XLGFwxWDXgorsq%2BUw8ak3BIOkOiMwM4kw4L502g1kXo4FYCdxYNuaxtVY9euqYM%2FGFVeblbzJcCXItlicbNgjMvWYxO3d9eTBr%2FrQ&X-Amz-Signature=be8262da3ad166dc4f7beb0e4e8332c68b84d255729b43f05b05f988783cb334&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
			"https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/c2bf4974-c1ef-4330-968d-0266e45daa8b/SHINKU_AS_e01a1.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USQIPIAO%2F20260222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260222T125050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD2Od5%2BI%2BtC3Gx%2FSUkNDLfquYSeAXEbJQRPGHYBZMm5MwIgGHT%2F%2F9OMVvT1Zgsy6tgrYHJYVpBxRIju5UEO0IMmkHkqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH7tR183mwz2JCx%2FHSrcA7TgDBeRXSdeJsr%2Bz7Pvh8UjYv2rzVSDkGcODsHdF2w4b4qJA9EEo%2BtzzMcvzYTM4IYPVrljVPZuddoyvtd6OCTQyOh8EGk4IavZgqmrbSoZ2NCi%2FkEzflsBUZrRmhclwWG%2FBk4Cg7WLFYEhgOFEZpjj4BhgdwiWOiZZAjgohmNwW5F%2BFtkbkGoIG4JUe6%2BjVkoWmHGrHhenhVpPF6EXL4Sowj6OcPu5OpSWrmzyeL06fU9rK2zjyjSp%2FV6BosNIDqOiREKVt9ePGK0g3Fw02Kw%2B1Ppkrr376AvhXhJ0I62HZxXhLe02J0JODZCVI8fJ5r4k%2BaNaAET%2BwpW5EkCF3ddRoAz1Sm61kux72aadTTdfg6%2BTpMMGkMmFECzHHrqQQmU82B0DcXRAA%2BnQmLNXRs8TjMj0e7fCA9tZ3bu5nkeO8hqF%2FwAam3fmaRWHMsSiPDQxGnhSLFjoaEnNLIFiQ6uCeWF6hWbxIlWJBkKVWQmsSxCkXxHOKNOgWaMsgP7OjnMNzWpwd1u%2BT2372vDCfnvWT0YZBv7cdPDxRNFlkpwWJ4ZXCQDkxML9q112u6yhDBrPD6NaD%2FdiMVFnhiqwrkEHemm%2FbpnjWBdwEhtwsx4kd%2FVAQx00G5AbhLTcMM3i68wGOqUB8BdNu4lTEpSIc7lKjRIFIopPtfLoH06OZZhWkBMDCqbgcSdl%2FJ1FSaDmyh54YNdu9vocSjcLG8xKAIbi6N9CQXwLqwnyJbSGZuLBMvjHQl308T9CGWUTbd3XLGFwxWDXgorsq%2BUw8ak3BIOkOiMwM4kw4L502g1kXo4FYCdxYNuaxtVY9euqYM%2FGFVeblbzJcCXItlicbNgjMvWYxO3d9eTBr%2FrQ&X-Amz-Signature=b7c0e0ab0912e94c03ae4c43447a0a24bab74f97cdb8a142fa627b8a11261463&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
