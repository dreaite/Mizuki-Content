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
			"https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/6b60d7a4-72aa-4ba6-9bc4-711e240d9d93/MASHIRO_e102b.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFKB4CW5%2F20260222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260222T134554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE%2BYFX7tB2qyxm1qPoJ%2FTwAYkV0ZuXW9v3x59qtSp6EaAiEAszIwubSPe660KZsktFAKKRzWIAigdw8XT%2FSiMTh15QoqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFVB6vNqDjAAhrzyKSrcA5ofu0sNZp858kqBFoaeBXIFLjoyqYwH9Rhicw647t%2B%2B4mjVAazr69QLeUzsRE2tTfMgDXRuziDIx6kZskstdmUB3hjrGShJOLQ65785fSKrp%2BAakBC9MxoZ0ECzTMU%2Bx%2BuKy%2FH3j2ITFKGwCcw5XUOLYBdAiGJ0UcBwE9ug1tbNifvI8j92YL29cHS%2Bjo2tZjwPGfb%2Bjed3scXmxB0R%2BsWBXxghkOua15wC%2FhupTk2YS6PTsiQMPIeB7qy5%2FuDMm1KA4F71aAzEI2%2FfhhoO9erPRXmT%2B3vml3eYhLGbR8qkDh2usVK5SRCwn6DTyfnCwRIVXd3bjiaLS41YfofVfsjByYW4zIiE0ZUGrlrUVQvXVfOzcGVL7QhCW%2BbJoTeQ%2F%2FLKrHHaE1qgP6ihXNEs5hqUnKXbxCn5514ccTO%2FMsmZFNDhXkLWt0giK9k%2BQTFsRnZ6%2BB28hsBPyk%2B057xKsdV5JxjYUr7%2FR0nI2jKREQHBXqh6RC20b4Og6fprVcCi05rQQWMNkRVYQ9sR%2Bb%2BN12wfuAib%2FUuilbMocE8HYBwk9dCku4RgNzP5Fsvids5pEE41Kg4UG7h0fZKq%2BzB4lPwVhWstqGg%2F7fgO3RY6tlbu47Tbncrt01Sg3hgjMNvp68wGOqUBG0Ir7axuJbqlAgbxar%2BBonlV64PIC1wABwwkACZWGxEJTmKSn9VAeOo%2Fn5uTlrm6XAAcEsWLmdZS7ThUJSCH%2FJE%2FZPz6GmwZNAbh9HrRxwlj9QU21HpKLgnwjJy9mY2%2Ft9EMSuvgvgKkS6VzsRlf5nunLyBo1OCi6NcKoaZeIfvNIFvsnzKOICUezAh4rkRnwM5Mi%2F9OJv1b8PxbyrwpR7UK938Q&X-Amz-Signature=e891003a1450021fafa9acbebf4849dabb86897b7e93afff51f2d793856d1cde&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
			"https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/c2bf4974-c1ef-4330-968d-0266e45daa8b/SHINKU_AS_e01a1.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFKB4CW5%2F20260222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260222T134554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE%2BYFX7tB2qyxm1qPoJ%2FTwAYkV0ZuXW9v3x59qtSp6EaAiEAszIwubSPe660KZsktFAKKRzWIAigdw8XT%2FSiMTh15QoqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFVB6vNqDjAAhrzyKSrcA5ofu0sNZp858kqBFoaeBXIFLjoyqYwH9Rhicw647t%2B%2B4mjVAazr69QLeUzsRE2tTfMgDXRuziDIx6kZskstdmUB3hjrGShJOLQ65785fSKrp%2BAakBC9MxoZ0ECzTMU%2Bx%2BuKy%2FH3j2ITFKGwCcw5XUOLYBdAiGJ0UcBwE9ug1tbNifvI8j92YL29cHS%2Bjo2tZjwPGfb%2Bjed3scXmxB0R%2BsWBXxghkOua15wC%2FhupTk2YS6PTsiQMPIeB7qy5%2FuDMm1KA4F71aAzEI2%2FfhhoO9erPRXmT%2B3vml3eYhLGbR8qkDh2usVK5SRCwn6DTyfnCwRIVXd3bjiaLS41YfofVfsjByYW4zIiE0ZUGrlrUVQvXVfOzcGVL7QhCW%2BbJoTeQ%2F%2FLKrHHaE1qgP6ihXNEs5hqUnKXbxCn5514ccTO%2FMsmZFNDhXkLWt0giK9k%2BQTFsRnZ6%2BB28hsBPyk%2B057xKsdV5JxjYUr7%2FR0nI2jKREQHBXqh6RC20b4Og6fprVcCi05rQQWMNkRVYQ9sR%2Bb%2BN12wfuAib%2FUuilbMocE8HYBwk9dCku4RgNzP5Fsvids5pEE41Kg4UG7h0fZKq%2BzB4lPwVhWstqGg%2F7fgO3RY6tlbu47Tbncrt01Sg3hgjMNvp68wGOqUBG0Ir7axuJbqlAgbxar%2BBonlV64PIC1wABwwkACZWGxEJTmKSn9VAeOo%2Fn5uTlrm6XAAcEsWLmdZS7ThUJSCH%2FJE%2FZPz6GmwZNAbh9HrRxwlj9QU21HpKLgnwjJy9mY2%2Ft9EMSuvgvgKkS6VzsRlf5nunLyBo1OCi6NcKoaZeIfvNIFvsnzKOICUezAh4rkRnwM5Mi%2F9OJv1b8PxbyrwpR7UK938Q&X-Amz-Signature=02fe9f0f874630e26ab9f3e965e61f3f7497b26e99b46e9186ac7a20c2108ee0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
