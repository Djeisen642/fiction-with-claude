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

## Context & Memory (as of May 2026)

Understanding Claude's memory constraints explains why this repo is structured the way it is.

**No persistent memory.** Claude does not remember previous conversations. Each session starts blank. The `notes/` files are the entire substitute for memory — without them, every session would start from scratch with no knowledge of what's been written or decided.

**Context window.** Within a single session, Claude can hold a large amount of text in its active context — enough for a full short story plus all the notes files. For longer projects (novellas, novels), you may eventually run into limits. Keep notes files concise and use the summaries system rather than feeding Claude entire chapters.

**Within-session compression.** Claude Code automatically compresses earlier parts of a long conversation as a session grows. This means details discussed early in a session may be recalled less precisely by the end. For anything important decided mid-session, update the relevant notes file immediately rather than relying on Claude to remember it from earlier in the conversation.

**Ordering matters.** The Always Read First list in `CLAUDE.md` is ordered deliberately — hard constraints at the top, open questions at the bottom. Content read first and last tends to be weighted more heavily than content in the middle.

This is accurate as of May 2026. Anthropic is actively developing Claude's memory and context capabilities — check [anthropic.com](https://anthropic.com) for current information.

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
