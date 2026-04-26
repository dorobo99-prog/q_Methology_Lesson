import type { Metadata } from "next";
import Link from "next/link";
import LessonCard from "@/components/LessonCard";

export const metadata: Metadata = {
  title: "1-2. Q방법론의 핵심 개념과 필요한 이유 | Q방법론 온라인 강의",
  description:
    "Q방법론은 주관성을 흐릿한 의견으로 두지 않고, 진술문 배열과 사람 중심 요인분석을 통해 관점의 구조로 드러낸다.",
};

const references = [
  {
    key: "Stephenson1953",
    text: "Stephenson, W. (1953). The study of behavior: Q-technique and its methodology. University of Chicago Press.",
  },
  {
    key: "Brown1980",
    text: "Brown, S. R. (1980). Political subjectivity: Applications of Q methodology in political science. Yale University Press.",
  },
  {
    key: "Watts2012",
    text: "Watts, S., & Stenner, P. (2012). Doing Q methodological research: Theory, method and interpretation. SAGE.",
    doi: "https://doi.org/10.4135/9781446251911",
  },
  {
    key: "Churruca2021",
    text: "Churruca, K., Ludlow, K., Wu, W., Gibbons, K., Nguyen, H. M., Ellis, L. A., & Braithwaite, J. (2021). A scoping review of Q-methodology in healthcare research. BMC Medical Research Methodology, 21, Article 125.",
    doi: "https://doi.org/10.1186/s12874-021-01309-7",
  },
  {
    key: "Dieteren2023",
    text: "Dieteren, C. M., Patty, N. J. S., Reckers-Droog, V. T., & van Exel, J. (2023). Methodological choices in applications of Q methodology: A systematic literature review. Social Sciences & Humanities Open, 7, Article 100404.",
    doi: "https://doi.org/10.1016/j.ssaho.2023.100404",
  },
  {
    key: "Ockwell2008",
    text: "Ockwell, D. G. (2008). 'Opening up' policy to reflexive appraisal: A role for Q methodology? A case study of fire management in Cape York, Australia. Policy Sciences, 41(4), 263–292.",
    doi: "https://doi.org/10.1007/s11077-008-9066-y",
  },
  {
    key: "Zabala2018",
    text: "Zabala, A., Sandbrook, C., & Mukherjee, N. (2018). When and how to use Q methodology to understand perspectives in conservation research. Conservation Biology, 32(5), 1185–1194.",
    doi: "https://doi.org/10.1111/cobi.13123",
  },
];

const conceptTable = [
  { concept: "주관성 (Subjectivity)", meaning: "한 사람이 특정 주제를 자기 관점에서 이해하고 판단하는 방식", sentence: "Q방법론은 주관성을 흐릿한 의견이 아니라 연구 가능한 관점으로 본다." },
  { concept: "조작적 주관성 (Operant subjectivity)", meaning: "Q-sort라는 실제 배열 행동 속에서 드러나는 주관성", sentence: "주관성은 말로만 있는 것이 아니라 배열 속에서 작동한다." },
  { concept: "Concourse", meaning: "주제에 대해 말해질 수 있는 의견과 진술의 전체 장", sentence: "Concourse는 가능한 말들의 세계다." },
  { concept: "Q-set", meaning: "Concourse에서 추린 대표 진술문 묶음", sentence: "Q-set은 관점 차이를 드러낼 수 있을 만큼 넓고, 참여자가 다룰 수 있을 만큼 작아야 한다." },
  { concept: "P-set", meaning: "Q-sort에 참여하는 사람들", sentence: "대표성보다 관점 다양성과 연구문제 관련성이 중요하다." },
  { concept: "Q-sort", meaning: "참여자가 진술문을 비교해 배열한 결과", sentence: "Q-sort는 한 사람의 관점 지도다." },
  { concept: "사람 중심 요인분석 (By-person factor analysis)", meaning: "Q-sort들 사이의 유사성을 분석하는 절차", sentence: "Q방법론은 문항보다 사람들의 배열 패턴을 비교한다." },
  { concept: "Factor array", meaning: "각 요인을 대표하는 이상적 Q-sort", sentence: "Factor array는 관점 유형을 해석하는 중심 자료다." },
];

