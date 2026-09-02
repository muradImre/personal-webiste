"use client";

import { useMemo, useState } from "react";

const SIZE = 7;

function isHole(row: number, col: number) {
  if (row < 0 || col < 0 || row >= SIZE || col >= SIZE) return false;
  if (row < 2 || row > 4) return col >= 2 && col <= 4;
  return true;
}

function key(row: number, col: number) {
  return `${row},${col}`;
}

function initialOccupied() {
  const next = new Set<string>();
  for (let row = 0; row < SIZE; row += 1) {
    for (let col = 0; col < SIZE; col += 1) {
      if (isHole(row, col) && !(row === 3 && col === 3)) {
        next.add(key(row, col));
      }
    }
  }
  return next;
}

const DIRECTIONS = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
] as const;

type Cell = { row: number; col: number };

function parse(value: string): Cell {
  const [row, col] = value.split(",").map(Number);
  return { row, col };
}

function validMoves(occupied: Set<string>, from: Cell) {
  const moves: Cell[] = [];
  for (const [dr, dc] of DIRECTIONS) {
    const mid = { row: from.row + dr, col: from.col + dc };
    const to = { row: from.row + 2 * dr, col: from.col + 2 * dc };
    if (
      occupied.has(key(mid.row, mid.col)) &&
      isHole(to.row, to.col) &&
      !occupied.has(key(to.row, to.col))
    ) {
      moves.push(to);
    }
  }
  return moves;
}

export function MarbleSolitaire() {
  const [history, setHistory] = useState<Set<string>[]>(() => [initialOccupied()]);
  const [selected, setSelected] = useState<string | null>(null);

  const occupied = history[history.length - 1];
  const remaining = occupied.size;
  const selectedCell = selected ? parse(selected) : null;
  const targets = useMemo(() => {
    if (!selectedCell) return new Set<string>();
    return new Set(validMoves(occupied, selectedCell).map((cell) => key(cell.row, cell.col)));
  }, [occupied, selectedCell]);

  const hasAnyMove = useMemo(() => {
    for (const value of occupied) {
      if (validMoves(occupied, parse(value)).length > 0) return true;
    }
    return false;
  }, [occupied]);

  function applyJump(from: Cell, to: Cell) {
    const mid = {
      row: (from.row + to.row) / 2,
      col: (from.col + to.col) / 2,
    };
    const next = new Set(occupied);
    next.delete(key(from.row, from.col));
    next.delete(key(mid.row, mid.col));
    next.add(key(to.row, to.col));
    setHistory((current) => [...current, next]);
    setSelected(key(to.row, to.col));
  }

  function onCell(row: number, col: number) {
    if (!isHole(row, col)) return;
    const id = key(row, col);

    if (selected && targets.has(id)) {
      applyJump(parse(selected), { row, col });
      return;
    }

    if (occupied.has(id)) {
      setSelected(id === selected ? null : id);
      return;
    }

    setSelected(null);
  }

  const won = remaining === 1;
  const stuck = remaining > 1 && !hasAnyMove;

  return (
    <div>
      <div className="flex flex-wrap items-end justify-between gap-4">
        <p className="font-mono text-[12px] text-muted">
          {remaining} marble{remaining === 1 ? "" : "s"}
          <span className="mx-2 text-rule">/</span>
          {history.length - 1} jump{history.length - 1 === 1 ? "" : "s"}
        </p>
        <div className="flex gap-4 font-mono text-[12px]">
          <button
            type="button"
            className="text-ink-soft hover:text-accent"
            onClick={() => {
              if (history.length < 2) return;
              setHistory((current) => current.slice(0, -1));
              setSelected(null);
            }}
            disabled={history.length < 2}
          >
            Undo
          </button>
          <button
            type="button"
            className="text-ink-soft hover:text-accent"
            onClick={() => {
              setHistory([initialOccupied()]);
              setSelected(null);
            }}
          >
            Reset
          </button>
        </div>
      </div>

      <div className="mt-6 flex justify-center">
        <div
          className="grid w-full max-w-[22rem] gap-1.5"
          style={{ gridTemplateColumns: `repeat(${SIZE}, minmax(0, 1fr))` }}
        >
          {Array.from({ length: SIZE * SIZE }, (_, index) => {
            const row = Math.floor(index / SIZE);
            const col = index % SIZE;
            if (!isHole(row, col)) {
              return <div key={index} />;
            }

            const id = key(row, col);
            const hasMarble = occupied.has(id);
            const isSelected = selected === id;
            const isTarget = targets.has(id);

            return (
              <button
                key={id}
                type="button"
                aria-label={
                  hasMarble
                    ? `Marble at row ${row + 1}, column ${col + 1}`
                    : `Empty hole at row ${row + 1}, column ${col + 1}`
                }
                onClick={() => onCell(row, col)}
                className={`aspect-square rounded-full border transition duration-150 ${
                  hasMarble
                    ? isSelected
                      ? "border-accent bg-accent shadow-[inset_0_1px_0_rgba(255,255,255,0.25)]"
                      : "border-ink/20 bg-ink hover:border-accent"
                    : isTarget
                      ? "border-accent bg-accent/15"
                      : "border-rule bg-paper-2"
                }`}
              />
            );
          })}
        </div>
      </div>

      <p className="mt-6 text-[15px] leading-6 text-ink-soft">
        Select a marble, then an empty hole two steps away. You jump over the marble in between, and it
        comes off the board. Finish with one marble — the center is the classic ending.
      </p>

      {won ? (
        <p className="display mt-4 text-2xl">One marble left. That&apos;s the game.</p>
      ) : null}
      {stuck ? (
        <p className="mt-4 text-[15px] text-ink-soft">
          No legal jumps. Undo, or reset and try a different order — the search version in Python is
          for this moment.
        </p>
      ) : null}
    </div>
  );
}
