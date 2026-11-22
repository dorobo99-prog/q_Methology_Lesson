import PilotWorksheet from "./PilotWorksheet";
import type { Metadata } from "next";
import Link from "next/link";
import CoursePageHero from "@/components/CoursePageHero";

export const metadata: Metadata = {
  title: "6-5. Q표본 검토와 파일럿: 수정 근거 남기기 | Q방법론 온라인 강의",
  description: "류승훈의 두 차례 사전검사를 살펴보고, 아홉 장을 직접 분류한 뒤 05와 변형 B의 배치 이유와 수정 결정을 기록합니다.",
};

type Block = { kind: "paragraph"; text: string } | { kind: "table"; headers: string[]; rows: string[][] };
const cards: { num: number; title: string; blocks: Block[] }[] = [
  {
    num: 1,
    "title": "두 차례의 사전검사에서 무엇이 반복됐나",
    "blocks": [
      {
        "kind": "paragraph",
        "text": "류승훈(2023)은 재난대응 리더십에 관한 진술문 37개를 소방서 직원 네 명에게 먼저 분류하게 했습니다. 그중 세 명이 같은 두 문장의 내용이 겹친다고 보았습니다. 두 번째 사전검사에는 앞서 참여하지 않은 직원 세 명이 참여했습니다. 이번에도 두 명이 그 두 문장의 중복을 지적했습니다. 연구자는 두 문장 중 하나를 빼고 최종 36개를 남겼습니다. (98–99쪽)"
      },
      {
        "kind": "paragraph",
        "text": "같은 검사에서 다른 문제도 드러났습니다. 참여자들은 네 문장의 뜻이 막연해졌다며 이전 표현으로 되돌리자는 의견을 냈습니다. 두 번째 검사에서도 같은 의견이 나왔습니다. 6-4에서 읽은 18번이 그중 하나입니다. 표 14를 보면 ‘비전을 제시한다’에 ‘우리가 하는 일에 대한 강력한’이라는 표현이 되살아납니다. 중복된 두 문장에서는 한 장을 뺐고, 뜻이 흐려진 네 문장에서는 표현을 복원했습니다. 두 경우의 판단 근거를 따로 적어야 최종 수량 36개만 보고는 알 수 없는 변화가 남습니다."
      }
    ]
  },
  {
    num: 2,
    "title": "분류를 마친 뒤 물어야 알 수 있는 것",
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Ladan et al.(2018)은 의료전문가 다섯 명에게 진술문 46장을 직접 배열하게 한 뒤 짧은 면담을 했습니다. 이후 한 문장을 수정하고, 한 문장을 삭제하고, 한 문장을 추가했습니다. 최종 수량은 여전히 46개였습니다. 추가된 문장은 빠진 내용을 보완하자는 참여자의 제안과 연결됩니다. 수정과 삭제의 세부 이유는 보고되지 않았습니다. 이 연구를 기록표에 옮긴다면 두 사유 칸에는 ‘논문에 보고되지 않음’이라고 적는 것이 정확합니다."
      },
      {
        "kind": "paragraph",
        "text": "이제 우리가 직접 이유를 들을 차례입니다. 6-4에서는 피로와 임무 교대를 다룬 05를 유지하고 변형 B를 잠정 제외했습니다. 두 문장이 겹친다는 진행자의 예상은 아직 참여자의 답이 아닙니다. 이번에는 B를 다시 넣습니다. 같은 칸에 놓아도 서로 다른 장면을 생각했을 수 있고, 다른 칸에 놓아도 다른 카드들과의 비교 때문에 자리가 갈렸을 수 있습니다. 배치와 그 이유를 모두 남겨야 두 문장을 어떻게 처리할지 판단할 수 있습니다."
      }
    ]
  },
  {
    num: 3,
    "title": "아홉 장을 놓고 두 장의 배치 이유 듣기",
    "blocks": [
      {
        "kind": "paragraph",
        "text": "둘이 짝을 지어 한 사람은 참여자, 한 사람은 진행자를 맡으세요. 참여자에게는 분류 지시와 카드 문구를 보여 주세요. 진행자는 6-4에서 어떤 결정을 내렸는지 설명하지 말고 참여자가 배열을 마칠 때까지 기다리세요."
      },
      {
        "kind": "paragraph",
        "text": "참여자에게 읽어 줄 지시문입니다. “재난대응 현장에서 어떤 지휘가 바람직하다고 생각하십니까? 아홉 문장을 모두 읽고 서로 비교해 주세요. 자신의 생각에서 가장 먼 쪽은 −2, 가장 가까운 쪽은 +2입니다. 그 사이에 놓고 싶은 문장은 −1, 0, +1에 놓으세요. 한 칸에 여러 장을 두거나 빈칸을 남겨도 됩니다. 다 놓은 뒤 바꾸고 싶은 카드가 있으면 옮겨 주세요.”"
      },
      {
        "kind": "table",
        "headers": [
          "카드 ID",
          "분류 문구"
        ],
        "rows": [
          [
            "ST-EX-01",
            "현장에서 지휘관의 결정이 늦어지면 대원들이 혼란을 겪는다."
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
          ],
          [
            "변형 B",
            "임무를 교대할 때에는 대원의 피로를 고려해야 한다."
          ]
        ]
      },
      {
        "kind": "paragraph",
        "text": "배열이 끝나면 그대로 둔 채 진행자가 묻습니다. “05를 이 자리에 놓을 때 어떤 상황을 떠올리셨나요?” 답을 들은 뒤 B에 대해서도 같은 질문을 하세요. 처음부터 ‘두 카드가 같았나요?’라고 물으면 참여자가 스스로 꺼냈을 설명을 놓칠 수 있습니다. 답이 짧으면 “그때 어느 표현을 눈여겨보셨나요?”라고 이어가세요. 참여자가 쓴 말을 그대로 적었으면 인용임을, 진행자가 줄여 적었으면 요약임을 표시하세요."
      }
    ]
  },
  {
    num: 4,
    "title": "어떤 근거로 05와 B를 남기거나 고칠까",
    "blocks": [
      {
        "kind": "paragraph",
        "text": "면담을 마친 뒤 두 기록을 나란히 읽으세요. 참여자가 05에서는 피로 때문에 교대를 시작한 장면을, B에서는 예정된 교대 때 누구를 먼저 쉴지 정한 장면을 설명했다면 두 카드가 서로 다른 판단을 담을 가능성이 있습니다. 반대로 두 카드에서 같은 교대 원칙을 설명했다면 하나를 뺄 근거가 생깁니다. 이 두 설명은 가능한 해석의 예입니다. 자신의 기록에는 방금 들은 설명을 사용하세요."
      },
      {
        "kind": "paragraph",
        "text": "05와 B에 대해 각각 유지·수정·제외·보류 중 하나를 고르세요. 어떤 발언이 6-4의 잠정 판단을 지지하거나 바꾸었는지 한 문장으로 적으세요. 수정이면 바뀐 카드 문구를, 제외면 남겨 둔 카드가 어떤 입장을 보존하는지를 적으세요. 근거가 엇갈리면 보류하고 다음 참여자에게 물을 질문을 남기세요. 한 사람이 두 카드를 같은 뜻으로 읽었다는 관찰은 그 참여자의 해석으로 기록하세요."
      },
      {
        "kind": "paragraph",
        "text": "실습 기록 한 건에는 카드 ID와 이전 결정, 실제 배치, 참여자의 말, 진행자의 결정과 이유가 함께 있어야 합니다. 기록을 내려받아 두세요. 6-6에서 그 기록을 열면, Q표본 개발 과정에서 무엇을 고쳤는지와 왜 그렇게 했는지를 한 문단으로 옮길 수 있습니다."
      }
    ]
  }
];

