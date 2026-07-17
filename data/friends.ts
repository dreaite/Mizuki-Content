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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQYYLAFG%2F20260717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260717T113446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDqXJiSPQ9U4ksgqCEO3vUurnEwoHLu82%2BbvrX7cj2hxwIhAILSSNGRK8mfSR5CWWhllpH3ct8zbH0I9POdai%2FG0mfbKv8DCFwQABoMNjM3NDIzMTgzODA1IgyScaqufVjpT%2BLklXwq3AODVNJgji3lcprp5EMiewREA1gON9vBX2c1O%2FG2Yf2DBtCdJ7uo%2FScSZeDrqI8y5BeZ7FjEludd98gb%2Fik%2Ff7kesuhAS20%2B4BNcynb2u0OAPjEr5xBYQ5U3NLZdeyaspdNAJsSqW8XTk2LDVzhvFyt0WrKD7bj8%2FMokac9qptnsY%2FR%2BiaOu8ZGFZvqxHBQ%2F4zG7iJhAW7IgBTaiZDeNll%2ByvlaaBGdtD3%2BqeU%2Fkls3DfNPzDS2GMy20i1NlX5C2ghKWHwnOu%2B14DhR6Vwt5YxqRWfeGeBGWurNUozFyfvf3xcEGoO8OoTehvRtgYzmfKqensW5QhU7myFG4Mf6DUkPX2eiybzVuz5f%2FrX5NkN3xANIPLH2BjbscOgj5EvbmmnfKRXX12AiltMK8TGBHX5%2FVI%2BesGvLbVBuJYiwbU96JhcnVTDtj8UN1jqwHgXUetPSUS1JaP2gGqVG%2FscuvFT1w2iza9HbEgFRX4jVB7yqwZ4zXwrQMxFxxSYGgjNWnttwUi4TKqQDbADHKViBcueLnza5FAN%2BlfiAAUs0%2BZEHjkFvs7Q4lOT1xmVP4jpRXpTIqsdrFujkne2HZxeQIJznHM92GzwPQ8ra9SUSdKHSR7hk7sbVDgi9hmgSqWzCYjejSBjqkAalWWtvtW6ZxWpXXCrB%2Fqf3NjaYYMM99ynU0YUSY2hZdp0v%2BNdBS54Tgu6AdZw2%2BDbscI33%2FvNxbM7NNKikU6eGgOLogH2figxYc3DtQfELyqGn3671%2B%2B32SsYuNksYmIY%2FHnth8Ictnb6iNqWmYvh9r1FoHU7qNhEHbhHrkuLWHbl9yVo%2BrnRfQINB%2BniDA59%2FiSJaN5MBACRVvFUldBFPXStO8&X-Amz-Signature=02508941e92e6bd99bef74028ebd685cdba0e83d1fb03917dd86e80d1fd561b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
