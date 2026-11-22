import type { Metadata } from "next";
import Link from "next/link";
import CoursePageHero from "@/components/CoursePageHero";

export const metadata: Metadata = {
  title: "6-4. 좋은 진술문과 나쁜 진술문: 선별·수정 실습 | Q방법론 온라인 강의",
  description: "류승훈의 실제 수정 전후를 읽고, 6-3의 후보 여덟 개를 유지·수정·제외한 이유를 기록합니다.",
};

type Block = { kind: "paragraph"; text: string } | { kind: "table"; headers: string[]; rows: string[][] };
const cards: { num: number; title: string; blocks: Block[] }[] = [
  {
    num: 1,
    "title": "‘비전을 제시한다’에서 빠진 말",
    "blocks": [
      {
        "kind": "paragraph",
        "text": "“재난대응상황에서 리더는 비전을 제시한다.” 류승훈(2023)이 가독성을 높이려고 다듬은 진술문입니다. 내가 소방서 대원이라면 어떤 장면을 떠올리며 이 카드를 놓을까요? 다음은 같은 진술문이 사전검사를 거치며 어떻게 바뀌었는지 보여주는 표입니다."
      },
      {
        "kind": "table",
        "headers": [
          "류승훈(2023), 표 14의 18번",
          "진술문"
        ],
        "rows": [
          [
            "가독성을 위해 수정한 문장",
            "재난대응상황에서 리더는 비전을 제시한다."
          ],
          [
            "사전검사 뒤 다시 고친 문장",
            "재난대응상황에서 리더는 우리가 하는 일에 대한 강력한 비전을 제시한다."
          ]
        ]
      },
      {
        "kind": "paragraph",
        "text": "연구자는 후보 37개를 먼저 4명에게, 이어 다른 3명에게 분류하게 했습니다. 두 차례 모두 내용이 막연하다는 의견이 나온 네 문장을 다시 고쳤습니다. 18번이 그중 하나입니다. 같은 표의 26번에서는 긍정적 영향을 받는 대상을 ‘나에게’에서 ‘우리에게’로 되돌렸습니다. (류승훈, 2023, 98–99쪽, 표 14)"
      },
      {
        "kind": "paragraph",
        "text": "18번의 두 문장을 다시 읽어 보세요. 비전이라면 무엇이든 제시하는 지휘관과, 우리 대원이 하는 일에 강한 방향을 제시하는 지휘관을 똑같이 평가할까요? 26번에서도 내게 힘이 되는 지휘관과 우리 팀에 힘이 되는 지휘관에 대한 평가는 다를 수 있습니다. 문장을 줄인 다음에는 누가, 무엇에 대해, 얼마나 강하게 말했는지 원래 표현과 대조해 보세요."
      }
    ]
  },
  {
    num: 2,
    "title": "한 장의 카드를 어디에 놓을 수 있을까?",
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Q분류(Q-sort)에서 참여자는 한 카드에 한 자리를 줍니다. 카드 앞부분에는 동의하고 뒷부분에는 동의하지 않는다면 어느 쪽을 기준으로 놓아야 할까요? Paige & Morin(2016)은 참가자가 따로 판단할 수 있는 주장이 한 문장에 묶인 경우를 검토했고, 특정 입장을 지지하도록 덧붙인 설명도 걷어냈습니다. 반면 ‘위험하다고 생각하면’ 같은 조건은 언제 그 행동을 지지하는지 알려 줍니다. 조건을 지웠을 때 입장이 바뀐다면 그 말은 남겨야 합니다."
      },
      {
        "kind": "table",
        "headers": [
          "검토할 점",
          "후보를 읽으며 해 볼 질문"
        ],
        "rows": [
          [
            "연구질문과의 관련성",
            "이 문장에 동의한다는 것은 우리 연구가 묻는 문제에 어떤 입장을 취한다는 뜻인가?"
          ],
          [
            "한 번에 내릴 판단",
            "앞부분에 동의하면서 뒷부분에는 반대할 수 있는가?"
          ],
          [
            "원래 표현의 보존",
            "말을 다듬으면서 발언의 주체, 상황, 대상, 주장 강도를 바꾸었는가?"
          ],
          [
            "다른 후보와의 차이",
            "두 카드에 서로 다른 순위를 줄 만한 이유를 참여자의 입장에서 말할 수 있는가?"
          ]
        ]
      },
      {
        "kind": "paragraph",
        "text": "좋은 진술문에는 내가 반대할 수 있는 입장도 담깁니다. 내가 바람직하다고 생각하는 지휘 방식만 남기면, 다른 경험을 한 대원이 자기 입장을 표현할 카드가 사라집니다."
      }
    ]
  },
  {
    num: 3,
    "title": "6-3에서 남긴 후보를 다시 펼치기",
    "blocks": [
      {
        "kind": "paragraph",
        "text": "이번 실습의 질문은 ‘재난대응 현장에서 어떤 지휘가 바람직한가?’입니다. 아래는 6-3에서 사용한 강의용 가상 후보입니다. 지난 시간의 구조화 예시는 01·04·05·07을, 비구조화 예시는 01·04·06·07을 잠정 선정했습니다. 자신이 남긴 카드부터 읽고 보류했던 카드와 비교하세요. 이번에는 네 장을 맞출 필요가 없습니다."
      },
      {
        "kind": "table",
        "headers": [
          "후보 ID",
          "6-3의 후보 진술문"
        ],
        "rows": [
          [
            "ST-EX-01",
            "재난현장의 지휘관은 결정을 신속하게 내려야 한다."
          ],
          [
            "ST-EX-02",
            "현장 대원의 위험정보를 충분히 들은 뒤에 진입을 결정해야 한다."
          ],
          [
            "ST-EX-03",
            "긴급한 상황에서는 지휘관의 판단을 우선 따라야 한다."
          ],
          [
            "ST-EX-04",
            "대원은 지휘관의 판단에 위험이 있다고 생각하면 즉시 이의를 제기해야 한다."
          ],
          [
            "ST-EX-05",
            "대원의 피로를 고려해 임무를 교대해야 한다."
          ],
          [
            "ST-EX-06",
            "위험한 임무의 배정 이유를 대원에게 설명해야 한다."
          ],
          [
            "ST-EX-07",
            "출동 뒤에는 지휘 판단의 잘못을 함께 검토해야 한다."
          ],
          [
            "ST-EX-08",
            "다음 출동을 위해 지휘관은 대응방법을 꾸준히 학습해야 한다."
          ]
        ]
      },
      {
        "kind": "paragraph",
        "text": "여덟 후보에 각각 유지·수정·제외 중 한 가지를 적으세요. 유지한다면 그 카드가 담는 입장을, 수정한다면 바꿀 표현과 남겨야 할 뜻을 적으세요. 제외한다면 어느 카드와 뜻이 겹치거나 연구질문의 어느 경계를 벗어나는지 적으세요. 근거가 더 필요한 결정에는 ‘잠정’이라고 표시하세요."
      },
      {
        "kind": "paragraph",
        "text": "먼저 03과 04를 비교해 보세요. 두 문장 모두 지휘관의 판단을 다루지만, 긴급할 때 지휘를 따르면서도 위험을 발견한 대원은 즉시 이의를 제기해야 한다고 생각할 수 있습니다. 두 카드를 모두 유지할 근거입니다. 05와 06도 비교해 보세요. 피로를 고려한 교대를 지지하는 사람이 위험 임무의 배정 이유까지 매번 설명해야 한다고 볼까요? 하나를 제외하면 누구의 입장을 표현하기 어려워질지 적어 보세요."
      }
    ]
  },
  {
    num: 4,
    "title": "고쳐 쓸 때와 한 장을 뺄 때",
    "blocks": [
      {
        "kind": "paragraph",
        "text": "6-2의 가상 면담 메모에는 “현장에선 지휘관이 결정을 늦추면 대원들이 우왕좌왕해요.”라는 표현이 있었습니다. 01은 이를 ‘재난현장의 지휘관은 결정을 신속하게 내려야 한다’로 옮깁니다. 현장에서 관찰한 결과가 지휘관에게 요구하는 원칙으로 바뀌었습니다. 연구질문에 맞춰 이 원칙을 남길지, ‘현장에서 지휘관의 결정이 늦어지면 대원들이 혼란을 겪는다’로 고쳐 발언의 뜻을 살릴지 판단하세요. 후자를 택하면 바람직한 지휘에 관한 입장을 얼마나 직접적으로 묻는지도 함께 살펴야 합니다."
      },
      {
        "kind": "paragraph",
        "text": "이번에는 아래 두 장을 여덟 후보 사이에 끼워 보세요. 두 장 모두 비교를 위해 이번 강의에서 만든 변형입니다. 각각의 처리 결정을 먼저 적은 뒤 다음 해설을 읽으세요."
      },
      {
        "kind": "table",
        "headers": [
          "비교용 카드",
          "이번 실습에서 추가한 문장"
        ],
        "rows": [
          [
            "변형 A (03·04에서 구성)",
            "긴급할 때 대원은 지휘관의 판단을 우선 따르고, 위험하다고 생각하면 즉시 이의를 제기해야 한다."
          ],
          [
            "변형 B (05를 바꾸어 씀)",
            "임무를 교대할 때에는 대원의 피로를 고려해야 한다."
          ]
        ]
      },
      {
        "kind": "paragraph",
        "text": "변형 A에서는 ‘우선 따른다’와 ‘즉시 이의를 제기한다’에 서로 다른 순위를 줄 수 있습니다. 각각 판단할 수 있도록 분리하는 것이 한 가지 수정안입니다. 이미 03과 04를 남겼다면 두 문장을 새로 추가할 필요 없이 A를 제외하고 두 ID를 기록하면 됩니다."
      },
      {
        "kind": "paragraph",
        "text": "변형 B의 경우, 05가 이미 ‘대원의 피로를 고려해 교대한다’는 뜻을 담고 있다고 읽었다면 05를 유지하고 B를 제외할 수 있습니다. 다르게 읽을 여지도 있습니다. 05는 피로를 이유로 교대를 실시한다는 뜻이고 B는 이미 정해진 교대 때 피로를 고려한다는 뜻이라면 판단이 달라집니다. 그 차이가 원자료에도 있는지 확인할 수 없다면 잠정 판단으로 남기세요. 단어가 겹친다는 것만으로는 한 장을 뺄 근거가 부족합니다."
      }
    ]
  },
  {
    num: 5,
    "title": "다음 사람이 검토할 수 있게 남기기",
    "blocks": [
      {
        "kind": "paragraph",
        "text": "자신의 판단을 아래 형식으로 기록하세요. 다음 세 행은 강의용 판단 예시입니다. 같은 후보라도 다른 결정을 내렸다면, 자신의 결정으로 어떤 입장을 보존할 수 있는지 설명하세요."
      },
      {
        "kind": "table",
        "headers": [
          "후보",
          "결정",
          "검토 뒤 문장 또는 남긴 ID",
          "판단 근거와 확인할 점"
        ],
        "rows": [
          [
            "04",
            "유지",
            "04 원문 그대로",
            "‘위험이 있다고 생각하면’이라는 조건이 이의를 제기할 상황을 정해 준다."
          ],
          [
            "01",
            "수정(잠정)",
            "현장에서 지휘관의 결정이 늦어지면 대원들이 혼란을 겪는다.",
            "가상 면담에서 말한 결과를 살렸다. 참여자가 이 문장을 경험에 대한 판단으로 읽는지 파일럿에서 묻는다."
          ],
          [
            "변형 B",
            "제외(잠정)",
            "05 유지",
            "두 문장을 같은 교대 원칙으로 읽었다. 교대 시점과 교대 사유를 구별하는 참여자가 있다면 다시 검토한다."
          ]
        ]
      },
      {
        "kind": "paragraph",
        "text": "자기 연구의 후보 하나를 골라 같은 방식으로 한 행을 작성하세요. 원래 발언을 확인할 수 있는 자료와 위치도 적으세요. 마지막 칸에는 6-5 파일럿에서 참여자에게 실제로 물을 질문을 남기세요. 예를 들어 05와 변형 B를 검토한다면 이렇게 물을 수 있습니다. “두 카드를 각각 어떤 상황을 떠올리며 놓으셨나요?” 그 답을 들으면 우리가 중복이라고 본 두 표현을 참여자도 같은 뜻으로 읽었는지 확인할 수 있습니다."
      }
    ]
  }
];

