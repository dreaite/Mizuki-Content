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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HFLA3YD%2F20260612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260612T222548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJIMEYCIQD9Wai1aTi5hgacEwTxtd%2B5H75m3RAZIuJqfl2YzxvuxAIhAKCoJrACHzn3O3azYxCSTRyB4eKXnoeEHY8R2mJUlTx%2BKv8DCB0QABoMNjM3NDIzMTgzODA1Igwj2NwmfXR7Yv1GFYEq3AOUT8uOuAGXCOEyGFTzlFQx%2FJ3k9SRMx39es9Z4ElAr9WNEOgGfCnc0iB73d7y3xotrpJ0yhF1aRFReUyX1L2VqBahQxIqXoU9H1jhanyMPsqlALsh97Rzdu2lCK0rqZ4xZiuBnWlHzVG3LbUeY%2BUpgiBKB8yI5WI2RygY5%2FAMZ0RKSeu5cWO37dtgXoHhL2HPlGGT4gDB%2FmfO1RfPUQPK3cXRH77H2U4FxM1JKK5rzwgOZ8DIetpK1BQexN87Vn9bdBnR865WHs2VPYzZ90nNsb3Ryyqjofh8UWymarUwNX19eKwfhF5KtL9INuMf06VpmPvbyNiVDauGXQjET3n%2BrxxO3x5EFTFaY%2FrKs6pXYXb%2B1ZlspQhOagU9PE5%2FMrq6AeJ%2FEgm%2FKyDnW0D5bH0GnYsPm4%2BQzlUXqzU7XT85h1x0YDa58QcxKqpyop44NYBKUpdnmr%2BngoX20aA5Q5D3o46rhnAW0FPsa1BqufzyRUbsCP7288co%2F7F8ppHTvkwhNI9LlhSFTg1xVoxFry%2BiN2g5q4MZrpRy9U3yO8tHEOUn5xY14fjiUWXNGCt1%2FECqAmtSdgK3c4HJSaYibO3c0y6qZ7w9cZaH687PIqHYjrkN0fVM4Ozz5Xk%2FDSzCGyrHRBjqkAW3I%2FP%2Fo%2BBL2bofepobJ9K68UEG2yA0q2oXSXelPmN4IZsl9KIM%2FMLRN9iTVPDNt8NIZ2KDc3k%2Bx8U0kDpabqFAOpf6mEDsoyBBHFJXoZ3lQyR5fBjGGMoQkv3c8DRx5Mo9y4CslNb2h0yX0wPYHh2tNJqS9IdoqwNZCLvrjSJ6k4Taj2Mqch%2FK63uarNm2t%2F5W1%2BdTUKDli9m6yZSa8OutK%2BVr9&X-Amz-Signature=0d8aaac2fed9db823ed0e6dd888de4fa0629ffa12bd3396c8f38a37401766b27&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
