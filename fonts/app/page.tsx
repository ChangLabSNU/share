"use client";

import { Fragment, useState } from "react";
import type { CSSProperties, ReactNode } from "react";
import {
  families,
  siteContent,
  siteMetadata,
  weightNames,
  type Family,
  type FamilyId,
  type PresentationBullet,
} from "./content";

type ViewMode = "stacked" | "overlay";

function OriginalRuns({ text, family }: { text: string; family: FamilyId }) {
  if (family === "jaha") return <span className="source-jaha">{text}</span>;
  if (family === "appendard") return <span className="source-pretendard">{text}</span>;
  if (family === "sprout") return <span className="source-sprout">{text}</span>;
  return <span className="source-nanumsquare">{text}</span>;
}

function FontText({
  family,
  children,
  className = "",
  style,
}: {
  family: Family;
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}) {
  return <span className={`${family.className} ${className}`} style={style}>{children}</span>;
}

function ItalicText({ text }: { text: string }) {
  return text.split(/(<i>.*?<\/i>)/g).map((part, index) => {
    if (part.startsWith("<i>") && part.endsWith("</i>")) {
      return <i key={index}>{part.slice(3, -4)}</i>;
    }
    return part;
  });
}

function renderInlineMarkup(text: string, keyPrefix = "inline"): ReactNode[] {
  const nodes: ReactNode[] = [];
  const tagPattern = /<(strong|em|sup)>(.*?)<\/\1>/g;
  let cursor = 0;
  let match: RegExpExecArray | null;

  while ((match = tagPattern.exec(text)) !== null) {
    if (match.index > cursor) nodes.push(text.slice(cursor, match.index));
    const [, tag, value] = match;
    const key = `${keyPrefix}-${match.index}`;
    const children = renderInlineMarkup(value, key);
    if (tag === "strong") nodes.push(<strong key={key}>{children}</strong>);
    if (tag === "em") nodes.push(<em key={key}>{children}</em>);
    if (tag === "sup") nodes.push(<sup key={key}>{children}</sup>);
    cursor = tagPattern.lastIndex;
  }

  if (cursor < text.length) nodes.push(text.slice(cursor));
  return nodes;
}

function InlineMarkup({ text }: { text: string }) {
  return renderInlineMarkup(text);
}

