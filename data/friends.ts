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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ULODYDA%2F20260801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260801T205409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIDu%2BFdGXj0msVmSnBQ0TIQHLhp42SQfUeprCgdRrjrkMAiEA%2BAjdUSbvHLb8fPgZicJsUC1KekM6W17RwPseWecoC7AqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBPYS%2FoKgykGlAz6ICrcAxcOB5MI96el6U76eX%2Bqlr%2F6CmfET47vmZpMiNX0sY8m%2F16shtlzlKJdPN5%2FXlOD6bsjLLEDZlA0IPEF9PNbll%2FhnRC6jwx5S6IOJ9z8Tcy%2BM0XSxJDQTJVBgd7GWXCV4VNu%2F3g9M6BKrRqkWdlLW3XMLN6fsuMya9sRbtLHKtCWE%2BYgwW5%2BfFnuvF8WMg%2FcoVSJn9Tgs0r8iu05UwX4ZLufy7LcJexLclUGQTjKM9%2Bzp2LCow%2BTpDISfPAe5CCQskTnisXjreT%2BixAS9fzWFGtpo7BGpGlmttACJziFczu%2FZweiJD42yz0PXTfMgXnQqniPsE5u4wzbwF%2FwyCSz0xnvaGUBoyOVZQURV651lXA3nF8Cd9N5OdKdcedKP%2BoDQtOtVx6fqQC1Npc%2B24RrGSRoMzWN%2BgvxbV7gtpHDtvqdzpoZP5fEet7HNRkA4Rr7nNFAJChDztFaRVPe%2FyYV%2Fc2wzDTroXn6i3qwZXFUYL0ZY8VEriXKYAKIoX007pjzAnaQ3i%2BDL0NbmMn%2FndmHxAGLmmv6oGUkBkJe2Fd6ftYcNk6n3r5DH9hD1kgqAF5snVdqgEU%2BIbjJZJ7Oh28sK80Dg%2BZDJFHVpFgWOrRu5wZlD2Vfphr%2FIkBu9awLMIW1udMGOqUBH%2FjfkGAEHwlNHXRtm4%2BaAswDhjXrDZrBMoFnKHGd6he5%2FAIxMcCJa5EsTVL4zR%2FQv5VyGzK7NNaidE2NYEzAzIBrMMpqLVrOzMcjAUWgqSLM7DTfNbefnR%2F9CjhLpC0PUkB1V5xL6g7PF18qk1rzrFCTUtNnYSUcugprDoLD9YdUBGLehqZwVICXvZ%2BBYreFH70zkMoRZ3o8jxHk6bM9kx3LGstF&X-Amz-Signature=8ef1018e5bd8b424c95b35159ddb5a9f12bc481d5dc049d608351b1e4179be1b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
