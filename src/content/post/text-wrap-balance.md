---
title: "Enhancing Readability with CSS text-wrap: balance"
description: "Enhancing Readability with CSS text-wrap: balance."
publishDate: "18 November 2024"
tags: ["css", "dev", "a11y"]
---

## The Problem

In multi-line text layouts, uneven line breaks can create a poor visual experience. Headlines, card descriptions, and sidebars often suffer from awkward spacing, making the design look unpolished and harder to read. Standard line-breaking behavior doesn’t optimize for aesthetic balance, leaving developers to find tedious workarounds.

### Solution

CSS introduces the **text-wrap: balance** property to solve this issue. This feature ensures that text wraps evenly across multiple lines, distributing words more aesthetically.

```css
p {
	text-wrap: balance;
}
```

This approach is perfect for improving readability in titles, blockquotes, and captions where balanced spacing greatly enhances the user experience.

### Example

See the difference with these two titles from a landing page:

**With**

<p class="blog-textwrap blog-textwrap-balance">We competently optimize maintainable customer service to promote extensive growth strategies.</p>

**Without**

<p class="blog-textwrap">We competently optimize maintainable customer service to promote extensive growth strategies.</p>

### Considerations

- **Browser Support**: While **text-wrap: balance** is supported in modern versions of Chrome (v115+) and Edge, it’s not yet [universally adopted](https://caniuse.com/?search=text-wrap:%20balance). Developers should use feature detection or fallback styles for unsupported browsers.
- **Performance**: Overusing **text-wrap: balance** in content-heavy sections could impact rendering performance, as the browser calculates optimal line breaks. Use it selectively where visual balance is critical.

### Takeaway

text-wrap: balance is a simple yet powerful addition to your CSS toolkit. Use it to elevate designs while keeping browser compatibility in mind.
