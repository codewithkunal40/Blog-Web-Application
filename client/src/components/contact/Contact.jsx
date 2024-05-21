
import { Box, styled, Typography, Link } from '@mui/material';
import { GitHub, Instagram, Email,Twitter, LinkOffOutlined } from '@mui/icons-material';

const Banner = styled(Box)`
    background-image: url(http://mrtaba.ir/image/bg2.jpg);
    width: 100%;
    height: 50vh;
    background-position: left 0px top -100px;
    background-size: cover;
`;

const Wrapper = styled(Box)`
    padding: 20px;
    & > h3, & > h5 {
        margin-top: 50px;
    }
`;

const Text = styled(Typography)`
    color: #878787;
`;


const Contact = () => {
    return (
        <Box>
            <Banner />
            <Wrapper>
                <Typography variant="h3">Getting in touch with Kunal Raj Pandey is easy!</Typography>    
                <Text variant="h5">
                    Reach out to me on 
                    <Link href="https://www.instagram.com/kunal_raj_pandey" color="inherit" target="_blank">
                        <Instagram/>
                    
                    </Link>

                    or send me an Email 
                    <Link href="mailto:pandeykunalraj@gmail.com?Subject=This is a subject" target="_blank" color="inherit">
                        <Email />
                    </Link>.
                    Or you can call on this number : 9565816219
                    Or you can contact on twitter here:
                    <Link href="https://x.com/kunalrp007?t=eq5OO1ZY0oxNNEmmxyLOdA&s=08 " color="inherit" target="_blank">
                        <Twitter/>
                        </Link>
                </Text>
            </Wrapper>
        </Box>
    );
}

export default Contact;