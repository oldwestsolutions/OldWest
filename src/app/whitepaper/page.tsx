'use client'

import { Layout, Typography, Divider, Space, Card, Row, Col, Tag } from 'antd'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const { Header, Content } = Layout
const { Title, Paragraph, Text } = Typography

const sections = [
  {
    id: 'overview',
    tag: 'EXECUTIVE OVERVIEW',
    title: 'The Fiber-as-Infrastructure Thesis',
    body: [
      'Oldwest.net is a decentralized content delivery network brokerage, internet identity governance layer, protected digital asset hosting platform, programmatic advertising substrate, connected-property registry, and subscriber dividend instrument — operated by Old West Solutions LLC under patent docket OWS-OLDWESTNET-MASTER-001 and implemented in commercial partnership with Lumen Technologies for the underlying delivery substrate, settled on the Solana blockchain in USDC through Coinbase and Circle Wallet infrastructure.',
      'The thesis is straightforward. A regional fiber operator that competes on price against national carriers eventually loses. A regional fiber operator that competes on a combined posture of fiber, data, residual, franchise alignment, identity governance, and asset protection is offering something the national carriers structurally cannot replicate — because replicating it would require them to share gas-fee revenue with their subscribers and franchise revenue with their cities, both of which are changes the national carriers are constitutionally incapable of making at the speed a regional operator can.',
      'The window in which this combined posture is uncontested is the window in which Old West Solutions can build a moat that lasts past the window\'s closing.'
    ]
  },
  {
    id: 'part1',
    tag: 'PART ONE',
    title: 'Fiber as the Economic Foundation',
    body: [
      'In ordinary fiber economics, a residential subscriber generates roughly seventy to one hundred and twenty dollars per month in revenue and consumes some portion of that in service cost, with the network operator capturing the difference. In the Oldwest model, the same subscriber generates the same monthly revenue and additionally produces a measurable amount of CDN traffic, a small portion of which is associated with DeFi activity that pays gas fees on Layer 2 networks.',
      'A defined fraction of those gas fees, after a municipal toll and an operator cut, is returned to the subscriber as a residual credit on the monthly bill or as a USDC payment to a wallet of their choosing. The residual is small in absolute terms — on the order of a few dollars per month for a typical residential connection and meaningfully more for a heavily-used commercial connection — but it changes the perception of the relationship. The subscriber is not a customer being billed; the subscriber is a participant being paid.',
      'Commercial subscribers receive the same residual mechanism with materially larger numbers, and they additionally receive access to the Oldwest BigData product. The combination of dedicated fiber, a managed analytical warehouse, and a residual-revenue stream tied to the digital activity their network produces is a posture no national carrier offers, and it is the posture this document is designed to make implementable.'
    ]
  },
  {
    id: 'part2',
    tag: 'PART TWO',
    title: 'Oldwest BigData — The Managed BigQuery Surface',
    body: [
      'The BigQuery offering is sold to commercial fiber customers as a managed analytical surface for their own data, with the company\'s published civic and infrastructure datasets available alongside the customer\'s own tables for joined analysis.',
      'Each customer receives a dedicated BigQuery project with isolated billing, isolated identity, and isolated network access through Google Cloud\'s Private Service Connect, terminated on the customer\'s Oldwest fiber circuit so that data never traverses the public internet between the customer\'s premises and the warehouse.',
      'A representative pricing posture runs from a base tier at fifteen hundred dollars per month, through a professional tier at five thousand dollars per month with the gas-arbitrage feed as a real-time stream, to an enterprise tier negotiated individually. The pricing aligns the company\'s margin with the customer\'s actual usage.',
      'Representative case: A regional grocery chain with sixty-two stores joins at the professional tier. Within ninety days, its data team is running joined analyses between point-of-sale data and Oldwest\'s published cost-of-living index, identifying stores where a five percent price increase on staple goods would not measurably reduce volume. The customer captures roughly four hundred thousand dollars of incremental annual margin. Oldwest captures two hundred and fifty thousand dollars of annual revenue. The customer renews.'
    ]
  },
  {
    id: 'part3',
    tag: 'PART THREE',
    title: 'The CDN-Gas Residual Mechanism',
    body: [
      'The residual mechanism rests on a chain of measurements and accountings that must be precise if the system is to be defensible. The company\'s CDN-and-edge layer carries traffic on behalf of content publishers, application platforms, and DeFi protocols. A measurable subset of that traffic is associated with on-chain activity on Solana and other Layer 2 networks, where the underlying transactions pay gas fees.',
      'The company has a commercial relationship with a small number of DeFi protocol operators and content delivery counterparties under which a defined share of the gas fees produced by traffic carried over the company\'s network is returned to the company as a revenue-share payment. From that revenue share, the company deducts an operator margin, deducts a municipal toll, and returns the remainder to the fiber subscribers whose circuits carried the traffic, weighted by the share each subscriber\'s circuit contributed to the relevant traffic flow.',
      'Traffic measurement is performed at the company\'s points of presence, where every packet is sampled, tagged with the subscriber circuit it traversed, and recorded with an integrity hash. Gas-fee accounting is performed against publicly observable on-chain data, with the company\'s revenue-share counterparties cosigning periodic reconciliation reports. Both records are anchored to Solana through the settlement program, which means a subscriber who disputes a residual payment can independently verify the upstream measurements against the on-chain anchor.',
      'Worked example: During a representative hour, the network carries traffic producing one hundred dollars of gross gas-fee revenue. The operator retains forty dollars. Twelve dollars are remitted to the relevant municipalities. Forty-eight dollars are distributed to subscribers. A residential subscriber whose circuit carried one one-hundred-thousandth of the relevant traffic receives forty-eight cents in that hour — accumulating to between two and twelve dollars per month depending on usage patterns.'
    ]
  },
  {
    id: 'part4',
    tag: 'PART FOUR',
    title: 'The Municipal Toll Protocol',
    body: [
      'Every gas-fee revenue-share payment received by the company is parsed against a geo-tagging table that maps the originating traffic to the municipalities through which the underlying fiber and last-mile access runs. The toll percentage applicable to that municipality, negotiated under a standard franchise agreement, is computed and remitted to the municipality in the form the municipality prefers — either fiat by ACH or USDC to a treasury wallet.',
      'The structure deliberately mimics a toll, with the toll levied on the digital activity rather than on the physical movement of vehicles. The gas fee is paid by the on-chain transaction, the toll is deducted automatically by the smart contract, the remainder is distributed according to the residual protocol, and every party receives a verifiable receipt.',
      'The toll percentage is set by a franchise agreement between the company and the municipality — the same legal instrument that governs every cable-television franchise in the country. The smart contract is the implementation of the agreement, not the source of the obligation. The role of the chain is to make the implementation auditable in real time, which is a substantial improvement over the quarterly self-reported franchise-fee filings that govern cable-television revenue today.',
      'Representative case: The City of Plano enters a fiber franchise agreement with Old West Solutions. The agreement specifies a five percent toll on gas-fee revenue produced by traffic terminating within the city, paid quarterly by ACH with monthly on-chain settlement reports. Over a representative quarter, the toll generates approximately forty-three thousand dollars of revenue for the city — from a class of digital activity currently entirely outside the city\'s revenue base.'
    ]
  },
  {
    id: 'part5',
    tag: 'PART FIVE',
    title: 'The Solana Settlement Program',
    body: [
      'The settlement program is deployed on Solana, written in Rust using the Anchor framework. It is composed of four logical components: a settlement-reporting component accepting signed reconciliation reports; a percentage-enforcement component splitting gross revenue into operator margin, municipal toll, and residual pool; a distribution component executing the corresponding transfers; and a per-subscriber accounting component recording each subscriber\'s claim on the residual pool as a Merkle root.',
      'The Merkle-root mechanism keeps the on-chain footprint small — which keeps the gas cost of the protocol modest — while preserving auditability. The company computes, off-chain and in the warehouse, the exact share of the residual pool owed to each subscriber for the epoch. It constructs a Merkle tree whose leaves are the individual subscriber claims, computes the root, and submits only the root to the smart contract. Any subscriber can request a Merkle proof from the company\'s API, verify it against the on-chain root, and confirm their claim is correctly included.',
      'Settlement channels: The default path is a billing credit aggregated monthly and applied as a line item. The alternative path is a direct USDC payment to a Circle Wallet registered by the subscriber. Configuration parameters — percentages, geo-attribution, counterparty addresses — are modifiable only through a multi-signature governance procedure requiring the operator, an independent auditor, and a representative of the affected municipalities.'
    ]
  },
  {
    id: 'part6',
    tag: 'PART SIX',
    title: 'Identity Governance — The Trust Layer',
    body: [
      'The proliferation of generative artificial intelligence has rendered the production of plausible synthetic text, voice, image, and video effectively costless. Any online interaction in which the counterparty\'s identity is not cryptographically attested must now be presumed to be potentially synthetic. The economic and social consequences are pervasive: commercial transactions are subject to impersonation fraud at scale; consumer reviews are subject to manufacture by automated systems; relationships conducted at distance are subject to displacement by synthetic counterparties.',
      'Oldwest.net provides the attestation infrastructure. Natural persons register under a documented verification procedure presenting government-issued credentials and matching biometrics. Operating businesses present registration documents and beneficial ownership disclosures, with beneficial owners above threshold percentages completing the natural-person workflow, such that a registered business is reachable in the network\'s identity graph through the verified natural persons who control it.',
      'The network issues, on request, a cryptographic attestation binding any online interaction to a registered identity. The attestation comprises a signature by the network operator over a tuple including the interaction identifier, the registered identity\'s public key, the verification tier, and the timestamp. A counterparty receiving the attestation verifies the signature against the network operator\'s public key and proceeds with cryptographic confidence.',
      'Case study (commercial): A small business owner contemplates a wholesale purchase from an online counterparty. Under Oldwest.net, the counterparty\'s website carries an Oldwest attestation badge. The owner\'s browser retrieves the attestation, verifies the signature, and displays a confirmation that the website is operated by a verified business at the commercial registration tier, with beneficial ownership disclosed and a registration history of stated duration. Subsequent communications with individuals representing the counterparty are similarly attested.',
      'Case study (personal): An individual receives a video call from a purported family member requesting an urgent funds transfer — a convincing synthetic reproduction. Under Oldwest.net, the family member is registered at the basic tier, with communication endpoints bound to the registered identity. The individual\'s client retrieves the attestation associated with the inbound call and either confirms the call originates from the registered device or flags the absence of attestation regardless of the synthetic content\'s convincingness.'
    ]
  },
  {
    id: 'part7',
    tag: 'PART SEVEN',
    title: 'Connected Property Registry',
    body: [
      'The connected-property registry maintains, on Solana, a tamper-evident record of internet-connected personal property registered by natural persons and businesses. Each entry comprises the registrant\'s verified identity, a description of the item, a set of network-observable signals, and an ownership-history record updated upon voluntary transfers.',
      'Network-observable signals include the item\'s MAC address, hardware-cryptographic attestation values where supported, characteristic patterns of network behavior, and vendor-supplied tracking identifiers exposed under vendor cooperation. Signals are recorded in a privacy-preserving form permitting monitoring without exposing underlying values to non-recovery participants.',
      'When a registrant reports a registered item lost or stolen, the network operator activates monitoring across the Lumen CDN infrastructure and other supply-side participants. When the item surfaces, the registrant and, upon authorization, the relevant law enforcement agency are notified with documented chain-of-custody evidence drawn from the Solana registry and the network\'s tamper-evident access logs.',
      'Network participants whose infrastructure detected the relevant signals receive a recovery residual paid in USDC. Good-faith bystanders who report sightings receive a bystander residual upon successful recovery — the economic alignment prior networks have structurally lacked.',
      'Case study: A professional\'s laptop is stolen from a hotel room. Under Oldwest.net, the laptop was registered upon provisioning. Upon the theft report, signals are activated. Within days the thief reactivates the laptop over a residential broadband connection. An Oldwest-participating edge node observes the signals, the professional and law enforcement are notified with cryptographic evidence, and the laptop is recovered along with the chain-of-custody record confirming the scope of exposure.'
    ]
  },
  {
    id: 'part8',
    tag: 'PART EIGHT',
    title: 'The Subscriber Dividend Bond — Banking Structure',
    body: [
      'The subscriber-dividend instrument converts a subscriber\'s ordinary residual entitlement into a registered income-bearing security. It has a defined principal amount, a coupon rate or coupon-determination formula, a defined maturity or perpetual structure, and is offered pursuant to a registration statement filed with the SEC or an applicable exemption from registration.',
      'The banking structure: The instrument is issued by a special purpose vehicle organized as a bankruptcy-remote Delaware statutory trust, wholly owned by Old West Solutions LLC. The SPV\'s organizational documents prohibit engagement in any business other than issuance and administration of the instrument. The instrument is issued under an indenture executed with a chartered trust company qualified under the Trust Indenture Act of 1939. The indenture trustee holds a security interest in the residual pool contributions payable to the Issuer, perfected through control over the Issuer\'s reserve account at the paying agent bank.',
      'Coupon determination: Let R denote the aggregate residual pool contribution attributable during the relevant coupon period to all subscribers who have elected the dividend pathway, net of administrative expenses. Let P denote the aggregate principal amount outstanding on the record date. The coupon rate for the period is R divided by P, expressed as an annualized percentage. The payment to each holder is the holder\'s proportional share of R computed in proportion to principal holding relative to P.',
      'Settlement channels: Coupon payments are made by ACH or wire transfer to fiat banking accounts registered by holders, or by USDC transfer to Circle Wallet addresses registered by holders. USDC balances pending conversion or disbursement are held in custody at Coinbase Prime as qualified custodian.',
      'Securities compliance: The initial offering is structured under Regulation A+ Tier 2, permitting offerings up to $75 million per twelve-month period with limited secondary trading. Subsequent offerings may proceed under registered S-1 procedures. Anti-money-laundering and Know-Your-Customer obligations are discharged through integration with the Oldwest.net identity governance subsystem — no instrument may be purchased except by a holder whose identity has been verified at the appropriate registration tier.',
      'Tax treatment: The instrument is structured to qualify as debt for federal income tax purposes, with periodic coupons treated as ordinary interest income to holders and deductible interest expense to the Issuer subject to applicable IRC Section 163 limitations.'
    ]
  },
  {
    id: 'part9',
    tag: 'PART NINE',
    title: 'The End State and Why It Is Worth Building',
    body: [
      'A subscriber who chooses Oldwest receives a fiber connection at a competitive rate, a residual-revenue stream tied to the digital activity their connection helps carry, a dividend bond that pays a coupon funded by that residual, an identity attestation that distinguishes them from synthetic counterparts, and — if a commercial customer — a managed analytical environment giving direct visibility into civic and infrastructure data. A municipality that grants Oldwest a franchise receives a transparent, auditable share of a class of digital revenue currently outside its tax base entirely. A DeFi protocol or content publisher that contracts with Oldwest for delivery receives a network whose subscribers are economically aligned with the protocol\'s success.',
      'The architecture is designed so that no individual component depends on speculative belief. The fiber business is a fiber business. The data product is a data product. The residual mechanism is a revenue-share mechanism operating under commercial agreements with identifiable counterparties. The toll protocol is a franchise mechanism operating under standard municipal agreements. The smart contract is a settlement mechanism implementing agreements that exist independently of the chain. The dividend bond is a registered security administered by regulated institutions.',
      'None of the layers requires a token, a speculative monetary primitive, or a regulatory posture more aggressive than the one a competently advised fiber operator would already be willing to take.',
      'Build the network. Light the customers. Publish the data. Pay the residuals. Remit the tolls. Repeat in the next metro.'
    ]
  },
]

