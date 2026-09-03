// Edit the site's copy and release information in this file.
// Layout, font rendering, and Compare Lab behavior live in page.tsx.

export type FamilyId = "appendard" | "sprout" | "edge" | "jaha";

export type Family = {
  id: FamilyId;
  name: string;
  shortName: string;
  displayName: string;
  source: string;
  originalLabel: string;
  weights: number[];
  className: string;
  accent: string;
  tagline: string | string[];
  summary: string;
  stats: { value: string; label: string; note: string | string[] }[];
  uses: string[];
  download: string;
};

export type GrantSlide = {
  eyebrow: string;
  folio: string;
  title: string;
  thesis: string;
  pillars: { label: string; value: string; body: string }[];
  visualItems: string[];
  outcomeLabel: string;
  outcome: string;
};

export type ProposalSpecimen = {
  title: string;
  intro: string;
  sections: { title: string; paragraphs: string[] }[];
};

export type FamilySpecimen = {
  slide: GrantSlide;
  proposal: ProposalSpecimen;
};

export const siteMetadata = {
  title: "QBio Fonts",
  description: "학명과 유전자명, Figure와 발표 자료, 긴 연구 문서를 위해 다듬은 생물학 연구자용 한글 폰트 네 가족.",
  socialImageAlt: "QBio Fonts",
};

