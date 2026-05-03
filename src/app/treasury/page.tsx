'use client'

import { Layout, Typography, Row, Col, Space, Button } from 'antd'
import Link from 'next/link'
import {
  LockOutlined, TrophyOutlined, EyeOutlined,
  ArrowRightOutlined, BankOutlined, DollarOutlined, SafetyOutlined,
  ArrowDownOutlined,
} from '@ant-design/icons'
import { useState, useEffect } from 'react'

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

const NAV_LINKS = [['← Home', '/'], ['Whitepaper', '/whitepaper'], ['Security', '/security'], ['Sign in', '/login']]

export default function Treasury() {
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
          <div style={{
            width: 42, height: 42, borderRadius: 4,
            background: PALETTE.black,
            border: `1px solid ${PALETTE.bronze}`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <Text className="serif" style={{ color: PALETTE.bronze, fontWeight: 700, fontSize: 16 }}>OW</Text>
          </div>
          <div>
            <Text className="serif" style={{ color: PALETTE.black, fontWeight: 700, fontSize: 22, display: 'block', lineHeight: 1 }}>Oldwest</Text>
            <Text className="mono" style={{ color: PALETTE.brownLight, fontSize: 9, letterSpacing: '0.22em', textTransform: 'uppercase' }}>Treasury · MMXXVI</Text>
          </div>
        </Link>
        <Space size={28}>
          {NAV_LINKS.map(([l, h]) => (
            <Link key={h} href={h} className="mono" style={{ color: PALETTE.brown, fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', fontWeight: 600 }}>{l}</Link>
          ))}
        </Space>
      </Header>

      <Content>

        {/* ═══════ §01 · TREASURY HERO ═══════ */}
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
            <Col xs={24} xl={22}>
              <Row gutter={[48, 48]} align="middle">
                <Col xs={24} lg={14}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 28 }}>
                    <div style={{ width: 60, height: 1, background: PALETTE.brown }} />
                    <Text className="mono" style={{ color: PALETTE.brown, fontSize: 11, letterSpacing: '0.28em', textTransform: 'uppercase', fontWeight: 600 }}>
                      §01 · The Treasury
                    </Text>
                  </div>
                  <Title className="serif" style={{
                    color: PALETTE.black,
                    fontSize: isMobile ? 52 : 100,
                    fontWeight: 700,
                    letterSpacing: '-0.04em',
                    lineHeight: 0.92,
                    margin: 0,
                    marginBottom: 28,
                  }}>
                    Five<br /><em style={{ color: PALETTE.brown, fontStyle: 'italic' }}>interlocking </em><br />systems.
                  </Title>
                  <Paragraph style={{ color: PALETTE.brownMid, fontSize: isMobile ? 17 : 21, lineHeight: 1.75, maxWidth: 580, marginBottom: 40 }}>
                    Escrow, reputation, paid placement, the subscriber dividend bond, and gas-toll remittance. A financial stack that rewards verified behavior, compensates participants fairly, and remits to municipalities automatically.
                  </Paragraph>
                  <Space size={16} wrap>
                    <Button href="/create-account" icon={<ArrowRightOutlined />} size="large" style={{
                      background: PALETTE.black, borderColor: PALETTE.black, color: PALETTE.cream,
                      borderRadius: 0, height: 56, padding: '0 32px',
                      fontWeight: 700, fontSize: 13, letterSpacing: '0.14em', textTransform: 'uppercase',
                      boxShadow: `0 8px 0 ${PALETTE.brown}`,
                    }}>
                      Open an Account
                    </Button>
                    <Button href="/whitepaper" size="large" style={{
                      background: 'transparent', borderColor: PALETTE.black, color: PALETTE.black,
                      borderRadius: 0, height: 56, padding: '0 32px',
                      fontWeight: 700, fontSize: 13, letterSpacing: '0.14em', textTransform: 'uppercase',
                    }}>
                      Read the Whitepaper
                    </Button>
                  </Space>
                  <div style={{ marginTop: 60, display: 'flex', alignItems: 'center', gap: 8 }}>
                    <ArrowDownOutlined style={{ color: PALETTE.brownLight, fontSize: 14 }} />
                    <Text className="mono" style={{ color: PALETTE.brownLight, fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase' }}>
                      Scroll for the architecture
                    </Text>
                  </div>
                </Col>

                <Col xs={24} lg={10}>
                  <div style={{
                    border: `1px solid ${PALETTE.brown}`,
                    background: PALETTE.parchment,
                    padding: isMobile ? 28 : 36,
                    boxShadow: `12px 12px 0 ${PALETTE.black}`,
                  }}>
                    <Text className="mono" style={{ color: PALETTE.brown, fontSize: 10, letterSpacing: '0.25em', textTransform: 'uppercase', fontWeight: 700, display: 'block', marginBottom: 24 }}>
                      Live Treasury · Network Status
                    </Text>
                    <Space direction="vertical" size={18} style={{ width: '100%' }}>
                      {[
                        ['Settlement Rail', 'Solana · USDC'],
                        ['Custodian', 'Coinbase Prime'],
                        ['Wallet Layer', 'Circle'],
                        ['Escrow Locked', '8,432 USDC'],
                        ['Active Placements', '1,247'],
                        ['Last Municipal Remittance', '$43,200 · Plano'],
                      ].map(([k, v], i) => (
                        <div key={i} style={{ display: 'flex', justifyContent: 'space-between', gap: 16, paddingBottom: 14, borderBottom: i < 5 ? `1px dashed ${PALETTE.tanDeep}` : 'none' }}>
                          <Text className="mono" style={{ color: PALETTE.brownLight, fontSize: 10, letterSpacing: '0.16em', textTransform: 'uppercase' }}>{k}</Text>
                          <Text className="serif" style={{ color: PALETTE.black, fontSize: 16, fontWeight: 600, textAlign: 'right' }}>{v}</Text>
                        </div>
                      ))}
                    </Space>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </section>


        {/* ═══════ §02 · DIVIDEND BOND (luxury feature) ═══════ */}
        <section className="grain" style={{
          minHeight: '100vh',
          background: `
            radial-gradient(circle at 70% 30%, rgba(184,152,90,0.25) 0%, transparent 50%),
            linear-gradient(160deg, ${PALETTE.brown} 0%, ${PALETTE.charcoal} 65%, ${PALETTE.black} 100%)
          `,
          padding: isMobile ? '80px 24px' : '120px 64px',
          display: 'flex',
          alignItems: 'center',
        }}>
          <Row justify="center" style={{ width: '100%' }}>
            <Col xs={24} xl={20}>
              <Row gutter={[64, 48]} align="middle">
                <Col xs={24} lg={12}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 28 }}>
                    <div style={{ width: 60, height: 1, background: PALETTE.bronze }} />
                    <Text className="mono" style={{ color: PALETTE.bronze, fontSize: 11, letterSpacing: '0.28em', textTransform: 'uppercase', fontWeight: 600 }}>
                      §02 · Subscriber Dividend Bond
                    </Text>
                  </div>
                  <Title className="serif" style={{
                    color: PALETTE.cream, fontSize: isMobile ? 44 : 80,
                    fontWeight: 700, lineHeight: 1.0, letterSpacing: '-0.035em',
                    margin: 0, marginBottom: 28,
                  }}>
                    A bond.<br /><em style={{ color: PALETTE.bronze, fontStyle: 'italic' }}>Issued by your circuit.</em>
                  </Title>
                  <Paragraph style={{ color: PALETTE.tan, fontSize: 18, lineHeight: 1.85, marginBottom: 32, fontWeight: 300 }}>
                    Every subscriber's connection carries traffic that produces a measurable share of the network's CDN brokerage revenue. The Subscriber Dividend Bond converts that residual into a registered, income-bearing security — administered under a Trust Indenture Act-qualified indenture and paid quarterly via ACH or USDC to your Circle Wallet.
                  </Paragraph>

                  <Space direction="vertical" size={12} style={{ marginBottom: 32, width: '100%' }}>
                    {[
                      ['Issuer', 'Old West Solutions SPV (DST)'],
                      ['Indenture Trustee', 'Chartered Trust Co. · TIA-qualified'],
                      ['Paying Agent', 'Regulated Bank · ACH + USDC'],
                      ['Digital Custodian', 'Coinbase Prime'],
                      ['Wallet Infrastructure', 'Circle Wallet Platform'],
                      ['Transfer Agent', 'SEC-Registered'],
                    ].map(([k, v], i) => (
                      <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 16, padding: '10px 0', borderBottom: `1px dashed rgba(184,152,90,0.25)` }}>
                        <Text className="mono" style={{ color: PALETTE.bronze, fontSize: 10, letterSpacing: '0.16em', textTransform: 'uppercase' }}>{k}</Text>
                        <Text style={{ color: PALETTE.cream, fontSize: 14, textAlign: 'right' }}>{v}</Text>
                      </div>
                    ))}
                  </Space>
                </Col>

                <Col xs={24} lg={12}>
                  <div style={{
                    background: PALETTE.parchment,
                    border: `2px solid ${PALETTE.bronze}`,
                    padding: isMobile ? 28 : 44,
                    boxShadow: `16px 16px 0 ${PALETTE.bronze}`,
                    position: 'relative',
                  }}>
                    <div style={{ position: 'absolute', top: 16, right: 24, fontSize: 9, letterSpacing: '0.3em', color: PALETTE.brownLight, fontFamily: 'monospace' }}>
                      OWS · SPV · 2026
                    </div>
                    <Text className="mono" style={{ color: PALETTE.brown, fontSize: 10, letterSpacing: '0.3em', textTransform: 'uppercase', fontWeight: 700, display: 'block', marginBottom: 8 }}>
                      Term Sheet · Illustrative
                    </Text>
                    <Title className="serif" style={{ color: PALETTE.black, fontSize: 32, fontWeight: 700, letterSpacing: '-0.02em', marginTop: 0, marginBottom: 4 }}>
                      Residential 1 Gbps
                    </Title>
                    <Text className="serif" style={{ color: PALETTE.brown, fontStyle: 'italic', fontSize: 16 }}>
                      Series A · Senior Revenue Bond
                    </Text>
                    <div style={{ height: 1, background: PALETTE.brown, margin: '28px 0' }} />
                    <Space direction="vertical" size={16} style={{ width: '100%' }}>
                      {[
                        { k: 'Principal', v: '$1,000.00' },
                        { k: 'Monthly Residual', v: '$7.20' },
                        { k: 'Annual Entitlement', v: '$86.40' },
                        { k: 'Effective Coupon', v: '8.64% p.a.', highlight: true },
                        { k: 'Frequency', v: 'Quarterly' },
                        { k: 'Settlement', v: 'USDC / ACH' },
                        { k: 'Offering', v: 'Reg A+ Tier 2' },
                        { k: 'Senior Claim', v: 'Network Residual Pool' },
                      ].map((row, i) => (
                        <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                          <Text className="mono" style={{ color: PALETTE.brownLight, fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase' }}>{row.k}</Text>
                          <Text className="serif" style={{
                            color: row.highlight ? PALETTE.brown : PALETTE.black,
                            fontSize: row.highlight ? 28 : 18,
                            fontWeight: row.highlight ? 700 : 600,
                            fontStyle: row.highlight ? 'italic' : 'normal',
                          }}>{row.v}</Text>
                        </div>
                      ))}
                    </Space>
                    <div style={{ marginTop: 28, padding: 14, background: 'rgba(58,40,23,0.06)', borderLeft: `3px solid ${PALETTE.brown}` }}>
                      <Text style={{ color: PALETTE.brownMid, fontSize: 11, lineHeight: 1.6, fontStyle: 'italic' }}>
                        Illustrative only. Subject to offering documents prepared under supervision of securities counsel.
                      </Text>
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </section>


        {/* ═══════ §03 · ESCROW ═══════ */}
        <FullSection num="03" tag="Escrow & Mediation"
          title={<>Transaction safety.<br /><em style={{ color: PALETTE.brown, fontStyle: 'italic' }}>Pay to remove uncertainty.</em></>}
          isMobile={isMobile}
          background={`linear-gradient(180deg, ${PALETTE.cream} 0%, ${PALETTE.tan} 100%)`}
          icon={<LockOutlined />}
          accent={PALETTE.brown}
          textOnDark={false}
          body="Oldwest.net holds funds in escrow for work agreements, compute usage, deliverables, and milestone-based execution. It enforces pre-agreed rules — it does not decide winners. Evidence is anchored to IPFS and the Solana settlement program."
          stats={[
            ['Escrow Locked', '5,000 USDC'],
            ['Agreement Terms', 'Verified'],
            ['Milestone Tracking', 'Active'],
            ['Mediation Layer', 'Ready'],
            ['Evidence', 'IPFS-Linked'],
          ]}
          features={['Work agreements', 'Compute usage', 'Deliverables', 'Milestone execution', 'Evidence on IPFS', 'Independent mediation']}
        />


        {/* ═══════ §04 · REPUTATION ═══════ */}
        <FullSection num="04" tag="Reputation"
          title={<>Economic signal.<br /><em style={{ color: PALETTE.bronze, fontStyle: 'italic' }}>Not vanity.</em></>}
          isMobile={isMobile}
          background={`linear-gradient(180deg, ${PALETTE.brown} 0%, ${PALETTE.charcoal} 100%)`}
          icon={<TrophyOutlined />}
          accent={PALETTE.bronze}
          textOnDark={true}
          body="Reputation is financially coupled. Completed escrow transactions, low dispute rates, consistent behavior, and bonded commitments translate directly into fee discounts, placement eligibility, and reduced bond requirements."
          stats={[
            ['Completed Transactions', '124'],
            ['Dispute Rate', '0.8% · Excellent'],
            ['Fee Discount', '15% Active'],
            ['Placement Eligible', 'Yes'],
            ['Level', '84 / 100 XP'],
          ]}
          features={['Lower fees', 'Open access gates', 'Placement eligibility', 'Reduced bonds', 'Cosigner trust', 'Economic capital']}
        />


        {/* ═══════ §05 · PAID PLACEMENT ═══════ */}
        <FullSection num="05" tag="Paid Placement"
          title={<>Visibility, not outcomes.<br /><em style={{ color: PALETTE.brown, fontStyle: 'italic' }}>Pay to be seen.</em></>}
          isMobile={isMobile}
          background={`linear-gradient(180deg, ${PALETTE.tan} 0%, ${PALETTE.cream} 100%)`}
          icon={<EyeOutlined />}
          accent={PALETTE.brown}
          textOnDark={false}
          body="Users and organizations pay to surface profiles, rooms, offers, and tools. Placement is clearly labeled, eligibility requires a minimum reputation, and visibility expires — ensuring fresh content and preventing permanent dominance."
          stats={[
            ['Profile Visibility', 'Enabled'],
            ['Reputation Check', 'Passed (min 50)'],
            ['Payment Processed', '1,000 USDC'],
            ['Placement Duration', '30 days'],
            ['Label Status', '[PAID] Visible'],
          ]}
          features={['Always labeled', 'Reputation-gated', 'Time-limited', 'Auditable', 'No structural dominance', 'Fresh content guarantee']}
        />


        {/* ═══════ §06 · MUNICIPAL TOLL ═══════ */}
        <FullSection num="06" tag="Municipal Toll Protocol"
          title={<>The franchise fee,<br /><em style={{ color: PALETTE.bronze, fontStyle: 'italic' }}>made auditable.</em></>}
          isMobile={isMobile}
          background={`
            radial-gradient(circle at 30% 50%, rgba(184,152,90,0.20) 0%, transparent 60%),
            linear-gradient(135deg, ${PALETTE.black} 0%, ${PALETTE.brown} 100%)
          `}
          icon={<SafetyOutlined />}
          accent={PALETTE.bronze}
          textOnDark={true}
          body="Every gas-fee revenue-share payment is parsed against a geo-tagging table that maps the originating traffic to the municipalities through which the underlying fiber and last-mile access runs. The toll is computed and remitted automatically — by ACH or USDC — under a standard franchise agreement."
          stats={[
            ['Last Remittance', '$43,200 · Plano'],
            ['Active Franchises', '12'],
            ['Toll Rate (avg)', '5%'],
            ['Settlement Cadence', 'Quarterly'],
            ['Reporting', 'Monthly On-Chain'],
          ]}
          features={['ACH or USDC remittance', 'Solana settlement reports', 'Geo-attributed', 'Multi-sig governance', 'Transparent rate setting', 'Standard franchise instrument']}
        />


        {/* ═══════ §07 · CTA ═══════ */}
        <section className="grain" style={{
          minHeight: '70vh',
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
          <div style={{ maxWidth: 900 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 28, justifyContent: 'center' }}>
              <div style={{ width: 60, height: 1, background: PALETTE.bronze }} />
              <Text className="mono" style={{ color: PALETTE.bronze, fontSize: 11, letterSpacing: '0.28em', textTransform: 'uppercase', fontWeight: 600 }}>
                §07 · Open the Treasury
              </Text>
              <div style={{ width: 60, height: 1, background: PALETTE.bronze }} />
            </div>
            <Title className="serif" style={{
              color: PALETTE.cream, fontSize: isMobile ? 44 : 80, fontWeight: 700, lineHeight: 1.0,
              letterSpacing: '-0.035em', margin: 0, marginBottom: 32,
            }}>
              Five systems.<br /><em style={{ color: PALETTE.bronze, fontStyle: 'italic' }}>One ledger.</em>
            </Title>
            <Paragraph style={{ color: PALETTE.tan, fontSize: 19, lineHeight: 1.75, marginBottom: 44, fontWeight: 300 }}>
              Escrow lowers transaction risk. Reputation lowers cost. Placement rewards quality. Dividend bonds monetize the network. Municipal tolls legitimize the franchise. They reinforce one another.
            </Paragraph>
            <Space size={20} wrap>
              <Button href="/create-account" icon={<ArrowRightOutlined />} size="large" style={{
                background: PALETTE.cream, borderColor: PALETTE.cream, color: PALETTE.black,
                borderRadius: 0, height: 60, padding: '0 40px',
                fontWeight: 800, fontSize: 13, letterSpacing: '0.16em', textTransform: 'uppercase',
                boxShadow: `0 8px 0 ${PALETTE.bronze}`,
              }}>
                Open an Account
              </Button>
              <Button href="/whitepaper" size="large" style={{
                background: 'transparent', borderColor: PALETTE.cream, color: PALETTE.cream,
                borderRadius: 0, height: 60, padding: '0 40px',
                fontWeight: 700, fontSize: 13, letterSpacing: '0.16em', textTransform: 'uppercase',
                borderWidth: 1.5,
              }}>
                Read the Whitepaper
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
                  {[['Home', '/'], ['Whitepaper', '/whitepaper'], ['Security', '/security'], ['Privacy', '/privacy-policy'], ['Terms', '/terms-of-service']].map(([l, h]) => (
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


function FullSection({ num, tag, title, body, stats, features, isMobile, background, icon, accent, textOnDark }: any) {
  const baseColor = textOnDark ? PALETTE.cream : PALETTE.black
  const subColor = textOnDark ? PALETTE.tan : PALETTE.brownMid
  const lineColor = textOnDark ? accent : PALETTE.brown

  return (
    <section className="grain" style={{
      minHeight: '100vh',
      background,
      padding: isMobile ? '80px 24px' : '120px 64px',
      display: 'flex',
      alignItems: 'center',
    }}>
      <Row justify="center" style={{ width: '100%' }}>
        <Col xs={24} xl={22}>
          <Row gutter={[64, 48]} align="middle">
            <Col xs={24} lg={12}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 28 }}>
                <div style={{ width: 60, height: 1, background: lineColor }} />
                <Text className="mono" style={{ color: lineColor, fontSize: 11, letterSpacing: '0.28em', textTransform: 'uppercase', fontWeight: 600 }}>
                  §{num} · {tag}
                </Text>
              </div>
              <div style={{
                width: 64, height: 64, borderRadius: '50%',
                background: textOnDark ? 'rgba(184,152,90,0.15)' : PALETTE.black,
                color: accent,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 26, marginBottom: 28,
                border: `1px solid ${accent}`,
              }}>
                {icon}
              </div>
              <Title className="serif" style={{
                color: baseColor, fontSize: isMobile ? 40 : 64,
                fontWeight: 700, lineHeight: 1.0, letterSpacing: '-0.03em',
                margin: 0, marginBottom: 28,
              }}>
                {title}
              </Title>
              <Paragraph style={{ color: subColor, fontSize: 18, lineHeight: 1.85, marginBottom: 32, fontWeight: 300 }}>
                {body}
              </Paragraph>

              <Row gutter={[12, 8]}>
                {features.map((f: string) => (
                  <Col xs={24} sm={12} key={f}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                      <div style={{ width: 6, height: 6, borderRadius: '50%', background: accent }} />
                      <Text style={{ color: subColor, fontSize: 14 }}>{f}</Text>
                    </div>
                  </Col>
                ))}
              </Row>
            </Col>

            <Col xs={24} lg={12}>
              <div style={{
                background: textOnDark ? PALETTE.parchment : PALETTE.black,
                border: `2px solid ${accent}`,
                padding: isMobile ? 28 : 40,
                boxShadow: `12px 12px 0 ${textOnDark ? PALETTE.bronze : PALETTE.brown}`,
              }}>
                <Text className="mono" style={{
                  color: textOnDark ? PALETTE.brown : PALETTE.bronze,
                  fontSize: 10, letterSpacing: '0.3em', textTransform: 'uppercase', fontWeight: 700,
                  display: 'block', marginBottom: 20,
                }}>
                  Live Snapshot · §{num}
                </Text>
                <Space direction="vertical" size={16} style={{ width: '100%' }}>
                  {stats.map(([k, v]: [string, string], i: number) => (
                    <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', paddingBottom: 14, borderBottom: i < stats.length - 1 ? `1px dashed ${textOnDark ? PALETTE.tanDeep : PALETTE.brown}` : 'none' }}>
                      <Text className="mono" style={{
                        color: textOnDark ? PALETTE.brownLight : PALETTE.bronze,
                        fontSize: 10, letterSpacing: '0.16em', textTransform: 'uppercase',
                      }}>{k}</Text>
                      <Text className="serif" style={{
                        color: textOnDark ? PALETTE.black : PALETTE.cream,
                        fontSize: 18, fontWeight: 600, textAlign: 'right',
                      }}>{v}</Text>
                    </div>
                  ))}
                </Space>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </section>
  )
}
