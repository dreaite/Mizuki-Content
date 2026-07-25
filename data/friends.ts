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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664L2LQLU6%2F20260725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260725T230122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQDCQSHNQLSM1%2B8kT%2BIwH1X2Qa5teVcVwqrTkqfoDZVPqwIhANLnQ4of5Ko1anbcjAEJN9niLcsFuPfRIvGChGRaNcSZKv8DCCQQABoMNjM3NDIzMTgzODA1Igzz0ZNBbD3KVXZEwNsq3AMbzUewwKxE%2F0%2B%2FTjkaOVB1XO6kRIDiAXkuhkssFvk9ZkmRchW%2Fch54mOGvocnf1d2QQYK32dKyCfcELBmMLcgyMo%2BoRnD1jUYQFX8uBluK5nSwW04LFTS9B177rwmsV%2B2I4nbNsD3KGke3n1IW8Gv7NHj2Xu%2FdIGRmqC1zf9DUSsR%2FDAd7elpnaCpIvSdRsW6o99MjpApCc7RfZ4iWWR8ZyVrtqqaGvJcoeQoMghM4Q3z7ZD%2BVRaX6mt6%2FQ7TYv%2BWmQwLiMdRhsAlFJLmkmS%2FCKplsv%2B9WQ9Arn507M5%2BcCVK7mwoqNwRe3ddbSxXF5ABnxa%2B4PyRw4K4BWXrSi8I7RBDcjuLEvlXc1LNRqYttNpf7OnIaEQWNmI967q6qOWfAUXCE3uz7l3y%2Bji9ZX82lVmnuBUEnsdvqrxV1NB5oHpKJOnIBOG3%2Fu2VokACSjt1qLSNqyEVvfIvuZjpdkaIMEJgpm805np%2BdsyqTqhP9c5uglbO050v%2BoDTKxHn79msDiscIng6omu9uS3%2FML4iN9Liz860fK3L%2BDigOrhzL0TNRlf1hGk86RzwvKzVSeINKIOSWTot3DDkbGvBjJ%2BTGbB5EKlKLJVg2h3uWJcoQe9eHxHxpP0cdAZnjWjD%2FjpTTBjqkASFJxLHXRyZP4GVLBlGYhlXrBy9MkoCjs278Ux2yHSaZ6Tg%2F8ynxOLeY01v0kgOJDkftSK4KAuSfvtjSRSeQHxtNDYDOMYDAYUVixDteFzkFy6L0UFElm38aJTgvqaiLpRzSq%2BZRwMoXDoPlNjnxb%2BcZwz3HV9K59JXAaJ8ccgS4aPE6vKg%2Bf96xJlrbrOfSFr4OKYBudxDu%2BqJU5UfKmShBLjsn&X-Amz-Signature=22a53cd118d7df3c78748fbc77ce7af46c99717452cc471fe372d14d110941ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
