---
slug: vim-faster-find-all-and-replace
title: Vim - Faster Find and Replace
date: 03/11/2014
---

Forever we've been looking toward text editors to do the heavy lifting of our heavy lifting for us, at least if you weren't around since the infancy of GNU. One task that comes to mind is replaces occurances through a file. For me it's when I'm migrating a  SQL production / staging database to my localhost for testing or when jumping into a project for the first time.

The treacherous tast of finding the domain and replacing it with my local path always becomes an endless task. Regardless if sublime text is the only program running, it still seems to bog down on a 15MB+ .sql backup. Mind you, this is the case on systems with ram varying from 4GB to 12GB, and still... pinwheel central.

Having the task of administering servers where I work, Vim and I are no longer aquaintances. We've made our everyday encounter into a friendship. With a friendship, you tend to rely on said friend more and more. Whether it's a minute task of removing one line from a local file or creating a virtual host file on a virtual private server, you choose or have no choice to ditch sublime text because Vim is either more efficent or the only option.

Recently I have found how lightning fast Vim actually is. With much less resources to load, it's performaces gains leaps and bounds. Normally, you find yourself doing something like this:

![Sublime Find and Replace](https://nodefolio.s3.amazonaws.com/thoughts/Screen%20Shot%202014-05-19%20at%202.46.13%20AM.png "Sublime Find and Replace")

Don't bother with that anymore, especially if we're in the same boat and your sublime text takes a century to process the request. Instead, call upon your aquaintance, friend, best friend, or lover: Vim. Vim is fully capable of doing this. How capable you may ask? This capable:

```javascript
:%s/project.server.com/my.local\/project/g
```

## What Does This Do?

```javascript
// Tells Vim to search
%s
// Tells Vim what to search for
/project.server.com/
// Tells Vim what to replace it with
/my.local\/project/
// Tells vim to run the commands before it globally, or from the beginning of the file until the end
/g
```

Go ahead, test it out. It's literally instant. At the bottom where you run your Vim commands, you'll notice that it will output the occurances and lines which it found and replaced. Much like sublime text, just more handy, and much faster.
