import { MantineProvider, Container, Group, Image, Paper, Card, Space, Text, Title, Grid, ActionIcon, rem } from "@mantine/core";
import { IconBrandYoutube } from '@tabler/icons-react';
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
        <Group mt="50" justify="center">
          <Grid gutter={{ base: 25, xs: 25, md: 18, xl: 25 }} justify="center">
            <Grid.Col span={12}>
              <Container>
                <Image radius="md" h="260" fit="cover" src={banner} className="banner"/>
              </Container>
            </Grid.Col>
            <Grid.Col span={9}>
              <Paper shadow="xl" radius="md" p="xl" withBorder>
                <Title order={1}>About Me</Title>
                <Space h="xs" />
                <Text size="lg">Commonly known online as "Pigler", or the <a href='https://www.youtube.com/watch?v=m9-dpO47XVw' target='_blank'>Necron Doom</a> enjoyer.</Text>
                <Text size="lg">I am most frequently seen dabbling in various block-game projects, such as creating note block covers using <a href='https://opennbs.org' target='_blank'>Open Note Block Studio</a> or minecraft server scripting shenanigans with <a href='https://github.com/DenizenScript/Denizen' target='_blank'>Denizen</a>.</Text>
              </Paper>
            </Grid.Col>
            <Grid.Col span={12}>
              <Paper shadow="xl" radius="md" p="xl" withBorder>
                <Title order={2} size="h1">Aspirations</Title>
                <Space h="xs" />
                <Text size="lg">Creating an experience for others to enjoy using a medium in any form is something that i truly enjoy doing.</Text>
                <Text size="lg">As such, when i discovered the possibility of multiplayer servers in Minecraft, a very popular game at the time. Which also had many very popular and fun online multiplayer servers, i jumped in and decided to make one for me and my friends, while adding my own twists to the base game.</Text>
                <Space h="xs" />
                <Text size="lg">However, adding only the fun and unique features are on the top of my bucket list. Creating brand new and original ideas is fun and something that inspires me most when it comes to my creations.</Text>
                <Space h="xs" />
                <Text size="lg">I am well versed with the <a href='https://github.com/DenizenScript/Denizen' target='_blank'>Denizen</a>, <a href='https://mythiccraft.io/' target='_blank'>Mythicmobs</a> Scripting Languages, as well as <a href='https://https://www.python.org/' target='_blank'>Python</a> on the side.</Text>
                <Text size="lg">Currently learning C# as I am interested in future creations using the <a href='https://godotengine.org/' target='_blank'>Godot Engine</a> in the near future.</Text>
                <Text size="lg">On the topic of programming languages, I am also capable of writing basic sites using HTML, CSS and Javascript and currently learning to use the web framework <a href='https://vitejs.dev/' target='_blank'>Vite</a> alongside the <a href='https://react.dev/' target='_blank'>React</a> library.</Text>
                <Space h="xs" />
                <Text size="lg">I am also interested in some music creation, specifically Note Block Songs made to work in <a href='https://www.minecraft.net/' target='_blank'>Minecraft</a> using <a href='https://opennbs.org' target='_blank'>Open Note Block Studio</a></Text>
                <Text size="lg">I have a few original compositions that i've written that can be found below, or on my <a href='https://www.youtube.com/@hypigler' target='_blank'>Youtube Channel</a>, alongside various remixes i've made.</Text>
                <Text size="lg">My style is mostly inspired by <a href='https://www.youtube.com/@ShinkoNet' target='_blank'>ShinkoNet</a>.</Text>
              </Paper>
            </Grid.Col>
            <Grid.Col span={12}>
              <Paper shadow="xl" radius="md" p="xl" withBorder>
                <Title order={2} size="h1">My Various Works</Title>
                <Space h="xl" />
                <Grid gutter={{ base: 25, xs: 25, md: 18, xl: 25 }} justify="center">
                  <Grid.Col span={6}>
                    <Card shadow="md" padding="lg" radius="md" component="a" href="https://www.youtube.com/playlist?list=PLoMC3NlGkh-Vtuc3mlYZJFxW5WrZiHWGb" target="_blank" withBorder>
                      <Card.Section>
                        <Image src={thumb1} alt="Minecraft Server Creations"/>
                      </Card.Section>
                      <Group justify="center" mt="xs">
                        <Text fw={500}>Minecraft Server Creations</Text>
                      </Group>
                      <Text size="sm" c="dimmed">My Denizen and MythicMobs scripting creations.</Text>
                    </Card>
                  </Grid.Col>
                  <Grid.Col span={6}>
                    <Card shadow="md" padding="lg" radius="md" component="a" href="https://drive.google.com/drive/folders/1uq2Es6sONFJcoKRy9cq9oS-JG28p1J36?usp=sharing" target="_blank" withBorder>
                      <Card.Section>
                        <Image src={thumb2} alt="3"/>
                      </Card.Section>
                      <Group justify="center" mt="xs">
                        <Text fw={500}>Blender and Mine-Imator Creations</Text>
                      </Group>
                      <Text size="sm" c="dimmed">My various renders I've made over the years.</Text>
                    </Card>
                  </Grid.Col>
                  <Grid.Col span={6}>
                    <Card shadow="md" padding="lg" radius="md" component="a" href="https://drive.google.com/drive/folders/1FsmNwIl_f2qX2v1-E4yJYL3CgBe8Bjia?usp=sharing" target="_blank" withBorder>
                      <Card.Section>
                        <Image src={thumb3} alt="3"/>
                      </Card.Section>
                      <Group justify="center" mt="xs">
                        <Text fw={500}>Server Designs & Ideas</Text>
                      </Group>
                      <Text size="sm" c="dimmed">Some mechanics I've implemented on my Old 2021 Server, mainly class abilities.</Text>
                    </Card>
                  </Grid.Col>
                  <Grid.Col span={6}>
                    <Card shadow="md" padding="lg" radius="md" component="a" href="https://www.youtube.com/playlist?list=PLoMC3NlGkh-Xvz4j6LzqOhIr9hGTUe95L" target="_blank" withBorder>
                      <Card.Section>
                        <Image src={thumb4} alt="3"/>
                      </Card.Section>
                      <Group justify="center" mt="xs">
                        <Text fw={500}>Note Block Song Creations</Text>
                      </Group>
                      <Text size="sm" c="dimmed">Original Minecraft note block songs that I've composed.</Text>
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
            </Group>
            <Space h="md" />
            <Text c="dimmed">Website created with React and Mantine.</Text>
            <Text c="dimmed">© 2024 Pigler</Text>
          </Container>
        </Group>
      </MantineProvider>
    </>
  )
}

export default App
