# (Tuts) Web Development - JavaScript

This repository contains various tutorials that I have worked through in order to increase my skills in the web development field, with a particular focus on `JavaScript` such as to improve my general knowledge and become more aquanted with JavaScript as well as to learn how to implement cool features for my personal website: [benwolfaardt.com](https://benwolfaardt.com) (comming soon!)

As not to ocupy too many repositories with "tutorials" I've decided to group them into a single repository by making use of the `git`'s *`orphan`* command - allowing you to have independent branches with their own independant `git` history.

# Tutorials Completed

The branches, i.e. tutorials, that I have completed so far are as follows:  
1. []() - [source]()
2. []() - [source]()
3. []() - [source]()
<!-- 4. []() - [source]()
5. []() - [source]()
6. []() - [source]()
7. []() - [source]()
8. []() - [source]()
9. []() - [source]()
10. []() - [source]() -->

---

### Naming convention of branches:
> Before the `-` is the tutorial's website name;  
> After the `-` is the tutorial's name;

# `git checkout --orphan BRANCHNAME` 

The following is an approach to implement **monorepos** as found [here](https://stackoverflow.com/questions/14679614/is-there-a-way-to-put-multiple-projects-in-a-git-repository#14680329).

> Please note that this isn't actually a "monorepo" rather, as stated above, I'm using it to have multile projects in the same repository.

1. Create a new branch for your "new" tutorial.

   > `git checkout --orphan <branch_name>`

    This creates a new branch, unrelated to your current branch. Each project should be in its own orphaned branch.

2. Write your code / do your tutorial
3. Commit your code 

   > git commit -m "Tutorial x comleted"

4. Push your code 

   > git push --set-upstream origin <branch_name>

5. Cleanup local directory

    `rm .git/index`  
    `rm -r *`

   > `git` needs a bit of a cleanup after an `orphan "checkout"`.  

   > **IMPORTANT**: ensure that you commited before performing the previous task.

6. Checkout a new branch to perform the next tutorial

   > `git checkout --orphan <new_branch_name>`

7. Step 5. often needs to be repeated here

     `rm .git/index`  
     `rm -r *`

   > Ensure that you have a blank working directory when starting a new tutorial and that nothing is staged for `git`.  
   > Ensure that the `.git` file is still in the directory.  

   > Follow on from Step 2

# TODO

* // TODO: more tutorials;  
* // TODO: update individual tutorial's `README.md`;  
* // TODO: learn so that we can get a temporary template up and running for [benwolfaardt.com](https://benwolfaardt.com);  
