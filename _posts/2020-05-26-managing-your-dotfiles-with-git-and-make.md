---
title: Managing Your Dotfiles With Git and Make
date: 2020-05-26
layout: blog
---

At some point, I realized I was putting in an awful amount of work customizing
my development environment while not being able to easily deploy it anywhere
else. There are a number of tools that exist for this exact purpose, but I've
found that using Git, Make, and GitHub fullfills all my requirements

I wanted to:

1. Track changes to my dotfiles.
2. Backup my dotfiles.
3. Easily install my dotfiles on a new machine.


## Initial Setup

Let's start by tracking your `.bashrc`:

1. Set up a git repository for your dotfiles:
```shell
$ mkdir ~/dotfiles
$ cd ~/dotfiles && git init
```
2. Move your `.bashrc` to `~/dotfiles/`. Make sure to omit the `.` so it's not
   hidden in your repo:
```shell
$ mv ~/.bashrc ~/dotfiles/bashrc
```
3. Create a Makefile.
```shell
$ touch ~/dotfiles/Makefile
```
4. Put this inside `~/dotfiles/Makefile`:[^1]
```make
pwd := $(shell pwd -LP)
.PHONY: bash
all: bash
bash:
        @ln -nfs "${pwd}/bashrc" ~/.bashrc
```
5. Install your dotfiles:
```shell
$ make all
```
6. After creating a new repo on GitHub, push your dotfiles:
```shell
$ git add .
$ git commit -m"Tracking my dotfiles."
$ git remote add origin <remote repository url>
$ git push -u origin master
```

Now, all changes to your dotfiles are tracked, and you can easily install your
dotfiles on a new machine by cloning your dotfiles repo and running `make all`.

## Adding More Dotfiles

If you want to add another dotfile, it's super easy. For example, let's add
your Git config:

1. Move your `.gitconfig` to `~/dotfiles/`. Again, make sure to omit the `.` so
   it's not hidden:
```shell
$ mv ~/.gitconfig ~/dotfiles/gitconfig
```
2. Update `~/dotfiles/Makefile` to be:
```make
pwd := $(shell pwd -LP)
.PHONY: bash git
all: bash git
bash:
        @ln -nfs "${pwd}/bashrc" ~/.bashrc
git:
        @ln -nfs "${pwd}/gtconfig" ~/.gitconfig
```
3. Install your dotfiles:
```shell
$ make all
```

## Installing Your Dotfiles on a New Machine

It's as easy as:

```shell
$ git clone <remote repository url> ~/dotfiles
$ cd ~/dotfiles && make all
```

## Conclusion

Since you're using Make, you can have much more complex setup logic. For
example, I have different installation paths for different operating systems
and separate dedicated Makefiles for things like Vim. If you're curious, you
can check out my dotfiles on [GitHub](https://github.com/pderichai/dotfiles).

---

[^1]: Makefile syntax is finicky. Check out [makefiltutorial.com](https://makefiletutorial.com/).