export const families: Family[] = [
  {
    id: "edge",
    name: "SNU Edge",
    shortName: "엣지",
    displayName: "스누 엣지",
    source: "Derived from NanumSquare and Montserrat",
    originalLabel: "NanumSquare",
    weights: [100, 300, 400, 500, 600, 700, 800, 900],
    className: "font-edge",
    accent: "#E64A9B",
    tagline: "산뜻하고 감각적인 슬라이드나 강조가 필요한 박스 내용에.",
    summary: "깔끔하면서도 심심하지 않은 센스있는 인상으로 제목·표제·섹션 제목·프리젠테이션·Figure label·박스 내용을 선명하게 만들어줍니다. 공간이 부족한 곳에서도 쓸 수 있게 한글 폭을 다듬고, 영문 가독성을 높이기 위해 라틴 문자를 Montserrat로 바꿨습니다. 이탤릭체가 제공되어, 학술 문서를 정확히 표현할 수 있습니다.",
    stats: [
      { value: "90%", label: "가로 압축·영문 교체", note: "NanumSquare와 Montserrat의 폭과 자간을 정돈하여 어느 위치에도 쓸 수 있습니다" },
      { value: "4 → 8", label: "굵기", note: "굵기를 4개에서 8개로 대폭 확장하여 감각적이고 리듬감 있는 강조가 가능합니다" },
      { value: "/", label: "이탤릭", note: "유전자명, 학명, 라틴어 표현, 강조를 정확히 표현하기 위해 진짜 이탤릭을 포함 했습니다" },
    ],
    uses: ["제목·표제", "섹션 제목", "프리젠테이션", "Figure label", "콜 아웃", "선택적 본문"],
    download: "https://github.com/hyeshik/snu-edge/releases/download/v0.6.1/SNUEdge-0.6.1.zip",
  },
  {
    id: "sprout",
    name: "SNU Sprout",
    shortName: "새싹",
    displayName: "스누 새싹",
    source: "Derived from LINE Seed Sans KR & EN",
    originalLabel: "LINE Seed Sans KR",
    weights: [100, 300, 400, 500, 600, 700, 800, 900],
    className: "font-sprout",
    accent: "#15836D",
    tagline: ["둥글둥글 친근하지만,", "정보는 단정하게 정리됩니다."],
    summary: "정돈되어 있지만 다정하고 친절한 인상에 제목·프리젠테이션·삽화 문구에 잘 어울립니다. 핵심 문장과 데이터 포인트를 부분적으로 강조할 때 특히 유용합니다. LINE Seed Sans KR의 세 마스터를 여덟 굵기로 확장하고, italic에서는 한글은 바로 세우고 latin·숫자·기호만 10° 기울였습니다.",
    stats: [
      { value: "3 → 8", label: "더 많은 굵기", note: "Thin부터 Black까지 연속된 여덟 단계로 자료를 체계적으로 강조하여 표현할 수 있습니다" },
      { value: "10°", label: "Faux 이탤릭", note: "Latin·숫자·기호만 10° 기울인 이탤릭을 포함하여 유전자명, 학명을 제대로 정확히 쓸 수 있습니다" },
      { value: "=", label: "굵기 일치", note: "Edge, Appendard와 같은 굵기 설정에서 시각적으로도 비슷한 굵기로 보이게 미세조정하여 섞어 써도 잘 어울립니다" },
    ],
    uses: ["제목", "프리젠테이션", "부분 강조", "대화"],
    download: "https://github.com/hyeshik/snu-sprout/releases/download/v0.9.1/SNUSprout-0.9.1.zip",
  },
  {
    id: "appendard",
    name: "SNU Appendard",
    shortName: "어펜다드",
    displayName: "스누 어펜다드",
    source: "Derived from Pretendard and Inter",
    originalLabel: "Pretendard",
    weights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
    className: "font-appendard",
    accent: "#2864DC",
    tagline: ["중립적인 인상과 신뢰감으로,", "긴 본문을 안정적이고 읽기 좋게."],
    summary: "세련되고 믿음을 주는 형태로 논문·보고서·제안서의 본문과 figure label처럼 길게 표현해야 하는 문장에 가장 잘 맞습니다. Pretendard의 익숙한 한글 흐름에 Inter 4.1의 true italic을 결합해 학명·유전자명이 섞인 연구 문서와 슬라이드를 제대로 만들 수 있습니다.",
    stats: [
      { value: "9 × 2", label: "연구 문서용 굵기", note: "Thin부터 Black까지, 본문·Figure·발표 제목을 한 글꼴로" },
      { value: "H", label: "프린터 호환성", note: "Pretendard OTF의 HP 프린터 호환성 문제를 해결하여 중요한 보고서 PDF가 깨져 인쇄되는 문제를 차단" },
      { value: "/", label: "진짜 이탤릭", note: "Inter의 true italic을 이식하여 학명·유전자명·라틴어 표현을 완벽하게 조판" },
    ],
    uses: ["논문 본문", "보고서 본문", "Figure label", "프리젠테이션"],
    download: "https://github.com/hyeshik/snu-appendard/releases/download/v0.6.1/SNUAppendard-0.6.1.zip",
  },
  {
    id: "jaha",
    name: "SNU Jaha",
    shortName: "자하",
    displayName: "스누 자하",
    source: "Derived from RIDIBatang and Roboto Serif",
    originalLabel: "RIDIBatang",
    weights: [100, 300, 400, 500, 600, 700, 800],
    className: "font-jaha",
    accent: "#6F33D8",
    tagline: ["자하연의 고요한 생동감을 닮은,", "읽기 편안한 연구 문서용 바탕체."],
    summary: "리디바탕의 단정하고 따뜻한 한글 골격에 Roboto Serif의 정교한 라틴 문자와 native italic을 맞춰, 한국어와 영문이 긴 문단 속에서 한결같은 호흡으로 흐릅니다. 일곱 가지 굵기를 각각 roman과 italic로 제공하고 고정폭 숫자를 더해, 논문·연구계획서·학위논문처럼 오래 읽는 문서의 본문부터 제목·표·인용까지 차분하게 이어줍니다.",
    stats: [
      { value: "1 → 7", label: "본문에서 표제까지", note: "한 가지 굵기 밖에 없던 리디바탕을 일곱 단계로 확장했습니다" },
      { value: "/", label: "진짜 이탤릭", note: "Roboto Serif의 native italic을 이식해 학명·유전자명과 라틴어 표현을 정확히 조판합니다" },
      { value: "En", label: "좁은 영문 폭", note: "Latin 글자의 폭을 한글과 비슷한 리듬으로 좁혀서 영어가 많이 섞인 텍스트도 자연스럽게 읽힙니다" },
    ],
    uses: ["논문", "연구계획서", "보고서", "공식 안내문", "표·참고문헌"],
    download: "https://github.com/hyeshik/snu-jaha/releases/download/v0.1.0/SNUJaha-0.1.0.zip",
  },
];

export const weightNames: Record<number, string> = {
  100: "Thin",
  200: "ExtraLight",
  300: "Light",
  400: "Regular",
  500: "Medium",
  600: "SemiBold",
  700: "Bold",
  800: "ExtraBold",
  900: "Black",
};

