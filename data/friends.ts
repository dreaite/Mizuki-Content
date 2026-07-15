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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIL4XNDQ%2F20260715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260715T023631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJIMEYCIQDt2lYN8gZjnaCHjA1ia7jevu0lGOICoCyYE5bbvFYL1wIhAJHDj3Zi28%2B48rKJYxbGzmBozhRgDIQFYZjogYO6bA7PKv8DCCMQABoMNjM3NDIzMTgzODA1IgwU6BAY1zRxGHID9i4q3AMxW14X0hsEY4uGLRAuGuJaLzZY%2B4RZqq1pWFsey8intZRcUe%2F8VPWvisbmtp3DVk%2BXXuKmfx%2BIHIiFj7lQ7cabMTL9nsKlk%2F5GMJfeikbiaTk6KHcJOJ3FsIQ9lq0Q%2BXGyuZji8y4qleXWJPPt4i58Y7Rk5HEiABdkzIA1HKBDiYuxgDEOZZErcyJi42lV76Lrt751NtiTd6HkFHRejvLTdqE%2FQZFjjEcQQ3RgLB16Jtemqw%2Be2zspe16uqHvkFGQ90NdbjIMy%2BXuMhexdIlgbmzBGrdx8e95MW8%2By1l%2BQAwpdij6YKdEHQU6PI5Hx1H6Ah%2FtBafWvFajRA07FN1BIF2wsU4w2I1UhAmyE08nji2ahd47Rm5bUrVD8A5lWh90rxd44wlSRtK%2BXAXIHs9LdW8SuRvmm7PYSYZQmKKoof6Mh0F7RaaFvWMtH5kxuzpAbigg9TqIFEJn3%2Fb6IJrnaJJ7vZiJs0EIQIHYNkvt%2BGIokiml3Wmt5gv7uRfl%2FpCSSy7ZOWn5OugC%2B5I5nsTKh3bm8qGUvuvVJ934gxxawrfNSSuMZK%2BPOJzcwXz0%2Bz%2FqyIHZbhz6HMbm48rQyt2dW04oaSYQFSTTNv1H5qlw3%2B9cpKL0UyEkp82iLxjDby9vSBjqkAcKOfVjyM9FlcJg7J3ihXDtDrD0bCFYW8KkbogO54iyUzDt%2FP8c%2FGbZ1%2B9X9p9OoTEHwKYKEd3j3b%2F0mD9xhDj%2BfQ6U5r9WOVscLGkfC8UGSug%2FQQj4mTZJIDbY5kRnqAwyKzQTIqj%2FKhY6P0thaW6jdfastwB9yXqBA%2FF%2F%2B2jy0DiXoxxQgkUbRP%2B6znc0AVwttmIXP61d%2B4FITkRBhPjvuUlDF&X-Amz-Signature=e39bc93f150310bc8513558d7d8845b83e03f6cf9dda4d50c5f9d7c99506edaf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
