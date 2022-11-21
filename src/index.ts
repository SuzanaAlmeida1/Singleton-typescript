import "dotenv/config";


const app = new App();

const port = process.env.PORT ? (process.env.PORT as unknown as mumber) : 3000;

app.setup({port});