import { Flex, Image, Link, Box, Heading, Button, Text } from 'rebass';
import Terminal from "./Terminal";

import logo from './Logo.png'
import sectionLogo from './sectionLogo.png'


function App() {
    return (
        <Flex
            sx={{
                width: '100%',
                justifyContent: 'center',
                flexDirection: 'row',
                flexWrap: 'wrap',
            }}
        >
            {/* Navbar */}
            <Flex
                px={[3, 5]}
                py={[3, 4]}
                width={['100%', '900px']}
                sx={{
                    alignItems: 'center',
                }}
            >
                <Image src={logo} sx={{ height: 100 }} />
                <Box mx='auto' />
                <Link
                    sx={{
                        color: 'black',
                        margin: '20px',
                        textDecoration: 'none'
                    }}
                    target={'_blank'}
                    href={'https://polyweave.notion.site/polyweave/Polyweave-0c385b22a30a41a0a9568d6f8c6f46a7'}
                >
                    About
                </Link>
                {/*<Link*/}
                {/*    sx={{*/}
                {/*        color: 'black',*/}
                {/*        textDecoration: 'none'*/}
                {/*    }}*/}
                {/*    target={'_blank'}*/}
                {/*    href={'https://polyweave.notion.site/polyweave/Polyweave-0c385b22a30a41a0a9568d6f8c6f46a7'}*/}
                {/*>*/}
                {/*    Careers*/}
                {/*</Link>*/}
            </Flex>
            {/* Header */}
            <Flex
                px={[3, 5]}
                py={[3, 4]}
                width={['100%', '900px']}
            >
                <H1Header width={'100%'} >Powerful APIs for Highly Contextual Blockchain Data</H1Header>
            </Flex>
            {/* Action button */}
            <Flex
                px={[3, 5]}
                py={[3, 4]}
                width={['100%', '900px']}
                justifyContent={'center'}
            >
                <a href='https://airtable.com/shrr59NnMHu0ZiCED' target={'_blank'}>
                    <Button
                        sx={{
                            backgroundColor: '#191814',
                            fontSize: ['16px', '24px'],
                            borderRadius: '50px',
                            fontFamily: 'Montserrat',
                            fontWeight: '600',
                            ":hover": {
                                cursor: 'pointer'
                            }
                        }}
                    >
                        Request Early Access
                    </Button>
                </a>
            </Flex>
            {/* Terminal */}
            <Terminal />

            {/* Info cards*/}
            <Flex
                px={[3, 5]}
                py={[3, 4]}
                width={['100%', '900px']}
                justifyContent={'space-between'}
                flexWrap={'wrap'}
            >
                <Flex
                    sx={{
                        width: ['100%', '250px'],
                        flexWrap: 'wrap',
                        alignContent: 'flex-start',
                        my: ['20px', '0px']
                    }}
                >
                    <Flex width={'100%'}>
                        <Image src={sectionLogo} mb={'10px'} width={'35px'}/>
                    </Flex>
                    <H2Header>Human-readable Data</H2Header>
                    <BodyText>Gone are the days of unreadable cryptic hashes. Human readable tagging and actually useful datapoints on everything</BodyText>
                </Flex>
                <Flex
                    sx={{
                        width: ['100%', '250px'],
                        flexWrap: 'wrap',
                        alignContent: 'flex-start',
                        my: ['20px', '0px']
                    }}
                >
                    <Flex width={'100%'}>
                        <Image src={sectionLogo} mb={'10px'} width={'35px'}/>
                    </Flex>
                    <H2Header>Enterprise Grade Reliability</H2Header>
                    <BodyText>Tight SLAs. Built by a team that has shipped services to millions of users and served billions of requests</BodyText>
                </Flex>
                <Flex
                    sx={{
                        width: ['100%', '250px'],
                        flexWrap: 'wrap',
                        alignContent: 'flex-start',
                        my: ['20px', '0px']
                    }}
                >
                    <Flex width={'100%'}>
                        <Image src={sectionLogo} mb={'10px'} width={'35px'}/>
                    </Flex>
                    <H2Header>Multichain by Default</H2Header>
                    <BodyText>Easily integrate many chains. Fetch multichain balances and display NFT galleries cross chain</BodyText>
                </Flex>
            </Flex>

            {/* Footer */}
            <Flex
                px={[3, 5]}
                py={[3, 4]}
                width={['100%', '900px']}
                justifyContent={'center'}
            >
                <BodyText>
                    <Link href={'https://twitter.com/PolyweaveAPI'} target={'_blank'} sx={{color: 'black', margin: '5px'}}><i className="fa-brands fa-twitter"></i></Link>
                    <Link href={'mailto:contact@polyweave.xyz'} target={'_blank'} sx={{color: 'black', margin: '5px'}}><i className="fa-solid fa-envelope"></i></Link>
                </BodyText>
            </Flex>
        </Flex>
    );
}

const H1Header = props =>
    <Heading
        {...props}
        sx={{
            fontFamily: 'Montserrat',
            fontWeight: 'medium',
            fontSize: [5, 6],
            textAlign: 'center'
        }}
    />

const H2Header = props =>
    <Heading
        {...props}
        sx={{
            fontFamily: 'Montserrat',
            fontWeight: 'medium',
            fontSize: '24px',
            textAlign: 'left',
            marginY: '10px'
        }}
    />

const BodyText = props =>
    <Text
        {...props}
        sx={{
            fontFamily: 'Montserrat',
            fontSize: 2,
            textAlign: 'left',
            color: '#242424',
            fontSize: '18px',
        }}
    />

export default App;
