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
			"https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/6b60d7a4-72aa-4ba6-9bc4-711e240d9d93/MASHIRO_e102b.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPTJ57CG%2F20260222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260222T140510Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGqDgcdQlwBW7Bh%2FgDp72aET4yvbl5EPbSKqV5HTaIEoAiEA8ZVx3xVa6f5OYvvuB7o3Lp8VVFU8Bky99JTPPcOAIicqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJS%2B5o9fCc%2BmUtiISircA4lUHl749SljOjEs28WMIieQe3hiSI3hOBkKcNz1VaHCg3VSGucz6nuiQbkoH9HAsz5aLWlXqaBcU5Sc8DpG94T6g66mZ9pXlhPspR462%2F7G9VzhFqV5A8VQk8eWDNKFnyQmif8hkoE0U7dTjwO7UKJVewTiYHsK3rgSawvJNonQOv2DAdha%2FTJUxpgtM3GsuENqI2YsmjaCNAjUnVIArOhghvi226QoNJJB6KCrJupOruidrHwMA%2Fa3xUa03%2B36YK3rs3bE6de%2B%2FzzXnT4%2BfsytoovnZcxTara2yfXakfHWGKHXcWzGua9g1Aaqu%2BVemwHISGaDOw4IkFYiDt5YD%2BT2HbhweO0z2yG6MqVD9woWlpdiZpT3VUJHG2bIjTBJiHpv8y9B4kF%2BJ7gMGiG8an36Y%2FS6y4%2BqKiSduaPGvb1TDnfPba2aB7ksM7b%2FEb6UB1gS09lmtSlh7wLk%2Bk8WV6HIyHITL9UECv81EMjKv7s6x0JmqMrANGnFg6wF3gi2IpK%2BYB74XnTeN74YFde6UvVbDSSVpNsGkkyhIkVp0gqMvY8HU%2BCDe%2Brf2A3YB6OAZyhATfUxrl5Kk35%2FvV%2FmhrY%2BVsVWE02QBk5pmCocJeBAfBvTtm0QP8kQKGroMJPo68wGOqUBcVvDm4A%2Bm6ktM2LdEx8JbYyiNLI6LTajmqPWA0DPR6zHpXKFPMdibvCR04GgYh%2BRZBFpNJL7NyUYK7yj5fPpGZRGI3aynXAXVbcB93ECY%2B%2BYCcR4%2FlHjEYwKyCz8hSapkLSDV5kn%2BMkFFOILnENkWSIXNs%2FbJQNyFGJubF51Bes5CUipiFx8N6molpHG2YiAQ%2FclU6LX%2BgMv2aDkC4zu8EGpaIMn&X-Amz-Signature=cd11227db8904e29a9f3bb82ae45d8d941a82ee4e356a1be7144f3b78b54f44d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
			"https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/c2bf4974-c1ef-4330-968d-0266e45daa8b/SHINKU_AS_e01a1.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPTJ57CG%2F20260222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260222T140510Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGqDgcdQlwBW7Bh%2FgDp72aET4yvbl5EPbSKqV5HTaIEoAiEA8ZVx3xVa6f5OYvvuB7o3Lp8VVFU8Bky99JTPPcOAIicqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJS%2B5o9fCc%2BmUtiISircA4lUHl749SljOjEs28WMIieQe3hiSI3hOBkKcNz1VaHCg3VSGucz6nuiQbkoH9HAsz5aLWlXqaBcU5Sc8DpG94T6g66mZ9pXlhPspR462%2F7G9VzhFqV5A8VQk8eWDNKFnyQmif8hkoE0U7dTjwO7UKJVewTiYHsK3rgSawvJNonQOv2DAdha%2FTJUxpgtM3GsuENqI2YsmjaCNAjUnVIArOhghvi226QoNJJB6KCrJupOruidrHwMA%2Fa3xUa03%2B36YK3rs3bE6de%2B%2FzzXnT4%2BfsytoovnZcxTara2yfXakfHWGKHXcWzGua9g1Aaqu%2BVemwHISGaDOw4IkFYiDt5YD%2BT2HbhweO0z2yG6MqVD9woWlpdiZpT3VUJHG2bIjTBJiHpv8y9B4kF%2BJ7gMGiG8an36Y%2FS6y4%2BqKiSduaPGvb1TDnfPba2aB7ksM7b%2FEb6UB1gS09lmtSlh7wLk%2Bk8WV6HIyHITL9UECv81EMjKv7s6x0JmqMrANGnFg6wF3gi2IpK%2BYB74XnTeN74YFde6UvVbDSSVpNsGkkyhIkVp0gqMvY8HU%2BCDe%2Brf2A3YB6OAZyhATfUxrl5Kk35%2FvV%2FmhrY%2BVsVWE02QBk5pmCocJeBAfBvTtm0QP8kQKGroMJPo68wGOqUBcVvDm4A%2Bm6ktM2LdEx8JbYyiNLI6LTajmqPWA0DPR6zHpXKFPMdibvCR04GgYh%2BRZBFpNJL7NyUYK7yj5fPpGZRGI3aynXAXVbcB93ECY%2B%2BYCcR4%2FlHjEYwKyCz8hSapkLSDV5kn%2BMkFFOILnENkWSIXNs%2FbJQNyFGJubF51Bes5CUipiFx8N6molpHG2YiAQ%2FclU6LX%2BgMv2aDkC4zu8EGpaIMn&X-Amz-Signature=ff514f1a9a3c85e9407fe649aadc2c31efcb41a1f2872fc8061733b3e3be3c3a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
