'use client'

import { Layout, Typography, Divider, Space, Button, Card, Input, Form, Checkbox } from 'antd'
import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { LockOutlined, UserOutlined, SafetyOutlined } from '@ant-design/icons'

const { Content } = Layout
const { Title, Paragraph, Text } = Typography

export default function Login() {
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const onFinish = async (values: any) => {
    setLoading(true)
    await new Promise(resolve => setTimeout(resolve, 1000))
    setLoading(false)
    router.push('/dashboard')
  }

  return (
    <Layout style={{ minHeight: '100vh', background: '#000000', color: '#ffffff' }}>
      <Content style={{ padding: '120px 48px', maxWidth: 500, margin: '0 auto' }}>
        <div style={{ marginBottom: 48 }}>
          <Link href="/" style={{ color: '#8c8c8c', fontSize: 14, textDecoration: 'none' }}>
            ← Back to Home
          </Link>
        </div>

        <Card
          bordered
          style={{
            background: '#0a0a0a',
            borderColor: '#1f1f1f',
            borderRadius: 12
          }}
          bodyStyle={{ padding: 48 }}
        >
          <div style={{ textAlign: 'center', marginBottom: 32 }}>
            <div style={{
              width: 72,
              height: 72,
              background: '#0a0a0a',
              border: '1px solid #1f1f1f',
              borderRadius: 16,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 24px'
            }}>
              <SafetyOutlined style={{ fontSize: 36, color: '#8c8c8c' }} />
            </div>
            <Title level={2} style={{ color: '#ffffff', marginBottom: 8, fontSize: 28, fontWeight: 700, letterSpacing: '-0.02em' }}>
              OLDWEST.NET
            </Title>
            <Paragraph style={{ color: '#595959', fontSize: 12, letterSpacing: '0.12em', textTransform: 'uppercase', margin: '0 0 8px 0', fontWeight: 600 }}>
              Old West Solutions LLC
            </Paragraph>
            <Paragraph style={{ color: '#8c8c8c', fontSize: 14, margin: 0 }}>
              Verified access to the internet's trust layer
            </Paragraph>
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
              rules={[{ required: true, message: 'Please enter your username or email' }]}
            >
              <Input
                prefix={<UserOutlined style={{ color: '#595959' }} />}
                placeholder="Username or Email"
                size="large"
                style={{
                  background: '#000000',
                  borderColor: '#1f1f1f',
                  color: '#ffffff',
                  borderRadius: 12,
                  height: 52
                }}
              />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[{ required: true, message: 'Please enter your password' }]}
            >
              <Input.Password
                prefix={<LockOutlined style={{ color: '#595959' }} />}
                placeholder="Password"
                size="large"
                style={{
                  background: '#000000',
                  borderColor: '#1f1f1f',
                  color: '#ffffff',
                  borderRadius: 12,
                  height: 52
                }}
              />
            </Form.Item>

            <Form.Item>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Form.Item name="remember" valuePropName="checked" noStyle>
                  <Checkbox style={{ color: '#8c8c8c', fontSize: 13 }}>Remember me</Checkbox>
                </Form.Item>
                <Link href="/forgot-password" style={{ color: '#595959', fontSize: 13 }}>
                  Forgot password?
                </Link>
              </div>
            </Form.Item>

            <Form.Item style={{ marginBottom: 0 }}>
              <Button
                type="primary"
                htmlType="submit"
                loading={loading}
                block
                size="large"
                style={{
                  background: '#ffffff',
                  borderColor: '#ffffff',
                  color: '#000000',
                  borderRadius: 12,
                  fontWeight: 700,
                  height: 52,
                  fontSize: 15,
                  letterSpacing: '0.04em',
                  boxShadow: 'none'
                }}
              >
                SIGN IN
              </Button>
            </Form.Item>
          </Form>

          <Divider style={{ borderColor: '#1f1f1f', margin: '32px 0' }} />

          <div style={{ textAlign: 'center' }}>
            <Text style={{ color: '#8c8c8c', fontSize: 14 }}>
              Need an account?{' '}
              <Link href="/create-account" style={{ color: '#ffffff', textDecoration: 'none', fontWeight: 600 }}>
                Register
              </Link>
            </Text>
          </div>

          <div style={{
            marginTop: 24,
            padding: '16px',
            background: '#000000',
            border: '1px solid #1f1f1f',
            borderRadius: 10,
            display: 'flex',
            alignItems: 'flex-start',
            gap: 12
          }}>
            <div style={{
              width: 8,
              height: 8,
              borderRadius: '50%',
              background: '#27c93f',
              boxShadow: '0 0 8px #27c93f60',
              marginTop: 4,
              flexShrink: 0
            }} />
            <Text style={{ color: '#595959', fontSize: 12, lineHeight: 1.6 }}>
              Access is cryptographically attested. Your identity on Oldwest.net is verified, transferable, and sovereign. Powered by Solana and Coinbase infrastructure.
            </Text>
          </div>
        </Card>

        <div style={{ marginTop: 32, textAlign: 'center' }}>
          <Text style={{ color: '#595959', fontSize: 12 }}>
            By continuing, you agree to our{' '}
            <Link href="/terms-of-service" style={{ color: '#8c8c8c' }}>Terms of Service</Link>
            {' '}and{' '}
            <Link href="/privacy-policy" style={{ color: '#8c8c8c' }}>Privacy Policy</Link>
          </Text>
        </div>
        <div style={{ marginTop: 16, textAlign: 'center' }}>
          <Text style={{ color: '#2f2f2f', fontSize: 11, letterSpacing: '0.08em' }}>
            © 2026 Old West Solutions LLC · Docket OWS-OLDWESTNET-MASTER-001
          </Text>
        </div>
      </Content>
    </Layout>
  )
}
