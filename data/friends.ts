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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXT4Z75T%2F20260808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260808T125053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDsyk600iej2AnE3uElhGntA2GiX8vUkodeKhSbJT1pXAIhAM%2FcneYqLeFXm9SmmaQ%2B9yVlBpJhn4A9nGT5wWMEXCmuKv8DCGoQABoMNjM3NDIzMTgzODA1Igzzm9ZDsFmONAfCd0Iq3APXvjtQFxdPs8UXfJmpfKZy25NPsY0uC92%2FagWrs5CIaGi9BigUBeY1xYFsYTd0l3uat9FvW2iTCexqDsDMoy%2F9g3rSRWVrCor9yMRfgp6qYWTirhXdbdD6R87i0gkRJckuHg%2FkPPX9Bj6AQLhk6Jy3aq8HS4cbnzX%2BumqjhAarAFNA9zVMHGWGnksAunY5AXIN1vH73W0DFtBEeYibpjQAxYnbXiqNILKQVoRSUlq61HJVxiskP5Re86Nerb8nnOq6%2Bvtple6cIZXSSLZa5nBbKb6p4chEYp94zO9xRz8xDJwQ%2F0aTRVevdE4wbgbxq2TId6H7hBRF3WUFw4GPzfcvKR%2FLOvruWJn%2FmbsB%2FssZI1d9cPLs7G5t1mV1fKWjKkVco5Q38nqLz62DVV%2Bz0rUb0faySFGGsYcVmE7nVF4zRGgZo%2Blv0cCU%2B%2BS66xh%2FT3QvVFwv1psCRvW4FGGYs%2BOIPEvc0ok9jm%2FFnsv2TshOXW2omzRS%2FCp3T%2FdFQneI5EcqYdVkgtU%2FvWqAk65hCmqDibWEe%2BuHiPMaeU9rOOf9Fe1E2pEsMaowpF6YNfsFu3WadGaZZNmXSMiMdoDMLGgNH8kmJWIqD0coppuRj9vq%2BB12zq3AwgsxMv51cTCG1NvTBjqkAUk3eJobupfrhvOS%2F4qUyHgxR4%2FB4ASBLBUQYKtqdurZgvE3MBxjVEpxOw1Bzs66RIooabEBw3Jq0Aa1NvLaW17eR57fcNqbTzQowE5vXSRvPNVW6JbhOwiJS54LWDeyywBEJrgqidsslOaZCMfz%2B2Vy6zl7wAwR5CF%2BXhbFGuHd8duiPyTHmLniBiDw3708I9zUYEjuP0F9KpgOfLmLh8FWWWE6&X-Amz-Signature=829302e08068e98fad4a74195f1f96111b767a3942f95c7fac17e428a0f2d475&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
