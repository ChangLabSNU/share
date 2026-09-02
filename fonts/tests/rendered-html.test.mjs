import assert from "node:assert/strict";
import { readFile, stat } from "node:fs/promises";
import test from "node:test";

const projectRoot = new URL("../", import.meta.url);

test("statically exports the QBio Fonts showcase", async () => {
  const html = await readFile(new URL("../dist/client/index.html", import.meta.url), "utf8");
  assert.match(html, /<title>QBio Fonts<\/title>/i);
  assert.match(html, /생물학자를 위한/);
  assert.match(html, /true italic/i);
  assert.match(html, /리듬감/);
  assert.match(html, /3 OF 4 FAMILIES/);
  assert.match(html, /ALL 4 FAMILIES/);
  assert.match(html, />NANUMSQUARE</);
  assert.match(html, /SNU EDGE \(FROM MONTSERRAT\)/);
  assert.match(html, /Helicase는 종종 짧은 이중 가닥 영역에 결합하고/);
  assert.match(html, /37ºC에서 5′→3′ exonuclease/);
  assert.match(html, /37 °C/);
  assert.match(html, /METTL3/);
  assert.match(html, /DMS-MaPseq/);
  assert.match(html, /SLAM-seq/);
  assert.match(html, /<p class="font-edge"><i>[^<]+<\/i>[^<]+<\/p>/);
  assert.match(html, /<p class="font-sprout">[^<]+<i>[^<]+<\/i>[^<]+<\/p>/);
  assert.match(html, /<p class="font-appendard"><i>[^<]+<\/i>[^<]+<\/p>/);
  assert.match(html, /LECTURE SLIDE/);
  assert.doesNotMatch(html, /PRESENTATION SLIDE/);
  assert.match(html, /Cap Analogs/);
  assert.match(html, /<strong><em>Vaccinia<\/em> capping enzyme<\/strong>/);
  assert.match(html, /Anti-Reverse Cap Analog/);
  assert.match(html, /\[생각해 볼 문제\]/);
  assert.match(html, /Eukaryotic transcription system/);
  assert.doesNotMatch(html, /FIGURE LEGEND|SCIENTIFIC ITALIC/);
  assert.match(html, /RESEARCH PROPOSAL/);
  assert.match(html, /세포 내 조절기전까지 고려한 mRNA 서열 정밀 설계/);
  assert.match(html, /2\.4 × 10<sup>632<\/sup>/);
  assert.match(html, /2\.1\. 코돈 사용빈도에서 RNA 2차 구조 최적화까지/);
  assert.match(html, /2\.2\. 현행 설계는 무시하는 mRNA의 세포 내 일생/);
  assert.match(html, /dominant negative/);
  assert.match(html, /01 \/ WHAT WE CHANGED/);
  assert.match(html, /네 가지를 바꿨습니다/);
  assert.match(html, /02 \/ COMPARE LAB/);
  assert.doesNotMatch(html, /THREE FAMILIES/);

  const changesIndex = html.indexOf("01 / WHAT WE CHANGED");
  const compareIndex = html.indexOf("02 / COMPARE LAB");
  assert.ok(changesIndex >= 0);
  assert.ok(compareIndex > changesIndex);

  assert.match(html, /SNU Appendard/);
  assert.match(html, /SNU Sprout/);
  assert.match(html, /SNU Jaha/);
  assert.doesNotMatch(html, /SNU Sprout Sans|SNUSproutSans/);
  assert.match(html, /github\.com\/hyeshik\/snu-edge\/releases\/download\/v0\.6\.1\/SNUEdge-0\.6\.1\.zip/);
  assert.match(html, /github\.com\/hyeshik\/snu-sprout\/releases\/download\/v0\.9\.1\/SNUSprout-0\.9\.1\.zip/);
  assert.match(html, /github\.com\/hyeshik\/snu-appendard\/releases\/download\/v0\.6\.1\/SNUAppendard-0\.6\.1\.zip/);
  assert.match(html, /\/share\/fonts\/downloads\/SNUJaha-0\.1\.0\.zip/);
  assert.match(html, /SNU Edge/);
  assert.match(html, /어펜다드/);
  assert.match(html, /새싹/);
  assert.match(html, /엣지/);
  assert.match(html, /자하/);
  assert.match(html, /스누 엣지/);
  assert.match(html, /스누 새싹/);
  assert.match(html, /스누 어펜다드/);
  assert.match(html, /스누 자하/);
  assert.match(html, /자하연의 고요한 운치/);
  assert.match(html, /RIDIBatang/);
  assert.match(html, /Roboto Serif/);
  assert.match(html, /WEIGHT FAMILY/);
  assert.match(html, /제목·표제/);
  assert.match(html, /부분 강조/);
  assert.doesNotMatch(html, /TP53|GATTACA|chromatin|vPE editing|target DNA/);
  assert.match(html, /https:\/\/qbio\.io\/share\/fonts\/og\.png/);
  assert.doesNotMatch(html, /codex-preview|SkeletonPreview|react-loading-skeleton/);
});

