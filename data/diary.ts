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
			"https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/6b60d7a4-72aa-4ba6-9bc4-711e240d9d93/MASHIRO_e102b.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDJ6CDE4%2F20260222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260222T114129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDU9VtQhzDn42dDPZIDOLU9Fb99fOo0hDawNhvcZlUp6AIgOc5XyiIb4yjtL%2BFX0cD%2FiBTEtLIPvPuEQB2B%2FqGLqycqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFSmoQSg24mr7%2BAhSCrcA2Fiv0GqMl%2BIDcCiGCG2%2BGTiCyqC10G3CG%2F7IfjBEa9uvL%2BaJyxvf%2B%2FhVs%2BSSftcYeOlr0AItwNoR91TumU86jqcgF5v0zXfPEXz6G%2Bhze6z58iM%2B5htUGi9DybbEAVDJFgOgyyFxGchZGAEjdz7s8XknqJJnxO20K3xa%2B2nZeJfpQ%2Ffx3PJzif8g7J9MCh34%2FrCnUWP8k%2BiA8wY%2BROsFTcd0220gXd6CzICPpo4%2FEgJ8M1YMWrOKc3IEStABR76SzUmWiZ44UT3du%2BuHX8KufNHuNCPSLKCAQ8gqvG9KgVa1bKuELWMO4ML%2FWxVpRwsrVK%2FOJaEoOZv%2FD3dIl1EonvexaOaNv%2B9pUTsAzfVltrfjJkdN7Xq4IpmUgC4iJj695fzg4CAajLLJItmDiEgygezGoT4qQmiEO3VAlzhGyENbpGGuXPcM0RkQkr7185rC2gYCE%2FxjL5M3hHKZQyMSUR9pORfzwQfxN1OyLdtlcK%2BlPzy1LLOtbdfB%2Bu0B4qtzVAcCf0EWzrdwBTurFXcFqqveAe6FcNgHm1%2F23cQUlGQ1b%2F%2BaGPqwtOR%2BidaszrcQtdz3b1BT3SKAzYmXBNbXmkLT1IaMPQ5KCGcL5GYS4q5cm2auj%2FQEWENXjlGMInF6swGOqUBQd5%2BqslzySVawuSDeA1e39U9cUw3o86nlbiL2DBhMRkRifCdzXF3iAUOezBg6Hl6TRolUZvVZUW05OGqnjQthYqdCMAsPFoECN8ZRyNKqXjvsxuwle%2FA1gUV11A%2Fesv5tyaA9L535kHbpxJAye45%2FYQlxeBy4boAGsfQIZUu0cILlGS7YYKlS1cpXDfe9ci97%2B1tpYzco%2FaY0qPZyjX6ACXT0y%2BT&X-Amz-Signature=8d3dd749f8ce4e5779e934aa3af9b3d2ae177f3dbf1dfa2390e3c8d386c38cc9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
			"https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/c2bf4974-c1ef-4330-968d-0266e45daa8b/SHINKU_AS_e01a1.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDJ6CDE4%2F20260222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260222T114129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDU9VtQhzDn42dDPZIDOLU9Fb99fOo0hDawNhvcZlUp6AIgOc5XyiIb4yjtL%2BFX0cD%2FiBTEtLIPvPuEQB2B%2FqGLqycqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFSmoQSg24mr7%2BAhSCrcA2Fiv0GqMl%2BIDcCiGCG2%2BGTiCyqC10G3CG%2F7IfjBEa9uvL%2BaJyxvf%2B%2FhVs%2BSSftcYeOlr0AItwNoR91TumU86jqcgF5v0zXfPEXz6G%2Bhze6z58iM%2B5htUGi9DybbEAVDJFgOgyyFxGchZGAEjdz7s8XknqJJnxO20K3xa%2B2nZeJfpQ%2Ffx3PJzif8g7J9MCh34%2FrCnUWP8k%2BiA8wY%2BROsFTcd0220gXd6CzICPpo4%2FEgJ8M1YMWrOKc3IEStABR76SzUmWiZ44UT3du%2BuHX8KufNHuNCPSLKCAQ8gqvG9KgVa1bKuELWMO4ML%2FWxVpRwsrVK%2FOJaEoOZv%2FD3dIl1EonvexaOaNv%2B9pUTsAzfVltrfjJkdN7Xq4IpmUgC4iJj695fzg4CAajLLJItmDiEgygezGoT4qQmiEO3VAlzhGyENbpGGuXPcM0RkQkr7185rC2gYCE%2FxjL5M3hHKZQyMSUR9pORfzwQfxN1OyLdtlcK%2BlPzy1LLOtbdfB%2Bu0B4qtzVAcCf0EWzrdwBTurFXcFqqveAe6FcNgHm1%2F23cQUlGQ1b%2F%2BaGPqwtOR%2BidaszrcQtdz3b1BT3SKAzYmXBNbXmkLT1IaMPQ5KCGcL5GYS4q5cm2auj%2FQEWENXjlGMInF6swGOqUBQd5%2BqslzySVawuSDeA1e39U9cUw3o86nlbiL2DBhMRkRifCdzXF3iAUOezBg6Hl6TRolUZvVZUW05OGqnjQthYqdCMAsPFoECN8ZRyNKqXjvsxuwle%2FA1gUV11A%2Fesv5tyaA9L535kHbpxJAye45%2FYQlxeBy4boAGsfQIZUu0cILlGS7YYKlS1cpXDfe9ci97%2B1tpYzco%2FaY0qPZyjX6ACXT0y%2BT&X-Amz-Signature=5a6e80d221af96905452865db6498b51362e8d0124c9343b17cac70f601e5b7c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
