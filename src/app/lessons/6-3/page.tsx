import type { Metadata } from "next";
import Link from "next/link";
import CoursePageHero from "@/components/CoursePageHero";

export const metadata: Metadata = {
  title: "6-3. 구조화·비구조화 Q표본과 표집틀 설계 | Q방법론 온라인 강의",
  description: "같은 후보 진술문에 구조화·비구조화 접근을 적용하고 범주, 잠정 선정, 공백을 비교합니다.",
};

type Block = { kind: "paragraph"; text: string } | { kind: "table"; headers: string[]; rows: string[][] };
const cards: { num: number; title: string; blocks: Block[] }[] = [
  {
    num: 1,
    "title": "출처가 여러 곳이면 관점도 충분할까?",
    "blocks": [
      {
        "kind": "paragraph",
        "text": "6-2에서 문헌과 면담에서 찾은 말을 출처와 함께 기록했습니다. 이제 후보 진술문을 한곳에 놓고, 같은 주제 안에서 무엇을 다르게 말하고 있는지 살펴봅시다. 문헌과 면담에서 비슷한 주장이 여러 번 나오면 출처는 여럿이어도 후보가 담는 입장은 한쪽에 몰릴 수 있습니다. 이 강의에서 표집틀(sampling frame)은 후보가 어떤 범주에 속하는지, 어떤 입장을 담고 있는지, 어디에 공백이 있는지 살피는 작업표입니다."
      }
    ]
  },
  {
    num: 2,
    "title": "류승훈 연구에서는 두 경로에 다른 판단을 적용했다",
    "blocks": [
      {
        "kind": "paragraph",
        "text": "류승훈(2023)은 선행연구의 진술문 36개와 현장에서 수집한 진술문 167개를 확보했습니다. 기존 진술문은 소방서 직원 31명에게 재난대응 맥락에 맞는지 물었고, 5명 이상이 맥락에 맞지 않는다고 본 11개를 빼서 25개를 남겼습니다. 현장 진술문은 연구자가 12개 범주로 묶어 대표 진술문 12개를 작성한 뒤 자문을 받아 일부를 수정했습니다. 두 경로를 합친 사전검사 후보는 37개였습니다. 여기서 25개는 맥락 검토를 거쳐 남은 문헌 진술문 수이고, 12개는 현장 진술문을 범주화해 작성한 대표 문장 수입니다. (83, 87–88쪽, 표 10·13)"
      }
    ]
  },
  {
    num: 3,
    "title": "범주를 어디에서 가져올까?",
    "blocks": [
      {
        "kind": "paragraph",
        "text": "구조화된 접근(structured approach)에서는 연구질문에 맞는 이론이나 개념틀에서 표집 범주를 먼저 정합니다. 조정호(2023)는 수정 셀프리더십 질문지(RSLQ)의 3개 전략과 9개 구성요소로 후보 333개를 분류하고, 중복 표현을 결합해 1차 후보 109개를 만들었습니다. (73–74쪽)"
      },
      {
        "kind": "paragraph",
        "text": "비구조화된 접근(unstructured approach)에서는 후보를 읽으며 내용과 의도가 가까운 표현을 묶고 범주를 정합니다. 공공도서관을 연구한 McKenna-Aspell & Birdi(2025)는 진술문 508개를 내용과 의도에 따라 57개 범주로 묶었습니다. 연구자 검토 뒤 범주는 50개로 정리됐고, 파일럿 피드백을 거쳐 최종 Q표본은 45개 항목이 됐습니다. 57과 50의 단위는 범주이고 45의 단위는 항목입니다. (Stage one, 그림 1)"
      },
      {
        "kind": "paragraph",
        "text": "이론의 개념을 빠짐없이 다뤄야 한다면 그 개념부터 놓고 후보를 배치해 보세요. 현장에서는 이 문제를 어떻게 나누어 말하는지부터 알아야 한다면 후보를 묶은 뒤 범주에 이름을 붙여 보세요. 이론틀을 쓸 때에도 들어갈 자리가 없는 진술문을 따로 기록해 두면, 범주를 보완해야 하는지 검토할 수 있습니다."
      }
    ]
  },
  {
    num: 4,
    "title": "셀마다 몇 개를 남길까?",
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Paige & Morin(2016)은 교육적 고려사항 3개와 시뮬레이션 설계 특성 5개를 교차해 15개 셀을 만들었습니다. 처음에는 셀마다 4개를 배정할 계획이었습니다. 실제로는 두 셀에 5개, 두 셀에 3개, 나머지 열한 셀에 4개를 배정했습니다. 의견의 차이를 담는 데 필요한 수가 셀마다 달랐고, 전체는 60개였습니다. (Step 2, 표 2)"
      },
      {
        "kind": "paragraph",
        "text": "두 축의 교차가 연구질문에 의미가 있으면 교차표를 쓸 수 있습니다. 한 축으로 내용 영역을 살펴볼 수 있다면 범주 목록으로 충분합니다. Ladan et al.(2018)은 기술수용 모형에서 가져온 여섯 주제를 최종 선별의 안내로 삼았고, 표 2에 주제별 진술문 수를 다르게 보고했습니다. (Concourse development, 표 2)"
      }
    ]
  },
  {
    num: 5,
    "title": "같은 후보 8개를 구조화 방식으로 배치하기",
    "blocks": [
      {
        "kind": "paragraph",
        "text": "다음은 재난대응 현장에서 바람직한 지휘를 어떻게 이해하는지 살펴보기 위한 강의용 가상 후보입니다. ST-EX-01은 6-2의 잠정 재작성 예시를 이어 쓰고, 나머지는 이번 비교를 위해 만들었습니다. 두 방식 모두 아래의 같은 후보와 연구질문에서 시작합니다. 실습에서는 선택 이유를 비교하기 위해 네 문장을 잠정 선정합니다. 이 수는 실습 조건입니다."
      },
      {
        "kind": "table",
        "headers": [
          "후보 ID",
          "가상 후보 진술문"
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
        "text": "구조화 방식에서는 후보를 분류하기 전에 과업 수행과 대원 지원이라는 두 범주를 둔다고 가정합니다. 이 두 범주는 접근법을 설명하기 위한 강의용 사전 틀이며, 특정 논문의 이론 분류를 옮긴 것은 아닙니다. 실제 연구에서는 채택한 범주의 이론적 근거와 연구질문에 대한 적합성을 밝혀야 합니다."
      },
      {
        "kind": "table",
        "headers": [
          "사전 범주",
          "배치한 후보",
          "잠정 선정",
          "선택 이유와 보류 판단"
        ],
        "rows": [
          [
            "과업 수행",
            "01, 03, 07, 08",
            "01, 07",
            "현장에서의 신속한 결정과 출동 뒤 검토를 포함한다. 지휘권을 강조하는 03, 지속적 학습을 강조하는 08은 별도 입장을 더하는지 재검토한다."
          ],
          [
            "대원 지원",
            "02, 04, 05, 06",
            "04, 05",
            "위험에 대한 이의 제기와 피로 관리를 포함한다. 결정 전 의견 청취인 02, 배정 이유 설명인 06을 보류한 이유가 충분한지 재검토한다."
          ]
        ]
      },
      {
        "kind": "paragraph",
        "text": "표 안의 두 자리 번호는 ST-EX-의 뒷번호입니다. 02와 04는 과업 수행에도 관련됩니다. 여기서는 대원의 정보와 발언권에 초점을 두어 대원 지원에 배치했다고 기록합니다. 한 문장이 여러 범주에 걸칠 때에는 배치 기준을 설명하고, 후보·선정 수를 집계할 때 같은 ID를 중복 계산하지 않습니다. 잠정 선정 결과는 01·04·05·07입니다."
      }
    ]
  },
  {
    num: 6,
    "title": "같은 후보를 비구조화 방식으로 다시 묶기",
    "blocks": [
      {
        "kind": "paragraph",
        "text": "이번에는 후보를 읽으면서 문장이 요구하는 행동과 이유를 메모합니다. 01~04는 신속한 지휘와 현장 발언을 어떻게 조정할지, 05~06은 대원에게 임무를 어떻게 배분하고 설명할지, 07~08은 출동 경험을 어떻게 다음 대응에 반영할지를 다룹니다. 이 읽기에서 세 범주를 도출했다고 가정합니다."
      },
      {
        "kind": "table",
        "headers": [
          "읽으면서 만든 범주",
          "배치한 후보",
          "잠정 선정",
          "선택 이유와 보류 판단"
        ],
        "rows": [
          [
            "지휘의 속도와 현장 발언",
            "01, 02, 03, 04",
            "01, 04",
            "신속한 결정과 위험에 대한 이의 제기를 함께 포함한다. 02의 사전 청취, 03의 지휘권 존중이 추가로 필요한지 검토한다."
          ],
          [
            "임무 배분과 설명",
            "05, 06",
            "06",
            "위험 임무를 맡기는 이유의 설명을 포함한다. 피로 관리인 05의 누락이 중요한 공백인지 확인한다."
          ],
          [
            "출동 경험을 통한 학습",
            "07, 08",
            "07",
            "공동 검토를 포함한다. 지휘관 개인의 지속 학습인 08을 더 담아야 하는지 검토한다."
          ]
        ]
      },
      {
        "kind": "paragraph",
        "text": "잠정 선정 결과는 01·04·06·07입니다. 구조화 예시에서는 05를, 비구조화 예시에서는 06을 선택했습니다. 이는 범주를 다르게 만들고 그 안에서 강조할 의미를 다르게 판단한 강의용 결과입니다. 두 방식이 반드시 서로 다른 문장을 선택하는 것은 아니며, 같은 방식에서도 연구자의 검토에 따라 선택이 달라질 수 있습니다."
      },
      {
        "kind": "paragraph",
        "text": "두 결과를 나란히 놓고 05와 06을 모두 담아야 하는지 판단해 보세요. 둘 다 필요하다면 실습의 네 문장 제한을 풀었을 때 무엇을 추가할지 적으세요. 사전 범주가 넓어져 중요한 차이가 가려지는지, 새로 만든 범주에서도 한쪽 입장이 빠졌는지 확인하세요. 지금 남긴 문장은 6-4의 문장 검토와 6-5의 파일럿을 거칠 잠정 후보입니다."
      }
    ]
  },
  {
    num: 7,
    "title": "내 연구의 표집틀 작성하기",
    "blocks": [
      {
        "kind": "paragraph",
        "text": "6-2의 후보 ID를 가져오세요. 이론에서 범주를 정할지, 후보를 읽고 범주를 만들지 한 문장으로 설명하세요. 후보 ID를 범주에 배치하고, 같은 범주에서도 무엇을 다르게 주장하는지 적으세요. 비어 있는 범주나 한쪽 입장만 남은 범주가 연구질문에 중요하다면 추가로 확인할 자료를 기록하세요. 둘 이상의 범주에 걸치거나 들어갈 자리가 없는 후보에는 보류 이유를 남기세요."
      },
      {
        "kind": "table",
        "headers": [
          "범주",
          "후보 ID",
          "잠정 선정 ID",
          "포함한 입장과 확인할 공백",
          "배정 이유 또는 다음 조치"
        ],
        "rows": [
          [
            "현장 지휘의 속도와 협의(강의용)",
            "ST-EX-01",
            "ST-EX-01",
            "신속한 결정의 필요성. 위험정보를 확인한 뒤 결정해야 한다는 입장은 후보에서 확인할 필요가 있음",
            "기존 면담 기록을 먼저 확인"
          ],
          [
            "",
            "",
            "",
            "",
            ""
          ]
        ]
      },
      {
        "kind": "paragraph",
        "text": "첫 행의 ST-EX-01은 6-2에서 만든 가상 면담 예시입니다. 카드 5의 가상 후보 ST-EX-02는 위험정보 청취를 담고 있습니다. 자신의 실제 자료에서도 이 입장을 확보했는지 확인하세요."
      },
      {
        "kind": "paragraph",
        "text": "표집 접근을 택한 이유, 범주를 만든 근거, 범주별 후보 수와 잠정 선정 수, 배정을 바꾼 이유를 남기세요. 6-4에서는 이 표에서 남긴 후보를 원표현과 대조하고 어떤 문장을 유지·수정·제외할지 판단합니다."
      }
    ]
  }
];

