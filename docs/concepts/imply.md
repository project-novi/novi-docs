# Imply Rule

As stated in [tags hierarchy](./object-and-tag.html#tags-hierarchy), we don't have "subtags" in Novi. Instead, we use imply rules to achieve similar results.

::: info Fun Fact
The imply rule system is implemented as a plugin in Novi using [hooks](./hook).
:::

## Syntax

```
[filter] => [consequences]
```

Where `consequences` is a list of actions separated by spaces. Each action is in the form of `tag`, `-tag` or `tag=value`.

## Examples

`corgi` implies `dog`:

```
corgi => dog
```

`meme` images implies `funny`:

```
@=image meme => funny
```

A real-world example: content is automatically assigned with *general* rating (`@rating=g`) if no rating is specified:

```
@ -@rating => @rating=g
```

## Conflict Resolution

We can easily create conflicting imply rules. For example, the two rules `a => -a b` and `b => a` can run forever since one cancels the effect of the other.

To resolve the conflict, Novi runs each imply rule at most once. To elaborate, implication rules gets applied recursively, where each rule is applied at most once.