test("family editorial copy uses the family being introduced", async () => {
  const page = await readFile(new URL("../app/page.tsx", import.meta.url), "utf8");
  const css = await readFile(new URL("../app/globals.css", import.meta.url), "utf8");

  assert.ok(page.includes("<h3><FontText family={item}>{item.tagline}</FontText></h3>"));
  assert.ok(page.includes('<p className="story-summary"><FontText family={item}>{item.summary}</FontText></p>'));
  assert.ok(page.includes('className={`use-list ${item.className}`}'));
  assert.ok(page.includes('<article key={stat.label} className={item.className}>'));
  assert.match(css, /\.story-sprout \.story-head h2 \{ font-weight:700; \}/);
});

test("footer supporting copy uses SNU Edge in light gray", async () => {
  const page = await readFile(new URL("../app/page.tsx", import.meta.url), "utf8");
  const css = await readFile(new URL("../app/globals.css", import.meta.url), "utf8");

  assert.match(page, /<p className="font-edge footer-meta">\{siteContent\.footer\.tagline\}<\/p>/);
  assert.match(page, /<a className="font-edge footer-meta" href="#top">\{siteContent\.footer\.backToTop\}<\/a>/);
  assert.match(css, /footer \.footer-meta \{ color:var\(--dark-muted\); font-size:14\.3px; \}/);
});

test("Sources & Licenses links the QBio laboratory name", async () => {
  const page = await readFile(new URL("../app/page.tsx", import.meta.url), "utf8");
  const content = await readFile(new URL("../app/content.ts", import.meta.url), "utf8");

  assert.match(content, /label: "서울대학교 생명과학부 양적분자생물학연구실"/);
  assert.match(content, /href: "https:\/\/qbio\.io"/);
  assert.match(page, /className="credit-copy-link" href=\{siteContent\.credits\.copy\.lab\.href\}/);
});

test("download family titles use thirty-percent-darkened accent colors", async () => {
  const css = await readFile(new URL("../app/globals.css", import.meta.url), "utf8");

  assert.match(css, /\.download-list h3 \{[^}]*color:color-mix\(in srgb,var\(--accent\) 70%,#000\);/);
});

test("all families keep two realistic specimen cards with formatted presentation surfaces", async () => {
  const page = await readFile(new URL("../app/page.tsx", import.meta.url), "utf8");
  const css = await readFile(new URL("../app/globals.css", import.meta.url), "utf8");

  assert.doesNotMatch(page, /specimen-legend|specimen-italic/);
  assert.match(css, /\.specimen-lead \{ background:var\(--text\); color:var\(--on-dark\); \}/);
  assert.match(page, /<h4>\{specimens\.presentationTitle\}<\/h4>/);
  assert.match(page, /<PresentationList bullets=\{specimens\.presentationBullets\} \/>/);
  assert.match(page, /<p className="presentation-prompt"><InlineMarkup text=\{specimens\.presentationPrompt\} \/><\/p>/);
  assert.match(css, /\.presentation-slide h4 \{[^}]*text-align:center;[^}]*font-size:clamp\(22px,2\.2vw,34px\);/);
  assert.match(css, /\.presentation-slide ul \{[^}]*list-style:none;[^}]*font-size:clamp\(10px,1\.65vw,18px\);/);
  assert.match(css, /\.presentation-slide li::before \{[^}]*color:var\(--dark-muted\);[^}]*content:"-";/);
  assert.match(css, /\.presentation-slide sup \{ font-size:\.68em; font-weight:600; line-height:0; vertical-align:super; \}/);
  assert.match(css, /\.presentation-prompt \{[^}]*border-top:1px solid var\(--dark-border\);[^}]*font-size:clamp\(12px,1vw,16px\);/);
  assert.match(page, /<div className=\{`proposal-document \$\{item\.className\}`\}>/);
  assert.match(page, /specimens\.proposalSections\.map/);
  assert.match(css, /\.specimen-proposal \{ min-height:0; contain:size; \}/);
  assert.match(css, /\.proposal-document \{[^}]*font-size:clamp\(10\.8px,1\.02vw,15\.6px\);/);
  assert.match(css, /\.proposal-document h4 \{[^}]*border-bottom:2px solid var\(--text\);[^}]*font-size:clamp\(19\.2px,1\.74vw,26\.4px\);/);
  assert.match(css, /\.proposal-section h5 \{[^}]*border-left:3px solid var\(--accent\);[^}]*font-size:clamp\(14\.4px,1\.26vw,19\.2px\);/);
  assert.match(css, /\.proposal-document sup \{ font-size:\.7em; font-weight:600;/);
});

