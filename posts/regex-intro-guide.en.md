---
title: '初涉正则表达式'
published: 2024-01-12
updated: 2024-01-12
description: '正则表达式是一种强大的文本模式匹配工具，能够描述和匹配字符串的特定模式。它包括字面值字符、特殊字符、字符类和元字符等元素，广泛应用于多种编程语言和文本处理工具中。正则表达式可以用于验证数据、替换文本和提取子字符串，具有灵活性和强大功能。常见的元字符和特性包括字符匹配、量词、边界匹配和分组等，能够帮助用户高效处理文本数据。'
permalink: 'regex-intro-guide.en'
image: 'https://r2.dreaife.tokyo/notion/covers/5e918ab0ac6d4f36bf379d4fb01083e6/20240111_131534.jpg'
tags: ['regex']
category: 'prog-side'
draft: false
lang: 'en'
---

# Regular Expressions

## Introduction

A regular expression is a text pattern that includes literal characters (for example, letters between a and z) and special characters (called metacharacters), and can be used to describe and match specific patterns in strings.

Regular expressions are a tool for pattern matching and searching text.

Regular expressions provide a flexible and powerful way to search, replace, validate, and extract text data.

Regular expressions can be applied in various programming languages and text-processing tools, such as JavaScript, Python, Java, Perl, etc.

```plain text
// From the string str, extract the numeric part (match once):
var str = "abc123def";
var patt1 = /[0-9]+/;
document.write(str.match(patt1));
```

## Online Tools

