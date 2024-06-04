# Session

Plugins are powerful, but conflicts are inevitable. Two plugins may try to modify the same data at the same time, and the result may be unpredictable. Besides, you may not want a aborted operation to leave any trace in the database. To solve these problems, we introduce the concept of session.

Sessions are binded to PostgreSQL transactions. When a session is created, a new transaction is started. All operations in the session are executed in the same transaction. When the session is closed, the transaction is committed. If an error occurs, the transaction is rolled back and no changes are eventually made to the database.

There are three types of sessions: read-only, read-write, and automatic. They are denoted by the `lock` parameter as follows:

- `lock=False`: read-only session
- `lock=True`: read-write session
- `lock=None`: automatic session

Multiple read-only sessions can exist at the same time. However, only one read-write session can exist at a time. Read-only and read-write sessions cannot exist at the same time.

The default session is automatic. It will stay read-only until a write operation is executed, and then it will become read-write.

When issuing API requests, you can specify the session to run in via gRPC metadata. If no session is specified, a temporary session will be created and used for the request.
