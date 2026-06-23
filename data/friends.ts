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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVCZLNXA%2F20260623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260623T000805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJHMEUCIQCp9swpPMJzh01QxzZb8OIorU82cajJ%2FUK045KXo1gxkgIgPBJ8jE5j8EcEAy8oCp62mZi0KUPcydKSwmaDmldMf90q%2FwMIDhAAGgw2Mzc0MjMxODM4MDUiDK3WGi%2FCZedXTUPidCrcA%2FWKQmdHU70WhmoszEmCxxZQW0l7YbxAihgVFEK%2F6K6rTFoJGeBE2ypZfuX2MT5psN7gq84NphXmDLhoH%2FrqELmUwp9lujh6DBGj1H%2FEFkRT%2BhCvDVq7ML1qPQyc4udyY0U546DpWzwqDnjR3%2FUKdB%2BDagQY03h6UrW1ox8OYg6qmQ3vE46C3bZJ9vKeuJIuEoJ%2F5iXpTqjn7nAed9kY0HlvxnKi9KrFpLxHdCk7vIQ8wzUnha2FIZQJZcuRd%2F4FQAzM%2F7l2WaykY8RU8HMZEMSJ93HpQVd0v6rpSnVmn16u%2FZ31WRUT%2BlJ8sp%2FDzZdiIGaJkh3HJtE1FWOGVboyyV7ICbNPOCwdQPYRcaKIwi0wbutbxTz0b55YrG3PpZdtQNUpC9t7E8K%2FLGooFG6khfH0AIVCE5onOuzGtI%2FBPtIWMp5ExkIb7oS6v7n4UQuEn4KtfNAKk0Rf%2FmyXucC9s%2FRUFxAq3vZlvIua0jbaJ7%2FsP7Z2oQDxG6VJX11CrYSDjDdPeDI%2FG7mWul2pYdtkNGPlMTQBHLwZPWWaEN07e7WSAqeHJVaLRNvR3laphszFnLQET12GQPofN7fXk5sN11WOFhkleeupsGZuf%2FD6OghfGj4d8z5fWCRDHiDfMIS%2B5tEGOqUB2J8w9NjTBaC%2BpCmK%2F%2BMQ%2BFmbYWs3FWYtOuQ73vZuVoqdmwE3b47k8v5%2B5cF%2FcXocdxVs%2FIFcpyj8EdwT2fENdi16nxRhsV2ZqMdaz6RQNI3DZ2qY2RZoPbixbfie4AEZaJhADqNkMPCR1e9ROZg%2FKo7oz7eJx9BnvKK%2Fvwp8eyPcllDnxBRxehZ5Nly4thShW0LOt%2Bd5GcnFGIzTCzLxAp9FDy1E&X-Amz-Signature=b021c5c4c91664e0edb17db4c33a1056ad82082531f2d4c1ba24a74e44beb792&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