function PresentationList({ bullets }: { bullets: PresentationBullet[] }) {
  return (
    <ul>
      {bullets.map((bullet) => (
        <li key={bullet.text}>
          <InlineMarkup text={bullet.text} />
          {bullet.children && (
            <ul>
              {bullet.children.map((child) => <li key={child}><InlineMarkup text={child} /></li>)}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
}

function WeightWord({ text, family, lang }: { text: string; family: Family; lang: "ko" | "en" }) {
  const characters = Array.from(text);
  if (characters.length !== family.weights.length) {
    throw new Error(`${family.name} weight specimen must contain ${family.weights.length} characters`);
  }

  return (
    <span className={`weight-word ${family.className}`} aria-label={text} lang={lang}>
      {characters.map((character, index) => (
        <span aria-hidden="true" key={`${character}-${index}`} style={{ fontWeight: family.weights[index] }}>
          {character}
        </span>
      ))}
    </span>
  );
}

function WeightText({ text }: { text: string }) {
  return text.split(/(\[wght=(?:100|200|300|400|500|600|700|800|900)\].*?\[\/wght\])/g).map((part, index) => {
    const match = part.match(/^\[wght=(100|200|300|400|500|600|700|800|900)\](.*?)\[\/wght\]$/);
    if (!match) return part;
    return <span key={index} style={{ fontWeight: Number(match[1]) }}>{match[2]}</span>;
  });
}

export default function Home() {
  const [familyId, setFamilyId] = useState<FamilyId>("edge");
  const [sample, setSample] = useState(siteContent.compare.presets[0].text);
  const [size, setSize] = useState(20);
  const [weight, setWeight] = useState(400);
  const [tracking, setTracking] = useState(0);
  const [italic, setItalic] = useState(false);
  const [view, setView] = useState<ViewMode>("stacked");
  const family = families.find((item) => item.id === familyId) ?? families[0];
  const feature = siteContent.changes.features;
  const controls = siteContent.compare.controls;
  const specimens = siteContent.familyStory.specimens;

  function chooseFamily(next: Family) {
    setFamilyId(next.id);
    setWeight(next.weights.includes(400) ? 400 : next.weights[0]);
  }

  const sampleStyle = {
    fontSize: `${size}px`,
    fontWeight: weight,
    fontStyle: italic ? "italic" : "normal",
    letterSpacing: `${tracking / 100}em`,
  } satisfies CSSProperties;

  return (
    <main>
      <header className="topbar">
        <a className="wordmark" href="#top" aria-label={siteContent.navigation.homeAriaLabel}>{siteMetadata.title}</a>
        <nav aria-label={siteContent.navigation.menuAriaLabel}>
          {siteContent.navigation.links.map((link) => (
            <a href={link.href} key={link.href}>{link.label}</a>
          ))}
        </nav>
      </header>

      <section className="hero" id="top">
        <p className="eyebrow">{siteContent.hero.eyebrow}</p>
        <h1><span className="hero-kicker">{siteContent.hero.titleLines[0]}</span><br /><em>{siteContent.hero.titleLines[1]}</em></h1>
        <p className="hero-copy">{siteContent.hero.copy}</p>
        <a className="hero-cta" href="#compare"><span>{siteContent.hero.cta}</span><b>↓</b></a>
        <div className="family-marquee" aria-label={siteContent.hero.marqueeAriaLabel}>
          {families.map((item, index) => (
            <Fragment key={item.id}>
              <span className={item.className}>{item.shortName}</span>
              {index < families.length - 1 && <i aria-hidden="true">×</i>}
            </Fragment>
          ))}
        </div>
      </section>

      <section className="families-intro" id="families">
        <p className="section-no">{siteContent.changes.sectionNumber}</p>
        <h2><span className="changes-title-lead"><strong>{siteContent.changes.title.emphasis}</strong>{siteContent.changes.title.continuation}</span><i><strong>{siteContent.changes.title.secondLine.emphasis}</strong>{siteContent.changes.title.secondLine.continuation}</i></h2>
        <p>{siteContent.changes.introduction}</p>
      </section>

      <section className="biology-brief" aria-label={siteContent.changes.ariaLabel}>
        <article className="feature-card feature-italic">
          <header className="feature-meta">
            <span>{feature.italic.number}</span>
            <b>{feature.italic.scope}</b>
          </header>
          <div className="feature-demo italic-demo">
            <div><span>{feature.italic.demos.edgeLabel}</span><p className="font-edge"><ItalicText text={feature.italic.demos.edgeText} /></p></div>
            <div><span>{feature.italic.demos.sproutLabel}</span><p className="font-sprout"><ItalicText text={feature.italic.demos.sproutText} /></p></div>
            <div><span>{feature.italic.demos.appendardLabel}</span><p className="font-appendard"><ItalicText text={feature.italic.demos.appendardText} /></p></div>
            <div><span>{feature.italic.demos.jahaLabel}</span><p className="font-jaha"><ItalicText text={feature.italic.demos.jahaText} /></p></div>
          </div>
          <div className="feature-copy">
            <h3>{feature.italic.titleLines[0]}<br />{feature.italic.titleLines[1]}</h3>
            <p>{feature.italic.copy}</p>
          </div>
        </article>

        <article className="feature-card feature-weight">
          <header className="feature-meta">
            <span>{feature.weight.number}</span>
            <b>{feature.weight.scope}</b>
          </header>
          <div className="feature-demo weight-demo">
            {feature.weight.demos.map((demo) => {
              const demoFamily = families.find((item) => item.id === demo.familyId) ?? families[0];
              return (
                <div className="weight-specimen" key={demo.familyId}>
                  <span className="weight-specimen-label">{demo.label}</span>
                  <WeightWord text={demo.korean} family={demoFamily} lang="ko" />
                  <WeightWord text={demo.latin} family={demoFamily} lang="en" />
                </div>
              );
            })}
          </div>
          <div className="feature-copy weight-copy font-appendard">
            <h3>{feature.weight.titleLines.map((line) => <span key={line}><WeightText text={line} /></span>)}</h3>
            <p><WeightText text={feature.weight.copy} /></p>
          </div>
        </article>

        <article className="feature-card feature-latin">
          <header className="feature-meta">
            <span>{feature.latin.number}</span>
            <b>{feature.latin.scope}</b>
          </header>
          <div className="feature-demo latin-demo">
            <div>
              <span>{feature.latin.originalLabel}</span>
              <p className="source-nanumsquare">{feature.latin.sample}</p>
            </div>
            <div>
              <span>{feature.latin.modifiedLabel}</span>
              <p className="font-edge">{feature.latin.sample}</p>
            </div>
          </div>
          <div className="feature-copy">
            <h3>{feature.latin.titleLines[0]}<br />{feature.latin.titleLines[1]}</h3>
            <p>{feature.latin.copy}</p>
          </div>
        </article>

        <article className="feature-card feature-width">
          <header className="feature-meta">
            <span>{feature.width.number}</span>
            <b>{feature.width.scope}</b>
          </header>
          <div className="feature-demo width-demo">
            <div>
              <span>{feature.width.originalLabel}</span>
              <p className="source-nanumsquare">{feature.width.sample}</p>
            </div>
            <div>
              <span>{feature.width.modifiedLabel}</span>
              <p className="font-edge">{feature.width.sample}</p>
            </div>
          </div>
          <div className="feature-copy">
            <h3>{feature.width.titleLines[0]}<br />{feature.width.titleLines[1]}</h3>
            <p>{feature.width.copy}</p>
          </div>
        </article>
      </section>

      <section className="compare-section" id="compare" style={{ "--family-accent": family.accent } as CSSProperties}>
        <div className="section-heading">
          <p className="section-no">{siteContent.compare.sectionNumber}</p>
          <h2>{siteContent.compare.titleLines[0]}<br />{siteContent.compare.titleLines[1]}</h2>
        </div>

        <div className="family-tabs" role="tablist" aria-label={siteContent.compare.tabListAriaLabel}>
          {families.map((item) => (
            <button
              key={item.id}
              role="tab"
              aria-selected={familyId === item.id}
              className={familyId === item.id ? "active" : ""}
              onClick={() => chooseFamily(item)}
            >
              <span>0{families.indexOf(item) + 1}</span>{item.name.replace("SNU ", "")}
            </button>
          ))}
        </div>

        <div className="tester-shell">
          <div className="tester-controls">
            <label>
              <span>{controls.size} <b>{size}px</b></span>
              <input aria-label={controls.sizeAriaLabel} type="range" min="12" max="92" value={size} onChange={(event) => setSize(Number(event.target.value))} />
            </label>
            <label>
              <span>{controls.tracking} <b>{tracking / 100}em</b></span>
              <input aria-label={controls.trackingAriaLabel} type="range" min="-8" max="12" value={tracking} onChange={(event) => setTracking(Number(event.target.value))} />
            </label>
            <label>
              <span>{controls.weight}</span>
              <select aria-label={controls.weightAriaLabel} value={weight} onChange={(event) => setWeight(Number(event.target.value))}>
                {family.weights.map((item) => <option key={item} value={item}>{item} · {weightNames[item]}</option>)}
              </select>
            </label>
            <div className="button-control" aria-label={controls.postureAriaLabel}>
              <button className={!italic ? "active" : ""} onClick={() => setItalic(false)}>{controls.roman}</button>
              <button className={italic ? "active" : ""} onClick={() => setItalic(true)}>{controls.italic}</button>
            </div>
            <div className="button-control" aria-label={controls.viewAriaLabel}>
              <button className={view === "stacked" ? "active" : ""} onClick={() => setView("stacked")}>{controls.stacked}</button>
              <button className={view === "overlay" ? "active" : ""} onClick={() => setView("overlay")}>{controls.overlay}</button>
            </div>
          </div>

          <div className="tester-spacer" aria-hidden="true" />

          <div className="tester-text">
            <label htmlFor="tester-copy">{siteContent.compare.inputLabel}</label>
            <textarea id="tester-copy" value={sample} onChange={(event) => setSample(event.target.value)} rows={2} />
            <div className="preset-list" aria-label={siteContent.compare.presetListAriaLabel}>
              {siteContent.compare.presets.map((preset, index) => (
                <button key={preset.text} aria-label={`${preset.label} 예문`} title={preset.label} onClick={() => setSample(preset.text)}>0{index + 1}</button>
              ))}
            </div>
          </div>

          <div className={`comparison-stage ${view}`} data-family={familyId}>
            <article className="font-pane original-pane">
              <div className="sample-label"><b>{family.originalLabel}</b><span>{italic ? siteContent.compare.panes.italicUnavailable : siteContent.compare.panes.original}</span></div>
              <p className="sample-text" style={sampleStyle}><OriginalRuns text={sample} family={familyId} /></p>
            </article>
            <article className="font-pane modified-pane">
              <div className="sample-label"><b>{family.name}</b><span>{siteContent.compare.panes.modified}</span></div>
              <p className={`sample-text ${family.className}`} style={sampleStyle}>{sample}</p>
            </article>
          </div>
        </div>
      </section>

      {families.map((item, familyIndex) => (
        <section className={`family-story story-${item.id}`} id={item.id} key={item.id} style={{ "--accent": item.accent } as CSSProperties}>
          <div className="story-head">
            <p className="story-index">0{familyIndex + 1}</p>
            <div>
              <p className="story-source">{item.source}</p>
              <h2><FontText family={item}>{item.displayName}</FontText></h2>
              <h3><FontText family={item}>{item.tagline}</FontText></h3>
              <p className="story-summary"><FontText family={item}>{item.summary}</FontText></p>
              <ul className={`use-list ${item.className}`} aria-label={`${item.displayName} ${siteContent.familyStory.recommendedUseAriaSuffix}`}>
                {item.uses.map((use) => (
                  <li key={use}>{use}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="stat-grid">
            {item.stats.map((stat) => (
              <article key={stat.label} className={item.className}>
                <strong>{stat.value}</strong>
                <h4>{stat.label}</h4>
                <p>{stat.note}</p>
              </article>
            ))}
          </div>

          <div className="specimen-grid">
            <article className="specimen specimen-lead">
              <span className="specimen-label">{specimens.presentationLabel}</span>
              <div className={`presentation-slide ${item.className}`}>
                <h4>{specimens.presentationTitle}</h4>
                <PresentationList bullets={specimens.presentationBullets} />
                <p className="presentation-prompt"><InlineMarkup text={specimens.presentationPrompt} /></p>
              </div>
            </article>
            <article className="specimen specimen-proposal">
              <span className="specimen-label">{specimens.proposalLabel}</span>
              <div className={`proposal-document ${item.className}`}>
                <h4>{specimens.proposalTitle}</h4>
                <p><InlineMarkup text={specimens.proposalIntro} /></p>
                {specimens.proposalSections.map((section) => (
                  <section className="proposal-section" key={section.title}>
                    <h5>{section.title}</h5>
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph}><InlineMarkup text={paragraph} /></p>
                    ))}
                  </section>
                ))}
              </div>
            </article>
          </div>

          <div className="weight-family">
            <div className="weight-heading">
              <span>{siteContent.familyStory.weightFamily.heading}</span>
              <span>{item.weights.length} {siteContent.familyStory.weightFamily.stylesSuffix}</span>
            </div>
            {item.weights.map((itemWeight) => (
              <div className="weight-row" key={itemWeight}>
                <span>{itemWeight}</span>
                <span>{weightNames[itemWeight]}</span>
                <FontText family={item} style={{ fontWeight: itemWeight }}>{siteContent.familyStory.weightFamily.regularSample}</FontText>
              </div>
            ))}
          </div>
        </section>
      ))}

      <section className="glyph-section">
        <p className="section-no">{siteContent.characterSet.sectionNumber}</p>
        <div className="glyph-wall">
          <p className="font-edge">{siteContent.characterSet.edgeTranscript}</p>
          <p className="font-edge">{siteContent.characterSet.edgeSequence}</p>
          <p className="font-sprout"><em>{siteContent.characterSet.sproutSpecies}</em>{siteContent.characterSet.sproutBetween} <em>{siteContent.characterSet.sproutGene}</em> {siteContent.characterSet.sproutTail}</p>
          <p className="font-appendard">{siteContent.characterSet.appendard}</p>
          <p className="font-jaha">{siteContent.characterSet.jaha}</p>
        </div>
      </section>

      <section className="download-section" id="download">
        <div className="download-heading">
          <p className="section-no">{siteContent.download.sectionNumber}</p>
          <h2>{siteContent.download.titleLines[0]}<br />{siteContent.download.titleLines[1]}</h2>
          <p>{siteContent.download.copy}</p>
        </div>
        <div className="download-list">
          {families.map((item, index) => (
            <article key={item.id} style={{ "--accent": item.accent } as CSSProperties}>
              <span className="download-index">0{index + 1}</span>
              <div>
                <h3 className={item.className}>{item.displayName}</h3>
                <p>{item.name} · {siteContent.download.format} · {item.weights.length * 2} {siteContent.download.stylesLabel}</p>
              </div>
              <a href={item.download} download aria-label={`${item.name} ${siteContent.download.ariaSuffix}`}>
                <span>{siteContent.download.button}</span><b>↓</b>
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="credits">
        <p className="section-no">{siteContent.credits.sectionNumber}</p>
        <div className="credit-grid">
          <p>
            {siteContent.credits.copy.beforeLab}
            <a className="credit-copy-link" href={siteContent.credits.copy.lab.href} target="_blank" rel="noreferrer">
              {siteContent.credits.copy.lab.label}
            </a>
            {siteContent.credits.copy.afterLab}
          </p>
          <div>
            {siteContent.credits.links.map((link) => (
              <a href={link.href} key={link.href} target="_blank" rel="noreferrer">{link.label}</a>
            ))}
          </div>
        </div>
      </section>

      <footer>
        <a className="wordmark" href="#top">{siteMetadata.title}</a>
        <p className="font-edge footer-meta">{siteContent.footer.tagline}</p>
        <a className="font-edge footer-meta" href="#top">{siteContent.footer.backToTop}</a>
      </footer>
    </main>
  );
}
