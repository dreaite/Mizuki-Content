// 日记数据配置
// 用于管理日记页面的数据

export type DataLanguage = "zh_CN" | "en" | "ja" | "zh_TW";

export interface DiaryTranslation {
	content: string;
	location?: string;
	mood?: string;
	tags?: string[];
}

export interface DiaryItem {
	id: number;
	content: string;
	date: string;
	images?: string[];
	location?: string;
	mood?: string;
	tags?: string[];
	lang?: DataLanguage;
	translations?: Partial<Record<DataLanguage, DiaryTranslation>>;
}

// 示例日记数据
const diaryData: DiaryItem[] = [
	{
		id: 1,
		content: "刚刚发现一个有意思的动画，所以看了，评价是观点不合，有病先治病。《记忆管理局》\n有一说一，作画感觉挺好的，音乐也不错（虽然和画面匹配不咋样），主要是思想没有什么新意，描述的想法感觉太单薄了。一如既往的童年老大哥，一如既往的校园暴力，一如既往的原生家庭。大陆的创伤都是千篇一律吗。。\n有一说一，因为我在这里，所以我可以说，如果有问题是自己没有办法解决的，为什么不去别的没有这个问题的地方来发展呢。世界没有想象中那么宽大，但是也不至于把一个人钉死在原地那么狭小。有问题，那么就解决它，解决不了那么就远离它，等自己成长到可以面对它的时候再来解决就好。\n人的意义因为自己存在在这里，所以已经存在。而自己所拥有的不是过去，不是未来，而是实实在在在被自己创造的现在。与其蹲在角落幻想着未来如何美好，拥有无数多种可能性，不如下定决心，面向自己，为了某种未来，承担起放弃掉其他未来可能性的责任，迈出自己现在的一步。这样，幻想才会来到现实。\n总之，评价是，观点不合，建议有病先治。",
		lang: "zh_CN",
		translations: {
			"en": {
				content: "I just came across an interesting animated film, so I watched it. My verdict: I disagree with its views—if you're ill, get treatment first. Memory Management Bureau\nTo be fair, the animation looks quite good, and the music is nice too (although it doesn't match the visuals very well). The main problem is that its ideas are nothing new, and the concepts it presents feel too shallow. The same old overbearing older brother from childhood, the same old school bullying, the same old dysfunctional family of origin. Is trauma in mainland China always so formulaic?\nTo be fair, because I'm here, I can say this: if you have a problem you can't solve on your own, why not go somewhere else where that problem doesn't exist and build a life there? The world isn't as vast as we imagine, but it isn't so small that a person must remain nailed to the same spot forever. If there's a problem, solve it. If you can't solve it, distance yourself from it, and come back to deal with it once you've grown enough to face it.\nThe meaning of a person's life already exists simply because they exist here. What you possess is neither the past nor the future, but the present that you are actively creating. Instead of crouching in a corner fantasizing about how wonderful the future will be and imagining its countless possibilities, make a decision, face yourself, accept the responsibility of giving up other possible futures for the sake of one particular future, and take a step forward now. Only then can fantasy become reality.\nIn short, my verdict is that I disagree with its views, and I suggest getting treatment first if you're ill.",
			},
			"ja": {
				content: "さっき面白そうなアニメを見つけたので観てみた。感想は、考え方が合わない。病んでいるなら、まず治療したほうがいい。『記憶管理局』\n正直なところ、作画はかなり良いし、音楽も悪くない（映像との噛み合いはいまひとつだったけど）。ただ、根底にある思想には特に目新しさがなく、描かれている考え方もあまりに薄っぺらく感じた。相も変わらず幼少期のガキ大将、相も変わらずの校内暴力、相も変わらずの生まれ育った家庭。中国大陸におけるトラウマは、どれも判で押したように同じなのだろうか。。\n正直なところ、自分が今ここにいるからこそ言えるのだが、自分では解決できない問題があるのなら、なぜその問題のない別の場所へ行って成長しようとしないのだろう。世界は想像するほど広大ではないが、かといって一人の人間をその場に釘付けにするほど狭くもない。問題があるなら解決すればいい。解決できないなら距離を置き、自分が成長して向き合えるようになったときに、改めて解決すればいい。\n人の存在意義は、自分がここに存在しているというだけで、すでにそこにある。そして自分が持っているのは過去でも未来でもなく、自分自身の手で実際に創り出している現在だ。隅にうずくまって、未来がどれほど素晴らしく、無数の可能性に満ちているかを空想するよりも、覚悟を決めて自分自身と向き合い、ある一つの未来のために、ほかの未来の可能性を手放す責任を引き受け、今この瞬間に一歩を踏み出したほうがいい。そうして初めて、空想は現実になる。\n要するに、感想は、考え方が合わない。病んでいるなら、まず治療することを勧める。",
			},
		},
		date: "2026-09-02T15:19:00.000Z",
	},
	{
		id: 2,
		content: "真紅、お誕生日おめでとう🎂\n\nこれからの1年も幸せでありますように🥰\n\nホットケーキだよー🥞",
		lang: "zh_CN",
		translations: {
			"en": {
				content: "Happy birthday, Shinku 🎂\n\nMay the year ahead be filled with happiness too 🥰\n\nHere are some pancakes 🥞",
			},
			"ja": {
				content: "真紅、お誕生日おめでとう🎂\n\nこれからの1年も幸せでありますように🥰\n\nホットケーキだよー🥞",
			},
		},
		date: "2026-07-21T12:29:00.000Z",
		images: [
			"https://r2.dreaife.tokyo/notion/covers/3a45465cca1780d28d8fc551b999f497/inline/5ca528db95ec4845-shinku_birthday.png",
			"https://r2.dreaife.tokyo/notion/covers/3a45465cca1780d28d8fc551b999f497/inline/89046353fe098e8e-IMG_4971.jpeg",
			"https://r2.dreaife.tokyo/notion/covers/3a45465cca1780d28d8fc551b999f497/inline/012d7566129bedf8-IMG_4972.jpeg",
		],
	},
	{
		id: 3,
		content: "和真红的海边散步～\n\n个人第一幅画了XD",
		lang: "zh_CN",
		translations: {
			"en": {
				content: "A seaside stroll with Shinku～\n\nMy very first drawing XD",
			},
			"ja": {
				content: "真紅と海辺をお散歩～\n\n自分にとって初めての絵ですXD",
			},
		},
		date: "2026-06-28T12:05:00.000Z",
		images: [
			"https://r2.dreaife.tokyo/notion/covers/38d5465cca17806f8141fb6eea89de45/inline/27142b38d1064ac2-shinnku01_last.png",
		],
	},
	{
		id: 4,
		content: "仔细想想，现在的我应该才算是真正开始探索自我的下一步吧。我是谁，到我可以是谁，到我应该是谁；从脑内到思考，到行动的渴望，到溢出的开始改变的现实，我开始深刻感受到我这个存在。",
		lang: "zh_CN",
		translations: {
			"en": {
				content: "Thinking about it carefully, perhaps only now am I truly beginning the next step in exploring myself. Who I am, who I can be, and who I should be—from thoughts within my mind to conscious reflection, from the desire to act to the reality that is beginning to change and overflow into the world, I am starting to feel the depth of my own existence.",
			},
			"ja": {
				content: "よく考えてみると、今の自分はようやく本当の意味で、自分自身を探求する次の一歩を踏み出したところなのだと思う。自分は誰なのか、自分は誰になれるのか、自分は誰になるべきなのか。頭の中から思考へ、行動への渇望へ、そして変化し始めた現実があふれ出すまで。私は、自分という存在を深く実感し始めている。",
			},
		},
		date: "2026-06-14T17:39:00.000Z",
	},
	{
		id: 5,
		content: "有一说一，最近开始学习区块链，没想到反而感觉更类似于当时打acm的时候学习的状态了。secp256k1要补各种数学知识和推论，再实际看ethers的实现的时候，结果又发现了熟悉的竞赛风味的代码（也是非常愉悦的了😊\n\n话说我本来以为会是学习java框架的那种感觉，现在想来从钱包这个主体来学，可能是个不错的选择。",
		lang: "zh_CN",
		translations: {
			"en": {
				content: "Honestly, I recently started learning about blockchain, and unexpectedly, it feels more like the way I used to study when competing in ACM. secp256k1 requires catching up on all kinds of mathematical knowledge and proofs, and when I looked at the actual implementation in ethers, I found code with that familiar competitive-programming flavor again—which was also incredibly enjoyable 😊\n\nCome to think of it, I originally expected it to feel like learning a Java framework. Looking at it now, learning from the perspective of the wallet as the central subject may be a pretty good choice.",
			},
			"ja": {
				content: "正直なところ、最近ブロックチェーンを学び始めたのだけれど、意外にもACMをやっていた頃の学習状態に近い感覚がある。secp256k1ではさまざまな数学知識や推論を補う必要があり、実際にethersの実装を見てみると、またもや懐かしい競技プログラミング風のコードに出会った（これもすごく楽しい😊\n\nもともとはjavaフレームワークを学ぶような感覚になると思っていたけれど、今考えると、ウォレットを軸に学ぶのはなかなか良い選択かもしれない。",
			},
		},
		date: "2026-06-13T18:41:00.000Z",
		images: [
			"https://r2.dreaife.tokyo/notion/covers/37e5465cca17806aa05ecbbfe728e0a5/inline/eb4331db2b71e582-image.png",
		],
	},
	{
		id: 6,
		content: "最近我稍微意识到了一点增量意识和存量意识的差别，虽然稳定的工资可以提供一份稳定的收入，但是这也会诱导人的思考局限在了这份开销水平之类。稳定的收入更应该作为一份心态的稳定剂，而不应该为此而把自己的行动边境就此限制。当今这个泡沫时代，依然还是有很多热钱可以赚到的，没有道理因为手上的一份收入就丢掉另一份。",
		lang: "zh_CN",
		translations: {
			"en": {
				content: "Recently, I have begun to notice the difference between an incremental mindset and a fixed-pie mindset. Although a stable salary provides a steady income, it can also lead people to confine their thinking to that level of spending and similar considerations. A stable income should serve as an anchor for peace of mind, not as a reason to limit the boundaries of one's actions. Even in today's bubble era, there is still plenty of hot money to be made. There is no reason to give up one source of income simply because you already have another.",
			},
			"ja": {
				content: "最近、フローを重視する意識とストックを重視する意識の違いに少し気づいた。安定した給与は安定した収入をもたらしてくれるが、その一方で、人の思考をその収入に見合った支出水準などに縛りつけてしまうこともある。安定した収入は心を安定させるものとして捉えるべきであり、そのために自分の行動範囲まで制限してしまうべきではない。今のようなバブルの時代にも、まだ稼げるホットマネーはたくさんある。手元に一つ収入源があるからといって、別の収入を手放す理由はない。",
			},
		},
		date: "2026-04-03T16:29:00.000Z",
	},
	{
		id: 7,
		content: "到达！\nねり真可爱",
		lang: "zh_CN",
		translations: {
			"en": {
				content: "Arrived!\nNeri is so cute",
			},
			"ja": {
				content: "到着！\nねり、本当にかわいい",
			},
		},
		date: "2026-03-05T15:23:00.000Z",
		images: [
			"https://r2.dreaife.tokyo/notion/covers/31a5465cca17800ea630ce1133d62da1/inline/b07fdaea9d9e2b69-IMG_4504.jpeg",
			"https://r2.dreaife.tokyo/notion/covers/31a5465cca17800ea630ce1133d62da1/inline/af76c478fc5fd3ce-IMG_4502.jpeg",
		],
	},
	{
		id: 8,
		content: "正式搬到mizuki来了😊",
		lang: "zh_CN",
		translations: {
			"en": {
				content: "I've officially moved to mizuki 😊",
			},
			"ja": {
				content: "正式にmizukiへ引っ越してきました😊",
			},
		},
		date: "2026-02-24T08:48:00.000Z",
		images: [
			"https://r2.dreaife.tokyo/notion/covers/30f5465cca17802bbd27fbcc5d9068a4/inline/5a79f9ca47c65d7f-MASHIRO_e102b.png",
			"https://r2.dreaife.tokyo/notion/covers/30f5465cca17802bbd27fbcc5d9068a4/inline/a38d26f4aaef1f93-SHINKU_AS_e01a1.png",
		],
	},
];

