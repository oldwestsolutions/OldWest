'use client'

import Link from 'next/link'
import { Layout, Row, Col, Card, Typography, Divider, Button, Space } from 'antd'
import {
  SafetyOutlined, GlobalOutlined, DatabaseOutlined, FileProtectOutlined,
  WalletOutlined, ApiOutlined, ThunderboltOutlined, LockOutlined,
  CheckCircleFilled, MenuOutlined, CloseOutlined, ArrowRightOutlined,
  BankOutlined, RadarChartOutlined, CloudServerOutlined, AuditOutlined,
  SignalFilled, FieldTimeOutlined, TeamOutlined, DollarOutlined
} from '@ant-design/icons'
import dynamic from 'next/dynamic'
import { useState, useEffect } from 'react'

const HeroVideoBackground = dynamic(() => import('@/components/HeroVideoBackground'), { ssr: false })

const { Header, Content, Footer } = Layout
const { Title, Paragraph, Text } = Typography

export default function Home() {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
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

  const navLinks = [
    { href: '/marketplace', label: 'CDN Network' },
    { href: '/treasury', label: 'Treasury' },
    { href: '/whitepaper', label: 'Whitepaper' },
  ]

  return (
    <Layout style={{ minHeight: '100vh', background: '#000000' }}>

      {/* Navigation */}
      <Header style={{
        background: '#000000',
        borderBottom: '1px solid #1f1f1f',
        padding: '0 24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '72px',
        position: 'fixed',
        top: isHeaderVisible ? 0 : -72,
        left: 0,
        right: 0,
        zIndex: 1000,
        transition: 'top 0.3s ease-in-out'
      }}>
        <Row align="middle" justify="space-between" gutter={[12, 0]} style={{ width: '100%', flexWrap: 'nowrap' }}>
          <Col flex="none">
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <div style={{
                width: 32, height: 32,
                background: '#141414',
                border: '1px solid #1f1f1f',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                borderRadius: 8
              }}>
                <SignalFilled style={{ fontSize: 14, color: '#8c8c8c' }} />
              </div>
              <Link href="/" style={{ textDecoration: 'none' }}>
                <Text strong style={{ fontSize: 16, color: '#ffffff', letterSpacing: '0.5px' }}>OLDWEST.NET</Text>
              </Link>
              <Space size="middle" style={{ display: isMobile ? 'none' : 'flex', marginLeft: 24 }}>
                {navLinks.map(link => (
                  <Link key={link.href} href={link.href}
                    style={{ color: '#8c8c8c', fontSize: 14, textDecoration: 'none', transition: 'color 0.3s' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#ffffff'}
                    onMouseLeave={(e) => e.currentTarget.style.color = '#8c8c8c'}
                  >
                    {link.label}
                  </Link>
                ))}
              </Space>
            </div>
          </Col>
          <Col flex="none" style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Space size="middle" style={{ display: isMobile ? 'none' : 'flex' }}>
              <Button
                type="primary"
                style={{
                  background: '#ffffff', borderColor: '#ffffff', color: '#000000',
                  borderRadius: 12, fontWeight: 700, boxShadow: 'none', minHeight: 44
                }}
                href="/login"
              >
                SIGN IN
              </Button>
            </Space>
            <Button
              type="text"
              icon={mobileMenuOpen ? <CloseOutlined /> : <MenuOutlined />}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{ color: '#ffffff', display: isMobile ? 'flex' : 'none', alignItems: 'center', justifyContent: 'center', minWidth: 44, minHeight: 44 }}
            />
          </Col>
        </Row>
        {mobileMenuOpen && isMobile && (
          <div style={{ position: 'absolute', top: '72px', left: 0, right: 0, background: '#000000', borderBottom: '1px solid #1f1f1f', padding: '24px', zIndex: 999 }}>
            <Space direction="vertical" size="large" style={{ width: '100%' }}>
              {navLinks.map(link => (
                <Link key={link.href} href={link.href}
                  style={{ color: '#8c8c8c', fontSize: 16, textDecoration: 'none', display: 'block', padding: '12px 0' }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Button type="primary" block
                style={{ background: '#ffffff', borderColor: '#ffffff', color: '#000000', borderRadius: 12, fontWeight: 700, boxShadow: 'none', minHeight: 44 }}
                href="/login" onClick={() => setMobileMenuOpen(false)}
              >
                SIGN IN
              </Button>
            </Space>
          </div>
        )}
      </Header>

      <Content>

        {/* ── HERO ─────────────────────────────────────────────────────────── */}
        <section style={{
          minHeight: '100vh',
          borderBottom: '1px solid #1f1f1f',
          padding: '80px 24px',
          display: 'flex', alignItems: 'center',
          position: 'relative', overflow: 'hidden'
        }}>
          <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, opacity: 0.25 }}>
            <HeroVideoBackground />
          </div>
          <div style={{ position: 'relative', zIndex: 1, width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Row justify="center" align="middle" style={{ width: '100%', textAlign: 'center' }}>
              <Col xs={24} lg={18} xl={14}>
                <div style={{ display: 'inline-block', background: '#0a0a0a', border: '1px solid #1f1f1f', borderRadius: 100, padding: '6px 20px', marginBottom: 32 }}>
                  <Text style={{ color: '#8c8c8c', fontSize: 12, letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 600 }}>
                    Old West Solutions LLC · Docket OWS-OLDWESTNET-MASTER-001
                  </Text>
                </div>
                <Title
                  level={1}
                  style={{
                    fontSize: isMobile ? 40 : 80,
                    fontWeight: 800,
                    color: '#ffffff',
                    marginBottom: 24,
                    lineHeight: 1.05,
                    letterSpacing: '-0.04em',
                    textAlign: 'center'
                  }}
                >
                  The Internet's<br />Trust Layer
                </Title>
                <Paragraph style={{ fontSize: isMobile ? 16 : 20, color: '#8c8c8c', lineHeight: 1.8, marginBottom: 40, textAlign: 'center', maxWidth: 680, margin: '0 auto 40px' }}>
                  Oldwest.net is a decentralized CDN brokerage and internet governance network — verifying real identities, protecting hosted assets, delivering advertising with cryptographic receipts, and paying subscribers a revenue dividend. Built on Solana. Settled through Coinbase. Delivered over Lumen.
                </Paragraph>
                <Space size="middle" direction={isMobile ? 'vertical' : 'horizontal'} style={{ width: isMobile ? '100%' : 'auto', justifyContent: 'center' }}>
                  <Button
                    size="large" block={isMobile}
                    style={{
                      background: '#ffffff', borderColor: '#ffffff', color: '#000000',
                      borderRadius: 12, fontWeight: 700, height: 56,
                      paddingLeft: isMobile ? 24 : 48, paddingRight: isMobile ? 24 : 48,
                      minHeight: 44, fontSize: 15, letterSpacing: '0.04em'
                    }}
                    href="/create-account"
                  >
                    JOIN THE NETWORK
                  </Button>
                  <Button
                    size="large" block={isMobile}
                    style={{
                      background: '#0a0a0a', borderColor: '#1f1f1f', color: '#d9d9d9',
                      borderRadius: 12, fontWeight: 600, height: 56,
                      paddingLeft: isMobile ? 24 : 48, paddingRight: isMobile ? 24 : 48,
                      minHeight: 44
                    }}
                    href="/whitepaper"
                  >
                    READ WHITEPAPER
                  </Button>
                </Space>

                <div style={{ marginTop: 64, display: 'flex', justifyContent: 'center', gap: isMobile ? 24 : 48, flexWrap: 'wrap' }}>
                  {[
                    { label: 'CDN Partners', value: 'Lumen Technologies' },
                    { label: 'Settlement', value: 'Solana + Coinbase' },
                    { label: 'Stablecoin', value: 'USDC via Circle' },
                    { label: 'Patent', value: 'OWS-OLDWESTNET-MASTER-001' },
                  ].map(stat => (
                    <div key={stat.label} style={{ textAlign: 'center' }}>
                      <Text style={{ color: '#ffffff', fontSize: 14, display: 'block', fontWeight: 600 }}>{stat.value}</Text>
                      <Text style={{ color: '#595959', fontSize: 11, letterSpacing: '0.08em', textTransform: 'uppercase' }}>{stat.label}</Text>
                    </div>
                  ))}
                </div>
              </Col>
            </Row>
          </div>
        </section>

        {/* ── SEVEN CAPABILITIES ──────────────────────────────────────────── */}
        <section style={{
          borderBottom: '1px solid #1f1f1f',
          background: '#0a0a0a',
          padding: isMobile ? '60px 24px' : '120px 48px'
        }}>
          <Row justify="center">
            <Col xs={24} lg={20} xl={18}>
              <div style={{ marginBottom: 64 }}>
                <Text style={{ fontSize: 12, color: '#595959', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600 }}>THE PLATFORM</Text>
                <Divider style={{ margin: '8px 0 24px 0', borderColor: '#1f1f1f' }} />
                <Title level={2} style={{ color: '#ffffff', fontSize: isMobile ? 28 : 44, fontWeight: 700, letterSpacing: '-0.03em', marginBottom: 16 }}>
                  Seven capabilities. One coherent architecture.
                </Title>
                <Paragraph style={{ color: '#8c8c8c', fontSize: 16, lineHeight: 1.8, maxWidth: 720 }}>
                  No individual component depends on speculative belief. Each layer earns revenue under commercial agreements with identifiable counterparties — and distributes that revenue to the parties who made it possible.
                </Paragraph>
              </div>
              <Row gutter={[24, 24]}>
                {[
                  {
                    icon: <SafetyOutlined style={{ fontSize: 28, color: '#8c8c8c' }} />,
                    title: 'Identity Governance',
                    desc: 'Cryptographic attestation that any counterparty in an online interaction is a real human or operating business — not a synthetic product of generative AI. Tiered verification, Circle Wallet–bound key pairs, and real-time attestation for every session.'
                  },
                  {
                    icon: <GlobalOutlined style={{ fontSize: 28, color: '#8c8c8c' }} />,
                    title: 'CDN Brokerage via Lumen',
                    desc: 'Oldwest.net intermediates between content publishers, DeFi protocols, and a heterogeneous supply of edge capacity contributed by Lumen Technologies and independent participants. Demand and supply matched in real time, settled on-chain per epoch.'
                  },
                  {
                    icon: <LockOutlined style={{ fontSize: 28, color: '#8c8c8c' }} />,
                    title: 'Protected Asset Hosting',
                    desc: 'AI models, software applications, and creative works hosted under confidential-computing enclave protections equivalent to military-grade cryptographic standards. Per-use licensing enforced at delivery time. Takedown futility eliminated structurally.'
                  },
                  {
                    icon: <AuditOutlined style={{ fontSize: 28, color: '#8c8c8c' }} />,
                    title: 'Verified Ad Receipts',
                    desc: 'Programmatic advertising delivered at the Lumen edge — creative selection, frequency capping, and impression confirmation executed within attested enclaves. Every impression produces a cryptographically signed receipt verifiable against the Solana settlement record.'
                  },
                  {
                    icon: <RadarChartOutlined style={{ fontSize: 28, color: '#8c8c8c' }} />,
                    title: 'Connected Property Registry',
                    desc: 'Internet-connected personal property — laptops, vehicles, agricultural equipment, electronics — registered to verified-identity owners on Solana. Lost-or-stolen reports activate monitoring across the Lumen network, with recovery residuals paid to detecting participants.'
                  },
                  {
                    icon: <BankOutlined style={{ fontSize: 28, color: '#8c8c8c' }} />,
                    title: 'Gas Toll & Municipal Revenue',
                    desc: 'A geo-attributed toll deducted from every settlement epoch and remitted to the municipalities whose rights-of-way the fiber traverses — the digital extension of the cable-television franchise fee, auditable in real time on Solana.'
                  },
                  {
                    icon: <DollarOutlined style={{ fontSize: 28, color: '#8c8c8c' }} />,
                    title: 'Subscriber Dividend Bond',
                    desc: 'Subscribers may convert their CDN residual entitlement into a registered income-bearing instrument — revenue-backed, administered by a chartered trust company, coupon paid in USDC via Circle Wallet or ACH. The network pays its participants like a bond pays its holders.'
                  },
                ].map((cap, i) => (
                  <Col xs={24} sm={12} lg={i < 4 ? 6 : 8} key={i}>
                    <Card
                      bordered
                      style={{ background: '#000000', borderColor: '#1f1f1f', borderRadius: 12, height: '100%' }}
                      bodyStyle={{ padding: 28 }}
                    >
                      <div style={{ marginBottom: 16 }}>{cap.icon}</div>
                      <Title level={5} style={{ color: '#ffffff', fontSize: 15, fontWeight: 700, marginBottom: 10 }}>
                        {cap.title}
                      </Title>
                      <Paragraph style={{ color: '#8c8c8c', fontSize: 13, lineHeight: 1.7, margin: 0 }}>
                        {cap.desc}
                      </Paragraph>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </section>

        {/* ── CDN BROKERAGE ───────────────────────────────────────────────── */}
        <section style={{
          borderBottom: '1px solid #1f1f1f',
          background: '#000000',
          padding: isMobile ? '60px 24px' : '120px 48px'
        }}>
          <Row justify="center" gutter={[64, 48]}>
            <Col xs={24} lg={20} xl={18}>
              <Row gutter={[64, 48]} align="middle">
                <Col xs={24} lg={12}>
                  <Text style={{ fontSize: 12, color: '#595959', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600 }}>CDN BROKERAGE</Text>
                  <Divider style={{ margin: '8px 0 32px 0', borderColor: '#1f1f1f' }} />
                  <Title level={2} style={{ color: '#ffffff', fontSize: isMobile ? 28 : 40, fontWeight: 700, letterSpacing: '-0.03em', marginBottom: 24 }}>
                    The broker the internet was missing
                  </Title>
                  <Paragraph style={{ color: '#8c8c8c', fontSize: 16, lineHeight: 1.8, marginBottom: 32 }}>
                    Oldwest.net aggregates fragmented content delivery supply — from Lumen Technologies' global edge network to independent regional operators — and intermediates demand-side relationships with publishers, application platforms, and DeFi protocol operators.
                  </Paragraph>
                  <Space direction="vertical" size="large" style={{ width: '100%' }}>
                    {[
                      { title: 'One-minute settlement epochs', desc: 'Exploiting Solana\'s sub-cent transaction cost and 400ms finality to settle delivery revenue with supply-side participants in real time.' },
                      { title: 'Merkle-root subscriber claims', desc: 'Every subscriber\'s share of the residual pool is committed on-chain as a Merkle leaf. Claim it as a billing credit or USDC to your Circle Wallet.' },
                      { title: 'BigQuery analytics surface', desc: 'Commercial subscribers receive a managed BigQuery environment with the network\'s civic intelligence datasets available for joined analysis — the data moat no national carrier can replicate.' },
                    ].map((item, i) => (
                      <div key={i} style={{ display: 'flex', gap: 16 }}>
                        <CheckCircleFilled style={{ color: '#595959', fontSize: 18, marginTop: 2, flexShrink: 0 }} />
                        <div>
                          <Text style={{ color: '#ffffff', fontSize: 15, fontWeight: 600, display: 'block', marginBottom: 4 }}>{item.title}</Text>
                          <Text style={{ color: '#8c8c8c', fontSize: 14, lineHeight: 1.7 }}>{item.desc}</Text>
                        </div>
                      </div>
                    ))}
                  </Space>
                </Col>
                <Col xs={24} lg={12}>
                  <div style={{ background: '#0a0a0a', border: '1px solid #1f1f1f', borderRadius: 16, padding: 32, fontFamily: 'monospace' }}>
                    <Text style={{ color: '#595959', fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', display: 'block', marginBottom: 24 }}>
                      Settlement Epoch · Live · Solana
                    </Text>
                    {[
                      { label: 'Gross Revenue (60s epoch)', value: '$1,000.00', color: '#ffffff' },
                      { label: 'Operator Margin (30%)', value: '$300.00', color: '#8c8c8c' },
                      { label: 'Municipal Toll (10%)', value: '$100.00', color: '#8c8c8c' },
                      { label: 'Supply-Side Residual (40%)', value: '$400.00', color: '#52c41a' },
                      { label: 'Subscriber Residual (20%)', value: '$200.00', color: '#52c41a' },
                    ].map((row, i) => (
                      <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 0', borderBottom: i < 4 ? '1px solid #1f1f1f' : 'none' }}>
                        <Text style={{ color: '#595959', fontSize: 13 }}>{row.label}</Text>
                        <Text style={{ color: row.color, fontSize: 13, fontWeight: 600 }}>{row.value}</Text>
                      </div>
                    ))}
                    <div style={{ marginTop: 24, background: '#000000', border: '1px solid #27c93f30', borderRadius: 10, padding: '14px 16px', display: 'flex', alignItems: 'center', gap: 10 }}>
                      <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#27c93f', boxShadow: '0 0 8px #27c93f60' }} />
                      <Text style={{ color: '#27c93f', fontSize: 12, fontWeight: 600 }}>Merkle root committed · All recipients verifiable on-chain</Text>
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </section>

        {/* ── IDENTITY GOVERNANCE ─────────────────────────────────────────── */}
        <section style={{
          borderBottom: '1px solid #1f1f1f',
          background: '#0a0a0a',
          padding: isMobile ? '60px 24px' : '120px 48px'
        }}>
          <Row justify="center">
            <Col xs={24} lg={20} xl={18}>
              <Text style={{ fontSize: 12, color: '#595959', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600 }}>IDENTITY GOVERNANCE</Text>
              <Divider style={{ margin: '8px 0 48px 0', borderColor: '#1f1f1f' }} />
              <Row gutter={[48, 48]} align="middle">
                <Col xs={24} lg={14}>
                  <Title level={2} style={{ color: '#ffffff', fontSize: isMobile ? 28 : 40, fontWeight: 700, letterSpacing: '-0.03em', marginBottom: 24 }}>
                    Know you are talking to a real person. Or a real business.
                  </Title>
                  <Paragraph style={{ color: '#8c8c8c', fontSize: 16, lineHeight: 1.8, marginBottom: 24 }}>
                    Generative AI has reversed the default condition of the internet. An interaction that cannot be cryptographically attested must now be presumed synthetic until proven otherwise. Oldwest.net provides the attestation infrastructure.
                  </Paragraph>
                  <Paragraph style={{ color: '#8c8c8c', fontSize: 16, lineHeight: 1.8, marginBottom: 32 }}>
                    Every registered identity — natural person or operating business — is bound to a Circle Wallet and a cryptographic key pair. The network issues, on request, an attestation verifiable by any counterparty in real time. The attestation chain terminates in the network operator's root of trust.
                  </Paragraph>
                  <Row gutter={[16, 16]}>
                    {[
                      { tier: 'Basic', desc: 'Government-issued credential + liveness biometric' },
                      { tier: 'Commercial', desc: 'Business registration + beneficial ownership disclosure' },
                      { tier: 'High-Assurance', desc: 'Ongoing behavioral signals + counterparty references' },
                    ].map((tier, i) => (
                      <Col xs={24} key={i}>
                        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16, padding: '16px', background: '#000000', border: '1px solid #1f1f1f', borderRadius: 10 }}>
                          <div style={{ background: '#141414', border: '1px solid #1f1f1f', borderRadius: 6, padding: '4px 10px', flexShrink: 0 }}>
                            <Text style={{ color: '#595959', fontSize: 11, fontWeight: 700, letterSpacing: '0.06em' }}>{tier.tier.toUpperCase()}</Text>
                          </div>
                          <Text style={{ color: '#8c8c8c', fontSize: 14, lineHeight: 1.6 }}>{tier.desc}</Text>
                        </div>
                      </Col>
                    ))}
                  </Row>
                </Col>
                <Col xs={24} lg={10}>
                  <div style={{ background: '#000000', border: '1px solid #1f1f1f', borderRadius: 16, overflow: 'hidden' }}>
                    <div style={{ background: '#141414', borderBottom: '1px solid #1f1f1f', padding: '20px 24px', display: 'flex', alignItems: 'center', gap: 12 }}>
                      <SafetyOutlined style={{ fontSize: 20, color: '#8c8c8c' }} />
                      <Text style={{ color: '#ffffff', fontSize: 15, fontWeight: 600 }}>Oldwest Attestation</Text>
                      <div style={{ marginLeft: 'auto', display: 'flex', gap: 6 }}>
                        <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#27c93f', boxShadow: '0 0 6px #27c93f60' }} />
                        <Text style={{ color: '#27c93f', fontSize: 11 }}>VERIFIED</Text>
                      </div>
                    </div>
                    <div style={{ padding: '24px' }}>
                      {[
                        { label: 'Entity', value: 'Old West Solutions LLC' },
                        { label: 'Registration Tier', value: 'Commercial' },
                        { label: 'Jurisdiction', value: 'Texas, USA' },
                        { label: 'Beneficial Owner', value: 'Verified (KYC complete)' },
                        { label: 'Wallet', value: '0x7a3f...e92c (Circle)' },
                        { label: 'Attested By', value: 'Oldwest.net Root of Trust' },
                        { label: 'Valid Through', value: 'Continuous / Real-time' },
                      ].map((row, i) => (
                        <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: i < 6 ? '1px solid #1f1f1f' : 'none' }}>
                          <Text style={{ color: '#595959', fontSize: 12 }}>{row.label}</Text>
                          <Text style={{ color: '#d9d9d9', fontSize: 12, fontFamily: i === 4 ? 'monospace' : 'inherit' }}>{row.value}</Text>
                        </div>
                      ))}
                      <Button block style={{ marginTop: 20, background: '#0a0a0a', borderColor: '#1f1f1f', color: '#8c8c8c', borderRadius: 8, fontSize: 12 }}>
                        Verify on Solana Explorer →
                      </Button>
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </section>

        {/* ── CONNECTED PROPERTY REGISTRY ─────────────────────────────────── */}
        <section style={{
          borderBottom: '1px solid #1f1f1f',
          background: '#000000',
          padding: isMobile ? '60px 24px' : '120px 48px'
        }}>
          <Row justify="center">
            <Col xs={24} lg={20} xl={18}>
              <Text style={{ fontSize: 12, color: '#595959', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600 }}>CONNECTED PROPERTY REGISTRY</Text>
              <Divider style={{ margin: '8px 0 48px 0', borderColor: '#1f1f1f' }} />
              <Row gutter={[64, 48]}>
                <Col xs={24} lg={12}>
                  <Title level={2} style={{ color: '#ffffff', fontSize: isMobile ? 28 : 40, fontWeight: 700, letterSpacing: '-0.03em', marginBottom: 24 }}>
                    Lost items find their way back. Stolen ones have nowhere to hide.
                  </Title>
                  <Paragraph style={{ color: '#8c8c8c', fontSize: 16, lineHeight: 1.8, marginBottom: 24 }}>
                    Internet-connected personal property registered on the Solana blockchain — laptops, vehicles, agricultural equipment, construction machinery, consumer electronics — is associated with the owner's verified identity and a set of network-observable signals.
                  </Paragraph>
                  <Paragraph style={{ color: '#8c8c8c', fontSize: 16, lineHeight: 1.8, marginBottom: 32 }}>
                    When you report an item lost or stolen, the network activates monitoring across the Lumen CDN infrastructure. When the item surfaces, you're notified — and so is law enforcement, with a documented chain-of-custody record drawn from the Solana registry and the network's tamper-evident access logs.
                  </Paragraph>
                  <Paragraph style={{ color: '#8c8c8c', fontSize: 15, lineHeight: 1.7, fontStyle: 'italic', borderLeft: '2px solid #1f1f1f', paddingLeft: 20 }}>
                    "Consider a contractor whose skid-steer loader is stolen overnight. Under Oldwest.net, the loader's telematics signals are registered on-chain. Upon theft report, the Lumen network begins monitoring. The loader surfaces at a remote location within days. Law enforcement is notified with cryptographic chain-of-custody evidence. The loader is recovered."
                  </Paragraph>
                </Col>
                <Col xs={24} lg={12}>
                  <Space direction="vertical" size="middle" style={{ width: '100%' }}>
                    {[
                      { icon: <TeamOutlined style={{ fontSize: 20, color: '#8c8c8c' }} />, title: 'Recovery Residuals', desc: 'Supply-side participants whose infrastructure detected registered lost-or-stolen items receive a recovery residual paid in USDC. Good-faith bystanders who report sightings receive a bystander residual. The economic alignment prior networks lacked.' },
                      { icon: <CloudServerOutlined style={{ fontSize: 20, color: '#8c8c8c' }} />, title: 'Tamper-Evident Registry', desc: 'Every registry entry — creation, ownership transfer, lost-or-stolen flag — is committed to the Solana blockchain. No party can alter the ownership history without on-chain evidence.' },
                      { icon: <ApiOutlined style={{ fontSize: 20, color: '#8c8c8c' }} />, title: 'Insurance Integration', desc: 'Insurance carriers participating in the registry apply reduced premiums to registered policyholders, reflecting the materially lower expected loss. The registry\'s value is realized across the insurance market.' },
                    ].map((item, i) => (
                      <Card key={i} bordered style={{ background: '#0a0a0a', borderColor: '#1f1f1f', borderRadius: 12 }} bodyStyle={{ padding: 24 }}>
                        <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                          <div style={{ background: '#141414', border: '1px solid #1f1f1f', borderRadius: 8, padding: '10px', flexShrink: 0 }}>
                            {item.icon}
                          </div>
                          <div>
                            <Text style={{ color: '#ffffff', fontSize: 15, fontWeight: 600, display: 'block', marginBottom: 8 }}>{item.title}</Text>
                            <Text style={{ color: '#8c8c8c', fontSize: 13, lineHeight: 1.7 }}>{item.desc}</Text>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </Space>
                </Col>
              </Row>
            </Col>
          </Row>
        </section>

        {/* ── SUBSCRIBER DIVIDEND BOND ────────────────────────────────────── */}
        <section style={{
          borderBottom: '1px solid #1f1f1f',
          background: '#0a0a0a',
          padding: isMobile ? '60px 24px' : '120px 48px'
        }}>
          <Row justify="center">
            <Col xs={24} lg={20} xl={18}>
              <Text style={{ fontSize: 12, color: '#595959', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600 }}>SUBSCRIBER DIVIDEND BOND</Text>
              <Divider style={{ margin: '8px 0 48px 0', borderColor: '#1f1f1f' }} />
              <Row gutter={[64, 48]} align="middle">
                <Col xs={24} lg={12}>
                  <Title level={2} style={{ color: '#ffffff', fontSize: isMobile ? 28 : 40, fontWeight: 700, letterSpacing: '-0.03em', marginBottom: 24 }}>
                    Your connection pays you. Like a bond.
                  </Title>
                  <Paragraph style={{ color: '#8c8c8c', fontSize: 16, lineHeight: 1.8, marginBottom: 24 }}>
                    Every subscriber's access circuit carries traffic that produces a measurable share of the network's CDN brokerage revenue. The Subscriber Dividend Bond converts that ordinary residual entitlement into a registered income-bearing security — administered under a Trust Indenture Act-qualified indenture, with a chartered trust company as trustee and a regulated bank as paying agent.
                  </Paragraph>
                  <Paragraph style={{ color: '#8c8c8c', fontSize: 16, lineHeight: 1.8, marginBottom: 32 }}>
                    The coupon is funded by the residual pool contributions of electing subscribers. It is paid quarterly by ACH or monthly in USDC to your registered Circle Wallet. The instrument is transferable subject to applicable securities restrictions. It constitutes a senior claim against a defined revenue stream — not equity, not a token, not a speculative primitive.
                  </Paragraph>
                  <div style={{ background: '#000000', border: '1px solid #1f1f1f', borderRadius: 12, padding: '24px' }}>
                    <Text style={{ color: '#595959', fontSize: 12, letterSpacing: '0.1em', textTransform: 'uppercase', display: 'block', marginBottom: 16 }}>Banking Structure</Text>
                    <Space direction="vertical" size="small" style={{ width: '100%' }}>
                      {[
                        { role: 'Issuer', entity: 'Old West Solutions SPV (Delaware Statutory Trust)' },
                        { role: 'Indenture Trustee', entity: 'Chartered Trust Company (TIA-qualified)' },
                        { role: 'Paying Agent', entity: 'Regulated Bank · ACH + USDC settlement' },
                        { role: 'Digital Custodian', entity: 'Coinbase Prime (qualified custodian)' },
                        { role: 'Wallet Infrastructure', entity: 'Circle Wallet Platform' },
                        { role: 'Registry', entity: 'SEC-registered Transfer Agent' },
                      ].map((row, i) => (
                        <div key={i} style={{ display: 'flex', gap: 12, padding: '8px 0', borderBottom: i < 5 ? '1px solid #1f1f1f' : 'none' }}>
                          <Text style={{ color: '#595959', fontSize: 12, minWidth: 140, flexShrink: 0 }}>{row.role}</Text>
                          <Text style={{ color: '#d9d9d9', fontSize: 12 }}>{row.entity}</Text>
                        </div>
                      ))}
                    </Space>
                  </div>
                </Col>
                <Col xs={24} lg={12}>
                  <div style={{ background: '#000000', border: '1px solid #1f1f1f', borderRadius: 16, overflow: 'hidden' }}>
                    <div style={{ background: '#141414', borderBottom: '1px solid #1f1f1f', padding: '20px 28px' }}>
                      <Text style={{ color: '#595959', fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', display: 'block', marginBottom: 4 }}>OWS Subscriber Dividend Bond</Text>
                      <Text style={{ color: '#ffffff', fontSize: 20, fontWeight: 700 }}>Residential Example — 1 Gbps Symmetric</Text>
                    </div>
                    <div style={{ padding: '28px' }}>
                      {[
                        { label: 'Monthly CDN Residual (avg.)', value: '$7.20', highlight: false },
                        { label: 'Annual Residual Entitlement', value: '$86.40', highlight: false },
                        { label: 'Instrument Principal', value: '$1,000.00', highlight: false },
                        { label: 'Effective Coupon Rate', value: '8.64%', highlight: true },
                        { label: 'Coupon Payment Method', value: 'USDC · Circle Wallet / ACH', highlight: false },
                        { label: 'Payment Frequency', value: 'Quarterly (default)', highlight: false },
                        { label: 'Offering Structure', value: 'Reg A+ Tier 2 / S-1', highlight: false },
                        { label: 'Senior Claim Against', value: 'Network Residual Pool', highlight: false },
                      ].map((row, i) => (
                        <div key={i} style={{
                          display: 'flex', justifyContent: 'space-between', padding: '12px 0',
                          borderBottom: i < 7 ? '1px solid #1f1f1f' : 'none'
                        }}>
                          <Text style={{ color: '#595959', fontSize: 13 }}>{row.label}</Text>
                          <Text style={{ color: row.highlight ? '#52c41a' : '#d9d9d9', fontSize: 13, fontWeight: row.highlight ? 700 : 500 }}>{row.value}</Text>
                        </div>
                      ))}
                      <div style={{ marginTop: 20, padding: '14px 16px', background: '#0a0a0a', border: '1px solid #1f1f1f', borderRadius: 10 }}>
                        <Text style={{ color: '#595959', fontSize: 11, lineHeight: 1.6 }}>
                          This table is illustrative only. The instrument is offered pursuant to offering documents prepared under the supervision of securities counsel. This does not constitute a securities offering.
                        </Text>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </section>

        {/* ── BIGQUERY DATA PRODUCT ───────────────────────────────────────── */}
        <section style={{
          borderBottom: '1px solid #1f1f1f',
          background: '#000000',
          padding: isMobile ? '60px 24px' : '120px 48px'
        }}>
          <Row justify="center">
            <Col xs={24} lg={20} xl={18}>
              <Text style={{ fontSize: 12, color: '#595959', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600 }}>OLDWEST BIGDATA</Text>
              <Divider style={{ margin: '8px 0 48px 0', borderColor: '#1f1f1f' }} />
              <Row gutter={[64, 48]}>
                <Col xs={24} lg={12}>
                  <Title level={2} style={{ color: '#ffffff', fontSize: isMobile ? 28 : 40, fontWeight: 700, letterSpacing: '-0.03em', marginBottom: 24 }}>
                    The analytical warehouse the fiber relationship makes possible
                  </Title>
                  <Paragraph style={{ color: '#8c8c8c', fontSize: 16, lineHeight: 1.8, marginBottom: 24 }}>
                    Commercial fiber subscribers receive a managed BigQuery environment provisioned per customer — with isolated billing, isolated identity, and network access terminated on the subscriber's Oldwest circuit so data never traverses the public internet between premises and warehouse.
                  </Paragraph>
                  <Paragraph style={{ color: '#8c8c8c', fontSize: 16, lineHeight: 1.8, marginBottom: 32 }}>
                    The company's published civic indices, infrastructure intelligence feeds, gas-market tables, and routing-efficiency telemetry are exposed in the customer's BigQuery environment as authorized views — refreshed hourly, daily, or weekly.
                  </Paragraph>
                  <Paragraph style={{ color: '#d9d9d9', fontSize: 15, lineHeight: 1.7, fontStyle: 'italic', borderLeft: '2px solid #1f1f1f', paddingLeft: 20 }}>
                    "A regional grocery chain with 62 stores joins Oldwest BigData at the Professional tier. Within 90 days its data team is running joined analyses between point-of-sale data and Oldwest's cost-of-living index, capturing $400,000 of incremental annual margin. Oldwest captures $250,000 of annual revenue across the fiber and data contract."
                  </Paragraph>
                </Col>
                <Col xs={24} lg={12}>
                  <Row gutter={[16, 16]}>
                    {[
                      { tier: 'Base', price: '$1,500 / mo', features: ['1 TB storage', 'Standard query allowance', 'Civic indices access', 'Private network termination'] },
                      { tier: 'Professional', price: '$5,000 / mo', features: ['Expanded allowances', 'Gas-arbitrage feed (real-time)', 'Infrastructure intelligence', 'ML pipeline templates'] },
                      { tier: 'Enterprise', price: 'Negotiated', features: ['Custom compliance config', 'Dedicated compute', 'Priority support SLA', 'Custom data feeds'] },
                    ].map((plan, i) => (
                      <Col xs={24} key={i}>
                        <Card bordered style={{ background: '#0a0a0a', borderColor: i === 1 ? '#333333' : '#1f1f1f', borderRadius: 12 }} bodyStyle={{ padding: 24 }}>
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
                            <Text style={{ color: '#ffffff', fontSize: 16, fontWeight: 700 }}>{plan.tier}</Text>
                            <Text style={{ color: i === 1 ? '#52c41a' : '#8c8c8c', fontSize: 15, fontWeight: 600 }}>{plan.price}</Text>
                          </div>
                          <Space direction="vertical" size="small">
                            {plan.features.map((f, j) => (
                              <div key={j} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                                <CheckCircleFilled style={{ color: '#595959', fontSize: 12 }} />
                                <Text style={{ color: '#8c8c8c', fontSize: 13 }}>{f}</Text>
                              </div>
                            ))}
                          </Space>
                        </Card>
                      </Col>
                    ))}
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
        </section>

        {/* ── CTA ─────────────────────────────────────────────────────────── */}
        <section style={{
          background: '#0a0a0a',
          padding: isMobile ? '80px 24px' : '140px 48px',
          textAlign: 'center'
        }}>
          <Title level={2} style={{ color: '#ffffff', fontSize: isMobile ? 32 : 56, fontWeight: 800, letterSpacing: '-0.04em', marginBottom: 24, lineHeight: 1.1 }}>
            Build the network.<br />Light the customers.<br />Publish the data.<br />Pay the residuals.
          </Title>
          <Paragraph style={{ color: '#8c8c8c', fontSize: 18, lineHeight: 1.8, maxWidth: 640, margin: '0 auto 48px' }}>
            Oldwest.net offers what no national carrier structurally can — a fiber connection, a data product, a revenue residual, and a trust attestation, under a single franchise that pays its cities, its subscribers, and its participants.
          </Paragraph>
          <Space size="middle" direction={isMobile ? 'vertical' : 'horizontal'}>
            <Button size="large"
              style={{ background: '#ffffff', borderColor: '#ffffff', color: '#000000', borderRadius: 12, fontWeight: 700, height: 56, paddingLeft: 48, paddingRight: 48, fontSize: 15 }}
              href="/create-account"
            >
              JOIN THE NETWORK
            </Button>
            <Button size="large"
              style={{ background: '#000000', borderColor: '#1f1f1f', color: '#d9d9d9', borderRadius: 12, fontWeight: 600, height: 56, paddingLeft: 48, paddingRight: 48 }}
              href="/whitepaper"
            >
              READ THE FULL THESIS
            </Button>
          </Space>
        </section>

      </Content>

      {/* ── FOOTER ──────────────────────────────────────────────────────────── */}
      <Footer style={{
        background: '#000000',
        borderTop: '1px solid #1f1f1f',
        padding: isMobile ? '40px 24px 20px 24px' : '80px 48px 40px 48px'
      }}>
        <Row gutter={[48, 48]}>
          <Col xs={24} sm={12} md={6}>
            <Row align="middle" gutter={12} style={{ marginBottom: 24 }}>
              <Col>
                <div style={{ width: 36, height: 36, background: '#141414', border: '1px solid #1f1f1f', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 8 }}>
                  <SignalFilled style={{ fontSize: 16, color: '#8c8c8c' }} />
                </div>
              </Col>
              <Col>
                <Text style={{ fontSize: 16, color: '#ffffff', fontWeight: 700, letterSpacing: '0.5px' }}>OLDWEST.NET</Text>
              </Col>
            </Row>
            <Paragraph style={{ color: '#8c8c8c', fontSize: 13, lineHeight: 1.7, marginBottom: 8 }}>
              The internet's trust layer. CDN brokerage, identity governance, and subscriber dividends — settled on Solana.
            </Paragraph>
            <Text style={{ color: '#2f2f2f', fontSize: 11 }}>Old West Solutions LLC · Texas, USA</Text>
          </Col>

          <Col xs={24} sm={12} md={6}>
            <Title level={5} style={{ color: '#ffffff', marginBottom: 20, fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Network</Title>
            <Space direction="vertical" size="small" style={{ width: '100%' }}>
              {[
                ['CDN Brokerage', '/marketplace'],
                ['Identity Governance', '/create-account'],
                ['Asset Hosting', '/explore-platform'],
                ['Property Registry', '/security'],
                ['BigQuery Data', '/explore-platform'],
              ].map(([label, href]) => (
                <Link key={href} href={href} style={{ color: '#8c8c8c', fontSize: 13, display: 'block' }}>{label}</Link>
              ))}
            </Space>
          </Col>

          <Col xs={24} sm={12} md={6}>
            <Title level={5} style={{ color: '#ffffff', marginBottom: 20, fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Finance</Title>
            <Space direction="vertical" size="small" style={{ width: '100%' }}>
              {[
                ['Subscriber Dividend Bond', '/treasury'],
                ['Treasury Overview', '/treasury'],
                ['Gas Toll Protocol', '/whitepaper'],
                ['Municipal Franchise', '/whitepaper'],
                ['Solana Settlement', '/whitepaper'],
              ].map(([label, href]) => (
                <Link key={label} href={href} style={{ color: '#8c8c8c', fontSize: 13, display: 'block' }}>{label}</Link>
              ))}
            </Space>
          </Col>

          <Col xs={24} sm={12} md={6}>
            <Title level={5} style={{ color: '#ffffff', marginBottom: 20, fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Legal</Title>
            <Space direction="vertical" size="small" style={{ width: '100%' }}>
              {[
                ['White Paper', '/whitepaper'],
                ['Privacy Policy', '/privacy-policy'],
                ['Terms of Service', '/terms-of-service'],
                ['Security', '/security'],
                ['Compliance', '/compliance'],
              ].map(([label, href]) => (
                <Link key={label} href={href} style={{ color: '#8c8c8c', fontSize: 13, display: 'block' }}>{label}</Link>
              ))}
            </Space>
          </Col>
        </Row>

        <Divider style={{ borderColor: '#1f1f1f', margin: '48px 0 32px 0' }} />

        <Row justify="space-between" align="middle" gutter={[16, 16]}>
          <Col>
            <Text style={{ color: '#595959', fontSize: 12 }}>
              © 2026 Old West Solutions LLC. All rights reserved. · Patent Docket OWS-OLDWESTNET-MASTER-001
            </Text>
          </Col>
          <Col>
            <Space size="large">
              {[['Privacy Policy', '/privacy-policy'], ['Terms of Service', '/terms-of-service'], ['Security', '/security'], ['Compliance', '/compliance'], ['White Paper', '/whitepaper']].map(([label, href]) => (
                <Link key={label} href={href}
                  style={{ color: '#595959', fontSize: 12, textDecoration: 'none', transition: 'color 0.3s' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#ffffff'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#595959'}
                >
                  {label}
                </Link>
              ))}
            </Space>
          </Col>
        </Row>
      </Footer>
    </Layout>
  )
}