test("comparison panes use each unmodified source family end to end", async () => {
  const page = await readFile(new URL("../app/page.tsx", import.meta.url), "utf8");
  const css = await readFile(new URL("../app/globals.css", import.meta.url), "utf8");

  const content = await readFile(new URL("../app/content.ts", import.meta.url), "utf8");
  const edgeIndex = content.indexOf('id: "edge"');
  const sproutIndex = content.indexOf('id: "sprout"');
  const appendardIndex = content.indexOf('id: "appendard"');
  const jahaIndex = content.indexOf('id: "jaha"');
  assert.ok(edgeIndex < sproutIndex && sproutIndex < appendardIndex && appendardIndex < jahaIndex);
  assert.match(page, /useState<FamilyId>\("edge"\)/);
  assert.match(page, /\[tracking, setTracking\] = useState\(0\)/);
  assert.doesNotMatch(page, /function chooseFamily\(next: Family\) \{[^}]*setSample/);
  const familyType = content.match(/export type Family = \{[\s\S]*?\n\};/)?.[0] ?? "";
  assert.doesNotMatch(familyType, /sample:/);
  assert.doesNotMatch(css, /letter-spacing:-/);
  assert.match(page, /families\.map\(\(item, index\) =>/);

  assert.match(content, /italicUnavailable: "[^"]+"/);
  assert.match(content, /originalLabel: "Pretendard"/);
  assert.match(content, /originalLabel: "LINE Seed Sans KR"/);
  assert.match(content, /originalLabel: "NanumSquare"/);
  assert.match(content, /originalLabel: "RIDIBatang"/);
  assert.match(page, /family === "jaha"\) return <span className="source-jaha">/);
  assert.match(page, /family === "appendard"\) return <span className="source-pretendard">/);
  assert.match(page, /family === "sprout"\) return <span className="source-sprout">/);
  assert.match(page, /return <span className="source-nanumsquare">/);
  assert.match(css, /\.font-appendard,\.font-sprout,\.font-edge,\.font-jaha \{ font-synthesis:none; \}/);
  assert.match(css, /\.family-marquee \{[^}]*align-items:baseline;/);
  assert.match(css, /\.source-pretendard \{[^}]*font-style:normal; font-synthesis:none; \}/);
  assert.match(css, /\.source-sprout \{[^}]*font-style:normal; font-synthesis:none; \}/);
  assert.match(css, /SNUSprout-Regular\.woff2/);
  assert.match(css, /SNUAppendard-Italic\.woff2/);
  assert.doesNotMatch(css, /SNUSproutSans|SNUAppendard-RegularItalic/);
  assert.match(css, /\.source-nanumsquare \{[^}]*font-style:normal; font-synthesis:none; \}/);
  assert.match(css, /\.source-jaha \{[^}]*font-style:normal; font-synthesis:none; \}/);
});

