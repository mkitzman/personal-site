import { type CollectionEntry, getCollection } from "astro:content";
import { siteConfig } from "@/site-config";

const articles: {
	desc: string;
	title: string;
	href: string;
	date: string;
	source: string;
}[] = [
	{
		title: "Bad Dojo: Tiger Schulmann Didn’t Get to Be America’s No. 1 Karate Kingpin Without Busting a Few Faces",
		desc: "Former senseis and business partners accuse Schulmann of building his $35-million-a-year martial-arts empire with Mafia tactics. What, you expect him to apologize?",
		href: "https://www.esquire.com/sports/a64452970/tiger-schulmann-martial-arts-empire-interview-2025/",
		date: "April 2025",
		source: "Esquire",
	}, 
    {
		title: "Behind F1's Velvet Curtain",
		desc: "If you wanted to turn someone into a socialist you could do it in about an hour by taking them for a spin around the paddock of a Formula 1 race. The kind of money I saw will haunt me forever.",
		href: "https://web.archive.org/web/20240301170542/https://www.roadandtrack.com/car-culture/a46975496/behind-f1-velvet-curtain/",
		date: "March 2024",
		source: "Road & Track",
	}, 
	
	{
		title: "They Played Football as Children. Now Their Families Mourn",
		desc: "They gave up the game after high school, but the damage seemingly was already done. Now, their families mourn and look for answers",
		href: "https://www.rollingstone.com/culture/culture-features/cte-impact-young-football-players-1234804580/?src=longreads",
		date: "September 2023",
		source: "Rolling Stone",
	}, 
	{
		title: "They Stole Yogi Berra’s World Series Rings. Then They Did Something Really Crazy.",
		desc: "The childhood friends behind the most audacious string of sports-memorabilia heists in American history",
		href: "https://www.theatlantic.com/magazine/archive/2025/02/sports-memorabilia-heist-yogi-berra-world-series-rings/681093/",
		date: "January 2025",
		source: "The Atlantic",
	},    
	{
		title: "`I literally can't stop.` The descent of a modern sports fan",
		desc: "A sobering snapshot of what being a sports fan can look like in this fledgling era of app-based betting.",
		href: "https://www.nytimes.com/athletic/5777632/2024/10/14/sports-betting-addiction-problem-fans/",
		date: "October 2024",
		source: "The Athletic",
	},
	{
		title: "Ozempic Could Crush the Junk Food Industry. But It Is Fighting Back.",
		desc: "As revolutionary new weight-loss drugs turn consumers off ultraprocessed foods, the industry is on the hunt for new products.",
		href: "https://www.nytimes.com/2024/11/19/magazine/ozempic-junk-food.html",
		date: "September 2024",
		source: "Ny Times",
	},
	{
		title: "America Must Free Itself from the Tyranny of the Penny",
		desc: "Few things symbolize our national dysfunction as much as this accursed coin, which we mint by the millions because it’s too worthless to spend.",
		href: "https://www.nytimes.com/2024/09/01/magazine/worthless-pennies-united-states-economy.html",
		date: "September 2024",
		source: "NY Times",
	},
	{
		title: "The Junkification of American Life",
		desc: "Why we want the wrong things.",
		href: "https://www.nytimes.com/2024/09/05/opinion/entertainment-junk-psychology.html",
		date: "September 2024",
		source: "NY Times",
	},
	{
		title:
			"Want to convince a conspiracy theory believer they’re wrong? Don’t start with the truth",
		desc: "People who believe conspiracies about the Trump assassination attempt or buy into QAnon are often seeking purpose or belonging — truth is beside the point.",
		href: "https://www.latimes.com/opinion/story/2024-07-28/conspiracy-theories-trump-assassination-qanon",
		date: "July 2024",
		source: "LA Times",
	},
	{
		title: "When Yuppies Ruled",
		desc: "Louis Menand reviews Triumph of the Yuppies: America, the Eighties, and the Creation of an Unequal Nation",
		href: "https://www.newyorker.com/magazine/2024/07/29/triumph-of-the-yuppies-tom-mcgrath-book-review",
		date: "July 2024",
		source: "New Yorker",
	},
	{
		title: "I Gave Myself a Month to Make One New Friend. How Hard Could That Be?",
		desc: "Americans have become terrible at forming and keeping friendships. But there must be somebody out there who wants to grab a burrito with me.",
		href: "https://www.esquire.com/lifestyle/a61536364/one-friend-in-one-month/",
		date: "July 2024",
		source: "Esquire",
	},
	{
		title: "After 12 Years of Reviewing Restaurants, I’m Leaving the Table",
		desc: "Pete Wells is moving on from his role as the Times restaurant critic, a job with many rewards and maybe too many courses.",
		href: "https://www.nytimes.com/2024/07/16/dining/pete-wells-steps-down-food-critic.html",
		date: "July 2024",
		source: "NY Times",
	},
	{
		title: "A Surf Legend's Long Ride",
		desc: "For Jock Sutherland, being hailed as the world's best surfer was just one phase in an unlikely life.",
		href: "https://www.newyorker.com/magazine/2024/06/10/jock-sutherland-profile-surfing",
		date: "June 2024",
		source: "New Yorker",
	},

	{
		title: "The Man Who Couldn’t Stop Going to College",
		desc: "Benjamin B. Bolger has spent his whole life amassing academic degrees. What can we learn from him?",
		href: "https://www.nytimes.com/2024/06/03/magazine/benjamin-bolger-college-harvard-yale.html",
		date: "June 2024",
		source: "Ny Times",
	},
	{
		title: "To Stop A Shooter",
		desc: "Why would an armed officer stand by as a school shooting unfolds?",
		href: "https://www.theatlantic.com/magazine/archive/2024/03/parkland-shooter-scot-peterson-coward-broward/677170/",
		date: "March 2024",
		source: "The Atlantic",
	},
	{
		title: "The Ramen Lord",
		desc: "At Chicago’s buzziest new restaurant, Mike Satinover is obsessed with one goal: making the perfect bowl of Japanese noodles.",
		href: "https://www.chicagomag.com/chicago-magazine/march-2024/the-ramen-lord/",
		date: "March 2024",
		source: "Chicago Mag",
	},
	{
		title: "Ghosts on the Glacier",
		desc: "Decades after the unexplained deaths of two American climbers in Argentina, a camera belonging to one of them was found in the snow. The film held astonishing images, but the mystery endures.",
		href: "https://www.nytimes.com/interactive/2023/12/09/world/americas/aconcagua-mountain-expedition-photos.html",
		date: "December 2023",
		source: "NY Times",
	},
	{
		title: "When Your Gym Spotter Turns Out to Be a Scammer",
		desc: "Conman Rick Dugo targeted his victims in gyms until one man finally helped take him down.",
		href: "https://www.menshealth.com/trending-news/a45470868/scammer-rick-dugo/",
		date: "October 2023",
		source: "Men's Health",
	},

	{
		title: "Salt Life Is Coming to a Beach Near You",
		desc: "First, Salt Life was a tattoo. Then it became a logo. Now it is a lifestyle brand with plans to open stores from coast to coast.",
		href: "https://www.nytimes.com/2023/05/28/style/salt-life-clothes.html",
		date: "May 2023",
		source: "NY Times",
	},
	{
		title: "How an Alleged Con Man Tore Apart One of the Nineties’ Biggest Bands",
		desc: "Live had some of the alt-rock era's hugest hits, but in recent years the former bandmates have been bitterly divided by legal drama and interpersonal conflict",
		href: "https://www.rollingstone.com/music/music-features/live-alt-rock-band-crime-lawsuits-1234677011/",
		date: "February 2023",
		source: "Rolling Stone",
	},
	{
		title: "Your stuff is actually worse now",
		desc: "How the cult of consumerism ushered in an era of badly made products.",
		href: "https://www.vox.com/the-goods/23529587/consumer-goods-quality-fast-fashion-technology",
		date: "January 2023",
		source: "Vox",
	},
	{
		title:
			"Recipeasly promised to fix online recipes. After critics called it theft, the site shut down.",
		desc: "Recipeasly allowed users to strip stories and ads from online recipes, but the food blogging community cried foul.",
		href: "https://www.washingtonpost.com/food/2021/03/02/recipeasly-food-bloggers-controversy",
		date: "March 2021",
		source: "Washington Post",
	},

	{
		title:
			"AA Gill: “More life with your kids, more life with your friends, more life spent on earth — but only if you pay”",
		desc: "AA Gill used to think that being an NHS patient was like travelling second class on a train, grittier than first class, but in the end everyone ended up at the same destination. But in his farewell piece he tells of his discovery of a drug not available on the NHSAA.",
		href: "https://www.thetimes.com/life-style/health-fitness/article/more-life-with-your-kids-more-life-with-your-friends-more-life-spent-on-earth-but-only-if-you-pay-d7lwpht3j",
		date: "December 2016",
		source: "The Sunday Times",
	},
];

/** filter out draft posts based on the environment */
export async function getAllArticles() {
	return articles
}