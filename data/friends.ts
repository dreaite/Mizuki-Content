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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTYJQWGN%2F20260806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260806T182444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIEQvcoT62jOWSDSfzDJb3OI73z%2Fa3T9p8H87N31uKynjAiEA4f81ZwNQ5wH18iFBwlo2UkNU8zOaDYXXFwyn4gXkU34q%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDHOux73%2F9z4X1VbhvSrcA3hpYfYMAjFIayGkSylsgxr7eGSarvv8DyaVNHIE2j03HtrxrocZSBpp%2BKVUAYwYsjcpOLlXVErRMxqL19jnUG5WC%2BoPwf4BPNoATkmsyEn2xYJ7VI22H2NwDIUuv5gvdOrurlt4HNGmgxmQcRY%2FZ7EI02boozlaMlHZ6TOCTutUFf%2F1SmmNljDUqgJjekfQp7mk5Xg8xk0UKUgk71JM5q8y63chDE7zohfv6JGUf1bxaZb3VbVF6qp%2Bd7WypfnvKTjBfeZ%2FgcrzuxKetmxI0F1mHIvwAKB3MEviC3NlV7iyABd4ihiPWW4ak13NNjyUqreuqUZVWQEeg6z75WmAU71ne1iz4QnDpr0lOqMlWoJckIqD0zzGwiABNPxmzZtHnG7SGlkZ53RxMPFaT3rgHbmL9Gn5LJ%2FEfYZ%2F3rXaTDHLId1wtRIGj9SXLM4D5J3%2BVc54f23VxIPcg8KG%2FWZnUYbmdiQZA%2Brlz%2BpRPktDKZEcxiadBz4XrLC%2FEdZm3AXlB%2BpL5cK849f%2Bsa2%2B09tS5J%2FM5CyrUGu%2BmiKK9HeEJmjn8WcKAmFpJmzZ7tQYqQTs%2F6UNKn6mmfYlc3dno3i2f%2FCdGLkezpM5Tkx%2BtcwrJ34KTQyj0dTMhIedYqODMLOT09MGOqUBt1UWwIOLl17qEs8OkLt%2B1vVQJXLbgqV1dD0GfpEar%2BRYudQEif8IVaUpModGOstv7PSAL8Bp5K3RbcPzDOkl%2FuNL1%2Fi7WXsOyzbwVteTaqhJqUoNjMFwhfXU%2Fm40vgOdwz4jnbnbwAeQrI2FWHoAWkbqntyK8n%2B0QZLvOC1TmxdxNMdOtfHxewf6Jzl5VZaLFf1balyKoOM6b8%2FzMqGoWrGGQoHt&X-Amz-Signature=a9f8e252b1af005240d3ec02702b50888401ac38bc8c77b7c474602ad141ae53&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
