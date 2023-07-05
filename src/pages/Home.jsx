import { useEffect, useState } from 'react';
import { Box, Button, Text } from 'rebass'
import { Label, Textarea } from '@rebass/forms'

import Spinner from '../components/Spinner';

const BESHY_OPTIONS = [
    { id: 1, value: '🤸' },
    { id: 2, value: '🤸🏻' },
    { id: 3, value: '🤸🏼' },
    { id: 4, value: '🤸🏽' },
    { id: 5, value: '🤸🏾' },
    { id: 6, value: '🤸🏿' }
];

const Home = props => {
    const [text, setText] = useState('');
    const [converetedText, setConveretedText] = useState('');
    const [selectedBeshy, setSelectedBeshy] = useState('🤸');
    const [isLoading, setIsLoading] = useState(true);
    const [isCopied, setIsCopied] = useState(false);


    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 3000)
    }, []);

    const handleConvert = () => {
        if (text && selectedBeshy) {
            setIsCopied(false);
            let formattedText = text.replaceAll(/\s\s+/g, ' ');
            formattedText = formattedText.replaceAll(' ', selectedBeshy);
            setConveretedText(formattedText);
        }
        else{
            setConveretedText('');
        }
    };

    const handleInputChange = e => {
        setText(e.target.value);
    };

    const handleSelectIcon = value => () => {
        setSelectedBeshy(value);
    };

    const handleClear = () => {
        setText('');
        setConveretedText('');
        setSelectedBeshy('🤸');
    }

    const handleCopy = () => {
        if (text && selectedBeshy && converetedText) {
            setIsCopied(true);
            navigator.clipboard.writeText(converetedText);

            setTimeout(() => {
                setIsCopied(false);
            }, 3000);
        }
    }

    return <Box sx={{
        maxWidth: 1000,
        height: '100vh',
        mx: 'auto',
        py: 12,
        px: 3
    }}>
        {isLoading ? <Spinner /> : <>
            <Box>
                <Text
                    fontSize={[4]}
                    fontWeight='bold'
                    color='primary'>
                    Beshy Text Generator
                </Text>
            </Box>
            <Box sx={{
                marginTop: 2
            }}>
                <Label htmlFor='comment'>Message</Label>
                <Textarea
                    onChange={handleInputChange}
                    value={text}
                    id='message'
                    name='message'
                    placeholder='Please enter your message'
                    rows={7}
                    style={{ fontSize: 20 }}
                />

            </Box>
            <Box sx={{
                marginTop: 2
            }}>

                <Text
                    fontSize={[4]}
                    fontWeight='bold'
                    color='primary'>
                    Choose your beshy
                </Text>


                <Box
                    sx={{
                        display: 'grid',
                        gridGap: 9,
                        gridTemplateColumns: 'repeat(auto-fit, minmax(128px, 1fr))',
                    }}>

                    {BESHY_OPTIONS.map(opt => {
                        return <Box
                            key={opt.id}
                            onClick={handleSelectIcon(opt.value)}
                            p={3}
                            style={{
                                backgroundColor: opt.value === selectedBeshy ? 'gray' : 'white',
                                borderRadius: 20,
                                cursor: 'pointer',
                                textAlign: 'center'
                            }}>
                            <Text
                                fontSize={[5]}
                                fontWeight='bold'
                                color='primary'>
                                {opt.value}

                            </Text>
                            <Text
                                fontSize={[2]}
                                fontWeight='bold'
                                color='primary'>
                                Beshy #{opt.id}

                            </Text>

                        </Box>
                    })}
                </Box>

            </Box>
            <Box sx={{
                marginTop: 5,
                paddingBottom: 12
            }}>
                <Button onClick={handleConvert} style={{
                    backgroundColor: 'blue',
                    width: '100%',
                    fontWeight: 'bolder',
                    cursor: 'pointer'
                }} mr={2}>Generate Beshy Text</Button>
                <Button onClick={handleClear}
                    style={{
                        backgroundColor: 'white',
                        borderColor: 'blue',
                        borderWidth: 1,
                        color: 'blue',
                        width: '100%',
                        fontWeight: 'bolder',
                        cursor: 'pointer',
                        marginTop: 12
                    }} mr={2}>
                        Clear All
                    </Button>
                    
            </Box>


            {converetedText && <Box sx={{
                marginTop: 3,
                backgroundColor: '#dbdbdb',
                borderRadius: 10,
                padding: 12,
                maxHeight: 250,
                overflowY:'scroll',
                wordWrap: 'break-word'
            }}>

                <Text
                    fontSize={[4]}
                    color='primary'>
                    {converetedText}
                </Text>

            </Box>}

            {converetedText && <Box sx={{
                marginTop: 3,
                marginBottom: 12
            }}>
                <Button onClick={handleCopy} style={{ 
                    backgroundColor: 'gray', 
                    fontWeight: 'bolder', 
                    cursor: 'pointer', 
                    float: 'right', 
                    marginBottom: 12 
                }} mr={2}>{isCopied ? 'Copied!' : 'Copy'}</Button>
            </Box>}

        </>}


    </Box >
};

export default Home;