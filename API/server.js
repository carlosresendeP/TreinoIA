import express from 'express';
import routerRevenue from './src/routes/revenue.route.js';
import cors from 'cors';
const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json('')); //Troque o URL para o seu frontend ou deixe vazio para aceitar qualquer origem


app.use('/api/treinos', routerRevenue);

app.listen(PORT, () => {console.log(`🚀 Servidor Rodando na porta http://localhost:${PORT}`);});

