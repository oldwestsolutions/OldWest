'use client'

import { Layout, Typography, Divider, Space, Card, Row, Col, Tag, Button } from 'antd'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { ArrowRightOutlined, FileTextOutlined } from '@ant-design/icons'

const { Header, Content, Footer } = Layout
const { Title, Paragraph, Text } = Typography

const SECTION_COLORS: Record<number, { tag: string; bg: string; border: string }> = {
  0: { tag: '#2f5fd7', bg: '#eef3ff', border: '#dbe4ff' },
  1: { tag: '#7a5b32', bg: '#fff8ea', border: '#d6be9a' },
  2: { tag: '#0891b2', bg: '#f0f9ff', border: '#bae6fd' },
  3: { tag: '#16a34a', bg: '#f0fdf4', border: '#bbf7d0' },
  4: { tag: '#ca8a04', bg: '#fefce8', border: '#fde68a' },
  5: { tag: '#7c3aed', bg: '#f5f3ff', border: '#ddd6fe' },
  6: { tag: '#dc2626', bg: '#fff5f5', border: '#fecaca' },
  7: { tag: '#0f172a', bg: '#f8fafc', border: '#e2e8f0' },
  8: { tag: '#2f5fd7', bg: '#eef3ff', border: '#dbe4ff' },
}