const references = [
  "류승훈. (2023). 재난대응상황에서 부산광역시 A 소방서 소방공무원의 리더십에 대한 주관성 연구 [박사학위논문, 동아대학교].",
  "Paige, J. B., & Morin, K. H. (2016). Q-Sample Construction: A Critical Step for a Q-Methodological Study. Western Journal of Nursing Research, 38(1), 96–110. https://doi.org/10.1177/0193945914545177"
];

export default function LessonSixFourPage() {
  return (
    <div className="max-w-4xl mx-auto px-5 sm:px-8 py-12 sm:py-16">
      <CoursePageHero
        breadcrumbs={[{ label: "강의 목차", href: "/outline" }, { label: "4부" }, { label: "6-4. 좋은 진술문과 나쁜 진술문: 선별·수정 실습" }]}
        statusLabel="공개"
        versionLabel="v1.0 · 2026-11-22"
        title="좋은 진술문과 나쁜 진술문: 선별·수정 실습"
        description={metadata.description as string}
        imageSrc="/images/6-4-hero-statement-review.webp"
        imageAlt="표 14의 18번에서 비전을 꾸미는 말이 어떻게 달라졌는지 비교한 그림"
      />
      <div className="mx-auto max-w-[720px]">
        {cards.map((card) => (
          <section key={card.num} className="mb-14" aria-labelledby={`card-${card.num}`}>
            <h2 id={`card-${card.num}`} className="text-2xl font-semibold mb-5">{card.title}</h2>
            {card.blocks.map((block, index) => block.kind === "paragraph" ? (
              <p key={index} className="mb-5 leading-8 text-[16px]" style={{ color: "var(--gray-800)" }}>{block.text}</p>
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
        <section className="mt-16 border-t pt-8" aria-labelledby="references">
          <h2 id="references" className="text-2xl font-semibold mb-5">참고문헌</h2>
          <ul className="space-y-5 text-sm leading-7 break-words">{references.map((reference) => <li key={reference}>{reference}</li>)}</ul>
        </section>
        <nav aria-label="강의 이동" className="mt-12 pt-8 border-t flex flex-wrap justify-between gap-4 text-sm">
          <Link href="/lessons/6-3">← 6-3. 구조화·비구조화 Q표본과 표집틀 설계</Link>
          <span className="text-gray-500">6-5. Q표본 검토와 파일럿 · 예정</span>
        </nav>
      </div>
    </div>
  );
}