test("comparison specimens stack vertically at the reduced default size", async () => {
  const page = await readFile(new URL("../app/page.tsx", import.meta.url), "utf8");
  const content = await readFile(new URL("../app/content.ts", import.meta.url), "utf8");
  const css = await readFile(new URL("../app/globals.css", import.meta.url), "utf8");

  assert.match(page, /type ViewMode = "stacked" \| "overlay"/);
  assert.match(page, /\[size, setSize\] = useState\(20\)/);
  assert.match(page, /type="range" min="12" max="92" value=\{size\}/);
  assert.match(content, /stacked: "위아래"/);
  const tabsIndex = page.indexOf('className="family-tabs"');
  const controlsIndex = page.indexOf('className="tester-controls"');
  const spacerIndex = page.indexOf('className="tester-spacer"');
  const inputIndex = page.indexOf('className="tester-text"');
  const stageIndex = page.indexOf("className={`comparison-stage ${view}`}");
  assert.ok(tabsIndex < controlsIndex && controlsIndex < spacerIndex && spacerIndex < inputIndex && inputIndex < stageIndex);
  assert.match(css, /\.comparison-stage \{[^}]*grid-template-columns:1fr;/);
  assert.match(css, /\.font-pane\+ \.font-pane \{[^}]*border-top:/);
  assert.match(css, /\.font-pane \{[^}]*min-height:132px;/);
  assert.match(css, /\.sample-text \{[^}]*margin:24px 0 0;/);
  assert.match(css, /\.tester-spacer \{ height:24px; \}/);
  assert.match(css, /\.tester-controls \{[^}]*border-inline:/);
  assert.match(css, /\.tester-text \{[^}]*background:rgba\(255,255,255,\.06\);/);
  assert.doesNotMatch(css, /\.tester-shell \{[^}]*border:/);
  assert.doesNotMatch(css, /\.comparison-stage \{[^}]*grid-template-columns:1fr 1fr;/);
  assert.doesNotMatch(css, /\.comparison-stage \{[^}]*min-height:410px;/);
});

test("comparison labels put font names before modification status", async () => {
  const page = await readFile(new URL("../app/page.tsx", import.meta.url), "utf8");
  const css = await readFile(new URL("../app/globals.css", import.meta.url), "utf8");

  assert.match(page, /<div className="sample-label"><b>\{family\.originalLabel\}<\/b><span>\{italic \? siteContent\.compare\.panes\.italicUnavailable : siteContent\.compare\.panes\.original\}<\/span><\/div>/);
  assert.match(page, /<div className="sample-label"><b>\{family\.name\}<\/b><span>\{siteContent\.compare\.panes\.modified\}<\/span><\/div>/);
  assert.match(css, /\.sample-label span \{ text-align:right; opacity:\.55; \}/);
  assert.match(css, /\.sample-label b \{ text-align:left; \}/);
});