export default function Whitepaper() {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsHeaderVisible(false)
      } else {
        setIsHeaderVisible(true)
      }
      setLastScrollY(currentScrollY)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  return (
    <Layout style={{ minHeight: '100vh', background: '#000000', color: '#ffffff' }}>
      <Header style={{
        background: '#000000',
        borderBottom: '1px solid #1f1f1f',
        padding: '0 48px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '72px',
        position: 'fixed',
        top: isHeaderVisible ? 0 : -72,
        left: 0, right: 0,
        zIndex: 1000,
        transition: 'top 0.3s ease-in-out'
      }}>
        <Row align="middle" justify="space-between" style={{ width: '100%' }}>
          <Col>
            <Link href="/" style={{ color: '#8c8c8c', fontSize: 14, textDecoration: 'none', transition: 'color 0.3s' }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#ffffff'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#8c8c8c'}
            >
              ← Back to Home
            </Link>
          </Col>
          <Col>
            <Text style={{ color: '#595959', fontSize: 12, letterSpacing: '0.1em' }}>
              OWS-OLDWESTNET-MASTER-001
            </Text>
          </Col>
        </Row>
      </Header>

      <Content style={{ paddingTop: 120, paddingBottom: 80 }}>
        {/* Title Block */}
        <div style={{ padding: isMobile ? '0 24px 80px' : '0 48px 80px', maxWidth: 900, margin: '0 auto' }}>
          <div style={{ marginBottom: 32 }}>
            <Tag style={{ background: '#141414', border: '1px solid #1f1f1f', color: '#8c8c8c', fontSize: 11, letterSpacing: '0.1em', borderRadius: 4 }}>
              PATENT APPLICATION · DOCKET OWS-OLDWESTNET-MASTER-001
            </Tag>
          </div>
          <Title level={1} style={{ color: '#ffffff', marginBottom: 16, fontSize: isMobile ? 36 : 60, fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1.05 }}>
            Oldwest.net<br />Whitepaper
          </Title>
          <Paragraph style={{ color: '#8c8c8c', fontSize: 18, lineHeight: 1.8, marginBottom: 16, maxWidth: 700 }}>
            The Fiber-as-Infrastructure Thesis with a BigQuery Data Product, a CDN-Gas Residual for Subscribers, a Municipal Toll Protocol, and a Subscriber Dividend Bond.
          </Paragraph>
          <Text style={{ color: '#595959', fontSize: 13 }}>
            Applicant: Old West Solutions LLC · Texas, USA · Patent Pending
          </Text>
          <Divider style={{ borderColor: '#1f1f1f', margin: '40px 0' }} />

          {/* Regulatory Caveat */}
          <Card bordered style={{ background: '#0a0a0a', borderColor: '#1f1f1f', borderRadius: 12, marginBottom: 48 }} bodyStyle={{ padding: 28 }}>
            <Text style={{ color: '#595959', fontSize: 12, letterSpacing: '0.08em', textTransform: 'uppercase', display: 'block', marginBottom: 12, fontWeight: 700 }}>
              Regulatory Caveat
            </Text>
            <Paragraph style={{ color: '#8c8c8c', fontSize: 13, lineHeight: 1.8, margin: 0 }}>
              The subscriber-dividend instrument described herein is structured to constitute a registered or exempt income-bearing security under United States federal and state securities laws. Nothing in this document is legal advice or a securities offering. The municipal toll mechanism touches franchise law and potentially federal telecommunications law. A securities attorney must review the residual-payment structure before it is offered to any subscriber, and a telecommunications and municipal-law attorney must review the toll structure before any agreement is executed with a city.
            </Paragraph>
          </Card>

          {/* Table of Contents */}
          <div style={{ marginBottom: 64 }}>
            <Text style={{ color: '#595959', fontSize: 12, letterSpacing: '0.1em', textTransform: 'uppercase', display: 'block', marginBottom: 20, fontWeight: 700 }}>
              Table of Contents
            </Text>
            <Space direction="vertical" size="small" style={{ width: '100%' }}>
              {sections.map((s, i) => (
                <div key={s.id} style={{ display: 'flex', gap: 16, padding: '10px 0', borderBottom: '1px solid #1f1f1f' }}>
                  <Text style={{ color: '#2f2f2f', fontSize: 13, minWidth: 28 }}>{String(i + 1).padStart(2, '0')}</Text>
                  <Text style={{ color: '#595959', fontSize: 11, letterSpacing: '0.08em', minWidth: 120 }}>{s.tag}</Text>
                  <Text style={{ color: '#8c8c8c', fontSize: 13 }}>{s.title}</Text>
                </div>
              ))}
            </Space>
          </div>
        </div>

        {/* Sections */}
        <div style={{ padding: isMobile ? '0 24px' : '0 48px', maxWidth: 900, margin: '0 auto' }}>
          <Space direction="vertical" size={48} style={{ width: '100%' }}>
            {sections.map((section, i) => (
              <Card
                key={section.id}
                bordered
                style={{ background: '#0a0a0a', borderColor: '#1f1f1f', borderRadius: 12 }}
                bodyStyle={{ padding: isMobile ? 24 : 40 }}
              >
                <div style={{ marginBottom: 24 }}>
                  <Text style={{ fontSize: 11, color: '#595959', letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 700, display: 'block', marginBottom: 8 }}>
                    {section.tag}
                  </Text>
                  <Title level={2} style={{ color: '#ffffff', fontSize: isMobile ? 22 : 28, fontWeight: 700, marginBottom: 0, letterSpacing: '-0.02em' }}>
                    {section.title}
                  </Title>
                </div>
                <Divider style={{ borderColor: '#1f1f1f', margin: '0 0 28px 0' }} />
                <Space direction="vertical" size="middle" style={{ width: '100%' }}>
                  {section.body.map((para, j) => (
                    <Paragraph key={j} style={{ color: '#8c8c8c', fontSize: 15, lineHeight: 1.85, margin: 0 }}>
                      {para}
                    </Paragraph>
                  ))}
                </Space>
              </Card>
            ))}
          </Space>

          <Divider style={{ borderColor: '#1f1f1f', margin: '64px 0 32px 0' }} />

          <div style={{ textAlign: 'center' }}>
            <Text style={{ color: '#595959', fontSize: 13, display: 'block', marginBottom: 8 }}>
              Old West Solutions LLC · Docket OWS-OLDWESTNET-MASTER-001 · Patent Pending
            </Text>
            <Text style={{ color: '#2f2f2f', fontSize: 11 }}>
              Last updated: May 2026 · Version 3.0 · Texas, USA
            </Text>
          </div>
        </div>
      </Content>
    </Layout>
  )
}
