import Image from "next/image";
import DevelopmentWorksheet from "./DevelopmentWorksheet";
import type { Metadata } from "next";
import Link from "next/link";
import CoursePageHero from "@/components/CoursePageHero";

export const metadata: Metadata = {
  title: "6-6. Q표본 개발 과정 기록과 방법 문단 작성 | Q방법론 온라인 강의",
  description: "류승훈의 두 수집 경로를 흐름도와 방법 문단으로 읽고, 앞선 다섯 회차의 기록으로 자기 연구의 Q표본 개발 과정을 씁니다.",
};

type Block = { kind: "figure" } | { kind: "paragraph"; text: string } | { kind: "table"; headers: string[]; rows: string[][] };
const cards: { num: number; title: string; blocks: Block[] }[] = [
  {
    num: 1,
    "title": "같은 203개에서 두 경로가 갈라진 이유",
    "blocks": [
      {
        "kind": "paragraph",
        "text": "류승훈(2023)은 재난대응상황에서 바람직한 소방서 리더십을 연구했습니다. 출발점에 놓인 203개는 선행연구에서 가져온 진술문 36개와 소방공무원의 설문·면담에서 얻은 진술문 167개입니다. 아래 흐름도를 왼쪽과 오른쪽에서 한 번씩 읽어 보세요. 한쪽에서는 이미 있는 문장이 현장에 맞는지 가렸고, 다른 쪽에서는 여러 현장 표현에서 범주를 도출해 대표 문장을 썼습니다."
      },
      {
        "kind": "figure"
      },
      {
        "kind": "paragraph",
        "text": "문헌 경로에서는 소방서 직원 31명이 판단에 참여했습니다. 5명 이상이 연구 맥락을 벗어난다고 본 11개를 제외해 25개를 남겼습니다. 현장 경로에서는 167개 진술문을 12개 범주로 묶고 범주마다 대표 진술문을 하나씩 작성했습니다. 그림에서 ‘12개 범주’와 ‘대표 진술문 12개’는 수가 같아도 서로 다른 작업의 결과입니다. (류승훈, 2023, 72–73, 82–88쪽, 표 10·13)"
      },
      {
        "kind": "paragraph",
        "text": "두 경로가 만나는 지점에서야 같은 단위끼리 더할 수 있습니다. 문헌 진술문 25개와 현장 대표 진술문 12개를 합친 37개가 사전검사를 거쳤습니다. 최종 36개에는 문헌 출처 24개와 현장 출처 12개가 담겼습니다. 표 14에서 확인한 네 문장의 재수정은 문구를 바꾼 일이므로 개수에서 빼지 않습니다. (98–101쪽, 표 14·15)"
      }
    ]
  },
  {
    num: 2,
    "title": "그림을 방법 문단으로 옮기기",
    "blocks": [
      {
        "kind": "paragraph",
        "text": "다음은 앞의 흐름도를 바탕으로 쓴 방법 문단 예시입니다. 류승훈의 연구 절차를 강의용으로 재서술했습니다."
      },
      {
        "kind": "paragraph",
        "text": "류승훈(2023)은 재난대응상황의 리더십에 관한 Q표본을 구성하기 위해 Wheeler et al.(2013)의 진술문 36개와 소방공무원 41명의 개방형 설문·면담에서 얻은 진술문 167개를 수집하였다. 문헌 진술문은 소방서 직원 31명이 맥락 적합성을 검토하였으며, 5명 이상이 현장 맥락에 맞지 않는다고 판단한 11개를 제외하였다. 현장 진술문은 12개 범주로 묶고 각 범주의 내용을 담은 대표 진술문을 하나씩 작성하였다. 문헌 진술문 25개와 현장 대표 진술문 12개를 합친 뒤, 소방서 직원 4명과 다른 직원 3명이 차례로 사전 분류를 실시하였다. 두 차례 검사에서 중복 지적을 받은 두 문장 중 하나를 제외하고 뜻이 막연하다고 지적된 네 문장의 표현을 다시 다듬어 최종 36개를 확정하였다."
      },
      {
        "kind": "paragraph",
        "text": "첫 문장은 어디에서 무엇을 모았는지, 다음 두 문장은 각 경로에서 어떤 판단을 내렸는지 알려 줍니다. 마지막 두 문장은 사전검사에서 받은 의견과 연구자의 결정을 연결합니다. 이제 이 문단의 숫자를 가리고 읽어 보세요. 수량을 지워도 선별 기준이 남습니까? 반대로 동사를 지우면 ‘범주로 묶었다’와 ‘후보에서 제외했다’의 차이를 알아낼 수 있습니까?"
      }
    ]
  },
  {
    num: 3,
    "title": "다섯 회차의 기록에서 화살표의 근거 찾기",
    "blocks": [
      {
        "kind": "paragraph",
        "text": "먼저 흐름도에 쓸 자료가 수업에서 다룬 가상 후보인지, 자신이 실제로 수집한 자료인지 밝히세요. 종이 한 장에 출처마다 출발점을 하나씩 그리세요. 각 화살표 위에 누가 무엇을 근거로 골랐는지 쓰고, 도착점에는 남은 항목의 수와 단위를 쓰세요. 수량을 확인하지 못한 단계에는 ‘미확인’과 다시 확인할 자료를 적으세요."
      },
      {
        "kind": "table",
        "headers": [
          "펼쳐 볼 기록",
          "흐름도와 문단에 옮길 내용"
        ],
        "rows": [
          [
            "6-1 연구질문과 범위표",
            "누구의 관점이며 어떤 상황의 발언을 포함했는지 첫 문장에 적는다."
          ],
          [
            "6-2 수집원 지도와 출처 대장",
            "경로별 자료 유형, 원표현의 위치와 후보 ID를 연결한다. 예를 들어 가상 면담 메모 SRC-EX-01에서 ST-EX-01을 찾을 수 있다."
          ],
          [
            "6-3 범주별 표집틀",
            "범주를 정한 근거와 잠정 선정한 후보를 적는다. 범주 수와 진술문 수는 따로 표시한다."
          ],
          [
            "6-4 문장 검토표",
            "원래 문구와 잠정 결정을 적는다. 05는 유지하고 변형 B는 잠정 제외한 이유를 찾아본다."
          ],
          [
            "6-5 파일럿 기록",
            "참여자가 카드를 놓은 위치, 그 자리에 놓은 이유, 진행자의 결정과 근거를 대조한다. 수정했다면 수정 문구도 가져온다."
          ]
        ]
      },
      {
        "kind": "paragraph",
        "text": "6-3에서 여덟 후보 중 네 개를 잠정 선정한 것은 두 표집 접근을 비교하는 과제였습니다. 6-5에서는 교대에 관한 두 문장을 비교하려고 원래 여덟 후보에 변형 B를 더해 아홉 장을 배열했습니다. 실습 흐름도에는 ‘표집 방식 비교’와 ‘문구 비교 파일럿’을 따로 표시하세요. 4개에서 9개로 후보가 늘었다고 그리면 실제로 하지 않은 수집 단계를 만들게 됩니다."
      }
    ]
  },
  {
    num: 4,
    "title": "05와 변형 B의 결정을 자기 문단에 쓰기",
    "blocks": [
      {
        "kind": "paragraph",
        "text": "6-5에서 내려받은 파일럿 기록을 펼치세요. 05는 “대원의 피로를 고려해 임무를 교대해야 한다”, 변형 B는 “임무를 교대할 때에는 대원의 피로를 고려해야 한다”였습니다. 두 카드를 어디에 놓았는지 찾은 뒤, 참여자가 각각 어떤 상황을 떠올렸는지 읽으세요. 직접 인용한 말과 진행자가 요약한 말을 구별하세요. 같은 칸에 놓였다는 사실만으로는 두 문장을 같은 뜻으로 읽었다고 쓸 수 없습니다."
      },
      {
        "kind": "paragraph",
        "text": "자기 흐름도 옆에 두 행의 결정 기록을 두세요. 각 행에는 ‘6-4의 잠정 결정 → 6-5의 실제 배치와 참여자 설명 → 이번 결정과 이유’를 씁니다. 문장을 고쳤다면 바뀐 표현을, 제외했다면 어느 카드에 그 입장이 남았는지를 적으세요. 보류했다면 다음에 확인할 질문이 그 행의 결론입니다."
      },
      {
        "kind": "paragraph",
        "text": "이제 자신의 연구질문과 수집원에서 시작해 한 문단을 쓰세요. 첫 문장에는 범위와 출처를, 이어지는 문장에는 경로별 선별·범주화 기준과 후보를 합친 시점을 담으세요. 그다음에는 05와 B의 비교에서 확인한 사실과 그에 따른 처리를 적으세요. 자기 연구를 쓸 때는 그 연구의 후보 ID와 실제 참여자 기록으로 바꾸세요. 수업에서 직접 수행한 파일럿을 보고한다면 그 범위를 ‘수업 실습’으로 밝혀 주세요."
      },
      {
        "kind": "paragraph",
        "text": "마지막으로 동료에게 그림과 문단을 건네세요. “이 수는 범주 수인가, 카드 수인가?”, “이 결정을 뒷받침하는 말은 어느 기록에 있는가?”를 짚어 달라고 하세요. 6-5 파일에는 아홉 장의 배치가 있지만 상세한 처리 결정은 05와 B에 대해서만 남습니다. 나머지 후보까지 모두 대조했을 때에만 최종 Q표본 수를 적으세요. 아직 확인 중이라면 문단도 어느 후보까지 검토했는지 밝히는 데서 마치면 됩니다."
      }
    ]
  }
];

