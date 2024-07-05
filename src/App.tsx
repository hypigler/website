import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';

import { Container, Group, Image, Paper, Space, Text, Title, Grid } from "@mantine/core";
import './App.css'

const banner = "images/web-banner.png";

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
                <Title order={2} size="h1">Game-Related Works (Denizen & MythicMobs)</Title>
                <Space h="xl" />
                <iframe width="512" height="288" src="https://www.youtube.com/embed/aHOHk0QCTAY" title="2021 stye co-op boss fight" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                <Text size="lg">Mini Boss Fight made by me back in 2021 using MythicMobs for an old minecraft server.</Text>
                <Space h="xl" />
                <iframe width="512" height="288" src="https://www.youtube.com/embed/9AhpNRRbiCE" title="necron doom megacollab test" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                <Text size="lg">"Animation" made by me using Denizen for an upcoming mega note block song mash-up.</Text>
                <Text size="lg">The players are controlled by a movement recording script i had made and used to record my movement paths one by one and to replay movements on fake player npcs.</Text>
                <Text size="lg">Then used <a href='https://www.replaymod.com/' target='_blank'>Replay Mod</a> to create smooth camera paths. "Necron Doom" song remixed by me.</Text>
              </Paper>
            </Grid.Col>
            <Grid.Col span={12}>
              <Paper shadow="xl" radius="md" p="xl" withBorder>
                <Title order={2} size="h1">Original Compositions</Title>
                <Space h="xl" />
                <iframe width="512" height="288" src="https://www.youtube.com/embed/RMdrlMXxRFk" title="Pigler&#39;s Domain OST » Raedon&#39;s Theme (Unused)" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                <Text size="lg">A Boss Theme made in 2021. Unused Song for a boss fight in my old Minecraft Server.</Text>
                <Space h="xl" />
                <iframe width="512" height="288" src="https://www.youtube.com/embed/W33sbxerFHA" title="Hypixel&#39;s 10 Year Anniversary Contest Noteblock Song Submission » Rift Lords" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                <Text size="lg">A Boss Theme made in 2023 for the Hypixel 10th Anniversary Note Block Contest.</Text>
                <Space h="xl" />
                <iframe width="512" height="288" src="https://www.youtube.com/embed/ti2Z4BifMtY" title="Minecraft Note Block Composition » Difference" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                <Text size="lg">An Ambient Theme made in 2024 for an unsettling situation in an underground area.</Text>
                <Space h="xl" />
                <Text size="lg"><a href='https://www.youtube.com/@hypigler' target='_blank'>Check out my Youtube Channel for song remixes!</a></Text>
              </Paper>
            </Grid.Col>
          </Grid>
        </Group>
      </MantineProvider>
    </>
  )
}

export default App
