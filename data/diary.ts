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
			"https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/6b60d7a4-72aa-4ba6-9bc4-711e240d9d93/MASHIRO_e102b.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRCCHQGS%2F20260222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260222T115506Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHQTeSxrFl3vWidbaIYqaPjDT8H9yEDLYGdBcZabxOniAiEAyGieGAQ8SJvjcfCvD%2Bs6mrup9uuG%2BH3QbNN%2BLA6EbS4qiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH5ksGaif%2B3C%2FkS4yircA%2Bthisz0oUgkRDduRU3LRaVpFIknwMIB1F0kp%2Be7Z2vm7JPR4Q7%2B%2BePzAlWnyr%2FEyNc%2Frxeg6bsFU8yjKEyoccZrYbdtVIe5i4sYIdGOk0paG6q0mEBV1AffxBet0BI53S25rxteUVrDTDQhQZBHg0HMTv%2B7zgI%2BYVLPcq16Nktdx0o3mPyy7RdcDMT9tfPAyETbXoqUG7idW4%2BO2SIjL9soZGYxfskUaWYTiHD9S%2Br4pH51SWJeOUVLEf01t%2BhchJ8Sq2bKlsb227UFqWOfr6ZlGndzIEXVXEjoBHq09fAt%2FhkGMur%2F7FskSjC6%2FIsiY1ZqoBdGWBHn4n98ITJnzaFDmwwTgPkO8CS8z7CmC0fECGRTka2MRPc2xSfwWecypPlP%2Bmdj1a8aWcSOmXWzUvnzuh%2FafjE1cq%2BgaAti6sfqvdL2D2KIMBjfRFcw%2BCQCi79kVcmpXcRV1wPvk1vBfGnlDlThuWJsUshcEkkCC%2FbwGHEK1PzNrXRtIy%2BTQWje0nkQBWg9wNA0c3r203ht88K63ZsQGhLSFfck%2Bh2v%2BtxGtR%2FlxujKIyK4pDoDgF89Sjm0APRZQErzZsmCoKKOf%2FYH5xWHmUovPH%2BWNqzgsNDrVttWns%2F0XHgqngNpMPvF6swGOqUBCtAOwphxmH%2Fcw9QM94K3gdlmVpjgGpvk3J40WXWhtclAZpuw6XbON1HE1M6cdyk40JGxhBpsnYqVQ7ASwc8f9lJhEvLuN1V1ej6WzCZo0DOh60bX6v86%2FQrALdQQyL8gSGxHmtwx%2BNNMwxDloXQM5EffU9mjw7aUFphD37HU7%2Ba5ZtNtCVJOSJfUJDgcXNLEtYXdIezlrdUnoTBcPoxkOuMN27N6&X-Amz-Signature=48bbd8484aa77e077e0ed47da3388ae2a5e8128b7cf087597db656818e0f066a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
			"https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/c2bf4974-c1ef-4330-968d-0266e45daa8b/SHINKU_AS_e01a1.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRCCHQGS%2F20260222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260222T115506Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHQTeSxrFl3vWidbaIYqaPjDT8H9yEDLYGdBcZabxOniAiEAyGieGAQ8SJvjcfCvD%2Bs6mrup9uuG%2BH3QbNN%2BLA6EbS4qiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH5ksGaif%2B3C%2FkS4yircA%2Bthisz0oUgkRDduRU3LRaVpFIknwMIB1F0kp%2Be7Z2vm7JPR4Q7%2B%2BePzAlWnyr%2FEyNc%2Frxeg6bsFU8yjKEyoccZrYbdtVIe5i4sYIdGOk0paG6q0mEBV1AffxBet0BI53S25rxteUVrDTDQhQZBHg0HMTv%2B7zgI%2BYVLPcq16Nktdx0o3mPyy7RdcDMT9tfPAyETbXoqUG7idW4%2BO2SIjL9soZGYxfskUaWYTiHD9S%2Br4pH51SWJeOUVLEf01t%2BhchJ8Sq2bKlsb227UFqWOfr6ZlGndzIEXVXEjoBHq09fAt%2FhkGMur%2F7FskSjC6%2FIsiY1ZqoBdGWBHn4n98ITJnzaFDmwwTgPkO8CS8z7CmC0fECGRTka2MRPc2xSfwWecypPlP%2Bmdj1a8aWcSOmXWzUvnzuh%2FafjE1cq%2BgaAti6sfqvdL2D2KIMBjfRFcw%2BCQCi79kVcmpXcRV1wPvk1vBfGnlDlThuWJsUshcEkkCC%2FbwGHEK1PzNrXRtIy%2BTQWje0nkQBWg9wNA0c3r203ht88K63ZsQGhLSFfck%2Bh2v%2BtxGtR%2FlxujKIyK4pDoDgF89Sjm0APRZQErzZsmCoKKOf%2FYH5xWHmUovPH%2BWNqzgsNDrVttWns%2F0XHgqngNpMPvF6swGOqUBCtAOwphxmH%2Fcw9QM94K3gdlmVpjgGpvk3J40WXWhtclAZpuw6XbON1HE1M6cdyk40JGxhBpsnYqVQ7ASwc8f9lJhEvLuN1V1ej6WzCZo0DOh60bX6v86%2FQrALdQQyL8gSGxHmtwx%2BNNMwxDloXQM5EffU9mjw7aUFphD37HU7%2Ba5ZtNtCVJOSJfUJDgcXNLEtYXdIezlrdUnoTBcPoxkOuMN27N6&X-Amz-Signature=090877e4b7443f24e03754f20153769758e1a4696d8dcaee77afea05aa64cf6f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