const references = [
  "류승훈. (2023). 재난대응상황에서 부산광역시 A 소방서 소방공무원의 리더십에 대한 주관성 연구 [박사학위논문, 동아대학교]."
];

export default function LessonSixSixPage() {
  return (
    <div className="max-w-4xl mx-auto px-5 sm:px-8 py-12 sm:py-16">
      <CoursePageHero
        breadcrumbs={[{ label: "강의 목차", href: "/outline" }, { label: "4부" }, { label: "6-6. Q표본 개발 과정 기록과 방법 문단 작성" }]}
        statusLabel="공개"
        versionLabel="v1.0 · 2026-11-22"
        title="Q표본 개발 과정 기록과 방법 문단 작성"
        description={metadata.description as string}
      />
      <div className="mx-auto max-w-[720px]">
        {cards.map((card) => (
          <section key={card.num} className="mb-14" aria-labelledby={`card-${card.num}`}>
            <h2 id={`card-${card.num}`} className="text-2xl font-semibold mb-5">{card.title}</h2>
            {card.blocks.map((block, index) => block.kind === "paragraph" ? (
              <p key={index} className="mb-5 leading-8 text-[16px]" style={{ color: "var(--gray-800)" }}>{block.text}</p>
            ) : block.kind === "figure" ? (
              <figure key={index} className="my-6">
                <Image src="/images/6-6-hero-q-set-flow.webp" alt="문헌 36개 중 25개와 현장 진술문 167개에서 도출한 대표 문장 12개를 합쳐 후보 37개를 구성했다. 사전검사에서 중복 1개를 제외하고 4개 문구를 다시 수정해 최종 36개를 확정했다." width={1120} height={850} className="w-full h-auto" />
                <figcaption className="mt-2 text-sm">류승훈(2023), 72–101쪽에 근거해 재구성한 Q표본 개발 흐름도.</figcaption>
              </figure>
            ) : (
              <div key={index} className="overflow-x-auto mb-6 rounded-lg border" role="region" aria-label={`${card.title} 비교표`} tabIndex={0}>
                <table className="w-full min-w-[600px] text-sm text-left">
                  <thead className="bg-gray-50"><tr>{block.headers.map((header) => <th key={header} scope="col" className="p-3 border-b font-semibold">{header}</th>)}</tr></thead>
                  <tbody>{block.rows.map((row, rowIndex) => <tr key={rowIndex}>{row.map((cell, colIndex) => <td key={colIndex} className="p-3 border-b align-top leading-6">{cell || "내 기록"}</td>)}</tr>)}</tbody>
                </table>
              </div>
            ))}
          </section>
        ))}
        <DevelopmentWorksheet />
        <section className="mt-16 border-t pt-8" aria-labelledby="references">
          <h2 id="references" className="text-2xl font-semibold mb-5">참고문헌</h2>
          <ul className="space-y-5 text-sm leading-7 break-words">{references.map((reference) => <li key={reference}>{reference}</li>)}</ul>
        </section>
        <nav aria-label="강의 이동" className="mt-12 pt-8 border-t flex flex-wrap justify-between gap-4 text-sm">
          <Link href="/lessons/6-5">← 6-5. Q표본 검토와 파일럿</Link>
          <span className="text-gray-500">7-1. 연구질문에서 P표본의 참여 조건 정하기 · 예정</span>
        </nav>
      </div>
    </div>
  );
}
