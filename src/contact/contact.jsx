import React from 'react';
import {headerStyles, symbolColor} from '../constants/styles'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {Button} from 'react-bootstrap'
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { List } from 'antd';



const dataNeeded= [
    "505 victims list",
    "A collection of millitary's crime evidences since the start of revolution (photos and videos)",
    'Junta and their family members, business & organization lists',


  ];

  
const Contact=  React.memo(() =>{
    return(
        <>
        <h3 style={headerStyles}>
            If there is anything need to update, please FEEL FREE to contact my email:
        </h3>

        <br/>

        <Button href= "mailto:mmpa19@gmail.com" target="_blank" style={{width: "200px", height: "30px", padding: "2px", margin: '10px'}} variant="outline-light" > 
                      <FontAwesomeIcon icon={faEnvelope} color={symbolColor} />
        </Button>
        <br/>
        <h3 style={headerStyles}>
            Everyone is welcome to contribute. If you would like to collaborate, the Pull Request can be found here:
        </h3>
        <br/>
        <Button href="https://github.com/lorance19/springrevolution" target="_blank" style={{width: "200px", height: "30px", padding: "2px", margin: '10px'}} variant="outline-light" > 
                      <FontAwesomeIcon icon={faGithub} color={symbolColor} />
        </Button>
        <br/>
        <h4 style={headerStyles}>
            If you have data about the followings, please contact me or send me through email:
            </h4>
            <br/>
        <List
            
            size="small"
            bordered
            dataSource={dataNeeded}
            renderItem={item => <List.Item style={{color: symbolColor}}>{item}</List.Item>}
    />


        </>
    )

})


export default Contact