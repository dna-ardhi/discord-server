import * as dotenv from 'dotenv';
import app from '.';

dotenv.config();

const PORT = process.env.PORT ?? 3000;

app.listen(PORT,  () => {
  console.log(`listening on port ${PORT}`);
});