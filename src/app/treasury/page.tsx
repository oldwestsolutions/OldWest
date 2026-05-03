'use client'

import { Layout, Typography, Row, Col, Card, Divider, Space, Tag, Button } from 'antd'
import Link from 'next/link'
import {
  LockOutlined, TrophyOutlined, EyeOutlined, CheckCircleFilled,
  ArrowRightOutlined, BankOutlined, DollarOutlined, SafetyOutlined,
  RocketOutlined
} from '@ant-design/icons'
import { useState, useEffect } from 'react'
import BankingModal from '@/components/BankingModal'

const { Header, Content, Footer } = Layout
const { Title, Paragraph, Text } = Typography

const NAV_LINKS = [
  ['← Home', '/'],
  ['Whitepaper', '/whitepaper'],
  ['Security', '/security'],
  ['Sign in', '/login'],
]

export default function Treasury() {
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
          {NAV_LINKS.map(([label, href]) => (
            <Link key={href} href={href} style={{ color: '#334155', fontSize: 14, textDecoration: 'none' }}>{label}</Link>
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
            <Col xs={24} xl={20}>
              <Tag style={{ borderRadius: 999, background: '#eef3ff', borderColor: '#dbe4ff', color: '#2f5fd7', padding: '4px 14px', fontWeight: 600, marginBottom: 20 }}>
                Treasury · Financial Architecture
              </Tag>
              <Title style={{ color: '#0f172a', fontSize: isMobile ? 36 : 60, fontWeight: 800, letterSpacing: '-0.04em', marginBottom: 16, lineHeight: 1.04 }}>
                The economic<br />infrastructure<br />of Oldwest.net
              </Title>
              <Paragraph style={{ color: '#475569', fontSize: isMobile ? 16 : 20, maxWidth: 780, lineHeight: 1.8 }}>
                Five interlocking systems — escrow, reputation, paid placement, subscriber dividend bond, and gas toll remittance — create a financial stack that rewards verified behavior, compensates participants fairly, and remits to municipalities automatically.
              </Paragraph>
              <Space size={14} wrap style={{ marginTop: 8 }}>
                <Button type="primary" href="/create-account" icon={<ArrowRightOutlined />}
                  style={{ borderRadius: 12, height: 46, background: '#2f5fd7', borderColor: '#2f5fd7', fontWeight: 700, boxShadow: '0 12px 24px rgba(47,95,215,0.28)' }}>
                  Join the network
                </Button>
                <Button href="/whitepaper"
                  style={{ borderRadius: 12, height: 46, borderColor: '#cbd5e1', color: '#1e293b', fontWeight: 600, background: '#ffffff' }}>
                  Read the thesis
                </Button>
              </Space>
            </Col>
          </Row>
        </section>

        {/* ── METRIC STRIP ── */}
        <section style={{ padding: isMobile ? '32px 24px' : '36px 48px', borderBottom: '1px solid #e2e8f0' }}>
          <Row justify="center">
            <Col xs={24} xl={20}>
              <Row gutter={[16, 16]}>
                {[
                  { label: 'Settlement Rail', value: 'Solana + Coinbase' },
                  { label: 'Stablecoin', value: 'USDC · Circle Wallet' },
                  { label: 'Instrument', value: 'SEC Reg A+ / S-1' },
                  { label: 'Coupon Structure', value: 'Floating · Revenue-backed' },
                ].map(item => (
                  <Col xs={24} sm={12} lg={6} key={item.label}>
                    <Card bordered={false} style={{ borderRadius: 14, boxShadow: '0 4px 16px rgba(15,23,42,0.07)', background: '#ffffff' }} bodyStyle={{ padding: '16px 20px' }}>
                      <Text style={{ color: '#94a3b8', fontSize: 11, display: 'block', marginBottom: 4, letterSpacing: '0.06em', textTransform: 'uppercase', fontWeight: 600 }}>{item.label}</Text>
                      <Text style={{ color: '#0f172a', fontSize: 15, fontWeight: 700 }}>{item.value}</Text>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </section>

        {/* ── SUBSCRIBER DIVIDEND BOND ── */}
        <section style={{ padding: isMobile ? '60px 24px' : '88px 48px', background: '#ffffff', borderBottom: '1px solid #e2e8f0' }}>
          <Row justify="center">
            <Col xs={24} xl={20}>
              <Row gutter={[48, 48]} align="middle">
                <Col xs={24} lg={12}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
                    <div style={{ width: 40, height: 40, borderRadius: 12, background: '#eef3ff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <DollarOutlined style={{ color: '#2f5fd7', fontSize: 20 }} />
                    </div>
                    <Text style={{ color: '#2f5fd7', fontWeight: 700, fontSize: 12, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Subscriber Dividend Bond</Text>
                  </div>
                  <Title level={2} style={{ color: '#0f172a', fontSize: isMobile ? 28 : 40, fontWeight: 800, letterSpacing: '-0.03em', marginBottom: 20 }}>
                    Your connection pays you.<br />Like a bond.
                  </Title>
                  <Paragraph style={{ color: '#475569', fontSize: 16, lineHeight: 1.85, marginBottom: 20 }}>
                    Every subscriber's access circuit carries traffic that produces a measurable share of the network's CDN brokerage revenue. The Subscriber Dividend Bond converts that ordinary residual entitlement into a registered income-bearing security — administered under a Trust Indenture Act-qualified indenture, with a chartered trust company as trustee and a regulated bank as paying agent.
                  </Paragraph>
                  <Paragraph style={{ color: '#475569', fontSize: 16, lineHeight: 1.85, marginBottom: 28 }}>
                    The coupon is funded by the residual pool contributions of electing subscribers. Paid quarterly by ACH or monthly in USDC to your Circle Wallet. Not equity, not a token — a registered, transferable, senior claim against a defined revenue stream.
                  </Paragraph>

                  <Card bordered={false} style={{ borderRadius: 16, background: '#f8fafc', border: '1px solid #e2e8f0' }} bodyStyle={{ padding: 24 }}>
                    <Text style={{ color: '#64748b', fontSize: 12, letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 700, display: 'block', marginBottom: 16 }}>Banking Structure</Text>
                    <Space direction="vertical" size={0} style={{ width: '100%' }}>
                      {[
                        ['Issuer', 'Old West Solutions SPV (Delaware Statutory Trust)'],
                        ['Indenture Trustee', 'Chartered Trust Co. (TIA-qualified)'],
                        ['Paying Agent', 'Regulated Bank · ACH + USDC'],
                        ['Digital Custodian', 'Coinbase Prime (qualified custodian)'],
                        ['Wallet Infrastructure', 'Circle Wallet Platform'],
                        ['Transfer Agent', 'SEC-Registered'],
                      ].map(([role, entity], i) => (
                        <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: i < 5 ? '1px solid #e2e8f0' : 'none' }}>
                          <Text style={{ color: '#94a3b8', fontSize: 13 }}>{role}</Text>
                          <Text style={{ color: '#0f172a', fontSize: 13, fontWeight: 500 }}>{entity}</Text>
                        </div>
                      ))}
                    </Space>
                  </Card>
                </Col>

                <Col xs={24} lg={12}>
                  <Card bordered={false} style={{ borderRadius: 20, overflow: 'hidden', boxShadow: '0 24px 60px rgba(15,23,42,0.12)' }} bodyStyle={{ padding: 0 }}>
                    <div style={{ background: 'linear-gradient(135deg, #2f5fd7 0%, #1e40af 100%)', padding: '24px 28px' }}>
                      <Text style={{ color: 'rgba(255,255,255,0.65)', fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', display: 'block', marginBottom: 4 }}>OWS Subscriber Dividend Bond</Text>
                      <Text style={{ color: '#ffffff', fontSize: 22, fontWeight: 800 }}>Residential · 1 Gbps Symmetric</Text>
                    </div>
                    <div style={{ padding: '24px 28px', background: '#ffffff' }}>
                      {[
                        { label: 'Monthly CDN Residual (avg.)', value: '$7.20', highlight: false },
                        { label: 'Annual Residual Entitlement', value: '$86.40', highlight: false },
                        { label: 'Instrument Principal', value: '$1,000.00', highlight: false },
                        { label: 'Effective Coupon Rate', value: '8.64% p.a.', highlight: true },
                        { label: 'Coupon Method', value: 'USDC · Circle Wallet / ACH', highlight: false },
                        { label: 'Payment Frequency', value: 'Quarterly (default)', highlight: false },
                        { label: 'Offering Structure', value: 'Reg A+ Tier 2 / S-1', highlight: false },
                        { label: 'Senior Claim Against', value: 'Network Residual Pool', highlight: false },
                      ].map((row, i) => (
                        <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 0', borderBottom: i < 7 ? '1px solid #f1f5f9' : 'none' }}>
                          <Text style={{ color: '#64748b', fontSize: 13 }}>{row.label}</Text>
                          <Text style={{ color: row.highlight ? '#16a34a' : '#0f172a', fontSize: 13, fontWeight: row.highlight ? 800 : 500 }}>{row.value}</Text>
                        </div>
                      ))}
                      <div style={{ marginTop: 16, padding: '12px 16px', background: '#f8fafc', borderRadius: 10, border: '1px solid #e2e8f0' }}>
                        <Text style={{ color: '#94a3b8', fontSize: 11, lineHeight: 1.6 }}>
                          Illustrative only. Not a securities offering. Subject to offering documents prepared under supervision of securities counsel.
                        </Text>
                      </div>
                    </div>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>
        </section>

        {/* ── ESCROW & MEDIATION ── */}
        <section style={{ padding: isMobile ? '60px 24px' : '88px 48px', background: '#f8fafc', borderBottom: '1px solid #e2e8f0' }}>
          <Row justify="center">
            <Col xs={24} xl={20}>
              <Row gutter={[48, 48]} align="middle">
                <Col xs={24} lg={12}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
                    <div style={{ width: 40, height: 40, borderRadius: 12, background: '#fff8ea', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <LockOutlined style={{ color: '#7a5b32', fontSize: 20 }} />
                    </div>
                    <Text style={{ color: '#7a5b32', fontWeight: 700, fontSize: 12, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Escrow & Mediation</Text>
                  </div>
                  <Title level={2} style={{ color: '#0f172a', fontSize: isMobile ? 28 : 36, fontWeight: 800, letterSpacing: '-0.03em', marginBottom: 16 }}>
                    Transaction safety.<br />Pay to remove uncertainty.
                  </Title>
                  <Paragraph style={{ color: '#475569', fontSize: 16, lineHeight: 1.85, marginBottom: 20 }}>
                    Oldwest.net holds funds in escrow for work agreements, compute usage, deliverables, and milestone-based execution. It enforces pre-agreed rules — it does not decide winners.
                  </Paragraph>
                  <Row gutter={[12, 12]}>
                    {['Work agreements', 'Compute usage', 'Deliverables', 'Milestone execution', 'Evidence on IPFS', 'Mediation layer'].map(f => (
                      <Col xs={24} sm={12} key={f}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                          <CheckCircleFilled style={{ color: '#7a5b32', fontSize: 13 }} />
                          <Text style={{ color: '#475569', fontSize: 14 }}>{f}</Text>
                        </div>
                      </Col>
                    ))}
                  </Row>
                </Col>
                <Col xs={24} lg={12}>
                  <BankingModal
                    title="Escrow Account"
                    subtitle="Transaction Safety"
                    status="Funds Secured in Escrow"
                    statusColor="#16a34a"
                    items={[
                      { label: 'Escrow Amount', value: '5,000 USDC' },
                      { label: 'Agreement Terms', value: 'Verified' },
                      { label: 'Milestone Tracking', value: 'Active' },
                      { label: 'Mediation Layer', value: 'Ready' },
                      { label: 'Evidence Storage', value: 'IPFS linked' }
                    ]}
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        </section>

        {/* ── REPUTATION ── */}
        <section style={{ padding: isMobile ? '60px 24px' : '88px 48px', background: '#ffffff', borderBottom: '1px solid #e2e8f0' }}>
          <Row justify="center">
            <Col xs={24} xl={20}>
              <Row gutter={[48, 48]} align="middle">
                <Col xs={24} lg={12} order={isMobile ? 1 : 2}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
                    <div style={{ width: 40, height: 40, borderRadius: 12, background: '#fefce8', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <TrophyOutlined style={{ color: '#ca8a04', fontSize: 20 }} />
                    </div>
                    <Text style={{ color: '#ca8a04', fontWeight: 700, fontSize: 12, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Reputation</Text>
                  </div>
                  <Title level={2} style={{ color: '#0f172a', fontSize: isMobile ? 28 : 36, fontWeight: 800, letterSpacing: '-0.03em', marginBottom: 16 }}>
                    Economic signal,<br />not vanity.
                  </Title>
                  <Paragraph style={{ color: '#475569', fontSize: 16, lineHeight: 1.85, marginBottom: 24 }}>
                    Reputation is financially coupled. Completed escrow transactions, low dispute rates, consistent behavior, and bonded commitments translate directly into fee discounts, placement eligibility, and reduced bond requirements.
                  </Paragraph>
                  <Row gutter={[16, 16]}>
                    {[
                      { heading: 'How it is earned', items: ['Completed escrow', 'Low dispute rate', 'Consistent behavior', 'Bonded commitments'] },
                      { heading: 'How it is used', items: ['Access gates', 'Placement eligibility', 'Fee discounts', 'Bond requirements'] },
                    ].map(col => (
                      <Col xs={24} sm={12} key={col.heading}>
                        <Card bordered style={{ borderRadius: 14, borderColor: '#e2e8f0' }} bodyStyle={{ padding: 18 }}>
                          <Text style={{ color: '#0f172a', fontWeight: 700, fontSize: 14, display: 'block', marginBottom: 12 }}>{col.heading}</Text>
                          <Space direction="vertical" size={6}>
                            {col.items.map(it => (
                              <div key={it} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                                <CheckCircleFilled style={{ color: '#ca8a04', fontSize: 12 }} />
                                <Text style={{ color: '#64748b', fontSize: 13 }}>{it}</Text>
                              </div>
                            ))}
                          </Space>
                        </Card>
                      </Col>
                    ))}
                  </Row>
                </Col>
                <Col xs={24} lg={12} order={isMobile ? 2 : 1}>
                  <BankingModal
                    title="Reputation Profile"
                    subtitle="Economic Signal"
                    status="Cost-Reducing Capital"
                    statusColor="#ca8a04"
                    items={[
                      { label: 'Completed Transactions', value: '124' },
                      { label: 'Dispute Rate', value: '0.8% (excellent)' },
                      { label: 'Fee Discount', value: '15% active' },
                      { label: 'Placement Eligible', value: 'Yes' },
                      { label: 'Level', value: '84 / 100 XP' },
                    ]}
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        </section>

        {/* ── PAID PLACEMENT ── */}
        <section style={{ padding: isMobile ? '60px 24px' : '88px 48px', background: '#f8fafc', borderBottom: '1px solid #e2e8f0' }}>
          <Row justify="center">
            <Col xs={24} xl={20}>
              <Row gutter={[48, 48]} align="middle">
                <Col xs={24} lg={12}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
                    <div style={{ width: 40, height: 40, borderRadius: 12, background: '#f0fdf4', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <EyeOutlined style={{ color: '#16a34a', fontSize: 20 }} />
                    </div>
                    <Text style={{ color: '#16a34a', fontWeight: 700, fontSize: 12, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Paid Placement</Text>
                  </div>
                  <Title level={2} style={{ color: '#0f172a', fontSize: isMobile ? 28 : 36, fontWeight: 800, letterSpacing: '-0.03em', marginBottom: 16 }}>
                    Visibility, not outcomes.<br />Pay to be seen — not trusted.
                  </Title>
                  <Paragraph style={{ color: '#475569', fontSize: 16, lineHeight: 1.85, marginBottom: 24 }}>
                    Users and organizations pay to surface profiles, rooms, offers, and tools. Placement is clearly labeled, eligibility requires a minimum reputation, and visibility expires — ensuring fresh content and preventing permanent dominance.
                  </Paragraph>
                  <Space direction="vertical" size={14}>
                    {[
                      { title: 'Placement is clearly labeled', desc: 'All paid placements are transparently marked, ensuring users always know when content is promoted.' },
                      { title: 'Eligibility requires reputation', desc: 'Only users with established reputation can purchase placement, maintaining platform quality standards.' },
                      { title: 'Placement expires', desc: 'Time-limited visibility ensures fresh content and prevents permanent structural dominance by any participant.' },
                    ].map((item, i) => (
                      <div key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                        <CheckCircleFilled style={{ color: '#16a34a', fontSize: 16, marginTop: 2 }} />
                        <div>
                          <Text style={{ color: '#0f172a', fontWeight: 600, display: 'block', marginBottom: 2 }}>{item.title}</Text>
                          <Text style={{ color: '#64748b', fontSize: 14, lineHeight: 1.6 }}>{item.desc}</Text>
                        </div>
                      </div>
                    ))}
                  </Space>
                </Col>
                <Col xs={24} lg={12}>
                  <BankingModal
                    title="Placement Activation"
                    subtitle="Paid Placement Service"
                    status="Placement Active"
                    statusColor="#16a34a"
                    items={[
                      { label: 'Profile Visibility', value: 'Enabled' },
                      { label: 'Reputation Check', value: 'Passed (min: 50)' },
                      { label: 'Payment Processed', value: '1,000 USDC' },
                      { label: 'Placement Duration', value: '30 days' },
                      { label: 'Label Status', value: '[PAID] visible' }
                    ]}
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        </section>

        {/* ── HOW IT ALL CONNECTS ── */}
        <section style={{ padding: isMobile ? '60px 24px' : '88px 48px', background: 'linear-gradient(160deg, #eef3ff 0%, #fff8ea 100%)' }}>
          <Row justify="center">
            <Col xs={24} xl={20}>
              <div style={{ marginBottom: 48 }}>
                <Title level={2} style={{ color: '#0f172a', fontSize: isMobile ? 30 : 44, fontWeight: 800, letterSpacing: '-0.03em', marginBottom: 12 }}>
                  How the five systems connect
                </Title>
                <Paragraph style={{ color: '#475569', fontSize: 16, maxWidth: 680, lineHeight: 1.8 }}>
                  Each layer reinforces the others. Reputation lowers the cost of escrow. Placement rewards the reputable. Dividend bonds monetize the network's operation. Municipal tolls legitimize the franchise.
                </Paragraph>
              </div>

              <Row gutter={[16, 16]}>
                {[
                  { icon: <DollarOutlined style={{ color: '#2f5fd7', fontSize: 22 }} />, title: 'Dividend Bond', desc: 'Subscriber residuals converted to registered income-bearing securities. Paid quarterly in USDC.', bg: '#eef3ff', border: '#dbe4ff' },
                  { icon: <LockOutlined style={{ color: '#7a5b32', fontSize: 22 }} />, title: 'Escrow', desc: 'Milestone-based transaction safety. Funds held, released, and reconciled without trusted intermediaries.', bg: '#fff8ea', border: '#d6be9a' },
                  { icon: <TrophyOutlined style={{ color: '#ca8a04', fontSize: 22 }} />, title: 'Reputation', desc: 'Financially coupled economic signal. Lowers fees, opens access, and reduces bond requirements.', bg: '#fefce8', border: '#fde68a' },
                  { icon: <EyeOutlined style={{ color: '#16a34a', fontSize: 22 }} />, title: 'Paid Placement', desc: 'Time-limited visibility. Labeled, reputation-gated, and auditable. Buy attention — not trust.', bg: '#f0fdf4', border: '#bbf7d0' },
                  { icon: <SafetyOutlined style={{ color: '#7c3aed', fontSize: 22 }} />, title: 'Municipal Toll', desc: 'Geo-attributed franchise-fee remittance committed to the Solana settlement program per epoch.', bg: '#f5f3ff', border: '#ddd6fe' },
                ].map(item => (
                  <Col xs={24} sm={12} lg={isMobile ? 24 : 24 / 5 * 5 > 20 ? 5 : 8} key={item.title}>
                    <Card bordered style={{ borderRadius: 16, borderColor: item.border, background: item.bg, height: '100%' }} bodyStyle={{ padding: 22 }}>
                      <div style={{ width: 40, height: 40, borderRadius: 12, background: 'rgba(255,255,255,0.7)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 14 }}>
                        {item.icon}
                      </div>
                      <Text style={{ color: '#0f172a', fontWeight: 700, fontSize: 15, display: 'block', marginBottom: 8 }}>{item.title}</Text>
                      <Text style={{ color: '#475569', fontSize: 13, lineHeight: 1.7 }}>{item.desc}</Text>
                    </Card>
                  </Col>
                ))}
              </Row>

              <div style={{ marginTop: 48 }}>
                <BankingModal
                  title="Treasury Dashboard"
                  subtitle="System Status — All Operational"
                  status="Live · Solana Settlement"
                  statusColor="#16a34a"
                  items={[
                    { label: 'Active Placements', value: '1,247' },
                    { label: 'Escrow Locked', value: '8,432 USDC' },
                    { label: 'Registered Identities', value: '12,847' },
                    { label: 'Dividend Bond Principal', value: '$2.1M (illustrative)' },
                    { label: 'Last Municipal Remittance', value: '$43,200 · City of Plano' },
                  ]}
                />
              </div>
            </Col>
          </Row>
        </section>
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
                  {[['Home', '/'], ['Whitepaper', '/whitepaper'], ['Security', '/security'], ['Privacy', '/privacy-policy'], ['Terms', '/terms-of-service']].map(([l, h]) => (
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
