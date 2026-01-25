const techArticles: {
	desc: string;
	title: string;
	href: string;
	date: string;
	source: string;
	author: string;
}[] = [	
    {
        title: "The State of CSS 2025",
        desc: "Yearly survey on the state of CSS.",
        href: "https://2025.stateofcss.com/en-US/features/",
        date: "January, 2026",
        author: "",
        source: "2025.stateofcss.com",
    },
    {
        title: "Static Icons feel dead now",
        desc: "A collection of smooth, high-quality animated icons for your next project. Copy and paste directly into your app.",
        href: "https://www.itshover.com/icons",
        date: "January, 2026",
        author: "",
        source: "itshover.com",
    },
    {
        title: "Gas Town’s Agent Patterns, Design Bottlenecks, and Vibecoding at Scale",
        desc: "On agent orchestration patterns, why design and critical thinking are the new bottlenecks, and whether we should let go of looking at code.",
        href: "https://maggieappleton.com/gastown",
        date: "January, 2026",
        author: "Maggie Appleton",
        source: "maggieappleton.com",
    },
    {
        title: "::target-text:",
        desc: "An easy way to style text fragments",
        href: "https://webkit.org/blog/17628/target-text-an-easy-way-to-style-text-fragments",
        date: "December, 2025",
        author: "Saron Yitbarek",
        source: "webkit.org",
    },
    {
        title: "The JavaScript Bundler Grand Prix",
        desc: "Recently, several companies have stepped up to address this challenge by supercharging their JavaScript bundlers.",
        href: "https://redmonk.com/kholterhoff/2025/12/16/javascript-bundler-grand-prix/",
        date: "December, 2025",
        author: "Kate Holterhoff",
        source: "redmonk.com",
    },
	{
		title: "Responsive Letter Spacing",
		desc: "How to only apply the letter-spacing above a certain font-size.",
		href: "https://cloudfour.com/thinks/responsive-letter-spacing/",
		date: "November, 2025",
		author: "Tyler Sticka",
		source: "cloudfour.com",
	},
    {
        title: "You can style alt text like any other text.",
        desc: "One of those finer details is making the experience of an image not loading a little better.",
        href: "https://piccalil.li/blog/you-can-style-alt-text-like-any-other-text/",
        date: "May, 2025",
        author: "Andy Bell",
        source: "piccalil.li",
    },
    {
        title: "12 Principles of Animation",
        desc: "Great animation is purposeful, subtle, and rooted in the principles that have guided designers for decades.",
        href: "https://www.userinterface.wiki/12-principles-of-animation",
        date: "April, 2025",
        author: "Raphael Salaja",
        source: "userinterface.wiki",
    },
];

/** filter out draft posts based on the environment */
export async function getAllTechArticles() {
	return techArticles
}