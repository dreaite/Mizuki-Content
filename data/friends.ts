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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647JBISLK%2F20260814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260814T130857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJHMEUCIQCXMCdAD3jfvtQ9DwOKQOq7YgN3wigkmLZT9sHEfjCcIAIgSuIhAAsmS51kInKsd10%2BETRbGJoKYXu7ob4NoccJXkEqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPsy9Hc%2F1vI7O3X1PyrcA9PdfRcc5QbQ4cvy9xkxaa0lWfLp%2Fl0RRgCBYG5js7RcMEigx5LKNlPWbBF6dcwcoHJIBPmWDVEIL5f%2B0wjZ6UUS56pOdxMoGnHyt54AfJDwQWyZF5qN8Gw2BNZjV6OpjlHXFz1RbXn683%2B9nacOWOgXsrS510KPcfETvqHutR4HRpwXmMZ%2FTyoEcRjW8Wn%2FWzkn5GRONq2Z9%2F5xXn1KP811HKuz19auluIoekKDuBdTQ20zo2TmG7isK%2BNeqorzDLB7IAT1YldXVWk4t%2BVVuP6vQdxOq6RdBLYZTYaJCDx2016FKWSjDVBcNpzBy7uGZ97NeLmWSm89sUn6WD6ops9Opr0OG6sjG6DoqpCgeZi7OPAMApv4ChTrBMU1J0eoCJaE89NsUujfcKhNWfDqbUo35gGIgwnh5lQfhA5rnZc5pYBmq8mu4FqUbPMFW4HsMV5Kc%2BIaRsvADSZurjytLkUpAntkcSNWvnK0bJ3wJO0zumFBRO1WA8XZnsge91706dfXR8JrB1O2YHciIJ7phXkHodrGbUg%2BYYAf42RnKb1K835jC9twN4paDkHVXOm44CtRB7vTRtcFhDtA3fEIlJ7fn65kwCLC4MHFn0TpzAtgJXjP3w%2BVOZW9miPjMK3t%2B9MGOqUBlpwJcur7l0F7AIHZo91AXerwbGOM7yRFq52VbZG0v9HJP24G%2Fc9RIoMR06SG0NtBiSGBQJD8N9nVcGn0NaPoljiZsqMElzhyK597pzotvG%2FvZBcHF1VRj6lk8y9aCTxFgXymrZzY3XlKrMkfNUyuDhHsa8lUiExkUu%2FPmQF0W5%2Bwq4%2BMsq9JysrzaYtyN4NvswoGMcox4NOBgTW%2B0x0uM58XNBcO&X-Amz-Signature=9df23596c72ae811a62b39cd6b106055d2deab0010a87f110d0de512f809dbfa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
