import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import LessonCard from "@/components/LessonCard";

export const metadata: Metadata = {
  title: "1-3. Q방법론에 대한 흔한 오해와 한계 | Q방법론 온라인 강의",
  description:
    "Q방법론을 둘러싼 다섯 가지 오해를 정리하고, 진짜 강점과 한계가 어디에 있는지 분명히 한다.",
};

const references = [
  {
    key: "Brown1980",
    text: "Brown, S. R. (1980). Political subjectivity: Applications of Q methodology in political science. Yale University Press.",
  },
  {
    key: "Brown1996",
    text: "Brown, S. R. (1996). Q methodology and qualitative research. Qualitative Health Research, 6(4), 561–567.",
    doi: "https://doi.org/10.1177/104973239600600408",
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
    key: "Grimsrud2020",
    text: "Grimsrud, K., Graesse, M., & Lindhjem, H. (2020). Using the generalised Q method in ecological economics: A better way to capture representative values and perspectives in ecosystem service management. Ecological Economics, 170, 106588.",
    doi: "https://doi.org/10.1016/j.ecolecon.2019.106588",
  },
  {
    key: "Kirschbaum2019",
    text: "Kirschbaum, M., Barnett, T., & Cross, M. (2019). Q sample construction: A novel approach incorporating a Delphi technique to explore opinions about codeine dependence. BMC Medical Research Methodology, 19, 101.",
    doi: "https://doi.org/10.1186/s12874-019-0741-9",
  },
  {
    key: "Molenveld2020",
    text: "Molenveld, A. (2020). Using Q methodology in comparative policy analysis. In Handbook of Research Methods and Applications in Comparative Policy Analysis. Edward Elgar.",
    doi: "https://doi.org/10.4337/9781788111195.00028",
  },
  {
    key: "MoreaGhanbar2024",
    text: "Morea, N., & Ghanbar, H. (2024). Q methodology in applied linguistics: A systematic research synthesis. System, 120, Article 103194.",
    doi: "https://doi.org/10.1016/j.system.2023.103194",
  },
  {
    key: "NederhandMolenveld2020",
    text: "Nederhand, J., & Molenveld, A. (2020). Q Methodology in Public Administration: State of the Art. In J. Nederhand & A. Molenveld, Oxford Research Encyclopedia of Politics. Oxford University Press.",
    doi: "https://doi.org/10.1093/acrefore/9780190228637.013.1448",
  },
  {
    key: "RamloNewman2011",
    text: "Ramlo, S. E., & Newman, I. (2011). Q Methodology and Its Position in the Mixed-Methods Continuum. Operant Subjectivity, 34(3), 172–191.",
    doi: "https://doi.org/10.22488/okstate.11.100594",
  },
  {
    key: "Stenner2011",
    text: "Stenner, P. (2011). Q Methodology as Qualiquantology. Operant Subjectivity, 34(3), 192–203.",
    doi: "https://doi.org/10.22488/okstate.11.100593",
  },
  {
    key: "StennerRogers2004",
    text: "Stenner, P., & Stainton Rogers, R. (2004). Q methodology and qualiquantology: The example of discriminating between emotions. In Z. Todd, B. Nerlich, S. McKeown, & D. D. Clarke (Eds.), Mixing methods in psychology: The integration of qualitative and quantitative methods in theory and practice (pp. 101–120). Psychology Press.",
  },
  {
    key: "Stephenson1953",
    text: "Stephenson, W. (1953). The study of behavior: Q-technique and its methodology. University of Chicago Press.",
  },
  {
    key: "Watts2012",
    text: "Watts, S., & Stenner, P. (2012). Doing Q methodological research: Theory, method and interpretation. SAGE.",
    doi: "https://doi.org/10.4135/9781446251911",
  },
  {
    key: "Zabala2018",
    text: "Zabala, A., Sandbrook, C., & Mukherjee, N. (2018). When and how to use Q methodology to understand perspectives in conservation research. Conservation Biology, 32(5), 1185–1194.",
    doi: "https://doi.org/10.1111/cobi.13123",
  },
];

