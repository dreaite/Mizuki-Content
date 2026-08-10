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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V45PAEBZ%2F20260810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260810T160512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCAHMRK%2BGFhBqTCcJRmuXUjCP%2BIi1OsUNJuDL2FsyJ0wgIhAM1GjyKcFV4uJ%2BXT1hJqe2QE5ApPGKq0XnCvpmpRPwpxKogECJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgysqM3aXBkE0PxGKFkq3ANAtkisGORm844D6e7%2BjJN5CcEn3MB38E%2FmKAE%2BfMZLjaUlLsMT%2BRDquZ4ovhw6TrAN1cVqi2puZnQOCuIP%2BWCX%2F%2F4IbPH1eUwxtEj5u%2FkC7WOeXZLDK%2BjimPA4EVZp27mw%2F09zZao4ph6CrRjHZ4G3jtmgwOA8NHIrKW%2FzFK84mkq32Nr7wTUf9PNeHJVjpx5LgJ29BzNKPR07THuGnHiw11AG%2F8lwwyvIlFarP1K35H0BDMoJ6yL7sT6zLkqfBBKbgoQFu60kI986fIlzItdR4%2BiVB%2FS9tfMLWwmkCGhx7bPqtGVqOiP7fbVAkX%2BtPk8BAQQV%2FYdxtLEKfvErdD3PgTb5uOAtGhz0nekEMWnFGLRg3gxQIkg7W13z%2FqnSsCYsJTHfnXJJ%2BkPkC5Wh3m5AxcsPGP1XoACb7sgE2J%2BA0nAbjaJ0KX%2FS63rby5XLnA1%2BVNiPQaotMTmVVJ%2F%2FNNKUN9dRyHR9cK3GZMoLuDyJzsAnOhW9RKnDgp%2FsQ9WbyIX9YmBHkenE4BLxWMKiLW6vBf4MPfVStJjy4BRibrKTLHn9koO0Ere87jGdS%2BolptybC%2B1xb32lZX7ygiL0RgkC4vx8ufOBNFvE224ijbtepdF7%2FtcehPzUxub2kTC7t%2BfTBjqkAaICR9Gxx5JESUCys%2FVRS6i5ts185gYcJVLibW1TgvuPHS7%2FLfUHpCGz6%2FXPPxONCAApi4xqe8P13qajxTkUt%2Fo0UXeKrKuWIkJXnZBhblD7t0XXTHrtng8xnpWpJRFlAE0CsBlYEooYfg%2Ff%2FfEP8iDp3bfWMsqJI6HDkZb7YToEd2jY%2B%2FaaX%2BL%2BnJQnLIeAxyo4R7ifNkVh1VSXK0bZqT8Tkhre&X-Amz-Signature=54143fac988b017d255e0e46bb524a24c76c61fa82cf903d872d462be79c5d76&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