const references = [
  "류승훈. (2023). 재난대응상황에서 부산광역시 A 소방서 소방공무원의 리더십에 대한 주관성 연구 [박사학위논문, 동아대학교].",
  "조정호. (2023). 포스트코로나 시대, 콜센터 상담사의 셀프리더십 인식유형에 관한 연구 [박사학위논문, 동아대학교].",
  "Paige, J. B., & Morin, K. H. (2016). Q-Sample Construction: A Critical Step for a Q-Methodological Study. Western Journal of Nursing Research, 38(1), 96–110. https://doi.org/10.1177/0193945914545177",
  "McKenna-Aspell, J., & Birdi, B. (2025). Using Q Methodology in Public Library Research: A Worked Example. Public Library Quarterly. https://doi.org/10.1080/01616846.2025.2538392",
  "Ladan, M. A., Wharrad, H., & Windle, R. (2018). Towards understanding healthcare professionals’ adoption and use of technologies in clinical practice: using Q-methodology and models of technology acceptance. Journal of Innovation in Health Informatics, 25(1), 27–37. https://doi.org/10.14236/jhi.v25i1.965"
];

export default function LessonSixThreePage() {
  return (
    <div className="max-w-4xl mx-auto px-5 sm:px-8 py-12 sm:py-16">
      <CoursePageHero
        breadcrumbs={[{ label: "강의 목차", href: "/outline" }, { label: "4부" }, { label: "6-3. 구조화·비구조화 Q표본과 표집틀 설계" }]}
        statusLabel="공개"
        versionLabel="v1.0 · 2026-11-14"
        title="구조화·비구조화 Q표본과 표집틀 설계"
        description={metadata.description as string}
        imageSrc="/images/6-3-hero-q-sampling-frame.webp"
        imageAlt="같은 후보 진술문에서 사전 범주를 적용하는 구조화 접근과 내용을 읽으며 범주를 만드는 비구조화 접근을 거쳐 잠정 선정 이유와 공백을 비교하는 흐름"
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
          <Link href="/lessons/6-2">← 6-2. Concourse 수집원과 출처 기록</Link>
          <span className="text-gray-500">6-4. 좋은 진술문과 나쁜 진술문 · 예정</span>
        </nav>
      </div>
    </div>
  );
}
