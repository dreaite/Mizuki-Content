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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TPH67BX%2F20260717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260717T040727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD54q3RZV11vivp1fPJMNQ9QLOMaAF5PvYOT5pQ7vYqOgIgeVGC3DZZh0787sME%2Fo00Z%2FAI8Los%2FWNgHvJLKBE3ar4q%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDHrSCzet%2BnQtd0fEvSrcAzjXnvqaIZMiS1EMZ3Xu%2BPOk8qsstBgds0wijf96rDkNvLiNhZzIsJgPjnwMDOS78LxWOQeoewY6M1HwMjYf4nfJgSo9joVqX1cgoFNloUbxUDV3uhZ6GU5pRgpZzdduBt9aYRYFZQymRUTXxUr6R2vZUFfFLFG3i7EDaJ%2F6XmXd5EC1yrjS%2BSjItRWNk%2BAxY6K3N844xywqZTNtF%2FoS2%2BLTQSSOzY3zmTltWrJ2jc4VNlgXRJFcMXS%2B6KI5IbrMBorzWjjim%2BI9HYQLcSTiDM7O1VKNJZZGBtARYmN%2Fn8LwPEUhdlxCx4243sFQ39Saxe9kKVMSuOP35XRjnmPNoBHekYswG81xBwlqSsy0sW3SC0fZeVh3Yk9qQHQ0oGVTw0EWd%2FhyH6UzXK1qAaoJDR4kF655%2Fe%2BmHZr4RSivCroZG7oPfP25o%2B718czZtd%2Ft68HbKWsMYsmBJra8fWOpWDtdV%2B63qiPlLRBOni9%2F7Cr4TvyKUVz1VSZ089lYCpdx4ApxK1bP00tHRzdno9ek4wpsWtnXTU49vnqOH5TK1MB0QS3A5sNUre2dOWVijkQMxiTOd6dPxTtWHZ5qXqCsJH6YLexSkxI%2Bf3wOHaOz3SylweIurH0jrRHek6LJMNKo5tIGOqUBemIWg%2BB5W3WUzDHCo2hJIS6peFV0vwX0vWdIudUmRcwbBfhaAuWQHSjuK40TP4e8Kidv2Ack8be8DDC34we7NNAbsIWNMmpnQY6RhHsmmL24viDvQcZnOA9aw96T70dKw0vohyjJ0TAvAyQ1EOdmTFyuS9Omr8cuTlwpYMwDrntfseTnY%2Fc18P6MHxU1WstOjRUiKMrUf63T3fZOHkNQG3A8JPIt&X-Amz-Signature=bc812f247655d4b1ddb9133615fefcf2fc9a71ad3cfad2201faccecf08eb1bfd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