const references = [
  "류승훈. (2023). 재난대응상황에서 부산광역시 A 소방서 소방공무원의 리더십에 대한 주관성 연구 [박사학위논문, 동아대학교].",
  "Ladan, M. A., Wharrad, H., & Windle, R. (2018). Towards understanding healthcare professionals’ adoption and use of technologies in clinical practice: using Q-methodology and models of technology acceptance. Journal of Innovation in Health Informatics, 25(1), 27–37. https://doi.org/10.14236/jhi.v25i1.965"
];

export default function LessonSixFivePage() {
  return (
    <div className="max-w-4xl mx-auto px-5 sm:px-8 py-12 sm:py-16">
      <CoursePageHero
        breadcrumbs={[{ label: "강의 목차", href: "/outline" }, { label: "4부" }, { label: "6-5. Q표본 검토와 파일럿: 수정 근거 남기기" }]}
        statusLabel="공개"
        versionLabel="v1.0 · 2026-11-22"
        title="Q표본 검토와 파일럿: 수정 근거 남기기"
        description={metadata.description as string}
        imageSrc="/images/6-5-hero-pilot-review.webp"
        imageAlt="류승훈의 사전검사에서 중복 의견은 한 문장 제외로, 모호하다는 의견은 네 문장 재수정으로 이어진 과정"
      />
      <div className="mx-auto max-w-[720px]">
        {cards.map((card) => (
          <section key={card.num} className="mb-14" aria-labelledby={`card-${card.num}`}>
            <h2 id={`card-${card.num}`} className="text-2xl font-semibold mb-5">{card.title}</h2>
            {card.blocks.map((block, index) => block.kind === "paragraph" ? (
              <p key={index} className="mb-5 leading-8 text-[16px]" style={{ color: "var(--gray-800)" }}>{block.text}</p>
            ) : (
              <PilotWorksheet key={index} rows={block.rows} />
            ))}
          </section>
        ))}
        <section className="mt-16 border-t pt-8" aria-labelledby="references">
          <h2 id="references" className="text-2xl font-semibold mb-5">참고문헌</h2>
          <ul className="space-y-5 text-sm leading-7 break-words">{references.map((reference) => <li key={reference}>{reference}</li>)}</ul>
        </section>
        <nav aria-label="강의 이동" className="mt-12 pt-8 border-t flex flex-wrap justify-between gap-4 text-sm">
          <Link href="/lessons/6-4">← 6-4. 좋은 진술문과 나쁜 진술문</Link>
          <Link href="/lessons/6-6">6-6. Q표본 개발 과정 기록과 방법 문단 작성 →</Link>
        </nav>
      </div>
    </div>
  );
}
