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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQZV6GRK%2F20260724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260724T181836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQDkYerl4eaodz3UU3Ix%2FAW6EJ7wSKEb8aPR81uUb9hF2wIgKw8zBZ8J%2BzOv5y2Jk5HXwngv0%2B6S7uZnYLzfEdN3ypEq%2FwMIChAAGgw2Mzc0MjMxODM4MDUiDMTAOhjBYc6RPF%2Ba%2BSrcA0mLwN%2FV6h8fXtO6iOIlY3MlYm2HZ%2FC2l3jru4z8iymebnZ%2FxTtO0VXOV4TsjfGaezvbXPHGyOCsBCXog3bk9UR7IdzFwpDJx3osJH9bEyQK98OjUBkJBBiqNWRQtzdEvClc5kG%2FoYkdY9wxa2N7IHQphPnmbVUtN8lUBMnSRhMac3kKT9Mbe0cuS8RGYJ0%2BVKbFlSej1lrdDI0Pz25088Br1%2FhmWEztjV1EYtRLy%2Bu9ZnfmP68OQ6CUS6rmE6bAGxlJRSdw%2FdEh5cIYuSkwJ4p%2Bmxu913US83lTAJTr0iD3aA5UvbCaMXhp49pq3%2FuowpXBjT8gDK9IJsdBApgW0kM6hlQ48SPfSWDsR97xoPEfi9lkprZEC7JHXT6MJ%2F%2FMc%2BWlTuk093SNP2JgJjbi3CNo9XOVdJ2Vz8rcV7zZnejfF7Gl%2FbH7ZM9b19uOxfYu0hMJSCEMEz1YFY96FfAuif8p41g%2FEjcAiibG7FjWHiSDpH04N8ern0AZutaE0bQuIk9QKJZ3xfr8InwfB6eLzKVBs3LXbIh72rWMVgO2YYZNjyE%2B%2FVSCcsrlSnhBb0rinisYLkH56xOgsbQFM%2BDZLzS5ut9%2BM3GjsRfcta0s8ENUrzCVkF9RWVg98EKjMKyqjtMGOqUBSesvoJbkdoOfFdcpl%2FEdzh4AUZhT4uvwRvJnMb5E4VFrPpP60bEdYn6D20DzCxNoUNApxMI3nFQCQwEeWa1%2Fns0reVRCgee%2FDT8lEcsRppN7zgeZP4qO%2Bzj3jyUAW2AEe7wTi%2FFmSa9nMH42yiMyy7FaKJucOjYFKsKzQm%2BtSYDqOXddsyIFdlJMJd0FKIxqLah%2BJxwNp34i4cRbXNfibeoRkzSx&X-Amz-Signature=134c49f59cad41afe97a0ff6e0c1c5c36f9b720b876a93d2bbe2fdc07b0633f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
