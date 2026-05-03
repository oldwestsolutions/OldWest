'use client'

import { Layout, Typography, Row, Col, Space, Button } from 'antd'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { ArrowRightOutlined, ArrowDownOutlined, FileTextOutlined } from '@ant-design/icons'

const { Header, Content, Footer } = Layout
const { Title, Paragraph, Text } = Typography

const PALETTE = {
  cream: '#f0e6d2',
  tan: '#e8dcc4',
  tanDeep: '#d6c4a4',
  parchment: '#f5ede0',
  brown: '#3d2817',
  brownMid: '#5a3e1f',
  brownLight: '#8b6f47',
  bronze: '#b8985a',
  black: '#0a0908',
  charcoal: '#1a1614',
}

const sections = [
  {
    num: 'I',
    tag: 'Part One',
    title: 'Fiber as the Economic Foundation',
    pull: 'The subscriber is not a customer being billed; the subscriber is a participant being paid.',
    body: [
      'In ordinary fiber economics, a residential subscriber generates roughly seventy to one hundred and twenty dollars per month in revenue and consumes some portion of that in service cost, with the network operator capturing the difference. In the Oldwest model, the same subscriber generates the same monthly revenue and additionally produces a measurable amount of CDN traffic, a small portion of which is associated with DeFi activity that pays gas fees on Layer 2 networks.',
      'A defined fraction of those gas fees, after a municipal toll and an operator cut, is returned to the subscriber as a residual credit on the monthly bill or as a USDC payment to a wallet of their choosing. The residual is small in absolute terms — on the order of a few dollars per month for a typical residential connection and meaningfully more for a heavily-used commercial connection — but it changes the perception of the relationship.',
      'Commercial subscribers receive the same residual mechanism with materially larger numbers, and they additionally receive access to the Oldwest BigData product. The combination of dedicated fiber, a managed analytical warehouse, and a residual-revenue stream tied to the digital activity their network produces is a posture no national carrier offers.',
    ],
  },
  {
    num: 'II',
    tag: 'Part Two',
    title: 'Oldwest BigData — The Managed BigQuery Surface',
    pull: 'Pricing aligns the company\'s margin with the customer\'s actual usage, not with a flat per-seat fee.',
    body: [
      'The BigQuery offering is sold to commercial fiber customers as a managed analytical surface for their own data, with the company\'s published civic and infrastructure datasets available alongside the customer\'s own tables for joined analysis.',
      'Each customer receives a dedicated BigQuery project with isolated billing, isolated identity, and isolated network access through Google Cloud\'s Private Service Connect, terminated on the customer\'s Oldwest fiber circuit so that data never traverses the public internet between the customer\'s premises and the warehouse.',
      'A representative pricing posture runs from a base tier at fifteen hundred dollars per month, through a professional tier at five thousand dollars per month with the gas-arbitrage feed as a real-time stream, to an enterprise tier negotiated individually.',
      'Representative case: A regional grocery chain with sixty-two stores joins at the professional tier. Within ninety days, its data team is running joined analyses between point-of-sale data and Oldwest\'s published cost-of-living index. The customer captures roughly four hundred thousand dollars of incremental annual margin. Oldwest captures two hundred and fifty thousand dollars of annual revenue. The customer renews.',
    ],
  },
  {
    num: 'III',
    tag: 'Part Three',
    title: 'The CDN-Gas Residual Mechanism',
    pull: 'A subscriber who disputes a residual payment can independently verify the upstream measurements against the on-chain anchor.',
    body: [
      'The residual mechanism rests on a chain of measurements and accountings that must be precise if the system is to be defensible. The company\'s CDN-and-edge layer carries traffic on behalf of content publishers, application platforms, and DeFi protocols. A measurable subset of that traffic is associated with on-chain activity on Solana and other Layer 2 networks, where the underlying transactions pay gas fees.',
      'The company has a commercial relationship with a small number of DeFi protocol operators and content delivery counterparties under which a defined share of the gas fees produced by traffic carried over the company\'s network is returned to the company as a revenue-share payment. From that revenue share, the company deducts an operator margin, deducts a municipal toll, and returns the remainder to the fiber subscribers whose circuits carried the traffic, weighted by the share each subscriber\'s circuit contributed to the relevant traffic flow.',
      'Worked example: During a representative hour, the network carries traffic producing one hundred dollars of gross gas-fee revenue. The operator retains forty dollars. Twelve dollars are remitted to the relevant municipalities. Forty-eight dollars are distributed to subscribers. A residential subscriber whose circuit carried one one-hundred-thousandth of the relevant traffic receives forty-eight cents in that hour — accumulating to between two and twelve dollars per month.',
    ],
  },
  {
    num: 'IV',
    tag: 'Part Four',
    title: 'The Municipal Toll Protocol',
    pull: 'The smart contract is the implementation of the agreement, not the source of the obligation.',
    body: [
      'Every gas-fee revenue-share payment received by the company is parsed against a geo-tagging table that maps the originating traffic to the municipalities through which the underlying fiber and last-mile access runs. The toll percentage applicable to that municipality, negotiated under a standard franchise agreement, is computed and remitted automatically.',
      'The structure deliberately mimics a toll, with the toll levied on the digital activity rather than on the physical movement of vehicles. The gas fee is paid by the on-chain transaction, the toll is deducted automatically by the smart contract, the remainder is distributed according to the residual protocol, and every party receives a verifiable receipt.',
      'Representative case: The City of Plano enters a fiber franchise agreement with Old West Solutions. The agreement specifies a five percent toll on gas-fee revenue produced by traffic terminating within the city, paid quarterly by ACH with monthly on-chain settlement reports. Over a representative quarter, the toll generates approximately forty-three thousand dollars of revenue for the city.',
    ],
  },
  {
    num: 'V',
    tag: 'Part Five',
    title: 'The Solana Settlement Program',
    pull: 'Configuration parameters are modifiable only through a multi-signature governance procedure requiring the operator, an independent auditor, and a representative of the affected municipalities.',
    body: [
      'The settlement program is deployed on Solana, written in Rust using the Anchor framework. It is composed of four logical components: a settlement-reporting component accepting signed reconciliation reports; a percentage-enforcement component splitting gross revenue into operator margin, municipal toll, and residual pool; a distribution component executing the corresponding transfers; and a per-subscriber accounting component recording each subscriber\'s claim on the residual pool as a Merkle root.',
      'The Merkle-root mechanism keeps the on-chain footprint small while preserving auditability. The company computes, off-chain and in the warehouse, the exact share of the residual pool owed to each subscriber for the epoch. It constructs a Merkle tree whose leaves are the individual subscriber claims, computes the root, and submits only the root to the smart contract. Any subscriber can request a Merkle proof from the company\'s API, verify it against the on-chain root, and confirm their claim is correctly included.',
      'Settlement channels: The default path is a billing credit aggregated monthly. The alternative path is a direct USDC payment to a Circle Wallet registered by the subscriber.',
    ],
  },
  {
    num: 'VI',
    tag: 'Part Six',
    title: 'Identity Governance — The Trust Layer',
    pull: 'Any online interaction in which the counterparty\'s identity is not cryptographically attested must now be presumed to be potentially synthetic.',
    body: [
      'The proliferation of generative artificial intelligence has rendered the production of plausible synthetic text, voice, image, and video effectively costless. The economic and social consequences are pervasive: commercial transactions are subject to impersonation fraud at scale; consumer reviews are subject to manufacture by automated systems; relationships conducted at distance are subject to displacement by synthetic counterparties.',
      'Oldwest.net provides the attestation infrastructure. Natural persons register under a documented verification procedure presenting government-issued credentials and matching biometrics. Operating businesses present registration documents and beneficial ownership disclosures.',
      'Case study (commercial): A small business owner contemplates a wholesale purchase from an online counterparty. Under Oldwest.net, the counterparty\'s website carries an Oldwest attestation badge. The owner\'s browser retrieves the attestation, verifies the signature, and displays a confirmation that the website is operated by a verified business at the commercial registration tier.',
      'Case study (personal): An individual receives a video call from a purported family member requesting an urgent funds transfer — a convincing synthetic reproduction. Under Oldwest.net, the family member is registered at the basic tier, with communication endpoints bound to the registered identity. The client retrieves the attestation associated with the inbound call and either confirms it originates from the registered device or flags its absence.',
    ],
  },
  {
    num: 'VII',
    tag: 'Part Seven',
    title: 'Connected Property Registry',
    pull: 'Bystanders who report sightings receive a recovery residual upon successful recovery — the economic alignment prior networks have structurally lacked.',
    body: [
      'The connected-property registry maintains, on Solana, a tamper-evident record of internet-connected personal property registered by natural persons and businesses. Each entry comprises the registrant\'s verified identity, a description of the item, a set of network-observable signals, and an ownership-history record updated upon voluntary transfers.',
      'When a registrant reports a registered item lost or stolen, the network operator activates monitoring across the Lumen CDN infrastructure and other supply-side participants. Network participants whose infrastructure detected the relevant signals receive a recovery residual paid in USDC.',
      'Case study: A professional\'s laptop is stolen from a hotel room. Upon the theft report, signals are activated. Within days, an Oldwest-participating edge node observes the device signals over a residential broadband connection. The professional and law enforcement are notified with cryptographic evidence — a chain-of-custody record confirming the scope of exposure from the Solana registry and tamper-evident access logs.',
    ],
  },
  {
    num: 'VIII',
    tag: 'Part Eight',
    title: 'The Subscriber Dividend Bond',
    pull: 'A registered, transferable, senior claim against a defined revenue stream — administered by regulated financial institutions.',
    body: [
      'The subscriber-dividend instrument converts a subscriber\'s ordinary residual entitlement into a registered income-bearing security. It has a defined principal amount, a coupon rate or coupon-determination formula, a defined maturity or perpetual structure, and is offered pursuant to a registration statement filed with the SEC or an applicable exemption from registration.',
      'The banking structure: The instrument is issued by a special purpose vehicle organized as a bankruptcy-remote Delaware statutory trust, wholly owned by Old West Solutions LLC. The instrument is issued under an indenture executed with a chartered trust company qualified under the Trust Indenture Act of 1939.',
      'Coupon determination: Let R denote the aggregate residual pool contribution attributable during the relevant coupon period, net of administrative expenses. Let P denote the aggregate principal amount outstanding on the record date. The coupon rate for the period is R divided by P, expressed as an annualized percentage. Settlement is by ACH, wire, or USDC transfer to Circle Wallet addresses. USDC balances pending conversion are held in custody at Coinbase Prime as qualified custodian.',
      'Securities compliance: The initial offering is structured under Regulation A+ Tier 2, permitting offerings up to $75 million per twelve-month period. Anti-money-laundering and Know-Your-Customer obligations are discharged through integration with the Oldwest.net identity governance subsystem.',
    ],
  },
  {
    num: 'IX',
    tag: 'Part Nine',
    title: 'The End State and Why It Is Worth Building',
    pull: 'Build the network. Light the customers. Publish the data. Pay the residuals. Remit the tolls. Repeat in the next metro.',
    body: [
      'A subscriber who chooses Oldwest receives a fiber connection at a competitive rate, a residual-revenue stream tied to the digital activity their connection helps carry, a dividend bond that pays a coupon funded by that residual, an identity attestation that distinguishes them from synthetic counterparts, and — if a commercial customer — a managed analytical environment giving direct visibility into civic and infrastructure data.',
      'A municipality that grants Oldwest a franchise receives a transparent, auditable share of a class of digital revenue currently outside its tax base entirely. A DeFi protocol or content publisher that contracts with Oldwest for delivery receives a network whose subscribers are economically aligned with the protocol\'s success.',
      'The architecture is designed so that no individual component depends on speculative belief. The fiber business is a fiber business. The data product is a data product. The residual mechanism is a revenue-share mechanism operating under commercial agreements with identifiable counterparties. The toll protocol is a franchise mechanism operating under standard municipal agreements. The dividend bond is a registered security administered by regulated institutions.',
      'None of the layers requires a token, a speculative monetary primitive, or a regulatory posture more aggressive than the one a competently advised fiber operator would already be willing to take.',
    ],
  },
]

