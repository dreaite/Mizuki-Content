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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SHCPP5X%2F20260628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260628T110910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCoFqIlt2CevNn9har2pjdLMUp9qERFlLPWpmSnQ3OobgIhANuxJYlMbjzC6rYjZxYjKDUPkBppqTKsMkm8reQfPP7RKogECJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy41npGoR4inJ8hkAgq3AMq10zbAf1dsKhWHKrf2HdH2T6p%2BNlL718YNdIUG1b4FanATxzLCYbGjseKCZBW4%2FwS1glEahMZbPkaWHmyDy7ziGg8JYq9SDOskmiCUYxrYeHEMPAMhdPK%2BCDcnJyvdnQ7lw2rSKQHtZ6N5YczKY2SiQd%2BBWIR19yQoBX17eyeABtugZOh7uy1QEFVkMrFugKxmLCpr%2FL7cc2nhf%2BDQ9khOKQE%2FS1woaVuylUmnGdvLE4cE1fGmPNXAMnHVmu8V%2BbZ17L5VtjHOoDYzVZvyDoz2dnRiWBAWdvU87xp%2FLzXqLIYuuLUMXUP7uwEBwsFghcYIznqP7hR2Fcyre%2F2sQ7gsJE3j4MfSlmC%2BqXHH%2BuQLp2OhZ%2FWFEXBaHoudIa6gP%2B%2B3OeFayL7dM00uNHk8%2F4pj4T%2BgWat5T2axw5y%2FAXbo%2BoVlZtVZ7PKj6HSTxefaBOkng6lp38bFxH8ftUC4NHgFhRNNlMvRmMM0lWBx5jVz9ccb5eTEb1fllNtq9a6Nj5IRpU1M8b3SaCuNT67tjZvHsdTCFWVC3c7eIgNtWsg9T6yFRfB2LpUP5CP9Rs1xOH8tWrPHu3%2B5KEdjptXx4I7ydCrrnWYHbW8Czv08RcUAAUUpVaRJtds1cDCVDDI0YPSBjqkAcdtxSc358uRcmot2mAW7warUOxNMZ0QSK5v05M4q3s26ztPlgJkfqNSin37WJk2MKLJ8aNY3DJgn1Q5OMPQMJUP7vmUVoTiRrkf0UR0styq6LFH91%2FtoswecZdwhKBKnsh9EqXTEjBg0hE70ASTXFMTbtHunC%2BMIZNuvkfbvbquRzFV%2BhOyLgR4xGuVVUQ5gRFNEnW70KQNL%2FTDKPj9kXXjIeGR&X-Amz-Signature=d2a0f23fa6723e2d4a808a264c1162f65ffce7c7e6f7edca9784119f8605eb07&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
