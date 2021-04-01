import React from 'react'

import Topbar from '../Components/Topbar';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';

import Button from '@material-ui/core/Button';

const Home = () => {
    return (
        <div>
            <Topbar />
            <Card style={{
                width:"50%",
                height:"70vh",

                borderRadius:"30px",

                textAlign:"center",
                justifyContent:"center",
                alignContent:"center",

                backgroundColor:"#4a4c55",
                
                marginLeft:"25%",
                marginTop:"5%"
            }}>
                <CardContent style={{
                    textAlign:"center",
                    justifyContent:"center",
                    alignContent:"center",
                    marginTop:"100px",
                    color:"white",
                    fontSize:"20px",
                }}>
                    Hey I'm Senko. Currently a programmer, working on the ROBLOX, Unity engines. I have also started to learn web development as well.
                </CardContent>
                <CardActions style={{
                    alignItems:"center",
                    justifyItems:"center",
                    justifyContent:"center",

                }}>
                    <Button size="small" variant="contained">More About Me</Button>
                </CardActions>
            </Card>
        </div>
    )
}

export default Home
