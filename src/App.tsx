import { MantineProvider, Container, Group, Image, Paper, Space, Text, Title, Grid, ActionIcon, Card, rem } from "@mantine/core";
import { IconBrandYoutube, IconPencil } from '@tabler/icons-react';
import '@mantine/core/styles.css';
import './App.css'

const banner = "images/web-banner.png";
const thumb1 = "images/thumbnails/denizen.png";
const thumb2 = "images/thumbnails/renders.png";
const thumb3 = "images/thumbnails/designs.png";
const thumb4 = "images/thumbnails/noteblocks.png";

function App() {
  return (
    <>
      <MantineProvider defaultColorScheme='dark'>
        <Group mt="10" justify="center">
          <Grid gutter={{ base: 25, xs: 25, md: 18, xl: 25 }} justify="center">
            <Grid.Col span={12}>
              <Container>
                <Image radius="md" h="260" fit="cover" src={banner} className="banner" alt="Banner Image"/>
              </Container>
            </Grid.Col>
            <Grid.Col span={9}>
              <Paper shadow="md" radius="md" p="xl" withBorder>
                <Title order={1}>About Me</Title>
                <Space h="xs" />
                <Text size="lg">Hi! I'm known online as "Pigler".</Text>
                <Text size="lg">I make song covers and originals using <a href='https://opennbs.org' target='_blank'>OpenNBS</a>.</Text>
                <Text size="lg">I also script with <a href='https://github.com/DenizenScript/Denizen' target='_blank'>Denizen</a> to toss some of my game-related ideas into a local spigot server.</Text>
              </Paper>
            </Grid.Col>
            <Grid.Col span={12}>
              <Paper shadow="xl" radius="md" p="xl" withBorder>
                <Title order={2} size="h1">Noteblock Stuff</Title>
                <Space h="xl" />
                <Grid gutter={{ base: 25, xs: 25, md: 18, xl: 25 }} justify="center">
                  <Grid.Col span={6}>
                    <Card shadow="md" padding="lg" radius="md" component="a" href="https://www.youtube.com/watch?v=W33sbxerFHA&list=PLoMC3NlGkh-Xvz4j6LzqOhIr9hGTUe95L" target="_blank" withBorder>
                      <Card.Section>
                        <Image src={thumb4} alt="3"/>
                      </Card.Section>
                      <Group justify="center" mt="xs">
                        <Text fw={500}>Noteblock Works</Text>
                      </Group>
                      <Text size="sm" c="dimmed">My Youtube Channel comprising of note block covers and originals.</Text>
                    </Card>
                  </Grid.Col>
                </Grid>
              </Paper>
            </Grid.Col>
          </Grid>
        </Group>
        <Group className="footer">
          <Container className="inner">
            <Group gap={0} className="links" justify="flex-end" wrap="nowrap">
              <ActionIcon size="xl" color="gray" variant="subtle" component="a" href="https://www.youtube.com/@hypigler" aria-label="Open in a new tab" target='__blank'>
                <IconBrandYoutube style={{ width: rem(64), height: rem(64) }} stroke={1} />
              </ActionIcon>
              {/* <ActionIcon size="xl" color="gray" variant="subtle" component="a" href="https://www.youtube.com/@hypigler" aria-label="Open in a new tab" target='__blank'>
                <IconPencil style={{ width: rem(64), height: rem(64) }} stroke={1} />
              </ActionIcon> */}
            </Group>
            <Space h="md" />
            <Text c="dimmed">Website made with Vite and Mantine.</Text>
            <Text c="dimmed">© 2024 Pigler</Text>
          </Container>
        </Group>
      </MantineProvider>
    </>
  )
}

export default App
