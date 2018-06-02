import { Handler, Context, Callback } from 'aws-lambda';

interface HelloResponse {
  statusCode: number;
  body: string;
}

const hello: Handler = (event: any, context: Context, callback: Callback) => {
  console.log('Sample Lambda Invoke');

  //callback(undefined, response);
};

export { hello }