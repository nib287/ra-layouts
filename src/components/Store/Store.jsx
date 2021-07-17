import React from 'react';
import './Store.css';
import IconSwitch from '../IconSwitch/IconSwitch';
import CardsView from '../CardsView/CardsView';
import ListView from '../ListView/ListView';

function Store({products}) {
	const [state, setState] = React.useState('view_list');
	const onSwitch = () => {
		if(state === 'view_list') {
			setState('view_module')
		} else {
			setState('view_list')
		}
	}
	
	return (
		<div className='Store'>
			<IconSwitch icon={state} onSwitch={onSwitch} />
			{state === 'view_module' ? <ListView items={products} /> : <CardsView cards={products} />}
		</div>
	)
}

export default Store;


