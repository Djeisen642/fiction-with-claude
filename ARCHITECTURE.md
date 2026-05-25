# Architecture

How this repository is organized and how the human–Claude workflow operates.

---

## What This Repo Is

A structured workspace for writing a story collaboratively with Claude. The core idea: Claude has no memory between sessions, so everything it needs to know lives in plain text files in this repo. Each session, Claude reads those files, does the work, updates them with anything new, and commits the changes for you to review.

Git version control is used not for code, but as a record of creative decisions — every change is tracked, reviewable, and reversible.

---

## How a Session Works

1. **You open a session** with Claude (via [Claude Code](https://claude.ai/code) or the Claude web app)
2. **Claude reads the notes files** listed in `CLAUDE.md` to get oriented — what's been decided, what's open, what the story looks like so far
3. **You establish one goal** for the session: brainstorm a question, write a scene, revise something
4. **Claude writes or edits**, then immediately updates the relevant notes file if anything new was decided
5. **Claude commits and pushes** the changes to a [branch](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-branches) and opens a [pull request (PR)](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests) for you to review
6. **You review and merge** the PR — or push back and ask for changes

Claude never merges its own PRs. You are always in the loop before anything lands on `main`.

---

## Choosing a Model (as of May 2026)

Claude comes in three tiers. You can switch between them in Claude Code with the `/model` command. Faster and cheaper isn't always worse — match the model to the task.

| Model | Best for | Trade-off |
|---|---|---|
| **Opus** | First drafts of important chapters, complex character work, difficult plot decisions, anything where quality matters most | Slowest, most expensive |
| **Sonnet** | Most session work — routine writing, notes updates, brainstorming, revisions | Good balance of quality and speed; a reasonable default |
| **Haiku** | Quick questions, simple edits, checking a file, short back-and-forth | Fastest and cheapest, but less nuanced on complex creative tasks |

For a short story, Sonnet is probably the right default. Reach for Opus when a scene or decision feels important enough to warrant it. Use Haiku when you just need a quick answer.

Models and pricing change — see [anthropic.com](https://anthropic.com) for current options.

---

## Context & Memory (as of May 2026)

Understanding Claude's memory constraints explains why this repo is structured the way it is.

**No persistent memory.** Claude does not remember previous conversations. Each session starts blank. The `notes/` files are the entire substitute for memory — without them, every session would start from scratch with no knowledge of what's been written or decided.

**Context window.** Within a single session, Claude can hold a large amount of text in its active context — enough for a full short story plus all the notes files. For longer projects (novellas, novels), you may eventually run into limits. Keep notes files concise and use the summaries system rather than feeding Claude entire chapters.

**Within-session compression.** Claude Code automatically compresses earlier parts of a long conversation as a session grows. This means details discussed early in a session may be recalled less precisely by the end. For anything important decided mid-session, update the relevant notes file immediately rather than relying on Claude to remember it from earlier in the conversation.

**Ordering matters.** The Always Read First list in `CLAUDE.md` is ordered deliberately — hard constraints at the top, open questions at the bottom. Content read first and last tends to be weighted more heavily than content in the middle.

This is accurate as of May 2026. Anthropic is actively developing Claude's memory and context capabilities — check [anthropic.com](https://anthropic.com) for current information.

---

## The Notes System

The `notes/` files are Claude's memory across sessions. Claude is instructed to update them proactively — you shouldn't need to ask.

| File | What it's for |
|---|---|
| `decisions.md` | A log of what was decided and why, updated every session |
| `characters.md` | Every named character: who they are, what they want, how they speak |
| `continuity.md` | Specific facts stated in the prose that must stay consistent |
| `worldbuilding.md` | The rules of the world the story lives in |
| `outline.md` | High-level story structure — acts, beats, where things are going |
| `tone.md` | How the prose should feel — POV, rhythm, emotional register |
| `style-sample.md` | A concrete reference passage; new prose should sound like this |
| `questions.md` | Open questions — some must be resolved before writing can proceed |
| `ideas.md` | Scratchpad for fragments, half-thoughts, and anything not yet ready |

For individual chapter summaries in `summaries/`: read most-recent-first and only as far back as needed — recent chapters are most relevant to what comes next.

---

## The PR Workflow

All changes go through a PR. This means:

- You see every change before it becomes permanent
- You can leave comments, request revisions, or reject changes entirely
- The full history of every decision is preserved in git

### Branch Naming

| Type of change | Branch name format |
|---|---|
| New chapter | `chapter/01-working-title` |
| Story direction change | `story/description-of-change` |
| Notes or structure update | `notes/what-changed` |

### What triggers a new PR

- Any new chapter
- Major story direction changes
- Significant rewrites of existing chapters
- Any change to notes files, questions, decisions, or structure

### Merging a PR

1. Open the PR on GitHub
2. Click the green **Merge pull request** button
3. Click **Confirm merge**

That's it. The branch is deleted automatically.

**Important: merge before starting a new session.** If you let PRs pile up, two sessions may edit the same notes file and create a conflict. One open PR at a time and it essentially never happens.

### If you see a merge conflict

GitHub will show "This branch has conflicts that must be resolved" instead of the green button. Don't panic — you can fix it in the browser:

1. Click **Resolve conflicts**
2. GitHub opens a text editor. You'll see something like this in the file:

   ```
   <<<<<<< your-branch
   The text from this PR
   =======
   The text already on main
   >>>>>>> main
   ```

3. Delete the conflict markers (`<<<<<<<`, `=======`, `>>>>>>>`) and keep the text you want — usually you want both, one after the other
4. Click **Mark as resolved**, then **Commit merge**
5. The green merge button will appear

If you're not sure what to keep, just ask Claude — it can resolve the conflict for you. Tell it there's a merge conflict and paste the conflicting section, or just start a session and say "there's a merge conflict in PR #X, can you fix it."

---

## What Claude Will and Won't Do

**Will do without being asked:**
- Update notes files when something is decided
- Commit and push after every meaningful change
- Open a PR for review
- Push back if a suggested direction contradicts what's already established

**Will not do:**
- Merge its own PRs
- Commit directly to `main` (blocked by branch protection)
- Silently go along with ideas that don't work — it's instructed to say so

---

## Directory Layout

```
ai-gen-story/
├── manuscript/        # The actual story
│   └── TEMPLATE.md   # Copy this when starting a new chapter
├── notes/             # Planning and reference — Claude reads these every session
│   ├── decisions.md       # Log of key decisions made across sessions
│   ├── characters.md      # All named characters
│   ├── continuity.md      # Small specific facts from the prose that can't be contradicted
│   ├── worldbuilding.md   # Rules and setting of the story's world
│   ├── outline.md         # Planned story structure
│   ├── tone.md            # Voice, style, what the prose should feel like
│   ├── style-sample.md    # A reference passage — all prose should sound like this
│   ├── questions.md       # Open questions; unresolved ones block writing
│   ├── decisions-archive.md  # Resolved decisions (not read during normal sessions)
│   └── ideas.md           # Scratchpad — anything unformed goes here
├── summaries/         # Story progress
│   └── story-so-far.md   # One sentence per chapter; quick orientation
├── CLAUDE.md          # Instructions Claude follows during every session
├── ARCHITECTURE.md    # This file
└── README.md          # Overview and setup guide
```
