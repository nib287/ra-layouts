import React from 'react';
import './Store.css';
import IconSwitch from '../IconSwitch/IconSwitch';
import CardsView from '../CardsView/CardsView';
import ListView from '../ListView/ListView';

function Store({products}) {
	const [state, setState] = React.useState('view_module');
	return (
		<div className='Store'>
			<IconSwitch icon={"view_module"} onSwitch={(e) => console.log(e)} />
			{state === 'view_module' ? <CardsView cards={products} /> : <ListView cards={products} />}
		</div>
	)
}

export default Store;


// view_module  view_list


