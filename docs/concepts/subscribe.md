# Subscribe

You can subscribe to object events using [filters](./filter).

## Use Cases

Subscription is a very powerful feature in Novi. It's crucial for some plugins. For example, I want to generate a thumbnail for every image object (yes, that's a plugin instead of a built-in feature in Novi). I can subscribe to image objects that have local files and generate thumbnails for them.

```
@=image @file:original -@file:thumbnail
```

The filter above subscribes to image objects that have original files but don't have thumbnail files. For each matching object, we generate thumbnail for it and add a `@file:thumbnail` property to it.

Here's another example. I want to automatically add a `dog` tag to every image object that has a `corgi` tag. I can use the following filter:

```
@=image corgi -dog
```

And for each matching object, we add a `dog` tag to it. However, this is not the best practice since we can achieve the same result using a [imply rule](./imply).