// Edit the site's copy and release information in this file.
// Layout, font rendering, and Compare Lab behavior live in page.tsx.

export type FamilyId = "appendard" | "sprout" | "edge";

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
  tagline: string;
  summary: string;
  stats: { value: string; label: string; note: string }[];
  uses: string[];
  download: string;
};

export type PresentationBullet = {
  text: string;
  children?: string[];
};

export const siteMetadata = {
  title: "QBio Fonts",
  description: "학명과 유전자명, Figure와 발표 자료를 위해 italic·weight·글자폭을 다듬은 생물학 연구자용 한글 폰트 세 가족.",
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
    accent: "#6F33D8",
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
    tagline: "둥글둥글 친근하지만, 정보는 단정하게 정리됩니다.",
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
    tagline: "중립적인 인상과 신뢰감으로, 긴 본문을 안정적이고 읽기 좋게.",
    summary: "세련되고 믿음을 주는 형태로 논문·보고서·제안서의 본문과 figure label처럼 길게 표현해야 하는 문장에 가장 잘 맞습니다. Pretendard의 익숙한 한글 흐름에 Inter 4.1의 true italic을 결합해 학명·유전자명이 섞인 연구 문서와 슬라이드를 제대로 만들 수 있습니다.",
    stats: [
      { value: "9 × 2", label: "연구 문서용 굵기", note: "Thin부터 Black까지, 본문·Figure·발표 제목을 한 글꼴로" },
      { value: "H", label: "프린터 호환성", note: "Pretendard OTF의 HP 프린터 호환성 문제를 해결하여 중요한 보고서 PDF가 깨져 인쇄되는 문제를 차단" },
      { value: "/", label: "진짜 이탤릭", note: "Inter의 true italic을 이식하여 학명·유전자명·라틴어 표현을 완벽하게 조판" },
    ],
    uses: ["논문 본문", "보고서 본문", "Figure label", "프리젠테이션"],
    download: "https://github.com/hyeshik/snu-appendard/releases/download/v0.6.1/SNUAppendard-0.6.1.zip",
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
    titleLines: ["생물학 문서에 꼭 필요한", "네 가지를 바꿨습니다."],
    introduction: "실제 연구 문서에서도 멋진 한글 글꼴을 쓸 수 있도록 문제점들을 손봤습니다. 학술 문서에 필수적인 이탤릭, 영문만 길게 써도 어울리는 영문 글꼴, 산뜻한 발표자료를 위한 다양한 굵기, 한글·영문을 섞어 써도 잘 어울리는 간격을 갖도록 했습니다. 스누 엣지는 산뜻한 제목과 발표에, 스누 새싹은 친근하고 정돈된 포인트 강조에, 스누 어펜다드는 중립적이고 신뢰감 있는 본문에 맞도록 각자의 역할을 갖게 됐습니다.",
    ariaLabel: "생물학 연구를 위한 네 가지 개조 원칙",
    features: {
      italic: {
        number: "01 / ITALIC",
        scope: "ALL 3 FAMILIES",
        demos: {
          edgeLabel: "EDGE",
          edgeText: "<i>MALAT1</i>은 세포질로 수송되면서",
          sproutLabel: "SPROUT",
          sproutText: "Chang <i>et al.</i> (2025)에서는 새로운",
          appendardLabel: "APPENDARD",
          appendardText: "<i>X. laevis</i>의 초기 배아 추출액을",
        },
        titleLines: ["제대로 된 글을 위한", "제대로 된 italic."],
        copy: "스누 어펜다드에는 영문 원본의 italic을 이식하고, 스누 엣지는 italic이 있는 영문 글꼴로 전체를 교체했습니다. 스누 새싹은 한글은 바로 세우고 latin, 숫자, 기호만 10° 기울여, 학명, 유전자명과 라틴어 표현이 한국어 문장 안에서도 정확히 구분됩니다.",
      },
      weight: {
        number: "02 / WEIGHT",
        scope: "ALL 3 FAMILIES",
        demos: [
          { familyId: "edge", label: "EDGE · 8 WEIGHTS (FROM 4 WEIGHTS OF NANUMSQUARE)", korean: "엣지있는스누엣지", latin: "EDGYEDGE" },
          { familyId: "sprout", label: "SPROUT · 8 WEIGHTS (FROM 3 WEIGHTS OF LINE SEED SANS KR)", korean: "다정스런스누새싹", latin: "MYSPROUT" },
          { familyId: "appendard", label: "APPENDARD · 9 WEIGHTS (ORIGINAL WEIGHTS)", korean: "차분한스누어펜다드", latin: "APPENDARD" },
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
      presentationLabel: "LECTURE SLIDE",
      presentationTitle: "Cap Analogs",
      presentationBullets: [
        {
          text: "정상적인 mRNA의 안정성과 번역 효율을 달성하려면 5′ cap 구조가 필수적이다.",
        },
        {
          text: "Bacteriophage IVT system에서는 capping enzyme이 없으므로 추가로 다른 방법을 써야 한다.",
          children: [
            "<strong>Post-transcriptional capping</strong>: <strong><em>Vaccinia</em> capping enzyme</strong>으로 따로 반응. 경제성이 떨어짐.",
            "<strong>Co-transcriptional capping</strong>: <strong>cap analogs</strong> 활용",
          ],
        },
        { text: "Cap의 효율을 높이기 위해 <strong>Anti-Reverse Cap Analog</strong> (<strong>ARCA</strong>)를 쓴다." },
        { text: "플랫폼에 따라 Internal Ribosome Entry Site (IRES)를 쓰는 방법도 존재한다." },
      ],
      presentationPrompt: "<strong>[생각해 볼 문제]</strong> 그냥 Eukaryotic transcription system을 쓰면 안 될까?",
      proposalLabel: "RESEARCH PROPOSAL",
      proposalTitle: "2. 세포 내 조절기전까지 고려한 mRNA 서열 정밀 설계",
      proposalIntro: "mRNA 약물의 코딩 서열은 완전히 같은 단백질을 만들더라도 코돈 선택의 조합이 약 2.4 × 10<sup>632</sup>가지에 달한다(COVID-19 백신의 스파이크 단백질 기준). 이 중 어느 서열을 선택하느냐에 따라 mRNA의 보관 안정성, 세포 전달 효율, 세포 내 안정성, 단백질 생산 효율이 수백에서 수만 배 이상 차이 난다. 본 연구에서는 세포 내에서 일어나는 다양한 생물학적 조절작용을 최대한 고려하여 약물의 안정성과 총 단백질 생산량을 최대화하는 정밀 설계 기법을 개발하는 것을 목표로 한다.",
      proposalSections: [
        {
          title: "2.1. 코돈 사용빈도에서 RNA 2차 구조 최적화까지",
          paragraphs: [
            "mRNA 백신의 개발 초기에는 코돈 사용빈도를 세포 내에서 발현량이 높은 유전자와 비슷하게 구성하는 기법을 사용해 왔으나, 2019년에 RNA의 2차 구조를 강하게 하는 것이 총 단백질 생산량에 압도적으로 기여한다는 사실이 밝혀졌다. 이후 코돈 사용빈도와 2차 구조를 동시에 고려하여 코딩 서열을 최적화하는 기법으로 LinearDesign과 RiboTree 등이 개발되었다. 이들 소프트웨어는 신규 백신 및 치료제 개발에 적용되어 다수가 임상 2상을 진행 중이다.",
          ],
        },
        {
          title: "2.2. 현행 설계는 무시하는 mRNA의 세포 내 일생",
          paragraphs: [
            "mRNA 약물은 세포질로 진입하고 번역을 통해 단백질을 생산하면서도, 세포 내 조절 단백질과의 결합, 번역 의존적 분해, 폴리(A) 꼬리 조절, RNA 수식 등 일생 동안 끊임없이 세포 내 조절기전의 영향을 받는다. 이들 조절 기전은 대체로 RNA의 서열과 구조에 의해 결정되므로, 코돈의 선택으로 mRNA의 세포 내 운명을 바꿀 수 있으며 지속 기간과 총 단백질 생산량을 약물의 목적에 맞게 최적화할 수 있다. 특히 frameshift나 RNA 수식은 생산되는 단백질의 종류를 바꿔 놓을 수 있어 원치 않는 단백질로 인한 예상하기 힘든 부작용을 초래할 수 있으며, 일부는 치료제에서 우성 음성(dominant negative) 돌연변이체로 작용하여 치료제의 성능을 떨어뜨릴 수도 있다. 따라서 세포 내에서 발생하는 조절작용을 코돈 선택 단계에서 2차 구조 등과 함께 총체적으로 고려한 정밀한 설계 기법이 필요하다.",
          ],
        },
      ],
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
  },
  download: {
    sectionNumber: "04 / DOWNLOAD",
    titleLines: ["연구를 잘 전달하는", "세 가지 글꼴."],
    copy: "논문 초고, 연구노트, 내부 보고서, 발표용 슬라이드, 그림에 바로 사용할 수 있습니다. 모든 폰트는 SIL Open Font License 1.1에 따라 제공되며, README와 원본 저작권 고지를 함께 내려받을 수 있습니다.",
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
    ],
  },
  footer: {
    tagline: "Typefaces tuned for biological communications.",
    backToTop: "Back to top ↑",
  },
};
