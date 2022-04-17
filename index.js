// validates email address
/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/

^ = denotes start of string
$ = denotes end of string
() = Logical grouping of part of an expression before the @ sign
[] = Explicit set of characters to match.
{} = Explicit quantifier notation 
+ = The preceding item will be matched one or more times
\ = here is used to escape special characters, here it is the . period

([a-z0-9_\.-]+)
[a-z0-9_\.-] 
    a-z0-9_= any character that is a lowercase letter, number, underscore 
    \. = matches a period (\ escapes the special regex character .)
    - = matches a hyphen

([\da-z\.-]+)
\da-z\.-
    \d = matches any single decimal digit 0-9
    a-z = matches any lowercase letter
    \. = matches a period (\ escapes the special regex character .)
    - = matches a hyphen

([a-z\.]{2,6})
[a-z\.]
    a-z = matches any lowercase letter
    \. = matches a period (\ escapes the special character)
{2,6} = minimum of 2 characters, maximum of 6 characters
