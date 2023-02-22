import React, { useState } from "react";

import { Panel, PanelHeader, Header, Group, PanelHeaderBack, FormItem, Input, FormLayout } from '@vkontakte/vkui';

const Addr = ({ id, go}) => {
    const [inputOne, setInputOne] = useState('');
    const  getSuggest = async(textMessage)=>{
        await fetch(`https://catalog.api.2gis.com/3.0/suggests?q=${textMessage}&location=37.630866,55.752256&key=6eaf2aea-95d4-42f6-895a-8e164bb6fe5f`)
        .then(response=>response.json())
        .then(data =>{
            console.log(data)
        })
        .catch(error=>{
            console.error(error);
        });
    }
	return (
    <Panel id={id}>
		<PanelHeader 
            left={<PanelHeaderBack onClick={go} data-to="home"/>}>
            НайдиШавуху
        </PanelHeader>
		

		<Group header={<Header mode="secondary">Определение по адресу</Header>}>
            <FormLayout>
                <FormItem top="Ваш адрес" >
                    <Input
                    before={undefined}
                    after={undefined}
                    type="text"
                    align={"left"}
                    placeholder={"Ваш адрес"}
                    disabled={false}
                    onChange={(event) => {setInputOne(event.target.value); getSuggest(inputOne)}}
                    />
                </FormItem>
            </FormLayout>
		</Group>
	</Panel>
    )
};



export default Addr;