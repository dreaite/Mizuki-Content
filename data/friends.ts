// 友情链接数据配置
// 用于管理友情链接页面的数据

export interface FriendItem {
	id: number;
	title: string;
	imgurl: string;
	desc: string;
	siteurl: string;
	tags: string[];
}

// 友情链接数据
export const friendsData: FriendItem[] = [
	{
		id: 1,
		title: "且听书吟",
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2MVSQHK%2F20260726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260726T025600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIDUPCUA5BXPJF8P2VizQO3X05C5Pwrv%2F9eVJ8fAm%2FgY1AiEA4QUenUMys%2Bc8aLmAjVetPDwzvZFULeKbm4ab8Aa8TWAq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDNiB7KD6PSBgja0wgCrcAywCwRPx5o7SFL5PppWYoU6x37W2dLes6J246gLCg2GItIP5Thse1A%2BRntYKwOqICfLgyLFad61b5ytlQsQOzX%2Fzh%2Flshuoaa73ATehsunCPCYmVRBqZhF70%2BLxbWvF8khfq0%2FL59XrrBC%2Fh%2FHrzvWFyBTwvm6zoH26qzdJ%2Fw5%2B09dwCW4ja%2Bc0ehMBLL991jXifNBP2WdsxplwYIFmUJ3qtwmrt%2Fr1Kbd5t4HyTRjFQYYiNmuTfgCMpHk7gzqq2sbpjD0kBkDch5PJzdXlAZQUWh3z4OMFYymxP38PHilOO1QY7S1aD7FNgQJAZ6wVAM1WOaRuz7jcrelXg%2FeGVjjH%2B8NuabbGsudd2beb3FwCMJ4iDa3JGuHgPy29Ce48M8%2FI%2F7v4JmU7K4KtmXzosgSthh8OSJ4VxTDeVK7FubMM%2F1OZlkswJyhMN2H63GqjQKe9LvVE%2F8a4OvXPnyOksL4S0mTuTUd6YxL1VZnpsghhlNyo9%2FRslJ4a4pv9kwM1WHXuSgnSLN3SqxpQbeALY4aUdjLyiBKSo6cSfOOiQVZHp5PejZFastc0bKPyoQ07fUuxrrE3WocjVgEoAG1jpg8Qbwo2IZ6VFKkwYDquW%2FoIOke3O3dvKQz8tweI6MPjmldMGOqUBZIbkDbfuc%2B9qqu793m4G7Wucw8r79DF12WRhdeN0DlQtJsA%2BLjB%2Bg6W2sWmyvCCiA5yFSvOsQM0vxUF%2FeqdBSsm0p12JQrPdaEuucC7H6qVqPXCp7HpZ4Kqnv4rnGVjKnnTzhwAoYfF9RfgOjsK3Ab72AMgFqdf33Xnh9R7KweKx0IW4stQpa08cvWQhaBHG8vttq8VkxEwQDMNcwmW4b6wldOdI&X-Amz-Signature=b94611ec6730bdf830e55b01104a99bf1792c99647c6baf8e220f614b0208ddd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
		desc: "诗与梦想的远方",
		siteurl: "https://yufan.me",
		tags: [],
	},
];

// 获取所有友情链接数据
export function getFriendsList(): FriendItem[] {
	return friendsData;
}

// 获取随机排序的友情链接数据
export function getShuffledFriendsList(): FriendItem[] {
	const shuffled = [...friendsData];
	for (let i = shuffled.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
	}
	return shuffled;
}
