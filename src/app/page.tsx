'use client'

import Link from 'next/link'
import { Layout, Row, Col, Typography, Button, Space, Tag } from 'antd'
import {
  MenuOutlined,
  CloseOutlined,
  ArrowRightOutlined,
  ArrowDownOutlined,
  GlobalOutlined,
  SafetyOutlined,
  BankOutlined,
  CloudServerOutlined,
  DollarOutlined,
  RadarChartOutlined,
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
  gold: '#a08249',
}

const navLinks = [
  { href: '/marketplace', label: 'Platform' },
  { href: '/treasury', label: 'Treasury' },
  { href: '/whitepaper', label: 'Whitepaper' },
  { href: '/security', label: 'Security' },
]

const capabilities = [
  {
    num: '01',
    icon: <GlobalOutlined />,
    title: 'CDN Brokerage',
    sub: 'Lumen-backed delivery substrate',
    body: 'Brokered traffic routing over Lumen and partner edge capacity. Policy-aware delivery and auditable settlement on Solana.',
  },
  {
    num: '02',
    icon: <SafetyOutlined />,
    title: 'Identity Governance',
    sub: 'The trust layer of the internet',
    body: 'Cryptographic attestation that counterparties are real people or real operating businesses. KYC and beneficial-owner workflows.',
  },
  {
    num: '03',
    icon: <DollarOutlined />,
    title: 'Subscriber Dividend Bond',
    sub: 'A revenue-backed registered security',
    body: 'Residual revenue sharing converted into a registered income-bearing instrument. Paid quarterly in USDC or by ACH.',
  },
  {
    num: '04',
    icon: <BankOutlined />,
    title: 'Municipal Toll Protocol',
    sub: 'Geo-attributed franchise remittance',
    body: 'Transparent municipal toll on digital activity, remitted automatically to franchise authorities with auditable receipts.',
  },
  {
    num: '05',
    icon: <CloudServerOutlined />,
    title: 'Protected Asset Hosting',
    sub: 'Confidential computing for AI & IP',
    body: 'Military-grade cryptographic protection for AI models, software, and creative works inside operator-blind enclaves.',
  },
  {
    num: '06',
    icon: <RadarChartOutlined />,
    title: 'Connected Asset Registry',
    sub: 'Tamper-evident property recovery',
    body: 'Network-observable asset intelligence for recovery workflows, verification, and chain-of-custody visibility.',
  },
]

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 992)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
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
          opacity: 0.55;
          pointer-events: none;
          mix-blend-mode: multiply;
        }
        .vignette {
          background:
            radial-gradient(ellipse at top left, rgba(245,237,224,0.0) 0%, rgba(58,40,23,0.18) 100%),
            radial-gradient(ellipse at bottom right, rgba(245,237,224,0.0) 0%, rgba(10,9,8,0.20) 100%);
        }
        .cap-card {
          transition: transform 0.4s ease, box-shadow 0.4s ease;
        }
        .cap-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 32px 64px rgba(10,9,8,0.18);
        }
      `}</style>

      {/* ─────── HEADER ─────── */}
      <Header
        style={{
          background: 'rgba(245, 237, 224, 0.85)',
          backdropFilter: 'blur(14px)',
          borderBottom: `1px solid ${PALETTE.tanDeep}`,
          padding: '0 32px',
          height: 80,
          position: 'sticky',
          top: 0,
          zIndex: 1000,
        }}
      >
        <Row align="middle" justify="space-between" style={{ height: '100%' }}>
          <Col>
            <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 14 }}>
              <div style={{
                width: 42, height: 42, borderRadius: 4,
                background: PALETTE.black,
                border: `1px solid ${PALETTE.bronze}`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                boxShadow: 'inset 0 0 0 2px rgba(184,152,90,0.2)',
              }}>
                <Text className="serif" style={{ color: PALETTE.bronze, fontWeight: 700, fontSize: 16, letterSpacing: '0.05em' }}>OW</Text>
              </div>
              <div>
                <Text className="serif" style={{ color: PALETTE.black, fontWeight: 700, fontSize: 22, letterSpacing: '-0.01em', display: 'block', lineHeight: 1 }}>
                  Oldwest
                </Text>
                <Text className="mono" style={{ color: PALETTE.brownLight, fontSize: 9, letterSpacing: '0.22em', textTransform: 'uppercase' }}>
                  Est. MMXXVI · Texas
                </Text>
              </div>
            </Link>
          </Col>

          <Col>
            {isMobile ? (
              <Button
                type="text"
                icon={mobileMenuOpen ? <CloseOutlined /> : <MenuOutlined />}
                onClick={() => setMobileMenuOpen((p) => !p)}
                style={{ color: PALETTE.black }}
              />
            ) : (
              <Space size={32}>
                {navLinks.map((link) => (
                  <Link key={link.href} href={link.href} className="mono"
                    style={{ color: PALETTE.brown, fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', fontWeight: 600 }}>
                    {link.label}
                  </Link>
                ))}
                <Button href="/login"
                  style={{
                    borderRadius: 0,
                    background: 'transparent',
                    borderColor: PALETTE.brown,
                    color: PALETTE.brown,
                    fontWeight: 600,
                    height: 38,
                    letterSpacing: '0.08em',
                    fontSize: 12,
                    textTransform: 'uppercase',
                  }}>
                  Sign in
                </Button>
                <Button href="/create-account"
                  style={{
                    borderRadius: 0,
                    background: PALETTE.black,
                    borderColor: PALETTE.black,
                    color: PALETTE.cream,
                    fontWeight: 700,
                    height: 38,
                    letterSpacing: '0.08em',
                    fontSize: 12,
                    textTransform: 'uppercase',
                    boxShadow: `0 6px 0 ${PALETTE.brown}`,
                  }}>
                  Get Started
                </Button>
              </Space>
            )}
          </Col>
        </Row>

        {mobileMenuOpen && isMobile && (
          <div style={{
            position: 'absolute', left: 0, right: 0, top: 80,
            background: PALETTE.cream,
            borderBottom: `1px solid ${PALETTE.tanDeep}`,
            padding: 24,
          }}>
            <Space direction="vertical" size={16} style={{ width: '100%' }}>
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} className="mono"
                  style={{ color: PALETTE.brown, fontSize: 13, letterSpacing: '0.15em', textTransform: 'uppercase' }}>
                  {link.label}
                </Link>
              ))}
              <Button href="/login" block style={{ borderRadius: 0, height: 44, borderColor: PALETTE.brown, color: PALETTE.brown }}>SIGN IN</Button>
              <Button href="/create-account" block style={{ borderRadius: 0, height: 44, background: PALETTE.black, borderColor: PALETTE.black, color: PALETTE.cream }}>GET STARTED</Button>
            </Space>
          </div>
        )}
      </Header>

      <Content>

        {/* ═══════════════════════════════════════════════════ */}
        {/* SECTION 01 · HERO — full-viewport editorial cover    */}
        {/* ═══════════════════════════════════════════════════ */}
        <section className="grain" style={{
          minHeight: 'calc(100vh - 80px)',
          background: `
            radial-gradient(ellipse at 15% 30%, rgba(184,152,90,0.20) 0%, transparent 55%),
            radial-gradient(ellipse at 85% 80%, rgba(58,40,23,0.18) 0%, transparent 55%),
            linear-gradient(160deg, ${PALETTE.cream} 0%, ${PALETTE.tan} 60%, ${PALETTE.tanDeep} 100%)
          `,
          padding: isMobile ? '60px 24px' : '80px 64px',
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
        }}>
          <Row justify="center" style={{ width: '100%', position: 'relative', zIndex: 2 }}>
            <Col xs={24} xl={22}>
              <Row gutter={[48, 48]} align="middle">
                <Col xs={24} lg={14}>
                  <div style={{ marginBottom: 28, display: 'flex', alignItems: 'center', gap: 14 }}>
                    <div style={{ width: 60, height: 1, background: PALETTE.brown }} />
                    <Text className="mono" style={{ color: PALETTE.brown, fontSize: 11, letterSpacing: '0.28em', textTransform: 'uppercase', fontWeight: 600 }}>
                      Volume I · Issue MMXXVI
                    </Text>
                  </div>

                  <Title className="serif" style={{
                    color: PALETTE.black,
                    fontSize: isMobile ? 56 : 110,
                    fontWeight: 700,
                    letterSpacing: '-0.04em',
                    lineHeight: 0.92,
                    margin: 0,
                    marginBottom: 28,
                  }}>
                    The trust<br />
                    <span style={{ fontStyle: 'italic', color: PALETTE.brown }}>layer </span>
                    of the<br />internet.
                  </Title>

                  <Paragraph style={{
                    color: PALETTE.brownMid,
                    fontSize: isMobile ? 17 : 21,
                    lineHeight: 1.75,
                    maxWidth: 580,
                    marginBottom: 40,
                    fontWeight: 400,
                  }}>
                    Oldwest.net is the heritage-grade infrastructure platform for CDN brokerage, identity governance, municipal toll economics, and the subscriber dividend bond. Built on Solana. Settled in USDC. Powered by Lumen.
                  </Paragraph>

                  <Space size={16} wrap>
                    <Button
                      href="/create-account"
                      icon={<ArrowRightOutlined />}
                      size="large"
                      style={{
                        background: PALETTE.black,
                        borderColor: PALETTE.black,
                        color: PALETTE.cream,
                        borderRadius: 0,
                        height: 56,
                        padding: '0 32px',
                        fontWeight: 700,
                        fontSize: 13,
                        letterSpacing: '0.14em',
                        textTransform: 'uppercase',
                        boxShadow: `0 8px 0 ${PALETTE.brown}, 0 18px 32px rgba(10,9,8,0.25)`,
                      }}
                    >
                      Open an Account
                    </Button>
                    <Button
                      href="/whitepaper"
                      size="large"
                      style={{
                        background: 'transparent',
                        borderColor: PALETTE.black,
                        color: PALETTE.black,
                        borderRadius: 0,
                        height: 56,
                        padding: '0 32px',
                        fontWeight: 700,
                        fontSize: 13,
                        letterSpacing: '0.14em',
                        textTransform: 'uppercase',
                        borderWidth: 1.5,
                      }}
                    >
                      Read the Whitepaper
                    </Button>
                  </Space>

                  <div style={{ marginTop: 60, display: 'flex', alignItems: 'center', gap: 8 }}>
                    <ArrowDownOutlined style={{ color: PALETTE.brownLight, fontSize: 14 }} />
                    <Text className="mono" style={{ color: PALETTE.brownLight, fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase' }}>
                      Scroll to begin
                    </Text>
                  </div>
                </Col>

                <Col xs={24} lg={10}>
                  <div style={{
                    border: `1px solid ${PALETTE.brown}`,
                    background: PALETTE.parchment,
                    padding: isMobile ? 28 : 40,
                    boxShadow: `12px 12px 0 ${PALETTE.black}`,
                  }}>
                    <Text className="mono" style={{ color: PALETTE.brown, fontSize: 10, letterSpacing: '0.25em', textTransform: 'uppercase', fontWeight: 700, display: 'block', marginBottom: 24 }}>
                      Filed at the Edge · Patent OWS-OLDWESTNET-MASTER-001
                    </Text>

                    <Space direction="vertical" size={20} style={{ width: '100%' }}>
                      {[
                        { k: 'Delivery Partner', v: 'Lumen Technologies' },
                        { k: 'Settlement Rail', v: 'Solana · USDC' },
                        { k: 'Custodian', v: 'Coinbase Prime' },
                        { k: 'Wallet Layer', v: 'Circle Wallet Platform' },
                        { k: 'Indenture Trustee', v: 'Chartered Trust Co.' },
                      ].map((row, i) => (
                        <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 16, paddingBottom: 16, borderBottom: i < 4 ? `1px dashed ${PALETTE.tanDeep}` : 'none' }}>
                          <Text className="mono" style={{ color: PALETTE.brownLight, fontSize: 10, letterSpacing: '0.16em', textTransform: 'uppercase' }}>{row.k}</Text>
                          <Text className="serif" style={{ color: PALETTE.black, fontSize: 17, fontWeight: 600, textAlign: 'right' }}>{row.v}</Text>
                        </div>
                      ))}
                    </Space>

                    <div style={{ marginTop: 28, padding: 16, background: PALETTE.black, color: PALETTE.cream }}>
                      <Text className="mono" style={{ color: PALETTE.bronze, fontSize: 10, letterSpacing: '0.2em', display: 'block', marginBottom: 6 }}>· LIVE</Text>
                      <Text className="serif" style={{ color: PALETTE.cream, fontSize: 14, fontStyle: 'italic' }}>
                        "Infrastructure that pays its participants."
                      </Text>
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </section>


        {/* ═══════════════════════════════════════════════════ */}
        {/* SECTION 02 · MANIFESTO — black canvas                */}
        {/* ═══════════════════════════════════════════════════ */}
        <section className="grain" style={{
          minHeight: '100vh',
          background: `linear-gradient(180deg, ${PALETTE.black} 0%, ${PALETTE.charcoal} 100%)`,
          padding: isMobile ? '80px 24px' : '120px 64px',
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
        }}>
          <Row justify="center" style={{ width: '100%' }}>
            <Col xs={24} xl={20}>
              <Row gutter={[48, 64]}>
                <Col xs={24} lg={10}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 32 }}>
                    <div style={{ width: 60, height: 1, background: PALETTE.bronze }} />
                    <Text className="mono" style={{ color: PALETTE.bronze, fontSize: 11, letterSpacing: '0.28em', textTransform: 'uppercase', fontWeight: 600 }}>
                      §02 · The Manifesto
                    </Text>
                  </div>
                  <Title className="serif" style={{
                    color: PALETTE.cream,
                    fontSize: isMobile ? 40 : 64,
                    fontWeight: 700,
                    lineHeight: 1.05,
                    letterSpacing: '-0.025em',
                    margin: 0,
                  }}>
                    Built like<br />
                    <span style={{ fontStyle: 'italic', color: PALETTE.bronze }}>the railways.</span><br />
                    Engineered for<br />the next century.
                  </Title>
                </Col>

                <Col xs={24} lg={14}>
                  <Space direction="vertical" size={36}>
                    <Paragraph style={{ color: PALETTE.tan, fontSize: isMobile ? 17 : 20, lineHeight: 1.85, margin: 0, fontWeight: 300 }}>
                      A regional fiber operator that competes on price against the national carriers eventually loses. We chose a different posture — one the incumbents <em style={{ color: PALETTE.bronze, fontStyle: 'italic' }}>structurally cannot replicate</em>.
                    </Paragraph>
                    <Paragraph style={{ color: PALETTE.tan, fontSize: isMobile ? 17 : 20, lineHeight: 1.85, margin: 0, fontWeight: 300 }}>
                      Subscribers are paid a residual on every byte of CDN-and-DeFi traffic their circuit carries. Municipalities receive an automatic, auditable franchise toll. Identities are cryptographically attested. And the residual stream is wrapped into a <strong style={{ color: PALETTE.cream, fontWeight: 600 }}>registered, income-bearing bond</strong>.
                    </Paragraph>
                    <Paragraph style={{ color: PALETTE.tan, fontSize: isMobile ? 17 : 20, lineHeight: 1.85, margin: 0, fontWeight: 300 }}>
                      No tokens. No speculation. No regulatory shortcuts. Just the careful, deliberate construction of an infrastructure platform that <em style={{ color: PALETTE.bronze, fontStyle: 'italic' }}>compounds</em> for everyone who joins it.
                    </Paragraph>

                    <div style={{
                      borderLeft: `2px solid ${PALETTE.bronze}`,
                      paddingLeft: 24,
                      marginTop: 20,
                    }}>
                      <Text className="serif" style={{ color: PALETTE.cream, fontSize: 24, fontStyle: 'italic', lineHeight: 1.4, display: 'block' }}>
                        "Build the network. Light the customers. Publish the data. Pay the residuals. Remit the tolls. Repeat in the next metro."
                      </Text>
                      <Text className="mono" style={{ color: PALETTE.brownLight, fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', marginTop: 12, display: 'block' }}>
                        — Old West Solutions LLC, Founder's Letter
                      </Text>
                    </div>
                  </Space>
                </Col>
              </Row>
            </Col>
          </Row>
        </section>


        {/* ═══════════════════════════════════════════════════ */}
        {/* SECTION 03 · CAPABILITIES — full-page rustic grid    */}
        {/* ═══════════════════════════════════════════════════ */}
        <section className="grain vignette" style={{
          minHeight: '100vh',
          background: `linear-gradient(180deg, ${PALETTE.tan} 0%, ${PALETTE.cream} 100%)`,
          padding: isMobile ? '80px 24px' : '120px 64px',
        }}>
          <Row justify="center">
            <Col xs={24} xl={22}>
              <Row gutter={[48, 48]} style={{ marginBottom: 64 }}>
                <Col xs={24} lg={12}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 24 }}>
                    <div style={{ width: 60, height: 1, background: PALETTE.brown }} />
                    <Text className="mono" style={{ color: PALETTE.brown, fontSize: 11, letterSpacing: '0.28em', textTransform: 'uppercase', fontWeight: 600 }}>
                      §03 · Six Capabilities
                    </Text>
                  </div>
                  <Title className="serif" style={{
                    color: PALETTE.black,
                    fontSize: isMobile ? 40 : 68,
                    fontWeight: 700,
                    lineHeight: 1.0,
                    letterSpacing: '-0.03em',
                    margin: 0,
                  }}>
                    A platform of<br /><em style={{ color: PALETTE.brown, fontStyle: 'italic' }}>uncommon</em> integrity.
                  </Title>
                </Col>
                <Col xs={24} lg={12} style={{ display: 'flex', alignItems: 'flex-end' }}>
                  <Paragraph style={{ color: PALETTE.brownMid, fontSize: 17, lineHeight: 1.85, margin: 0, maxWidth: 480 }}>
                    Six interlocking systems built to carry traffic, settle revenue, and protect the people and businesses that participate in the network.
                  </Paragraph>
                </Col>
              </Row>

              <Row gutter={[0, 0]}>
                {capabilities.map((cap, i) => {
                  const isLastRow = i >= capabilities.length - 3
                  const isLastCol = (i + 1) % 3 === 0
                  return (
                    <Col xs={24} md={12} lg={8} key={cap.title}>
                      <div className="cap-card" style={{
                        padding: isMobile ? 32 : 44,
                        background: i % 2 === 0 ? PALETTE.parchment : PALETTE.cream,
                        border: `1px solid ${PALETTE.tanDeep}`,
                        borderTop: i < 3 ? `1px solid ${PALETTE.tanDeep}` : 'none',
                        borderLeft: i % 3 === 0 ? `1px solid ${PALETTE.tanDeep}` : 'none',
                        borderBottom: isLastRow ? `1px solid ${PALETTE.tanDeep}` : 'none',
                        borderRight: !isLastCol ? `1px solid ${PALETTE.tanDeep}` : `1px solid ${PALETTE.tanDeep}`,
                        height: '100%',
                        position: 'relative',
                        cursor: 'default',
                      }}>
                        <Text className="mono" style={{
                          color: PALETTE.bronze,
                          fontSize: 11,
                          letterSpacing: '0.22em',
                          fontWeight: 700,
                          display: 'block',
                          marginBottom: 24,
                        }}>
                          {cap.num} / 06
                        </Text>

                        <div style={{
                          width: 56, height: 56,
                          borderRadius: '50%',
                          background: PALETTE.black,
                          color: PALETTE.bronze,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: 22,
                          marginBottom: 28,
                          border: `1px solid ${PALETTE.bronze}`,
                        }}>
                          {cap.icon}
                        </div>

                        <Title className="serif" level={3} style={{
                          color: PALETTE.black,
                          fontSize: 28,
                          fontWeight: 700,
                          letterSpacing: '-0.02em',
                          marginTop: 0,
                          marginBottom: 6,
                        }}>
                          {cap.title}
                        </Title>
                        <Text className="mono" style={{
                          color: PALETTE.brown,
                          fontSize: 11,
                          letterSpacing: '0.16em',
                          textTransform: 'uppercase',
                          fontWeight: 600,
                          display: 'block',
                          marginBottom: 16,
                        }}>
                          {cap.sub}
                        </Text>
                        <Paragraph style={{ color: PALETTE.brownMid, fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                          {cap.body}
                        </Paragraph>
                      </div>
                    </Col>
                  )
                })}
              </Row>
            </Col>
          </Row>
        </section>


        {/* ═══════════════════════════════════════════════════ */}
        {/* SECTION 04 · DIVIDEND BOND — luxury feature           */}
        {/* ═══════════════════════════════════════════════════ */}
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
                      §04 · The Subscriber Dividend Bond
                    </Text>
                  </div>
                  <Title className="serif" style={{
                    color: PALETTE.cream,
                    fontSize: isMobile ? 44 : 76,
                    fontWeight: 700,
                    lineHeight: 1.0,
                    letterSpacing: '-0.035em',
                    margin: 0,
                    marginBottom: 28,
                  }}>
                    Your circuit<br />
                    <em style={{ color: PALETTE.bronze, fontStyle: 'italic' }}>pays a coupon.</em>
                  </Title>
                  <Paragraph style={{ color: PALETTE.tan, fontSize: 18, lineHeight: 1.85, marginBottom: 32, fontWeight: 300 }}>
                    The Oldwest Subscriber Dividend Bond is a registered, income-bearing security backed by the residual revenue of the Oldwest CDN network. Issued by a bankruptcy-remote Delaware Statutory Trust, administered under a Trust Indenture Act-qualified indenture, custodied at Coinbase Prime, and paid quarterly via ACH or USDC to your Circle Wallet.
                  </Paragraph>

                  <Space direction="vertical" size={12} style={{ marginBottom: 32 }}>
                    {[
                      ['Issuer', 'Old West Solutions SPV (Delaware Statutory Trust)'],
                      ['Indenture Trustee', 'Chartered Trust Co. · TIA-qualified'],
                      ['Paying Agent', 'Regulated Bank · ACH + USDC'],
                      ['Digital Custodian', 'Coinbase Prime'],
                      ['Wallet Infrastructure', 'Circle Wallet Platform'],
                    ].map(([k, v], i) => (
                      <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 16, padding: '10px 0', borderBottom: `1px dashed rgba(184,152,90,0.25)` }}>
                        <Text className="mono" style={{ color: PALETTE.bronze, fontSize: 10, letterSpacing: '0.16em', textTransform: 'uppercase' }}>{k}</Text>
                        <Text style={{ color: PALETTE.cream, fontSize: 14, textAlign: 'right' }}>{v}</Text>
                      </div>
                    ))}
                  </Space>

                  <Button href="/treasury" size="large" icon={<ArrowRightOutlined />} style={{
                    background: PALETTE.bronze,
                    borderColor: PALETTE.bronze,
                    color: PALETTE.black,
                    borderRadius: 0,
                    height: 52,
                    padding: '0 28px',
                    fontWeight: 800,
                    fontSize: 12,
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    boxShadow: `0 6px 0 ${PALETTE.black}`,
                  }}>
                    View the Term Sheet
                  </Button>
                </Col>

                <Col xs={24} lg={12}>
                  <div style={{
                    background: PALETTE.parchment,
                    border: `2px solid ${PALETTE.bronze}`,
                    padding: isMobile ? 28 : 44,
                    boxShadow: `16px 16px 0 ${PALETTE.bronze}`,
                    position: 'relative',
                  }}>
                    {/* Watermark */}
                    <div style={{
                      position: 'absolute',
                      top: 16, right: 24,
                      fontSize: 9,
                      letterSpacing: '0.3em',
                      color: PALETTE.brownLight,
                      fontFamily: 'monospace',
                    }}>
                      OWS · SPV · 2026
                    </div>

                    <Text className="mono" style={{
                      color: PALETTE.brown,
                      fontSize: 10,
                      letterSpacing: '0.3em',
                      textTransform: 'uppercase',
                      fontWeight: 700,
                      display: 'block',
                      marginBottom: 8,
                    }}>
                      Term Sheet · Illustrative
                    </Text>
                    <Title className="serif" style={{
                      color: PALETTE.black,
                      fontSize: 30,
                      fontWeight: 700,
                      letterSpacing: '-0.02em',
                      marginTop: 0,
                      marginBottom: 4,
                    }}>
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
                      ].map((row, i) => (
                        <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                          <Text className="mono" style={{ color: PALETTE.brownLight, fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase' }}>{row.k}</Text>
                          <Text className="serif" style={{
                            color: row.highlight ? PALETTE.brown : PALETTE.black,
                            fontSize: row.highlight ? 26 : 18,
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


        {/* ═══════════════════════════════════════════════════ */}
        {/* SECTION 05 · STATS — heritage data table              */}
        {/* ═══════════════════════════════════════════════════ */}
        <section className="grain" style={{
          minHeight: '100vh',
          background: `linear-gradient(180deg, ${PALETTE.cream} 0%, ${PALETTE.tan} 100%)`,
          padding: isMobile ? '80px 24px' : '120px 64px',
          display: 'flex',
          alignItems: 'center',
        }}>
          <Row justify="center" style={{ width: '100%' }}>
            <Col xs={24} xl={22}>
              <div style={{ marginBottom: 60 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 24 }}>
                  <div style={{ width: 60, height: 1, background: PALETTE.brown }} />
                  <Text className="mono" style={{ color: PALETTE.brown, fontSize: 11, letterSpacing: '0.28em', textTransform: 'uppercase', fontWeight: 600 }}>
                    §05 · By the Numbers
                  </Text>
                </div>
                <Title className="serif" style={{
                  color: PALETTE.black,
                  fontSize: isMobile ? 40 : 72,
                  fontWeight: 700,
                  lineHeight: 1.0,
                  letterSpacing: '-0.035em',
                  margin: 0,
                }}>
                  Numbers worth<br /><em style={{ color: PALETTE.brown, fontStyle: 'italic' }}>hand-set in lead.</em>
                </Title>
              </div>

              <Row gutter={[0, 0]} style={{ borderTop: `2px solid ${PALETTE.black}`, borderBottom: `2px solid ${PALETTE.black}` }}>
                {[
                  { num: '22+', k: 'Brokered Edge Regions', sub: 'Lumen + partner capacity' },
                  { num: '8.64%', k: 'Effective Coupon', sub: 'Residential illustrative' },
                  { num: '100%', k: 'Identity Attested', sub: 'KYC + beneficial owner' },
                  { num: '1', k: 'Settlement Rail', sub: 'Solana · USDC · Coinbase' },
                ].map((s, i) => (
                  <Col xs={24} md={12} lg={6} key={s.k}>
                    <div style={{
                      padding: isMobile ? '40px 24px' : '52px 32px',
                      borderRight: !isMobile && i < 3 ? `1px solid ${PALETTE.brownLight}` : 'none',
                      borderBottom: isMobile && i < 3 ? `1px solid ${PALETTE.brownLight}` : 'none',
                      background: i % 2 === 0 ? 'transparent' : 'rgba(58,40,23,0.04)',
                      height: '100%',
                    }}>
                      <Text className="serif" style={{
                        color: PALETTE.black,
                        fontSize: 80,
                        fontWeight: 700,
                        letterSpacing: '-0.05em',
                        lineHeight: 1,
                        display: 'block',
                        marginBottom: 16,
                      }}>
                        {s.num}
                      </Text>
                      <Text className="mono" style={{
                        color: PALETTE.brown,
                        fontSize: 11,
                        letterSpacing: '0.18em',
                        textTransform: 'uppercase',
                        fontWeight: 700,
                        display: 'block',
                        marginBottom: 6,
                      }}>
                        {s.k}
                      </Text>
                      <Text style={{ color: PALETTE.brownMid, fontSize: 13, fontStyle: 'italic' }}>
                        {s.sub}
                      </Text>
                    </div>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </section>


        {/* ═══════════════════════════════════════════════════ */}
        {/* SECTION 06 · CTA BAND                                 */}
        {/* ═══════════════════════════════════════════════════ */}
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
                §06 · Open Your Account
              </Text>
              <div style={{ width: 60, height: 1, background: PALETTE.bronze }} />
            </div>
            <Title className="serif" style={{
              color: PALETTE.cream,
              fontSize: isMobile ? 44 : 84,
              fontWeight: 700,
              lineHeight: 1.0,
              letterSpacing: '-0.035em',
              margin: 0,
              marginBottom: 32,
            }}>
              Join the network<br />
              <em style={{ color: PALETTE.bronze, fontStyle: 'italic' }}>that pays you back.</em>
            </Title>
            <Paragraph style={{ color: PALETTE.tan, fontSize: 19, lineHeight: 1.75, marginBottom: 44, fontWeight: 300 }}>
              A verified identity. A subscriber dividend bond. A connected-property registry. The first internet infrastructure built on heritage-grade engineering and cryptographic trust.
            </Paragraph>
            <Space size={20} wrap>
              <Button href="/create-account" icon={<ArrowRightOutlined />} size="large" style={{
                background: PALETTE.cream,
                borderColor: PALETTE.cream,
                color: PALETTE.black,
                borderRadius: 0,
                height: 60,
                padding: '0 40px',
                fontWeight: 800,
                fontSize: 13,
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                boxShadow: `0 8px 0 ${PALETTE.bronze}`,
              }}>
                Open an Account
              </Button>
              <Button href="/login" size="large" style={{
                background: 'transparent',
                borderColor: PALETTE.cream,
                color: PALETTE.cream,
                borderRadius: 0,
                height: 60,
                padding: '0 40px',
                fontWeight: 700,
                fontSize: 13,
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                borderWidth: 1.5,
              }}>
                Sign In
              </Button>
            </Space>
          </div>
        </section>
      </Content>


      {/* ─────── FOOTER ─────── */}
      <Footer style={{
        background: PALETTE.black,
        padding: isMobile ? '60px 24px 32px' : '88px 64px 36px',
        borderTop: `1px solid ${PALETTE.brown}`,
      }}>
        <Row justify="center">
          <Col xs={24} xl={22}>
            <Row gutter={[48, 48]}>
              <Col xs={24} lg={8}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 24 }}>
                  <div style={{
                    width: 48, height: 48, borderRadius: 4,
                    background: PALETTE.cream,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <Text className="serif" style={{ color: PALETTE.black, fontWeight: 700, fontSize: 18 }}>OW</Text>
                  </div>
                  <div>
                    <Text className="serif" style={{ color: PALETTE.cream, fontWeight: 700, fontSize: 24, letterSpacing: '-0.01em', display: 'block', lineHeight: 1 }}>Oldwest</Text>
                    <Text className="mono" style={{ color: PALETTE.brownLight, fontSize: 9, letterSpacing: '0.22em', textTransform: 'uppercase' }}>Old West Solutions LLC</Text>
                  </div>
                </div>
                <Paragraph style={{ color: PALETTE.tan, fontSize: 14, lineHeight: 1.8, marginBottom: 20, maxWidth: 360 }}>
                  Heritage-grade infrastructure for the modern internet. CDN brokerage, identity governance, dividend bonds, and municipal toll remittance — built on Solana, settled in USDC.
                </Paragraph>
                <Tag style={{ borderRadius: 0, background: 'transparent', borderColor: PALETTE.bronze, color: PALETTE.bronze, padding: '6px 12px', fontFamily: 'monospace', fontSize: 10, letterSpacing: '0.18em' }}>
                  PATENT OWS-OLDWESTNET-MASTER-001
                </Tag>
              </Col>

              {[
                { title: 'Product', links: [['Platform', '/explore-platform'], ['Marketplace', '/marketplace'], ['Account', '/account'], ['Dashboard', '/dashboard']] },
                { title: 'Economics', links: [['Treasury', '/treasury'], ['Dividend Bond', '/treasury'], ['Whitepaper', '/whitepaper'], ['Toll Protocol', '/whitepaper']] },
                { title: 'Trust', links: [['Identity', '/create-account'], ['Security', '/security'], ['Compliance', '/compliance'], ['Privacy', '/privacy-policy']] },
                { title: 'Access', links: [['Sign In', '/login'], ['Register', '/create-account'], ['Terms', '/terms-of-service'], ['Download App', '/download-app']] },
              ].map((col) => (
                <Col xs={12} sm={6} lg={4} key={col.title}>
                  <Text className="mono" style={{
                    color: PALETTE.bronze,
                    fontWeight: 700,
                    fontSize: 10,
                    letterSpacing: '0.22em',
                    textTransform: 'uppercase',
                    display: 'block',
                    marginBottom: 18,
                  }}>
                    {col.title}
                  </Text>
                  <Space direction="vertical" size={10}>
                    {col.links.map(([label, href]) => (
                      <Link key={label} href={href} className="serif"
                        style={{ color: PALETTE.tan, fontSize: 15, transition: 'color 0.2s', textDecoration: 'none' }}>
                        {label}
                      </Link>
                    ))}
                  </Space>
                </Col>
              ))}
            </Row>

            <div style={{
              marginTop: 56,
              paddingTop: 28,
              borderTop: `1px solid ${PALETTE.brown}`,
              display: 'flex',
              flexDirection: isMobile ? 'column' : 'row',
              gap: 16,
              justifyContent: 'space-between',
              alignItems: isMobile ? 'flex-start' : 'center',
            }}>
              <Text className="mono" style={{ color: PALETTE.brownLight, fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase' }}>
                © MMXXVI · Old West Solutions LLC · Texas, USA
              </Text>
              <Text className="mono" style={{ color: PALETTE.brownLight, fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase' }}>
                Filed under OWS-OLDWESTNET-MASTER-001
              </Text>
            </div>
          </Col>
        </Row>
      </Footer>
    </Layout>
  )
}
