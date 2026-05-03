'use client'

import Link from 'next/link'
import { Layout, Row, Col, Card, Typography, Divider, Button, Space, Tag } from 'antd'
import {
  MenuOutlined,
  CloseOutlined,
  ArrowRightOutlined,
  CheckCircleFilled,
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

const navLinks = [
  { href: '/marketplace', label: 'Platform' },
  { href: '/treasury', label: 'Treasury' },
  { href: '/whitepaper', label: 'Whitepaper' },
  { href: '/security', label: 'Security' },
]

const capabilityCards = [
  {
    icon: <GlobalOutlined style={{ color: '#2f5fd7', fontSize: 22 }} />,
    title: 'CDN Brokerage',
    desc: 'Brokered traffic routing over Lumen and partner edge capacity with policy-aware delivery and auditable settlement.',
  },
  {
    icon: <SafetyOutlined style={{ color: '#2f5fd7', fontSize: 22 }} />,
    title: 'Identity Governance',
    desc: 'Cryptographic attestation that counterparties are real people or real operating businesses.',
  },
  {
    icon: <DollarOutlined style={{ color: '#2f5fd7', fontSize: 22 }} />,
    title: 'Subscriber Dividend Rail',
    desc: 'Residual revenue sharing and bond-like payout pathways for qualifying subscribers and enterprise participants.',
  },
  {
    icon: <BankOutlined style={{ color: '#2f5fd7', fontSize: 22 }} />,
    title: 'Municipal Toll Protocol',
    desc: 'Geo-attributed municipal remittance framework with transparent digital receipting and compliance controls.',
  },
  {
    icon: <CloudServerOutlined style={{ color: '#2f5fd7', fontSize: 22 }} />,
    title: 'Protected Asset Hosting',
    desc: 'Secure AI model and application delivery with enterprise guardrails against unauthorized extraction and misuse.',
  },
  {
    icon: <RadarChartOutlined style={{ color: '#2f5fd7', fontSize: 22 }} />,
    title: 'Connected Asset Registry',
    desc: 'Network-observable asset intelligence for recovery workflows, verification, and chain-of-custody visibility.',
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
    <Layout style={{ minHeight: '100vh', background: '#f8fafc' }}>
      <Header
        style={{
          background: 'rgba(248, 250, 252, 0.9)',
          backdropFilter: 'blur(8px)',
          borderBottom: '1px solid #e5eaf1',
          padding: '0 24px',
          height: 76,
          position: 'sticky',
          top: 0,
          zIndex: 1000,
        }}
      >
        <Row align="middle" justify="space-between" style={{ width: '100%', height: '100%' }}>
          <Col>
            <Space size={14}>
              <div
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: 10,
                  background: 'linear-gradient(135deg, #2f5fd7 0%, #4f7df0 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 8px 20px rgba(47,95,215,0.24)',
                }}
              >
                <Text style={{ color: '#fff', fontWeight: 700, fontSize: 12 }}>OW</Text>
              </div>
              <div>
                <Link href="/" style={{ textDecoration: 'none' }}>
                  <Text style={{ color: '#0f172a', fontWeight: 700, fontSize: 18, letterSpacing: '-0.01em' }}>
                    Oldwest.net
                  </Text>
                </Link>
                <div>
                  <Text style={{ color: '#64748b', fontSize: 11 }}>by Old West Solutions LLC</Text>
                </div>
              </div>
            </Space>
          </Col>

          <Col>
            {isMobile ? (
              <Button
                type="text"
                icon={mobileMenuOpen ? <CloseOutlined /> : <MenuOutlined />}
                onClick={() => setMobileMenuOpen((prev) => !prev)}
                style={{ color: '#0f172a' }}
              />
            ) : (
              <Space size={20}>
                {navLinks.map((link) => (
                  <Link key={link.href} href={link.href} style={{ color: '#334155', fontSize: 14 }}>
                    {link.label}
                  </Link>
                ))}
                <Button
                  href="/login"
                  style={{
                    borderRadius: 12,
                    borderColor: '#cbd5e1',
                    color: '#0f172a',
                    fontWeight: 600,
                  }}
                >
                  Sign in
                </Button>
                <Button
                  type="primary"
                  href="/create-account"
                  style={{
                    borderRadius: 12,
                    background: '#2f5fd7',
                    borderColor: '#2f5fd7',
                    fontWeight: 700,
                    boxShadow: '0 10px 24px rgba(47,95,215,0.28)',
                  }}
                >
                  Get started
                </Button>
              </Space>
            )}
          </Col>
        </Row>

        {mobileMenuOpen && isMobile && (
          <div
            style={{
              position: 'absolute',
              left: 0,
              right: 0,
              top: 76,
              background: '#ffffff',
              borderBottom: '1px solid #e5eaf1',
              padding: 20,
              boxShadow: '0 18px 40px rgba(15, 23, 42, 0.08)',
            }}
          >
            <Space direction="vertical" size={14} style={{ width: '100%' }}>
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} style={{ color: '#334155', fontSize: 15 }}>
                  {link.label}
                </Link>
              ))}
              <Button href="/login" block style={{ borderRadius: 10 }}>
                Sign in
              </Button>
              <Button
                type="primary"
                href="/create-account"
                block
                style={{ borderRadius: 10, background: '#2f5fd7', borderColor: '#2f5fd7' }}
              >
                Get started
              </Button>
            </Space>
          </div>
        )}
      </Header>

      <Content>
        <section
          style={{
            padding: isMobile ? '72px 24px' : '96px 48px',
            background:
              'radial-gradient(circle at 20% 20%, rgba(47,95,215,0.14) 0%, transparent 42%), radial-gradient(circle at 80% 10%, rgba(214,190,154,0.26) 0%, transparent 36%), #f8fafc',
          }}
        >
          <Row justify="center">
            <Col xs={24} xl={20}>
              <Card
                bordered={false}
                style={{
                  borderRadius: 28,
                  background: 'linear-gradient(140deg, #ffffff 0%, #f9f4ea 60%, #eef3ff 100%)',
                  boxShadow: '0 30px 80px rgba(15,23,42,0.10)',
                }}
                bodyStyle={{ padding: isMobile ? 28 : 56 }}
              >
                <Space direction="vertical" size={20} style={{ width: '100%' }}>
                  <Tag
                    style={{
                      alignSelf: 'flex-start',
                      borderRadius: 999,
                      borderColor: '#dbe4ff',
                      color: '#2f5fd7',
                      background: '#eef3ff',
                      fontWeight: 600,
                      padding: '4px 12px',
                    }}
                  >
                    Enterprise Infrastructure · California Edition
                  </Tag>
                  <Title
                    level={1}
                    style={{
                      color: '#0f172a',
                      fontSize: isMobile ? 40 : 68,
                      lineHeight: 1.02,
                      margin: 0,
                      letterSpacing: '-0.03em',
                    }}
                  >
                    Beautiful infrastructure<br />for the real internet.
                  </Title>
                  <Paragraph
                    style={{
                      color: '#334155',
                      fontSize: isMobile ? 17 : 21,
                      lineHeight: 1.8,
                      maxWidth: 860,
                      marginBottom: 4,
                    }}
                  >
                    Oldwest.net unifies CDN brokerage, identity trust, municipal toll economics, and subscriber dividend rails in one enterprise-grade SaaS surface. White-and-blue clarity, tan warmth, and auditable execution from edge to settlement.
                  </Paragraph>
                  <Space size={14} wrap>
                    <Button
                      type="primary"
                      href="/create-account"
                      icon={<ArrowRightOutlined />}
                      style={{
                        borderRadius: 12,
                        height: 46,
                        background: '#2f5fd7',
                        borderColor: '#2f5fd7',
                        fontWeight: 700,
                        boxShadow: '0 12px 24px rgba(47,95,215,0.28)',
                      }}
                    >
                      Launch workspace
                    </Button>
                    <Button
                      href="/whitepaper"
                      style={{
                        borderRadius: 12,
                        height: 46,
                        borderColor: '#cbd5e1',
                        color: '#1e293b',
                        fontWeight: 600,
                        background: '#ffffff',
                      }}
                    >
                      Read thesis
                    </Button>
                    <Button
                      href="/treasury"
                      style={{
                        borderRadius: 12,
                        height: 46,
                        borderColor: '#d6be9a',
                        color: '#7a5b32',
                        fontWeight: 600,
                        background: '#fff8ea',
                      }}
                    >
                      View dividend model
                    </Button>
                  </Space>
                </Space>
              </Card>
            </Col>
          </Row>
        </section>

        <section style={{ padding: isMobile ? '52px 24px' : '76px 48px' }}>
          <Row justify="center">
            <Col xs={24} xl={20}>
              <Row gutter={[18, 18]}>
                {[
                  { k: 'CDN Capacity', v: '22+ regions brokered' },
                  { k: 'Identity Graph', v: 'KYC + business verification' },
                  { k: 'Settlement Rail', v: 'Solana + Coinbase + Circle' },
                  { k: 'Municipal Protocol', v: 'Franchise-style toll remittance' },
                ].map((item) => (
                  <Col xs={24} sm={12} lg={6} key={item.k}>
                    <Card
                      bordered={false}
                      style={{ borderRadius: 16, boxShadow: '0 8px 24px rgba(15,23,42,0.08)' }}
                      bodyStyle={{ padding: 20 }}
                    >
                      <Text style={{ color: '#64748b', fontSize: 12, display: 'block', marginBottom: 6 }}>{item.k}</Text>
                      <Text style={{ color: '#0f172a', fontSize: 16, fontWeight: 700 }}>{item.v}</Text>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </section>

        <section style={{ padding: isMobile ? '36px 24px 72px' : '40px 48px 84px' }}>
          <Row justify="center">
            <Col xs={24} xl={20}>
              <div style={{ marginBottom: 28 }}>
                <Text style={{ color: '#64748b', fontSize: 12, letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 700 }}>
                  Platform Capabilities
                </Text>
                <Title style={{ marginTop: 10, marginBottom: 8, color: '#0f172a', fontSize: isMobile ? 32 : 44, letterSpacing: '-0.03em' }}>
                  Enterprise architecture with consumer-grade elegance.
                </Title>
                <Paragraph style={{ color: '#475569', fontSize: 16, maxWidth: 760, lineHeight: 1.8 }}>
                  Designed to feel effortless while operating at infrastructure scale. Every module is purpose-built for auditability, composability, and clean operator experience.
                </Paragraph>
              </div>
              <Row gutter={[18, 18]}>
                {capabilityCards.map((card) => (
                  <Col xs={24} md={12} lg={8} key={card.title}>
                    <Card
                      bordered
                      style={{
                        borderRadius: 16,
                        borderColor: '#e2e8f0',
                        height: '100%',
                        background: '#ffffff',
                        boxShadow: '0 8px 24px rgba(15,23,42,0.05)',
                      }}
                      bodyStyle={{ padding: 22 }}
                    >
                      <Space direction="vertical" size={10}>
                        <div
                          style={{
                            width: 40,
                            height: 40,
                            borderRadius: 12,
                            background: '#eef3ff',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                        >
                          {card.icon}
                        </div>
                        <Text style={{ color: '#0f172a', fontSize: 17, fontWeight: 700 }}>{card.title}</Text>
                        <Text style={{ color: '#475569', fontSize: 14, lineHeight: 1.7 }}>{card.desc}</Text>
                      </Space>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </section>

        <section
          style={{
            padding: isMobile ? '58px 24px' : '80px 48px',
            background: 'linear-gradient(180deg, #ffffff 0%, #f1f5ff 100%)',
            borderTop: '1px solid #e2e8f0',
            borderBottom: '1px solid #e2e8f0',
          }}
        >
          <Row justify="center">
            <Col xs={24} xl={20}>
              <Row gutter={[28, 28]} align="middle">
                <Col xs={24} lg={14}>
                  <Title style={{ color: '#0f172a', fontSize: isMobile ? 30 : 46, lineHeight: 1.08, letterSpacing: '-0.03em' }}>
                    California-clean UI.<br />Infrastructure-level discipline.
                  </Title>
                  <Paragraph style={{ color: '#475569', fontSize: 16, lineHeight: 1.85 }}>
                    We redesigned Oldwest.net for enterprise buyers who expect precision and polish: brighter canvas, calmer typography, rich hierarchy, and contextual pathways for legal, treasury, security, operations, and product teams.
                  </Paragraph>
                  <Space wrap size={10}>
                    {[
                      'White + tan + blue palette',
                      'Context-driven IA',
                      'SaaS-grade hierarchy',
                      'Investor + operator friendly',
                    ].map((chip) => (
                      <Tag key={chip} style={{ borderRadius: 999, borderColor: '#dbe4ff', color: '#2f5fd7', background: '#eef3ff', padding: '4px 12px' }}>
                        {chip}
                      </Tag>
                    ))}
                  </Space>
                </Col>
                <Col xs={24} lg={10}>
                  <Card
                    bordered={false}
                    style={{
                      borderRadius: 18,
                      background: '#fff8ea',
                      boxShadow: '0 18px 44px rgba(122,91,50,0.16)',
                    }}
                    bodyStyle={{ padding: 26 }}
                  >
                    <Space direction="vertical" size={12}>
                      <Text style={{ color: '#7a5b32', fontWeight: 700, fontSize: 13, letterSpacing: '0.09em', textTransform: 'uppercase' }}>
                        Launch Checklist
                      </Text>
                      {[
                        'Route demand to Lumen-backed edge supply',
                        'Attach verified identity policy to traffic',
                        'Commit residual and toll settlement proofs',
                        'Stream coupon-ready subscriber reports',
                      ].map((line) => (
                        <div key={line} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                          <CheckCircleFilled style={{ color: '#7a5b32', marginTop: 2 }} />
                          <Text style={{ color: '#6b7280', lineHeight: 1.7 }}>{line}</Text>
                        </div>
                      ))}
                    </Space>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>
        </section>
      </Content>

      <Footer style={{ background: '#0f172a', padding: isMobile ? '44px 24px 24px' : '68px 48px 28px' }}>
        <Row justify="center">
          <Col xs={24} xl={20}>
            <Card
              bordered={false}
              style={{
                borderRadius: 20,
                marginBottom: 36,
                background: 'linear-gradient(120deg, #1d4ed8 0%, #1e40af 48%, #7a5b32 130%)',
              }}
              bodyStyle={{ padding: isMobile ? 24 : 34 }}
            >
              <Row gutter={[20, 20]} align="middle" justify="space-between">
                <Col xs={24} md={16}>
                  <Title style={{ color: '#ffffff', fontSize: isMobile ? 24 : 32, marginBottom: 6, letterSpacing: '-0.02em' }}>
                    Ready to run Oldwest like an enterprise?
                  </Title>
                  <Text style={{ color: 'rgba(255,255,255,0.85)', fontSize: 15 }}>
                    Move from narrative to deployment with a clean go-to-market and treasury architecture.
                  </Text>
                </Col>
                <Col xs={24} md={8} style={{ textAlign: isMobile ? 'left' : 'right' }}>
                  <Button
                    href="/create-account"
                    style={{
                      borderRadius: 12,
                      height: 44,
                      border: 'none',
                      color: '#1e3a8a',
                      fontWeight: 700,
                    }}
                  >
                    Start now
                  </Button>
                </Col>
              </Row>
            </Card>

            <Row gutter={[28, 30]}>
              <Col xs={24} md={12} lg={5}>
                <Text style={{ color: '#f8fafc', fontSize: 18, fontWeight: 700, display: 'block', marginBottom: 8 }}>
                  Oldwest.net
                </Text>
                <Paragraph style={{ color: '#94a3b8', fontSize: 13, lineHeight: 1.7, marginBottom: 10 }}>
                  Infrastructure SaaS for trust, traffic, treasury, and telecom-aligned digital economics.
                </Paragraph>
                <Text style={{ color: '#64748b', fontSize: 12 }}>Old West Solutions LLC</Text>
              </Col>

              <Col xs={12} sm={8} lg={4}>
                <Text style={{ color: '#cbd5e1', fontWeight: 700, fontSize: 12, letterSpacing: '0.09em', textTransform: 'uppercase' }}>
                  Product
                </Text>
                <Space direction="vertical" size={6} style={{ marginTop: 12 }}>
                  {[
                    ['Platform Overview', '/explore-platform'],
                    ['Usage Model', '/usage-model'],
                    ['Access Network', '/access-network'],
                    ['Marketplace', '/marketplace'],
                    ['Account Console', '/account'],
                  ].map(([label, href]) => (
                    <Link key={label} href={href} style={{ color: '#94a3b8', fontSize: 13 }}>{label}</Link>
                  ))}
                </Space>
              </Col>

              <Col xs={12} sm={8} lg={4}>
                <Text style={{ color: '#cbd5e1', fontWeight: 700, fontSize: 12, letterSpacing: '0.09em', textTransform: 'uppercase' }}>
                  Economics
                </Text>
                <Space direction="vertical" size={6} style={{ marginTop: 12 }}>
                  {[
                    ['Treasury', '/treasury'],
                    ['Subscriber Dividend', '/treasury'],
                    ['Municipal Toll Protocol', '/whitepaper'],
                    ['Residual Settlement', '/whitepaper'],
                    ['BigQuery Data Product', '/whitepaper'],
                  ].map(([label, href]) => (
                    <Link key={label} href={href} style={{ color: '#94a3b8', fontSize: 13 }}>{label}</Link>
                  ))}
                </Space>
              </Col>

              <Col xs={12} sm={8} lg={4}>
                <Text style={{ color: '#cbd5e1', fontWeight: 700, fontSize: 12, letterSpacing: '0.09em', textTransform: 'uppercase' }}>
                  Governance
                </Text>
                <Space direction="vertical" size={6} style={{ marginTop: 12 }}>
                  {[
                    ['Identity Verification', '/create-account'],
                    ['Security', '/security'],
                    ['Compliance', '/compliance'],
                    ['Whitepaper', '/whitepaper'],
                    ['Patent Thesis', '/whitepaper'],
                  ].map(([label, href]) => (
                    <Link key={label} href={href} style={{ color: '#94a3b8', fontSize: 13 }}>{label}</Link>
                  ))}
                </Space>
              </Col>

              <Col xs={12} sm={8} lg={4}>
                <Text style={{ color: '#cbd5e1', fontWeight: 700, fontSize: 12, letterSpacing: '0.09em', textTransform: 'uppercase' }}>
                  Operations
                </Text>
                <Space direction="vertical" size={6} style={{ marginTop: 12 }}>
                  {[
                    ['Launch Session', '/launch-session'],
                    ['Host Session', '/host-session'],
                    ['Dashboard', '/dashboard'],
                    ['Messages', '/messages'],
                    ['Download App', '/download-app'],
                  ].map(([label, href]) => (
                    <Link key={label} href={href} style={{ color: '#94a3b8', fontSize: 13 }}>{label}</Link>
                  ))}
                </Space>
              </Col>

              <Col xs={12} sm={8} lg={3}>
                <Text style={{ color: '#cbd5e1', fontWeight: 700, fontSize: 12, letterSpacing: '0.09em', textTransform: 'uppercase' }}>
                  Legal
                </Text>
                <Space direction="vertical" size={6} style={{ marginTop: 12 }}>
                  {[
                    ['Terms', '/terms-of-service'],
                    ['Privacy', '/privacy-policy'],
                    ['Login', '/login'],
                    ['Create Account', '/create-account'],
                  ].map(([label, href]) => (
                    <Link key={label} href={href} style={{ color: '#94a3b8', fontSize: 13 }}>{label}</Link>
                  ))}
                </Space>
              </Col>
            </Row>

            <Divider style={{ borderColor: '#1e293b', margin: '30px 0 18px' }} />
            <Row justify="space-between" align="middle" gutter={[10, 12]}>
              <Col>
                <Text style={{ color: '#64748b', fontSize: 12 }}>
                  © 2026 Old West Solutions LLC · Oldwest.net
                </Text>
              </Col>
              <Col>
                <Text style={{ color: '#64748b', fontSize: 12 }}>
                  Docket OWS-OLDWESTNET-MASTER-001
                </Text>
              </Col>
            </Row>
          </Col>
        </Row>
      </Footer>
    </Layout>
  )
}
