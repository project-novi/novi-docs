# Permission

Permissions represent the ability to perform certain actions on objects. They are used to control access to objects.

Basic permissions include:

- `object.get`: Ability to get an object by ID.
- `object.edit`: Ability to edit an object.
- `object.delete`: Ability to delete an object.
- `object.query`: Ability to query objects using a filter.

Permissions are checked by the internal and other plugins.

## User

Users are objects too. Here's an example user:

```json
{
  "@user": null,
  "@user.name": "Alice",
  "@user.password": "<hashed password string>",
  "@user.role:moderator": null,
  "@user.perm:user.ban": null,
  "@user.perm:post.edit": null
}
```

This user has the role `moderator`, and two permissions: `user.ban` and `post.edit`.

Users with the `admin` role is automatically granted **all** permissions. Other roles are not directly used in the permission system. You can use [imply rules](./imply) to assign permissions to roles (for instance, `@user.role:moderator => @user.perm:user.ban`).

## Identity

The permission system requires an "identity" instead of a user as the subject. An identity can be either a user, or a virtual identity created by user with limited permissions (a subset of the user's permissions). This is helpful when you want a program do something on behalf of you, but don't want to hand over your full permissions.

Identity of a user can be obtained by the `Login` API. Identity have a default expiration time of 7 days.

## Per-object permission

You can control access to a specific object using `@access` properties. For instance, the following object

```json
{
  "@": "image",
  "@res": "1280x720",
  "@access.view:post.view": null,
  "@access.edit:post.edit": null,
  "@access.edit:post.view": null,
  "corgi": null
}
```

would require the permission `post.view` in order to be seen by the user, and both `post.view` and `post.edit` in order to be edited.
