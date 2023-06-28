import React from 'react'
import { Card, Image } from 'semantic-ui-react'

const ProfileCard = () => (
    <div className='profileCard'>
        <div className='profileCardLeft'>

        <Card>
            <Image src='https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cG9ydHJhaXR8ZW58MHwxfDB8fHwy&auto=format&fit=crop&w=400&q=60' wrapped ui={false} />
            <Card.Content>
                <Card.Header>Patricia Doe</Card.Header>
                <Card.Meta>
                    <span className='date'>sesinol242@eimatro.com</span>
                </Card.Meta>
                <Card.Description>
                    Patricia is a licensed professional who represents buyers or sellers in real estate transactions.
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
            
            (786) 449-4345
            </Card.Content>
        </Card>
        </div>


        <div className='profileCardRight'>

        <Card>
            <Image src='https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBvcnRyYWl0fGVufDB8MXwwfHx8Mg%3D%3D&auto=format&fit=crop&w=400&q=60' wrapped ui={false} />
            <Card.Content>
                <Card.Header>Charles Doe</Card.Header>
                <Card.Meta>
                    <span className='date'>sesinol242@eimatro.com</span>
                </Card.Meta>
                <Card.Description>
                Charles is a licensed professional who represents buyers or sellers in real estate transactions.
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
            
            (407) 413-5892
            </Card.Content>
        </Card>
        </div>

    </div>

)

export default ProfileCard;