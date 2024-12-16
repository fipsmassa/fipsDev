# Master CSS Grid

::: tip TLDR;
Todo

- add Screenshots
  :::

[[toc]]

## What is CSS Grid and How to Define Rows and Columns?

CSS Grid is a layout system in CSS specifically designed for creating two-dimensional layouts. Unlike older methods like floats or Flexbox (which focuses on one dimension—rows or columns), CSS Grid lets you design layouts that simultaneously handle rows and columns.

### Why CSS Grid?

Before Grid, creating complex layouts required hacks with floats, positioning, or Flexbox, which could get messy and hard to maintain. CSS Grid simplifies this by providing a clean, intuitive way to build layouts that adapt beautifully to different screen sizes.

### Getting Started with CSS Grid

To begin using CSS Grid, you need two things:

- A container element.
- Items inside the container.

Here’s an example:

```html
<div class="container">
  <div class="item1">Item 1</div>
  <div class="item2">Item 2</div>
  <div class="item3">Item 3</div>
</div>
```

To make the container a grid, add the following CSS:

```css
.container {
  display: grid;
}
```

Congrats! Now you’re using CSS Grid! :tada:

But by default, this doesn’t define rows or columns. To create structure, we use **grid-template-rows** and **grid-template-columns**.

### Defining Rows and Columns

Rows and columns are defined by specifying their size using units like:

- Pixels (px): Fixed sizes.
- Percentages (%): Relative to the container.
- Fractions (fr): Relative space distribution.
- Auto: Based on content size.

Here’s an example:

```css
.container {
  display: grid;
  grid-template-columns: 100px 200px auto;
  grid-template-rows: 50px auto;
}
```

**What does this do?**

Columns:

- The first column is 100px wide.
- The second column is 200px wide.
- The third column expands to fill remaining space.

Rows:

- The first row is 50px tall.
- The second row adjusts automatically to fit its content.
- By mixing and matching these units, you can create incredibly flexible grids.

## Placing Items in the Grid

Now that you’ve defined rows and columns in your CSS Grid, it’s time to place items exactly where you want them. By default, items flow into the grid automatically, filling one cell at a time. However, CSS Grid gives you precise control over positioning.

### Positioning with **grid-column** and **grid-row**

To position a grid item, you can use the grid-column and grid-row properties. These let you specify:

- The starting line.
- The ending line (or how many rows/columns the item spans).

Here’s an example:

```css
.item1 {
  grid-column: 1 / 3; /* Spans from column 1 to 3 */
  grid-row: 2 / 4; /* Spans from row 2 to 4 */
}
```

In this case:

_.item1_ starts in column 1 and spans two columns (up to column 3).
It starts in row 2 and spans two rows (up to row 4).

**Using Shorthand**
Instead of writing grid-column and grid-row separately, you can use the shorthand grid-area:

```css
.item1 {
  grid-area: 2 / 1 / 4 / 3; /* Row-start / Column-start / Row-end / Column-end */
}
```

This achieves the same result but keeps the code more compact.

**Default Placement**
If you don’t specify placement, Grid will automatically place items in the next available cell. This is great for simple layouts, but for more complex designs, custom placement is key.

### Practical Example

Let’s combine everything into a complete example:

```css
.container {
  display: grid;
  grid-template-columns: 150px 1fr 150px;
  grid-template-rows: 100px auto 100px;
}

.item1 {
  grid-column: 1 / 4; /* Spans all columns */
  grid-row: 1; /* Stays in the first row */
}

.item2 {
  grid-column: 2; /* Stays in the second column */
  grid-row: 2; /* Stays in the second row */
}
```

With these simple rules, you can precisely control where items appear in your layout.

## Simplify Layouts with Named Grid Areas

Named grid areas take the guesswork out of positioning. Instead of using numeric lines, you assign semantic labels to different parts of the grid.

### Defining Named Areas

Here’s how you define named grid areas:

```css
.container {
  display: grid;
  grid-template-areas:
    "header header"
    "sidebar content";
}
```

This grid has:

- A header spanning two columns.
- A sidebar and content sharing the second row.

**Assigning Items to Areas**
Now assign the grid items to the named areas:

```css
.header {
  grid-area: header;
}
.sidebar {
  grid-area: sidebar;
}
.content {
  grid-area: content;
}
```

This approach makes your layouts far easier to understand and maintain, especially for complex designs.

**Flexibility with Named Areas**
Changing the layout is as simple as updating grid-template-areas. For example, to move the sidebar below the content:

```css
.container {
  grid-template-areas:
    "header header"
    "content content"
    "sidebar sidebar";
}
```

## Responsive CSS Grid with Fractions and Auto-Fit

Responsive design is crucial for modern web development, and CSS Grid makes it effortless. With tools like the fr unit and auto-fit, you can create grids that adapt seamlessly to screen sizes.

### The fr Unit

The fr unit lets you distribute available space across columns or rows. For example:

```css
.container {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
}
```

This creates a grid with three columns:

- The first and third columns take up one fraction each.
- The second column takes up two fractions.

### Auto-Fit for Dynamic Grids

To create grids that adjust based on available space, use auto-fit with repeat and minmax:

```css
.container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
}
```

What this does:

- The auto-fit keyword creates as many columns as will fit in the container.
- Each column is at least 150px wide but can grow to share space with other columns.

### Example: Responsive Grid

Here’s how you might use a responsive grid for a gallery:

```css
.container {
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
}

.item {
  background: #eee;
  height: 200px;
}
```

This ensures your gallery looks great on any screen size.

## Conclusion

With CSS Grid, creating responsive, flexible layouts is easier than ever. Start experimenting with these techniques to transform your designs!