const sections = [
  {
    id: 'overview',
    tag: 'Executive Overview',
    title: 'The Fiber-as-Infrastructure Thesis',
    body: [
      'Oldwest.net is a decentralized content delivery network brokerage, internet identity governance layer, protected digital asset hosting platform, programmatic advertising substrate, connected-property registry, and subscriber dividend instrument — operated by Old West Solutions LLC under patent docket OWS-OLDWESTNET-MASTER-001 and implemented in commercial partnership with Lumen Technologies for the underlying delivery substrate, settled on the Solana blockchain in USDC through Coinbase and Circle Wallet infrastructure.',
      'The thesis is straightforward. A regional fiber operator that competes on price against national carriers eventually loses. A regional fiber operator that competes on a combined posture of fiber, data, residual, franchise alignment, identity governance, and asset protection is offering something the national carriers structurally cannot replicate — because replicating it would require them to share gas-fee revenue with their subscribers and franchise revenue with their cities, both of which are changes the national carriers are constitutionally incapable of making at the speed a regional operator can.',
      'The window in which this combined posture is uncontested is the window in which Old West Solutions can build a moat that lasts past the window\'s closing.',
    ],
  },
  {
    id: 'part1',
    tag: 'Part One',
    title: 'Fiber as the Economic Foundation',
    body: [
      'In ordinary fiber economics, a residential subscriber generates roughly seventy to one hundred and twenty dollars per month in revenue and consumes some portion of that in service cost, with the network operator capturing the difference. In the Oldwest model, the same subscriber generates the same monthly revenue and additionally produces a measurable amount of CDN traffic, a small portion of which is associated with DeFi activity that pays gas fees on Layer 2 networks.',
      'A defined fraction of those gas fees, after a municipal toll and an operator cut, is returned to the subscriber as a residual credit on the monthly bill or as a USDC payment to a wallet of their choosing. The residual is small in absolute terms — on the order of a few dollars per month for a typical residential connection and meaningfully more for a heavily-used commercial connection — but it changes the perception of the relationship. The subscriber is not a customer being billed; the subscriber is a participant being paid.',
      'Commercial subscribers receive the same residual mechanism with materially larger numbers, and they additionally receive access to the Oldwest BigData product. The combination of dedicated fiber, a managed analytical warehouse, and a residual-revenue stream tied to the digital activity their network produces is a posture no national carrier offers, and it is the posture this document is designed to make implementable.',
    ],
  },
  {
    id: 'part2',
    tag: 'Part Two',
    title: 'Oldwest BigData — The Managed BigQuery Surface',
    body: [
      'The BigQuery offering is sold to commercial fiber customers as a managed analytical surface for their own data, with the company\'s published civic and infrastructure datasets available alongside the customer\'s own tables for joined analysis.',
      'Each customer receives a dedicated BigQuery project with isolated billing, isolated identity, and isolated network access through Google Cloud\'s Private Service Connect, terminated on the customer\'s Oldwest fiber circuit so that data never traverses the public internet between the customer\'s premises and the warehouse.',
      'A representative pricing posture runs from a base tier at fifteen hundred dollars per month, through a professional tier at five thousand dollars per month with the gas-arbitrage feed as a real-time stream, to an enterprise tier negotiated individually. The pricing aligns the company\'s margin with the customer\'s actual usage.',
      'Representative case: A regional grocery chain with sixty-two stores joins at the professional tier. Within ninety days, its data team is running joined analyses between point-of-sale data and Oldwest\'s published cost-of-living index, identifying stores where a five percent price increase on staple goods would not measurably reduce volume. The customer captures roughly four hundred thousand dollars of incremental annual margin. Oldwest captures two hundred and fifty thousand dollars of annual revenue. The customer renews.',
    ],
  },
  {
    id: 'part3',
    tag: 'Part Three',
    title: 'The CDN-Gas Residual Mechanism',
    body: [
      'The residual mechanism rests on a chain of measurements and accountings that must be precise if the system is to be defensible. The company\'s CDN-and-edge layer carries traffic on behalf of content publishers, application platforms, and DeFi protocols. A measurable subset of that traffic is associated with on-chain activity on Solana and other Layer 2 networks, where the underlying transactions pay gas fees.',
      'The company has a commercial relationship with a small number of DeFi protocol operators and content delivery counterparties under which a defined share of the gas fees produced by traffic carried over the company\'s network is returned to the company as a revenue-share payment. From that revenue share, the company deducts an operator margin, deducts a municipal toll, and returns the remainder to the fiber subscribers whose circuits carried the traffic, weighted by the share each subscriber\'s circuit contributed to the relevant traffic flow.',
      'Traffic measurement is performed at the company\'s points of presence, where every packet is sampled, tagged with the subscriber circuit it traversed, and recorded with an integrity hash. Gas-fee accounting is performed against publicly observable on-chain data, with the company\'s revenue-share counterparties cosigning periodic reconciliation reports.',
      'Worked example: During a representative hour, the network carries traffic producing one hundred dollars of gross gas-fee revenue. The operator retains forty dollars. Twelve dollars are remitted to the relevant municipalities. Forty-eight dollars are distributed to subscribers. A residential subscriber whose circuit carried one one-hundred-thousandth of the relevant traffic receives forty-eight cents in that hour — accumulating to between two and twelve dollars per month depending on usage patterns.',
    ],
  },
  {
    id: 'part4',
    tag: 'Part Four',
    title: 'The Municipal Toll Protocol',
    body: [
      'Every gas-fee revenue-share payment received by the company is parsed against a geo-tagging table that maps the originating traffic to the municipalities through which the underlying fiber and last-mile access runs. The toll percentage applicable to that municipality, negotiated under a standard franchise agreement, is computed and remitted to the municipality in the form the municipality prefers — either fiat by ACH or USDC to a treasury wallet.',
      'The structure deliberately mimics a toll, with the toll levied on the digital activity rather than on the physical movement of vehicles. The gas fee is paid by the on-chain transaction, the toll is deducted automatically by the smart contract, the remainder is distributed according to the residual protocol, and every party receives a verifiable receipt.',
      'The toll percentage is set by a franchise agreement between the company and the municipality — the same legal instrument that governs every cable-television franchise in the country. The smart contract is the implementation of the agreement, not the source of the obligation. The role of the chain is to make the implementation auditable in real time.',
      'Representative case: The City of Plano enters a fiber franchise agreement with Old West Solutions. The agreement specifies a five percent toll on gas-fee revenue produced by traffic terminating within the city, paid quarterly by ACH with monthly on-chain settlement reports. Over a representative quarter, the toll generates approximately forty-three thousand dollars of revenue for the city — from a class of digital activity currently entirely outside the city\'s revenue base.',
    ],
  },
  {
    id: 'part5',
    tag: 'Part Five',
    title: 'The Solana Settlement Program',
    body: [
      'The settlement program is deployed on Solana, written in Rust using the Anchor framework. It is composed of four logical components: a settlement-reporting component accepting signed reconciliation reports; a percentage-enforcement component splitting gross revenue into operator margin, municipal toll, and residual pool; a distribution component executing the corresponding transfers; and a per-subscriber accounting component recording each subscriber\'s claim on the residual pool as a Merkle root.',
      'The Merkle-root mechanism keeps the on-chain footprint small — which keeps the gas cost of the protocol modest — while preserving auditability. The company computes, off-chain and in the warehouse, the exact share of the residual pool owed to each subscriber for the epoch. It constructs a Merkle tree whose leaves are the individual subscriber claims, computes the root, and submits only the root to the smart contract. Any subscriber can request a Merkle proof from the company\'s API, verify it against the on-chain root, and confirm their claim is correctly included.',
      'Settlement channels: The default path is a billing credit aggregated monthly. The alternative path is a direct USDC payment to a Circle Wallet registered by the subscriber. Configuration parameters — percentages, geo-attribution, counterparty addresses — are modifiable only through a multi-signature governance procedure requiring the operator, an independent auditor, and a representative of the affected municipalities.',
    ],
  },
  {
    id: 'part6',
    tag: 'Part Six',
    title: 'Identity Governance — The Trust Layer',
    body: [
      'The proliferation of generative artificial intelligence has rendered the production of plausible synthetic text, voice, image, and video effectively costless. Any online interaction in which the counterparty\'s identity is not cryptographically attested must now be presumed to be potentially synthetic. The economic and social consequences are pervasive: commercial transactions are subject to impersonation fraud at scale; consumer reviews are subject to manufacture by automated systems; relationships conducted at distance are subject to displacement by synthetic counterparties.',
      'Oldwest.net provides the attestation infrastructure. Natural persons register under a documented verification procedure presenting government-issued credentials and matching biometrics. Operating businesses present registration documents and beneficial ownership disclosures, with beneficial owners above threshold percentages completing the natural-person workflow, such that a registered business is reachable in the network\'s identity graph through the verified natural persons who control it.',
      'Case study (commercial): A small business owner contemplates a wholesale purchase from an online counterparty. Under Oldwest.net, the counterparty\'s website carries an Oldwest attestation badge. The owner\'s browser retrieves the attestation, verifies the signature, and displays a confirmation that the website is operated by a verified business at the commercial registration tier.',
      'Case study (personal): An individual receives a video call from a purported family member requesting an urgent funds transfer — a convincing synthetic reproduction. Under Oldwest.net, the family member is registered at the basic tier, with communication endpoints bound to the registered identity. The individual\'s client retrieves the attestation associated with the inbound call and either confirms the call originates from the registered device or flags the absence of attestation.',
    ],
  },
  {
    id: 'part7',
    tag: 'Part Seven',
    title: 'Connected Property Registry',
    body: [
      'The connected-property registry maintains, on Solana, a tamper-evident record of internet-connected personal property registered by natural persons and businesses. Each entry comprises the registrant\'s verified identity, a description of the item, a set of network-observable signals, and an ownership-history record updated upon voluntary transfers.',
      'Network-observable signals include the item\'s MAC address, hardware-cryptographic attestation values where supported, characteristic patterns of network behavior, and vendor-supplied tracking identifiers exposed under vendor cooperation. Signals are recorded in a privacy-preserving form permitting monitoring without exposing underlying values to non-recovery participants.',
      'When a registrant reports a registered item lost or stolen, the network operator activates monitoring across the Lumen CDN infrastructure and other supply-side participants. Network participants whose infrastructure detected the relevant signals receive a recovery residual paid in USDC. Good-faith bystanders who report sightings receive a bystander residual upon successful recovery.',
      'Case study: A professional\'s laptop is stolen from a hotel room. Upon the theft report, signals are activated. Within days, an Oldwest-participating edge node observes the device signals over a residential broadband connection. The professional and law enforcement are notified with cryptographic evidence — a chain-of-custody record confirming the scope of exposure from the Solana registry and tamper-evident access logs.',
    ],
  },
  {
    id: 'part8',
    tag: 'Part Eight',
    title: 'The Subscriber Dividend Bond — Banking Structure',
    body: [
      'The subscriber-dividend instrument converts a subscriber\'s ordinary residual entitlement into a registered income-bearing security. It has a defined principal amount, a coupon rate or coupon-determination formula, a defined maturity or perpetual structure, and is offered pursuant to a registration statement filed with the SEC or an applicable exemption from registration.',
      'The banking structure: The instrument is issued by a special purpose vehicle organized as a bankruptcy-remote Delaware statutory trust, wholly owned by Old West Solutions LLC. The SPV\'s organizational documents prohibit engagement in any business other than issuance and administration of the instrument. The instrument is issued under an indenture executed with a chartered trust company qualified under the Trust Indenture Act of 1939.',
      'Coupon determination: Let R denote the aggregate residual pool contribution attributable during the relevant coupon period, net of administrative expenses. Let P denote the aggregate principal amount outstanding on the record date. The coupon rate for the period is R divided by P, expressed as an annualized percentage. Settlement is by ACH, wire, or USDC transfer to Circle Wallet addresses. USDC balances pending conversion are held in custody at Coinbase Prime as qualified custodian.',
      'Securities compliance: The initial offering is structured under Regulation A+ Tier 2, permitting offerings up to $75 million per twelve-month period. Anti-money-laundering and Know-Your-Customer obligations are discharged through integration with the Oldwest.net identity governance subsystem — no instrument may be purchased except by a holder whose identity has been verified at the appropriate registration tier.',
    ],
  },
  {
    id: 'part9',
    tag: 'Part Nine',
    title: 'The End State and Why It Is Worth Building',
    body: [
      'A subscriber who chooses Oldwest receives a fiber connection at a competitive rate, a residual-revenue stream tied to the digital activity their connection helps carry, a dividend bond that pays a coupon funded by that residual, an identity attestation that distinguishes them from synthetic counterparts, and — if a commercial customer — a managed analytical environment giving direct visibility into civic and infrastructure data.',
      'A municipality that grants Oldwest a franchise receives a transparent, auditable share of a class of digital revenue currently outside its tax base entirely. A DeFi protocol or content publisher that contracts with Oldwest for delivery receives a network whose subscribers are economically aligned with the protocol\'s success.',
      'The architecture is designed so that no individual component depends on speculative belief. The fiber business is a fiber business. The data product is a data product. The residual mechanism is a revenue-share mechanism operating under commercial agreements with identifiable counterparties. The toll protocol is a franchise mechanism operating under standard municipal agreements. The dividend bond is a registered security administered by regulated institutions. None of the layers requires a token, a speculative monetary primitive, or a regulatory posture more aggressive than the one a competently advised fiber operator would already be willing to take.',
      'Build the network. Light the customers. Publish the data. Pay the residuals. Remit the tolls. Repeat in the next metro.',
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
    <Layout style={{ minHeight: '100vh', background: '#f8fafc' }}>
      <Header style={{
        background: 'rgba(248,250,252,0.92)',
        backdropFilter: 'blur(8px)',
        borderBottom: '1px solid #e5eaf1',
        padding: '0 32px',
        height: 72,
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        <Space size={12}>
          <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{ width: 34, height: 34, borderRadius: 10, background: 'linear-gradient(135deg,#2f5fd7,#4f7df0)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 8px 20px rgba(47,95,215,0.24)' }}>
              <Text style={{ color: '#fff', fontWeight: 800, fontSize: 12 }}>OW</Text>
            </div>
            <Text style={{ color: '#0f172a', fontWeight: 700, fontSize: 17 }}>Oldwest.net</Text>
          </Link>
        </Space>
        <Space size={20}>
          {[['← Home', '/'], ['Treasury', '/treasury'], ['Security', '/security'], ['Sign in', '/login']].map(([l, h]) => (
            <Link key={h} href={h} style={{ color: '#334155', fontSize: 14, textDecoration: 'none' }}>{l}</Link>
          ))}
        </Space>
      </Header>

      <Content>
        {/* ── HERO ── */}
        <section style={{
          padding: isMobile ? '60px 24px' : '80px 48px',
          background: 'linear-gradient(145deg, #eef3ff 0%, #fff8ea 55%, #f8fafc 100%)',
          borderBottom: '1px solid #e2e8f0',
        }}>
          <Row justify="center">
            <Col xs={24} xl={18}>
              <Tag style={{ borderRadius: 999, background: '#eef3ff', borderColor: '#dbe4ff', color: '#2f5fd7', padding: '4px 14px', fontWeight: 600, marginBottom: 20 }}>
                Patent Application · Docket OWS-OLDWESTNET-MASTER-001
              </Tag>
              <Title style={{ color: '#0f172a', fontSize: isMobile ? 36 : 58, fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1.05, marginBottom: 20 }}>
                The Oldwest.net<br />Technical Whitepaper
              </Title>
              <Paragraph style={{ color: '#475569', fontSize: isMobile ? 16 : 19, maxWidth: 780, lineHeight: 1.8, marginBottom: 28 }}>
                The Fiber-as-Infrastructure Thesis with a BigQuery Data Product, a CDN-Gas Residual for Subscribers, a Municipal Toll Protocol, and a Subscriber Dividend Bond — a graduate-level blueprint for the internet's trust layer.
              </Paragraph>
              <Space wrap size={14}>
                <Button type="primary" href="/create-account" icon={<ArrowRightOutlined />}
                  style={{ borderRadius: 12, height: 46, background: '#2f5fd7', borderColor: '#2f5fd7', fontWeight: 700, boxShadow: '0 12px 24px rgba(47,95,215,0.28)' }}>
                  Join the network
                </Button>
                <Button href="/treasury"
                  style={{ borderRadius: 12, height: 46, borderColor: '#d6be9a', color: '#7a5b32', fontWeight: 600, background: '#fff8ea' }}>
                  View dividend model
                </Button>
              </Space>
            </Col>
          </Row>
        </section>

        <div style={{ padding: isMobile ? '48px 24px' : '72px 48px', maxWidth: 1100, margin: '0 auto' }}>

          {/* ── REGULATORY CAVEAT ── */}
          <Card bordered style={{ borderRadius: 16, borderColor: '#fde68a', background: '#fefce8', marginBottom: 52 }} bodyStyle={{ padding: 24 }}>
            <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
              <FileTextOutlined style={{ color: '#ca8a04', fontSize: 20, marginTop: 2 }} />
              <div>
                <Text style={{ color: '#92400e', fontWeight: 700, fontSize: 13, letterSpacing: '0.06em', textTransform: 'uppercase', display: 'block', marginBottom: 8 }}>Regulatory Caveat</Text>
                <Text style={{ color: '#78350f', fontSize: 14, lineHeight: 1.7 }}>
                  The subscriber-dividend instrument described herein is structured to constitute a registered or exempt income-bearing security under United States federal and state securities laws. Nothing in this document is legal advice or a securities offering. A securities attorney must review the residual-payment structure before it is offered to any subscriber, and a telecommunications and municipal-law attorney must review the toll structure before any agreement is executed with a city.
                </Text>
              </div>
            </div>
          </Card>

          {/* ── TABLE OF CONTENTS ── */}
          <div style={{ marginBottom: 64 }}>
            <Text style={{ color: '#64748b', fontSize: 12, letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 700, display: 'block', marginBottom: 18 }}>
              Table of Contents
            </Text>
            <Card bordered={false} style={{ borderRadius: 16, background: '#ffffff', boxShadow: '0 4px 20px rgba(15,23,42,0.07)' }} bodyStyle={{ padding: '8px 0' }}>
              {sections.map((s, i) => {
                const c = SECTION_COLORS[i] || SECTION_COLORS[0]
                return (
                  <div key={s.id} style={{ display: 'flex', alignItems: 'center', gap: 16, padding: '14px 24px', borderBottom: i < sections.length - 1 ? '1px solid #f1f5f9' : 'none' }}>
                    <Text style={{ color: '#94a3b8', fontSize: 12, minWidth: 24, fontWeight: 600 }}>{String(i + 1).padStart(2, '0')}</Text>
                    <Tag style={{ borderRadius: 999, background: c.bg, borderColor: c.border, color: c.tag, fontSize: 11, minWidth: 110, textAlign: 'center', fontWeight: 600 }}>{s.tag}</Tag>
                    <Text style={{ color: '#334155', fontSize: 14 }}>{s.title}</Text>
                  </div>
                )
              })}
            </Card>
          </div>

          {/* ── SECTIONS ── */}
          <Space direction="vertical" size={28} style={{ width: '100%' }}>
            {sections.map((section, i) => {
              const c = SECTION_COLORS[i] || SECTION_COLORS[0]
              return (
                <Card
                  key={section.id}
                  bordered
                  style={{ borderRadius: 20, borderColor: c.border, background: '#ffffff', boxShadow: '0 4px 20px rgba(15,23,42,0.06)' }}
                  bodyStyle={{ padding: isMobile ? 24 : 40 }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 24 }}>
                    <Tag style={{ borderRadius: 999, background: c.bg, borderColor: c.border, color: c.tag, padding: '5px 14px', fontWeight: 700, fontSize: 12 }}>
                      {section.tag}
                    </Tag>
                  </div>
                  <Title level={2} style={{ color: '#0f172a', fontSize: isMobile ? 22 : 30, fontWeight: 800, letterSpacing: '-0.025em', marginBottom: 4 }}>
                    {section.title}
                  </Title>
                  <Divider style={{ borderColor: '#f1f5f9', margin: '20px 0 28px' }} />
                  <Space direction="vertical" size={16} style={{ width: '100%' }}>
                    {section.body.map((para, j) => (
                      <Paragraph key={j} style={{ color: '#475569', fontSize: 16, lineHeight: 1.9, margin: 0 }}>
                        {para}
                      </Paragraph>
                    ))}
                  </Space>
                </Card>
              )
            })}
          </Space>

          <Divider style={{ borderColor: '#e2e8f0', margin: '64px 0 32px' }} />
          <div style={{ textAlign: 'center' }}>
            <Text style={{ color: '#94a3b8', fontSize: 13, display: 'block', marginBottom: 6 }}>
              Old West Solutions LLC · Docket OWS-OLDWESTNET-MASTER-001 · Patent Pending
            </Text>
            <Text style={{ color: '#cbd5e1', fontSize: 12 }}>
              Last updated: May 2026 · Version 3.0 · Texas, USA
            </Text>
          </div>
        </div>
      </Content>

      <Footer style={{ background: '#0f172a', padding: isMobile ? '36px 24px 20px' : '52px 48px 24px' }}>
        <Row justify="center">
          <Col xs={24} xl={20}>
            <Row justify="space-between" align="middle" gutter={[16, 16]}>
              <Col>
                <Link href="/" style={{ color: '#ffffff', fontWeight: 700, fontSize: 16, textDecoration: 'none' }}>Oldwest.net</Link>
                <Text style={{ color: '#64748b', fontSize: 12, display: 'block', marginTop: 4 }}>Old West Solutions LLC · Texas, USA</Text>
              </Col>
              <Col>
                <Space size="large">
                  {[['Home', '/'], ['Treasury', '/treasury'], ['Security', '/security'], ['Privacy', '/privacy-policy'], ['Terms', '/terms-of-service']].map(([l, h]) => (
                    <Link key={l} href={h} style={{ color: '#94a3b8', fontSize: 13 }}>{l}</Link>
                  ))}
                </Space>
              </Col>
            </Row>
            <Divider style={{ borderColor: '#1e293b', margin: '24px 0 16px' }} />
            <Text style={{ color: '#64748b', fontSize: 12 }}>© 2026 Old West Solutions LLC · Docket OWS-OLDWESTNET-MASTER-001</Text>
          </Col>
        </Row>
      </Footer>
    </Layout>
  )
}
