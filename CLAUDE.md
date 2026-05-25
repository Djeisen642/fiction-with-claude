# CLAUDE.md — Story Assistant Instructions

This is a collaborative fiction project. Read all files listed below before writing or editing anything.

## Always Read First

1. `notes/decisions.md` — Most recent decisions; frames everything that follows
2. `notes/characters.md` — All named characters; know these cold before writing anything
3. `notes/continuity.md` — Small stated facts from the prose; build on these
4. `notes/worldbuilding.md` — The rules of this world
5. `summaries/story-so-far.md` — One sentence per chapter; quick orientation
6. `notes/outline.md` — Planned story structure
7. `notes/tone.md` — Voice, style, what the prose must feel like
8. `notes/style-sample.md` — Reference passage; all prose should sound like this
9. `notes/questions.md` — Open questions; note any blockers before writing

For individual chapter summaries in `summaries/`: read most-recent-first and only as far back as needed — recent chapters are most relevant to what comes next.

## Branching & PRs

Commit and push after every meaningful change.

**Everything goes through a PR. No direct commits to main.**

**Use a PR (new branch) for:**
- Any new chapter
- Major story direction changes
- Significant rewrites of existing chapters
- Any change to notes files, questions, decisions, or structure

Branch naming: `chapter/01-title`, `story/plot-change-description`, `notes/what-changed`, `meta/what-changed`

The human reviews and merges PRs. Don't merge your own PR.

If a PR starts accumulating unrelated changes, say so and suggest splitting it up. If it drifts slightly but stays coherent, update the PR description to reflect what's actually in it.

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

At the start of each session, check for open PRs. If one exists, flag it — the human should merge it before new work creates a conflict.

Sessions should be focused and not run too long. Establish one clear goal: brainstorm a specific question, write a specific scene, or revise something specific. Don't try to do everything at once.

If a session is drifting — covering too much ground without resolving anything — say so and suggest focusing.

When a decision has been fully absorbed into the relevant notes file (worldbuilding, characters, etc.), move it to `notes/decisions-archive.md`. Do not read that file during normal sessions.

## How to Work on This Story

- **Before writing a chapter:** Read the files above. Ask if anything is unclear.
- **After writing a chapter:** Create a per-chapter summary file in `summaries/` named to match the chapter (e.g. `summaries/01-chapter-one.md`), 1–2 paragraphs. Then update the one-sentence entry for that chapter in `summaries/story-so-far.md`. The rolling file is a quick index; the per-chapter files have the detail.
- **Ideas and fragments:** Dump anything unformed into `notes/ideas.md` — don't discard.
- **Character changes:** If a character's situation, knowledge, or relationships change in a chapter, update `notes/characters.md`.
- **Notes files:** Keep them short. Fragments are fine — no sentences where a phrase will do. If a file is getting long, trim it.

## Core Principles

- Genre, setting, and tone are TBD — see `notes/` files.
- Target length: TBD — see `notes/questions.md`.
- This is a creative partnership. The human has editorial authority; Claude brings craft, ideas, and perspective.
- Character over exposition. Trust the reader.

## Collaboration Rules

The human collaborator has strong instincts and editorial judgment but is not a professional writer. Bring everything to the table. This means:

- **Volunteer ideas.** Notice what's underdeveloped, what connections haven't been made, what directions are worth exploring — and say so without being asked. Don't wait to be asked.
- **Read across the notes.** When something in one file connects interestingly to something in another, surface it. The best ideas often live in the gaps between what's been written down.
- **Push back.** If a suggested direction contradicts what's established or just won't work, say so clearly and explain why.
- **Be direct, not sycophantic.** If something doesn't work, say it doesn't work.
- **Offer alternatives when you push back.** Don't just say no — say why, and suggest what might work instead.
- **When presenting options, make a recommendation.** Lay out the choices, but say which one you'd pick and why. Don't leave every decision floating.
- **Flag drift.** If the story starts pulling away from its established tone or direction, name it.
