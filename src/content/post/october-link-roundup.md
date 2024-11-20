---
title: "October Dev Link roundup"
description: "October Link roundup with a bunch of links to some great developer articles I've read recently."
publishDate: "20 November 2024"
tags: ["dev", "link roundup", "css", "accessibility"]
---

Bunch of links to some great developer articles I've read recently.

## Design Systems

[Design System Q&A](https://bigmedium.com/ideas/design-systems-qa.html)
Really good Design System Q&A between Brad Frost and Molly Hellmuth.

[AI and Design Systems](https://bigmedium.com/ideas/ai-and-design-systems.html)
Covers several topics on AI including writing component code, writing unit tests, reviewing accessibility, writing documentation and
making documentation more accessible/inclusive.

## Accessibility

[Beautiful focus outlines](https://medienbaecker.com/articles/focus-outlines)
Comprehensive article on adding accessible and good looking focus outlines.

[Airbnb: Rethinking Text Resizing on Web](https://medium.com/airbnb-engineering/rethinking-text-resizing-on-web-1047b12d2881)
"Choosing font scaling as the product accessibility strategy brought about a range of significant benefits that notably enhanced our platform’s overall user experience. Making that change using automation to convert to rem units made this transition easier. When looking at our overall issues count after these changes were site wide, more than 80% of our existing Resize Text issues were resolved. Moreover, we are seeing fewer new issues since then."

## CSS

[A Friendly Introduction to Container Queries](https://www.joshwcomeau.com/css/container-queries-introduction/)
The profile cards in this great article are so 💰.

[Your CSS reset should be layered](https://mayank.co/blog/css-reset-layer/)
"Wrap everything in your CSS reset with a @layer rule. You can name it anything (or even leave it unnamed). When you place any styles inside a layer, these styles automatically have lower priority compared to all unlayered styles on the page. Think of it like an !unimportant block. You don’t need to worry about specificity or order of stylesheets at all."

[New CSS that can actually be used in 2024](https://thomasorus.com/new-css-that-can-actually-be-used-in-2024.html)
[Logical properties](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_logical_properties_and_values), Container size queries (size, inline-size, normal), :has, :is, :where, nesting, CSS Comparison Functions (min, max, clamp), Cascade layers (organization tool to create separated cascades you can access anywhere in the files, and to layer them in the order we want), Subgrid

[:user-valid and :user-invalid](https://web.dev/articles/user-valid-and-user-invalid-pseudo-classes)
The advantage of the new **:user-valid** and **:user-invalid** pseudo-classe vs **:valid** and **:invalid** is **it matches a form control only after a user has significantly interacted with the input**. A form control that is required and empty will match :invalid even if a user has not started interacting with the page. However, that same form control won't match :user-invalid until the user has changed the input and left it in an invalid state.

[field-sizing: content](https://developer.chrome.com/docs/css-ui/css-field-sizing)
Increase form element height or width as the user entered text using CSS instead of JS.

```css
textarea,
select,
input {
	field-sizing: content;
}
```

[Relative Colors](https://smashing-freiburg-2024.netlify.app/24-relative-color/)
Derive and compute colors from colors using [oklch](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/oklch) 🤯

```css
.lighten-by-25 {
	background: oklch(from blue calc(l * 1.25) c h);
	background: oklch(from blue calc(l + 0.25) c h);
}
```

## Performance

[Serve images in modern formats](https://developer.chrome.com/docs/lighthouse/performance/uses-webp-images/)
**AVIF** and **WebP** are image formats that have superior compression and quality characteristics compared to their older JPEG and PNG counterparts. Encoding your images in these formats rather than JPEG or PNG means that they will load faster and consume less cellular data.