export default function Lesson12Page() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      {/* 내비게이션 */}
      <nav
        className="flex items-center gap-1.5 mb-8"
        style={{ fontSize: "12px", fontFamily: "var(--font-mono)", color: "var(--gray-400)" }}
      >
        <Link href="/outline" style={{ color: "var(--gray-400)" }} className="hover:underline">강의 목차</Link>
        <span>›</span>
        <span>1부. Q방법론 입문</span>
        <span>›</span>
        <span style={{ color: "var(--black)" }}>1-2. Q방법론의 핵심 개념과 필요한 이유</span>
      </nav>

      {/* 히어로 */}
      <header className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <span
            className="text-xs font-medium px-3 py-1 rounded-full"
            style={{
              fontFamily: "var(--font-mono)",
              background: "var(--brand-light)",
              color: "var(--brand-deep)",
            }}
          >
            ✅ 공개
          </span>
          <span
            className="text-xs"
            style={{ fontFamily: "var(--font-mono)", color: "var(--gray-400)" }}
          >
            v1.0 · 2026-04-26
          </span>
        </div>
        <h1
          className="font-semibold mb-3"
          style={{ fontSize: "40px", letterSpacing: "-0.8px", lineHeight: 1.1, color: "var(--black)" }}
        >
          Q방법론의 핵심 개념과 필요한 이유
        </h1>
        <p style={{ fontSize: "18px", lineHeight: 1.5, color: "var(--gray-500)" }}>
          Q방법론은 주관성을 흐릿한 의견으로 두지 않고, 진술문 배열과 사람 중심 요인분석을 통해 관점의 구조로 드러낸다.
        </p>
      </header>

      {/* 도입 설명 */}
      <section
        className="px-8 py-7 mb-10 space-y-4 leading-relaxed text-sm"
        style={{
          background: "var(--white)",
          border: "1px solid rgba(0,0,0,0.05)",
          borderRadius: "16px",
          boxShadow: "rgba(0,0,0,0.03) 0px 2px 4px",
          color: "var(--gray-700)",
        }}
      >
        <h2
          className="font-semibold mb-2"
          style={{ fontSize: "16px", color: "var(--black)" }}
        >
          Q방법론을 이해하기 위한 여섯 단어
        </h2>
        <p>
          1-1강에서 Q방법론이 무엇이고 어떤 연구문제에 맞는지 살펴보았다면, 1-2강에서는 Q방법론의 기본
          언어를 익힌다. Q방법론을 처음 배우는 학생들이 헷갈리는 지점은 대개 비슷하다. 주관성이 무엇인지,
          조작적 주관성이 왜 중요한지, Concourse와 Q-set이 어떻게 다른지, P-set은 왜 대표 표본이 아닌지,
          Q-sort는 단순 설문 응답과 어떻게 다른지, 그리고 사람 중심 요인분석이 무엇을 계산하는지다.
        </p>
        <p>
          이 여섯 개념은 따로 떨어진 용어가 아니다. Q방법론은 특정 주제에 대해 사람들이 말하고 생각할 수
          있는 넓은 세계, 즉 Concourse에서 출발한다. 연구자는 그 세계를 대표할 수 있는 진술문 묶음인
          Q-set을 만든다. 참여자인 P-set은 그 진술문을 자신의 관점에 따라 배열한다. 이 배열이 Q-sort다.
          연구자는 여러 Q-sort를 비교해 비슷한 방식으로 생각을 배열한 사람들의 관점 유형을 찾는다.
        </p>
        <p>
          여기서 핵심은 Q방법론이 사람의 생각을 문항별 점수로 쪼개기보다, 한 사람이 여러 진술문을 어떤
          우선순위와 긴장 속에서 배열하는지를 본다는 점이다. Stephenson(1953)은 이를 "테스트 대신 사람을
          상호 상관시킨다"는 발상의 전환으로 설명했고, Brown(1980)은 Q-sort가 개인의 관점을 조작적으로
          표현하게 하는 절차라고 정리했다. Watts & Stenner(2012)는 이 과정을 현대 연구자가 수행할 수 있는
          절차로 풀어냈고, Churruca et al.(2021)와 Dieteren et al.(2023)은 최근 Q연구들이 이 절차를 얼마나
          명확히 보고해야 하는지를 보여준다.
        </p>
        <p>
          따라서 Q방법론의 용어를 배우는 일은 단어 암기가 아니다. 이 용어들은 "왜 Q방법론이 단순한 작은
          표본 설문조사가 아닌가"를 설명하는 논리 자체다.
        </p>
      </section>

      {/* 카드 6개 */}
      <div className="space-y-8 mb-10">

        <LessonCard
          title="주관성"
          keyMessage="Q방법론에서 주관성은 막연한 느낌이 아니라, 한 사람이 특정 주제를 자기 관점에서 이해하고 판단하는 방식이다."
          description="Q방법론은 주관성을 연구자의 외부 점수로 환원하지 않는다. 참여자가 여러 진술문을 비교하고 배열하는 과정에서, 그 사람의 관점이 드러난다."
          points={[
            "주관성은 개인의 고유한 관점이다.",
            "주관성은 진술문 배열이라는 행동으로 관찰된다.",
            "Q방법론은 외부 기준보다 참여자의 내부 관점을 중시한다.",
          ]}
          imageMaxWidth="500px"
          imageSide
          imageSrc="/images/1-2-card-01-subjectivity.webp"
          imageAlt="개인의 관점이 진술문 배열로 드러나는 장면"
        >
          <p>
            Q방법론에서 주관성은 "개인의 느낌"이라는 말로 끝나지 않는다. Brown(1980)은 주관성을 한 개인의
            고유한 관점, 곧 그 사람이 세계를 바라보고 의미를 부여하는 방식으로 설명한다. Stephenson(1953)도
            생각하고 느끼고 판단하는 주관성을 과학적으로 다룰 수 있는 구체적 행동으로 보았다. 이때 중요한
            것은 연구자가 밖에서 "이 사람은 이런 성향이다"라고 점수를 매기는 것이 아니라, 참여자가 스스로
            의미를 구성하는 장면을 포착하는 것이다.
          </p>
          <p>
            일반 설문조사에서는 각 문항에 대한 응답이 따로 계산된다. 그러나 Q방법론에서는 참여자가 여러
            진술문을 동시에 놓고 비교한다. 어떤 진술문은 강하게 동의하는 쪽에, 어떤 진술문은 강하게 동의하지
            않는 쪽에, 어떤 진술문은 중립에 가까운 곳에 둔다. 이렇게 만들어진 배열은 단순 응답값의 합이
            아니라, 그 사람이 무엇을 더 중요하게 보고 무엇을 덜 중요하게 보는지 보여주는 관점의 지도다.
          </p>
          <p>
            그래서 Q방법론은 주관성을 비과학적인 것으로 밀어내지 않는다. 오히려 주관성이 작동하는 방식을
            연구 가능한 자료로 만든다. "이 사람은 무엇에 동의하는가"보다 "이 사람은 여러 생각을 어떤 관계
            속에 놓는가"를 묻는다는 점이 출발점이다.
          </p>
        </LessonCard>

        <LessonCard
          title="조작적 주관성"
          keyMessage="조작적 주관성은 참여자가 실제로 배열한 Q-sort 속에서 드러나는 주관성이다."
          description="Q방법론은 주관성을 연구자가 미리 만든 척도에 끼워 넣지 않는다. 참여자가 진술문을 비교하고 배열하는 행동을 통해 관점이 작동하는 방식을 본다."
          points={[
            "주관성은 말로만 존재하지 않고 배열 행동으로 나타난다.",
            "Q-sort는 참여자의 관점을 조작적으로 표현한다.",
            "점수의 의미는 참여자의 전체 배열 속에서 사후적으로 해석된다.",
          ]}
          imageMaxWidth="500px"
          imageSide
          imageSrc="/images/1-2-card-02-operant-subjectivity.webp"
          imageAlt="조작적 주관성이 Q-sort로 나타나는 과정"
        >
          <p>
            조작적 주관성(operant subjectivity)은 Q방법론의 가장 중요한 개념이다. 여기서 "조작적"이라는 말은
            연구자가 사람의 속마음을 임의로 조작한다는 뜻이 아니다. 참여자가 실제 상황에서 여러 진술문을
            읽고 비교하고 배열하는 행위를 통해, 그 사람의 주관성이 연구 가능한 형태로 드러난다는 뜻이다.
          </p>
          <p>
            Brown(1980)은 Q-sort가 개인의 관점을 조작적으로 표현하게 하는 절차라고 보았다. 참여자는 단일
            문항에 따로따로 답하는 것이 아니라, 여러 문장을 서로 비교하면서 자신의 의미 체계를 배열한다.
            이때 어떤 문장이 +4에 놓였다는 사실은 그 문장 하나만의 점수가 아니다. 그 문장이 다른 문장들과
            어떤 상대적 관계를 맺고 있는지가 중요하다.
          </p>
          <p>
            Watts & Stenner(2012)가 강조하듯 Q-sort는 총체적(holistic) 작업이다. 참여자는 진술문을 낱개로
            평가하는 데서 멈추지 않고, 전체 묶음 안에서 상대적 중요도를 조정한다. 그래서 Q-sort는 "문항별
            응답표"보다 한 사람의 관점을 더 풍부하게 보여준다. 조작적 주관성은 바로 이 배열 속에서 작동한다.
          </p>
        </LessonCard>

        <LessonCard
          title="Concourse와 Q-set"
          keyMessage="Concourse는 주제에 대해 말해질 수 있는 생각의 넓은 세계이고, Q-set은 그중 연구에 사용할 대표 진술문 묶음이다."
          description="좋은 Q연구는 좋은 Q-set에서 시작된다. Q-set은 너무 좁으면 관점 차이를 놓치고, 너무 넓으면 참여자가 정렬하기 어렵다."
          points={[
            "Concourse는 의견과 진술의 전체 장이다.",
            "Q-set은 그 장을 압축한 진술문 표본이다.",
            "Q-set 개발 과정은 투명하게 보고되어야 한다.",
          ]}
          imageMaxWidth="500px"
          imageSide
          imageSrc="/images/1-2-card-03-concourse-qset.webp"
          imageAlt="넓은 Concourse에서 Q-set을 추출하는 장면"
        >
          <p>
            Concourse는 특정 연구 주제에 대해 사람들이 말하고 생각할 수 있는 진술의 전체 세계다. 예를 들어
            "재난관리에서 지역사회 위험경감은 무엇을 우선해야 하는가"라는 주제를 연구한다면, 정책문서, 현장
            인터뷰, 뉴스, 전문가 의견, 주민 경험, 기존 연구에서 나오는 다양한 표현이 Concourse가 될 수 있다.
            Zabala et al.(2018)은 Concourse를 특정 주제에 관한 주관적 의견과 논의의 전체 스펙트럼으로 설명한다.
          </p>
          <p>
            Q-set은 이 넓은 Concourse에서 연구에 사용할 진술문을 추려 만든 표본이다. Q-set은 주제를 충분히
            포괄해야 하지만, 참여자가 읽고 비교할 수 있을 만큼 관리 가능한 규모여야 한다.
            Churruca et al.(2021)의 헬스케어 Q연구 검토에서는 실제 연구의 Q-set 크기가 다양하게 나타났고,
            Dieteren et al.(2023)은 여러 분야의 연구에서 대체로 30–50개 안팎의 진술문이 자주 사용된다고
            정리한다. 중요한 것은 숫자 자체가 아니라, 왜 그 진술문들이 선택되었는지 설명하는 일이다.
          </p>
          <p>
            초보 연구자들이 자주 놓치는 점도 여기에 있다. Q-set은 "좋아 보이는 문장 몇 개를 모은 것"이 아니다.
            어떤 출처에서 Concourse를 수집했는지, 어떤 기준으로 중복을 제거했는지, 누가 검토했는지, 파일럿을
            했는지, 최종 진술문이 연구문제를 충분히 반영하는지 보고해야 한다. 최근 리뷰들이 Q-set 개발 과정의
            투명성을 반복해서 요구하는 이유도 여기에 있다.
          </p>
        </LessonCard>

        <LessonCard
          title="P-set과 Q-sort"
          keyMessage="P-set은 관점을 제공할 참여자이고, Q-sort는 그 참여자가 만든 관점의 배열이다."
          description="Q방법론에서 참여자는 모집단 비율을 추정하기 위한 대표 표본이 아니다. 연구문제와 관련된 다양한 관점을 드러낼 수 있는 사람들을 목적 표집한다."
          points={[
            "P-set은 대표성보다 관점 다양성을 중시한다.",
            "Q-sort는 진술문을 서로 비교해 배열한 결과다.",
            "같은 진술문이라도 사람마다 배열 논리가 다르다.",
          ]}
          imageMaxWidth="500px"
          imageSide
          imageSrc="/images/1-2-card-04-pset-qsort.webp"
          imageAlt="P-set 참여자가 Q-sort를 수행하는 장면"
        >
          <p>
            P-set은 Q-sort에 참여하는 사람들이다. 여기서 "사람들"은 단순히 많이 모으면 좋은 표본이 아니다.
            Q방법론의 목적은 모집단 전체에서 특정 의견이 몇 퍼센트인지 추정하는 것이 아니라, 의미 있게 다른
            관점들이 어떤 구조로 존재하는지 찾는 것이다. 그래서 P-set은 무작위 대표 표본보다 목적 표집
            (purposive sampling)에 가깝다. Churruca et al.(2021)와 Dieteren et al.(2023)은 Q연구에서 참여자
            수보다 연구문제와 관련된 관점 다양성의 확보가 중요하다고 정리한다.
          </p>
          <p>
            Q-sort는 참여자가 Q-set의 진술문들을 자신의 관점에 따라 배열한 결과다. 보통 참여자는 "가장
            동의함"에서 "가장 동의하지 않음"까지의 분포표 위에 카드를 놓는다. 이때 중요한 것은 각 문항의
            절대 점수만이 아니다. Q-sort는 여러 진술문이 서로 어떤 상대적 위치를 갖는지를 보여준다. 같은
            +3에 놓인 두 문장은 통계적으로 같은 위치에 있고, -3에 놓인 문장은 반드시 절대적 혐오를 뜻하기보다
            다른 문장들에 비해 덜 동의한다는 상대적 의미를 가질 수 있다.
          </p>
          <p>
            Zabala et al.(2018)은 Q-sort가 여러 쟁점을 동시에 비교하게 하므로 일반 설문보다 더 정교한 관점을
            포착할 수 있다고 설명한다. 또한 개인 단위 분류는 포커스그룹에서 나타날 수 있는 특정인의 지배
            효과를 줄이는 장점도 있다. 즉 P-set과 Q-sort는 "작은 표본의 설문"이 아니라, 관점 다양성을
            드러내기 위한 별도의 연구 설계다.
          </p>
        </LessonCard>

        <LessonCard
          title="사람 중심 요인분석과 factor array"
          keyMessage="Q방법론의 요인분석은 문항이 아니라 사람들의 Q-sort를 비교해 비슷한 관점 유형을 찾는다."
          description="일반 요인분석이 변수들 사이의 묶음을 찾는다면, Q방법론은 전체 Q-sort들 사이의 유사성을 분석한다. 그 결과는 관점 유형과 factor array로 나타난다."
          points={[
            "Q방법론은 사람 간 상관을 계산한다.",
            "요인은 비슷한 관점을 공유하는 사람들의 군집이다.",
            "Factor array는 각 요인을 대표하는 이상적 Q-sort다.",
          ]}
          imageMaxWidth="500px"
          imageSide
          imageSrc="/images/1-2-card-05-factor-analysis-array.webp"
          imageAlt="Q-sort 간 상관에서 관점 유형이 나오는 장면"
        >
          <p>
            Q방법론을 이해할 때 가장 중요한 전환은 "무엇을 상관시키는가"다. 일반적인 R방법론에서는 사람을
            표본으로 보고 문항이나 변수들 사이의 관계를 분석한다. 그러나 Q방법론은 한 사람의 Q-sort 전체를
            하나의 자료로 보고, Q-sort들 사이의 유사성을 계산한다. Stephenson(1953)이 말한 "테스트 대신
            사람을 상호 상관시킨다"는 표현이 바로 이 전환을 가리킨다.
          </p>
          <p>
            Watts & Stenner(2012)는 이를 역요인분석(inverted factor technique) 또는 사람 중심 요인분석으로
            설명한다. Q방법론에서 요인은 변수가 묶인 잠재차원이 아니라, 비슷한 방식으로 진술문을 배열한
            사람들의 관점 유형이다. 따라서 요인을 해석할 때도 "이 변수들이 함께 움직인다"보다 "이 유형의
            사람들은 무엇을 중요하게 보고, 무엇을 덜 중요하게 보는가"를 묻는다.
          </p>
          <p>
            Factor array는 각 요인을 대표하는 이상적 Q-sort다. 동일 요인에 강하게 적재된 참여자들의 Q-sort를
            가중해, 그 유형이 진술문들을 어떻게 배열했을지를 하나의 대표 배열로 보여준다. 최근 Q연구들도
            factor array, 구별 진술문(distinguishing statements), 합의 진술문(consensus statements)을 함께
            읽으며 유형을 서사적으로 해석한다.
          </p>
        </LessonCard>

        <LessonCard
          title="왜 Q방법론이 필요한가"
          keyMessage="Q방법론은 평균이 가려버리는 관점의 차이, 숨겨진 목소리, 가치 갈등의 구조를 드러내기 위해 필요하다."
          description="정책, 환경, 의료, 재난, 조직 문제처럼 이해관계와 가치가 얽힌 주제에서는 '평균적으로 어떠한가'보다 '어떤 관점들이 존재하는가'가 더 중요한 질문일 수 있다."
          points={[
            "평균이 상반된 관점을 상쇄할 때",
            "소수 관점이나 숨겨진 견해를 찾아야 할 때",
            "정책 갈등의 쟁점과 합의 가능성을 함께 보고 싶을 때",
          ]}
          imageMaxWidth="500px"
          imageSide
          imageSrc="/images/1-2-card-06-why-q-methodology.webp"
          imageAlt="평균 뒤에 숨어 있던 관점들이 드러나는 장면"
        >
          <p>
            Q방법론이 필요한 이유는 모든 연구문제가 평균이나 비율로 잘 설명되지 않기 때문이다. 어떤 주제에서는
            사람들이 같은 결론을 말해도 이유가 다르고, 같은 문장에 동의하지 않아도 판단 논리가 다르다. 평균은
            이런 차이를 지워버릴 수 있다. Churruca et al.(2021)은 Q방법론이 복잡하고 논쟁적인 문제에서 다양한
            목소리를 드러내는 데 유용하다고 정리한다. Zabala et al.(2018)도 갈등이 교착된 상황, 숨겨진 견해를
            찾아야 하는 상황, 정책 수용성이나 관리 대안을 탐색하는 상황에서 Q방법론이 특히 쓸모 있다고 설명한다.
          </p>
          <p>
            Q방법론은 소수 의견을 단순한 오차나 예외로 취급하지 않는다. 어떤 관점이 전체 인구에서 얼마나
            흔한지는 Q방법론만으로 말할 수 없지만, 그 관점이 존재하고 어떤 논리로 조직되어 있는지는 보여줄
            수 있다. 이는 정책 연구에서 중요하다. 정책 갈등은 단순히 정보가 부족해서 생기는 것이 아니라,
            사람들이 문제를 다르게 정의하고 다른 가치를 우선하기 때문에 발생하는 경우가 많다.
          </p>
          <p>
            다만 Q방법론을 과장해서는 안 된다. Q방법론은 모집단 비율을 추정하거나 인과효과를 검증하는 방법이
            아니다. Q-set을 어떻게 만들었는지, P-set을 왜 그렇게 선정했는지, Q-sort와 분석을 어떻게 수행했는지
            투명하게 보고해야 한다. Dieteren et al.(2023)이 "방법론적 선택"의 명확한 정당화를 강조하는 이유가
            여기에 있다.
          </p>
        </LessonCard>

      </div>

      {/* 사례 박스 */}
      <section
        className="px-8 py-7 mb-10"
        style={{
          background: "var(--white)",
          border: "1px solid rgba(0,0,0,0.05)",
          borderRadius: "16px",
          boxShadow: "rgba(0,0,0,0.03) 0px 2px 4px",
        }}
      >
        <div
          className="text-xs font-medium uppercase mb-3"
          style={{ fontFamily: "var(--font-mono)", color: "var(--gray-400)", letterSpacing: "0.6px" }}
        >
          사례
        </div>
        <h2
          className="font-semibold mb-4"
          style={{ fontSize: "20px", letterSpacing: "-0.2px", color: "var(--black)" }}
        >
          화재관리 정책에서 Q방법론이 필요한 이유
        </h2>
        <div className="space-y-4 text-sm leading-relaxed" style={{ color: "var(--gray-700)" }}>
          <p>
            Ockwell(2008)의 Cape York 화재관리 연구는 Q방법론이 왜 정책 연구에 필요한지 보여주는 좋은 사례다.
            이 연구의 쟁점은 단순히 "불을 사용해야 하는가, 말아야 하는가"가 아니었다. 호주 Cape York 지역의
            화재관리는 과학적 불확실성, 생물다양성 보전, 지역 주민의 통제권, 원주민의 전통적 토지관리, 정부
            정책 담론이 얽힌 문제였다.
          </p>
          <p>
            Ockwell은 문헌과 전문가 회의 등을 통해 304개의 진술문을 수집하고, 이를 36개의 Q표본으로 압축했다.
            정부 과학자, 원주민, 목축업자, 환경운동가, 관광객 등 다양한 이해관계자가 참여했다. 분석 결과 네
            개의 담론이 도출되었다. 하나는 과학적 분석에 근거해 불을 토지관리 도구로 지지하는 관점, 하나는
            기후변화와 생물다양성 손실을 우려하며 인위적 연소를 반대하는 관점, 하나는 불 사용을 지지하되
            지역 토지 소유자의 통제권을 중시하는 관점, 다른 하나는 원주민의 전통적 화재관리 방식과 통제권
            회복을 강조하는 관점이었다.
          </p>
          <p>
            이 사례가 중요한 이유는 Q방법론이 단일 평균이나 단순 찬반으로는 보이지 않는 차이를 보여주기
            때문이다. 겉으로는 모두 "불 사용"을 말하더라도, 그 이유가 과학적 합리성인지, 지역 통제권인지,
            원주민 권리인지에 따라 완전히 다른 정책 담론이 된다. Ockwell(2008)은 Q방법론이 주류 정책 담론에
            가려진 대안적 담론을 드러내고, 정책을 반성적으로 재평가할 수 있는 공간을 열어준다고 설명한다.
          </p>
          <p>
            이 사례를 일반화할 때는 조심해야 한다. Q방법론은 특정 담론이 전체 집단에서 몇 퍼센트인지 말해주지
            않는다. 특정 시점의 인식 구조를 보여주는 스냅샷에 가깝다. 또한 요인을 해석하고 이름 붙이는 과정에는
            연구자의 판단이 개입된다. 그렇기 때문에 좋은 Q연구는 Q-sort 직후 인터뷰, 구별 진술문, 합의
            진술문, 연구자의 해석 근거를 함께 제시해야 한다.
          </p>
        </div>
      </section>

      {/* 핵심 개념 표 */}
      <section className="mb-10 overflow-x-auto">
        <h2
          className="font-semibold mb-4"
          style={{ fontSize: "20px", letterSpacing: "-0.2px", color: "var(--black)" }}
        >
          핵심 개념 정리
        </h2>
        <table
          className="w-full text-sm"
          style={{ borderCollapse: "collapse", color: "var(--gray-700)" }}
        >
          <thead>
            <tr style={{ borderBottom: "2px solid rgba(0,0,0,0.08)" }}>
              <th className="text-left py-3 pr-4 font-semibold" style={{ color: "var(--black)", minWidth: "180px" }}>개념</th>
              <th className="text-left py-3 pr-4 font-semibold" style={{ color: "var(--black)" }}>뜻</th>
              <th className="text-left py-3 font-semibold" style={{ color: "var(--black)", minWidth: "220px" }}>기억할 문장</th>
            </tr>
          </thead>
          <tbody>
            {conceptTable.map((row, i) => (
              <tr
                key={row.concept}
                style={{ borderBottom: "1px solid rgba(0,0,0,0.05)", background: i % 2 === 0 ? "transparent" : "var(--gray-50)" }}
              >
                <td className="py-3 pr-4 font-medium" style={{ color: "var(--brand-deep)" }}>{row.concept}</td>
                <td className="py-3 pr-4 leading-relaxed">{row.meaning}</td>
                <td className="py-3 leading-relaxed" style={{ color: "var(--gray-500)" }}>{row.sentence}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* 요약 박스 */}
      <section
        className="px-6 py-5 mb-10"
        style={{
          background: "var(--brand-light)",
          borderLeft: "3px solid var(--brand)",
          borderRadius: "0 16px 16px 0",
        }}
      >
        <h2
          className="text-xs font-medium uppercase mb-2"
          style={{ fontFamily: "var(--font-mono)", color: "var(--brand-deep)", letterSpacing: "0.6px" }}
        >
          요약
        </h2>
        <p className="text-sm leading-relaxed" style={{ color: "var(--black)" }}>
          Q방법론의 핵심은 사람들의 주관성을 진술문 배열로 드러내는 것이다. Concourse는 주제에 대해 말해질 수
          있는 생각의 넓은 장이고, Q-set은 그중 연구에 사용할 대표 진술문 묶음이다. P-set은 관점을 제공할
          참여자이고, Q-sort는 그 참여자가 만든 관점의 배열이다. 연구자는 여러 Q-sort를 비교해 비슷한 배열
          패턴을 찾고, 이를 공유된 관점 유형으로 해석한다. 따라서 Q방법론은 단순히 작은 표본으로 하는
          설문조사가 아니다. Q방법론은 평균과 비율이 숨길 수 있는 판단의 구조, 가치의 우선순위, 관점 간
          차이를 드러내기 위해 필요하다.
        </p>
      </section>

      {/* 참고문헌 */}
      <section className="mb-10">
        <h2
          className="font-medium mb-4"
          style={{ fontSize: "16px", color: "var(--black)" }}
        >
          참고문헌
        </h2>
        <ul className="space-y-2">
          {references.map((ref) => (
            <li key={ref.key} className="text-xs leading-relaxed" style={{ color: "var(--gray-500)" }}>
              {ref.text}
              {ref.doi && (
                <>
                  {" "}
                  <a
                    href={ref.doi}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "var(--brand-deep)", textDecoration: "underline" }}
                  >
                    {ref.doi}
                  </a>
                </>
              )}
            </li>
          ))}
        </ul>
      </section>

      {/* 이전/다음 강의 */}
      <div
        className="pt-8 flex items-center justify-between"
        style={{ borderTop: "1px solid rgba(0,0,0,0.05)" }}
      >
        <Link
          href="/lessons/1-1"
          className="text-sm"
          style={{ color: "var(--gray-400)" }}
        >
          ← 1-1. Q방법론의 정의와 연구문제
        </Link>
        <div className="text-sm text-right" style={{ color: "var(--gray-400)" }}>
          <span>다음 강의</span>
          <br />
          <span style={{ fontFamily: "var(--font-mono)", fontSize: "12px" }}>
            1-3. Q방법론에 대한 오해와 한계 (준비 중)
          </span>
        </div>
      </div>
    </div>
  );
}
