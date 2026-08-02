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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7DV7HR6%2F20260802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260802T191221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQDT1Fk5FiNJe%2FAqFhZeCug2mzUBNfU2HCda712J%2FjDKZQIhAJOqH6GUPNsMi4RR5Lkb9tBo0ej4SIC46pwjgeXPpFvAKogECOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxcb3Kh31hZ%2Bj7XYOAq3AP9Q8iXDilkALgzl5JI%2BRCR5MjEQYG%2FrYaNPXfXeTUsMwZTQCL2io3i0TUIINGOcNE7S%2FaCiDjxD7%2Ft5kXGAB9aFpvHplR1GnOfPQJzq7PA9SD1pawoehyd4DwlrL6BytsAc4992VYEGi%2F%2FzSiRvBOgi3U7bSxEiQXxI3Nxk8LQowUVnHkfjiJDqdDMN8fuNy%2BWCYEI4R%2BTx56oCOoxw8ilM78I5VWOG9P%2B5D7pzyRsH5H2mwWnLOzgWz5sl64n5ddBKbiUQigiwAM%2Ft9TA6eQg4352ffgiNdjSrJOHBFIi7Po6g21zB2Ksdnv%2FmSnkpMLaeOxGZbG%2FyHd9MLnGZnkoaqSf%2FUdBNjE9j4cu8YnDZFKkfqtCOhIoO6j1cLKetXtU4MSm7GVElpV7ykq1gkX%2BcF%2BHRHlt4paxwXvFX7Xg4GS61Qbp9HLTFCIczhTnTkiCFUnWBJ%2FdsA%2BOnMkn69qJOHsKjAnRRwn%2BNuTJ%2By7pkgTqWrmqvFU6G7A%2BeYIJxLipWsymYFNAlW%2FzOvtXo2DHLvN0FOA8VRi%2BlJ%2FjQ3btJUBvCFXSnN6ZlGIjDl0usG%2FcjG8ALlu%2FFOp%2BY6I6OfAslEA38KGbkn4L%2FnZhos%2BJUgY2Ko2Xq%2FuaKV2cOzCEkL7TBjqkAcl5MROO4%2Bl4ezGrhtm5eaxhdakfjqRx7p7mnsiAfaT9n%2BD2lBc6jxNoYaryXsm5A5CPDiAgIqG6mrXk%2FsmFrsZ3EO%2Bu8nnX6riq4pgi9mOLyWm1IuA%2B9XFNRdJHip5Ns5RH%2FFpw0uEjM0sAT5pWVhR1YAgz6WK9R9XBQymAuHxcR79wa2OiKGPMbQWNOzCi3xcrgxZIc9Z7b31Y6fi7FWEjOBO%2F&X-Amz-Signature=5c119aa963753df1fcf3ceda1c2b58983be9dfc3613a353a2540e63501aaa6a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
