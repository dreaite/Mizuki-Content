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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662R6BLXW%2F20260813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260813T045118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJGMEQCIA2EDrPDSvrqHYNy22546UbzPrzz6Rc9GpzmDRlvp0PyAiAqxgYjcFijYHoS1tfj2Qpw0BTPql92DeGt2YzDKfmmZSqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDGPFb0UYgqQfMHuEKtwDpcBWgfLac8RySPby7LUtPgNtNzHgzayk3t9x5%2FqCU9bfi3aCRUQ9DRu8r7F%2F5O%2FxYyLYrh5i2DLDcvCApJ0%2BhDcszn8UZfkVvk7seiolRyJNPGb1H0eOW61XXdhXjZBuRu1eZdEIzJSGqfD5AgXXUu1Pb%2B91xhnkdyFIJzNOu2w7nvR%2BY0JiKoUpIKY3dq4q2yOCmQ55YLEhKQc6L3iVD4wA%2BhWkCWlhCJA9UbwyH4F1BN1h82MojcrCt8g4rYskSuvzjnH6%2FB3FGq%2BRNQ2YTKqp6fXZNZaWwQySBkJcgYAWvfZZkNILts3IGJmyRDdOcfre4%2FPTj0ZdBr0KAkeA9CDI7PjO7edXoVN7iZ7Y57alHQakwXNDcunkjxNT%2FIGjFw5WUi4PyklkSNGAt6XWTWub7KtQLz6OL4h5ajaO7QZ6BArDEditlZJBne3RJaMWkeowrO7ohpvAJJflvMNFTldyujqHDQuOKAHDwYIWpxrIAShz2EmCxFrpV%2FXJEviQJS4w80zGL770bc0OD82j9px6yAW22RM%2FYyCOGFiehJ3v4QQ4PUS%2BRlTetpHMC1xy91gumXbI2yTV4Wsgixa4aXSNH6sO5mFcLh8BJgllTbU5IMHUA78nQfA5%2FhgwxMX00wY6pgEbZIXb7fs%2FNN%2Fu4%2FraHFQZ%2BruExIOcYOCLm6sOSLnOapTc4sB%2Bo42QOY00l78Kw6wd4gqqaiQGQm0%2B3OzFynPBY7wy9ZbOyAcS4JlvQ7fgZOU7Mjbce%2BweEhGl3djrkEPagL8QuisMkNIUxHRXCyDJlDZYyRW6HxXQCp8gqHUYqm780FHAVYyXoo3cUx7okiXRVz9s%2BN0urkTCOHAqvEWMX4ZQDgjQ&X-Amz-Signature=8a06c154b7ed520860a4fee1bf6f096e6efc03ff8e50192b265a3dbff46f0eac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
