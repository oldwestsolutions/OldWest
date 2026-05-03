'use client'

import { Layout, Typography, Row, Col, Card, Divider, Space } from 'antd'
import Link from 'next/link'
import { SafetyOutlined, EyeOutlined, TrophyOutlined, CheckCircleOutlined, WarningOutlined, LockOutlined, CloudOutlined, RocketOutlined, UserOutlined, BankOutlined } from '@ant-design/icons'
import { useState, useEffect } from 'react'
import BankingModal from '@/components/BankingModal'

const { Header, Content } = Layout
const { Title, Paragraph, Text } = Typography

export default function Treasury() {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
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
        padding: isMobile ? '0 24px' : '0 48px',
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
        <Row align="middle" gutter={16}>
          <Col>
            <Link href="/" style={{ color: '#8c8c8c', fontSize: 14, textDecoration: 'none', transition: 'color 0.3s' }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#ffffff'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#8c8c8c'}
            >
              ← Back to Home
            </Link>
          </Col>
        </Row>
      </Header>

      <Content style={{ paddingTop: isHeaderVisible ? (isMobile ? 80 : 80) : 40 }}>
        {/* Hero Section */}
        <section style={{
          background: 'linear-gradient(135deg, #0a0a0a 0%, #141414 100%)',
          padding: isMobile ? '60px 24px' : '120px 48px',
          borderBottom: '1px solid #1f1f1f',
          textAlign: 'center'
        }}>
          <Title level={1} style={{ color: '#ffffff', marginBottom: 16, fontSize: isMobile ? 32 : 48, fontWeight: 700 }}>
            Treasury
          </Title>
          <Paragraph style={{ color: '#8c8c8c', fontSize: isMobile ? 16 : 20, maxWidth: '800px', margin: '0 auto' }}>
            The economic infrastructure that powers OldWest. Five interconnected systems that create trust, reduce risk, and enable secure transactions.
          </Paragraph>
        </section>

        {/* 1. Escrow & Mediation */}
        <section style={{
          padding: isMobile ? '60px 24px' : '120px 48px',
          borderBottom: '1px solid #1f1f1f',
          background: '#0a0a0a'
        }}>
          <Row justify="center" gutter={[48, 48]}>
            <Col xs={24} lg={12}>
              <div style={{ marginBottom: 32 }}>
                <Space align="center" style={{ marginBottom: 16 }}>
                  <LockOutlined style={{ fontSize: 24, color: '#595959' }} />
                  <Text style={{ fontSize: 12, color: '#595959', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600 }}>
                    ESCROW & MEDIATION
                  </Text>
                </Space>
                <Title level={2} style={{ color: '#ffffff', marginBottom: 8, fontSize: isMobile ? 28 : 36, fontWeight: 600 }}>
                  Transaction safety
                </Title>
                <Text style={{ color: '#8c8c8c', fontSize: 16, fontStyle: 'italic' }}>
                  "Pay to remove uncertainty."
                </Text>
              </div>

              <Card bordered style={{ background: '#000000', borderColor: '#1f1f1f', borderRadius: 12, marginBottom: 24 }} bodyStyle={{ padding: 32 }}>
                <Title level={4} style={{ color: '#ffffff', marginBottom: 16, fontSize: 20, fontWeight: 600 }}>
                  What it is
                </Title>
                <Paragraph style={{ color: '#8c8c8c', fontSize: 16, lineHeight: 1.8, marginBottom: 16 }}>
                  OldWest temporarily holds funds for:
                </Paragraph>
                <Row gutter={[16, 16]}>
                  <Col xs={24} sm={12}>
                    <Text style={{ color: '#d9d9d9', fontSize: 15 }}>• Work agreements</Text>
                  </Col>
                  <Col xs={24} sm={12}>
                    <Text style={{ color: '#d9d9d9', fontSize: 15 }}>• Compute usage</Text>
                  </Col>
                  <Col xs={24} sm={12}>
                    <Text style={{ color: '#d9d9d9', fontSize: 15 }}>• Deliverables</Text>
                  </Col>
                  <Col xs={24} sm={12}>
                    <Text style={{ color: '#d9d9d9', fontSize: 15 }}>• Milestone-based execution</Text>
                  </Col>
                </Row>
              </Card>

              <Card bordered style={{ background: '#000000', borderColor: '#1f1f1f', borderRadius: 12 }} bodyStyle={{ padding: 32 }}>
                <Title level={4} style={{ color: '#ffffff', marginBottom: 16, fontSize: 20, fontWeight: 600 }}>
                  Key distinction
                </Title>
                <Paragraph style={{ color: '#d9d9d9', fontSize: 18, fontWeight: 500, margin: 0 }}>
                  OldWest does not decide winners — it enforces pre-agreed rules.
                </Paragraph>
              </Card>
            </Col>

            <Col xs={24} lg={12}>
              <BankingModal
                title="Escrow Account"
                subtitle="Transaction Safety"
                status="Funds Secured in Escrow"
                statusColor="#27c93f"
                items={[
                  { label: 'Escrow Amount', value: '5,000 coins' },
                  { label: 'Agreement Terms', value: 'Verified' },
                  { label: 'Milestone Tracking', value: 'Active' },
                  { label: 'Mediation Layer', value: 'Ready' },
                  { label: 'Evidence Storage', value: 'IPFS linked' }
                ]}
              />
            </Col>
          </Row>
        </section>

        {/* 2. Reputation */}
        <section style={{
          padding: isMobile ? '60px 24px' : '120px 48px',
          borderBottom: '1px solid #1f1f1f',
          background: '#000000'
        }}>
          <Row justify="center" gutter={[48, 48]}>
            <Col xs={24} lg={12}>
              <div style={{ marginBottom: 32 }}>
                <Space align="center" style={{ marginBottom: 16 }}>
                  <TrophyOutlined style={{ fontSize: 24, color: '#595959' }} />
                  <Text style={{ fontSize: 12, color: '#595959', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600 }}>
                    REPUTATION
                  </Text>
                </Space>
                <Title level={2} style={{ color: '#ffffff', marginBottom: 8, fontSize: isMobile ? 28 : 36, fontWeight: 600 }}>
                  Economic signal, not vanity
                </Title>
                <Text style={{ color: '#8c8c8c', fontSize: 16, fontStyle: 'italic' }}>
                  "Reputation lowers your cost of doing business."
                </Text>
              </div>

              <Paragraph style={{ color: '#d9d9d9', fontSize: 18, fontWeight: 500, marginBottom: 32, textAlign: 'center' }}>
                Reputation is financially coupled.
              </Paragraph>

              <Row gutter={[24, 24]}>
                <Col xs={24} md={12}>
                  <Card bordered style={{ background: '#0a0a0a', borderColor: '#1f1f1f', borderRadius: 12, height: '100%' }} bodyStyle={{ padding: 32 }}>
                    <Title level={4} style={{ color: '#ffffff', marginBottom: 16, fontSize: 20, fontWeight: 600 }}>
                      How reputation is earned
                    </Title>
                    <Space direction="vertical" size="middle" style={{ width: '100%' }}>
                      <Text style={{ color: '#d9d9d9', fontSize: 15 }}>• Completed escrow transactions</Text>
                      <Text style={{ color: '#d9d9d9', fontSize: 15 }}>• Low dispute rate</Text>
                      <Text style={{ color: '#d9d9d9', fontSize: 15 }}>• Consistent behavior</Text>
                      <Text style={{ color: '#d9d9d9', fontSize: 15 }}>• Bonded commitments</Text>
                    </Space>
                  </Card>
                </Col>

                <Col xs={24} md={12}>
                  <Card bordered style={{ background: '#0a0a0a', borderColor: '#1f1f1f', borderRadius: 12, height: '100%' }} bodyStyle={{ padding: 32 }}>
                    <Title level={4} style={{ color: '#ffffff', marginBottom: 16, fontSize: 20, fontWeight: 600 }}>
                      How reputation is used
                    </Title>
                    <Space direction="vertical" size="middle" style={{ width: '100%' }}>
                      <Text style={{ color: '#d9d9d9', fontSize: 15 }}>• Access gates</Text>
                      <Text style={{ color: '#d9d9d9', fontSize: 15 }}>• Placement eligibility</Text>
                      <Text style={{ color: '#d9d9d9', fontSize: 15 }}>• Fee discounts</Text>
                      <Text style={{ color: '#d9d9d9', fontSize: 15 }}>• Bond requirements</Text>
                    </Space>
                  </Card>
                </Col>
              </Row>
            </Col>

            <Col xs={24} lg={12}>
              <div style={{
                background: '#0a0a0a',
                border: '1px solid #1f1f1f',
                borderRadius: 16,
                overflow: 'hidden',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)'
              }}>
                {/* Profile Header */}
                <div style={{
                  background: 'linear-gradient(135deg, #141414 0%, #0a0a0a 100%)',
                  borderBottom: '1px solid #1f1f1f',
                  padding: '32px',
                  textAlign: 'center'
                }}>
                  <div style={{
                    width: 80,
                    height: 80,
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #141414 0%, #0a0a0a 100%)',
                    margin: '0 auto 16px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '2px solid #1f1f1f',
                    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.4)'
                  }}>
                    <UserOutlined style={{ fontSize: 40, color: '#8c8c8c' }} />
                  </div>
                  <Text style={{ 
                    color: '#ffffff', 
                    fontSize: 20, 
                    fontWeight: 600,
                    display: 'block',
                    marginBottom: 4
                  }}>
                    Reputation Profile
                  </Text>
                  <Text style={{ 
                    color: '#8c8c8c', 
                    fontSize: 14,
                    display: 'block'
                  }}>
                    Economic Signal
                  </Text>
                </div>

                {/* Profile Content */}
                <div style={{
                  padding: '32px',
                  background: '#000000'
                }}>
                  {/* Level System */}
                  <div style={{
                    background: '#0a0a0a',
                    border: '1px solid #1f1f1f',
                    borderRadius: 12,
                    padding: '20px',
                    marginBottom: 24
                  }}>
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginBottom: 12
                    }}>
                      <Text style={{ 
                        color: '#8c8c8c', 
                        fontSize: 12,
                        display: 'block'
                      }}>
                        Level 84
                      </Text>
                      <Text style={{ 
                        color: '#8c8c8c', 
                        fontSize: 12,
                        display: 'block'
                      }}>
                        Level 85
                      </Text>
                    </div>
                    <div style={{
                      width: '100%',
                      height: 12,
                      background: '#141414',
                      borderRadius: 6,
                      overflow: 'hidden',
                      marginBottom: 8,
                      position: 'relative'
                    }}>
                      <div style={{
                        width: '84.7%',
                        height: '100%',
                        background: 'linear-gradient(90deg, #ffd700 0%, #ffed4e 100%)',
                        borderRadius: 6,
                        transition: 'width 0.3s ease'
                      }}></div>
                    </div>
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center'
                    }}>
                      <Text style={{ 
                        color: '#8c8c8c', 
                        fontSize: 11,
                        fontFamily: 'monospace'
                      }}>
                        847 XP
                      </Text>
                      <Text style={{ 
                        color: '#8c8c8c', 
                        fontSize: 11,
                        fontFamily: 'monospace'
                      }}>
                        1,000 XP
                      </Text>
                    </div>
                  </div>

                  {/* Profile Stats */}
                  <Space direction="vertical" size="middle" style={{ width: '100%' }}>
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      padding: '12px 0',
                      borderBottom: '1px solid #1f1f1f'
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                        <CheckCircleOutlined style={{ color: '#27c93f', fontSize: 16 }} />
                        <Text style={{ color: '#8c8c8c', fontSize: 14 }}>
                          Completed Transactions
                        </Text>
                      </div>
                      <Text style={{ 
                        color: '#ffffff', 
                        fontSize: 14, 
                        fontWeight: 500,
                        fontFamily: 'monospace'
                      }}>
                        124
                      </Text>
                    </div>
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      padding: '12px 0',
                      borderBottom: '1px solid #1f1f1f'
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                        <CheckCircleOutlined style={{ color: '#27c93f', fontSize: 16 }} />
                        <Text style={{ color: '#8c8c8c', fontSize: 14 }}>
                          Dispute Rate
                        </Text>
                      </div>
                      <Text style={{ 
                        color: '#27c93f', 
                        fontSize: 14, 
                        fontWeight: 500,
                        fontFamily: 'monospace'
                      }}>
                        0.8% (excellent)
                      </Text>
                    </div>
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      padding: '12px 0',
                      borderBottom: '1px solid #1f1f1f'
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                        <CheckCircleOutlined style={{ color: '#27c93f', fontSize: 16 }} />
                        <Text style={{ color: '#8c8c8c', fontSize: 14 }}>
                          Fee Discount
                        </Text>
                      </div>
                      <Text style={{ 
                        color: '#ffd700', 
                        fontSize: 14, 
                        fontWeight: 500,
                        fontFamily: 'monospace'
                      }}>
                        15% active
                      </Text>
                    </div>
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      padding: '12px 0'
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                        <CheckCircleOutlined style={{ color: '#27c93f', fontSize: 16 }} />
                        <Text style={{ color: '#8c8c8c', fontSize: 14 }}>
                          Placement Eligible
                        </Text>
                      </div>
                      <Text style={{ 
                        color: '#27c93f', 
                        fontSize: 14, 
                        fontWeight: 500,
                        fontFamily: 'monospace'
                      }}>
                        Yes
                      </Text>
                    </div>
                  </Space>

                  {/* Status Badge */}
                  <div style={{
                    background: '#0a0a0a',
                    border: '1px solid #ffd70040',
                    borderRadius: 12,
                    padding: '16px 20px',
                    marginTop: 24,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 12
                  }}>
                    <div style={{
                      width: 8,
                      height: 8,
                      borderRadius: '50%',
                      background: '#ffd700',
                      boxShadow: '0 0 12px #ffd70060'
                    }}></div>
                    <Text style={{ 
                      color: '#ffd700', 
                      fontSize: 14, 
                      fontWeight: 500 
                    }}>
                      Cost-Reducing Capital
                    </Text>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </section>

        {/* 3. Paid Placement */}
        <section style={{
          padding: isMobile ? '60px 24px' : '120px 48px',
          borderBottom: '1px solid #1f1f1f',
          background: '#0a0a0a'
        }}>
          <Row justify="center" gutter={[48, 48]}>
            <Col xs={24} lg={12}>
              <div style={{ marginBottom: 32 }}>
                <Space align="center" style={{ marginBottom: 16 }}>
                  <EyeOutlined style={{ fontSize: 24, color: '#595959' }} />
                  <Text style={{ fontSize: 12, color: '#595959', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600 }}>
                    PAID PLACEMENT
                  </Text>
                </Space>
                <Title level={2} style={{ color: '#ffffff', marginBottom: 8, fontSize: isMobile ? 28 : 36, fontWeight: 600 }}>
                  Visibility, not outcomes
                </Title>
                <Text style={{ color: '#8c8c8c', fontSize: 16, fontStyle: 'italic' }}>
                  "Pay to be seen — not trusted."
                </Text>
              </div>

              <Card bordered style={{ background: '#000000', borderColor: '#1f1f1f', borderRadius: 12, marginBottom: 24 }} bodyStyle={{ padding: 32 }}>
                <Title level={4} style={{ color: '#ffffff', marginBottom: 16, fontSize: 20, fontWeight: 600 }}>
                  What it is
                </Title>
                <Paragraph style={{ color: '#8c8c8c', fontSize: 16, lineHeight: 1.8, marginBottom: 16 }}>
                  Users or organizations pay to surface:
                </Paragraph>
                <Space direction="vertical" size="small" style={{ width: '100%' }}>
                  <Text style={{ color: '#d9d9d9', fontSize: 15 }}>• Profiles</Text>
                  <Text style={{ color: '#d9d9d9', fontSize: 15 }}>• Rooms</Text>
                  <Text style={{ color: '#d9d9d9', fontSize: 15 }}>• Offers</Text>
                  <Text style={{ color: '#d9d9d9', fontSize: 15 }}>• Tools</Text>
                </Space>
              </Card>

              <Card bordered style={{ background: '#000000', borderColor: '#1f1f1f', borderRadius: 12 }} bodyStyle={{ padding: 32 }}>
                <Title level={4} style={{ color: '#ffffff', marginBottom: 16, fontSize: 20, fontWeight: 600 }}>
                  How it works
                </Title>
                <Space direction="vertical" size="middle" style={{ width: '100%' }}>
                  <div>
                    <Text style={{ color: '#d9d9d9', fontSize: 16, fontWeight: 500 }}>Placement is clearly labeled</Text>
                    <Paragraph style={{ color: '#8c8c8c', fontSize: 15, marginTop: 4, marginBottom: 0 }}>
                      All paid placements are transparently marked, ensuring users know when content is promoted.
                    </Paragraph>
                  </div>
                  <div>
                    <Text style={{ color: '#d9d9d9', fontSize: 16, fontWeight: 500 }}>Eligibility requires a minimum reputation</Text>
                    <Paragraph style={{ color: '#8c8c8c', fontSize: 15, marginTop: 4, marginBottom: 0 }}>
                      Only users with established reputation can purchase placement, maintaining platform quality.
                    </Paragraph>
                  </div>
                  <div>
                    <Text style={{ color: '#d9d9d9', fontSize: 16, fontWeight: 500 }}>Placement expires</Text>
                    <Paragraph style={{ color: '#8c8c8c', fontSize: 15, marginTop: 4, marginBottom: 0 }}>
                      Paid visibility has time limits, ensuring fresh content and preventing permanent dominance.
                    </Paragraph>
                  </div>
                </Space>
              </Card>
            </Col>

            <Col xs={24} lg={12}>
              <BankingModal
                title="Placement Activation"
                subtitle="Paid Placement Service"
                status="Placement Active"
                statusColor="#27c93f"
                items={[
                  { label: 'Profile Visibility', value: 'Enabled' },
                  { label: 'Reputation Check', value: 'Passed (min: 50)' },
                  { label: 'Payment Processed', value: '1,000 coins' },
                  { label: 'Placement Duration', value: '30 days' },
                  { label: 'Label Status', value: '[PAID] visible' }
                ]}
              />
            </Col>
          </Row>
        </section>

        {/* Subscriber Dividend Bond */}
        <section style={{
          padding: isMobile ? '60px 24px' : '120px 48px',
          borderBottom: '1px solid #1f1f1f',
          background: '#000000'
        }}>
          <Row justify="center" gutter={[48, 48]}>
            <Col xs={24} lg={12}>
              <div style={{ marginBottom: 32 }}>
                <Space align="center" style={{ marginBottom: 16 }}>
                  <RocketOutlined style={{ fontSize: 24, color: '#595959' }} />
                  <Text style={{ fontSize: 12, color: '#595959', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600 }}>
                    SUBSCRIBER DIVIDEND BOND
                  </Text>
                </Space>
                <Title level={2} style={{ color: '#ffffff', marginBottom: 8, fontSize: isMobile ? 28 : 36, fontWeight: 600 }}>
                  Your connection pays you. Like a bond.
                </Title>
                <Text style={{ color: '#8c8c8c', fontSize: 16, fontStyle: 'italic' }}>
                  "A registered income-bearing instrument funded by the network's revenue residual."
                </Text>
              </div>

              <Card bordered style={{ background: '#0a0a0a', borderColor: '#1f1f1f', borderRadius: 12, marginBottom: 24 }} bodyStyle={{ padding: 32 }}>
                <Title level={4} style={{ color: '#ffffff', marginBottom: 16, fontSize: 20, fontWeight: 600 }}>
                  How it works
                </Title>
                <Paragraph style={{ color: '#8c8c8c', fontSize: 15, lineHeight: 1.8, marginBottom: 16 }}>
                  Every subscriber's access circuit carries traffic that produces a measurable share of the network's CDN brokerage, gas-fee, and advertising revenue. The Subscriber Dividend Bond converts that ordinary residual entitlement into a registered income-bearing security.
                </Paragraph>
                <Space direction="vertical" size="middle" style={{ width: '100%' }}>
                  <div>
                    <Text style={{ color: '#d9d9d9', fontSize: 15, fontWeight: 500 }}>Bankruptcy-Remote Issuer</Text>
                    <Paragraph style={{ color: '#8c8c8c', fontSize: 14, marginTop: 4, marginBottom: 0 }}>
                      Old West Solutions SPV — a Delaware Statutory Trust wholly owned by the parent — issues the instrument. The SPV's separateness covenants ensure a parent-level financial reverse does not impair holder rights.
                    </Paragraph>
                  </div>
                  <div>
                    <Text style={{ color: '#d9d9d9', fontSize: 15, fontWeight: 500 }}>Chartered Trustee & Paying Agent</Text>
                    <Paragraph style={{ color: '#8c8c8c', fontSize: 14, marginTop: 4, marginBottom: 0 }}>
                      A TIA-qualified chartered trust company serves as indenture trustee and transfer agent. A regulated bank holds the reserve account. Coinbase Prime serves as qualified digital-asset custodian. Circle Wallet provides recipient-side managed wallet infrastructure.
                    </Paragraph>
                  </div>
                  <div>
                    <Text style={{ color: '#d9d9d9', fontSize: 15, fontWeight: 500 }}>Floating-Rate Coupon</Text>
                    <Paragraph style={{ color: '#8c8c8c', fontSize: 14, marginTop: 4, marginBottom: 0 }}>
                      Coupon = aggregate residual pool contributions (net of expenses) ÷ aggregate principal outstanding, annualized. Paid quarterly by ACH or monthly in USDC to your registered Circle Wallet, at your election.
                    </Paragraph>
                  </div>
                  <div>
                    <Text style={{ color: '#d9d9d9', fontSize: 15, fontWeight: 500 }}>SEC-Registered Offering</Text>
                    <Paragraph style={{ color: '#8c8c8c', fontSize: 14, marginTop: 4, marginBottom: 0 }}>
                      Initial offering structured under Regulation A+ Tier 2 (up to $75M / 12 months). Subsequent offerings under registered S-1. Transfer restrictions enforced by the registered transfer agent. KYC discharged through Oldwest identity governance.
                    </Paragraph>
                  </div>
                </Space>
              </Card>

              <Card bordered style={{ background: '#0a0a0a', borderColor: '#1f1f1f', borderRadius: 12 }} bodyStyle={{ padding: 32 }}>
                <Title level={4} style={{ color: '#ffffff', marginBottom: 16, fontSize: 20, fontWeight: 600 }}>
                  Residential example — 1 Gbps symmetric
                </Title>
                <Space direction="vertical" size="small" style={{ width: '100%' }}>
                  {[
                    { label: 'Monthly CDN Residual (avg.)', value: '$7.20' },
                    { label: 'Annual Residual Entitlement', value: '$86.40' },
                    { label: 'Instrument Principal', value: '$1,000.00' },
                    { label: 'Effective Coupon Rate', value: '8.64%', highlight: true },
                    { label: 'Payment Method', value: 'USDC · Circle Wallet / ACH' },
                  ].map((row, i) => (
                    <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: i < 4 ? '1px solid #1f1f1f' : 'none' }}>
                      <Text style={{ color: '#8c8c8c', fontSize: 13 }}>{row.label}</Text>
                      <Text style={{ color: row.highlight ? '#52c41a' : '#d9d9d9', fontSize: 13, fontWeight: row.highlight ? 700 : 500 }}>{row.value}</Text>
                    </div>
                  ))}
                </Space>
              </Card>
            </Col>

            <Col xs={24} lg={12}>
              <BankingModal
                title="Subscriber Dividend Bond"
                subtitle="OWS-OLDWESTNET-MASTER-001"
                status="Instrument Active · Reg A+ Tier 2"
                statusColor="#27c93f"
                items={[
                  { label: 'Issuer', value: 'Old West Solutions SPV (DST)' },
                  { label: 'Indenture Trustee', value: 'Chartered Trust Co. (TIA-qualified)' },
                  { label: 'Paying Agent', value: 'Regulated Bank · USDC / ACH' },
                  { label: 'Digital Custodian', value: 'Coinbase Prime' },
                  { label: 'Wallet Infrastructure', value: 'Circle Wallet Platform' },
                  { label: 'Transfer Agent', value: 'SEC-Registered' },
                  { label: 'Settlement Chain', value: 'Solana · Merkle-root committed' },
                ]}
              />
            </Col>
          </Row>
        </section>

        {/* How it all connects */}
        <section style={{
          padding: isMobile ? '60px 24px' : '120px 48px',
          background: '#0a0a0a'
        }}>
          <Row justify="center">
            <Col xs={24} lg={20} xl={16}>
              <div style={{ marginBottom: 48, textAlign: 'center' }}>
                <Title level={2} style={{ color: '#ffffff', marginBottom: 16, fontSize: isMobile ? 28 : 36, fontWeight: 600 }}>
                  How this all connects
                </Title>
                <Text style={{ color: '#8c8c8c', fontSize: 16 }}>
                  Simple model
                </Text>
              </div>

              <BankingModal
                title="Treasury Dashboard"
                subtitle="System Status Overview"
                status="All Systems Operational"
                statusColor="#27c93f"
                items={[
                  { label: 'Paid Placement', value: '1,247 active' },
                  { label: 'Escrow', value: '8,432 coins' },
                  { label: 'Reputation', value: '12,847 users' }
                ]}
              >
                <div style={{ marginTop: 32, paddingTop: 24, borderTop: '1px solid #1f1f1f' }}>
                  <Row gutter={[16, 16]}>
                    <Col xs={24} sm={12} md={6}>
                      <div style={{ textAlign: 'center', padding: 16 }}>
                        <EyeOutlined style={{ fontSize: 32, color: '#595959', marginBottom: 8 }} />
                        <Text style={{ color: '#8c8c8c', fontSize: 14, display: 'block' }}>Paid Placement</Text>
                        <Text style={{ color: '#d9d9d9', fontSize: 12, display: 'block', marginTop: 4 }}>→ Visibility</Text>
                      </div>
                    </Col>
                    <Col xs={24} sm={12} md={6}>
                      <div style={{ textAlign: 'center', padding: 16 }}>
                        <LockOutlined style={{ fontSize: 32, color: '#595959', marginBottom: 8 }} />
                        <Text style={{ color: '#8c8c8c', fontSize: 14, display: 'block' }}>Escrow</Text>
                        <Text style={{ color: '#d9d9d9', fontSize: 12, display: 'block', marginTop: 4 }}>→ Execution safety</Text>
                      </div>
                    </Col>
                    <Col xs={24} sm={12} md={6}>
                      <div style={{ textAlign: 'center', padding: 16 }}>
                        <TrophyOutlined style={{ fontSize: 32, color: '#595959', marginBottom: 8 }} />
                        <Text style={{ color: '#8c8c8c', fontSize: 14, display: 'block' }}>Reputation</Text>
                        <Text style={{ color: '#d9d9d9', fontSize: 12, display: 'block', marginTop: 4 }}>→ Cost & access</Text>
                      </div>
                    </Col>
                  </Row>
                </div>
              </BankingModal>
            </Col>
          </Row>
        </section>
      </Content>
    </Layout>
  )
}
