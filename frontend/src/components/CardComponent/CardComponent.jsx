import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import images from '../../assets/images/service/cattiaboss.jpg'
import ButtonComponent from '../ButtonComponent/ButtonComponent';
// import { Image } from 'antd';

const CardComponent = () => {


    return (
        <div>

            <Card sx={{ maxWidth: 300 }}>
                <CardActionArea>
                    {/* <Image src={images} /> */}
                    <a href="/detail">
                        <CardMedia
                            component="img"
                            height="200"
                            image={images}
                            alt="Picture"

                        />
                    </a>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Lizard
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                        </Typography>
                        <Typography style={{ textAlign: "right" }}>
                            {/* <a href="/order">Đặt hẹn</a> */}
                            <ButtonComponent
                                bordered={false}
                                size={40}
                                styleButton={{
                                    background: "#be9660",
                                    height: "40px",
                                    width: "100px",
                                    border: "none",
                                    borderRadius: "5px",
                                    margin: "10px 0px 0px"

                                }}
                                textButton={'Đặt hẹn'}
                                styleTextButton={{
                                    color: "#fff",
                                    alignItem: "center",
                                    fontSize: "16px",
                                    fontWeight: "500"
                                }}
                            >
                            </ButtonComponent>
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>


        </div>
    )
}

export default CardComponent