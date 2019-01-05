# To Play Git-Tac-Toe

## Set up

One team member should fork the repository and share the link with team member(s). The person who forks the repo also needs to add all team members as collaborators in order for them to push to the repository. The team members in turn need to accept the email invite to collaborate before they can push.

To launch the project team member(s) should first clone the repository `git clone <git-tac-toe repo link>` , then `cd` into the directory and `yarn install`. To start the app `yarn start`. Decide who goes first with rock-paper-scissors.

## Basic play

In the `yourMoves.js` file, enter a single `x` or `o` in one of the nested arrays. Commit your move by first typing, `git add .`, which adds all the files to staging, then commit the change and including sensible commit message, e.g. `git commit -m "Purvi: move 2"`. Finally `git push` to push the changes to the remote repository. (Note, As you play you can review the commit history `git log` to double check who goes next.)

Other team member(s) should then `git pull` to see the updated "Git-Tac-Toe" board. Continue adding, committing, pushing and pulling moves until there someone wins or there is a draw. Update the `yourStats.js` file and reset your moves to play again until you are gitastic. 🎉

## Resolving a merge conflict

Next we will contrive a scenario where there is a merge conflict so you can practise resolving conflicts:

- two team members should enter a different move (e.g. one does x while the other does o), but in the same array position
- both commit their changes and try to push their changes
- one will be successful, the other will see an error, `CONFLICT (content): Merge conflict in src/yourMoves.js` and in their text editor, will see something like

```
<<<<<<< HEAD
const moves = [[[o], [], []], [[], [], []], [[], [], []]];
=======
const moves = [[[x], [], []], [[], [], []], [[], [], []]];
>>>>>>> c795855bcd7b4f7eb22088a375887de10c65aeb0
```

- Resolve the conflict based on rock-paper-scissors, commit and push the changes.

## Git branching

TK.
