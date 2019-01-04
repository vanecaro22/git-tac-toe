# To Play Git Tic-Tac-Toe

## Basics

// (nts. look into steps to import repo)

One team member should fork the repository and share the link with team member(s). This person should add all team members as collaborators in order for the team members to push to the repository. The team members in turn need to accept the email invite to collaborate before they can push.

To launch the project team member(s) should first clone the repository `git clone <your repo link>` (there is a convenient link to copy) on github, then `cd` into the directory and `yarn install`. To start the app `yarn start`. Decide who goes first with rock-paper-scissors. This person is team 'x'.

In the `yourMoves.js` file, enter a single 'x' or 'o' in one of the nested arrays. Commit your move, first `git add .`. This adds all the files to staging, then add a sensible commit message, e.g. `git commit -m "Purvi: move 2"`. Finally `git push`.

Other team members can then `git pull`, and see the updated "Git-Tac-Toe" board. Continue committing, pushing and pulling until there is a win, loss or draw. You can review the git commit history

Update the `yourStats` file and reset your moves to keep playing until you are gitastic.

## Resolving a merge conflict

Next we will contrive a scenario where there is a merge conflict.

- two team members should enter a different move (e.g. one does x while the other does o), but in the same array position
- one team member commits the changes
- one team member pushes while the other pulls, the person who pulls will see an error, `CONFLICT (content): Merge conflict in src/yourMoves.js` and in their text editor, will see something like

```
<<<<<<< HEAD
const moves = [[[o], [], []], [[], [], []], [[], [], []]];
=======
const moves = [[[x], [], []], [[], [], []], [[], [], []]];
>>>>>>> c795855bcd7b4f7eb22088a375887de10c65aeb0
```

They should resolve the conflict based on rock-paper-scissors and commit and push.
