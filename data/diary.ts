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
			"https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/6b60d7a4-72aa-4ba6-9bc4-711e240d9d93/MASHIRO_e102b.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YP7JO7QJ%2F20260222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260222T134339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD0Nx6oBwcdQrzAu34VjG8Q90SqC5br%2Baed2L39PQPUKQIgKI5cqR7ynOfSmC%2BIgG9w%2B9uQ4pafBYjbP3kY70Ek7qIqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGnj%2BJ8KNnftB%2BKzzircA43KpRBkgmGzJmAQnWKNj90LcMa5JZt7h1QzMFkj0kFctOrrgiAz9P8gPQRl4bRnt1YnGloM61ZaAnxJeCcHjl3Yu9nkCsf97CDSihQJrC3DYMOQMn1EPIHcW3zqajR0nO4a5IHb8EdxPpwrz9r6ryCqxzyN0D3ZCWvVYM4IoqizoEtrS8VSC7gMhhdqL%2BNnYpw8s8pvXFAhSxZ9E6FtTYiq10pObcjvrBa1k0lNCI%2F7NGObWpyG6Pk43DI7OZi%2FEKyacn11TtTgE2uSFGhobZQBpZBSbw%2F8l62wtz7QHCw4GuImvIMpl7ElIEnTIhg%2FW4IAuB4OXBf4B3%2Bwl34adIa61d5sD6HMH3IcirkhGWSp0LnIhTkWp5hNP3AHpzV3gFn7HkQBTq%2Fbc67uzq7tEFEDHds3L0%2Fyq0vJkScSywcWWy%2Bb7UtAQ5QGItqh1jVjLOS9bULwHHDPRihvfvPHjCD3hIUWG8pbII1KLyNPPl7kxhzZCxzeBzW%2FVU0SnTmE8v2lsCzlMy1IB9oPpWNW1FKtNphUwLr0pFHGJkT3nseoveOKckagJIit5BY94reA9Rv%2BaZ7YDbcPVOQlyNtktWNrDGQ7C0BDa6aDDP%2FCLylAbg2eW6zjZtAB55ZjMNLh68wGOqUBh8JhoII9FfN4vGFtr1rETROWvvTOwj8zuwsvcbzAtzX%2FcGrcO%2BlQDu6RcM9VMziMpb9PDtVYM91QqHTE2OAwMTeXxorLzub4K0XvnU29xDXtqroVAtfzHZLHaV0T9GhOMGEDv6ureBU4vH7mGaymGADKKrsGWRvyJW9E4MIxQf00pTE6LrWun72mvpsQlmccuGJBoZvK2hb2zDYSDhT2We0E8m0%2B&X-Amz-Signature=c93cee0f066bfe493722382ace3e0b612e66fb7a1e73622f08a69f646efb48e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
			"https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/c2bf4974-c1ef-4330-968d-0266e45daa8b/SHINKU_AS_e01a1.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YP7JO7QJ%2F20260222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260222T134339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD0Nx6oBwcdQrzAu34VjG8Q90SqC5br%2Baed2L39PQPUKQIgKI5cqR7ynOfSmC%2BIgG9w%2B9uQ4pafBYjbP3kY70Ek7qIqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGnj%2BJ8KNnftB%2BKzzircA43KpRBkgmGzJmAQnWKNj90LcMa5JZt7h1QzMFkj0kFctOrrgiAz9P8gPQRl4bRnt1YnGloM61ZaAnxJeCcHjl3Yu9nkCsf97CDSihQJrC3DYMOQMn1EPIHcW3zqajR0nO4a5IHb8EdxPpwrz9r6ryCqxzyN0D3ZCWvVYM4IoqizoEtrS8VSC7gMhhdqL%2BNnYpw8s8pvXFAhSxZ9E6FtTYiq10pObcjvrBa1k0lNCI%2F7NGObWpyG6Pk43DI7OZi%2FEKyacn11TtTgE2uSFGhobZQBpZBSbw%2F8l62wtz7QHCw4GuImvIMpl7ElIEnTIhg%2FW4IAuB4OXBf4B3%2Bwl34adIa61d5sD6HMH3IcirkhGWSp0LnIhTkWp5hNP3AHpzV3gFn7HkQBTq%2Fbc67uzq7tEFEDHds3L0%2Fyq0vJkScSywcWWy%2Bb7UtAQ5QGItqh1jVjLOS9bULwHHDPRihvfvPHjCD3hIUWG8pbII1KLyNPPl7kxhzZCxzeBzW%2FVU0SnTmE8v2lsCzlMy1IB9oPpWNW1FKtNphUwLr0pFHGJkT3nseoveOKckagJIit5BY94reA9Rv%2BaZ7YDbcPVOQlyNtktWNrDGQ7C0BDa6aDDP%2FCLylAbg2eW6zjZtAB55ZjMNLh68wGOqUBh8JhoII9FfN4vGFtr1rETROWvvTOwj8zuwsvcbzAtzX%2FcGrcO%2BlQDu6RcM9VMziMpb9PDtVYM91QqHTE2OAwMTeXxorLzub4K0XvnU29xDXtqroVAtfzHZLHaV0T9GhOMGEDv6ureBU4vH7mGaymGADKKrsGWRvyJW9E4MIxQf00pTE6LrWun72mvpsQlmccuGJBoZvK2hb2zDYSDhT2We0E8m0%2B&X-Amz-Signature=432d78f57dd775fdd0e461e76ac53261aa7e59dfe115c8f143a50361a602df18&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