const summaryTable = [
  {
    misunderstanding: "표본이 작아서 약한 연구다",
    correction: "모집단 추정이 아닌 관점 다양성 확보가 목적이다",
  },
  {
    misunderstanding: "설문조사를 뒤집은 것일 뿐이다",
    correction: "사람 간 상관에서 출발하는 별도 설계다",
  },
  {
    misunderstanding: "Q방법론으로 모집단 비율을 말할 수 있다",
    correction: "관점 유형의 존재만 보여줄 수 있다",
  },
  {
    misunderstanding: "질적 연구인가 양적 연구인가",
    correction: "양자가 통합된 qualiquantology 방법이다",
  },
  {
    misunderstanding: "결과를 일반화할 수 없다",
    correction: "분석적·이론적 일반화로 가능하다",
  },
];

export default function Lesson13Page() {
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
        <span style={{ color: "var(--black)" }}>1-3. Q방법론에 대한 흔한 오해와 한계</span>
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
            v1.0 · 2026-04-27
          </span>
        </div>
        <h1
          className="font-semibold mb-3"
          style={{ fontSize: "40px", letterSpacing: "-0.8px", lineHeight: 1.1, color: "var(--black)" }}
        >
          Q방법론에 대한 흔한 오해와 한계
        </h1>
        <p style={{ fontSize: "18px", lineHeight: 1.5, color: "var(--gray-500)" }}>
          Q방법론을 둘러싼 다섯 가지 흔한 오해를 정리하고, 진짜 강점과 한계가 어디에 있는지 분명히 한다.
        </p>
        <div className="mt-8">
          <Image
            src="/images/1-3-hero-misunderstanding-and-limitations.webp"
            alt="평균값 막대 뒤에 숨은 다양한 관점이 안개 속 오해를 거쳐 정정된 이해로 펼쳐지는 흐름도"
            width={500}
            height={280}
            className="h-auto rounded-xl"
            style={{ maxWidth: "500px", width: "100%" }}
            priority
          />
        </div>
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
          왜 오해를 먼저 정리해야 하는가
        </h2>
        <p>
          1-1·1-2강에서 Q방법론의 정의와 핵심 개념을 익혔다. 그러나 실제 논문 심사나 동료 학자와의 토론에서
          가장 자주 부딪히는 것은 "이거 그냥 작은 표본 설문조사 아닌가?" 같은 오해다. 오해를 정리하는 일은
          Q방법론을 변호하기 위한 것이 아니다. Q방법론을 <strong>언제 쓰면 안 되는지</strong>, 자신의 강점이
          어디에서 빛나는지를 분명히 하는 작업이다.
        </p>
        <p>
          Stephenson(1953), Brown(1980), Watts & Stenner(2012)의 원전과 Churruca et al.(2021),
          Dieteren et al.(2023), Morea & Ghanbar(2024) 같은 최근 체계적 검토가 반복적으로 지적하는 지점이
          있다. Q방법론은 R방법론의 잣대로 평가되면 약점만 두드러진다. 표본이 작고, 비율을 말할 수 없고,
          요인분석이 익숙한 변수 묶음이 아니다. 그러나 자신의 강점이 빛나는 연구문제와 만나면 다른 방법으로는
          대체할 수 없는 결과를 준다.
        </p>
        <p>
          오해를 풀어가는 순서는 다음과 같다. 먼저 표본 수와 R방법론과의 관계를 정리한다. 다음으로 모집단
          비율과 질적/양적 성격을 정리한다. 마지막으로 일반화의 의미를 다시 묻고, Q방법론 자체의 한계를
          정직하게 본다. 이 다섯 카드를 따라가면 Q방법론의 경계가 분명해진다.
        </p>
      </section>

      {/* 카드 5개 */}
      <div className="space-y-8 mb-10">

        <LessonCard
          title='오해 1. "표본 수가 작아서 약한 연구인가?"'
          keyMessage="Q방법론에서 P-set은 모집단을 추정하는 표본이 아니라, 관점 다양성을 드러내는 목적 표집이다."
          description="Q방법론의 표본 수는 통계적 검정력이 아니라 관점 포화의 관점에서 평가되어야 한다. 같은 20명이라도 R연구의 N=20과 Q연구의 P-set 20은 평가 기준이 다르다."
          points={[
            "통계적 검정력의 문제가 아니다.",
            "기준은 관점이 충분히 포화(saturation)되었는가다.",
            "일반적으로 P-set 20–50명 내외가 자주 쓰인다.",
          ]}
          imageMaxWidth="500px"
          imageSide
          imageSrc="/images/1-3-card-01-small-sample-misunderstanding.webp"
          imageAlt="작은 표본을 모집단 추정 잣대가 아닌 관점 포화 잣대로 평가하는 장면"
        >
          <p>
            "표본이 너무 작다"는 지적은 Q연구가 가장 자주 듣는 비판이다. 그러나 이 비판은 R방법론의 잣대를
            그대로 가져온 것이다. R연구에서 작은 표본은 검정력 부족과 일반화 실패를 뜻한다. Q연구에서 작은
            표본은 다른 의미를 갖는다. Brown(1980)과 Watts & Stenner(2012)는 Q연구의 P-set이 모집단을
            추정하기 위한 확률 표본이 아니라, 의미 있게 다른 관점을 드러내기 위한 목적 표집(purposive
            sampling)이라는 점을 거듭 강조한다.
          </p>
          <p>
            기준은 "충분히 큰가"가 아니라 "충분히 다양한가"다. 새로운 참여자가 더해져도 새로운 관점 유형이
            나타나지 않는다면, 그 시점이 관점 포화에 도달한 지점이다. Churruca et al.(2021)의 헬스케어 Q연구
            289편 검토와 Dieteren et al.(2023)의 2015–2019년 Q연구 613편 체계적 검토는, 실제 연구 관행에서
            P-set 규모가 분야와 주제에 따라 매우 폭넓게 분포한다는 사실을 보여준다. 일반적으로 20–50명
            안팎이 자주 쓰이지만, 숫자 자체보다 그 숫자가 어떤 관점 다양성을 담고 있는지가 더 중요하다.
          </p>
          <p>
            그렇다고 P-set이 작아도 된다는 면허로 받아들이면 안 된다. Morea & Ghanbar(2024)의 응용언어학
            Q연구 55편 종합은 P-set 선정 근거를 보고하지 않은 연구가 적지 않다는 점을 지적한다. 작은 표본은
            "왜 이 사람들인가"를 더 정밀하게 설명해야 한다는 의무를 동반한다. 표본이 작아서 약한 연구가 되는
            것이 아니라, 작은 표본의 정당성을 설명하지 못할 때 약한 연구가 된다.
          </p>
        </LessonCard>

        <LessonCard
          title='오해 2. "설문조사의 행과 열을 뒤집은 것인가?"'
          keyMessage="Q방법론은 R방법론의 전치(transpose)가 아니라 출발 발상부터 다른 별도의 연구 설계다."
          description='"행과 열을 바꾼 분석"이라는 흔한 비유는 Q방법론의 핵심을 가린다. Q방법론은 변수 간 상관이 아니라 사람 간 상관에서 출발하며, 의미의 단위가 문항이 아니라 배열 전체다.'
          points={[
            "변수가 아닌 사람 간 상관을 계산한다.",
            "Q-sort는 단순한 응답 수집이 아닌 비교 행위다.",
            "의미의 단위는 문항 점수가 아니라 Q-sort 배열 전체다.",
          ]}
          imageMaxWidth="500px"
          imageSide
          imageSrc="/images/1-3-card-02-not-transposed-survey.webp"
          imageAlt="R방법론과 Q방법론이 같은 데이터에서 출발하지 않는다는 것을 보여주는 도식"
        >
          <p>
            Q방법론을 처음 배울 때 "R의 데이터 행렬에서 행과 열을 바꾼 것"이라는 비유를 자주 듣는다. 이
            비유는 도입부에서는 도움이 된다. 그러나 그것만으로 Q방법론을 설명하면 핵심을 놓친다.
            Stephenson(1953)이 처음부터 분명히 한 것은, Q는 같은 데이터 행렬을 단지 회전시키는 기법이 아니라,
            <strong> 같은 측정 단위가 행과 열 모두에 적용될 때에만</strong> 정당한 분석이라는 점이다.
          </p>
          <p>
            R방법론은 사람을 표본으로 두고 변수들 사이의 관계를 분석한다. 변수가 단위이고, 사람은 그
            변수에 대한 점수의 출처일 뿐이다. Q방법론은 정반대로 한 사람의 Q-sort 전체를 하나의 단위로 본다.
            Brown(1980)이 정리하듯 Q방법론은 사람 간 상관을 계산하고, 비슷한 방식으로 진술문을 배열한
            사람들의 관점 유형을 찾는다. Stenner(2011)는 이를 더 강하게 표현한다. R의 요인분석은 변수의 순수
            양적 변동이라는 가정을 유지하기 위해 잠재 변수를 끌어들이는 반면, Q는 질적 변동 자체를 분석의
            중심으로 삼는다.
          </p>
          <p>
            여기서 또 하나 중요한 차이가 있다. R의 응답은 하나의 문항에 대한 독립적 점수다. Q의 응답은
            여러 진술문을 동시에 비교하면서 만들어진 상대적 위치다. Watts & Stenner(2012)가 강조하듯 Q-sort는
            총체적 작업이다. 어떤 진술문이 +4에 놓였다는 사실은 그 자체로 의미를 갖지 않는다. 다른 진술문들과
            어떤 관계 속에 놓였는지가 의미를 만든다. "행과 열을 뒤집었다"는 비유로는 이 차이를 설명할 수 없다.
          </p>
        </LessonCard>

        <LessonCard
          title='오해 3. "Q방법론으로 모집단 비율을 말할 수 있는가?"'
          keyMessage="Q방법론은 어떤 관점이 존재하는지를 보여줄 뿐, 그 관점이 모집단에서 몇 퍼센트인지는 말할 수 없다."
          description="Q방법론은 관점 유형의 구조를 발견하는 데 강하다. 각 유형이 인구에서 얼마나 흔한지를 알고 싶다면 후속 R연구가 필요하다."
          points={[
            "결과는 유형 구조이지 비율이 아니다.",
            "비율을 말하려면 후속 R연구로 확장해야 한다.",
            "Q와 설문을 결합한 generalised Q method가 한 대안이다.",
          ]}
          imageMaxWidth="500px"
          imageSide
          imageSrc="/images/1-3-card-03-no-population-ratio.webp"
          imageAlt="관점 유형의 존재와 모집단 비율 추정의 차이를 보여주는 도식"
        >
          <p>
            Q연구 결과를 발표하면 자주 받는 질문이 있다. "그래서 이 유형이 전체 국민의 몇 퍼센트입니까?"
            이 질문에 대한 정직한 답은 "Q방법론만으로는 알 수 없습니다"이다. Q방법론은 어떤 관점이
            <strong> 존재한다</strong>는 사실은 분명하게 보여주지만, 그 관점이 인구 전체에서 얼마나 흔한지를
            추정하도록 설계되어 있지 않다. P-set이 확률 표본이 아니기 때문이다.
          </p>
          <p>
            Grimsrud et al.(2020)은 이 점을 명시적으로 짚는다. Q방법론은 비슷하거나 다른 관점을 가진 집단을
            찾는 데 유용하지만, 일반 모집단에서 각 관점이 얼마나 널리 퍼져 있는지는 알려주지 못한다. 그래서
            이들은 노르웨이 기후림 정책 사례에서 Q연구로 도출한 핵심 진술문을 1,222명 규모의 전국 인터넷
            패널 설문에 결합하는 generalised Q method를 제안한다. Q의 심층성과 R의 일반화 가능성을 결합하여,
            관점이 존재하는지뿐 아니라 어떤 인구 집단에서 얼마나 지지받는지까지 함께 본 것이다.
          </p>
          <p>
            Zabala et al.(2018)도 보전 연구 52편을 검토하면서 같은 결론에 이른다. Q방법론은 관점의 지형을
            그리는 데는 강하지만, 모집단 추정이 필요한 연구문제에는 다른 설계와 결합해야 한다. Dieteren et
            al.(2023)이 지적하듯, 일부 Q연구가 결과를 보고할 때 "이 유형의 사람들이 전체에서 X%"라고 쓰는
            오용이 발견된다. 요인 적재자 수의 비율은 P-set 안에서의 분포일 뿐, 모집단 비율이 아니다.
            Q방법론을 책임 있게 쓰려면 이 경계를 분명히 해야 한다.
          </p>
        </LessonCard>

        <LessonCard
          title='오해 4. "Q방법론은 질적 연구인가, 양적 연구인가?"'
          keyMessage="Q방법론은 양적 절차를 통해 질적 의미를 분석하는 qualiquantology다. 어느 한쪽으로 환원되지 않는다."
          description="Q방법론은 자료 수집은 질적·양적 자원을 모두 활용하고, 분석은 통계적이며, 해석은 진술문 배열과 참여자 설명에 근거한 질적·서사적 작업이다."
          points={[
            "자료 수집은 질적·양적 자원을 모두 활용한다.",
            "분석은 사람 간 상관과 요인분석으로 통계적이다.",
            "해석은 진술문 배열과 참여자 설명에 근거한 질적 작업이다.",
          ]}
          imageMaxWidth="500px"
          imageSide
          imageSrc="/images/1-3-card-04-qualiquantology.webp"
          imageAlt="질적 차원과 양적 차원이 Q방법론 안에서 통합되는 장면"
        >
          <p>
            Q방법론을 만난 학생들은 한 번쯤 "이건 질적 연구인가요, 양적 연구인가요?"라고 묻는다. 이 질문은
            중요한 출발점이지만, 둘 중 하나로 분류하려는 시도 자체가 Q방법론의 성격을 가린다. Brown(1996)은
            Q방법론이 질적·양적 방법의 강점을 결합한다고 정리한다. Stenner & Stainton Rogers(2004)는 이를
            <em> qualiquantology</em>라는 용어로 묶어 표현한다. 단순히 질적 단계와 양적 단계를 더한 혼합방법
            이라는 뜻이 아니다. 자료의 성격 자체가 처음부터 질적이면서 양적이라는 뜻이다.
          </p>
          <p>
            Ramlo & Newman(2011)은 Q방법론이 현대 혼합방법 연구의 연속선 안에 위치할 수 있다고 본다.
            Q방법론은 양적 절차의 엄격함과 질적 해석의 풍부함을 함께 갖추고 있어 mixed-methods continuum의
            중간에 자리잡는다는 주장이다. Stenner(2011)는 이에 대해 좀 더 강한 입장을 취한다. Q를 단순 혼합
            방법으로 읽으면 그 고유한 존재론을 놓친다는 것이다. Stenner의 관점에서 R방법론은 변수의 순수 양적
            변동이라는 허구적 전제를 유지하기 위해 잠재 변수를 끌어들이지만, Q방법론은 질적 변동 자체를
            수학적으로 다룰 수 있게 만든다는 점에서 다른 종류의 작업이다.
          </p>
          <p>
            두 입장의 강조점은 다르지만, 가르침의 결론은 같다. Q방법론은 질적 자료 수집(인터뷰, 문서, 일상
            대화)에서 출발해, 진술문 묶음을 만들고, 참여자가 그것을 배열하게 하고, 통계적 절차로 사람 간
            상관과 요인을 추출하고, 다시 진술문 배열과 참여자 설명을 질적으로 읽으며 의미를 해석한다. 이
            전 과정은 한 흐름이지 두 단계의 결합이 아니다. Q방법론을 가르칠 때는 어느 한쪽으로 분류하기보다,
            두 차원이 어떻게 한 몸으로 작동하는지를 보여주는 편이 정확하다.
          </p>
        </LessonCard>

        <LessonCard
          title='오해 5. "Q방법론 결과는 어떻게 일반화할 수 있는가?"'
          keyMessage="Q방법론의 일반화는 모집단 비율이 아니라 관점 유형의 구조와 논리를 다른 맥락에 적용하는 형태다."
          description="Q방법론의 일반화는 통계적 일반화가 아니라 분석적·개념적 일반화에 가깝다. 발견한 관점 유형이 비슷한 맥락의 다른 연구에서 어떻게 작동하는지가 일반화의 무대다."
          points={[
            "분석적 일반화(analytic generalization)에 가깝다.",
            "관점 유형의 논리가 일반화의 단위다.",
            "이론적 기여로서의 일반화로 이해해야 한다.",
          ]}
          imageMaxWidth="500px"
          imageSide
          imageSrc="/images/1-3-card-05-analytic-generalization.webp"
          imageAlt="사람 수의 일반화가 아닌 관점 유형 논리의 일반화를 보여주는 도식"
        >
          <p>
            Q방법론의 일반화 문제는 오해 3과 짝을 이룬다. 비율을 말할 수 없다면 무엇을 일반화할 수 있는가?
            답은 "사람 수의 일반화"가 아니라 "관점 논리의 일반화"다. 이를 사례연구의 언어로 옮기면 분석적
            일반화(analytic generalization) 개념과 가깝다. 발견된 관점 유형이 다른 맥락에서도 비슷한 논리로
            작동하는지를, 이론과 정책 설계의 차원에서 검토하는 것이다.
          </p>
          <p>
            Brown(1980)과 Watts & Stenner(2012)는 Q연구의 일반화가 통계적 표본의 외삽이 아니라 관점 구조의
            이론적 적용임을 분명히 한다. 한 연구에서 발견한 "위험을 통제 대상으로 보는 유형"이라는 관점이,
            다른 분야의 다른 연구에서 어떻게 변형되거나 재현되는지를 묻는 일이 일반화의 무대다.
            Molenveld(2020)와 Nederhand & Molenveld(2020)는 비교정책 분석과 공공행정 연구에서 Q방법론이
            이해관계자들이 정책문제와 해법을 다르게 보는 방식을 드러내는 데 유용하다고 정리한다. 그 결과
            얻어진 유형은 단일 사례의 진단이 아니라, 비슷한 정책 환경에서 일어날 수 있는 갈등 구조의 모형
            역할을 한다.
          </p>
          <p>
            중요한 것은 일반화의 단위를 바꾸는 것이다. "몇 명이 이 유형인가"가 아니라 "이 유형이 어떤 판단
            구조를 보여주는가"가 일반화의 단위다. 다른 맥락의 연구자가 그 구조를 자기 연구의 분석 자원으로
            가져갈 수 있다면, 그 연구는 일반화에 성공한 것이다. Q방법론의 일반화는 결과물의 외삽이 아니라
            이론적 자원의 이동에 가깝다.
          </p>
        </LessonCard>

      </div>

      {/* 한계 박스 */}
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
          한계 박스
        </div>
        <h2
          className="font-semibold mb-4"
          style={{ fontSize: "20px", letterSpacing: "-0.2px", color: "var(--black)" }}
        >
          Q방법론 자체의 한계
        </h2>
        <div className="space-y-4 text-sm leading-relaxed" style={{ color: "var(--gray-700)" }}>
          <p>
            오해와는 별도로, Q방법론에는 실제로 존재하는 한계가 있다. 이 한계를 인정하는 것이 Q방법론을
            책임 있게 사용하는 출발점이다. 최근 체계적 검토들이 반복적으로 지적하는 약점들을 정리하면
            다음과 같다.
          </p>
          <ul className="space-y-3 pl-4 list-disc">
            <li>
              <strong>연구자 해석 의존성.</strong> 요인 추출 수, 회전 방식, 유형 명명에 연구자의 판단이
              개입한다. Churruca et al.(2021), Dieteren et al.(2023), Morea & Ghanbar(2024)는 요인 추출
              기준, 회전 방식, 혼합 Q-sort(confounded Q-sorts) 처리 방식에 대한 보고가 누락된 연구가 많다고
              지적한다. Q-sort 직후 인터뷰, 구별 진술문, 합의 진술문, 해석 근거를 함께 제시해야 한다.
            </li>
            <li>
              <strong>Q-set 구성의 주관성.</strong> Concourse 수집 범위와 Q-set 추출 기준은 연구자가 정한다.
              Kirschbaum et al.(2019)은 코데인 의존성 연구에서 문헌 고찰, 이론 틀(COM-B), 델파이 기법을
              결합해 연구자 편향을 줄이는 절차를 제시했다. 핵심은 Q-set이 어떻게 만들어졌는지를 단계별로
              투명하게 보고하는 것이다.
            </li>
            <li>
              <strong>횡단적 스냅샷.</strong> Q방법론은 특정 시점의 인식 구조를 보여주는 스냅샷이다.
              Morea & Ghanbar(2024)는 응용언어학 Q연구 55편 중 93%가 횡단 연구였고, 종단 연구나 단일
              사례 추적 연구는 거의 없다고 보고한다. 시간에 따른 관점 변화를 추적하려면 종단 설계가 필요하다.
            </li>
            <li>
              <strong>인과추론 불가능.</strong> Q방법론은 어떤 변인이 어떤 결과를 일으키는지 검증하지 않는다.
              관점 유형이 어떤 행동이나 정책 결과로 이어지는지는 Q방법론만으로는 답할 수 없다. 인과 검증이
              목적이라면 다른 설계를 선택해야 한다.
            </li>
            <li>
              <strong>보고 투명성 부족.</strong> Churruca et al.(2021)와 Dieteren et al.(2023)은 P-set 선정
              근거, 요인 추출과 회전 방식, 설명분산, factor array, 진술문별 불확실성 보고가 누락되는
              관행이 반복된다고 지적한다. 보고 체크리스트를 따라 한 단계씩 정당화하는 작업이 필요하다.
            </li>
          </ul>
          <div className="mt-4">
            <Image
              src="/images/1-3-card-06-limitations-checklist.webp"
              alt="Q방법론 한계 체크리스트 — 연구자 해석 의존성, Q-set 주관성, 횡단적 스냅샷, 인과추론 불가, 보고 투명성"
              width={500}
              height={280}
              className="h-auto rounded-xl"
              style={{ maxWidth: "500px", width: "100%" }}
            />
          </div>
          <p>
            이 한계들은 Q방법론을 포기할 이유가 아니라, Q방법론을 더 정직하게 쓰기 위한 점검 항목이다.
            연구문제와 방법이 맞지 않을 때 한계가 두드러지고, 잘 맞을 때 강점이 빛난다. 한계와 강점을
            함께 보는 것이 1-3강의 마지막 메시지다.
          </p>
        </div>
      </section>

      {/* 핵심 정리 표 */}
      <section className="mb-10 overflow-x-auto">
        <h2
          className="font-semibold mb-4"
          style={{ fontSize: "20px", letterSpacing: "-0.2px", color: "var(--black)" }}
        >
          오해와 정정 한눈에 보기
        </h2>
        <table
          className="w-full text-sm"
          style={{ borderCollapse: "collapse", color: "var(--gray-700)" }}
        >
          <thead>
            <tr style={{ borderBottom: "2px solid rgba(0,0,0,0.08)" }}>
              <th className="text-left py-3 pr-4 font-semibold" style={{ color: "var(--black)", minWidth: "260px" }}>흔한 오해</th>
              <th className="text-left py-3 font-semibold" style={{ color: "var(--black)" }}>정정된 이해</th>
            </tr>
          </thead>
          <tbody>
            {summaryTable.map((row, i) => (
              <tr
                key={row.misunderstanding}
                style={{ borderBottom: "1px solid rgba(0,0,0,0.05)", background: i % 2 === 0 ? "transparent" : "var(--gray-50)" }}
              >
                <td className="py-3 pr-4 font-medium" style={{ color: "var(--brand-deep)" }}>{row.misunderstanding}</td>
                <td className="py-3 leading-relaxed">{row.correction}</td>
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
          Q방법론에 대한 오해는 대개 R방법론의 잣대로 Q방법론을 평가할 때 생긴다. Q방법론의 강점은 표본
          크기가 아니라 관점 다양성의 포착, 비율 추정이 아니라 유형 구조의 발견, 인과 검증이 아니라
          의미의 해석에 있다. 동시에 Q방법론에는 연구자 해석 의존성, Q-set 구성의 주관성, 횡단성, 인과추론
          불가, 보고 투명성 같은 진짜 한계가 있다. 강점과 한계를 함께 보는 일, 그리고 자신의 강점이 빛나는
          연구문제와 어울리지 않는 연구문제를 구분하는 일이 1-3강의 핵심 메시지다.
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
          href="/lessons/1-2"
          className="text-sm"
          style={{ color: "var(--gray-400)" }}
        >
          ← 1-2. Q방법론의 핵심 개념과 필요한 이유
        </Link>
        <div className="text-sm text-right" style={{ color: "var(--gray-400)" }}>
          <span>다음 강의</span>
          <br />
          <span style={{ fontFamily: "var(--font-mono)", fontSize: "12px" }}>
            2-1. 기존 사회과학 방법론의 한계 (준비 중)
          </span>
        </div>
      </div>
    </div>
  );
}