// 获取日记统计数据
export const getDiaryStats = () => {
	const total = diaryData.length;
	const hasImages = diaryData.filter(
		(item) => item.images && item.images.length > 0,
	).length;
	const hasLocation = diaryData.filter((item) => item.location).length;
	const hasMood = diaryData.filter((item) => item.mood).length;

	return {
		total,
		hasImages,
		hasLocation,
		hasMood,
		imagePercentage: Math.round((hasImages / total) * 100),
		locationPercentage: Math.round((hasLocation / total) * 100),
		moodPercentage: Math.round((hasMood / total) * 100),
	};
};

// 获取日记列表（按时间倒序）
export const getDiaryList = (limit?: number) => {
	const sortedData = diaryData.sort(
		(a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
	);

	if (limit && limit > 0) {
		return sortedData.slice(0, limit);
	}

	return sortedData;
};

// 获取最新的日记
export const getLatestDiary = () => {
	return getDiaryList(1)[0];
};

// 根据ID获取日记
export const getDiaryById = (id: number) => {
	return diaryData.find((item) => item.id === id);
};

// 获取包含图片的日记
export const getDiaryWithImages = () => {
	return diaryData.filter((item) => item.images && item.images.length > 0);
};

// 根据标签筛选日记
export const getDiaryByTag = (tag: string) => {
	return diaryData
		.filter((item) => item.tags?.includes(tag))
		.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};

// 获取所有标签
export const getAllTags = () => {
	const tags = new Set<string>();
	diaryData.forEach((item) => {
		if (item.tags) {
			item.tags.forEach((tag) => tags.add(tag));
		}
	});
	return Array.from(tags).sort();
};

export default diaryData;
