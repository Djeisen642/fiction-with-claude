# Architecture

How this repository is organized and how the human–Claude workflow operates.

---

## What This Repo Is

A structured workspace for writing a short story collaboratively with Claude. The repo stores:

- The story itself (chapters in `manuscript/`)
- All the planning and reference material Claude needs (files in `notes/`)
- Summaries Claude uses to stay oriented across sessions (files in `summaries/`)
- Instructions for how Claude should behave (`CLAUDE.md`)

Git version control is used not for code, but as a record of creative decisions — every change is tracked, reviewable, and reversible.

---

## Directory Layout

```
ai-gen-story/
├── manuscript/        # The actual story
│   └── TEMPLATE.md   # Copy this when starting a new chapter
├── notes/             # Planning and reference — Claude reads these every session
│   ├── outline.md         # Planned story structure
│   ├── characters.md      # All named characters
│   ├── worldbuilding.md   # Rules and setting of the story's world
│   ├── tone.md            # Voice, style, what the prose should feel like
│   ├── style-sample.md    # A reference passage — all prose should sound like this
│   ├── continuity.md      # Small specific facts from the prose that can't be contradicted
│   ├── questions.md       # Open questions; unresolved ones block writing
│   ├── decisions.md       # Log of key decisions made across sessions
│   ├── decisions-archive.md  # Resolved decisions (not read during normal sessions)
│   └── ideas.md           # Scratchpad — anything unformed goes here
├── summaries/         # Story progress
│   └── story-so-far.md   # One sentence per chapter; quick orientation
├── CLAUDE.md          # Instructions Claude follows during every session
├── ARCHITECTURE.md    # This file
└── README.md          # Overview and setup guide
```

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

## The Notes System

The `notes/` files are Claude's memory across sessions. Because Claude doesn't remember previous conversations, these files carry all the context forward.

| File | What it's for |
|---|---|
| `outline.md` | High-level story structure — acts, beats, where things are going |
| `characters.md` | Every named character: who they are, what they want, how they speak |
| `worldbuilding.md` | The rules of the world the story lives in |
| `tone.md` | How the prose should feel — POV, rhythm, emotional register |
| `style-sample.md` | A concrete reference passage; new prose should sound like this |
| `continuity.md` | Specific facts stated in the prose that must stay consistent |
| `questions.md` | Open questions — some must be resolved before writing can proceed |
| `decisions.md` | A log of what was decided and why, updated every session |
| `ideas.md` | Scratchpad for fragments, half-thoughts, and anything not yet ready |

Claude is instructed to update these files proactively — you shouldn't need to ask.

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