test("all declared webfonts and public assets exist", async () => {

  const css = await readFile(new URL("../app/globals.css", import.meta.url), "utf8");
  const fontPaths = [...css.matchAll(/url\("\/share\/fonts(\/fonts\/[^"]+)"\)/g)].map((match) => match[1].split("?")[0]);
  assert.equal(fontPaths.length, 70);

  const publicAssets = [
    ...fontPaths,
    "/og.png",
    "/downloads/SNUJaha-0.1.0.zip",
  ];

  for (const asset of publicAssets) {
    const info = await stat(new URL(`../public${asset}`, import.meta.url));
    assert.ok(info.isFile(), `${asset} must be a file`);
    assert.ok(info.size > 0, `${asset} must not be empty`);
  }

  const packageJson = await readFile(new URL("../package.json", import.meta.url), "utf8");
  assert.doesNotMatch(packageJson, /react-loading-skeleton/);
  await stat(projectRoot);
});

test("SNU Sprout 0.9 exposes every Roman and Italic weight", async () => {
  const content = await readFile(new URL("../app/content.ts", import.meta.url), "utf8");
  const css = await readFile(new URL("../app/globals.css", import.meta.url), "utf8");
  const weights = [
    ["Thin", 100],
    ["Light", 300],
    ["Regular", 400],
    ["Medium", 500],
    ["SemiBold", 600],
    ["Bold", 700],
    ["ExtraBold", 800],
    ["Black", 900],
  ];

  assert.match(content, /weights: \[100, 300, 400, 500, 600, 700, 800, 900\]/);
  assert.match(content, /download: "https:\/\/github\.com\/hyeshik\/snu-sprout\/releases\/download\/v0\.9\.1\/SNUSprout-0\.9\.1\.zip"/);
  assert.doesNotMatch(content, /250: "Thin"/);

  for (const [name, weight] of weights) {
    const roman = new RegExp(`SNUSprout-${name}\\.woff2\\?v=0\\.9\\.0"\\) format\\("woff2"\\); font-weight: ${weight}; font-style: normal`);
    const italic = new RegExp(`SNUSprout-${name}Italic\\.woff2\\?v=0\\.9\\.0"\\) format\\("woff2"\\); font-weight: ${weight}; font-style: italic`);
    assert.match(css, roman);
    assert.match(css, italic);
  }
});

test("SNU Jaha exposes seven Roman weights without synthetic italic", async () => {
  const content = await readFile(new URL("../app/content.ts", import.meta.url), "utf8");
  const page = await readFile(new URL("../app/page.tsx", import.meta.url), "utf8");
  const css = await readFile(new URL("../app/globals.css", import.meta.url), "utf8");
  const weights = [
    ["Thin", 100],
    ["Light", 300],
    ["Regular", 400],
    ["Medium", 500],
    ["SemiBold", 600],
    ["Bold", 700],
    ["ExtraBold", 800],
  ];

  assert.match(content, /id: "jaha"[\s\S]*?weights: \[100, 300, 400, 500, 600, 700, 800\],[\s\S]*?hasItalic: false/);
  assert.match(page, /disabled=\{!family\.hasItalic\}/);
  assert.match(page, /if \(!next\.hasItalic\) setItalic\(false\)/);
  assert.match(css, /RIDIBatang\.woff2/);
  assert.doesNotMatch(css, /SNUJaha-[^"\n]*Italic\.woff2/);

  for (const [name, weight] of weights) {
    const roman = new RegExp(`SNUJaha-${name}\\.woff2"\\) format\\("woff2"\\); font-weight: ${weight}; font-style: normal`);
    assert.match(css, roman);
  }
});

test("font versions are omitted from visible family metadata", async () => {
  const page = await readFile(new URL("../app/page.tsx", import.meta.url), "utf8");
  const content = await readFile(new URL("../app/content.ts", import.meta.url), "utf8");

  assert.doesNotMatch(content, /\bversion:/);
  assert.doesNotMatch(page, /item\.version/);
});

test("editorial copy is isolated in the standalone content module", async () => {
  const page = await readFile(new URL("../app/page.tsx", import.meta.url), "utf8");
  const content = await readFile(new URL("../app/content.ts", import.meta.url), "utf8");
  const layout = await readFile(new URL("../app/layout.tsx", import.meta.url), "utf8");

  assert.match(page, /from "\.\/content"/);
  assert.match(layout, /siteMetadata/);
  assert.match(content, /생물학자를 위한/);
  assert.doesNotMatch(page, /학명과 유전자명은 정확한 italic으로/);
});

test("site theme uses the biological family palette", async () => {
  const page = await readFile(new URL("../app/page.tsx", import.meta.url), "utf8");
  const css = await readFile(new URL("../app/globals.css", import.meta.url), "utf8");
  const content = await readFile(new URL("../app/content.ts", import.meta.url), "utf8");

  for (const color of ["#15836d", "#6f33d8", "#2864dc", "#8f4c69", "#e64a9b", "#172033", "#657080", "#d8dde6", "#eef4ff", "#edf8f5", "#f8f0f4", "#ffffff"]) {
    assert.match(css, new RegExp(color));
  }

  assert.match(css, /--edge:#6f33d8/);
  assert.match(css, /--sprout:#15836d/);
  assert.match(css, /--appendard:#2864dc/);
  assert.match(css, /--jaha:#8f4c69/);
  assert.match(css, /--pink:#e64a9b/);
  assert.match(css, /--pale-blue:#eef4ff/);
  assert.match(css, /--pale-green:#edf8f5/);
  assert.match(css, /--pale-violet:#f1ebfb/);
  assert.match(content, /accent: "#6F33D8"/);
  assert.match(content, /accent: "#15836D"/);
  assert.match(content, /accent: "#2864DC"/);
  assert.match(content, /accent: "#8F4C69"/);
  assert.match(page, /<span className="hero-kicker">\{siteContent\.hero\.titleLines\[0\]\}<\/span>/);
  assert.match(page, /index < families\.length - 1 && <i aria-hidden="true">×<\/i>/);
  assert.match(css, /\.family-marquee \{[^}]*color:var\(--text\);/);
  assert.match(css, /\.family-marquee i \{[^}]*color:var\(--pink\);/);
  assert.match(css, /\.hero-kicker \{[^}]*color:var\(--edge\);[^}]*font-family:"SNU Edge Web"[^}]*font-size:60%;[^}]*font-weight:300;/);
  assert.match(css, /\.hero h1 em \{[^}]*color:var\(--text-strong\);[^}]*font-family:"SNU Appendard Web"[^}]*font-weight:800;/);
  assert.match(css, /\.families-intro h2 \{[^}]*color:var\(--appendard\);/);
  assert.match(css, /\.families-intro h2 i \{[^}]*color:var\(--text\);/);
  assert.match(css, /\.original-pane \.sample-label b \{ color:var\(--border\); \}/);
  assert.match(css, /\.original-pane \.sample-text \{ color:var\(--border\); \}/);
  assert.match(css, /\.download-list h3 \{[^}]*font-weight:700;/);
  assert.match(page, /<article key=\{item\.id\} style=\{\{ "--accent": item\.accent \} as CSSProperties\}>/);
  assert.doesNotMatch(css, /#f3f0e9|#101c2c|#173f78|#d9ff57|#ea4d83|#ff765d/);
});

test("multiline display headings keep enough line height for Hangul", async () => {
  const css = await readFile(new URL("../app/globals.css", import.meta.url), "utf8");

  assert.match(css, /\.hero h1 \{[^}]*line-height:\.96;/);
  assert.match(css, /\.section-heading h2 \{[^}]*line-height:\.98;/);
});

test("top-level section headings use the reduced display scale", async () => {
  const css = await readFile(new URL("../app/globals.css", import.meta.url), "utf8");

  assert.match(css, /\.families-intro h2 \{[^}]*font-size:clamp\(35\.84px,5\.12vw,78\.08px\);/);
  assert.match(css, /\.section-heading h2 \{[^}]*font-size:clamp\(33\.28px,4\.608vw,69\.12px\);/);
  assert.match(css, /\.download-heading h2 \{[^}]*font-size:clamp\(37\.12px,4\.48vw,66\.56px\);/);
});

test("italic feature demos honor only explicit i tags", async () => {
  const page = await readFile(new URL("../app/page.tsx", import.meta.url), "utf8");
  const css = await readFile(new URL("../app/globals.css", import.meta.url), "utf8");

  assert.match(page, /function ItalicText/);
  assert.match(page, /split\(\/\(<i>\.\*\?<\\\/i>\)\/g\)/);
  assert.match(page, /<ItalicText text=\{feature\.italic\.demos\.edgeText\} \/>/);
  assert.match(page, /<ItalicText text=\{feature\.italic\.demos\.sproutText\} \/>/);
  assert.match(page, /<ItalicText text=\{feature\.italic\.demos\.appendardText\} \/>/);
  assert.doesNotMatch(page, /dangerouslySetInnerHTML/);
  assert.doesNotMatch(page, /<em>\{feature\.italic\.demos\./);
  assert.match(css, /\.italic-demo p \{[^}]*margin:0 0 -\.18em;[^}]*padding-bottom:\.18em;/);
});

test("weight feature maps every family weight to one Korean and Latin glyph", async () => {
  const page = await readFile(new URL("../app/page.tsx", import.meta.url), "utf8");
  const content = await readFile(new URL("../app/content.ts", import.meta.url), "utf8");

  assert.match(content, /familyId: "edge"[^\n]*korean: "엣지있는스누엣지"[^\n]*latin: "EDGYEDGE"/);
  assert.match(content, /familyId: "sprout"[^\n]*korean: "다정스런스누새싹"[^\n]*latin: "MYSPROUT"/);
  assert.match(content, /familyId: "appendard"[^\n]*korean: "차분한스누어펜다드"[^\n]*latin: "APPENDARD"/);
  assert.match(content, /familyId: "jaha"[^\n]*korean: "고요한스누자하"[^\n]*latin: "SNUJAHA"/);
  assert.match(content, /8 WEIGHTS \(FROM 4 WEIGHTS OF NANUMSQUARE\)/);
  assert.match(content, /8 WEIGHTS \(FROM 3 WEIGHTS OF LINE SEED SANS KR\)/);
  assert.match(content, /9 WEIGHTS \(ORIGINAL WEIGHTS\)/);
  assert.match(content, /7 WEIGHTS \(FROM 1 WEIGHT OF RIDIBATANG\)/);
  assert.match(page, /characters\.length !== family\.weights\.length/);
  assert.match(page, /fontWeight: family\.weights\[index\]/);
  assert.match(page, /<WeightWord text=\{demo\.korean\} family=\{demoFamily\} lang="ko" \/>/);
  assert.match(page, /<WeightWord text=\{demo\.latin\} family=\{demoFamily\} lang="en" \/>/);
});

test("weight family specimens stay on one line at sixty percent scale", async () => {
  const page = await readFile(new URL("../app/page.tsx", import.meta.url), "utf8");
  const content = await readFile(new URL("../app/content.ts", import.meta.url), "utf8");
  const css = await readFile(new URL("../app/globals.css", import.meta.url), "utf8");

  assert.match(css, /\.weight-row>span:nth-child\(n\+3\) \{[^}]*min-width:0;[^}]*overflow:hidden;[^}]*white-space:nowrap;/);
  assert.match(css, /\.weight-family \{ width:68%;/);
  assert.match(css, /\.weight-family \{[^}]*margin:90px auto 0;/);
  assert.match(css, /\.weight-heading,\.weight-row \{[^}]*grid-template-columns:80px 140px 1fr;/);
  assert.match(css, /\.weight-row>span:nth-child\(3\) \{ font-size:clamp\(15px,1\.8vw,25\.8px\); \}/);
  assert.match(css, /\.weight-row>span:nth-child\(3\) \{ font-size:14\.4px; text-align:right; \}/);
  assert.match(css, /\.weight-family \{ width:100%; \}/);
  assert.match(css, /\.weight-heading \{[^}]*border-bottom:1px solid var\(--border\);/);
  assert.match(css, /\.weight-row \{ padding:1\.75px 0; \}/);
  assert.match(css, /\.weight-row:last-child \{ border-bottom:1px solid var\(--border\); \}/);
  assert.doesNotMatch(css, /\.weight-row \{[^}]*border-/);
  assert.doesNotMatch(page, /weightFamily\.italicSpecies|weightFamily\.italicTail/);
  assert.doesNotMatch(content, /italicSpecies|italicTail/);
});

test("family stat values and headings use the intended hierarchy", async () => {
  const css = await readFile(new URL("../app/globals.css", import.meta.url), "utf8");

  assert.match(css, /\.stat-grid strong \{[^}]*transform:translateY\(20px\);/);
  assert.match(css, /\.stat-grid h4 \{[^}]*font-weight:600;/);
});

test("weight feature copy honors safe wght markup", async () => {
  const page = await readFile(new URL("../app/page.tsx", import.meta.url), "utf8");
  const content = await readFile(new URL("../app/content.ts", import.meta.url), "utf8");

  const allowedWeight = "(?:100|200|300|400|500|600|700|800|900)";
  assert.match(content, new RegExp(`titleLines: \\["[^"\\n]*\\[wght=${allowedWeight}\\][^"\\n]*\\[\\/wght\\][^"\\n]*"\\]`));
  assert.match(content, new RegExp(`copy: "[^"\\n]*\\[wght=${allowedWeight}\\][^"\\n]*\\[\\/wght\\][^"\\n]*"`));
  assert.match(page, /function WeightText/);
  assert.match(page, /fontWeight: Number\(match\[1\]\)/);
  assert.match(page, /<WeightText text=\{feature\.weight\.copy\} \/>/);
  assert.doesNotMatch(page, /dangerouslySetInnerHTML/);
});

test("latin specimens use the reduced display size", async () => {
  const css = await readFile(new URL("../app/globals.css", import.meta.url), "utf8");

  assert.match(css, /\.latin-demo p \{[^}]*font-size:clamp\(17\.6px,2\.24vw,32\.8px\);/);
});

test("width specimens use the reduced display size", async () => {
  const css = await readFile(new URL("../app/globals.css", import.meta.url), "utf8");

  assert.match(css, /\.width-demo p \{[^}]*font-size:clamp\(19\.2px,2\.4vw,35\.2px\);/);
});
