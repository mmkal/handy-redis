From set docs:

> * `NX` -- Only set the key if it does not already exist.
> * `XX` -- Only set the key if it already exist.
>
> @return
>
> @simple-string-reply: `OK` if `SET` was executed correctly.
>
> @nil-reply: a Null Bulk Reply is returned if the `SET` operation was not performed because the user specified the `NX` or `XX` option but the condition was not met.


```cli
set foo bar1 XX
set foo bar2 XX
set bar foo1 NX
set bar foo2 NX
```