export const siteContent = {
  navigation: {
    homeAriaLabel: "QBio Fonts 처음으로",
    menuAriaLabel: "주요 메뉴",
    links: [
      { href: "#families", label: "Changes" },
      { href: "#compare", label: "Compare" },
      { href: "#download", label: "Download" },
    ],
  },
  hero: {
    eyebrow: "TYPEFACES FOR ACADEMIC COMMUNICATION OF BIOLOGISTS",
    titleLines: ["생물학자를 위한", "한글+영문 글꼴."],
    copy: "진짜 italic으로 학명과 유전자명을 정확하게, 다양한 굵기로 적절한 강조를. 한국어와 영어, 라틴어를 섞어 쓰는 생물학 연구 문서에 잘 어울립니다.",
    cta: "직접 비교하기",
    marqueeAriaLabel: "소개하는 글꼴",
  },
  changes: {
    sectionNumber: "01 / WHAT WE CHANGED",
    title: {
      emphasis: "생물학 문서",
      continuation: "에 꼭 필요한",
      secondLine: {
        emphasis: "네 가지",
        continuation: "를 바꿨습니다.",
      },
    },
    introduction: "실제 연구 문서에서도 멋진 한글 글꼴을 쓸 수 있도록 문제점들을 손봤습니다. 학술 문서에 필수적인 이탤릭, 영문만 길게 써도 어울리는 영문 글꼴, 산뜻한 발표자료를 위한 다양한 굵기, 한글·영문을 섞어 써도 잘 어울리는 간격을 갖도록 했습니다. 스누 엣지는 산뜻한 제목과 발표에, 스누 새싹은 친근하고 정돈된 포인트 강조에, 스누 어펜다드는 중립적이고 신뢰감 있는 본문에, 스누 자하는 자하연의 고요한 생동감을 담은 긴 논문과 제안서에 맞도록 각자의 역할을 갖게 됐습니다.",
    ariaLabel: "생물학 연구를 위한 네 가지 개조 원칙",
    features: {
      italic: {
        number: "01 / ITALIC",
        scope: "ALL 4 FAMILIES",
        demos: {
          edgeLabel: "EDGE",
          edgeText: "<i>MALAT1</i>은 세포질로 수송되면서",
          sproutLabel: "SPROUT",
          sproutText: "Chang <i>et al.</i> (2025)에서는 새로운",
          appendardLabel: "APPENDARD",
          appendardText: "<i>X. laevis</i>의 초기 배아 추출액을",
          jahaLabel: "JAHA",
          jahaText: "<i>S. cerevisiae</i>의 mRNA decay를",
        },
        titleLines: ["제대로 된 글을 위한", "제대로 된 italic."],
        copy: "스누 어펜다드와 스누 자하에는 영문 원본의 native italic을 이식하고, 스누 엣지는 italic이 있는 영문 글꼴로 전체를 교체했습니다. 스누 새싹은 한글은 바로 세우고 latin, 숫자, 기호만 10° 기울여, 학명, 유전자명과 라틴어 표현이 한국어 문장 안에서도 정확히 구분됩니다.",
      },
      weight: {
        number: "02 / WEIGHT",
        scope: "ALL 4 FAMILIES",
        demos: [
          { familyId: "edge", label: "EDGE · 8 WEIGHTS (FROM 4 WEIGHTS OF NANUMSQUARE)", korean: "엣지있는스누엣지", latin: "EDGYEDGE" },
          { familyId: "sprout", label: "SPROUT · 8 WEIGHTS (FROM 3 WEIGHTS OF LINE SEED SANS KR)", korean: "다정스런스누새싹", latin: "MYSPROUT" },
          { familyId: "appendard", label: "APPENDARD · 9 WEIGHTS (ORIGINAL WEIGHTS)", korean: "차분한스누어펜다드", latin: "APPENDARD" },
          { familyId: "jaha", label: "JAHA · 7 WEIGHTS (FROM 1 WEIGHT OF RIDIBATANG)", korean: "고요한스누자하", latin: "SNUJAHA" },
        ],
        // Use [wght=100]...[/wght] through [wght=900]...[/wght] to mix weights safely.
        titleLines: ["[wght=500]리듬감[/wght] [wght=300]살리는[/wght] [wght=900]두[/wght][wght=700]께.[/wght]"],
        copy: "[wght=700]적재 적소[/wght][wght=300]에 알맞은 [/wght][wght=600]두께[/wght][wght=300]로, [/wght][wght=500]강조할 곳[/wght][wght=300]을[/wght] [wght=800]정확히 강조[/wght]하기 위한 [wght=500]충분히[/wght] [wght=700]다양한 weight[/wght][wght=300]를 준비했습니다.[/wght]",
      },
      latin: {
        number: "03 / LATIN",
        scope: "EDGE",
        originalLabel: "NANUMSQUARE",
        modifiedLabel: "SNU EDGE (FROM MONTSERRAT)",
        sample: "37ºC에서 5′→3′ exonuclease가 작용하면서 ",
        titleLines: ["글의 신뢰도를", "받쳐주는 영문 글꼴."],
        copy: "스누 엣지는 NanumSquare의 한글에 어울리게 Montserrat의 영문, 기호를 크기와 baseline, tracking을 조절하여 교체, 도입했습니다. 영어 단어가 많이 섞인 글도 품격 있게 보이고 빠르게 읽힙니다.",
      },
      width: {
        number: "04 / WIDTH",
        scope: "EDGE",
        originalLabel: "NANUMSQUARE",
        modifiedLabel: "SNU EDGE",
        sample: "Helicase는 종종 짧은 이중 가닥 영역에 결합하고, ATP 결합과",
        titleLines: ["발표 슬라이드와 figure에", "적당한 밀도의 가로폭."],
        copy: "스누 엣지는 NanumSquare와 Montserrat의 가로폭과 간격을 조정해 slide 설명과 figure label 뿐만 아니라, 공간 제약이 심한 제안서 본문에서도 밀도 있게 사용할 수 있습니다.",
      },
    },
  },
  compare: {
    sectionNumber: "02 / COMPARE LAB",
    titleLines: ["어떻게 차이 나는지", "바로 비교해보세요."],
    tabListAriaLabel: "비교할 글꼴",
    inputLabel: "직접 입력",
    presetListAriaLabel: "샘플 문구",
    presets: [
      {
        label: "1:1 비율",
        text: "HEK293T 세포에서 METTL3 depletion 후 mRNA half-life 변화를 SLAM-seq으로 정량했다.",
      },
      {
        label: "1:3 비율",
        text: "Long-read direct RNA sequencing을 이용한 m⁶A-dependent isoform decay 연구",
      },
      {
        label: "Figure legend",
        text: "Figure 7. HMM 또는 CTC-CRF 모델을 활용한 베이스콜러 개발 결과. (A) Oxford Nanopore Technologies 사에서 제공하는 기존의 k-mer 모델들과 본 연구에서 제작한 DRS에서의 DNA 전류 신호에 대한 k-mer 모델 비교. (B) HMM을 이용한 DNA 염기 서열 베이스콜링 결과 예시.",
      },
      {
        label: "긴 텍스트",
        text: "개시코돈 근처의 결합 흔적을 제외하고, 폴리(A) 꼬리 길이에 따른 RBP 결합 흔적의 변화를 분석하였다. 폴리(A) 꼬리는 전사 직후 200~250 nt 길이로 합성된 후 RNA 생애 주기 동안 점차 짧아지므로, mRNA 분자의 생애 단계 지표로도 활용할 수 있다. 엑손을 길이에 따라 세 그룹으로 나누어 분석한 결과, 모든 그룹에서 폴리(A) 꼬리가 긴 경우에만 EJC 결합 양상이 명확히 나타났으며, 꼬리 길이가 감소할수록 결합 흔적이 다양한 위치로 분산되었다(그림 13). 특히 길이가 200 nt 이상인 엑손에서는 폴리(A) 꼬리가 짧아질수록 엑손 접합부(junction)를 기준으로 ±100 nt 영역 전체에 다수의 결합 흔적 피크가 형성되었다.",
      },
    ],
    controls: {
      size: "크기",
      sizeAriaLabel: "글자 크기",
      tracking: "자간",
      trackingAriaLabel: "글자 사이 간격",
      weight: "굵기",
      weightAriaLabel: "글자 굵기",
      postureAriaLabel: "글자 자세",
      roman: "Roman",
      italic: "Italic",
      viewAriaLabel: "비교 방식",
      stacked: "위아래",
      overlay: "겹쳐보기",
    },
    panes: {
      italicUnavailable: "Unmodified original (italic unavailable)",
      original: "Unmodified original",
      modified: "Modified font",
    },
  },
  familyStory: {
    recommendedUseAriaSuffix: "권장 용도",
    specimens: {
      presentationLabel: "PRESENTATION SLIDE",
      proposalLabel: "RESEARCH PROPOSAL",
      byFamily: {
        edge: {
          slide: {
            eyebrow: "SYSTEMS NEUROSCIENCE · SPATIAL MEMORY",
            folio: "AIM 1",
            title: "−80 °C 냉동고 탐색의 공간기억 지도",
            thesis: "rack 좌표·색 테이프·성에 무늬를 통합한 공간표상이 샘플 위치의 회상과 재고착을 결정한다.",
            pillars: [
              { label: "ENVIRONMENT", value: "−80 °C", body: "저온 노출 없는 실물 크기 digital twin" },
              { label: "LANDMARKS", value: "3 CUES", body: "rack 번호·상자 색·선반 높이의 선택적 교란" },
              { label: "RECALL", value: "4 SEC", body: "문을 닫은 직후 나타나는 ‘아, 거기였지’ 반응" },
            ],
            visualItems: ["TARGET", "SHIFTED CUE", "RECALLED"],
            outcomeLabel: "EXPECTED OUTCOME",
            outcome: "색 단서가 냉동고 공간기억의 탐색과 재고착에 기여하는 정도를 정량화한다.",
          },
          proposal: {
            title: "2. −80 °C 냉동고 탐색에서 색 단서가 공간기억 재고착에 미치는 영향",
            intro: "연구자는 −80 °C 냉동고에서 샘플을 찾을 때 rack 번호, 선반 높이, 상자의 색과 성에 무늬를 하나의 3차원 공간지도로 통합한다. 그러나 예비 관찰에서는 냉동고 문이 열려 있는 동안보다 닫힌 직후 4초 안에 목표 위치를 정확히 떠올리는 ‘문 닫힘 회상’이 일관되게 나타났다. 본 연구는 색 테이프가 공간 탐색의 landmark이자 기억 재고착의 단서로 작용한다는 가설을 검증하고자 한다.",
            sections: [
              {
                title: "2.1. 냉동고 digital twin에서 공간 단서의 선택적 교란",
                paragraphs: [
                  "Morris <em>et al.</em>의 공간기억 패러다임을 연구실 환경에 맞게 변형한 실물 크기의 <em>in silico</em> 냉동고 digital twin을 구축하고, 48명의 연구 참여자에게 rack–shelf–box 좌표로 정의된 샘플 위치를 학습시킨다. 색 테이프를 원래 위치에 유지하거나 인접 상자와 교환하고, 색 단서를 완전히 제거한 조건을 무작위로 제시한다. 시선 궤적, 최초 선택까지의 시간과 탐색 경로 길이를 기록하고, 참여자와 상자를 무작위 효과로 포함한 계층적 Bayesian 모형으로 각 단서의 기여도를 추정한다.",
                ],
              },
              {
                title: "2.2. 문 닫힘 신호에 의한 기억 재고착과 위치 회상",
                paragraphs: [
                  "학습 24시간 뒤 일부 상자의 위치를 이동시킨 후 냉동고 문 닫힘 소리, 타이머 종료음 또는 무음 조건을 제시한다. 4초 이내에 발생하는 위치 정정과 ‘아, 거기였지’ 발화를 재고착의 행동 지표로 정의하고, 일주일 뒤 지연 회상으로 기억의 안정성을 평가한다. 문 닫힘 신호가 이동된 위치의 학습을 선택적으로 촉진한다면, 냉동고를 다시 열기 전에 기억이 선명해지는 연구실 경험을 신경과학적 모형으로 설명할 수 있다.",
                ],
              },
            ],
          },
        },
        sprout: {
          slide: {
            eyebrow: "DEVELOPMENTAL BIOLOGY · LINEAGE TRACING",
            folio: "AIM 1",
            title: "Figure panel의 발생과 운명 결정",
            thesis: "하나의 초안은 피드백 신호의 조합에 따라 Figure·포스터·graphical abstract로 분화한다.",
            pillars: [
              { label: "PROGENITORS", value: "120 PANELS", body: "동일한 초기 스케치에서 출발한 panel 계보" },
              { label: "MORPHOGENS", value: "3 SIGNALS", body: "글자 확대·화살표 정리·핵심 메시지 선택" },
              { label: "CELL FATES", value: "4 FATES", body: "본문 Figure·보충자료·포스터·graphical abstract" },
            ],
            visualItems: ["본문 Figure", "보충자료", "포스터", "Graphical abstract"],
            outcomeLabel: "EXPECTED OUTCOME",
            outcome: "panel의 계보와 피드백 반응을 연결한 최초의 Figure 발생지도를 구축한다.",
          },
          proposal: {
            title: "2. Figure panel의 발생계보와 graphical abstract로의 운명 결정",
            intro: "연구 Figure는 동일한 초기 스케치에서 출발하더라도 본문 panel, 보충자료, 학회 포스터 또는 graphical abstract로 서로 다른 운명을 획득한다. 예비 version lineage 분석에서는 글자 크기, 화살표 수와 핵심 메시지의 위치가 분화 직전 급격하게 재편되었다. 본 연구는 공동연구자의 피드백을 morphogen signal로 간주하고, 신호의 농도와 조합이 panel fate를 결정한다는 Figure 발생 모형을 구축하고자 한다.",
            sections: [
              {
                title: "2.1. Version barcode를 이용한 단일 panel 계보 추적",
                paragraphs: [
                  "12개의 가상 연구과제에서 생성한 120개 초기 panel에 version hash를 부여하고, 스케치부터 내부 발표, 논문 Figure와 graphical abstract까지 모든 편집 사건을 계보로 기록한다. 실제 발생계보에서 <em>SOX2</em>와 <em>PAX6</em>를 쓰듯 글자 확대와 화살표 정리를 운명 표지로 삼고, single-panel trajectory 분석으로 공통 전구상태와 분기점을 추정한다. 복사하여 다시 붙인 panel은 쌍둥이 계통으로 처리하되, 크기만 바꾼 사본은 새로운 종으로 명명하지 않는다.",
                ],
              },
              {
                title: "2.2. 피드백 morphogen의 조합적 운명 결정",
                paragraphs: [
                  "‘글자를 더 크게’, ‘화살표를 정리’, ‘한 장에 핵심만’의 세 표준화 신호를 농도와 순서를 달리해 panel에 적용한다. 각 처리 후 정보 밀도, 시선 유도와 10초 메시지 회상률을 측정하고 Waddington landscape 위에서 최종 운명을 예측한다. 신호 제거 후 원래 상태로 되돌리는 rescue experiment를 통해 운명 결정의 가역성을 검증하며, 결과는 읽기 쉬운 Figure가 발생하는 최소 신호 조합을 제시할 것이다.",
                ],
              },
            ],
          },
        },
        appendard: {
          slide: {
            eyebrow: "POPULATION GENETICS · GENE FLOW",
            folio: "AIM 1",
            title: "학회 에코백의 기관 간 유전자 흐름",
            thesis: "학회장은 에코백 계통이 연구기관 사이를 이동하고 새로운 표지를 획득하는 접촉지대다.",
            pillars: [
              { label: "SAMPLING", value: "240 BAGS", body: "8개 학회·12개 기관에서 반복 관찰" },
              { label: "MARKERS", value: "24 LOCI", body: "로고·소재·손잡이·명찰·스티커 haplotype" },
              { label: "GENE FLOW", value: "Fₛₜ → 0", body: "포스터 세션에서 증가하는 기관 간 혼합" },
            ],
            visualItems: ["LAB A", "LAB B", "JOINT MTG", "LAB C"],
            outcomeLabel: "EXPECTED OUTCOME",
            outcome: "에코백의 이동과 표지 획득으로 학술 공동체의 연결망을 복원한다.",
          },
          proposal: {
            title: "2. 학회 에코백의 유전자 흐름과 연구기관 간 이입",
            intro: "학회 에코백은 제작 기관의 로고를 유지하면서도 연구자와 함께 이동하고, 새로운 명찰과 스티커를 축적하며 복합적인 계통 신호를 형성한다. 특히 공동학회와 포스터 세션은 서로 다른 에코백 집단이 같은 공간에 모이는 일시적 접촉지대로 기능한다. 본 연구는 에코백의 표지 조합을 다좌위 haplotype으로 정의하고, 학술 교류가 기관 간 유전자 흐름과 introgression을 증가시킨다는 가설을 검증한다.",
            sections: [
              {
                title: "2.1. 에코백 형질 표지와 이동 네트워크 구축",
                paragraphs: [
                  "8개 학회와 12개 연구기관에서 240개 에코백을 반복 관찰하고, 로고, 제작 연도, 소재, 손잡이 길이, 명찰과 스티커를 24개 형질 표지로 부호화한다. 소유자의 기관 이동은 에코백의 dispersal event로만 기록하며 개인의 유전정보는 수집하지 않는다. 한 사람이 두 개의 에코백을 겹쳐 든 경우는 배수체로 분류하지 않고 동일 운반체에서 발생한 반복관찰로 처리한다.",
                ],
              },
              {
                title: "2.2. 집단구조와 학회 접촉지대의 이입 추론",
                paragraphs: [
                  "형질 행렬로 기관별 Fₛₜ, 주성분과 admixture 비율을 추정하고, 등록대와 포스터 홀 사이의 이동을 network migration model로 분석한다. 분석 틀은 <em>Arabidopsis thaliana</em>의 종자 분산과 <em>Drosophila melanogaster</em>의 집단구조 연구에서 차용하되, 에코백이 스스로 이동한다는 가정은 두지 않는다. 오래된 학회 에코백에 다른 분야의 스티커가 함께 나타나는 사례는 혼합 계통으로 정의하고, 공동학회 전후의 유효 이주율을 비교한다. 이를 통해 전혀 다른 연구실 행사에서 십 년 전 에코백이 다시 발견되는 경로와 학술 공동체의 장기적인 연결성을 함께 설명할 수 있다.",
                ],
              },
            ],
          },
        },
        jaha: {
          slide: {
            eyebrow: "INTEGRATIVE TAXONOMY · SPECIES DELIMITATION",
            folio: "AIM 1",
            title: "자하연 ‘마감고둥’ 종복합체의 통합분류",
            thesis: "초안형·수정본형·최종본형은 한 종의 표현형 변이인가, 서로 다른 세 계통인가?",
            pillars: [
              { label: "FIELD DESIGN", value: "12 SITES", body: "석축 수면선에서 월별 반복 채집" },
              { label: "EVIDENCE", value: "4 LAYERS", body: "패각 형태·치설 micro-CT·COI/16S·전장유전체" },
              { label: "HYPOTHESIS", value: "<em>Jahaella</em> × 3", body: "가칭 세 후보 종의 경계를 다종 공선조 모형으로 검증" },
            ],
            visualItems: ["<em>Jahaella drafta</em>", "<em>J. revisa</em>", "<em>J. finalissima</em>"],
            outcomeLabel: "EXPECTED OUTCOME",
            outcome: "통합 종 경계를 제시하고, 수온보다 학위논문 제출 일정이 출현을 더 잘 설명하는지 검정한다.",
          },
          proposal: {
            title: "2. 자하연 ‘마감고둥’ 종복합체의 통합분류와 제출기 계절성",
            intro: "자하연 석축의 수면선 부근에서는 논문 제출 마감이 가까워질수록 출현 기록이 증가하는 1.5–2.3 mm 크기의 미소 복족류가 반복적으로 관찰되어 왔다. 이른바 ‘마감고둥’은 껍질 무늬에 따라 초안형, 수정본형, 최종본형으로 구분되지만, 예비 COI 분석에서는 파일명에 붙은 버전 수와 유전적 분화가 일치하지 않았다. 본 연구는 이 집단이 단일 종의 표현형 변이인지, 가칭 <em>Jahaella drafta</em>, <em>J. revisa</em>, <em>J. finalissima</em>로 이루어진 종복합체인지 검증하고자 한다.",
            sections: [
              {
                title: "2.1. 형태·유전체 자료를 결합한 종 경계 추론",
                paragraphs: [
                  "매월 석축 12개 지점에서 표본을 채집하고, 패각의 기하형태측정, 치설 micro-CT, COI·16S barcode 및 저심도 전장유전체 자료를 확보한다. 계통수와 다종 공선조 모형을 이용해 후보 종의 경계를 추론하며, 원고가 반려된 날에 채집된 개체는 독립된 ‘재투고형’으로 분류하지 않고 반복 측정 자료로 처리한다. 모든 학명은 가칭으로 사용하며 본 연구계획서는 명명 행위로 간주하지 않는다.",
                ],
              },
              {
                title: "2.2. 마감 신호에 대한 출현 반응 검증",
                paragraphs: [
                  "출현 확률을 수온, 강수량, 야간 조도 및 교내 학위논문 제출 일정의 함수로 추정한다. 추가 수조 실험에서는 ‘D−7’, ‘D−1’, ‘제출기한 연장’ 안내문을 무작위로 제시하고 활동량과 산란 행동을 비교한다. 귀무대조군에는 ‘마감 없음’을 제시하며, 연장 승인 처리군에서만 활동량이 급감한다면 마감고둥의 계절성이 환경보다 행정 일정에 의해 조절된다는 최초의 증거가 될 것이다.",
                ],
              },
            ],
          },
        },
      } satisfies Record<FamilyId, FamilySpecimen>,
    },
    weightFamily: {
      heading: "WEIGHT FAMILY",
      stylesSuffix: "WEIGHTS × 2 STYLES",
      regularSample: "접합부 5′ 쪽 20–24 nt 위치에 결합하는 exon junction complex (EJC)",
    },
  },
  characterSet: {
    sectionNumber: "03 / CHARACTER SET",
    edgeTranscript: "direct RNA-seq로 아형별 poly(A) tail을 측정합니다.",
    edgeSequence: "5′–AUGGCUA–3′ RNA를 37 °C에서 15 min 접었습니다.",
    sproutSpecies: "S. cerevisiae",
    sproutGene: "HAC1",
    sproutBetween: "에서",
    sproutTail: "mRNA splicing을 측정합니다.",
    appendard: "DMS-MaPseq로 transcript별 RNA secondary structure를 비교합니다.",
    jaha: "RNA 구조와 번역 효율의 관계를 긴 연구 문서에서 차분하게 서술합니다.",
  },
  download: {
    sectionNumber: "04 / DOWNLOAD",
    titleLines: ["연구를 잘 전달하는", "네 가지 글꼴."],
    copy: "논문 초고, 연구노트, 내부 보고서, 발표용 슬라이드, 그림에 바로 사용할 수 있습니다. 네 폰트 모두 SIL Open Font License 1.1에 따라 제공되며, 라이선스와 원본 저작권 고지를 함께 내려받을 수 있습니다.",
    format: "OTF",
    stylesLabel: "styles",
    button: "Download ZIP",
    ariaSuffix: "다운로드",
  },
  credits: {
    sectionNumber: "SOURCES & LICENSES",
    copy: {
      beforeLab: "QBio Fonts는 ",
      lab: {
        label: "서울대학교 생명과학부 양적분자생물학연구실",
        href: "https://qbio.io",
      },
      afterLab: "에서 기존 오픈 폰트를 생물학 연구에 맞게 수정한 글꼴 셋입니다. 각 원본의 라이선스와 저작권을 따르며, 원 저작자나 프로젝트의 공식 제품 또는 보증을 의미하지 않습니다.",
    },
    links: [
      { href: "https://github.com/orioncactus/pretendard", label: "Pretendard ↗" },
      { href: "https://github.com/rsms/inter", label: "Inter ↗" },
      { href: "https://seed.line.me/index_kr.html", label: "LINE Seed ↗" },
      { href: "https://hangeul.naver.com/font", label: "NanumSquare ↗" },
      { href: "https://fonts.google.com/specimen/Montserrat", label: "Montserrat ↗" },
      { href: "https://ridicorp.com/ridibatang/", label: "RIDIBatang ↗" },
      { href: "https://github.com/googlefonts/roboto-serif", label: "Roboto Serif ↗" },
    ],
  },
  footer: {
    tagline: "Typefaces tuned for biological communications.",
    backToTop: "Back to top ↑",
  },
};
