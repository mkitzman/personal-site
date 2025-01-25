---
title: "HTML: hidden until-found"
description: "How to make collapsed content, such as an accordian, accessible with hidden=until-found."
publishDate: "7 November 2024"
tags: ["css", "dev", "a11y", "dev tips and tricks"]
---

## The Problem

Accordions are a popular web design pattern, allowing users to expand and collapse content on demand. When collapsed, browsers usually employ "display: none" to hide the content, which removes it from the page layout flow and renders it unsearchable.

```html
<div class="section collapsed">
  <h2 class="title">Trigger Row</h1>
    <div class="details">
        Content that can't be searched.
    </div>
</div>
```

### Solution

Add **hidden=until-found** to the container so the browser can search text and reveal the section if the text is found.

```html
<div class="section collapsed">
  <h2 class="title">Trigger Row</h1>
    <div hidden="until-found" class="details">
        Searchable content
    </div>
</div>
```

:::note
In addition to allowing find-in-page search on hidden regions it also makes the content accessible to search engines. Google Search will form links that scroll to the revealed fragment.
:::

### Considerations

- Layout APIs like **getBoundingClientRect** may report the hidden content in the size even when hidden.
- Users should still be able to see the content without the use of find-in-page
- Child elements won't be rendered but the container will still be a box so border and size can effect it.
- The **beforematch** event that is fired when the _hidden until found_ content is about to be shown is still in experimental mode and not currently (Nov/24) supported by ~~Safari~~ and ~~Firefox~~.
