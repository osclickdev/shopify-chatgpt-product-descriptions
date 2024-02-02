import { Card, Page, Layout } from '@shopify/polaris'
import { TitleBar } from '@shopify/app-bridge-react'
import { ButtonProductsPicker } from '../components/ButtonProductsPicker'

export default function HomePage() {
  return (
    <Page narrowWidth>
      <TitleBar title="App name" primaryAction={null} />
      <Layout>
        <Layout.Section>
          <Card>
            <p>Home page - Interactiv4 NodeJS APP Template</p>
            <ButtonProductsPicker />
          </Card>
        </Layout.Section>
      </Layout>
    </Page>
  )
}
