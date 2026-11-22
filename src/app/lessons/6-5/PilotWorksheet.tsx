"use client";

import { useState, type FormEvent } from "react";

const scores = ["−2", "−1", "0", "+1", "+2"];
const reviewCards = [
  { id: "ST-EX-05", previous: "유지" },
  { id: "변형 B", previous: "제외(잠정)" },
];
const input = "mt-1 block w-full rounded border border-slate-400 bg-white p-2 text-base text-slate-900";
const button = "mt-4 rounded bg-slate-800 px-4 py-2 text-sm font-medium text-white";

export default function PilotWorksheet({ rows }: { rows: string[][] }) {
  const [ranks, setRanks] = useState<Record<string, string>>({});
  const [sorting, setSorting] = useState(true);
  const [decisions, setDecisions] = useState<Record<string, string>>({});

  function download(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const lines = [
      "6-5 Q표본 파일럿 실습 기록", "", "참여자의 최종 배열",
      ...rows.map(([id, wording]) => id + " [" + ranks[id] + "] " + wording),
    ];
    for (const { id, previous } of reviewCards) {
      lines.push("", id + " · 이전 결정: " + previous + " · 배치: " + ranks[id],
        "참여자 설명 (" + data.get(id + "-type") + "): " + data.get(id + "-note"),
        "이번 결정: " + decisions[id], "판단 근거: " + data.get(id + "-reason"));
      if (decisions[id] === "수정") lines.push("수정 문구: " + data.get(id + "-revision"));
      if (decisions[id] === "보류") lines.push("재확인 질문: " + data.get(id + "-question"));
    }
    const url = URL.createObjectURL(new Blob([lines.join("\n")], { type: "text/plain;charset=utf-8" }));
    const link = document.createElement("a");
    link.href = url;
    link.download = "6-5-파일럿-수정근거.txt";
    link.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }

  return (
    <div className="my-8 rounded-xl border border-slate-300 p-4 sm:p-6">
      <h3 className="mb-2 text-xl font-semibold">{sorting ? "참여자용 분류표" : "참여자의 최종 배열"}</h3>
      <p className="mb-4 text-sm">−2는 내 생각에서 가장 먼 쪽, +2는 가장 가까운 쪽입니다. 같은 칸에 여러 장을 놓을 수 있습니다.</p>
      {sorting ? <form onSubmit={e => { e.preventDefault(); setSorting(false); }}>
        {rows.map(([id, wording]) => <label key={id} className="flex items-center justify-between gap-4 border-t py-3">
          <span><small className="block text-slate-600">{id}</small>{wording}</span>
          <select required aria-label={id + " 배치"} className="shrink-0 rounded border p-2" value={ranks[id] ?? ""}
            onChange={e => setRanks({ ...ranks, [id]: e.target.value })}>
            <option value="">칸 선택</option>{scores.map(n => <option key={n}>{n}</option>)}
          </select>
        </label>)}
        <button className={button}>배치 확인하고 면담 시작</button>
      </form> : <>
        <dl>{scores.map(score => <div key={score} className="grid grid-cols-[3rem_1fr] gap-2 border-t py-2">
          <dt className="font-semibold">{score}</dt><dd>{rows.filter(([id]) => ranks[id] === score).map(([id, wording]) =>
            <p key={id} className="mb-1">{id} · {wording}</p>)}{!Object.values(ranks).includes(score) && "빈칸"}</dd>
        </div>)}</dl>
        <form onSubmit={download}>
          <h3 className="mb-2 mt-8 text-xl font-semibold">분류 후 면담</h3>
          {reviewCards.map(({ id }) => <fieldset key={id} className="my-4">
            <legend className="font-semibold">{id} · {ranks[id]} 칸</legend>
            <label className="block my-2">어떤 상황을 떠올리며 이 카드를 여기에 놓으셨나요?
              <textarea className={input} name={id + "-note"} required rows={2} /></label>
            <label>기록 방식<select className={input} required name={id + "-type"} defaultValue="">
              <option value="">선택</option><option>직접 인용</option><option>진행자 요약</option></select></label>
          </fieldset>)}
          <h3 className="mb-2 mt-8 text-xl font-semibold">진행자의 수정 근거 기록</h3>
          {reviewCards.map(({ id, previous }) => <fieldset key={id} className="my-4 border-t pt-2">
            <legend className="font-semibold">{id} · 6-4의 결정은 {previous}</legend>
            <label>이번 결정<select className={input} required value={decisions[id] ?? ""}
              onChange={e => setDecisions({ ...decisions, [id]: e.target.value })}>
              <option value="">선택</option>{["유지", "수정", "제외", "보류"].map(v => <option key={v}>{v}</option>)}</select></label>
            <label className="block mt-2">어느 발언을 근거로 결정했나요? 제외한다면 어떤 카드가 그 입장을 담나요?
              <textarea className={input} name={id + "-reason"} required rows={2} /></label>
            {decisions[id] === "수정" && <label>수정한 문구<textarea className={input} name={id + "-revision"} required /></label>}
            {decisions[id] === "보류" && <label>다시 확인할 질문<textarea className={input} name={id + "-question"} required /></label>}
          </fieldset>)}
          <p className="text-sm">페이지를 닫기 전에 기록을 파일로 저장하세요. 입력 내용은 이 화면에만 머뭅니다.</p>
          <button className={button}>수정 근거 기록 내려받기 (.txt)</button>
        </form>
      </>}
    </div>
  );
}
