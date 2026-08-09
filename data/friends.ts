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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWLJRPO3%2F20260809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260809T075619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCrxY%2FTQ8wIAA%2F1J%2FyHq%2FGRi1As8zB%2F5%2FFPuN%2FvWwy84gIhAMdGrxJY%2Fj8e2Ip%2Bp169g6N5xeSldm3W1yopRS4nHtRJKv8DCH0QABoMNjM3NDIzMTgzODA1IgxlK0N6Q5INl05zwOIq3APntNdag1zXJAuNRhqNJ6WNVG0o1mOA5w0zF5RsKrqX60xhux8p9GI4GvpsgL8UdiJ8WDjZ9x%2BLN05BnZzEuf6Nt7jdh8lXyfay8AGD8sr4a4gAp26vcp3%2FNTezcad9v1heLrBk2o477bYHne%2F%2B1dTU8Imq6LenhVVC9skaR%2Fgfl7GkbbJagNcVbtlz2nkVyyDeWvEZPHTYfHSQZ%2Fvu6dmfgyYuOZUKxwHI5Omy42HEx%2BVyXn7uBDTVFB7Ucft1Y%2FCQHlAswiY7pCaj8HLALRiUSZQCaRLz4FEfwAxQoQ34gafoyrI%2B1ILR0HZIl%2BYsgUGs7z21c9PvOm106rhgxXFpMG8LqKdV3ZBalMiOM8B4BNQFr6XM5ltMT4zo%2BrDtRYq6nrVm0FS4TsWiGj7KFq1yjaOhzPJItY17RL1njQffVAmlZchOxCpWxVOQCdGYDi53MLiMhOc2hjI1%2BCAwmM3sB6yL%2BS7CfS8Ij6cVic5tQhIDO4DLtjNGeI8w%2B1m1fopBnk5QgUsuVOZ0brZNq5Wy9ZikDHoSwMPx5ugorypmoUCQtbBi9%2B8tiPQBr74Gbbx4VRyWbTH5xZSpvRqCmOnN47OOjvlT7v2IhpjqP5rW8pfO%2FavtAIfxc%2BrJEzDb8N%2FTBjqkAZWuRHKwqL6uGMxYBLNZ0bshglz9VjuizqKRBm2Voip%2F47B5%2FiZZ9tQgplEH04AlZX6kvVjSxLcM552%2BJtWVYKBUhFIUZvADgGIdlVCIm8RVX8Vqll96vGSCux1hF9VwLuH%2FgeG%2BlHShyffVUa1BNjmPF3vxKWA%2Fcoq0k88KDEw70VWUpfA2g9Mxzzhwc%2FgLBJ1f%2FY53LpfoVPu4OcuDlRbHU%2FRd&X-Amz-Signature=a7b2d958313ea5cdb83b98047b63d49e7b81277b3245dd0da0e0f7c35911e410&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