[Online tools](https://c.runoob.com/front-end/854/)

## Regex Patterns

Regex patterns can include the following:

- Literal characters: for example letters, digits, spaces, etc., which can be matched directly to themselves.
- Special characters: for example dot ., asterisk *, plus +, question ? etc., which have special meanings and functions.
- Character classes: a set of characters enclosed in square brackets, used to match any one character within the brackets.
- Metacharacters: such as \d, \w, \s, etc., used to match specific types of characters like digits, letters, whitespace, etc.
- Quantifiers: such as {n}, {n,}, {n,m}, used to specify the number of times to match or a range.
- Boundary symbols: such as ^, $, \b, \B, used to match the start, end of a string or word boundary positions.

# Introduction

The use of regular expressions can achieve powerful functionality in a simple way. Here is a simple example first:

![image.png](https://dreaife-1306766477.cos.ap-nanjing.myqcloud.com/image.png)

- `^` indicates the start position of the input string.
- `[0-9]+` matches multiple digits, `[0-9]` matches a single digit, and `+` matches one or more.
- `abc$` matches the letters `abc` and ends with `abc`; `$` indicates the end position of the input string.

When we are writing a user registration form, if we only allow usernames to contain letters, digits, underscores, and the hyphen -, and set the username length, we can use the following regex to define it.

```plain text
^[a-zA-Z0-9_-]{3,15}$
```

- ^ indicates the start of the string.
- [a-zA-Z0-9_-] represents a character class, including lowercase letters, uppercase letters, digits, underscores, and the hyphen -.
- {3,15} indicates that the preceding character class must occur at least 3 times and at most 15 times, thus restricting the username length to between 3 and 15 characters.
- $ indicates the end of the string.

## Regex Metacharacters and Features

1. Character matching
    - Literal characters: Literal characters are matched according to their literal meaning. For example, matching the letter "a" will match the "a" character in the text.
    - Metacharacters: Metacharacters have special meanings, for example, \d matches any digit character, \w matches any alphanumeric character, and . matches any character (except newline), etc.
2. Quantifiers
    - *: matches the preceding pattern zero or more times.
    - +: matches the preceding pattern one or more times.
    - ?: matches the preceding pattern zero or one time.
    - {n}: matches the preceding pattern exactly n times.
    - {n,}: matches the preceding pattern at least n times.
    - {n,m}: matches the preceding pattern at least n times and at most m times.
3. Character classes
    - [ ]: matches any one character within the brackets. For example, [abc] matches the characters "a", "b", or "c".
    - [^ ]: matches any character not in the brackets. For example, [^abc] matches any character except "a", "b", or "c".
4. Boundary matching
    - ^: matches the start of the string.
    - $: matches the end of the string.
    - \b: matches a word boundary.
    - \B: matches a non-word boundary.
5. Grouping and capturing
    - ( ): used for grouping and capturing subexpressions.
    - (?: ): used for grouping without capturing the subexpression.
6. Special characters
    - \: escape character, used to match the special character itself.
    - .: matches any character (except newline).
    - |: used to specify a choice between multiple patterns.

## Why Use Regular Expressions?

Typical search-and-replace operations require you to provide literal text that matches the expected search result. While this technique may be sufficient for simple static text searches and replacements, it lacks flexibility; applying it to dynamic text can be difficult, if not impossible.

Using regular expressions, you can:

- Test patterns within strings.
  For example, test the input string to see whether a phone number pattern or a credit card number pattern appears. This is called data validation.
- Replace text.
  You can use regular expressions to identify specific text in a document, completely delete it, or replace it with other text.
- Extract substrings from strings based on patterns.
  You can search for particular text within a document or within an input field.

For example, you may need to search an entire website to remove outdated material and replace certain HTML formatting tags. In this case, you can use regular expressions to determine whether the material or HTML formatting tags appear in each file. This process narrows the list of affected files to those that contain the material to be deleted or changed. You can then use regular expressions to delete the outdated material. Finally, you can use regular expressions to search and replace the tags.

## Applications

Today, regular expressions have been widely used in many software environments, including *nix (Linux, Unix, etc.), HP operating systems, PHP, C#, Java development environments, and many applications where you can see the shadow of regular expressions.

| Command or Environment      | . | [ ] | ^ | $ | \( \) | \{ \}                                                                            | ? | + | | | ( ) |
| ---------- | - | --- | - | - | ----- | -------------------------------------------------------------------------------- | - | - | - | --- |
| vi         | √ | √   | √ | √ | √     |                                                                                  |   |   |   |     |
| Visual C++ | √ | √   | √ | √ | √     |                                                                                  |   |   |   |     |
| awk        | √ | √   | √ | √ |       | awk supports this syntax; just add --posix or --re-interval on the command line, see interval expression in the man page for awk | √ | √ | √ | √   |
| sed        | √ | √   | √ | √ | √     | √                                                                                |   |   |   |     |
| delphi     | √ | √   | √ | √ | √     |                                                                                  | √ | √ | √ | √   |
| python     | √ | √   | √ | √ | √     |                                                                                  | √ | √ | √ | √   |
| java       | √ | √   | √ | √ | √     |                                                                                  | √ | √ | √ | √   |
| javascript | √ | √   | √ | √ | √     |                                                                                  | √ | √ | √ | √   |
| php        | √ | √   | √ | √ | √     |                                                                                  |   |   |   |     |
| perl       | √ | √   | √ | √ | √     |                                                                                  | √ | √ | √ | √   |
| C#         | √ | √   | √ | √ |       |                                                                                  | √ | √ | √ | √   |

# Regex - Syntax

A regular expression is a powerful tool for matching and manipulating text. It consists of a series of characters and special characters that describe the text pattern to be matched.

Regular expressions can search, replace, extract, and validate specific patterns in text.

Constructing a regular expression is like constructing a mathematical expression: you combine various metacharacters and operators to build larger expressions. A regex component can be a single character, a character class, a range, a choice of characters, or any combination of these components.

Regular expressions are made up of literal characters (for example, letters a–z) and special characters (called "metacharacters"). The pattern describes one or more strings to match in the searched text. As a template, the regular expression matches a character pattern against the string being searched.

## Ordinary characters

Ordinary characters include all printable and non-printable characters that are not explicitly specified as metacharacters. This includes all upper- and lower-case letters, all digits, all punctuation marks, and some other symbols.

- `[ABC]`
  Matches any of the characters inside the brackets; for example, [aeiou] matches the letters e, o, u, a in the string "google runoob taobao".
- `[^ABC]`
  Matches any character except the ones inside the brackets; for example, [^aeiou] matches any character in the string "google runoob taobao" except the letters e, o, u, a.
- `[A-Z]`
  [A-Z] denotes a range, matching all uppercase letters; [a-z] denotes all lowercase letters.
- `.`
  Matches any single character except newline ( \n or \r ), equivalent to [^\n\r].
- `[\s\S]`
  Matches any character. \s matches any whitespace, including newline; \S matches non-whitespace, not including newline.
- `\w`
  Matches letters, digits, and underscore. Equivalent to [A-Za-z0-9_].
- `\d`
  Matches any Arabic digit (0 to 9). Equivalent to [0-9].

## Non-printable characters

Non-printable characters can also be parts of a regex. The following table lists escape sequences that represent non-printable characters:

| Character  | Description                                                                                |
| --- | --------------------------------------------------------------------------------- |
| \cx | Matches the control character indicated by x. For example, \cM matches a Control-M or a carriage return. The value of x must be A–Z or a–z. Otherwise, c is treated as a literal 'c' character. |
| \f  | Matches a form feed. Equivalent to \x0c and \cL.                                                           |
| \n  | Matches a newline. Equivalent to \x0a and \cJ.                                                           |
| \r  | Matches a carriage return. Equivalent to \x0d and \cM.                                                           |
| \s  | Matches any whitespace character, including spaces, tabs, page breaks, etc. Equivalent to [ \f\n\r\t\v]. Note that Unicode regexes will also match full-width spaces.               |
| \S  | Matches any non-whitespace character. Equivalent to [^ \f\n\r\t\v].                                                     |
| \t  | Matches a tab. Equivalent to \x09 and \cI.                                                           |
| \v  | Matches a vertical tab. Equivalent to \x0b and \cK.                                                         |

## Special characters

Special characters are those with special meanings, such as the * in runoo*b above. In simple terms, they denote any string. If you want to search for the literal '*' symbol in a string, you need to escape it by preceding it with a backslash, i.e., runo\\*ob matches the string runo*ob.

Many metacharacters require special treatment when attempting to match them. To match these special characters, you must first escape the character by placing a backslash in front of them. The following table lists the special characters in regular expressions:

| Special character | Description                                                                                             |
| ---- | ---------------------------------------------------------------------------------------------- |
| \$   | Matches the end position of the input string. If the RegExp object's Multiline property is set, \$ also matches the position before a newline or carriage return. To match the \$ character itself, use \\$             |
| ( )  | Marks the beginning and end of a subexpression. Subexpressions can be captured for later use. To match these characters, use \\( and \\)                                           |
| \-   | Matches the preceding subexpression zero or more times. To match the * character, use \\*                                                                |
| \+   | Matches the preceding subexpression one or more times. To match the + character, use \\+                                                                |
| \.   | Matches any single character except newline. To match \. , use \\.                                                              |
| \[   | Marks the start of a bracket expression. To match \[, use \\[。                                                                  |
| \?   | Matches the preceding subexpression zero or one time, or indicates a non-greedy qualifier. To match \? character, use \\?。                                                  |
| \\   | Escapes the next character to be a literal character, or a special character, or a backreference, or an octal escape sequence. For example, 'n' matches the character 'n'. '\n' matches a newline. The sequence '\\\\' matches "\" and '\\(' matches "("。 |
| \^   | Matches the start position of the input string, unless used inside a character class; when used inside a character class, denotes negation of that class. To match the \^ character itself, use \\^.               |
| \{   | Marks the start of a quantifier expression. To match {, use \{。                                                                      |
| \|   | Indicates a choice between two alternatives. To match |, use \\|。                                                                     |

## Quantifiers

Quantifiers specify how many times a given component of the regex must appear to satisfy a match. There are six kinds: *, +, ?, {n}, {n,}, and {n,m}.

The regex quantifiers are:

- *
  Matches the preceding subexpression zero or more times. For example, zo_ can match "z" and "zoo". _ is equivalent to {0,}.
- +
  Matches the preceding subexpression one or more times. For example, zo+ can match "zo" and "zoo", but not "z". + is equivalent to {1,}.
- ?
  Matches the preceding subexpression zero or one time. For example, do(es)? can match "do" and "does" and "doxy". ? is equivalent to {0,1}.
- {n}
  n is a non-negative integer. Matches exactly n times. For example, o{2} cannot match the two o's in "Bob", but can match the two o's in "food".
- {n,}
  n is a non-negative integer. At least n times. For example, o{2,} cannot match the o's in "Bob", but can match all the o's in "foooood". o{1,} is equivalent to o+. o{0,} is equivalent to o*.
- {n,m}
  m and n are non-negative integers with n <= m. Matches at least n times and at most m times. For example, o{1,3} will match the first three o's in "fooooood". o{0,1} is equivalent to o?. Note there should be no spaces between the comma and the numbers.

The * and + quantifiers are greedy, because they will match as much text as possible; adding a ? after them makes the matching non-greedy or minimal.
