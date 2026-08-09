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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMOAL4L3%2F20260809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260809T184217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEqRzreWuXXUjTX32hSWETFQeB%2BgZQboLEO9YEB%2FD3dwAiAsakbrHa2rdvmkuT%2BrU6jTc%2BTs5T39dtBs6xdU6krA%2BiqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzVc28IDumDraY%2FrUKtwDhA95PM15Qz4mZT3gauQIzaI47ogFLxDcG02akIC%2BXOoH09Bg7z5cC1ZJPzqWx66lFUbYhbth5JLx03WZva8FjJmxeGGllcsgFNZmYfoRUiymoKbmLYlopwkze8ngdkjFhermBYn%2Fm5fiPjI5vlQEeFAOd5W%2FJ9nwCvKXObPiKnVmfyHmGGdIS%2FqmO4O8Wpx8SrliBOSQ0MplycCjGxDitOqCx0UM0Y41NY0abyZz3kRPG3ZD%2FI5y%2FXloTcktSN%2BtTDSiGvUJckrya8C88HttMfsgzF0PyjfV36ibTxScUi45Qe3m62MnxcpZteNLlT6hVbjVRpInD0n0AjtnwBGoXs%2FSOf%2FKFdYW4GevaUwqvEFB2pNakxB9czFpQpJ95rB1DBN6ub3VD72ZNrVdrVEjW6BH838jE5Hm3QX6xVIUb1WN8qvliQ%2BEw%2FN9lvkaNEp6SPw723bzrWcPMpJeh5xi2PPbB9YcNxo%2BHiF%2BZkHoYZM0c7gbzPTHw6sy83UYEKo9q%2BuVqhnCq5V4BSSjsx%2F9ub5YSDb5frZw9uOanFgEQ%2FBCPV6QkH4jigp9%2BACFLTDfKEDjReRUisBCsQgbUBvwGrQIn0n0QdV1wfHPxeQwe0qUWX74NoUWb1udQuQwzNfi0wY6pgHhjVFnPQr7N8UDziuwvNeqHoXqxvMUOOrKGZx4abs4BiXML7V3MPitlbAyF4nAK44fIYFMyGgbdjZhc0AH%2FYuaXOZ9UTm1fwvoZ1ZrADqxwc%2BoIvMBR1gHbAiRz4SW9KhJBDaaq3nZ4V3bZfJnlyymkBMODiN1HWl0a2eSCyE06bSZxQs%2BLX5wRg9OkC6ECI71M7UKGlkeJSfZsQqx8%2B082604I6MQ&X-Amz-Signature=cfd9c857d08127ad86c8cc64b81b1b29a2f95eb4556ea77045f510c8c75dad57&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
