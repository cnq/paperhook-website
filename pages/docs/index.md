---
title: Index page for documentation
---

This is the index page for docs section.

## You can have lists

### Numbered
1. me first!
2. I'm second!
3. third :(

### Unordered
* Cheese
* is actually
* really good

And **lots** of other *fun* stuff.

> Block quotes are
> written like so.
>
> They can span multiple paragraphs,
> if you like.

## Example of how to add a link

[Go to Google](https://www.google.com).


### Footnote
Here is an inline note.^[Inlines notes are easier to write, since
you don't have to pick an identifier and move down to type the
note.]

### Definition lists
Term 1

:   Definition 1

Term 2 with *inline markup*

:   Definition 2

        { some code, part of Definition 2 }

    Third paragraph of definition 2.

### Abbriviation
*[HTML]: Hyper Text Markup Language
*[W3C]:  World Wide Web Consortium
The HTML specification
is maintained by the W3C.

### Add a class or other attributes to content.
here be dragons {.warning}

## Code Example

Javascript
```javascript
function $initHighlight(block, flags) {
  try {
    if (block.className.search(/\bno\-highlight\b/) != -1)
      return processBlock(block, true, 0x0F) + ' class=""';
  } catch (e) {
    /* handle exception */
  }
  for (var i = 0 / 2; i < classes.length; i++) { // "0 / 2" should not be parsed as regexp
    if (checkCondition(classes[i]) === undefined)
      return /\d+/g;
  }
}
```

