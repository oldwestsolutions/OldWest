'use client'

import { Layout, Typography, Button, Input, Form, Checkbox, Space } from 'antd'
import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import {
  LockOutlined, UserOutlined, CheckCircleFilled,
  SafetyOutlined, GlobalOutlined, BankOutlined, ArrowRightOutlined,
} from '@ant-design/icons'

const { Content } = Layout
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

export default function Login() {
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const onFinish = async (_values: any) => {
    setLoading(true)
    await new Promise((r) => setTimeout(r, 900))
    setLoading(false)
    router.push('/dashboard')
  }

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
        .serif { font-family: 'Cormorant Garamond', 'Playfair Display', Georgia, 'Times New Roman', serif; }
        .mono { font-family: 'JetBrains Mono', 'SF Mono', Menlo, monospace; }
        .grain::before {
          content: '';
          position: absolute; inset: 0;
          background-image: radial-gradient(rgba(58,40,23,0.10) 1px, transparent 1px);
          background-size: 4px 4px;
          opacity: 0.5;
          pointer-events: none;
          mix-blend-mode: multiply;
        }
        .login-input .ant-input,
        .login-input .ant-input-affix-wrapper {
          background: ${PALETTE.parchment} !important;
          border-color: ${PALETTE.tanDeep} !important;
          color: ${PALETTE.black} !important;
          border-radius: 0 !important;
        }
        .login-input .ant-input-affix-wrapper:hover,
        .login-input .ant-input-affix-wrapper-focused {
          border-color: ${PALETTE.brown} !important;
          box-shadow: 0 4px 0 ${PALETTE.brown} !important;
        }
        @media (max-width: 768px) {
          .left-panel { display: none !important; }
        }
      `}</style>

      <Content style={{ display: 'flex', minHeight: '100vh' }}>

        {/* ─────── LEFT EDITORIAL PANEL ─────── */}
        <div className="left-panel grain" style={{
          width: '46%',
          minWidth: 480,
          background: `
            radial-gradient(ellipse at 30% 20%, rgba(184,152,90,0.22) 0%, transparent 55%),
            radial-gradient(ellipse at 70% 80%, rgba(58,40,23,0.30) 0%, transparent 60%),
            linear-gradient(160deg, ${PALETTE.brown} 0%, ${PALETTE.charcoal} 60%, ${PALETTE.black} 100%)
          `,
          padding: '52px 56px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          position: 'relative',
          overflow: 'hidden',
        }}>
          {/* Decorative ornament */}
          <div style={{
            position: 'absolute',
            top: 200, right: -120,
            width: 480, height: 480,
            border: `1px solid rgba(184,152,90,0.18)`,
            borderRadius: '50%',
          }} />
          <div style={{
            position: 'absolute',
            top: 240, right: -80,
            width: 400, height: 400,
            border: `1px solid rgba(184,152,90,0.10)`,
            borderRadius: '50%',
          }} />

          {/* HEADER */}
          <div style={{ position: 'relative', zIndex: 2 }}>
            <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 14 }}>
              <div style={{
                width: 46, height: 46, borderRadius: 4,
                background: PALETTE.cream,
                border: `1px solid ${PALETTE.bronze}`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <Text className="serif" style={{ color: PALETTE.black, fontWeight: 700, fontSize: 18 }}>OW</Text>
              </div>
              <div>
                <Text className="serif" style={{ color: PALETTE.cream, fontWeight: 700, fontSize: 24, letterSpacing: '-0.01em', display: 'block', lineHeight: 1 }}>Oldwest</Text>
                <Text className="mono" style={{ color: PALETTE.bronze, fontSize: 9, letterSpacing: '0.22em', textTransform: 'uppercase' }}>Old West Solutions LLC</Text>
              </div>
            </Link>
          </div>

          {/* MIDDLE EDITORIAL */}
          <div style={{ position: 'relative', zIndex: 2 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 24 }}>
              <div style={{ width: 60, height: 1, background: PALETTE.bronze }} />
              <Text className="mono" style={{ color: PALETTE.bronze, fontSize: 11, letterSpacing: '0.28em', textTransform: 'uppercase', fontWeight: 600 }}>
                Volume I · MMXXVI
              </Text>
            </div>
            <Title className="serif" style={{
              color: PALETTE.cream,
              fontSize: 56,
              fontWeight: 700,
              lineHeight: 0.95,
              letterSpacing: '-0.035em',
              margin: 0,
              marginBottom: 28,
            }}>
              The trust<br />layer<br />
              <em style={{ color: PALETTE.bronze, fontStyle: 'italic' }}>awaits.</em>
            </Title>
            <Paragraph style={{ color: PALETTE.tan, fontSize: 17, lineHeight: 1.75, marginBottom: 36, maxWidth: 420, fontWeight: 300 }}>
              Sign in to your Oldwest workspace. Verified identity, residual revenue, and registered dividend bond — administered under heritage-grade institutional rails.
            </Paragraph>

            <Space direction="vertical" size={16} style={{ width: '100%', maxWidth: 420 }}>
              {[
                { icon: <SafetyOutlined />, text: 'Cryptographically attested identity' },
                { icon: <GlobalOutlined />, text: 'Lumen-backed global edge delivery' },
                { icon: <BankOutlined />, text: 'Revenue-backed dividend bond · TIA-qualified' },
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                  <div style={{
                    width: 36, height: 36, borderRadius: '50%',
                    background: 'rgba(184,152,90,0.15)',
                    border: `1px solid ${PALETTE.bronze}`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: PALETTE.bronze, fontSize: 14,
                    flexShrink: 0,
                  }}>
                    {item.icon}
                  </div>
                  <Text className="serif" style={{ color: PALETTE.tan, fontSize: 16, fontStyle: 'italic' }}>{item.text}</Text>
                </div>
              ))}
            </Space>
          </div>

          {/* FOOTER */}
          <div style={{ position: 'relative', zIndex: 2 }}>
            <div style={{
              padding: '18px 22px',
              border: `1px solid rgba(184,152,90,0.3)`,
              background: 'rgba(10,9,8,0.4)',
              marginBottom: 24,
            }}>
              <Text className="serif" style={{ color: PALETTE.cream, fontSize: 16, fontStyle: 'italic', display: 'block', lineHeight: 1.5 }}>
                "Infrastructure that pays its participants."
              </Text>
              <Text className="mono" style={{ color: PALETTE.brownLight, fontSize: 9, letterSpacing: '0.22em', textTransform: 'uppercase', marginTop: 6, display: 'block' }}>
                — Founder's Letter, Old West Solutions LLC
              </Text>
            </div>
            <Text className="mono" style={{ color: PALETTE.brownLight, fontSize: 9, letterSpacing: '0.22em', textTransform: 'uppercase' }}>
              © MMXXVI · OWS-OLDWESTNET-MASTER-001
            </Text>
          </div>
        </div>


        {/* ─────── RIGHT FORM PANEL ─────── */}
        <div className="grain" style={{
          flex: 1,
          background: `
            radial-gradient(ellipse at 80% 20%, rgba(184,152,90,0.18) 0%, transparent 50%),
            radial-gradient(ellipse at 20% 80%, rgba(58,40,23,0.08) 0%, transparent 60%),
            linear-gradient(160deg, ${PALETTE.cream} 0%, ${PALETTE.tan} 100%)
          `,
          padding: '40px 32px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
        }}>
          <div style={{ width: '100%', maxWidth: 460, position: 'relative', zIndex: 2 }}>

            <div style={{ marginBottom: 36 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 24 }}>
                <div style={{ width: 60, height: 1, background: PALETTE.brown }} />
                <Text className="mono" style={{ color: PALETTE.brown, fontSize: 11, letterSpacing: '0.28em', textTransform: 'uppercase', fontWeight: 600 }}>
                  Sign In
                </Text>
              </div>
              <Title className="serif" style={{
                color: PALETTE.black,
                fontSize: 48,
                fontWeight: 700,
                letterSpacing: '-0.03em',
                lineHeight: 1.0,
                margin: 0,
                marginBottom: 16,
              }}>
                Welcome<br />
                <em style={{ color: PALETTE.brown, fontStyle: 'italic' }}>back.</em>
              </Title>
              <Text className="serif" style={{ color: PALETTE.brownMid, fontSize: 17, fontStyle: 'italic' }}>
                Your account, your residuals, your bond.
              </Text>
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
                label={<Text className="mono" style={{ color: PALETTE.brown, fontWeight: 700, fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase' }}>Username or Email</Text>}
                rules={[{ required: true, message: 'Required' }]}
                style={{ marginBottom: 22 }}
              >
                <Input
                  className="login-input"
                  prefix={<UserOutlined style={{ color: PALETTE.brownLight, marginRight: 8 }} />}
                  placeholder="oldwestsolutions"
                  size="large"
                  style={{ borderRadius: 0, height: 52, fontSize: 16 }}
                />
              </Form.Item>

              <Form.Item
                name="password"
                label={<Text className="mono" style={{ color: PALETTE.brown, fontWeight: 700, fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase' }}>Password</Text>}
                rules={[{ required: true, message: 'Required' }]}
                style={{ marginBottom: 18 }}
              >
                <Input.Password
                  className="login-input"
                  prefix={<LockOutlined style={{ color: PALETTE.brownLight, marginRight: 8 }} />}
                  placeholder="••••••••••"
                  size="large"
                  style={{ borderRadius: 0, height: 52, fontSize: 16 }}
                />
              </Form.Item>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 28 }}>
                <Form.Item name="remember" valuePropName="checked" noStyle>
                  <Checkbox style={{ color: PALETTE.brownMid, fontSize: 13 }}>Remember me</Checkbox>
                </Form.Item>
                <Link href="/forgot-password" className="mono" style={{ color: PALETTE.brown, fontSize: 11, letterSpacing: '0.16em', textTransform: 'uppercase', fontWeight: 700 }}>
                  Forgot?
                </Link>
              </div>

              <Form.Item style={{ marginBottom: 0 }}>
                <Button
                  htmlType="submit"
                  loading={loading}
                  block
                  size="large"
                  icon={<ArrowRightOutlined />}
                  style={{
                    background: PALETTE.black,
                    borderColor: PALETTE.black,
                    color: PALETTE.cream,
                    borderRadius: 0,
                    fontWeight: 800,
                    height: 56,
                    fontSize: 13,
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                    boxShadow: `0 8px 0 ${PALETTE.brown}`,
                  }}
                >
                  Sign In
                </Button>
              </Form.Item>
            </Form>

            <div style={{
              margin: '32px 0 24px',
              display: 'flex',
              alignItems: 'center',
              gap: 16,
            }}>
              <div style={{ flex: 1, height: 1, background: PALETTE.tanDeep }} />
              <Text className="mono" style={{ color: PALETTE.brownLight, fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase' }}>
                Or
              </Text>
              <div style={{ flex: 1, height: 1, background: PALETTE.tanDeep }} />
            </div>

            <Button
              block
              href="/create-account"
              style={{
                background: 'transparent',
                borderColor: PALETTE.black,
                color: PALETTE.black,
                borderRadius: 0,
                fontWeight: 700,
                height: 52,
                fontSize: 12,
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                borderWidth: 1.5,
              }}
            >
              Create a New Account
            </Button>

            <div style={{
              marginTop: 28,
              padding: '16px 20px',
              background: PALETTE.parchment,
              border: `1px solid ${PALETTE.tanDeep}`,
              borderLeft: `3px solid ${PALETTE.brown}`,
              display: 'flex',
              gap: 12,
              alignItems: 'flex-start',
            }}>
              <CheckCircleFilled style={{ color: PALETTE.brown, marginTop: 3, flexShrink: 0 }} />
              <Text style={{ color: PALETTE.brownMid, fontSize: 13, lineHeight: 1.6 }}>
                <strong style={{ color: PALETTE.black }}>Cryptographically attested.</strong> Your Oldwest identity is verified, transferable, and sovereign — settled on Solana via Coinbase.
              </Text>
            </div>

            <div style={{ marginTop: 24, textAlign: 'center' }}>
              <Text className="mono" style={{ color: PALETTE.brownLight, fontSize: 10, letterSpacing: '0.16em', textTransform: 'uppercase' }}>
                <Link href="/terms-of-service" style={{ color: PALETTE.brownMid }}>Terms</Link>
                {' · '}
                <Link href="/privacy-policy" style={{ color: PALETTE.brownMid }}>Privacy</Link>
                {' · '}
                <Link href="/" style={{ color: PALETTE.brownMid }}>Back home</Link>
              </Text>
            </div>
          </div>
        </div>
      </Content>
    </Layout>
  )
}
