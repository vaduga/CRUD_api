
import 'dotenv/config'
import {v4 as uuidv4} from 'uuid';

import { createServer, IncomingMessage, ServerResponse } from 'http';
 
const persons: {
  id: string,
  username: string,
  age: number,
  hobbies: string[] | []}[] = [
    {
      id: uuidv4(),
      username: "Vasya",
      age: 5,
      hobbies: []
    }
  ];
   
  const server = createServer((request: IncomingMessage, response: ServerResponse) => {
    switch (request.url) {
      case '/api/users': {
        if (request.method === 'GET') {
          response.end(JSON.stringify(persons));
        }
        break;
      }
      default: {
        response.statusCode = 404;
        response.end();
      }
    }
  });

  server.listen(process.env.PORT, () => {
    
      console.log(`Server listening on port ${process.env.PORT}`);
   
  });