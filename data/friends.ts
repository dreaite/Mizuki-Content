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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BC4SEJK%2F20260716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260716T171820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIDHXT5cFWN4qEnInVsC7zPen8UE%2BBhbAlyUcwZFDLGVLAiEAjvwzur6PzVxNz7HbgMafglxKuKUSEjn7TjS6L9y%2FUKAq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDEOTiin4emXI3toaGCrcAzceUAfGKGj806Am8qpEuvwKNHziYXL1lVgN0v4DocVNjSDOo16Q4eRu8xSt8%2BIGuPl4lrcNjb91JFe8hLmOK%2FJQvgwAYupxMJb56gwt7YEO7TT3ILpyfmxC%2BIdXAUryQM6rM15%2B%2BZIszuCAIVt5xzI7kSqTTeWZ2It1do6R7XpHiQh1rCaRBopcUdkN5zRphmht4K%2FWWpkk66PM5dFPLd2rS6IdaT5PJKi5K7un%2BTkzoYCCM50uVPmSyC0uEbBiGziRLXsHWKF%2ByVKq7dBFfMMNWeqwh%2FdloSR16trtttI2PNCxJbgiONRDXEWBEPBSCEIYcTG4sq6x4x9MD3golJOi5CEadg7ZVt%2BIP%2Bzy2h2yhxJKNUmc1RJ1beTVUGbEmpcQDBupX72ktatnUsre6k7EgjTS4%2BOb6h1unh1AvLLjOTzA3EOkDZh%2BTO8ieWD%2FXsmtdc3dCUNb4Y%2BHDsmHNsdhapbIhzlVNKwpvgGvqaLYT3OiPV9JK9vtdeTUAsjXeWkIPxltHfI3xwbLe12kSRrRmt66iyYeSI18RdSJse6wrRsxMODDzXoRZVXdbE3JyoGxPPvbCzUgs%2FJgPfB7IQAxPDwLTwSZSAqqQ6K3oJMrtpk%2Bt3ghR4cWmxfgMJfB49IGOqUBuBiKqSXTyjucNWX8WcxANRKHWYyxL0W9SD%2Bxx6mSOVb2CNPhcEIhP%2FHwAeBKAYusYOHS6u9rnJQ0ghFkZ4LP1kp8T1NNNr1T%2B0ShFWh5d3AZk7rmJ2Ijq%2Bwgg5SoRwWBGNd000YNCyrGYJe5uLp2yg9Frhe7MrSkx4aKmGEsVawpmqHiyKo0hvkkbT4NQuZuz3ulQWg1JJK8eIlknWZSRxOf2K3w&X-Amz-Signature=76003dc770bdd565a6e02a3aee575abcf52c4a580f2f7cb375b691ce0e57ae15&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
