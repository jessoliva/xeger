<style>
r { color: Red }
o { color: Orange }
g { color: Green }
</style>

# Regex Tutorial - Email Match

This tutorial will explain the regex: email match. This regex can be used to verify that user input is a valid email address. Throughout the tutorial, search pattern the regex defines will be explained. 

## Summary

A regex, which stands for regular expression, is a sequence of characters that defines a specific search pattern that helps match, locate, and manage text.. These expressions are frequently and widely used for validation purposes. They can also be used to find certain patterns of characters within a string, or to find/replace a character/sequence of characters within a string. This tutorial will explain the components of a email match regex. </br>

The following regex will be described: </br>
/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/

Each component of this regex has a unique responsibility. There are 3 major sections that ensure that a user enters an email address that begins with an unspecified number of characters preceding the @ symbol, followed by a domain.

## Table of Contents

- [Anchors](#anchors)
- [Quantifiers](#quantifiers)
- [Character Classes](#character-classes)
- [Grouping and Capturing](#grouping-and-capturing)
- [Bracket Expressions](#bracket-expressions)
- [Greedy and Lazy Match](#greedy-and-lazy-match)

## Regex Components

### Anchors
/<r>**^**</r>([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})<r>**$**</r>/

Anchors belong to the family of regex tokens that don't match any characters. Instead, they assert a specific detail about the string or the matching process. The following characters in the regex are anchors:
- ^ &nbsp;=&nbsp; denotes start of string
- $ &nbsp;=&nbsp; denotes end of string

Example: `j`essoliva.g@gmail.co`m` 
- beginning: j
- end: m

### Quantifiers
/^([a-z0-9_\.-]<r>**+</r>**)@([\da-z\.-]<r>**+</r>**)\.([a-z\.]<r>**{2,6}**</r>)$/

The following characters in the regex are anchors: </br>
- \+ &nbsp;=&nbsp; The item/group preceding the \+ will be matched one or more times. It connects the following string groups: [a-z0-9_\.-] + @[\da-z\.-] + .[a-z\.]{2,6} --> username + @domain-name + .domain
Example: `jessoliva.g`@`gmail`.`com`
- {2,6} &nbsp;=&nbsp; the string group formed by [a-z\.] will allow a minimum of 2 characters, maximum of 6 characters 

### Character Classes
/^([a-z0-9_\.-]+)@([`\d`a-z\.-]+)\.([a-z\.]{2,6})$/

The following characters in the regex are character classes: </br>
- \d &nbsp;=&nbsp; matches any single character that is a decimal digit 0-9

### Grouping and Capturing
/^`(`[a-z0-9_\.-]+`)`@`(`[\da-z\.-]+`)`\.`(`[a-z\.]{2,6}`)`$/

The following characters in the regex are grouping and capturing characters: </br>
- () &nbsp;=&nbsp; parentheses create a capturing group. Logical grouping of part of an expression.
    - Groups the following:
        - [a-z0-9_\.-] --> username
        - [\da-z\.-] --> domain name
        - [a-z\.] --> domain

### Bracket Expressions
/^(`[`a-z0-9_\.-`]`+)@(`[`\da-z\.-`]`+)\.(`[`a-z\.`]`{2,6})$/

The following characters in the regex are bracket expressions: </br>
- [] &nbsp;=&nbsp; matches characters based on requirements within the brackets 
    - [a-z0-9_\.-] --> matches any character that is a lowercase letter, number, underscore, period, or hyphen
    - [\da-z\.-] --> matches any character that is a lowercase letter, period, hyphen, or decimal digits 
    - [a-z\.] --> matches any character that is a lowercase letter, or period

### Greedy and Lazy Match
/^([a-z0-9_\.-]`+`)@([\da-z\.-]`+`)\.([a-z\.]`{`2,6`}`)$/

Greedy Behavior
- A quantifier tells the engine to match as many possible instances of its subpattern as possible. Longest match.

Lazy Behavior
- A quantifier tells the engine to match as few possible instances of its subpattern as possible. Shortest match.

The following characters in the regex are greedy and lazy matches: </br>
- \+ &nbsp;=&nbsp; is a greedy operator because it allows the engine to match one or more of the preceding characters in this regex
- {min,max}--> {2,6} &nbsp;=&nbsp; is a greedy operator because it matches the preceding character set at least min(2) times, no more than max times, but as close to max(6) as possible

## Author

Hi, my name is Jess! </br>
If you have any questions related to this gist, or you just want to interact, you can reach me via GitHub or E-mail!

> Github: [jessoliva](https://github.com/jessoliva)

> E-mail: [jessoliva.g@gmail.com](mailto:jess)
