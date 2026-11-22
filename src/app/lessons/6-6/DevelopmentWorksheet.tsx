"use client";

import { useRef, useState, type ChangeEvent, type FormEvent } from "react";

const field = "mt-1 block w-full rounded border border-slate-400 bg-white p-2 text-base";
const panel = "mb-5 rounded-lg border border-slate-300 p-4";
const decisionHint = "잠정 결정 → 배치와 참여자 설명(인용 또는 요약) → 이번 결정과 이유";

export default function DevelopmentWorksheet() {
  const [branches, setBranches] = useState([1, 2]);
  const nextId = useRef(3);
  const [reference, setReference] = useState("");
  const [fileError, setFileError] = useState("");
  const loadNumber = useRef(0);
  async function openReference(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    const number = ++loadNumber.current;
    setReference("");
    setFileError("");
    if (!file) return;
    try {
      const text = await file.text();
      if (number === loadNumber.current) setReference(text);
    } catch {
      if (number === loadNumber.current) setFileError("파일을 읽지 못했습니다. 기록을 직접 열어 참고하세요.");
    }
  }
  function download(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const values = new FormData(event.currentTarget);
    const lines = ["6-6 Q표본 개발 흐름도와 방법 문단", "", String(values.get("scope")), ""];
    branches.forEach((id, index) => lines.push("출처 경로 " + (index + 1) + ": " + values.get("source" + id)
      + " → " + values.get("selection" + id) + " → " + values.get("output" + id)));
    lines.push("↓", "후보 구성과 파일럿: " + values.get("pilot"), "", "후보별 수정 근거",
      String(values.get("decision1")), String(values.get("decision2")), "↓", "확인한 결과: " + values.get("result"),
      "", "방법 문단", String(values.get("paragraph")));
    const url = URL.createObjectURL(new Blob([lines.join("\n")], { type: "text/plain;charset=utf-8" }));
    const link = document.createElement("a");
    link.href = url;
    link.download = "6-6-Q표본-개발흐름도와-방법문단.txt";
    link.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }
  return <section className="my-10" aria-labelledby="worksheet">
    <h3 id="worksheet" className="mb-4 text-xl font-semibold">내 흐름도와 방법 문단</h3>
    <details className={panel}>
      <summary className="cursor-pointer">6-5 기록 파일 펼쳐 보기</summary>
      <label className="mt-4 block">이 기기에서 읽을 기록 (.txt)
        <input className={field} type="file" accept=".txt,text/plain" onChange={openReference} /></label>
      {fileError && <p role="alert">{fileError}</p>}
      {reference && <pre className="mt-3 max-h-72 overflow-auto whitespace-pre-wrap break-words text-sm">{reference}</pre>}
    </details>
    <form onSubmit={download}>
      <label className="block mb-4">연구질문과 범위 (수업 실습 또는 자기 연구)
        <textarea required name="scope" className={field} rows={2} /></label>
      <div className="grid gap-x-4 sm:grid-cols-2">
        {branches.map((id, index) => <fieldset key={id} className={panel}>
          <legend className="px-1 font-semibold">출처 경로 {index + 1}</legend>
          <label>출처·자료 위치·처음 수집한 수와 단위<input required name={"source" + id} className={field} /></label>
          <label className="mt-3 block">선별 또는 범주화 기준<textarea required name={"selection" + id} className={field} rows={2} /></label>
          <label className="mt-3 block">남긴 후보·수와 단위<input required name={"output" + id} className={field} /></label>
          {branches.length > 1 && <button type="button" className="mt-2 text-sm underline" onClick={() => setBranches(branches.filter(value => value !== id))}>이 경로 빼기</button>}
        </fieldset>)}
      </div>
      <button type="button" className="mb-4 text-sm underline" onClick={() => setBranches([...branches, nextId.current++])}>출처 경로 추가</button>
      <div aria-hidden="true" className="text-center text-xl">↓</div>
      <label className={"block " + panel}>후보 구성과 파일럿 · 어느 후보를 어떤 목적으로 모아 검토했나요?
        <textarea required name="pilot" rows={3} className={field} /></label>
      <div className={panel}>
        <p className="mb-2 font-semibold">후보별 수정 근거</p>
        <p className="mb-3 text-sm">{decisionHint}. 자기 연구라면 해당 후보 ID를 함께 적으세요.</p>
        <label>05의 기록 또는 자기 연구의 첫 번째 후보<textarea required name="decision1" className={field} rows={3} /></label>
        <label className="mt-3 block">변형 B의 기록 또는 두 번째 후보<textarea required name="decision2" className={field} rows={3} /></label>
      </div>
      <div aria-hidden="true" className="text-center text-xl">↓</div>
      <label className={"block " + panel}>확인한 결과 · 최종 수와 근거, 또는 보류한 후보와 남은 질문
        <textarea required name="result" className={field} rows={2} /></label>
      <label className="block font-semibold">논문 방법 문단<textarea required name="paragraph" rows={7} className={field + " font-normal"} /></label>
      <p className="my-3 text-sm">입력 내용은 이 화면에만 있습니다. 페이지를 닫기 전에 흐름도와 문단을 함께 저장하세요.</p>
      <button className="rounded bg-slate-800 px-4 py-2 text-white">흐름도와 방법 문단 내려받기 (.txt)</button>
    </form>
  </section>;
}
