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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XINH53TK%2F20260704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260704T230741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCID5MJAj1W6ZSHL%2BX8Zmv38cM%2BqPGJQWoCTKcBFMKc6w7AiAm2JmG087OfcdCrZQyYNLErAPAaOZ59p7S7yAdliuLKyr%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIM%2FM1qk5ufZRs6DYHHKtwDgJ9%2B6ctFMMX9SU0zTrFV0K9FpWzT23MejX4l06x8nrs2m19QjlgApmE87mLdiihm5VrzCl8CDPHMrt8X1D3I4UyAya0l1FWm%2BGr%2BAopf8FteE9EBp%2FuIu7xRKOtwq50ZNHZv7vqErtc1TDffPP2TX5%2FMcj8WOtI2V8%2Bwbrq1q5%2FLMcW54CJVetbVfkoPj1V26nwoGz3OXzJAEtVpHZLoDEVnuHmPdOgn9YAVvt8xMa3AVeYlfqwNf55Tm3Rz81SbE2A61Ms%2B0Au4qL8911Fn%2BMrA7ll0abPG6sYx6GzeOsl31jZwGPZc3kJFCgGVbGmTWclTO1axx2L8Fhc8gTKOPs7rhO%2FiZjxBSons3496NXu5%2FOMNWQW81K31boR0xEFbHfEhTJnlQ%2FNICHSVLVVUsvMdG70uIW959GxH9JqYz8b5eHTB9lAuJst6t5%2FUK50yxctq6Jwx88HugF1I2SYOa4aYOPsYL1jjtMPRmIpQ6g8ASLXqdYX9xOAC75Js0YCqTd3%2B5jSjaHO50V8CDm%2F6aInMWge8sMPYsyE0aihLfmaLU0RleujXjLqxo4Aw2Kjybbp3j3V0g5vk27C6BbuVw8sZ9OCvW%2BCr9wfdJ8vlMaudGZMhVHqIqpNgWYkw7Pel0gY6pgF9O8J8%2FXw4YMxf6UzUjyj6OiiLSrVfveZGYqCXiHNizpJcdrybNazOa2%2F%2FnLpaA9MuCgt0Q1qubYIRP%2F%2FjGCzW5bPKAhGR1J0ndXKIusGcDuqUwS9RhYtojn9LT530zC0%2B%2BxxACD6Efz93ny9FnBKFNcK4Iierx6u%2FXzE1%2BqUuUqmJJ7K6K%2FGC7codo2xDtN4XPaSanbKFmrqA1m8mwjHybk7JHnuR&X-Amz-Signature=c6d346aa09d15f7d0065a6056ed191e2bc73fde01a042215b86e7bdf21767d66&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
