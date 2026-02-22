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
			"https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/6b60d7a4-72aa-4ba6-9bc4-711e240d9d93/MASHIRO_e102b.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZXEBMWR%2F20260222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260222T110815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC2Z74DVXvrhv1rObLC7Aw3oL5xsO5j8fKWfTrC2qqJuwIgaq2wExK9cM8wqsYcBypTniYYhtCNIUKJb2zoeOFPqGYqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLPREQ53ShiuaP0ndircA1AQNLnZXykAyrQhKq7kqymHZF%2FfvxjKu4KwYB1aVMvarYwDhLvWk%2Bf5TpyDCh%2FtHSM%2FjPDQemDPkKt%2B%2FI%2FozDZz9flUnctzofg80Xqz9YLLVCpRlP82urCyWiLCMkPSEJZkjeXTHX0Hzx8OXoQThAE3pLsycpNdUpphIHzl9x23fGNHGpYJd%2BxvIeSEOW8XPzqj2OZUHwninrD8qd0lQqkOZdeWaYhiK0FcqIkiQr6bUKcw9tt7NHFEtOoUPaNgh1b4DOiRoGk6XaeiKfBIw09ONEEl%2FAdTWWOlmaFb33E2saOt7RXbCLlJRQa9vLAGZPe1qLbZHFP8ebJZcBq%2BKPu59DHNqOPMXm5npmjF95Cx1HYhUH3C%2FnqvrSfJ6UNLtwieh8YF8NVVAULIIA50q8uVeYRpIcfBbgG8%2BDJ8S4sKl0NjTtUUrZQb%2FUH%2FYtiUEzPhhlxUPB3ebQeQqBxrTcwCXhXRKis437rE1d51IK7uT8q6OrCbyPiN6cwkH5nXR5956oK5G8Ix0z8QM3MlTeWoV2%2Fd9qhCZMmjV6TZ2%2BxWVBobwpp1Db3LznlBnK6uvWX4dwGHerreq05PtzCUBHWwHjGEB0i8xxMDhJg2ghjwv1fqt5umDT5rPHKUMNbF6swGOqUBNihKbmkmICP%2Bk4SF7A2pKykAy6Um5F5bzDmNpc%2FWFgderEm0KEfaGmwMat9ZFN7WZIf%2BLsQWjScD2GIJ5jNT0WctYHxIICp%2F8%2BSaLsmm6vc7hlAxUJ%2FwxkpfYIow961om0FlVEuaEg0J1wi%2FHlf%2F1n8hCg7gSkYTbgmqIjl%2Fp%2Fe9a3fwkncRWfFUxkZ3xhgq4HLz3mzGKE6pIhgQL5WI3hAAyKhL&X-Amz-Signature=f928ae62d9cd201390714ad9a6d0b854cb8ffdd31be3400262f81ef7727962a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
			"https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/c2bf4974-c1ef-4330-968d-0266e45daa8b/SHINKU_AS_e01a1.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZXEBMWR%2F20260222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260222T110815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC2Z74DVXvrhv1rObLC7Aw3oL5xsO5j8fKWfTrC2qqJuwIgaq2wExK9cM8wqsYcBypTniYYhtCNIUKJb2zoeOFPqGYqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLPREQ53ShiuaP0ndircA1AQNLnZXykAyrQhKq7kqymHZF%2FfvxjKu4KwYB1aVMvarYwDhLvWk%2Bf5TpyDCh%2FtHSM%2FjPDQemDPkKt%2B%2FI%2FozDZz9flUnctzofg80Xqz9YLLVCpRlP82urCyWiLCMkPSEJZkjeXTHX0Hzx8OXoQThAE3pLsycpNdUpphIHzl9x23fGNHGpYJd%2BxvIeSEOW8XPzqj2OZUHwninrD8qd0lQqkOZdeWaYhiK0FcqIkiQr6bUKcw9tt7NHFEtOoUPaNgh1b4DOiRoGk6XaeiKfBIw09ONEEl%2FAdTWWOlmaFb33E2saOt7RXbCLlJRQa9vLAGZPe1qLbZHFP8ebJZcBq%2BKPu59DHNqOPMXm5npmjF95Cx1HYhUH3C%2FnqvrSfJ6UNLtwieh8YF8NVVAULIIA50q8uVeYRpIcfBbgG8%2BDJ8S4sKl0NjTtUUrZQb%2FUH%2FYtiUEzPhhlxUPB3ebQeQqBxrTcwCXhXRKis437rE1d51IK7uT8q6OrCbyPiN6cwkH5nXR5956oK5G8Ix0z8QM3MlTeWoV2%2Fd9qhCZMmjV6TZ2%2BxWVBobwpp1Db3LznlBnK6uvWX4dwGHerreq05PtzCUBHWwHjGEB0i8xxMDhJg2ghjwv1fqt5umDT5rPHKUMNbF6swGOqUBNihKbmkmICP%2Bk4SF7A2pKykAy6Um5F5bzDmNpc%2FWFgderEm0KEfaGmwMat9ZFN7WZIf%2BLsQWjScD2GIJ5jNT0WctYHxIICp%2F8%2BSaLsmm6vc7hlAxUJ%2FwxkpfYIow961om0FlVEuaEg0J1wi%2FHlf%2F1n8hCg7gSkYTbgmqIjl%2Fp%2Fe9a3fwkncRWfFUxkZ3xhgq4HLz3mzGKE6pIhgQL5WI3hAAyKhL&X-Amz-Signature=0c67ecf6b8742bcf9353960c85d7d28a1ae0e2b50828ae35c9de564dac0d6ec9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
