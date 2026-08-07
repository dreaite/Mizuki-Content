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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666C6X2VQK%2F20260807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260807T105306Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHWQ6Wuk0WCByA99NV90ZbIr3Xgq4bhV4nL3BLW7Af2iAiAu%2BnI0%2Fnk%2BSC6yjYHMFyYAqkWzafA%2BeA6j0%2Bbk9HkUgCr%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIMfH6NfBQ1xyQ%2FvKfCKtwDwir9pRDRY2LfTFoyrYLbT6fekEDtBzq%2F20moIkCHRQX4A5vmkuAH3%2Bmuum8WnHFY1%2ByDeWyoR4QsIyBt37%2BXV%2BhNz%2FNABf07PYPeqLF%2BHkMoDqb5iDlKuE2FTKZaoXcTqIwlq06mKTdeB0lujG2cXbtaoXNMNAN5VeGZg3vPh2u9cqJWMBK%2BQAsPjIObkhjcmiFDXw3O%2BKB11C5bUtLVz137aNxgHMrcwORReVLllbsB9en0zMFIcPF3mGLPxoOQEC88scIPlYFLU7p4iXqMRa9ukyjg0k5KDXDwzmXZKm3lcM3Im9i%2FyAEpGLZMvmoycz7tsPviPwtraU7xltXtZwTLLtlw5sxu%2BKalliNdHTgGOjqzZkVJNPr5FWVp6HnipxZpitY%2B0vORaQTHjuWOFshpQ61ImxiIreFM7jvaVt0W%2BRZYQGhTqdmBKtsWzwkfLWeGqhRh%2Ftc96oSN3c2YzDKDw%2FpBl303xiEOIYPdfRgyXGd0MH0yEFxl9LRsFoDZseRryVukR6glF4drWiy5gFtjw0kEljg3q8bS3ufywdErfxvk%2BMRgFwn3lwmfID1KxM21qOebs7FMLg%2FHGNpan0qnvy13e%2FSbzxPCzkCPLTnE8%2FKSnMW58wME1powucnW0wY6pgEIkt27LOvPpJSkLh05nKuxMr%2FYgJ8EPlRBNzA3NWlB8U3bDFwJtBnIap4vlE8DpOn13vA%2FHpZGUPzPtUioTOdPeSXUxY0EN8GXFAJxTIA%2BRDgcmdsNCGBZ8D8kcTOlzsLzv%2FzlOK8b1NyBmWFwsezYv%2F5BRN3NhGeiQp8neG0VxeI4mZZd6NPuxUo3Xxc%2FPGvnYGOhhjlO0DZ9jI%2BH6PWU5rSa%2FNO7&X-Amz-Signature=f31949f1fbf246ede437574468f5ef846cb272da661b4c86ee29cfe3e865e51a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
