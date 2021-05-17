import './App.css';
import React, { useState } from 'react';

import { sendMsg } from './Components/connectSocket';

function App() {
	const [msg, setMsg] = useState('');
	return (
		<div className="App">
			<input onChange={(e) => setMsg(e.target.value)} value={msg} />
			<button
				onClick={() => {
					sendMsg(msg);
					setMsg('');
				}}
			>
				Gửi
			</button>
		</div>
	);
}

export default App;
