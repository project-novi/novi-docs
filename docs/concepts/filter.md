# Filter

## Basic Syntax

Filter in Novi has a familiar syntax. For example, to filter objects with tags `corgi` and `funny`, you can use the following filter:

```
corgi funny
```

A `corgi` that is not `funny`:

```
corgi -funny
```

`dog`s or `cat`s:

```
dog/cat
```

You can filter by tags' values, too. Values can be quoted with double quotes.

```
@=image corgi
@!=video meme
@title="My corgi"
```

Use `%` to filter tag values that contain a specific string.

```
@title % corgi
```

Use parentheses to group tags.

```
vlog (dog/cat) -(meme/funny)
```

Use brackets `[]` to add common prefix to tags. For instance, the following filter

```
@[title="My corgi" res="1920x1080"] corgi
```

is expanded to

```
@title="My corgi" @res="1920x1080" corgi
```

## Event Filters

We can [subscribe](./subscribe) to object events using filters. The logic is simple: when a object is created / updated / deleted, Novi checks if the object matches the filter. If it does, the subscriber is notified.

However, when it comes down to actual implementation, we may find it counter-intuitive. For example, I want to listen to all objects' title changes. I write the following filter:

```
@title
```

But that'll notify me **every time** when a object containing `title` tag is created / updated / deleted. Luckily, we have three new operators to help us out:

- `~tag`: Listen to the tag's creation / modification / deletion.
- `!tag`: Listen to the tag's deletion.
- `+tag`: Listen to the tag's creation / modification.

These operators can be combined with other operators:

```
~@title/~@res corgi -(~meme)
```

Event filtering operators are only useful when used with [subscribe](./subscribe). They are not supposed to be used in normal object queries.
