import React, { useState } from "react";

import { Panel, PanelHeader, Header, Group, PanelHeaderBack, FormItem, Input, FormLayout } from '@vkontakte/vkui';

const Addr = ({ id, go}) => {

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
                    />
                </FormItem>
            </FormLayout>
		</Group>
	</Panel>
    )
};



export default Addr;