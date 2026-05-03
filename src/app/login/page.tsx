'use client'

import { Layout, Typography, Button, Card, Input, Form, Checkbox, Divider, Space, Tag } from 'antd'
import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { LockOutlined, UserOutlined, CheckCircleFilled, SafetyOutlined, GlobalOutlined, BankOutlined } from '@ant-design/icons'

const { Content } = Layout
const { Title, Paragraph, Text } = Typography

export default function Login() {
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const onFinish = async (_values: any) => {
    setLoading(true)
    await new Promise(resolve => setTimeout(resolve, 900))
    setLoading(false)
    router.push('/dashboard')
  }

  return (
    <Layout style={{ minHeight: '100vh', background: '#f8fafc' }}>
      <Content style={{ display: 'flex', minHeight: '100vh' }}>

        {/* ── LEFT PANEL ─────────────────────────────── */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '48px 52px',
          width: '44%',
          minWidth: 420,
          background: 'linear-gradient(160deg, #1d4ed8 0%, #1e3a8a 55%, #0f172a 100%)',
          position: 'relative',
          overflow: 'hidden',
        }}
          className="login-panel"
        >
          {/* Ambient circles */}
          <div style={{ position: 'absolute', width: 320, height: 320, borderRadius: '50%', background: 'rgba(255,255,255,0.04)', top: -80, left: -80 }} />
          <div style={{ position: 'absolute', width: 200, height: 200, borderRadius: '50%', background: 'rgba(214,190,154,0.10)', bottom: 80, right: -40 }} />

          <div style={{ position: 'relative', zIndex: 1 }}>
            <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 10 }}>
              <div style={{ width: 36, height: 36, borderRadius: 10, background: 'rgba(255,255,255,0.14)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ color: '#fff', fontWeight: 800, fontSize: 13 }}>OW</Text>
              </div>
              <Text style={{ color: '#fff', fontWeight: 700, fontSize: 18, letterSpacing: '-0.01em' }}>Oldwest.net</Text>
            </Link>
          </div>

          <div style={{ position: 'relative', zIndex: 1 }}>
            <Tag style={{ borderRadius: 999, background: 'rgba(255,255,255,0.1)', borderColor: 'rgba(255,255,255,0.15)', color: '#e0e7ff', marginBottom: 20, padding: '4px 12px' }}>
              Enterprise Infrastructure · 2026
            </Tag>
            <Title style={{ color: '#ffffff', fontSize: 34, fontWeight: 800, lineHeight: 1.1, letterSpacing: '-0.03em', marginBottom: 16 }}>
              The internet's<br />trust layer is<br />waiting for you.
            </Title>
            <Paragraph style={{ color: 'rgba(255,255,255,0.65)', fontSize: 15, lineHeight: 1.8 }}>
              CDN brokerage · Identity governance · Subscriber dividends · Municipal toll remittance.
            </Paragraph>

            <Space direction="vertical" size={12} style={{ marginTop: 32, width: '100%' }}>
              {[
                { icon: <SafetyOutlined />, text: 'Cryptographic identity attestation' },
                { icon: <GlobalOutlined />, text: 'Lumen-backed global edge delivery' },
                { icon: <BankOutlined />, text: 'Revenue-backed dividend bond' },
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <div style={{ width: 30, height: 30, borderRadius: 8, background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#a5b4fc', fontSize: 14 }}>
                    {item.icon}
                  </div>
                  <Text style={{ color: 'rgba(255,255,255,0.72)', fontSize: 14 }}>{item.text}</Text>
                </div>
              ))}
            </Space>
          </div>

          <div style={{ position: 'relative', zIndex: 1 }}>
            <Text style={{ color: 'rgba(255,255,255,0.3)', fontSize: 12 }}>
              © 2026 Old West Solutions LLC · OWS-OLDWESTNET-MASTER-001
            </Text>
          </div>
        </div>

        {/* ── RIGHT PANEL ─────────────────────────────── */}
        <div style={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '48px 32px',
          background: 'radial-gradient(circle at 80% 20%, rgba(214,190,154,0.18) 0%, transparent 40%), #f8fafc',
        }}>
          <div style={{ width: '100%', maxWidth: 420 }}>
            <div style={{ marginBottom: 36 }}>
              <Title style={{ color: '#0f172a', fontSize: 30, fontWeight: 800, marginBottom: 6, letterSpacing: '-0.02em' }}>
                Welcome back
              </Title>
              <Text style={{ color: '#64748b', fontSize: 15 }}>Sign in to your Oldwest.net workspace</Text>
            </div>

            <Form
              name="login"
              onFinish={onFinish}
              layout="vertical"
              requiredMark={false}
              initialValues={{ username: 'oldwestsolutions' }}
            >
              <Form.Item
                name="username"
                label={<Text style={{ color: '#374151', fontWeight: 600, fontSize: 13 }}>Username or email</Text>}
                rules={[{ required: true, message: 'Required' }]}
                style={{ marginBottom: 16 }}
              >
                <Input
                  prefix={<UserOutlined style={{ color: '#94a3b8' }} />}
                  placeholder="oldwestsolutions"
                  size="large"
                  style={{ borderRadius: 12, height: 48, borderColor: '#e2e8f0', background: '#ffffff', fontSize: 15 }}
                />
              </Form.Item>

              <Form.Item
                name="password"
                label={<Text style={{ color: '#374151', fontWeight: 600, fontSize: 13 }}>Password</Text>}
                rules={[{ required: true, message: 'Required' }]}
                style={{ marginBottom: 12 }}
              >
                <Input.Password
                  prefix={<LockOutlined style={{ color: '#94a3b8' }} />}
                  placeholder="••••••••••"
                  size="large"
                  style={{ borderRadius: 12, height: 48, borderColor: '#e2e8f0', background: '#ffffff', fontSize: 15 }}
                />
              </Form.Item>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
                <Form.Item name="remember" valuePropName="checked" noStyle>
                  <Checkbox style={{ color: '#64748b', fontSize: 13 }}>Remember me</Checkbox>
                </Form.Item>
                <Link href="/forgot-password" style={{ color: '#2f5fd7', fontSize: 13, fontWeight: 600 }}>
                  Forgot password?
                </Link>
              </div>

              <Form.Item style={{ marginBottom: 0 }}>
                <Button
                  type="primary"
                  htmlType="submit"
                  loading={loading}
                  block
                  size="large"
                  style={{
                    background: '#2f5fd7',
                    borderColor: '#2f5fd7',
                    borderRadius: 12,
                    fontWeight: 700,
                    height: 50,
                    fontSize: 15,
                    boxShadow: '0 12px 24px rgba(47,95,215,0.28)',
                  }}
                >
                  Sign in
                </Button>
              </Form.Item>
            </Form>

            <Divider style={{ margin: '28px 0', color: '#94a3b8', fontSize: 12 }}>or continue with</Divider>

            <Button
              block
              href="/create-account"
              style={{
                borderRadius: 12,
                height: 50,
                borderColor: '#e2e8f0',
                color: '#334155',
                fontWeight: 600,
                fontSize: 14,
                background: '#ffffff',
                boxShadow: '0 2px 8px rgba(15,23,42,0.06)',
              }}
            >
              Create a new account
            </Button>

            <div style={{
              marginTop: 24,
              padding: '14px 18px',
              background: '#f0fdf4',
              border: '1px solid #bbf7d0',
              borderRadius: 12,
              display: 'flex',
              alignItems: 'flex-start',
              gap: 10,
            }}>
              <CheckCircleFilled style={{ color: '#16a34a', marginTop: 2, flexShrink: 0 }} />
              <Text style={{ color: '#15803d', fontSize: 13, lineHeight: 1.6 }}>
                Access is cryptographically attested. Your Oldwest.net identity is verified, transferable, and sovereign — settled on Solana via Coinbase.
              </Text>
            </div>

            <div style={{ marginTop: 24, textAlign: 'center' }}>
              <Text style={{ color: '#94a3b8', fontSize: 12 }}>
                By continuing, you agree to our{' '}
                <Link href="/terms-of-service" style={{ color: '#64748b' }}>Terms</Link>
                {' '}·{' '}
                <Link href="/privacy-policy" style={{ color: '#64748b' }}>Privacy</Link>
              </Text>
            </div>
          </div>
        </div>
      </Content>

      <style>{`
        @media (max-width: 768px) {
          .login-panel { display: none !important; }
        }
      `}</style>
    </Layout>
  )
}