export default function Whitepaper() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  return (
    <Layout style={{ minHeight: '100vh', background: PALETTE.parchment }}>
      <style>{`
        html, body { background: ${PALETTE.parchment}; }
        * { scrollbar-width: thin; scrollbar-color: ${PALETTE.brown} ${PALETTE.tan}; }
        *::-webkit-scrollbar { width: 12px; height: 12px; }
        *::-webkit-scrollbar-track { background: ${PALETTE.tan}; }
        *::-webkit-scrollbar-thumb {
          background: linear-gradient(180deg, ${PALETTE.brown} 0%, ${PALETTE.black} 100%);
          border: 2px solid ${PALETTE.tan};
          border-radius: 6px;
        }
        *::-webkit-scrollbar-thumb:hover { background: ${PALETTE.black}; }
        .serif { font-family: 'Cormorant Garamond', 'Playfair Display', Georgia, 'Times New Roman', serif; }
        .mono { font-family: 'JetBrains Mono', 'SF Mono', Menlo, monospace; }
        .grain { position: relative; }
        .grain::before {
          content: '';
          position: absolute; inset: 0;
          background-image: radial-gradient(rgba(58,40,23,0.10) 1px, transparent 1px);
          background-size: 4px 4px;
          opacity: 0.5;
          pointer-events: none;
          mix-blend-mode: multiply;
        }
        .drop-cap::first-letter {
          font-family: 'Cormorant Garamond', 'Playfair Display', Georgia, serif;
          font-size: 5em;
          float: left;
          line-height: 0.85;
          padding-right: 12px;
          padding-top: 6px;
          color: ${PALETTE.brown};
          font-weight: 700;
        }
      `}</style>

      <Header style={{
        background: 'rgba(245, 237, 224, 0.85)',
        backdropFilter: 'blur(14px)',
        borderBottom: `1px solid ${PALETTE.tanDeep}`,
        padding: '0 32px',
        height: 80,
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 14 }}>
          <div style={{ width: 42, height: 42, borderRadius: 4, background: PALETTE.black, border: `1px solid ${PALETTE.bronze}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Text className="serif" style={{ color: PALETTE.bronze, fontWeight: 700, fontSize: 16 }}>OW</Text>
          </div>
          <div>
            <Text className="serif" style={{ color: PALETTE.black, fontWeight: 700, fontSize: 22, display: 'block', lineHeight: 1 }}>Oldwest</Text>
            <Text className="mono" style={{ color: PALETTE.brownLight, fontSize: 9, letterSpacing: '0.22em', textTransform: 'uppercase' }}>Whitepaper · MMXXVI</Text>
          </div>
        </Link>
        <Space size={28}>
          {[['← Home', '/'], ['Treasury', '/treasury'], ['Security', '/security'], ['Sign in', '/login']].map(([l, h]) => (
            <Link key={h} href={h} className="mono" style={{ color: PALETTE.brown, fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', fontWeight: 600 }}>{l}</Link>
          ))}
        </Space>
      </Header>

      <Content>

        {/* ═══════ COVER PAGE ═══════ */}
        <section className="grain" style={{
          minHeight: 'calc(100vh - 80px)',
          background: `
            radial-gradient(ellipse at 20% 30%, rgba(184,152,90,0.22) 0%, transparent 55%),
            radial-gradient(ellipse at 80% 70%, rgba(58,40,23,0.18) 0%, transparent 55%),
            linear-gradient(160deg, ${PALETTE.cream} 0%, ${PALETTE.tan} 60%, ${PALETTE.tanDeep} 100%)
          `,
          padding: isMobile ? '60px 24px' : '80px 64px',
          display: 'flex',
          alignItems: 'center',
        }}>
          <Row justify="center" style={{ width: '100%' }}>
            <Col xs={24} xl={20}>
              <Row gutter={[64, 48]} align="middle">
                <Col xs={24} lg={14}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 28 }}>
                    <div style={{ width: 60, height: 1, background: PALETTE.brown }} />
                    <Text className="mono" style={{ color: PALETTE.brown, fontSize: 11, letterSpacing: '0.28em', textTransform: 'uppercase', fontWeight: 600 }}>
                      Patent Application · OWS-OLDWESTNET-MASTER-001
                    </Text>
                  </div>
                  <Title className="serif" style={{
                    color: PALETTE.black, fontSize: isMobile ? 56 : 110,
                    fontWeight: 700, letterSpacing: '-0.04em', lineHeight: 0.92,
                    margin: 0, marginBottom: 24,
                  }}>
                    The<br /><em style={{ color: PALETTE.brown, fontStyle: 'italic' }}>Whitepaper.</em>
                  </Title>
                  <Paragraph style={{ color: PALETTE.brownMid, fontSize: isMobile ? 17 : 21, lineHeight: 1.75, maxWidth: 600, marginBottom: 40 }}>
                    The Fiber-as-Infrastructure Thesis with a BigQuery Data Product, a CDN-Gas Residual for Subscribers, a Municipal Toll Protocol, and a Subscriber Dividend Bond — a graduate-level blueprint for the internet's trust layer.
                  </Paragraph>
                  <Space size={16} wrap>
                    <Button href="#part-1" icon={<ArrowDownOutlined />} size="large" style={{
                      background: PALETTE.black, borderColor: PALETTE.black, color: PALETTE.cream,
                      borderRadius: 0, height: 56, padding: '0 32px',
                      fontWeight: 700, fontSize: 13, letterSpacing: '0.14em', textTransform: 'uppercase',
                      boxShadow: `0 8px 0 ${PALETTE.brown}`,
                    }}>
                      Begin Reading
                    </Button>
                    <Button href="/create-account" size="large" style={{
                      background: 'transparent', borderColor: PALETTE.black, color: PALETTE.black,
                      borderRadius: 0, height: 56, padding: '0 32px',
                      fontWeight: 700, fontSize: 13, letterSpacing: '0.14em', textTransform: 'uppercase',
                    }}>
                      Open an Account
                    </Button>
                  </Space>
                </Col>

                <Col xs={24} lg={10}>
                  <div style={{
                    background: PALETTE.parchment,
                    border: `2px solid ${PALETTE.brown}`,
                    padding: isMobile ? 28 : 40,
                    boxShadow: `12px 12px 0 ${PALETTE.black}`,
                  }}>
                    <Text className="mono" style={{ color: PALETTE.brown, fontSize: 10, letterSpacing: '0.3em', textTransform: 'uppercase', fontWeight: 700, display: 'block', marginBottom: 20 }}>
                      Table of Contents
                    </Text>
                    <Space direction="vertical" size={0} style={{ width: '100%' }}>
                      {sections.map((s, i) => (
                        <a key={s.num} href={`#part-${i + 1}`} style={{ textDecoration: 'none' }}>
                          <div style={{ display: 'flex', alignItems: 'baseline', gap: 12, padding: '11px 0', borderBottom: i < sections.length - 1 ? `1px dashed ${PALETTE.tanDeep}` : 'none' }}>
                            <Text className="mono" style={{ color: PALETTE.bronze, fontSize: 11, fontWeight: 700, minWidth: 32, letterSpacing: '0.1em' }}>{s.num}</Text>
                            <Text className="serif" style={{ color: PALETTE.black, fontSize: 14, flex: 1 }}>{s.title}</Text>
                          </div>
                        </a>
                      ))}
                    </Space>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </section>


        {/* ═══════ REGULATORY CAVEAT — full page ═══════ */}
        <section className="grain" style={{
          minHeight: '60vh',
          background: `linear-gradient(180deg, ${PALETTE.charcoal} 0%, ${PALETTE.black} 100%)`,
          padding: isMobile ? '80px 24px' : '120px 64px',
          display: 'flex',
          alignItems: 'center',
        }}>
          <Row justify="center" style={{ width: '100%' }}>
            <Col xs={24} xl={18}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 32 }}>
                <div style={{ width: 60, height: 1, background: PALETTE.bronze }} />
                <Text className="mono" style={{ color: PALETTE.bronze, fontSize: 11, letterSpacing: '0.28em', textTransform: 'uppercase', fontWeight: 600 }}>
                  Regulatory Caveat
                </Text>
              </div>
              <FileTextOutlined style={{ color: PALETTE.bronze, fontSize: 36, marginBottom: 20 }} />
              <Title className="serif" style={{
                color: PALETTE.cream, fontSize: isMobile ? 36 : 60,
                fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.025em',
                margin: 0, marginBottom: 28,
              }}>
                Read this <em style={{ color: PALETTE.bronze, fontStyle: 'italic' }}>before</em> you read the rest.
              </Title>
              <Paragraph style={{ color: PALETTE.tan, fontSize: 17, lineHeight: 1.85, maxWidth: 800, fontWeight: 300 }}>
                The subscriber-dividend instrument described herein is structured to constitute a registered or exempt income-bearing security under United States federal and state securities laws. Nothing in this document is legal advice or a securities offering. The municipal toll mechanism touches franchise law and potentially federal telecommunications law. A securities attorney must review the residual-payment structure before it is offered to any subscriber, and a telecommunications and municipal-law attorney must review the toll structure before any agreement is executed with a city.
              </Paragraph>
            </Col>
          </Row>
        </section>


        {/* ═══════ PARTS I — IX ═══════ */}
        {sections.map((section, i) => {
          const isDark = i % 2 === 1
          const bg = isDark
            ? `linear-gradient(180deg, ${PALETTE.brown} 0%, ${PALETTE.charcoal} 100%)`
            : `linear-gradient(180deg, ${i === 0 ? PALETTE.parchment : PALETTE.tan} 0%, ${PALETTE.cream} 100%)`
          const baseColor = isDark ? PALETTE.cream : PALETTE.black
          const subColor = isDark ? PALETTE.tan : PALETTE.brownMid
          const accent = isDark ? PALETTE.bronze : PALETTE.brown
          const lineColor = isDark ? PALETTE.bronze : PALETTE.brown

          return (
            <section
              id={`part-${i + 1}`}
              key={section.num}
              className="grain"
              style={{
                minHeight: '100vh',
                background: bg,
                padding: isMobile ? '80px 24px' : '120px 64px',
                display: 'flex',
                alignItems: 'center',
                borderTop: `1px solid ${isDark ? PALETTE.brown : PALETTE.tanDeep}`,
              }}
            >
              <Row justify="center" style={{ width: '100%' }}>
                <Col xs={24} xl={20}>
                  <Row gutter={[64, 48]}>
                    {/* LEFT — title block */}
                    <Col xs={24} lg={9}>
                      <div style={{ position: 'sticky', top: 120 }}>
                        <Text className="serif" style={{
                          color: accent, fontSize: isMobile ? 90 : 160,
                          fontWeight: 700, letterSpacing: '-0.05em',
                          lineHeight: 0.85, display: 'block',
                          fontStyle: 'italic',
                          opacity: 0.55,
                        }}>
                          {section.num}
                        </Text>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginTop: 16, marginBottom: 20 }}>
                          <div style={{ width: 40, height: 1, background: lineColor }} />
                          <Text className="mono" style={{ color: lineColor, fontSize: 10, letterSpacing: '0.28em', textTransform: 'uppercase', fontWeight: 700 }}>
                            {section.tag}
                          </Text>
                        </div>
                        <Title className="serif" level={2} style={{
                          color: baseColor, fontSize: isMobile ? 32 : 44,
                          fontWeight: 700, letterSpacing: '-0.025em', lineHeight: 1.05,
                          margin: 0,
                        }}>
                          {section.title}
                        </Title>
                      </div>
                    </Col>

                    {/* RIGHT — body */}
                    <Col xs={24} lg={15}>
                      <div style={{
                        borderLeft: `2px solid ${accent}`,
                        paddingLeft: isMobile ? 20 : 40,
                        marginBottom: 36,
                      }}>
                        <Text className="serif" style={{
                          color: baseColor, fontSize: isMobile ? 22 : 30,
                          fontStyle: 'italic', lineHeight: 1.4, fontWeight: 500,
                          display: 'block',
                        }}>
                          "{section.pull}"
                        </Text>
                      </div>

                      <Space direction="vertical" size={24} style={{ width: '100%' }}>
                        {section.body.map((para, j) => (
                          <Paragraph
                            key={j}
                            className={j === 0 ? 'drop-cap' : ''}
                            style={{
                              color: subColor,
                              fontSize: isMobile ? 16 : 18,
                              lineHeight: 1.85,
                              margin: 0,
                              fontWeight: 300,
                              fontFamily: 'Georgia, "Times New Roman", serif',
                            }}>
                            {para}
                          </Paragraph>
                        ))}
                      </Space>

                      <div style={{
                        marginTop: 48,
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        paddingTop: 24,
                        borderTop: `1px dashed ${isDark ? PALETTE.brown : PALETTE.tanDeep}`,
                      }}>
                        <Text className="mono" style={{ color: lineColor, fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase' }}>
                          {String(i + 1).padStart(2, '0')} / {String(sections.length).padStart(2, '0')}
                        </Text>
                        {i < sections.length - 1 && (
                          <Link href={`#part-${i + 2}`} className="mono"
                            style={{ color: accent, fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', fontWeight: 700 }}>
                            Next: {sections[i + 1].title} →
                          </Link>
                        )}
                      </div>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </section>
          )
        })}


        {/* ═══════ COLOPHON / FINAL ═══════ */}
        <section className="grain" style={{
          minHeight: '60vh',
          background: `
            radial-gradient(ellipse at 30% 50%, rgba(184,152,90,0.20) 0%, transparent 60%),
            linear-gradient(135deg, ${PALETTE.black} 0%, ${PALETTE.brown} 100%)
          `,
          padding: isMobile ? '80px 24px' : '120px 64px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
        }}>
          <div style={{ maxWidth: 800 }}>
            <Text className="mono" style={{ color: PALETTE.bronze, fontSize: 11, letterSpacing: '0.3em', textTransform: 'uppercase', display: 'block', marginBottom: 28 }}>
              · Colophon ·
            </Text>
            <Title className="serif" style={{
              color: PALETTE.cream, fontSize: isMobile ? 36 : 60,
              fontWeight: 700, lineHeight: 1.0, letterSpacing: '-0.03em',
              margin: 0, marginBottom: 28,
            }}>
              Build the network.<br />
              <em style={{ color: PALETTE.bronze, fontStyle: 'italic' }}>Repeat in the next metro.</em>
            </Title>
            <Paragraph style={{ color: PALETTE.tan, fontSize: 17, lineHeight: 1.75, marginBottom: 36, fontWeight: 300, fontStyle: 'italic' }}>
              Old West Solutions LLC · Texas, USA · Patent Pending · Docket OWS-OLDWESTNET-MASTER-001 · Version 3.0 · MMXXVI
            </Paragraph>
            <Space size={20} wrap>
              <Button href="/create-account" icon={<ArrowRightOutlined />} size="large" style={{
                background: PALETTE.cream, borderColor: PALETTE.cream, color: PALETTE.black,
                borderRadius: 0, height: 56, padding: '0 32px',
                fontWeight: 800, fontSize: 13, letterSpacing: '0.16em', textTransform: 'uppercase',
                boxShadow: `0 8px 0 ${PALETTE.bronze}`,
              }}>
                Open an Account
              </Button>
              <Button href="/treasury" size="large" style={{
                background: 'transparent', borderColor: PALETTE.cream, color: PALETTE.cream,
                borderRadius: 0, height: 56, padding: '0 32px',
                fontWeight: 700, fontSize: 13, letterSpacing: '0.16em', textTransform: 'uppercase',
                borderWidth: 1.5,
              }}>
                Treasury
              </Button>
            </Space>
          </div>
        </section>
      </Content>

      <Footer style={{ background: PALETTE.black, padding: isMobile ? '52px 24px 28px' : '72px 64px 32px', borderTop: `1px solid ${PALETTE.brown}` }}>
        <Row justify="center">
          <Col xs={24} xl={22}>
            <Row justify="space-between" align="middle" gutter={[16, 24]}>
              <Col>
                <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                  <div style={{ width: 42, height: 42, borderRadius: 4, background: PALETTE.cream, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Text className="serif" style={{ color: PALETTE.black, fontWeight: 700, fontSize: 16 }}>OW</Text>
                  </div>
                  <div>
                    <Text className="serif" style={{ color: PALETTE.cream, fontWeight: 700, fontSize: 22, display: 'block', lineHeight: 1 }}>Oldwest</Text>
                    <Text className="mono" style={{ color: PALETTE.brownLight, fontSize: 9, letterSpacing: '0.22em', textTransform: 'uppercase' }}>Old West Solutions LLC</Text>
                  </div>
                </div>
              </Col>
              <Col>
                <Space size={28} wrap>
                  {[['Home', '/'], ['Treasury', '/treasury'], ['Security', '/security'], ['Privacy', '/privacy-policy'], ['Terms', '/terms-of-service']].map(([l, h]) => (
                    <Link key={l} href={h} className="mono" style={{ color: PALETTE.tan, fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase' }}>{l}</Link>
                  ))}
                </Space>
              </Col>
            </Row>
            <div style={{ marginTop: 32, paddingTop: 20, borderTop: `1px solid ${PALETTE.brown}`, display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
              <Text className="mono" style={{ color: PALETTE.brownLight, fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase' }}>
                © MMXXVI · Old West Solutions LLC
              </Text>
              <Text className="mono" style={{ color: PALETTE.brownLight, fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase' }}>
                Docket OWS-OLDWESTNET-MASTER-001
              </Text>
            </div>
          </Col>
        </Row>
      </Footer>
    </Layout>
  )
}
