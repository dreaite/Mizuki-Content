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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FHTBPDB%2F20260717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260717T134134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDPm2k3hp%2BV1tQ1hMcgAovNUo%2BEF28pTgG7A0Jv2qgnKAiEAsma0dD6slgtUvyDT4dHOB9V3jhvvIEt%2BhigftbwDhX8q%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDJlFhPwXAOhdHgRg%2BSrcA6BqN00vy21EXFzBr8mwghyiGDtInKVnTWTVPyaQvi0e%2Fyqkrb920DXOmxcA1gGdebnpwNFFua7fN4kX8K3abGv3q%2Bv9gqJjC794JJlp%2B6miQwcTarrhf3WdwuKll1r4bADuZAeECAF0sJBkhkc1zWRm31PvzbmE6EnCSUkHCWr%2B8S4S7veteiaFdgF7Z%2Ba2pbnsmOyw5uy4736E%2B3anDOfJUJm8Qdf7MBYeCkSNwffiI5B0sQ2MpiZEO1v%2BTRoUvzsMJWoE5HRjimeg%2BNwyrrIWtR%2Bqmxb%2BTnqXuipuqnoexIEBLxIbJpveodd2pX0ZR%2FXA8Ra2wILQc6t9lLcgTGhCzrHQBXo7V04CDJlOooiXES%2F2JlKf2o6j293kDqhGBgdbZBPq2iNozaX68TQ%2BEEM%2BajiuUliKAImOM73SFWzg%2FYP0j5Pi5gim2pOZK%2F5lxWfk2y7xUb%2BPvY6QeeabmdSRaLMlYTV4q3krrVjfZkMkKn8%2F%2FWMygq5vdksGH3wCsytoBztz1%2Fyu%2Bo3VNsJaJVwcxG4ZJyRN9F7NQIz5kPEJJry8i31UR8VATPWpD8HmDFWEw7yFOashA%2Bn4kKx6OBtlYI5M3QrwZLOrWuWsiHr2uWePUoUa%2BXCVFU4TML6M6NIGOqUB%2FhzyoX7sfHAJZGYV5EorMrT3exp9VrO2oki%2FgpnyR5N7AXgcJrNCiOO41Vh4ODITn%2BEYP3wDve%2BLTLeea2fUEwVbIFaAD%2FnPUa0aZgdUiY4YOsRgZvCSx1EL0fDKTWCFZoPIlNasG68LLB6qB%2BH1Mwbrj93zrjgo2XqldvbLmFuxy5SiEbmepFOnMQ5pIDHjPLO5h6IWiIo042aqKIjsSfN4p3%2BJ&X-Amz-Signature=433d9f125f3fdb3c8b3ff635f66d45b8f2022d5665a34d5404432e9780f5bc03&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
