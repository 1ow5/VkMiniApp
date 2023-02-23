import React, { useState } from "react";

import { Panel, PanelHeader, Header, Group, PanelHeaderBack, FormItem, Input, FormLayout,Button } from '@vkontakte/vkui';

const Addr = ({ id, go}) => {
    const [inputOne, setInputOne] = useState('');
    const  getSuggest = async(textMessage)=>{
        await fetch(`https://catalog.api.2gis.com/3.0/suggests?q=${textMessage}&location=Челябинск&key=rujrts5550`)
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
            <Button stretched size="l" mode="secondary" onClick={go} data-to="byAddres" style={{ marginBottom: 16, width:"100%" }}>
			    Подтвердить
		    </Button>
		</Group>
        
	</Panel>
    )
};



export default Addr;