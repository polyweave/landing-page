import React, { Component } from 'react';
import Typed from 'typed.js'
import {Flex, Text} from "rebass";

class Terminal extends Component {
    componentDidMount() {
        const options = {
            strings: ['curl https://api.polyweave.xyz/v1/solana/transactions?address=5ysepZzWuVQrkk74jGJhKFu3yevUVG93xQkqREkBaDVv'],
            typeSpeed: 35,
            backSpeed: 50,
            showCursor: false,
            onComplete: function(){
                new Promise(r => setTimeout(r, 400)).then(() => {
                    document.getElementById("json-response").style.visibility = "visible";
                });
            }
        };
        // this.el refers to the <span> in the render() method
        this.typed = new Typed('.typing', options);
    }

    render() {
        var json = "[{\"type\": \"nft_sale\", \"title\": \"Magic Eden Sale of Degod #4321\", \"amount\": 8.3, \"metadata\": {\"nft\": {\"rarity\": 481, \"floor_price\": 81.2, \"image_url\": \"api.polyweave.xyz/nfts/images/ahgyf2rxz.png\"}}},{\"type\": \"swap\", \"title\": \"Swap SOL for ORCA\", \"amount\": 321.8, \"metadata\": {\"swap\": {\"slippage\": 0.8}}}]"

        return (
            <Flex
                px={[3, 5]}
                py={[3, 4]}
                width={['100%', '900px']}
                justifyContent={'center'}
            >
                <Flex
                    sx={{
                        width: ['100%', '700px'],
                        margin: '10px',
                        minHeight: '300px',
                        background: '#191814',
                        borderRadius: '10px',
                        flexDirection: 'column',
                        flexWrap: 'wrap',
                        alignItems: 'flex-start'
                    }}
                >
                    <Flex
                        sx={{
                            height: '20px',
                            background: '#efefef',
                            width: '100%',
                            borderRadius: '10px 10px 0px 0px',
                            alignItems: 'center',
                        }}
                    >
                        <Flex sx={{ backgroundColor: '#fb574e', width: '0.75rem', height: '0.75rem', borderRadius: '0.75rem', marginLeft: '8px'}}></Flex>
                        <Flex sx={{ backgroundColor: '#fbbd2e', width: '0.75rem', height: '0.75rem', borderRadius: '0.75rem', marginLeft: '8px'}}></Flex>
                        <Flex sx={{ backgroundColor: '#51e05d', width: '0.75rem', height: '0.75rem', borderRadius: '0.75rem', marginLeft: '8px'}}></Flex>
                    </Flex>
                    <Flex sx={{flex: 2, padding: '10px', width: '100%', flexDirection: 'column', flexWrap: 'wrap'}}>
                        <Text sx={{fontFamily: 'B612 Mono', color: 'white', fontSize: '18px', width: '100%'}}>$ <span class={'typing'} style={ {overflowWrap: 'break-word'}}></span></Text>
                        <br />
                        <Text id={'json-response'} sx={{width: '100%', fontFamily: 'B612 Mono', color: 'white', fontSize: '18px', visibility: 'hidden', overflowWrap: 'break-word'}}>{json}</Text>
                    </Flex>
                </Flex>
            </Flex>
        );
    }
}



export default Terminal;