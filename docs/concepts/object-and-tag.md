# Object and Tag

## Object

Object is the basic unit of data in Novi. It's basically a string dictionary, assigned with metadata (ID, creator, updated, created). Some examples (without metadata):

```json
{
  "@": "image",
  "@res": "1920x1080",
  "@title": "My Corgi",
  "corgi": null,
  "dog": null,
  "pet": null
}

{
  "@": "video",
  "@res": "1920x1080",
  "@title": "Day at the Park",
  "park": null,
  "funny": null,
  "vlog": null
}
```

Wait, what's `@`? What're all those `@` fields? What about those weird `null`s? Let's break it down.

## Tags and Properties

Usually, in a tagging system, we, users, create tags and assign them to objects. It's the system's job to manage other metadata separately (like object type, title, category, etc.).

In novi, the border between tags and metadata is blurred. All tags *can* have values, while tags starting with `@` are **expected** to have meaningful values, and they're called *properties* in novi. Tags without values use `null` as their value.

The properties used in the examples above are:

- `@`: Content type. *Note that an object does not necessarily contain content*. Having a `@` property indicates that the object contains specific kind of content. Can be one of `image`, `video`, `audio` and `text`.
- `@res`: Resolution. A string in the format of `[width]x[height]`.
- `@title`: Title. A string.

Plain tags (like `corgi`, `dog`, `pet`) can have values, too. And properties can have `null` values as well. The following object is totally valid:

```json
{
  "@": "image",
  "@res": "1920x1080",
  "@file:original": null,
  "dog": "corgi"
}
```

The `@file:original` property signifies that the original file's presence on the local machine. We'll talk about this later.

### Tags Hierarchy

I'll make this clear: "subtags" are not tags hierarchy in Novi. Common tagging systems use a tree-like structure to organize tags (for example, animal > dog > corgi). In Novi, tags are flat, and **they're all equal**.

However, one can use colons (`:`) and periods (`.`) to separate parts of tags in order to create a pseudo-hierarchy. For example `@file:original` is under `@file`, and `@user.name` is under `@user`. You should think this as [namespace](https://en.wikipedia.org/wiki/Namespace) as in programming languages.

The difference between colons and periods is that colons are used to begin a more dynamic, non-exhaustive part of the tag (in the `@file` example, an object can have many file variations), and periods are more static and exhaustive. Think of periods as structuring the tag, and colons as adding more information to the tag. This is not a strict rule, but a convention.

One may ask, "Then how do I achieve tree-like structures in Novi?" The answer is: you can use [imply rules](./imply).
