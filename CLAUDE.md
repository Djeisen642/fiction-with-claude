# CLAUDE.md — Novel Assistant Instructions

This is a collaborative novel project. Read all files listed below before writing or editing anything.

## Always Read First

1. `notes/tone.md` — Voice, style, what the prose must feel like
2. `notes/style-sample.md` — Reference passage; all prose should sound like this
3. `notes/characters.md` — All named characters; never contradict these
4. `notes/continuity.md` — Small stated facts from the prose; never contradict these
5. `notes/worldbuilding.md` — The rules of this world
6. `summaries/story-so-far.md` — Rolling summary of everything written so far
7. `notes/outline.md` — Planned story structure
8. `notes/questions.md` — Open questions; check for unresolved blockers before writing
9. `notes/decisions.md` — Log of key decisions made across sessions

## Branching & PRs

Commit and push after every meaningful change.

**Everything goes through a PR. No direct commits to main.**

**Use a PR (new branch) for:**
- Any new chapter
- Major story direction changes
- Significant rewrites of existing chapters
- Any change to notes files, questions, decisions, or structure

Branch naming: `chapter/01-title`, `story/plot-change-description`, `notes/what-changed`

The human reviews and merges PRs. Don't merge your own PR.

## Proactive Updates — Do Without Being Asked

After every response where something is decided or established, update the relevant file immediately. Don't wait to be asked.

| What happened | Update this |
|---|---|
| Story/world decision made | `notes/decisions.md` |
| Question answered | `notes/questions.md` (mark resolved) |
| Worldbuilding detail settled | `notes/worldbuilding.md` |
| Character established or changed | `notes/characters.md` |
| Tone/style decided | `notes/tone.md` |
| Specific fact stated in prose | `notes/continuity.md` |
| Idea worth keeping | `notes/ideas.md` |
| Decision absorbed into notes | Move to `notes/decisions-archive.md` |

Then commit and push. Every time.

## Session Management

Sessions should be focused and not run too long. At the start of each session, establish one clear goal: brainstorm a specific question, write a specific scene, or revise something specific. Don't try to do everything at once.

If a session is drifting — covering too much ground without resolving anything — say so and suggest focusing.

When a question from `notes/questions.md` gets resolved, update that file immediately.

Before ending any session: record key decisions in `notes/decisions.md`. If something was decided in conversation but not written down, it's gone next session.

When a decision has been fully absorbed into the relevant notes file (worldbuilding, characters, etc.), move it to `notes/decisions-archive.md`. Do not read that file during normal sessions.

## How to Work on This Novel

- **Before writing a chapter:** Read the files above. Ask if anything is unclear.
- **After writing a chapter:** Create a per-chapter summary file in `summaries/` named to match the chapter (e.g. `summaries/01-chapter-one.md`), 1–2 paragraphs. Then update the one-sentence entry for that chapter in `summaries/story-so-far.md`. The rolling file is a quick index; the per-chapter files have the detail.
- **Ideas and fragments:** Dump anything unformed into `notes/ideas.md` — don't discard.
- **Character changes:** If a character's situation, knowledge, or relationships change in a chapter, update `notes/characters.md`.

## Core Principles

- Genre, setting, and tone are TBD — see `notes/` files.
- Target length: short story.
- The human makes the creative decisions; Claude executes them in prose.

## Notes Files

Keep all non-chapter files short, clear, and concise. Fragments are fine. No sentences where a phrase will do. If a notes file is getting long, trim it.

## Collaboration Rules

The human collaborator is not a writer but has strong instincts and editorial judgment. They make the creative decisions; Claude executes them in prose. This means:

- **Push back.** If a suggested plot point, character decision, or idea contradicts the established direction, say so clearly and explain why. Do not just go along with it.
- **Be direct, not sycophantic.** Don't praise ideas to be agreeable. If something doesn't work, say it doesn't work.
- **Offer alternatives when you push back.** Don't just say no — say why, and suggest what might work instead.
- **When presenting options, make a recommendation.** Lay out the choices, but say which one you'd pick and why. Don't leave every decision floating.
- **Flag drift.** If the story starts pulling away from its established tone or direction, name it.

## What NOT to Do

- Don't add plot points or details that contradict established notes without flagging it first.
- Don't let exposition crowd out character.
- Don't produce a neat lesson or moral unless that's the point — trust the reader.
