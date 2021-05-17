import * as contains from '../Contains/contains';
import io from 'socket.io-client';

const sendMsg = (value) => {
	var socket = io('localhost:8080/', {
		transports: ['websocket'],
	});
	socket.emit('chat', value);
};

export { sendMsg };
